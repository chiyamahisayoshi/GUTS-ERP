import * as THREE from 'three';

export type InspectionDamageType = {
  id: number; name: string; icon: string; color: string; built_in_key?: string | null;
};

export type InspectionMark = {
  id: string; damage_type_id: number; x: number; y: number;
  world_x?: number | null; world_y?: number | null; world_z?: number | null;
  world_nx?: number | null; world_ny?: number | null; world_nz?: number | null;
};

export function mountParkingInspection(
  container: HTMLElement,
  damageTypes: InspectionDamageType[],
  initialMarks: InspectionMark[],
  onChange: (marks: InspectionMark[]) => void,
  paletteContainer: HTMLElement = container
) {
  const canvas = document.createElement('canvas');
  canvas.className = 'parking-inspection-canvas';
  canvas.setAttribute('aria-label', '3D車両を回転し損傷箇所をクリックして記録');
  container.replaceChildren(canvas);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#f2f6f9');
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 40);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  scene.add(new THREE.HemisphereLight('#ffffff', '#73879a', 2));
  const light = new THREE.DirectionalLight('#ffffff', 3);
  light.position.set(-4, 7, 5);
  scene.add(light);

  const car = new THREE.Group();
  scene.add(car);
  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: '#d8e3e9', metalness: 0.18, roughness: 0.32, clearcoat: 0.8
  });
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: '#183348', metalness: 0.18, roughness: 0.2, clearcoat: 1
  });
  const trimMaterial = new THREE.MeshStandardMaterial({ color: '#263746', roughness: 0.45 });
  const surfaceMeshes: THREE.Mesh[] = [];
  const addPanel = (points: number[][], depth: number, material: THREE.Material, z: number) => {
    const shape = new THREE.Shape();
    shape.moveTo(points[0][0], points[0][1]);
    for (const [x, y] of points.slice(1)) shape.lineTo(x, y);
    shape.closePath();
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.04, bevelThickness: 0.04
    });
    geometry.translate(0, 0, z);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    car.add(mesh);
    surfaceMeshes.push(mesh);
  };
  addPanel([
    [-2.22, 0.42], [-2.06, 0.72], [-1.5, 0.83], [-1.13, 1.02],
    [-0.82, 1.57], [-0.44, 1.76], [0.58, 1.74], [1.08, 1.45],
    [1.52, 0.91], [2.02, 0.78], [2.2, 0.56], [2.13, 0.32], [-2.08, 0.32]
  ], 1.46, bodyMaterial, -0.73);
  for (const side of [-1, 1]) {
    const z = side * 0.73;
    addPanel([[-0.94, 1.15], [-0.67, 1.52], [-0.37, 1.63], [-0.3, 1.15]], 0.018, glassMaterial, z);
    addPanel([[-0.21, 1.15], [-0.2, 1.63], [0.5, 1.61], [0.84, 1.34], [0.7, 1.15]], 0.018, glassMaterial, z);
    for (const x of [-1.35, 1.28]) {
      const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.39, 0.39, 0.25, 24), trimMaterial);
      tire.rotation.x = Math.PI / 2;
      tire.position.set(x, 0.43, z);
      car.add(tire);
    }
  }
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshStandardMaterial({ color: '#edf2f6', roughness: 0.95 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.04;
  scene.add(floor);

  let theta = 0.82;
  let phi = 1.18;
  let pointer: { id: number; x: number; y: number; moved: boolean } | null = null;
  let palettePointer: {
    id: number; typeId: number; startX: number; startY: number; moved: boolean; ghost: HTMLElement | null;
  } | null = null;
  let selectedTypeId: number | null = null;
  let marks = [...initialMarks];
  const markerGroups: THREE.Group[] = [];
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const setCamera = () => {
    const radius = 7.7;
    camera.position.set(
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.cos(theta)
    );
    camera.lookAt(0, 0.86, 0);
  };
  const render = () => renderer.render(scene, camera);
  const positionOf = (mark: InspectionMark) => {
    if ([mark.world_x, mark.world_y, mark.world_z].every(Number.isFinite)) {
      return new THREE.Vector3(mark.world_x!, mark.world_y!, mark.world_z!);
    }
    return new THREE.Vector3((mark.x - 0.5) * 3.7, 0.92 + (0.5 - mark.y) * 0.8, 0.76);
  };
  const drawMarks = () => {
    for (const group of markerGroups.splice(0)) {
      car.remove(group);
      group.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
          else object.material.dispose();
        }
      });
    }
    for (const mark of marks) {
      const type = damageTypes.find((item) => item.id === mark.damage_type_id);
      if (!type) continue;
      const group = new THREE.Group();
      group.position.copy(positionOf(mark));
      const normal = new THREE.Vector3(mark.world_nx ?? 0, mark.world_ny ?? 0, mark.world_nz ?? 1);
      if (normal.lengthSq() < 0.01) normal.set(0, 0, 1);
      group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal.normalize());
      const isScratch = type.built_in_key === 'scratch' || type.name.includes('傷');
      const geometry = isScratch
        ? new THREE.TubeGeometry(new THREE.CatmullRomCurve3(Array.from({ length: 25 }, (_, index) => {
          const progress = index / 24;
          return new THREE.Vector3((progress - 0.5) * 0.42, Math.sin(progress * Math.PI * 6) * 0.045, 0);
        })), 48, 0.022, 8, false)
        : new THREE.TorusGeometry(0.115, 0.026, 10, 32);
      const marker = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
        color: type.color, emissive: type.color, emissiveIntensity: 0.65
      }));
      marker.userData.markId = mark.id;
      group.add(marker);
      car.add(group);
      markerGroups.push(group);
    }
    render();
  };
  const castAt = (x: number, y: number) => {
    const bounds = canvas.getBoundingClientRect();
    if (x < bounds.left || x > bounds.right || y < bounds.top || y > bounds.bottom) return [];
    ndc.set(((x - bounds.left) / bounds.width) * 2 - 1, -((y - bounds.top) / bounds.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    return raycaster.intersectObjects([...markerGroups, ...surfaceMeshes], true);
  };
  const makeMark = (typeId: number, hit: THREE.Intersection): InspectionMark => {
    const normalMatrix = new THREE.Matrix3().getNormalMatrix(hit.object.matrixWorld);
    const normal = hit.face!.normal.clone().applyMatrix3(normalMatrix).normalize();
    const point = hit.point.clone().addScaledVector(normal, 0.035);
    return {
      id: crypto.randomUUID(), damage_type_id: typeId,
      x: THREE.MathUtils.clamp((hit.point.x + 2.3) / 4.6, 0, 1),
      y: THREE.MathUtils.clamp(1 - hit.point.y / 1.9, 0, 1),
      world_x: point.x, world_y: point.y, world_z: point.z,
      world_nx: normal.x, world_ny: normal.y, world_nz: normal.z
    };
  };
  const placeAt = (typeId: number, x: number, y: number) => {
    const hit = castAt(x, y).find((item) => surfaceMeshes.includes(item.object as THREE.Mesh));
    if (!hit || !damageTypes.some((type) => type.id === typeId)) return false;
    marks.push(makeMark(typeId, hit));
    onChange(marks);
    drawMarks();
    return true;
  };
  const onPointerDown = (event: PointerEvent) => {
    if (event.button !== 0) return;
    pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false };
    canvas.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event: PointerEvent) => {
    if (!pointer || pointer.id !== event.pointerId) return;
    const dx = event.clientX - pointer.x;
    const dy = event.clientY - pointer.y;
    if (Math.abs(dx) + Math.abs(dy) > 3) pointer.moved = true;
    theta -= dx * 0.009;
    phi = THREE.MathUtils.clamp(phi - dy * 0.006, 0.38, 1.48);
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    setCamera();
    render();
  };
  const onPointerUp = (event: PointerEvent) => {
    if (!pointer || pointer.id !== event.pointerId) return;
    const moved = pointer.moved;
    pointer = null;
    if (moved) return;
    const hits = castAt(event.clientX, event.clientY);
    const marker = hits.find((hit) => typeof hit.object.userData.markId === 'string');
    if (marker) {
      marks = marks.filter((mark) => mark.id !== marker.object.userData.markId);
      onChange(marks);
      drawMarks();
      return;
    }
    if (selectedTypeId !== null) placeAt(selectedTypeId, event.clientX, event.clientY);
  };
  const onPalettePointerDown = (event: PointerEvent) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-damage-type]');
    if (!button) return;
    selectedTypeId = Number(button.dataset.damageType);
    palettePointer = {
      id: event.pointerId, typeId: selectedTypeId,
      startX: event.clientX, startY: event.clientY, moved: false, ghost: null
    };
    button.setPointerCapture(event.pointerId);
    paletteContainer.querySelectorAll('[data-damage-type]').forEach((item) => item.classList.remove('selected'));
    button.classList.add('selected');
    event.preventDefault();
  };
  const onPalettePointerMove = (event: PointerEvent) => {
    if (!palettePointer || palettePointer.id !== event.pointerId) return;
    const drag = palettePointer;
    if (Math.abs(event.clientX - drag.startX) + Math.abs(event.clientY - drag.startY) > 7) {
      drag.moved = true;
    }
    if (!drag.moved) return;
    if (!drag.ghost) {
      const type = damageTypes.find((item) => item.id === drag.typeId);
      drag.ghost = document.createElement('div');
      drag.ghost.className = 'parking-inspection-drag-ghost';
      drag.ghost.style.backgroundColor = type?.color ?? '#b33';
      drag.ghost.textContent = `${type?.icon ?? ''} ${type?.name ?? ''}`;
      document.body.append(drag.ghost);
    }
    drag.ghost.style.left = `${event.clientX}px`;
    drag.ghost.style.top = `${event.clientY}px`;
  };
  const onPalettePointerUp = (event: PointerEvent) => {
    if (!palettePointer || palettePointer.id !== event.pointerId) return;
    const drag = palettePointer;
    palettePointer = null;
    drag.ghost?.remove();
    if (drag.moved) placeAt(drag.typeId, event.clientX, event.clientY);
  };
  const resize = () => {
    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    render();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(container);
  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', () => { pointer = null; });
  paletteContainer.addEventListener('pointerdown', onPalettePointerDown);
  paletteContainer.addEventListener('pointermove', onPalettePointerMove);
  paletteContainer.addEventListener('pointerup', onPalettePointerUp);
  paletteContainer.addEventListener('pointercancel', onPalettePointerUp);
  setCamera();
  drawMarks();
  resize();
  return {
    dispose() {
      observer.disconnect();
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      paletteContainer.removeEventListener('pointerdown', onPalettePointerDown);
      paletteContainer.removeEventListener('pointermove', onPalettePointerMove);
      paletteContainer.removeEventListener('pointerup', onPalettePointerUp);
      paletteContainer.removeEventListener('pointercancel', onPalettePointerUp);
      renderer.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
          else object.material.dispose();
        }
      });
    },
    placeAt,
    setMarks(next: InspectionMark[]) { marks = [...next]; drawMarks(); }
  };
}
