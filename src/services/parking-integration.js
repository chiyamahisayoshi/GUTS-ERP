const BATCH_SIZE = 500;
const DEFAULT_VEHICLE_TYPE = 'その他';

function normalizedPlate(plate) {
  return String(plate ?? '').normalize('NFKC').replace(/\s+/g, '');
}

function endpoint(baseUrl, path) {
  return new URL(path, `${baseUrl.replace(/\/+$/, '')}/`);
}

async function readResponse(response) {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { detail: text.slice(0, 500) };
  }
}

export function createParkingIntegration({ apiUrl, apiKey, fetchImpl = fetch }) {
  return {
    async syncVehicles(vehicles) {
      if (!apiUrl || !apiKey) {
        const error = new Error('駐車場連携が設定されていません。管理者にお問い合わせください。');
        error.code = 'parking_not_configured';
        throw error;
      }

      const request = async (path, method = 'GET', body) => {
        let response;
        try {
          response = await fetchImpl(endpoint(apiUrl, path), {
            method,
            headers: {
              Accept: 'application/json',
              'X-ERP-API-Key': apiKey,
              ...(body === undefined ? {} : { 'Content-Type': 'application/json' })
            },
            ...(body === undefined ? {} : { body: JSON.stringify(body) }),
            redirect: 'error',
            signal: AbortSignal.timeout(15000)
          });
        } catch (cause) {
          const detail = cause instanceof Error ? cause.message.slice(0, 300) : '接続を確認してください。';
          const error = new Error(`駐車場システムに接続できませんでした：${detail}`);
          error.code = 'parking_unavailable';
          throw error;
        }
        const result = await readResponse(response);
        if (!response.ok) {
          const detail = typeof result.detail === 'string' && result.detail
            ? result.detail.slice(0, 500)
            : `HTTP ${response.status}`;
          const error = new Error(`駐車場システムが応答しました（${response.status}）：${detail}`);
          error.code = 'parking_upstream_error';
          error.status = response.status;
          throw error;
        }
        return result;
      };

      const existingResult = await request('integration/vehicles');
      if (!Array.isArray(existingResult.vehicles)) {
        const error = new Error('駐車場システムから車両一覧を取得できませんでした。');
        error.code = 'parking_invalid_response';
        throw error;
      }
      const vehicleTypes = new Map(existingResult.vehicles
        .filter((vehicle) => typeof vehicle.external_id === 'string' &&
          typeof vehicle.vehicle_type === 'string' && vehicle.vehicle_type.trim())
        .map((vehicle) => [vehicle.external_id, vehicle.vehicle_type]));
      const incomingByPlate = new Map(vehicles.map((vehicle) => [
        normalizedPlate(vehicle.registration_number),
        String(vehicle.id)
      ]));
      const legacyCollisions = existingResult.vehicles.filter((vehicle) =>
        incomingByPlate.has(normalizedPlate(vehicle.plate)) &&
        incomingByPlate.get(normalizedPlate(vehicle.plate)) !== vehicle.external_id);
      if (legacyCollisions.length) {
        const plates = [...new Set(legacyCollisions.map((vehicle) => vehicle.plate))].slice(0, 5);
        const error = new Error(
          `駐車場に ERP UUID と一致しない車両があります（${plates.join('、')}）。` +
          '既存データをバックアップし、外部IDを確認してから同期してください。'
        );
        error.code = 'parking_legacy_mapping_conflict';
        throw error;
      }
      const payload = vehicles.map((vehicle) => ({
        external_id: String(vehicle.id),
        plate: vehicle.registration_number,
        vehicle_type: vehicleTypes.get(String(vehicle.id)) || DEFAULT_VEHICLE_TYPE
      }));

      for (let offset = 0; offset < payload.length; offset += BATCH_SIZE) {
        await request('integration/vehicles:sync', 'POST', payload.slice(offset, offset + BATCH_SIZE));
      }
      return { synced: payload.length };
    }
  };
}
