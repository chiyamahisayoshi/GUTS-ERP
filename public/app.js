(()=>{var Gc=0,ml=1,Wc=2;var gl=1,$c=2,vn=3,Pn=0,Ut=1,xn=2,Un=0,mi=1,_l=2,vl=3,xl=4,Xc=5,Zn=100,qc=101,Yc=102,Jc=103,Zc=104,Kc=200,jc=201,Qc=202,eh=203,Zr=204,Kr=205,th=206,nh=207,ih=208,sh=209,rh=210,ah=211,oh=212,lh=213,ch=214,Sa=0,Ea=1,wa=2,gi=3,Ta=4,Aa=5,Ra=6,Ca=7,yl=0,hh=1,uh=2,Nn=0,dh=1,fh=2,ph=3,Ia=4,mh=5,gh=6,_h=7;var bl=300,bi=301,Mi=302,Pa=303,La=304,ar=306,jr=1e3,Jn=1001,Qr=1002,jt=1003,vh=1004;var or=1005;var cn=1006,Da=1007;var ni=1008;var dn=1009,Ml=1010,Sl=1011,rs=1012,Ua=1013,ii=1014,yn=1015,as=1016,Na=1017,Fa=1018,os=1020,El=35902,wl=35899,Tl=1021,Al=1022,en=1023,$i=1026,ls=1027,Rl=1028,Oa=1029,Cl=1030,Ba=1031;var ka=1033,lr=33776,cr=33777,hr=33778,ur=33779,za=35840,Va=35841,Ha=35842,Ga=35843,Wa=36196,$a=37492,Xa=37496,qa=37808,Ya=37809,Ja=37810,Za=37811,Ka=37812,ja=37813,Qa=37814,eo=37815,to=37816,no=37817,io=37818,so=37819,ro=37820,ao=37821,oo=36492,lo=36494,co=36495,ho=36283,uo=36284,fo=36285,po=36286;var As=2300,ea=2301,Jr=2302,il=2400,sl=2401,rl=2402;var xh=3200,yh=3201;var Il=0,bh=1,Fn="",Dt="srgb",_i="srgb-linear",Rs="linear",it="srgb";var fi=7680;var al=519,Mh=512,Sh=513,Eh=514,Pl=515,wh=516,Th=517,Ah=518,Rh=519,ol=35044;var Ll="300 es",ln=2e3,Cs=2001;var Ln=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=1234567,Ss=Math.PI/180,Xi=180/Math.PI;function Si(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function Dl(i,e){return(i%e+e)%e}function Bu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ku(i,e,t){return i!==e?(t-i)/(e-i):0}function Es(i,e,t){return(1-t)*i+t*e}function zu(i,e,t,n){return Es(i,e,1-Math.exp(-t*n))}function Vu(i,e=1){return e-Math.abs(Dl(i,e*2)-e)}function Hu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Gu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function $u(i,e){return i+Math.random()*(e-i)}function Xu(i){return i*(.5-Math.random())}function qu(i){i!==void 0&&(_c=i);let e=_c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yu(i){return i*Ss}function Ju(i){return i*Xi}function Zu(i){return(i&i-1)===0&&i!==0}function Ku(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),p=a((e-n)/2),m=r((n-e)/2),d=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*p,o*c);break;case"YZY":i.set(l*p,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*p,o*h,o*c);break;case"XZX":i.set(o*h,l*d,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*d,o*c);break;case"ZYZ":i.set(l*d,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var dr={DEG2RAD:Ss,RAD2DEG:Xi,generateUUID:Si,clamp:Ye,euclideanModulo:Dl,mapLinear:Bu,inverseLerp:ku,lerp:Es,damp:zu,pingpong:Vu,smoothstep:Hu,smootherstep:Gu,randInt:Wu,randFloat:$u,randFloatSpread:Xu,seededRandom:qu,degToRad:Yu,radToDeg:Ju,isPowerOfTwo:Zu,ceilPowerOfTwo:Ku,floorPowerOfTwo:ju,setQuaternionFromProperEuler:Qu,normalize:Lt,denormalize:Gi},ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],p=r[a+0],m=r[a+1],d=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=d,e[t+3]=_;return}if(u!==_||l!==p||c!==m||h!==d){let g=1-o,f=l*p+c*m+h*d+u*_,w=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let R=Math.sqrt(S),A=Math.atan2(R,f*w);g=Math.sin(g*A)/R,o=Math.sin(o*A)/R}let y=o*w;if(l=l*g+p*y,c=c*g+m*y,h=h*g+d*y,u=u*g+_*y,g===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],p=r[a+1],m=r[a+2],d=r[a+3];return e[t]=o*d+h*u+l*m-c*p,e[t+1]=l*d+h*p+c*u-o*m,e[t+2]=c*d+h*m+o*p-l*u,e[t+3]=h*d-o*u-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),p=l(n/2),m=l(s/2),d=l(r/2);switch(a){case"XYZ":this._x=p*h*u+c*m*d,this._y=c*m*u-p*h*d,this._z=c*h*d+p*m*u,this._w=c*h*u-p*m*d;break;case"YXZ":this._x=p*h*u+c*m*d,this._y=c*m*u-p*h*d,this._z=c*h*d-p*m*u,this._w=c*h*u+p*m*d;break;case"ZXY":this._x=p*h*u-c*m*d,this._y=c*m*u+p*h*d,this._z=c*h*d+p*m*u,this._w=c*h*u-p*m*d;break;case"ZYX":this._x=p*h*u-c*m*d,this._y=c*m*u+p*h*d,this._z=c*h*d-p*m*u,this._w=c*h*u+p*m*d;break;case"YZX":this._x=p*h*u+c*m*d,this._y=c*m*u+p*h*d,this._z=c*h*d-p*m*u,this._w=c*h*u-p*m*d;break;case"XZY":this._x=p*h*u-c*m*d,this._y=c*m*u-p*h*d,this._z=c*h*d+p*m*u,this._w=c*h*u+p*m*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+o+u;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lo.copy(this).projectOnVector(e),this.sub(Lo)}reflect(e){return this.sub(Lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lo=new L,vc=new Dn,Ve=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],m=n[5],d=n[8],_=s[0],g=s[3],f=s[6],w=s[1],S=s[4],y=s[7],R=s[2],A=s[5],I=s[8];return r[0]=a*_+o*w+l*R,r[3]=a*g+o*S+l*A,r[6]=a*f+o*y+l*I,r[1]=c*_+h*w+u*R,r[4]=c*g+h*S+u*A,r[7]=c*f+h*y+u*I,r[2]=p*_+m*w+d*R,r[5]=p*g+m*S+d*A,r[8]=p*f+m*y+d*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,p=o*l-h*r,m=c*r-a*l,d=t*u+n*p+s*m;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/d;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=p*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Do.makeScale(e,t)),this}rotate(e){return this.premultiply(Do.makeRotation(-e)),this}translate(e,t){return this.premultiply(Do.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Do=new Ve;function Ul(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ch(){let i=Is("canvas");return i.style.display="block",i}var xc={};function qi(i){i in xc||(xc[i]=!0,console.warn(i))}function Ih(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var yc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ed(){let i={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?Rs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_i]:{primaries:e,whitePoint:n,transfer:Rs,toXYZ:yc,fromXYZ:bc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:yc,fromXYZ:bc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}var Ke=ed();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Pi,ta=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pi===void 0&&(Pi=Is("canvas")),Pi.width=e.width,Pi.height=e.height;let s=Pi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Pi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Is("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},td=0,Yi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uo(s[a].image)):r.push(Uo(s[a]))}else r=Uo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nd=0,No=new L,Wt=class i extends Ln{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Jn,s=Jn,r=cn,a=ni,o=en,l=dn,c=i.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Si(),this.name="",this.source=new Yi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jr:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jr:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=bl;Wt.DEFAULT_ANISOTROPY=1;var mt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],d=l[9],_=l[2],g=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(d-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(d+g)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,y=(m+1)/2,R=(f+1)/2,A=(h+p)/4,I=(u+_)/4,D=(d+g)/4;return S>y&&S>R?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=I/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=D/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=I/r,s=D/r),this.set(n,s,r,t),this}let w=Math.sqrt((g-d)*(g-d)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(g-d)/w,this.y=(u-_)/w,this.z=(p-h)/w,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},na=class extends Ln{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Wt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Yi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends na{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ps=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ia=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),Cr.subVectors(this.max,vs),Li.subVectors(e.a,vs),Di.subVectors(e.b,vs),Ui.subVectors(e.c,vs),Hn.subVectors(Di,Li),Gn.subVectors(Ui,Di),ci.subVectors(Li,Ui);let t=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-ci.z,ci.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,ci.z,0,-ci.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-ci.y,ci.x,0];return!Fo(t,Li,Di,Ui,Cr)||(t=[1,0,0,0,1,0,0,0,1],!Fo(t,Li,Di,Ui,Cr))?!1:(Ir.crossVectors(Hn,Gn),t=[Ir.x,Ir.y,Ir.z],Fo(t,Li,Di,Ui,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wn=[new L,new L,new L,new L,new L,new L,new L,new L],rn=new L,Rr=new Kn,Li=new L,Di=new L,Ui=new L,Hn=new L,Gn=new L,ci=new L,vs=new L,Cr=new L,Ir=new L,hi=new L;function Fo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){hi.fromArray(i,r);let o=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var id=new Kn,xs=new L,Oo=new L,Ji=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):id.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);let t=xs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(Oo)),this.expandByPoint(xs.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tn=new L,Bo=new L,Pr=new L,Wn=new L,ko=new L,Lr=new L,zo=new L,Ls=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Bo.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(Bo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Pr),o=Wn.dot(this.direction),l=-Wn.dot(Pr),c=Wn.lengthSq(),h=Math.abs(1-a*a),u,p,m,d;if(h>0)if(u=a*l-o,p=a*o-l,d=r*h,u>=0)if(p>=-d)if(p<=d){let _=1/h;u*=_,p*=_,m=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p<=-d?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=d?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Bo).addScaledVector(Pr,p),m}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);let n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,s,r){ko.subVectors(t,e),Lr.subVectors(n,e),zo.crossVectors(ko,Lr);let a=this.direction.dot(zo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);let l=o*this.direction.dot(Lr.crossVectors(Wn,Lr));if(l<0)return null;let c=o*this.direction.dot(ko.cross(Wn));if(c<0||l+c>a)return null;let h=-o*Wn.dot(zo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,p,m,d,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,p,m,d,_,g)}set(e,t,n,s,r,a,o,l,c,h,u,p,m,d,_,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=d,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),a=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=a*h,m=a*u,d=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+d*c,t[5]=p-_*c,t[9]=-o*l,t[2]=_-p*c,t[6]=d+m*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*h,m=l*u,d=c*h,_=c*u;t[0]=p+_*o,t[4]=d*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-d,t[6]=_+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*h,m=l*u,d=c*h,_=c*u;t[0]=p-_*o,t[4]=-a*u,t[8]=d+m*o,t[1]=m+d*o,t[5]=a*h,t[9]=_-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*h,m=a*u,d=o*h,_=o*u;t[0]=l*h,t[4]=d*c-m,t[8]=p*c+_,t[1]=l*u,t[5]=_*c+p,t[9]=m*c-d,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,m=a*c,d=o*l,_=o*c;t[0]=l*h,t[4]=_-p*u,t[8]=d*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+d,t[10]=p-_*u}else if(e.order==="XZY"){let p=a*l,m=a*c,d=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+_,t[5]=a*h,t[9]=m*u-d,t[2]=d*u-m,t[6]=o*h,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sd,e,rd)}lookAt(e,t,n){let s=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),$n.crossVectors(n,Vt),$n.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),$n.crossVectors(n,Vt)),$n.normalize(),Dr.crossVectors(Vt,$n),s[0]=$n.x,s[4]=Dr.x,s[8]=Vt.x,s[1]=$n.y,s[5]=Dr.y,s[9]=Vt.y,s[2]=$n.z,s[6]=Dr.z,s[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],m=n[13],d=n[2],_=n[6],g=n[10],f=n[14],w=n[3],S=n[7],y=n[11],R=n[15],A=s[0],I=s[4],D=s[8],M=s[12],b=s[1],C=s[5],B=s[9],H=s[13],X=s[2],q=s[6],$=s[10],ie=s[14],G=s[3],ue=s[7],ve=s[11],Me=s[15];return r[0]=a*A+o*b+l*X+c*G,r[4]=a*I+o*C+l*q+c*ue,r[8]=a*D+o*B+l*$+c*ve,r[12]=a*M+o*H+l*ie+c*Me,r[1]=h*A+u*b+p*X+m*G,r[5]=h*I+u*C+p*q+m*ue,r[9]=h*D+u*B+p*$+m*ve,r[13]=h*M+u*H+p*ie+m*Me,r[2]=d*A+_*b+g*X+f*G,r[6]=d*I+_*C+g*q+f*ue,r[10]=d*D+_*B+g*$+f*ve,r[14]=d*M+_*H+g*ie+f*Me,r[3]=w*A+S*b+y*X+R*G,r[7]=w*I+S*C+y*q+R*ue,r[11]=w*D+S*B+y*$+R*ve,r[15]=w*M+S*H+y*ie+R*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],m=e[14],d=e[3],_=e[7],g=e[11],f=e[15];return d*(+r*l*u-s*c*u-r*o*p+n*c*p+s*o*m-n*l*m)+_*(+t*l*m-t*c*p+r*a*p-s*a*m+s*c*h-r*l*h)+g*(+t*c*u-t*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+f*(-s*o*h-t*l*u+t*o*p+s*a*u-n*a*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],m=e[11],d=e[12],_=e[13],g=e[14],f=e[15],w=u*g*c-_*p*c+_*l*m-o*g*m-u*l*f+o*p*f,S=d*p*c-h*g*c-d*l*m+a*g*m+h*l*f-a*p*f,y=h*_*c-d*u*c+d*o*m-a*_*m-h*o*f+a*u*f,R=d*u*l-h*_*l-d*o*p+a*_*p+h*o*g-a*u*g,A=t*w+n*S+s*y+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return e[0]=w*I,e[1]=(_*p*r-u*g*r-_*s*m+n*g*m+u*s*f-n*p*f)*I,e[2]=(o*g*r-_*l*r+_*s*c-n*g*c-o*s*f+n*l*f)*I,e[3]=(u*l*r-o*p*r-u*s*c+n*p*c+o*s*m-n*l*m)*I,e[4]=S*I,e[5]=(h*g*r-d*p*r+d*s*m-t*g*m-h*s*f+t*p*f)*I,e[6]=(d*l*r-a*g*r-d*s*c+t*g*c+a*s*f-t*l*f)*I,e[7]=(a*p*r-h*l*r+h*s*c-t*p*c-a*s*m+t*l*m)*I,e[8]=y*I,e[9]=(d*u*r-h*_*r-d*n*m+t*_*m+h*n*f-t*u*f)*I,e[10]=(a*_*r-d*o*r+d*n*c-t*_*c-a*n*f+t*o*f)*I,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*m-t*o*m)*I,e[12]=R*I,e[13]=(h*_*s-d*u*s+d*n*p-t*_*p-h*n*g+t*u*g)*I,e[14]=(d*o*s-a*_*s-d*n*l+t*_*l+a*n*g-t*o*g)*I,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*p+t*o*p)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,p=r*c,m=r*h,d=r*u,_=a*h,g=a*u,f=o*u,w=l*c,S=l*h,y=l*u,R=n.x,A=n.y,I=n.z;return s[0]=(1-(_+f))*R,s[1]=(m+y)*R,s[2]=(d-S)*R,s[3]=0,s[4]=(m-y)*A,s[5]=(1-(p+f))*A,s[6]=(g+w)*A,s[7]=0,s[8]=(d+S)*I,s[9]=(g-w)*I,s[10]=(1-(p+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ni.set(s[0],s[1],s[2]).length(),a=Ni.set(s[4],s[5],s[6]).length(),o=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);let c=1/r,h=1/a,u=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ln,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s),d,_;if(l)d=r/(a-r),_=a*r/(a-r);else if(o===ln)d=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Cs)d=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ln,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s),d,_;if(l)d=1/(a-r),_=a/(a-r);else if(o===ln)d=-2/(a-r),_=-(a+r)/(a-r);else if(o===Cs)d=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ni=new L,an=new pt,sd=new L(0,0,0),rd=new L(1,1,1),$n=new L,Dr=new L,Vt=new L,Mc=new pt,Sc=new Dn,hn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var Zi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ad=0,Ec=new L,Fi=new Dn,An=new pt,Ur=new L,ys=new L,od=new L,ld=new Dn,wc=new L(1,0,0),Tc=new L(0,1,0),Ac=new L(0,0,1),Rc={type:"added"},cd={type:"removed"},Oi={type:"childadded",child:null},Vo={type:"childremoved",child:null},Ct=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new hn,n=new Dn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ve}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(wc,e)}rotateY(e){return this.rotateOnAxis(Tc,e)}rotateZ(e){return this.rotateOnAxis(Ac,e)}translateOnAxis(e,t){return Ec.copy(e).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wc,e)}translateY(e){return this.translateOnAxis(Tc,e)}translateZ(e){return this.translateOnAxis(Ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ur.copy(e):Ur.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(ys,Ur,this.up):An.lookAt(Ur,ys,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(An),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cd),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,od),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),m=a(e.animations),d=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),d.length>0&&(n.nodes=d)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ct.DEFAULT_UP=new L(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new L,Rn=new L,Ho=new L,Cn=new L,Bi=new L,ki=new L,Cc=new L,Go=new L,Wo=new L,$o=new L,Xo=new mt,qo=new mt,Yo=new mt,Yn=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),Rn.subVectors(n,t),Ho.subVectors(e,t);let a=on.dot(on),o=on.dot(Rn),l=on.dot(Ho),c=Rn.dot(Rn),h=Rn.dot(Ho),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let p=1/u,m=(c*l-o*h)*p,d=(a*h-o*l)*p;return r.set(1-m-d,d,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Xo.setScalar(0),qo.setScalar(0),Yo.setScalar(0),Xo.fromBufferAttribute(e,t),qo.fromBufferAttribute(e,n),Yo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Xo,r.x),a.addScaledVector(qo,r.y),a.addScaledVector(Yo,r.z),a}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),Rn.subVectors(e,t),on.cross(Rn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),on.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Bi.subVectors(s,n),ki.subVectors(r,n),Go.subVectors(e,n);let l=Bi.dot(Go),c=ki.dot(Go);if(l<=0&&c<=0)return t.copy(n);Wo.subVectors(e,s);let h=Bi.dot(Wo),u=ki.dot(Wo);if(h>=0&&u<=h)return t.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Bi,a);$o.subVectors(e,r);let m=Bi.dot($o),d=ki.dot($o);if(d>=0&&m<=d)return t.copy(r);let _=m*c-l*d;if(_<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(ki,o);let g=h*d-m*u;if(g<=0&&u-h>=0&&m-d>=0)return Cc.subVectors(r,s),o=(u-h)/(u-h+(m-d)),t.copy(s).addScaledVector(Cc,o);let f=1/(g+_+p);return a=_*f,o=p*f,t.copy(n).addScaledVector(Bi,a).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Jo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Dl(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Jo(a,r,e+1/3),this.g=Jo(a,r,e),this.b=Jo(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=Dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=Ph[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Ke.workingToColorSpace(At.copy(this),e),Math.round(Ye(At.r*255,0,255))*65536+Math.round(Ye(At.g*255,0,255))*256+Math.round(Ye(At.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(At.copy(this),t);let n=At.r,s=At.g,r=At.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Dt){Ke.workingToColorSpace(At.copy(this),e);let t=At.r,n=At.g,s=At.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Nr);let n=Es(Xn.h,Nr.h,t),s=Es(Xn.s,Nr.s,t),r=Es(Xn.l,Nr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},At=new Xe;Xe.NAMES=Ph;var hd=0,jn=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=mi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=Kr,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zr&&(n.blendSrc=this.blendSrc),this.blendDst!==Kr&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ds=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var xt=new L,Fr=new ge,ud=0,Gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ud++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ol,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ol&&(e.usage=this.usage),e}};var Us=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ns=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _t=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},dd=0,Kt=new pt,Zo=new Ct,zi=new L,Ht=new Kn,bs=new Kn,wt=new L,Qt=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ul(e)?Ns:Us)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Ht.min,bs.min),Ht.expandByPoint(wt),wt.addVectors(Ht.max,bs.max),Ht.expandByPoint(wt)):(Ht.expandByPoint(bs.min),Ht.expandByPoint(bs.max))}Ht.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(e,c),wt.add(zi)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new L,l[D]=new L;let c=new L,h=new L,u=new L,p=new ge,m=new ge,d=new ge,_=new L,g=new L;function f(D,M,b){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),p.fromBufferAttribute(r,D),m.fromBufferAttribute(r,M),d.fromBufferAttribute(r,b),h.sub(c),u.sub(c),m.sub(p),d.sub(p);let C=1/(m.x*d.y-d.x*m.y);isFinite(C)&&(_.copy(h).multiplyScalar(d.y).addScaledVector(u,-m.y).multiplyScalar(C),g.copy(u).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(C),o[D].add(_),o[M].add(_),o[b].add(_),l[D].add(g),l[M].add(g),l[b].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,M=w.length;D<M;++D){let b=w[D],C=b.start,B=b.count;for(let H=C,X=C+B;H<X;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let S=new L,y=new L,R=new L,A=new L;function I(D){R.fromBufferAttribute(s,D),A.copy(R);let M=o[D];S.copy(M),S.sub(R.multiplyScalar(R.dot(M))).normalize(),y.crossVectors(A,M);let C=y.dot(l[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,C)}for(let D=0,M=w.length;D<M;++D){let b=w[D],C=b.start,B=b.count;for(let H=C,X=C+B;H<X;H+=3)I(e.getX(H+0)),I(e.getX(H+1)),I(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let p=0,m=e.count;p<m;p+=3){let d=e.getX(p+0),_=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,d),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,d),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h),m=0,d=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let f=0;f<h;f++)p[d++]=c[m++]}return new Gt(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let p=c[h],m=e(p,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ic=new pt,ui=new Ls,Or=new Ji,Pc=new L,Br=new L,kr=new L,zr=new L,Ko=new L,Vr=new L,Lc=new L,Hr=new L,bt=class extends Ct{constructor(e=new Qt,t=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ko.fromBufferAttribute(u,e),a?Vr.addScaledVector(Ko,h):Vr.addScaledVector(Ko.sub(t),h))}t.add(Vr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(Or.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Or,Pc)===null||ui.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Ic.copy(r).invert(),ui.copy(e.ray).applyMatrix4(Ic),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let d=0,_=p.length;d<_;d++){let g=p[d],f=a[g.materialIndex],w=Math.max(g.start,m.start),S=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let y=w,R=S;y<R;y+=3){let A=o.getX(y),I=o.getX(y+1),D=o.getX(y+2);s=Gr(this,f,e,n,c,h,u,A,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let d=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let g=d,f=_;g<f;g+=3){let w=o.getX(g),S=o.getX(g+1),y=o.getX(g+2);s=Gr(this,a,e,n,c,h,u,w,S,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let d=0,_=p.length;d<_;d++){let g=p[d],f=a[g.materialIndex],w=Math.max(g.start,m.start),S=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=w,R=S;y<R;y+=3){let A=y,I=y+1,D=y+2;s=Gr(this,f,e,n,c,h,u,A,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let d=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=d,f=_;g<f;g+=3){let w=g,S=g+1,y=g+2;s=Gr(this,a,e,n,c,h,u,w,S,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function fd(i,e,t,n,s,r,a,o){let l;if(e.side===Ut?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Pn,o),l===null)return null;Hr.copy(o),Hr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Hr);return c<t.near||c>t.far?null:{distance:c,point:Hr.clone(),object:i}}function Gr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Br),i.getVertexPosition(l,kr),i.getVertexPosition(c,zr);let h=fd(i,e,t,n,Br,kr,zr,Lc);if(h){let u=new L;Yn.getBarycoord(Lc,Br,kr,zr,u),s&&(h.uv=Yn.getInterpolatedAttribute(s,o,l,c,u,new ge)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,o,l,c,u,new ge)),a&&(h.normal=Yn.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new L,materialIndex:0};Yn.getNormal(Br,kr,zr,p.normal),h.face=p,h.barycoord=u}return h}var Ki=class i extends Qt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],p=0,m=0;d("z","y","x",-1,-1,n,t,e,a,r,0),d("z","y","x",1,-1,n,t,-e,a,r,1),d("x","z","y",1,1,e,n,t,s,a,2),d("x","z","y",1,-1,e,n,-t,s,a,3),d("x","y","z",1,-1,e,t,n,s,r,4),d("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(u,2));function d(_,g,f,w,S,y,R,A,I,D,M){let b=y/I,C=R/D,B=y/2,H=R/2,X=A/2,q=I+1,$=D+1,ie=0,G=0,ue=new L;for(let ve=0;ve<$;ve++){let Me=ve*C-H;for(let ke=0;ke<q;ke++){let Je=ke*b-B;ue[_]=Je*w,ue[g]=Me*S,ue[f]=X,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[g]=0,ue[f]=A>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(ke/I),u.push(1-ve/D),ie+=1}}for(let ve=0;ve<D;ve++)for(let Me=0;Me<I;Me++){let ke=p+Me+q*ve,Je=p+Me+q*(ve+1),j=p+(Me+1)+q*(ve+1),se=p+(Me+1)+q*ve;l.push(ke,Je,se),l.push(Je,j,se),G+=6}o.addGroup(m,G,M),m+=G,p+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ei(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function It(i){let e={};for(let t=0;t<i.length;t++){let n=Ei(i[t]);for(let s in n)e[s]=n[s]}return e}function pd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var Lh={clone:Ei,merge:It},md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=md,this.fragmentShader=gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=pd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Fs=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qn=new L,Dc=new ge,Uc=new ge,Rt=class extends Fs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,Dc,Uc),t.subVectors(Uc,Dc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vi=-90,Hi=1,sa=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rt(Vi,Hi,e,t);s.layers=this.layers,this.add(s);let r=new Rt(Vi,Hi,e,t);r.layers=this.layers,this.add(r);let a=new Rt(Vi,Hi,e,t);a.layers=this.layers,this.add(a);let o=new Rt(Vi,Hi,e,t);o.layers=this.layers,this.add(o);let l=new Rt(Vi,Hi,e,t);l.layers=this.layers,this.add(l);let c=new Rt(Vi,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,m),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},Os=class extends Wt{constructor(e=[],t=bi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ra=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Os(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ki(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Un});r.uniforms.tEquirect.value=t;let a=new bt(s,r),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=cn),new sa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},gn=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},_d={type:"move"},ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),f=this._getHandJoint(c,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,d=.005;c.inputState.pinching&&p>m+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_d)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Bs=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var jo=new L,vd=new L,xd=new Ve,mn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=jo.subVectors(n,t).cross(vd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(jo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xd.getNormalMatrix(e),s=this.coplanarPoint(jo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},di=new Ji,yd=new ge(.5,.5),Wr=new L,Qi=class{constructor(e=new mn,t=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ln,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],p=r[6],m=r[7],d=r[8],_=r[9],g=r[10],f=r[11],w=r[12],S=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-a,m-h,f-d,R-w).normalize(),s[1].setComponents(c+a,m+h,f+d,R+w).normalize(),s[2].setComponents(c+o,m+u,f+_,R+S).normalize(),s[3].setComponents(c-o,m-u,f-_,R-S).normalize(),n)s[4].setComponents(l,p,g,y).normalize(),s[5].setComponents(c-l,m-p,f-g,R-y).normalize();else if(s[4].setComponents(c-l,m-p,f-g,R-y).normalize(),t===ln)s[5].setComponents(c+l,m+p,f+g,R+y).normalize();else if(t===Cs)s[5].setComponents(l,p,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){di.center.set(0,0,0);let t=yd.distanceTo(e.center);return di.radius=.7071067811865476+t,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Wr.x=s.normal.x>0?e.max.x:e.min.x,Wr.y=s.normal.y>0?e.max.y:e.min.y,Wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ks=class extends Wt{constructor(e,t,n=ii,s,r,a,o=jt,l=jt,c,h=$i,u=1){if(h!==$i&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:u};super(p,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},zs=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Vs=class i extends Qt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],m=[],d=0,_=[],g=n/2,f=0;w(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(p,3)),this.setAttribute("uv",new _t(m,2));function w(){let y=new L,R=new L,A=0,I=(t-e)/n;for(let D=0;D<=r;D++){let M=[],b=D/r,C=b*(t-e)+e;for(let B=0;B<=s;B++){let H=B/s,X=H*l+o,q=Math.sin(X),$=Math.cos(X);R.x=C*q,R.y=-b*n+g,R.z=C*$,u.push(R.x,R.y,R.z),y.set(q,I,$).normalize(),p.push(y.x,y.y,y.z),m.push(H,1-b),M.push(d++)}_.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){let b=_[M][D],C=_[M+1][D],B=_[M+1][D+1],H=_[M][D+1];(e>0||M!==0)&&(h.push(b,C,H),A+=3),(t>0||M!==r-1)&&(h.push(C,B,H),A+=3)}c.addGroup(f,A,0),f+=A}function S(y){let R=d,A=new ge,I=new L,D=0,M=y===!0?e:t,b=y===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*b,0),p.push(0,b,0),m.push(.5,.5),d++;let C=d;for(let B=0;B<=s;B++){let X=B/s*l+o,q=Math.cos(X),$=Math.sin(X);I.x=M*$,I.y=g*b,I.z=M*q,u.push(I.x,I.y,I.z),p.push(0,b,0),A.x=q*.5+.5,A.y=$*.5*b+.5,m.push(A.x,A.y),d++}for(let B=0;B<s;B++){let H=R+B,X=C+B;y===!0?h.push(X,X+1,H):h.push(X+1,X,H),D+=3}c.addGroup(f,D,y===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var $t=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],p=n[s+1]-h,m=(a-h)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ge:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new pt;for(let m=0;m<=e;m++){let d=m/e;s[m]=this.getTangentAt(d,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos(Ye(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,d))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Ye(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let d=1;d<=e;d++)r[d].applyMatrix4(l.makeRotationAxis(s[d],m*d)),a[d].crossVectors(s[d],r[d])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},es=class extends $t{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ge){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*u+this.aX,c=p*u+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},aa=class extends es{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let p=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;p*=h,m*=h,s(a,o,p,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var $r=new L,Qo=new Fl,el=new Fl,tl=new Fl,ts=class extends $t{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:($r.subVectors(s[0],s[1]).add(s[0]),c=$r);let u=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:($r.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$r),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,d=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(h),m);_<1e-4&&(_=1),d<1e-4&&(d=_),g<1e-4&&(g=_),Qo.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,d,_,g),el.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,d,_,g),tl.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,d,_,g)}else this.curveType==="catmullrom"&&(Qo.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),el.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),tl.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(Qo.calc(l),el.calc(l),tl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Nc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function bd(i,e){let t=1-i;return t*t*e}function Md(i,e){return 2*(1-i)*i*e}function Sd(i,e){return i*i*e}function ws(i,e,t,n){return bd(i,e)+Md(i,t)+Sd(i,n)}function Ed(i,e){let t=1-i;return t*t*t*e}function wd(i,e){let t=1-i;return 3*t*t*i*e}function Td(i,e){return 3*(1-i)*i*i*e}function Ad(i,e){return i*i*i*e}function Ts(i,e,t,n,s){return Ed(i,e)+wd(i,t)+Td(i,n)+Ad(i,s)}var Hs=class extends $t{constructor(e=new ge,t=new ge,n=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(e,s.x,r.x,a.x,o.x),Ts(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oa=class extends $t{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(e,s.x,r.x,a.x,o.x),Ts(e,s.y,r.y,a.y,o.y),Ts(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gs=class extends $t{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends $t{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ws=class extends $t{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ws(e,s.x,r.x,a.x),ws(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$s=class extends $t{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ws(e,s.x,r.x,a.x),ws(e,s.y,r.y,a.y),ws(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xs=class extends $t{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Nc(o,l.x,c.x,h.x,u.x),Nc(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},ca=Object.freeze({__proto__:null,ArcCurve:aa,CatmullRomCurve3:ts,CubicBezierCurve:Hs,CubicBezierCurve3:oa,EllipseCurve:es,LineCurve:Gs,LineCurve3:la,QuadraticBezierCurve:Ws,QuadraticBezierCurve3:$s,SplineCurve:Xs}),ha=class extends $t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ca[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ca[s.type]().fromJSON(s))}return this}},qs=class extends ha{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Gs(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ws(this.currentPoint.clone(),new ge(e,t),new ge(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Hs(this.currentPoint.clone(),new ge(e,t),new ge(n,s),new ge(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new es(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ns=class extends qs{constructor(e){super(e),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new qs().fromJSON(s))}return this}};function Rd(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Dh(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Dd(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let p=t;p<s;p+=t){let m=i[p],d=i[p+1];m<o&&(o=m),d<l&&(l=d),m>h&&(h=m),d>u&&(u=d)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ys(r,a,t,o,l,c,0),a}function Dh(i,e,t,n,s){let r;if(s===Wd(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Fc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Fc(a/n|0,i[a],i[a+1],r);return r&&is(r,r.next)&&(Zs(r),r=r.next),r}function vi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(is(t,t.next)||ft(t.prev,t,t.next)===0)){if(Zs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ys(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Bd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Id(i,n,s,r):Cd(i)){e.push(l.i,i.i,c.i),Zs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Pd(vi(i),e),Ys(i,e,t,n,s,r,2)):a===2&&Ld(i,e,t,n,s,r):Ys(vi(i),e,t,n,s,r,1);break}}}function Cd(i){let e=i.prev,t=i,n=i.next;if(ft(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),p=Math.max(s,r,a),m=Math.max(o,l,c),d=n.next;for(;d!==e;){if(d.x>=h&&d.x<=p&&d.y>=u&&d.y<=m&&Ms(s,o,r,l,a,c,d.x,d.y)&&ft(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function Id(i,e,t,n){let s=i.prev,r=i,a=i.next;if(ft(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,p=a.y,m=Math.min(o,l,c),d=Math.min(h,u,p),_=Math.max(o,l,c),g=Math.max(h,u,p),f=ll(m,d,e,t,n),w=ll(_,g,e,t,n),S=i.prevZ,y=i.nextZ;for(;S&&S.z>=f&&y&&y.z<=w;){if(S.x>=m&&S.x<=_&&S.y>=d&&S.y<=g&&S!==s&&S!==a&&Ms(o,h,l,u,c,p,S.x,S.y)&&ft(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=m&&y.x<=_&&y.y>=d&&y.y<=g&&y!==s&&y!==a&&Ms(o,h,l,u,c,p,y.x,y.y)&&ft(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=f;){if(S.x>=m&&S.x<=_&&S.y>=d&&S.y<=g&&S!==s&&S!==a&&Ms(o,h,l,u,c,p,S.x,S.y)&&ft(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=w;){if(y.x>=m&&y.x<=_&&y.y>=d&&y.y<=g&&y!==s&&y!==a&&Ms(o,h,l,u,c,p,y.x,y.y)&&ft(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Pd(i,e){let t=i;do{let n=t.prev,s=t.next.next;!is(n,s)&&Nh(n,t,t.next,s)&&Js(n,s)&&Js(s,n)&&(e.push(n.i,t.i,s.i),Zs(t),Zs(t.next),t=i=s),t=t.next}while(t!==i);return vi(t)}function Ld(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Vd(a,o)){let l=Fh(a,o);a=vi(a,a.next),l=vi(l,l.next),Ys(a,e,t,n,s,r,0),Ys(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Dd(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Dh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(zd(c))}s.sort(Ud);for(let r=0;r<s.length;r++)t=Nd(s[r],t);return t}function Ud(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Nd(i,e){let t=Fd(i,e);if(!t)return e;let n=Fh(t,i);return vi(n,n.next),vi(t,t.next)}function Fd(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(is(i,t))return t;do{if(is(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Uh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Js(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Od(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Od(i,e){return ft(i.prev,i,e.prev)<0&&ft(e.next,i,i.next)<0}function Bd(i,e,t,n){let s=i;do s.z===0&&(s.z=ll(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kd(s)}function kd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function ll(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function zd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Uh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ms(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Uh(i,e,t,n,s,r,a,o)}function Vd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Hd(i,e)&&(Js(i,e)&&Js(e,i)&&Gd(i,e)&&(ft(i.prev,i,e.prev)||ft(i,e.prev,e))||is(i,e)&&ft(i.prev,i,i.next)>0&&ft(e.prev,e,e.next)>0)}function ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function is(i,e){return i.x===e.x&&i.y===e.y}function Nh(i,e,t,n){let s=qr(ft(i,e,t)),r=qr(ft(i,e,n)),a=qr(ft(t,n,i)),o=qr(ft(t,n,e));return!!(s!==r&&a!==o||s===0&&Xr(i,t,e)||r===0&&Xr(i,n,e)||a===0&&Xr(t,i,n)||o===0&&Xr(t,e,n))}function Xr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function qr(i){return i>0?1:i<0?-1:0}function Hd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Nh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Js(i,e){return ft(i.prev,i,i.next)<0?ft(i,e,i.next)>=0&&ft(i,i.prev,e)>=0:ft(i,e,i.prev)<0||ft(i,i.next,e)<0}function Gd(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Fh(i,e){let t=cl(i.i,i.x,i.y),n=cl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Fc(i,e,t,n){let s=cl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wd(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var hl=class{static triangulate(e,t,n=2){return Rd(e,t,n)}},pi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Oc(e),Bc(n,e);let a=e.length;t.forEach(Oc);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Bc(n,t[l]);let o=hl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Oc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ks=class i extends Qt{constructor(e=new ns([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new _t(s,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,d=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:$d,S,y=!1,R,A,I,D;f&&(S=f.getSpacedPoints(h),y=!0,p=!1,R=f.computeFrenetFrames(h,!1),A=new L,I=new L,D=new L),p||(g=0,m=0,d=0,_=0);let M=o.extractPoints(c),b=M.shape,C=M.holes;if(!pi.isClockWise(b)){b=b.reverse();for(let ne=0,Q=C.length;ne<Q;ne++){let K=C[ne];pi.isClockWise(K)&&(C[ne]=K.reverse())}}function H(ne){let K=10000000000000001e-36,Z=ne[0];for(let fe=1;fe<=ne.length;fe++){let re=fe%ne.length,pe=ne[re],He=pe.x-Z.x,ze=pe.y-Z.y,E=He*He+ze*ze,v=Math.max(Math.abs(pe.x),Math.abs(pe.y),Math.abs(Z.x),Math.abs(Z.y)),F=K*v*v;if(E<=F){ne.splice(re,1),fe--;continue}Z=pe}}H(b),C.forEach(H);let X=C.length,q=b;for(let ne=0;ne<X;ne++){let Q=C[ne];b=b.concat(Q)}function $(ne,Q,K){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(Q,K)}let ie=b.length;function G(ne,Q,K){let Z,fe,re,pe=ne.x-Q.x,He=ne.y-Q.y,ze=K.x-ne.x,E=K.y-ne.y,v=pe*pe+He*He,F=pe*E-He*ze;if(Math.abs(F)>Number.EPSILON){let W=Math.sqrt(v),te=Math.sqrt(ze*ze+E*E),Y=Q.x-He/W,Pe=Q.y+pe/W,he=K.x-E/te,Re=K.y+ze/te,Ce=((he-Y)*E-(Re-Pe)*ze)/(pe*E-He*ze);Z=Y+pe*Ce-ne.x,fe=Pe+He*Ce-ne.y;let ae=Z*Z+fe*fe;if(ae<=2)return new ge(Z,fe);re=Math.sqrt(ae/2)}else{let W=!1;pe>Number.EPSILON?ze>Number.EPSILON&&(W=!0):pe<-Number.EPSILON?ze<-Number.EPSILON&&(W=!0):Math.sign(He)===Math.sign(E)&&(W=!0),W?(Z=-He,fe=pe,re=Math.sqrt(v)):(Z=pe,fe=He,re=Math.sqrt(v/2))}return new ge(Z/re,fe/re)}let ue=[];for(let ne=0,Q=q.length,K=Q-1,Z=ne+1;ne<Q;ne++,K++,Z++)K===Q&&(K=0),Z===Q&&(Z=0),ue[ne]=G(q[ne],q[K],q[Z]);let ve=[],Me,ke=ue.concat();for(let ne=0,Q=X;ne<Q;ne++){let K=C[ne];Me=[];for(let Z=0,fe=K.length,re=fe-1,pe=Z+1;Z<fe;Z++,re++,pe++)re===fe&&(re=0),pe===fe&&(pe=0),Me[Z]=G(K[Z],K[re],K[pe]);ve.push(Me),ke=ke.concat(Me)}let Je;if(g===0)Je=pi.triangulateShape(q,C);else{let ne=[],Q=[];for(let K=0;K<g;K++){let Z=K/g,fe=m*Math.cos(Z*Math.PI/2),re=d*Math.sin(Z*Math.PI/2)+_;for(let pe=0,He=q.length;pe<He;pe++){let ze=$(q[pe],ue[pe],re);Ae(ze.x,ze.y,-fe),Z===0&&ne.push(ze)}for(let pe=0,He=X;pe<He;pe++){let ze=C[pe];Me=ve[pe];let E=[];for(let v=0,F=ze.length;v<F;v++){let W=$(ze[v],Me[v],re);Ae(W.x,W.y,-fe),Z===0&&E.push(W)}Z===0&&Q.push(E)}}Je=pi.triangulateShape(ne,Q)}let j=Je.length,se=d+_;for(let ne=0;ne<ie;ne++){let Q=p?$(b[ne],ke[ne],se):b[ne];y?(I.copy(R.normals[0]).multiplyScalar(Q.x),A.copy(R.binormals[0]).multiplyScalar(Q.y),D.copy(S[0]).add(I).add(A),Ae(D.x,D.y,D.z)):Ae(Q.x,Q.y,0)}for(let ne=1;ne<=h;ne++)for(let Q=0;Q<ie;Q++){let K=p?$(b[Q],ke[Q],se):b[Q];y?(I.copy(R.normals[ne]).multiplyScalar(K.x),A.copy(R.binormals[ne]).multiplyScalar(K.y),D.copy(S[ne]).add(I).add(A),Ae(D.x,D.y,D.z)):Ae(K.x,K.y,u/h*ne)}for(let ne=g-1;ne>=0;ne--){let Q=ne/g,K=m*Math.cos(Q*Math.PI/2),Z=d*Math.sin(Q*Math.PI/2)+_;for(let fe=0,re=q.length;fe<re;fe++){let pe=$(q[fe],ue[fe],Z);Ae(pe.x,pe.y,u+K)}for(let fe=0,re=C.length;fe<re;fe++){let pe=C[fe];Me=ve[fe];for(let He=0,ze=pe.length;He<ze;He++){let E=$(pe[He],Me[He],Z);y?Ae(E.x,E.y+S[h-1].y,S[h-1].x+K):Ae(E.x,E.y,u+K)}}}k(),J();function k(){let ne=s.length/3;if(p){let Q=0,K=ie*Q;for(let Z=0;Z<j;Z++){let fe=Je[Z];Se(fe[2]+K,fe[1]+K,fe[0]+K)}Q=h+g*2,K=ie*Q;for(let Z=0;Z<j;Z++){let fe=Je[Z];Se(fe[0]+K,fe[1]+K,fe[2]+K)}}else{for(let Q=0;Q<j;Q++){let K=Je[Q];Se(K[2],K[1],K[0])}for(let Q=0;Q<j;Q++){let K=Je[Q];Se(K[0]+ie*h,K[1]+ie*h,K[2]+ie*h)}}n.addGroup(ne,s.length/3-ne,0)}function J(){let ne=s.length/3,Q=0;de(q,Q),Q+=q.length;for(let K=0,Z=C.length;K<Z;K++){let fe=C[K];de(fe,Q),Q+=fe.length}n.addGroup(ne,s.length/3-ne,1)}function de(ne,Q){let K=ne.length;for(;--K>=0;){let Z=K,fe=K-1;fe<0&&(fe=ne.length-1);for(let re=0,pe=h+g*2;re<pe;re++){let He=ie*re,ze=ie*(re+1),E=Q+Z+He,v=Q+fe+He,F=Q+fe+ze,W=Q+Z+ze;We(E,v,F,W)}}}function Ae(ne,Q,K){l.push(ne),l.push(Q),l.push(K)}function Se(ne,Q,K){tt(ne),tt(Q),tt(K);let Z=s.length/3,fe=w.generateTopUV(n,s,Z-3,Z-2,Z-1);T(fe[0]),T(fe[1]),T(fe[2])}function We(ne,Q,K,Z){tt(ne),tt(Q),tt(Z),tt(Q),tt(K),tt(Z);let fe=s.length/3,re=w.generateSideWallUV(n,s,fe-6,fe-3,fe-2,fe-1);T(re[0]),T(re[1]),T(re[3]),T(re[1]),T(re[2]),T(re[3])}function tt(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function T(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Xd(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ca[s.type]().fromJSON(s)),new i(n,e.options)}},$d={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ge(r,a),new ge(o,l),new ge(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],p=e[s*3],m=e[s*3+1],d=e[s*3+2],_=e[r*3],g=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ge(a,1-l),new ge(c,1-u),new ge(p,1-d),new ge(_,1-f)]:[new ge(o,1-l),new ge(h,1-u),new ge(m,1-d),new ge(g,1-f)]}};function Xd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var xi=class i extends Qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,p=t/l,m=[],d=[],_=[],g=[];for(let f=0;f<h;f++){let w=f*p-a;for(let S=0;S<c;S++){let y=S*u-r;d.push(y,-w,0),_.push(0,0,1),g.push(S/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){let S=w+c*f,y=w+c*(f+1),R=w+1+c*(f+1),A=w+1+c*f;m.push(S,y,A),m.push(y,R,A)}this.setIndex(m),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(_,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var js=class i extends Qt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new L,u=new L,p=new L;for(let m=0;m<=n;m++)for(let d=0;d<=s;d++){let _=d/s*r,g=m/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(d/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let d=1;d<=s;d++){let _=(s+1)*m+d-1,g=(s+1)*(m-1)+d-1,f=(s+1)*(m-1)+d,w=(s+1)*m+d;a.push(_,g,w),a.push(g,f,w)}this.setIndex(a),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Qs=class i extends Qt{constructor(e=new $s(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new ge,h=new L,u=[],p=[],m=[],d=[];_(),this.setIndex(d),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(p,3)),this.setAttribute("uv",new _t(m,2));function _(){for(let S=0;S<t;S++)g(S);g(r===!1?t:0),w(),f()}function g(S){h=e.getPointAt(S/t,h);let y=a.normals[S],R=a.binormals[S];for(let A=0;A<=s;A++){let I=A/s*Math.PI*2,D=Math.sin(I),M=-Math.cos(I);l.x=M*y.x+D*R.x,l.y=M*y.y+D*R.y,l.z=M*y.z+D*R.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let S=1;S<=t;S++)for(let y=1;y<=s;y++){let R=(s+1)*(S-1)+(y-1),A=(s+1)*S+(y-1),I=(s+1)*S+y,D=(s+1)*(S-1)+y;d.push(R,A,D),d.push(A,I,D)}}function w(){for(let S=0;S<=t;S++)for(let y=0;y<=s;y++)c.x=S/t,c.y=y/s,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ca[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Qn=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ss=class extends Qn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ua=class extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},da=class extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Yr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var yi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fa=class extends yi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:il,endingEnd:il}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sl:r=e,o=2*t-n;break;case rl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sl:a=e,l=2*n-t;break;case rl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,m=this._weightNext,d=(n-t)/(s-t),_=d*d,g=_*d,f=-p*g+2*p*_-p*d,w=(1+p)*g+(-1.5-2*p)*_+(-.5+p)*d+1,S=(-1-m)*g+(1.5+m)*_+.5*d,y=m*g-m*_;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+w*a[c+R]+S*a[l+R]+y*a[u+R];return r}},pa=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*u+a[l+p]*h;return r}},ma=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yr(t,this.TimeBufferType),this.values=Yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yr(e.times,Array),values:Yr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case As:t=this.InterpolantFactoryMethodDiscrete;break;case ea:t=this.InterpolantFactoryMethodLinear;break;case Jr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return As;case this.InterpolantFactoryMethodLinear:return ea;case this.InterpolantFactoryMethodSmooth:return Jr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&qd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,p=u-n,m=u+n;for(let d=0;d!==n;++d){let _=t[u+d];if(_!==t[p+d]||_!==t[m+d]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,p=a*n;for(let m=0;m!==n;++m)t[p+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Xt.prototype.ValueTypeName="";Xt.prototype.TimeBufferType=Float32Array;Xt.prototype.ValueBufferType=Float32Array;Xt.prototype.DefaultInterpolation=ea;var ei=class extends Xt{constructor(e,t,n){super(e,t,n)}};ei.prototype.ValueTypeName="bool";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=As;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}};ga.prototype.ValueTypeName="color";var _a=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}};_a.prototype.ValueTypeName="number";var va=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},er=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new va(this.times,this.values,this.getValueSize(),e)}};er.prototype.ValueTypeName="quaternion";er.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends Xt{constructor(e,t,n){super(e,t,n)}};ti.prototype.ValueTypeName="string";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=As;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}};xa.prototype.ValueTypeName="vector";var ya=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let m=c[u],d=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return d}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Oh=new ya,ba=class{constructor(e){this.manager=e!==void 0?e:Oh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var tr=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},nr=class extends tr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},nl=new pt,kc=new L,zc=new L,ul=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qi,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(kc),zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zc),t.updateMatrixWorld(),nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ir=class extends Fs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dl=class extends ul{constructor(){super(new ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sr=class extends tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new dl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ma=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ol="\\[\\]\\.:\\/",Yd=new RegExp("["+Ol+"]","g"),Bl="[^"+Ol+"]",Jd="[^"+Ol.replace("\\.","")+"]",Zd=/((?:WC+[\/:])*)/.source.replace("WC",Bl),Kd=/(WCOD+)?/.source.replace("WCOD",Jd),jd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),Qd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),ef=new RegExp("^"+Zd+Kd+jd+Qd+"$"),tf=["material","materials","bones","map"],fl=class{constructor(e,t,n){let s=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yd,"")}static parseTrackName(e){let t=ef.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);tf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=fl;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t0=new Float32Array(1);var Vc=new pt,rr=class{constructor(e,t,n=0,s=1/0){this.ray=new Ls(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Zi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vc),this}intersectObject(e,t=!0,n=[]){return pl(e,this,n,t),n.sort(Hc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)pl(e[s],this,n,t);return n.sort(Hc),n}};function Hc(i,e){return i.distance-e.distance}function pl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)pl(r[a],e,t,!0)}}function kl(i,e,t,n){let s=nf(n);switch(t){case Tl:return i*e;case Rl:return i*e/s.components*s.byteLength;case Oa:return i*e/s.components*s.byteLength;case Cl:return i*e*2/s.components*s.byteLength;case Ba:return i*e*2/s.components*s.byteLength;case Al:return i*e*3/s.components*s.byteLength;case en:return i*e*4/s.components*s.byteLength;case ka:return i*e*4/s.components*s.byteLength;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Va:case Ga:return Math.max(i,16)*Math.max(e,8)/4;case za:case Ha:return Math.max(i,8)*Math.max(e,8)/2;case Wa:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case io:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oo:case lo:case co:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ho:case uo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fo:case po:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nf(i){switch(i){case dn:case Ml:return{byteLength:1,components:1};case rs:case Sl:case as:return{byteLength:2,components:1};case Na:case Fa:return{byteLength:2,components:4};case ii:case Ua:case yn:return{byteLength:4,components:1};case El:case wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ou(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function rf(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,d)=>m.start-d.start);let p=0;for(let m=1;m<u.length;m++){let d=u[p],_=u[m];_.start<=d.start+d.count+1?d.count=Math.max(d.count,_.start+_.count-d.start):(++p,u[p]=_)}u.length=p+1;for(let m=0,d=u.length;m<d;m++){let _=u[m];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,df=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,If=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ep=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Up=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,em=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,am=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Em=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Am=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Im=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Om=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:af,alphahash_pars_fragment:of,alphamap_fragment:lf,alphamap_pars_fragment:cf,alphatest_fragment:hf,alphatest_pars_fragment:uf,aomap_fragment:df,aomap_pars_fragment:ff,batching_pars_vertex:pf,batching_vertex:mf,begin_vertex:gf,beginnormal_vertex:_f,bsdfs:vf,iridescence_fragment:xf,bumpmap_pars_fragment:yf,clipping_planes_fragment:bf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:Ef,color_fragment:wf,color_pars_fragment:Tf,color_pars_vertex:Af,color_vertex:Rf,common:Cf,cube_uv_reflection_fragment:If,defaultnormal_vertex:Pf,displacementmap_pars_vertex:Lf,displacementmap_vertex:Df,emissivemap_fragment:Uf,emissivemap_pars_fragment:Nf,colorspace_fragment:Ff,colorspace_pars_fragment:Of,envmap_fragment:Bf,envmap_common_pars_fragment:kf,envmap_pars_fragment:zf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:jf,envmap_vertex:Hf,fog_vertex:Gf,fog_pars_vertex:Wf,fog_fragment:$f,fog_pars_fragment:Xf,gradientmap_pars_fragment:qf,lightmap_pars_fragment:Yf,lights_lambert_fragment:Jf,lights_lambert_pars_fragment:Zf,lights_pars_begin:Kf,lights_toon_fragment:Qf,lights_toon_pars_fragment:ep,lights_phong_fragment:tp,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:sp,lights_fragment_begin:rp,lights_fragment_maps:ap,lights_fragment_end:op,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:up,map_fragment:dp,map_pars_fragment:fp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:_p,morphinstance_vertex:vp,morphcolor_vertex:xp,morphnormal_vertex:yp,morphtarget_pars_vertex:bp,morphtarget_vertex:Mp,normal_fragment_begin:Sp,normal_fragment_maps:Ep,normal_pars_fragment:wp,normal_pars_vertex:Tp,normal_vertex:Ap,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Lp,opaque_fragment:Dp,packing:Up,premultiplied_alpha_fragment:Np,project_vertex:Fp,dithering_fragment:Op,dithering_pars_fragment:Bp,roughnessmap_fragment:kp,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:Vp,shadowmap_pars_vertex:Hp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Wp,skinbase_vertex:$p,skinning_pars_vertex:Xp,skinning_vertex:qp,skinnormal_vertex:Yp,specularmap_fragment:Jp,specularmap_pars_fragment:Zp,tonemapping_fragment:Kp,tonemapping_pars_fragment:jp,transmission_fragment:Qp,transmission_pars_fragment:em,uv_pars_fragment:tm,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:sm,background_vert:rm,background_frag:am,backgroundCube_vert:om,backgroundCube_frag:lm,cube_vert:cm,cube_frag:hm,depth_vert:um,depth_frag:dm,distanceRGBA_vert:fm,distanceRGBA_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:_m,linedashed_frag:vm,meshbasic_vert:xm,meshbasic_frag:ym,meshlambert_vert:bm,meshlambert_frag:Mm,meshmatcap_vert:Sm,meshmatcap_frag:Em,meshnormal_vert:wm,meshnormal_frag:Tm,meshphong_vert:Am,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Im,meshtoon_vert:Pm,meshtoon_frag:Lm,points_vert:Dm,points_frag:Um,shadow_vert:Nm,shadow_frag:Fm,sprite_vert:Om,sprite_frag:Bm},_e={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},bn={basic:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:It([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:It([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Xe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:It([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:It([_e.points,_e.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:It([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:It([_e.common,_e.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:It([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:It([_e.sprite,_e.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:It([_e.common,_e.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:It([_e.lights,_e.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};bn.physical={uniforms:It([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var mo={r:0,b:0,g:0},wi=new hn,km=new pt;function zm(i,e,t,n,s,r,a){let o=new Xe(0),l=r===!0?0:1,c,h,u=null,p=0,m=null;function d(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function _(S){let y=!1,R=d(S);R===null?f(o,l):R&&R.isColor&&(f(R,1),y=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,y){let R=d(y);R&&(R.isCubeTexture||R.mapping===ar)?(h===void 0&&(h=new bt(new Ki(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Ei(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),wi.copy(y.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(km.makeRotationFromEuler(wi)),h.material.toneMapped=Ke.getTransfer(R.colorSpace)!==it,(u!==R||p!==R.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,p=R.version,m=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new bt(new xi(2,2),new un({name:"BackgroundMaterial",uniforms:Ei(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(R.colorSpace)!==it,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||p!==R.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,p=R.version,m=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,y){S.getRGB(mo,Nl(i)),n.buffers.color.setClear(mo.r,mo.g,mo.b,y,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(o,l)},render:_,addToRenderList:g,dispose:w}}function Vm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(b,C,B,H,X){let q=!1,$=u(H,B,C);r!==$&&(r=$,c(r.object)),q=m(b,H,B,X),q&&d(b,H,B,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(b,C,B,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,C,B){let H=B.wireframe===!0,X=n[b.id];X===void 0&&(X={},n[b.id]=X);let q=X[C.id];q===void 0&&(q={},X[C.id]=q);let $=q[H];return $===void 0&&($=p(l()),q[H]=$),$}function p(b){let C=[],B=[],H=[];for(let X=0;X<t;X++)C[X]=0,B[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:H,object:b,attributes:{},index:null}}function m(b,C,B,H){let X=r.attributes,q=C.attributes,$=0,ie=B.getAttributes();for(let G in ie)if(ie[G].location>=0){let ve=X[G],Me=q[G];if(Me===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor)),ve===void 0||ve.attribute!==Me||Me&&ve.data!==Me.data)return!0;$++}return r.attributesNum!==$||r.index!==H}function d(b,C,B,H){let X={},q=C.attributes,$=0,ie=B.getAttributes();for(let G in ie)if(ie[G].location>=0){let ve=q[G];ve===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor));let Me={};Me.attribute=ve,ve&&ve.data&&(Me.data=ve.data),X[G]=Me,$++}r.attributes=X,r.attributesNum=$,r.index=H}function _(){let b=r.newAttributes;for(let C=0,B=b.length;C<B;C++)b[C]=0}function g(b){f(b,0)}function f(b,C){let B=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;B[b]=1,H[b]===0&&(i.enableVertexAttribArray(b),H[b]=1),X[b]!==C&&(i.vertexAttribDivisor(b,C),X[b]=C)}function w(){let b=r.newAttributes,C=r.enabledAttributes;for(let B=0,H=C.length;B<H;B++)C[B]!==b[B]&&(i.disableVertexAttribArray(B),C[B]=0)}function S(b,C,B,H,X,q,$){$===!0?i.vertexAttribIPointer(b,C,B,X,q):i.vertexAttribPointer(b,C,B,H,X,q)}function y(b,C,B,H){_();let X=H.attributes,q=B.getAttributes(),$=C.defaultAttributeValues;for(let ie in q){let G=q[ie];if(G.location>=0){let ue=X[ie];if(ue===void 0&&(ie==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),ie==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ue!==void 0){let ve=ue.normalized,Me=ue.itemSize,ke=e.get(ue);if(ke===void 0)continue;let Je=ke.buffer,j=ke.type,se=ke.bytesPerElement,k=j===i.INT||j===i.UNSIGNED_INT||ue.gpuType===Ua;if(ue.isInterleavedBufferAttribute){let J=ue.data,de=J.stride,Ae=ue.offset;if(J.isInstancedInterleavedBuffer){for(let Se=0;Se<G.locationSize;Se++)f(G.location+Se,J.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Se=0;Se<G.locationSize;Se++)g(G.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Se=0;Se<G.locationSize;Se++)S(G.location+Se,Me/G.locationSize,j,ve,de*se,(Ae+Me/G.locationSize*Se)*se,k)}else{if(ue.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)f(G.location+J,ue.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let J=0;J<G.locationSize;J++)g(G.location+J);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let J=0;J<G.locationSize;J++)S(G.location+J,Me/G.locationSize,j,ve,Me*se,Me/G.locationSize*J*se,k)}}else if($!==void 0){let ve=$[ie];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(G.location,ve);break;case 3:i.vertexAttrib3fv(G.location,ve);break;case 4:i.vertexAttrib4fv(G.location,ve);break;default:i.vertexAttrib1fv(G.location,ve)}}}}w()}function R(){D();for(let b in n){let C=n[b];for(let B in C){let H=C[B];for(let X in H)h(H[X].object),delete H[X];delete C[B]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;let C=n[b.id];for(let B in C){let H=C[B];for(let X in H)h(H[X].object),delete H[X];delete C[B]}delete n[b.id]}function I(b){for(let C in n){let B=n[C];if(B[b.id]===void 0)continue;let H=B[b.id];for(let X in H)h(H[X].object),delete H[X];delete B[b.id]}}function D(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function Hm(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let d=0;d<u;d++)m+=h[d];t.update(m,n,1)}function l(c,h,u,p){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<c.length;d++)a(c[d],h[d],p[d]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_]*p[_];t.update(d,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Gm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==en&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let D=I===as&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==dn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==yn&&!D)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=d>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function Wm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new mn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){let d=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||d===null||d.length===0||r&&!g)r?h(null):c();else{let w=r?0:n,S=w*4,y=f.clippingState||null;l.value=y,y=h(d,p,S,m);for(let R=0;R!==S;++R)y[R]=t[R];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,m,d){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,d!==!0||g===null){let f=m+_*4,w=p.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<f)&&(g=new Float32Array(f));for(let S=0,y=m;S!==_;++S,y+=4)a.copy(u[S]).applyMatrix4(w,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function $m(i){let e=new WeakMap;function t(a,o){return o===Pa?a.mapping=bi:o===La&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Pa||o===La)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ra(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var hs=4,Bh=[.125,.215,.35,.446,.526,.582],Ri=20,zl=new ir,kh=new Xe,Vl=null,Hl=0,Gl=0,Wl=!1,Ai=(1+Math.sqrt(5))/2,cs=1/Ai,zh=[new L(-Ai,cs,0),new L(Ai,cs,0),new L(-cs,0,Ai),new L(cs,0,Ai),new L(0,Ai,-cs),new L(0,Ai,cs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Xm=new L,vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Xm}=r;Vl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vl,Hl,Gl),this._renderer.xr.enabled=Wl,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:as,format:en,colorSpace:_i,depthBuffer:!1},s=Vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qm(r)),this._blurMaterial=Ym(r,e,t)}return s}_compileMaterial(e){let t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,zl)}_sceneToCubeUV(e,t,n,s,r){let l=new Rt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,m=u.toneMapping;u.getClearColor(kh),u.toneMapping=Nn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Ds({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new bt(new Ki,_),f=!1,w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,f=!0):(_.color.copy(kh),f=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let R=this._cubeSize;go(s,y*R,S>2?R:0,R,R),u.setRenderTarget(s),f&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=m,u.autoClear=p,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===bi||e.mapping===Mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;go(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,zl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=zh[(s-r-1)%zh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new bt(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,d=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ri-1),_=r/d,g=isFinite(r)?1+Math.floor(h*_):Ri;g>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ri}`);let f=[],w=0;for(let I=0;I<Ri;++I){let D=I/_,M=Math.exp(-D*D/2);f.push(M),I===0?w+=M:I<g&&(w+=2*M)}for(let I=0;I<f.length;I++)f[I]=f[I]/w;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:S}=this;p.dTheta.value=d,p.mipInt.value=S-n;let y=this._sizeLods[s],R=3*y*(s>S-hs?s-S+hs:0),A=4*(this._cubeSize-y);go(t,R,A,3*y,2*y),l.setRenderTarget(t),l.render(u,zl)}};function qm(i){let e=[],t=[],n=[],s=i,r=i-hs+1+Bh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-hs?l=Bh[a-i+hs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,d=6,_=3,g=2,f=1,w=new Float32Array(_*d*m),S=new Float32Array(g*d*m),y=new Float32Array(f*d*m);for(let A=0;A<m;A++){let I=A%3*2/3-1,D=A>2?0:-1,M=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];w.set(M,_*d*A),S.set(p,g*d*A);let b=[A,A,A,A,A,A];y.set(b,f*d*A)}let R=new Qt;R.setAttribute("position",new Gt(w,_)),R.setAttribute("uv",new Gt(S,g)),R.setAttribute("faceIndex",new Gt(y,f)),e.push(R),s>hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vh(i,e,t){let n=new _n(i,e,t);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ym(i,e,t){let n=new Float32Array(Ri),s=new L(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Hh(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Gh(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Pa||l===La,h=l===bi||l===Mi;if(c||h){let u=e.get(o),p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new vo(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new vo(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Zm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&qi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Km(i,e,t,n){let s={},r=new WeakMap;function a(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let d in p.attributes)e.remove(p.attributes[d]);p.removeEventListener("dispose",a),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(u){let p=u.attributes;for(let m in p)e.update(p[m],i.ARRAY_BUFFER)}function c(u){let p=[],m=u.index,d=u.attributes.position,_=0;if(m!==null){let w=m.array;_=m.version;for(let S=0,y=w.length;S<y;S+=3){let R=w[S+0],A=w[S+1],I=w[S+2];p.push(R,A,A,I,I,R)}}else if(d!==void 0){let w=d.array;_=d.version;for(let S=0,y=w.length/3-1;S<y;S+=3){let R=S+0,A=S+1,I=S+2;p.push(R,A,A,I,I,R)}}else return;let g=new(Ul(p)?Ns:Us)(p,1);g.version=_;let f=r.get(u);f&&e.remove(f),r.set(u,g)}function h(u){let p=r.get(u);if(p){let m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function jm(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*a),t.update(m,n,1)}function c(p,m,d){d!==0&&(i.drawElementsInstanced(n,m,r,p*a,d),t.update(m,n,d))}function h(p,m,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,d);let g=0;for(let f=0;f<d;f++)g+=m[f];t.update(g,n,1)}function u(p,m,d,_){if(d===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<p.length;f++)c(p[f]/a,m[f],_[f]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,_,0,d);let f=0;for(let w=0;w<d;w++)f+=m[w]*_[w];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function eg(i,e,t){let n=new WeakMap,s=new mt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(o);if(p===void 0||p.count!==u){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};p!==void 0&&p.texture.dispose();let m=o.morphAttributes.position!==void 0,d=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],S=0;m===!0&&(S=1),d===!0&&(S=2),_===!0&&(S=3);let y=o.attributes.position.count*S,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*R*4*u),I=new Ps(A,y,R,u);I.type=yn,I.needsUpdate=!0;let D=S*4;for(let b=0;b<u;b++){let C=g[b],B=f[b],H=w[b],X=y*R*4*b;for(let q=0;q<C.count;q++){let $=q*D;m===!0&&(s.fromBufferAttribute(C,q),A[X+$+0]=s.x,A[X+$+1]=s.y,A[X+$+2]=s.z,A[X+$+3]=0),d===!0&&(s.fromBufferAttribute(B,q),A[X+$+4]=s.x,A[X+$+5]=s.y,A[X+$+6]=s.z,A[X+$+7]=0),_===!0&&(s.fromBufferAttribute(H,q),A[X+$+8]=s.x,A[X+$+9]=s.y,A[X+$+10]=s.z,A[X+$+11]=H.itemSize===4?s.w:1)}}p={count:u,texture:I,size:new ge(y,R)},n.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let d=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",d),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function tg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var lu=new Wt,Wh=new ks(1,1),cu=new Ps,hu=new ia,uu=new Os,$h=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),Jh=new Float32Array(4);function ds(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=$h[s];if(r===void 0&&(r=new Float32Array(s),$h[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yo(i,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ng(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function ag(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Jh.set(n),i.uniformMatrix2fv(this.addr,!1,Jh),St(t,n)}}function og(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Yh.set(n),i.uniformMatrix3fv(this.addr,!1,Yh),St(t,n)}}function lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;qh.set(n),i.uniformMatrix4fv(this.addr,!1,qh),St(t,n)}}function cg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function fg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function _g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wh.compareFunction=Pl,r=Wh):r=lu,t.setTexture2D(e||r,s)}function vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hu,s)}function xg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||uu,s)}function yg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||cu,s)}function bg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return ag;case 35675:return og;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return yg}}function Mg(i,e){i.uniform1fv(this.addr,e)}function Sg(i,e){let t=ds(e,this.size,2);i.uniform2fv(this.addr,t)}function Eg(i,e){let t=ds(e,this.size,3);i.uniform3fv(this.addr,t)}function wg(i,e){let t=ds(e,this.size,4);i.uniform4fv(this.addr,t)}function Tg(i,e){let t=ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ag(i,e){let t=ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rg(i,e){let t=ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cg(i,e){i.uniform1iv(this.addr,e)}function Ig(i,e){i.uniform2iv(this.addr,e)}function Pg(i,e){i.uniform3iv(this.addr,e)}function Lg(i,e){i.uniform4iv(this.addr,e)}function Dg(i,e){i.uniform1uiv(this.addr,e)}function Ug(i,e){i.uniform2uiv(this.addr,e)}function Ng(i,e){i.uniform3uiv(this.addr,e)}function Fg(i,e){i.uniform4uiv(this.addr,e)}function Og(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||lu,r[a])}function Bg(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hu,r[a])}function kg(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||uu,r[a])}function zg(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||cu,r[a])}function Vg(i){switch(i){case 5126:return Mg;case 35664:return Sg;case 35665:return Eg;case 35666:return wg;case 35674:return Tg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Ig;case 35668:case 35672:return Pg;case 35669:case 35673:return Lg;case 5125:return Dg;case 36294:return Ug;case 36295:return Ng;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return zg}}var Xl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bg(t.type)}},ql=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vg(t.type)}},Yl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},$l=/(\w+)(\])?(\[|\.)?/g;function Zh(i,e){i.seq.push(e),i.map[e.id]=e}function Hg(i,e,t){let n=i.name,s=n.length;for($l.lastIndex=0;;){let r=$l.exec(n),a=$l.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Zh(t,c===void 0?new Xl(o,i,e):new ql(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Yl(o),Zh(t,u)),t=u}}}var us=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Hg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Kh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Gg=37297,Wg=0;function $g(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var jh=new Ve;function Xg(i){Ke._getMatrix(jh,Ke.workingColorSpace,i);let e=`mat3( ${jh.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Rs:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+$g(i.getShaderSource(e),o)}else return r}function qg(i,e){let t=Xg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Yg(i,e){let t;switch(e){case dh:t="Linear";break;case fh:t="Reinhard";break;case ph:t="Cineon";break;case Ia:t="ACESFilmic";break;case gh:t="AgX";break;case _h:t="Neutral";break;case mh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _o=new L;function Jg(){Ke.getLuminanceCoefficients(_o);let i=_o.x.toFixed(4),e=_o.y.toFixed(4),t=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function Kg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function fr(i){return i!==""}function eu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(i){return i.replace(Qg,t_)}var e_=new Map;function t_(i,e){let t=qe[e];if(t===void 0){let n=e_.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jl(t)}var n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(i){return i.replace(n_,i_)}function i_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function iu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$c?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function r_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bi:case Mi:e="ENVMAP_TYPE_CUBE";break;case ar:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Mi&&(e="ENVMAP_MODE_REFRACTION"),e}function o_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yl:e="ENVMAP_BLENDING_MULTIPLY";break;case hh:e="ENVMAP_BLENDING_MIX";break;case uh:e="ENVMAP_BLENDING_ADD";break}return e}function l_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function c_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=s_(t),c=r_(t),h=a_(t),u=o_(t),p=l_(t),m=Zg(t),d=Kg(r),_=s.createProgram(),g,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(fr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(fr).join(`
`),f.length>0&&(f+=`
`)):(g=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),f=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Yg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,qg("linearToOutputTexel",t.outputColorSpace),Jg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),a=Jl(a),a=eu(a,t),a=tu(a,t),o=Jl(o),o=eu(o,t),o=tu(o,t),a=nu(a),o=nu(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===Ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=w+g+a,y=w+f+o,R=Kh(s,s.VERTEX_SHADER,S),A=Kh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,R),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(C){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(R)||"",X=s.getShaderInfoLog(A)||"",q=B.trim(),$=H.trim(),ie=X.trim(),G=!0,ue=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,A);else{let ve=Qh(s,R,"vertex"),Me=Qh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+ve+`
`+Me)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):($===""||ie==="")&&(ue=!1);ue&&(C.diagnostics={runnable:G,programLog:q,vertexShader:{log:$,prefix:g},fragmentShader:{log:ie,prefix:f}})}s.deleteShader(R),s.deleteShader(A),D=new us(s,_),M=jg(s,_)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,Gg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}var h_=0,Zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kl(e),t.set(e,n)),n}},Kl=class{constructor(e){this.id=h_++,this.code=e,this.usedTimes=0}};function u_(i,e,t,n,s,r,a){let o=new Zi,l=new Zl,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,b,C,B,H){let X=B.fog,q=H.geometry,$=M.isMeshStandardMaterial?B.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),G=ie&&ie.mapping===ar?ie.image.height:null,ue=d[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let ve=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Me=ve!==void 0?ve.length:0,ke=0;q.morphAttributes.position!==void 0&&(ke=1),q.morphAttributes.normal!==void 0&&(ke=2),q.morphAttributes.color!==void 0&&(ke=3);let Je,j,se,k;if(ue){let nt=bn[ue];Je=nt.vertexShader,j=nt.fragmentShader}else Je=M.vertexShader,j=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),k=l.getFragmentShaderID(M);let J=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Ae=H.isInstancedMesh===!0,Se=H.isBatchedMesh===!0,We=!!M.map,tt=!!M.matcap,T=!!ie,ne=!!M.aoMap,Q=!!M.lightMap,K=!!M.bumpMap,Z=!!M.normalMap,fe=!!M.displacementMap,re=!!M.emissiveMap,pe=!!M.metalnessMap,He=!!M.roughnessMap,ze=M.anisotropy>0,E=M.clearcoat>0,v=M.dispersion>0,F=M.iridescence>0,W=M.sheen>0,te=M.transmission>0,Y=ze&&!!M.anisotropyMap,Pe=E&&!!M.clearcoatMap,he=E&&!!M.clearcoatNormalMap,Re=E&&!!M.clearcoatRoughnessMap,Ce=F&&!!M.iridescenceMap,ae=F&&!!M.iridescenceThicknessMap,be=W&&!!M.sheenColorMap,Oe=W&&!!M.sheenRoughnessMap,Le=!!M.specularMap,xe=!!M.specularColorMap,$e=!!M.specularIntensityMap,P=te&&!!M.transmissionMap,ce=te&&!!M.thicknessMap,me=!!M.gradientMap,we=!!M.alphaMap,oe=M.alphaTest>0,ee=!!M.alphaHash,Ie=!!M.extensions,Ge=Nn;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ge=i.toneMapping);let ot={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:Je,fragmentShader:j,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:k,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Se,batchingColor:Se&&H._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&H.instanceColor!==null,instancingMorph:Ae&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:_i,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:tt,envMap:T,envMapMode:T&&ie.mapping,envMapCubeUVHeight:G,aoMap:ne,lightMap:Q,bumpMap:K,normalMap:Z,displacementMap:p&&fe,emissiveMap:re,normalMapObjectSpace:Z&&M.normalMapType===bh,normalMapTangentSpace:Z&&M.normalMapType===Il,metalnessMap:pe,roughnessMap:He,anisotropy:ze,anisotropyMap:Y,clearcoat:E,clearcoatMap:Pe,clearcoatNormalMap:he,clearcoatRoughnessMap:Re,dispersion:v,iridescence:F,iridescenceMap:Ce,iridescenceThicknessMap:ae,sheen:W,sheenColorMap:be,sheenRoughnessMap:Oe,specularMap:Le,specularColorMap:xe,specularIntensityMap:$e,transmission:te,transmissionMap:P,thicknessMap:ce,gradientMap:me,opaque:M.transparent===!1&&M.blending===mi&&M.alphaToCoverage===!1,alphaMap:we,alphaTest:oe,alphaHash:ee,combine:M.combine,mapUv:We&&_(M.map.channel),aoMapUv:ne&&_(M.aoMap.channel),lightMapUv:Q&&_(M.lightMap.channel),bumpMapUv:K&&_(M.bumpMap.channel),normalMapUv:Z&&_(M.normalMap.channel),displacementMapUv:fe&&_(M.displacementMap.channel),emissiveMapUv:re&&_(M.emissiveMap.channel),metalnessMapUv:pe&&_(M.metalnessMap.channel),roughnessMapUv:He&&_(M.roughnessMap.channel),anisotropyMapUv:Y&&_(M.anisotropyMap.channel),clearcoatMapUv:Pe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(M.sheenRoughnessMap.channel),specularMapUv:Le&&_(M.specularMap.channel),specularColorMapUv:xe&&_(M.specularColorMap.channel),specularIntensityMapUv:$e&&_(M.specularIntensityMap.channel),transmissionMapUv:P&&_(M.transmissionMap.channel),thicknessMapUv:ce&&_(M.thicknessMap.channel),alphaMapUv:we&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Z||ze),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(We||we),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:de,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===it,decodeVideoTextureEmissive:re&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xn,flipSided:M.side===Ut,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ie&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&M.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function f(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)b.push(C),b.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(w(b,M),S(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function w(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function S(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){let b=d[M.type],C;if(b){let B=bn[b];C=Lh.clone(B.uniforms)}else C=M.uniforms;return C}function R(M,b){let C;for(let B=0,H=h.length;B<H;B++){let X=h[B];if(X.cacheKey===b){C=X,++C.usedTimes;break}}return C===void 0&&(C=new c_(i,b,M,r),h.push(C)),C}function A(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function I(M){l.remove(M)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:D}}function d_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function f_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function su(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ru(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,p,m,d,_,g){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:d,renderOrder:u.renderOrder,z:_,group:g},i[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=d,f.renderOrder=u.renderOrder,f.z=_,f.group=g),e++,f}function o(u,p,m,d,_,g){let f=a(u,p,m,d,_,g);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(u,p,m,d,_,g){let f=a(u,p,m,d,_,g);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,p){t.length>1&&t.sort(u||f_),n.length>1&&n.sort(p||su),s.length>1&&s.sort(p||su)}function h(){for(let u=e,p=i.length;u<p;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function p_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new ru,i.set(n,[a])):s>=r.length?(a=new ru,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function m_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Xe};break;case"SpotLight":t={position:new L,direction:new L,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function g_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var __=0;function v_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function x_(i){let e=new m_,t=g_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new pt,a=new pt;function o(c){let h=0,u=0,p=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,d=0,_=0,g=0,f=0,w=0,S=0,y=0,R=0,A=0,I=0;c.sort(v_);for(let M=0,b=c.length;M<b;M++){let C=c[M],B=C.color,H=C.intensity,X=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=B.r*H,u+=B.g*H,p+=B.b*H;else if(C.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(C.sh.coefficients[$],H);I++}else if(C.isDirectionalLight){let $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ie=C.shadow,G=t.get(C);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=C.shadow.matrix,w++}n.directional[m]=$,m++}else if(C.isSpotLight){let $=e.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(B).multiplyScalar(H),$.distance=X,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,n.spot[_]=$;let ie=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,ie.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=ie.matrix,C.castShadow){let G=t.get(C);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=q,y++}_++}else if(C.isRectAreaLight){let $=e.get(C);$.color.copy(B).multiplyScalar(H),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=$,g++}else if(C.isPointLight){let $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){let ie=C.shadow,G=t.get(C);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,G.shadowCameraNear=ie.camera.near,G.shadowCameraFar=ie.camera.far,n.pointShadow[d]=G,n.pointShadowMap[d]=q,n.pointShadowMatrix[d]=C.shadow.matrix,S++}n.point[d]=$,d++}else if(C.isHemisphereLight){let $=e.get(C);$.skyColor.copy(C.color).multiplyScalar(H),$.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[f]=$,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let D=n.hash;(D.directionalLength!==m||D.pointLength!==d||D.spotLength!==_||D.rectAreaLength!==g||D.hemiLength!==f||D.numDirectionalShadows!==w||D.numPointShadows!==S||D.numSpotShadows!==y||D.numSpotMaps!==R||D.numLightProbes!==I)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=g,n.point.length=d,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,D.directionalLength=m,D.pointLength=d,D.spotLength=_,D.rectAreaLength=g,D.hemiLength=f,D.numDirectionalShadows=w,D.numPointShadows=S,D.numSpotShadows=y,D.numSpotMaps=R,D.numLightProbes=I,n.version=__++)}function l(c,h){let u=0,p=0,m=0,d=0,_=0,g=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){let S=c[f];if(S.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(S.isSpotLight){let y=n.spot[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),m++}else if(S.isRectAreaLight){let y=n.rectArea[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),d++}else if(S.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),p++}else if(S.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function au(i){let e=new x_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function y_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new au(i),e.set(s,[o])):r>=a.length?(o=new au(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function S_(i,e,t){let n=new Qi,s=new ge,r=new ge,a=new mt,o=new ua({depthPacking:yh}),l=new da,c={},h=t.maxTextureSize,u={[Pn]:Ut,[Ut]:Pn,[xn]:xn},p=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:b_,fragmentShader:M_}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let d=new Qt;d.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new bt(d,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gl;let f=this.type;this.render=function(A,I,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Un),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=f!==vn&&this.type===vn,X=f===vn&&this.type!==vn;for(let q=0,$=A.length;q<$;q++){let ie=A[q],G=ie.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ue=G.getFrameExtents();if(s.multiply(ue),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,G.mapSize.y=r.y)),G.map===null||H===!0||X===!0){let Me=this.type!==vn?{minFilter:jt,magFilter:jt}:{};G.map!==null&&G.map.dispose(),G.map=new _n(s.x,s.y,Me),G.map.texture.name=ie.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let ve=G.getViewportCount();for(let Me=0;Me<ve;Me++){let ke=G.getViewport(Me);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),B.viewport(a),G.updateMatrices(ie,Me),n=G.getFrustum(),y(I,D,G.camera,ie,this.type)}G.isPointLightShadow!==!0&&this.type===vn&&w(G,D),G.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(M,b,C)};function w(A,I){let D=e.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new _n(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,D,p,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,D,m,_,null)}function S(A,I,D,M){let b=null,C=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)b=C;else if(b=D.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let B=b.uuid,H=I.uuid,X=c[B];X===void 0&&(X={},c[B]=X);let q=X[H];q===void 0&&(q=b.clone(),X[H]=q,I.addEventListener("dispose",R)),b=q}if(b.visible=I.visible,b.wireframe=I.wireframe,M===vn?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:u[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=i.properties.get(b);B.light=D}return b}function y(A,I,D,M,b){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===vn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let H=e.update(A),X=A.material;if(Array.isArray(X)){let q=H.groups;for(let $=0,ie=q.length;$<ie;$++){let G=q[$],ue=X[G.materialIndex];if(ue&&ue.visible){let ve=S(A,ue,M,b);A.onBeforeShadow(i,A,I,D,H,ve,G),i.renderBufferDirect(D,null,H,ve,A,G),A.onAfterShadow(i,A,I,D,H,ve,G)}}}else if(X.visible){let q=S(A,X,M,b);A.onBeforeShadow(i,A,I,D,H,q,null),i.renderBufferDirect(D,null,H,q,A,null),A.onAfterShadow(i,A,I,D,H,q,null)}}let B=A.children;for(let H=0,X=B.length;H<X;H++)y(B[H],I,D,M,b)}function R(A){A.target.removeEventListener("dispose",R);for(let D in c){let M=c[D],b=A.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var E_={[Sa]:Ea,[wa]:Ra,[Ta]:Ca,[gi]:Aa,[Ea]:Sa,[Ra]:wa,[Ca]:Ta,[Aa]:gi};function w_(i,e){function t(){let P=!1,ce=new mt,me=null,we=new mt(0,0,0,0);return{setMask:function(oe){me!==oe&&!P&&(i.colorMask(oe,oe,oe,oe),me=oe)},setLocked:function(oe){P=oe},setClear:function(oe,ee,Ie,Ge,ot){ot===!0&&(oe*=Ge,ee*=Ge,Ie*=Ge),ce.set(oe,ee,Ie,Ge),we.equals(ce)===!1&&(i.clearColor(oe,ee,Ie,Ge),we.copy(ce))},reset:function(){P=!1,me=null,we.set(-1,0,0,0)}}}function n(){let P=!1,ce=!1,me=null,we=null,oe=null;return{setReversed:function(ee){if(ce!==ee){let Ie=e.get("EXT_clip_control");ee?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ce=ee;let Ge=oe;oe=null,this.setClear(Ge)}},getReversed:function(){return ce},setTest:function(ee){ee?J(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(ee){me!==ee&&!P&&(i.depthMask(ee),me=ee)},setFunc:function(ee){if(ce&&(ee=E_[ee]),we!==ee){switch(ee){case Sa:i.depthFunc(i.NEVER);break;case Ea:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case gi:i.depthFunc(i.LEQUAL);break;case Ta:i.depthFunc(i.EQUAL);break;case Aa:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=ee}},setLocked:function(ee){P=ee},setClear:function(ee){oe!==ee&&(ce&&(ee=1-ee),i.clearDepth(ee),oe=ee)},reset:function(){P=!1,me=null,we=null,oe=null,ce=!1}}}function s(){let P=!1,ce=null,me=null,we=null,oe=null,ee=null,Ie=null,Ge=null,ot=null;return{setTest:function(nt){P||(nt?J(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!P&&(i.stencilMask(nt),ce=nt)},setFunc:function(nt,En,pn){(me!==nt||we!==En||oe!==pn)&&(i.stencilFunc(nt,En,pn),me=nt,we=En,oe=pn)},setOp:function(nt,En,pn){(ee!==nt||Ie!==En||Ge!==pn)&&(i.stencilOp(nt,En,pn),ee=nt,Ie=En,Ge=pn)},setLocked:function(nt){P=nt},setClear:function(nt){ot!==nt&&(i.clearStencil(nt),ot=nt)},reset:function(){P=!1,ce=null,me=null,we=null,oe=null,ee=null,Ie=null,Ge=null,ot=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},p=new WeakMap,m=[],d=null,_=!1,g=null,f=null,w=null,S=null,y=null,R=null,A=null,I=new Xe(0,0,0),D=0,M=!1,b=null,C=null,B=null,H=null,X=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ie=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(G)[1]),$=ie>=1):G.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),$=ie>=2);let ue=null,ve={},Me=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),Je=new mt().fromArray(Me),j=new mt().fromArray(ke);function se(P,ce,me,we){let oe=new Uint8Array(4),ee=i.createTexture();i.bindTexture(P,ee),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<me;Ie++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(ce+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return ee}let k={};k[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(gi),K(!1),Z(ml),J(i.CULL_FACE),ne(Un);function J(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function de(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ae(P,ce){return u[P]!==ce?(i.bindFramebuffer(P,ce),u[P]=ce,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ce),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Se(P,ce){let me=m,we=!1;if(P){me=p.get(ce),me===void 0&&(me=[],p.set(ce,me));let oe=P.textures;if(me.length!==oe.length||me[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Ie=oe.length;ee<Ie;ee++)me[ee]=i.COLOR_ATTACHMENT0+ee;me.length=oe.length,we=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,we=!0);we&&i.drawBuffers(me)}function We(P){return d!==P?(i.useProgram(P),d=P,!0):!1}let tt={[Zn]:i.FUNC_ADD,[qc]:i.FUNC_SUBTRACT,[Yc]:i.FUNC_REVERSE_SUBTRACT};tt[Jc]=i.MIN,tt[Zc]=i.MAX;let T={[Kc]:i.ZERO,[jc]:i.ONE,[Qc]:i.SRC_COLOR,[Zr]:i.SRC_ALPHA,[rh]:i.SRC_ALPHA_SATURATE,[ih]:i.DST_COLOR,[th]:i.DST_ALPHA,[eh]:i.ONE_MINUS_SRC_COLOR,[Kr]:i.ONE_MINUS_SRC_ALPHA,[sh]:i.ONE_MINUS_DST_COLOR,[nh]:i.ONE_MINUS_DST_ALPHA,[ah]:i.CONSTANT_COLOR,[oh]:i.ONE_MINUS_CONSTANT_COLOR,[lh]:i.CONSTANT_ALPHA,[ch]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(P,ce,me,we,oe,ee,Ie,Ge,ot,nt){if(P===Un){_===!0&&(de(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),P!==Xc){if(P!==g||nt!==M){if((f!==Zn||y!==Zn)&&(i.blendEquation(i.FUNC_ADD),f=Zn,y=Zn),nt)switch(P){case mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFunc(i.ONE,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,S=null,R=null,A=null,I.set(0,0,0),D=0,g=P,M=nt}return}oe=oe||ce,ee=ee||me,Ie=Ie||we,(ce!==f||oe!==y)&&(i.blendEquationSeparate(tt[ce],tt[oe]),f=ce,y=oe),(me!==w||we!==S||ee!==R||Ie!==A)&&(i.blendFuncSeparate(T[me],T[we],T[ee],T[Ie]),w=me,S=we,R=ee,A=Ie),(Ge.equals(I)===!1||ot!==D)&&(i.blendColor(Ge.r,Ge.g,Ge.b,ot),I.copy(Ge),D=ot),g=P,M=!1}function Q(P,ce){P.side===xn?de(i.CULL_FACE):J(i.CULL_FACE);let me=P.side===Ut;ce&&(me=!me),K(me),P.blending===mi&&P.transparent===!1?ne(Un):ne(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let we=P.stencilWrite;o.setTest(we),we&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),re(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(P){b!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),b=P)}function Z(P){P!==Gc?(J(i.CULL_FACE),P!==C&&(P===ml?i.cullFace(i.BACK):P===Wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),C=P}function fe(P){P!==B&&($&&i.lineWidth(P),B=P)}function re(P,ce,me){P?(J(i.POLYGON_OFFSET_FILL),(H!==ce||X!==me)&&(i.polygonOffset(ce,me),H=ce,X=me)):de(i.POLYGON_OFFSET_FILL)}function pe(P){P?J(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function He(P){P===void 0&&(P=i.TEXTURE0+q-1),ue!==P&&(i.activeTexture(P),ue=P)}function ze(P,ce,me){me===void 0&&(ue===null?me=i.TEXTURE0+q-1:me=ue);let we=ve[me];we===void 0&&(we={type:void 0,texture:void 0},ve[me]=we),(we.type!==P||we.texture!==ce)&&(ue!==me&&(i.activeTexture(me),ue=me),i.bindTexture(P,ce||k[P]),we.type=P,we.texture=ce)}function E(){let P=ve[ue];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(P){Je.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Je.copy(P))}function Oe(P){j.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),j.copy(P))}function Le(P,ce){let me=c.get(ce);me===void 0&&(me=new WeakMap,c.set(ce,me));let we=me.get(P);we===void 0&&(we=i.getUniformBlockIndex(ce,P.name),me.set(P,we))}function xe(P,ce){let we=c.get(ce).get(P);l.get(ce)!==we&&(i.uniformBlockBinding(ce,we,P.__bindingPointIndex),l.set(ce,we))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ue=null,ve={},u={},p=new WeakMap,m=[],d=null,_=!1,g=null,f=null,w=null,S=null,y=null,R=null,A=null,I=new Xe(0,0,0),D=0,M=!1,b=null,C=null,B=null,H=null,X=null,Je.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:de,bindFramebuffer:Ae,drawBuffers:Se,useProgram:We,setBlending:ne,setMaterial:Q,setFlipSided:K,setCullFace:Z,setLineWidth:fe,setPolygonOffset:re,setScissorTest:pe,activeTexture:He,bindTexture:ze,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:Ce,texImage3D:ae,updateUBOMapping:Le,uniformBlockBinding:xe,texStorage2D:he,texStorage3D:Re,texSubImage2D:W,texSubImage3D:te,compressedTexSubImage2D:Y,compressedTexSubImage3D:Pe,scissor:be,viewport:Oe,reset:$e}}function T_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap,u,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(E,v){return m?new OffscreenCanvas(E,v):Is("canvas")}function _(E,v,F){let W=1,te=ze(E);if((te.width>F||te.height>F)&&(W=F/Math.max(te.width,te.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Y=Math.floor(W*te.width),Pe=Math.floor(W*te.height);u===void 0&&(u=d(Y,Pe));let he=v?d(Y,Pe):u;return he.width=Y,he.height=Pe,he.getContext("2d").drawImage(E,0,0,Y,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Y+"x"+Pe+")."),he}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),E;return E}function g(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,v,F,W,te=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=v;if(v===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),v===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){let Pe=te?Rs:Ke.getTransfer(W);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=Pe===it?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(E,v){let F;return E?v===null||v===ii||v===os?F=i.DEPTH24_STENCIL8:v===yn?F=i.DEPTH32F_STENCIL8:v===rs&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ii||v===os?F=i.DEPTH_COMPONENT24:v===yn?F=i.DEPTH_COMPONENT32F:v===rs&&(F=i.DEPTH_COMPONENT16),F}function R(E,v){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==jt&&E.minFilter!==cn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){let v=E.target;v.removeEventListener("dispose",A),D(v),v.isVideoTexture&&h.delete(v)}function I(E){let v=E.target;v.removeEventListener("dispose",I),b(v)}function D(E){let v=n.get(E);if(v.__webglInit===void 0)return;let F=E.source,W=p.get(F);if(W){let te=W[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&M(E),Object.keys(W).length===0&&p.delete(F)}n.remove(E)}function M(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let F=E.source,W=p.get(F);delete W[v.__cacheKey],a.memory.textures--}function b(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let te=0;te<v.__webglFramebuffer[W].length;te++)i.deleteFramebuffer(v.__webglFramebuffer[W][te]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=E.textures;for(let W=0,te=F.length;W<te;W++){let Y=n.get(F[W]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(F[W])}n.remove(E)}let C=0;function B(){C=0}function H(){let E=C;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),C+=1,E}function X(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function q(E,v){let F=n.get(E);if(E.isVideoTexture&&pe(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){let W=E.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(F,E,v);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function $(E,v){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){k(F,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function ie(E,v){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){k(F,E,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function G(E,v){let F=n.get(E);if(E.version>0&&F.__version!==E.version){J(F,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}let ue={[jr]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[Qr]:i.MIRRORED_REPEAT},ve={[jt]:i.NEAREST,[vh]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Da]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},Me={[Mh]:i.NEVER,[Rh]:i.ALWAYS,[Sh]:i.LESS,[Pl]:i.LEQUAL,[Eh]:i.EQUAL,[Ah]:i.GEQUAL,[wh]:i.GREATER,[Th]:i.NOTEQUAL};function ke(E,v){if(v.type===yn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===cn||v.magFilter===Da||v.magFilter===or||v.magFilter===ni||v.minFilter===cn||v.minFilter===Da||v.minFilter===or||v.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ue[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ue[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ue[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ve[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ve[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===jt||v.minFilter!==or&&v.minFilter!==ni||v.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Je(E,v){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));let W=v.source,te=p.get(W);te===void 0&&(te={},p.set(W,te));let Y=X(v);if(Y!==E.__cacheKey){te[Y]===void 0&&(te[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),te[Y].usedTimes++;let Pe=te[E.__cacheKey];Pe!==void 0&&(te[E.__cacheKey].usedTimes--,Pe.usedTimes===0&&M(v)),E.__cacheKey=Y,E.__webglTexture=te[Y].texture}return F}function j(E,v,F){return Math.floor(Math.floor(E/F)/v)}function se(E,v,F,W){let Y=E.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,W,v.data);else{Y.sort((ae,be)=>ae.start-be.start);let Pe=0;for(let ae=1;ae<Y.length;ae++){let be=Y[Pe],Oe=Y[ae],Le=be.start+be.count,xe=j(Oe.start,v.width,4),$e=j(be.start,v.width,4);Oe.start<=Le+1&&xe===$e&&j(Oe.start+Oe.count-1,v.width,4)===xe?be.count=Math.max(be.count,Oe.start+Oe.count-be.start):(++Pe,Y[Pe]=Oe)}Y.length=Pe+1;let he=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ae=0,be=Y.length;ae<be;ae++){let Oe=Y[ae],Le=Math.floor(Oe.start/4),xe=Math.ceil(Oe.count/4),$e=Le%v.width,P=Math.floor(Le/v.width),ce=xe,me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,$e,P,ce,me,F,W,v.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function k(E,v,F){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);let te=Je(E,v),Y=v.source;t.bindTexture(W,E.__webglTexture,i.TEXTURE0+F);let Pe=n.get(Y);if(Y.version!==Pe.__version||te===!0){t.activeTexture(i.TEXTURE0+F);let he=Ke.getPrimaries(Ke.workingColorSpace),Re=v.colorSpace===Fn?null:Ke.getPrimaries(v.colorSpace),Ce=v.colorSpace===Fn||he===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ae=_(v.image,!1,s.maxTextureSize);ae=He(v,ae);let be=r.convert(v.format,v.colorSpace),Oe=r.convert(v.type),Le=S(v.internalFormat,be,Oe,v.colorSpace,v.isVideoTexture);ke(W,v);let xe,$e=v.mipmaps,P=v.isVideoTexture!==!0,ce=Pe.__version===void 0||te===!0,me=Y.dataReady,we=R(v,ae);if(v.isDepthTexture)Le=y(v.format===ls,v.type),ce&&(P?t.texStorage2D(i.TEXTURE_2D,1,Le,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Le,ae.width,ae.height,0,be,Oe,null));else if(v.isDataTexture)if($e.length>0){P&&ce&&t.texStorage2D(i.TEXTURE_2D,we,Le,$e[0].width,$e[0].height);for(let oe=0,ee=$e.length;oe<ee;oe++)xe=$e[oe],P?me&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,xe.width,xe.height,be,Oe,xe.data):t.texImage2D(i.TEXTURE_2D,oe,Le,xe.width,xe.height,0,be,Oe,xe.data);v.generateMipmaps=!1}else P?(ce&&t.texStorage2D(i.TEXTURE_2D,we,Le,ae.width,ae.height),me&&se(v,ae,be,Oe)):t.texImage2D(i.TEXTURE_2D,0,Le,ae.width,ae.height,0,be,Oe,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){P&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Le,$e[0].width,$e[0].height,ae.depth);for(let oe=0,ee=$e.length;oe<ee;oe++)if(xe=$e[oe],v.format!==en)if(be!==null)if(P){if(me)if(v.layerUpdates.size>0){let Ie=kl(xe.width,xe.height,v.format,v.type);for(let Ge of v.layerUpdates){let ot=xe.data.subarray(Ge*Ie/xe.data.BYTES_PER_ELEMENT,(Ge+1)*Ie/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Ge,xe.width,xe.height,1,be,ot)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,ae.depth,be,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Le,xe.width,xe.height,ae.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,ae.depth,be,Oe,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Le,xe.width,xe.height,ae.depth,0,be,Oe,xe.data)}else{P&&ce&&t.texStorage2D(i.TEXTURE_2D,we,Le,$e[0].width,$e[0].height);for(let oe=0,ee=$e.length;oe<ee;oe++)xe=$e[oe],v.format!==en?be!==null?P?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,xe.width,xe.height,be,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?me&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,xe.width,xe.height,be,Oe,xe.data):t.texImage2D(i.TEXTURE_2D,oe,Le,xe.width,xe.height,0,be,Oe,xe.data)}else if(v.isDataArrayTexture)if(P){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Le,ae.width,ae.height,ae.depth),me)if(v.layerUpdates.size>0){let oe=kl(ae.width,ae.height,v.format,v.type);for(let ee of v.layerUpdates){let Ie=ae.data.subarray(ee*oe/ae.data.BYTES_PER_ELEMENT,(ee+1)*oe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,ae.width,ae.height,1,be,Oe,Ie)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,be,Oe,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,be,Oe,ae.data);else if(v.isData3DTexture)P?(ce&&t.texStorage3D(i.TEXTURE_3D,we,Le,ae.width,ae.height,ae.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,be,Oe,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,be,Oe,ae.data);else if(v.isFramebufferTexture){if(ce)if(P)t.texStorage2D(i.TEXTURE_2D,we,Le,ae.width,ae.height);else{let oe=ae.width,ee=ae.height;for(let Ie=0;Ie<we;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Le,oe,ee,0,be,Oe,null),oe>>=1,ee>>=1}}else if($e.length>0){if(P&&ce){let oe=ze($e[0]);t.texStorage2D(i.TEXTURE_2D,we,Le,oe.width,oe.height)}for(let oe=0,ee=$e.length;oe<ee;oe++)xe=$e[oe],P?me&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,be,Oe,xe):t.texImage2D(i.TEXTURE_2D,oe,Le,be,Oe,xe);v.generateMipmaps=!1}else if(P){if(ce){let oe=ze(ae);t.texStorage2D(i.TEXTURE_2D,we,Le,oe.width,oe.height)}me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Oe,ae)}else t.texImage2D(i.TEXTURE_2D,0,Le,be,Oe,ae);g(v)&&f(W),Pe.__version=Y.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function J(E,v,F){if(v.image.length!==6)return;let W=Je(E,v),te=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);let Y=n.get(te);if(te.version!==Y.__version||W===!0){t.activeTexture(i.TEXTURE0+F);let Pe=Ke.getPrimaries(Ke.workingColorSpace),he=v.colorSpace===Fn?null:Ke.getPrimaries(v.colorSpace),Re=v.colorSpace===Fn||Pe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Ce=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,be=[];for(let ee=0;ee<6;ee++)!Ce&&!ae?be[ee]=_(v.image[ee],!0,s.maxCubemapSize):be[ee]=ae?v.image[ee].image:v.image[ee],be[ee]=He(v,be[ee]);let Oe=be[0],Le=r.convert(v.format,v.colorSpace),xe=r.convert(v.type),$e=S(v.internalFormat,Le,xe,v.colorSpace),P=v.isVideoTexture!==!0,ce=Y.__version===void 0||W===!0,me=te.dataReady,we=R(v,Oe);ke(i.TEXTURE_CUBE_MAP,v);let oe;if(Ce){P&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,$e,Oe.width,Oe.height);for(let ee=0;ee<6;ee++){oe=be[ee].mipmaps;for(let Ie=0;Ie<oe.length;Ie++){let Ge=oe[Ie];v.format!==en?Le!==null?P?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,Ge.width,Ge.height,Le,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,$e,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,Ge.width,Ge.height,Le,xe,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,$e,Ge.width,Ge.height,0,Le,xe,Ge.data)}}}else{if(oe=v.mipmaps,P&&ce){oe.length>0&&we++;let ee=ze(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,$e,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){P?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,be[ee].width,be[ee].height,Le,xe,be[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,be[ee].width,be[ee].height,0,Le,xe,be[ee].data);for(let Ie=0;Ie<oe.length;Ie++){let ot=oe[Ie].image[ee].image;P?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,ot.width,ot.height,Le,xe,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,$e,ot.width,ot.height,0,Le,xe,ot.data)}}else{P?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,xe,be[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,Le,xe,be[ee]);for(let Ie=0;Ie<oe.length;Ie++){let Ge=oe[Ie];P?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,Le,xe,Ge.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,$e,Le,xe,Ge.image[ee])}}}g(v)&&f(i.TEXTURE_CUBE_MAP),Y.__version=te.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function de(E,v,F,W,te,Y){let Pe=r.convert(F.format,F.colorSpace),he=r.convert(F.type),Re=S(F.internalFormat,Pe,he,F.colorSpace),Ce=n.get(v),ae=n.get(F);if(ae.__renderTarget=v,!Ce.__hasExternalTextures){let be=Math.max(1,v.width>>Y),Oe=Math.max(1,v.height>>Y);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,Y,Re,be,Oe,v.depth,0,Pe,he,null):t.texImage2D(te,Y,Re,be,Oe,0,Pe,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),re(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,te,ae.__webglTexture,0,fe(v)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,te,ae.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(E,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let W=v.depthTexture,te=W&&W.isDepthTexture?W.type:null,Y=y(v.stencilBuffer,te),Pe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=fe(v);re(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,Y,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Y,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Y,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,E)}else{let W=v.textures;for(let te=0;te<W.length;te++){let Y=W[te],Pe=r.convert(Y.format,Y.colorSpace),he=r.convert(Y.type),Re=S(Y.internalFormat,Pe,he,Y.colorSpace),Ce=fe(v);F&&re(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Re,v.width,v.height):re(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,Re,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Re,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);let te=W.__webglTexture,Y=fe(v);if(v.depthTexture.format===$i)re(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(v.depthTexture.format===ls)re(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function We(E){let v=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let W=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",te)};W.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=W}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let W=E.texture.mipmaps;W&&W.length>0?Se(v.__webglFramebuffer[0],E):Se(v.__webglFramebuffer,E)}else if(F){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),Ae(v.__webglDepthbuffer[W],E,!1);else{let te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Y)}}else{let W=E.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ae(v.__webglDepthbuffer,E,!1);else{let te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(E,v,F){let W=n.get(E);v!==void 0&&de(W.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&We(E)}function T(E){let v=E.texture,F=n.get(E),W=n.get(v);E.addEventListener("dispose",I);let te=E.textures,Y=E.isWebGLCubeRenderTarget===!0,Pe=te.length>1;if(Pe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[he]=[];for(let Re=0;Re<v.mipmaps.length;Re++)F.__webglFramebuffer[he][Re]=i.createFramebuffer()}else F.__webglFramebuffer[he]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)F.__webglFramebuffer[he]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let he=0,Re=te.length;he<Re;he++){let Ce=n.get(te[he]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&re(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){let Re=te[he];F.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[he]);let Ce=r.convert(Re.format,Re.colorSpace),ae=r.convert(Re.type),be=S(Re.internalFormat,Ce,ae,Re.colorSpace,E.isXRRenderTarget===!0),Oe=fe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,be,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,F.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ke(i.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)de(F.__webglFramebuffer[he][Re],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re);else de(F.__webglFramebuffer[he],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let he=0,Re=te.length;he<Re;he++){let Ce=te[he],ae=n.get(Ce),be=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(be=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,ae.__webglTexture),ke(be,Ce),de(F.__webglFramebuffer,E,Ce,i.COLOR_ATTACHMENT0+he,be,0),g(Ce)&&f(be)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(he=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,W.__webglTexture),ke(he,v),v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)de(F.__webglFramebuffer[Re],E,v,i.COLOR_ATTACHMENT0,he,Re);else de(F.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,he,0);g(v)&&f(he),t.unbindTexture()}E.depthBuffer&&We(E)}function ne(E){let v=E.textures;for(let F=0,W=v.length;F<W;F++){let te=v[F];if(g(te)){let Y=w(E),Pe=n.get(te).__webglTexture;t.bindTexture(Y,Pe),f(Y),t.unbindTexture()}}}let Q=[],K=[];function Z(E){if(E.samples>0){if(re(E)===!1){let v=E.textures,F=E.width,W=E.height,te=i.COLOR_BUFFER_BIT,Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(E),he=v.length>1;if(he)for(let Ce=0;Ce<v.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);let Re=E.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ce=0;Ce<v.length;Ce++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);let ae=n.get(v[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,F,W,0,0,F,W,te,i.NEAREST),l===!0&&(Q.length=0,K.length=0,Q.push(i.COLOR_ATTACHMENT0+Ce),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Q.push(Y),K.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Ce=0;Ce<v.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);let ae=n.get(v[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function fe(E){return Math.min(s.maxSamples,E.samples)}function re(E){let v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function pe(E){let v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function He(E,v){let F=E.colorSpace,W=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==_i&&F!==Fn&&(Ke.getTransfer(F)===it?(W!==en||te!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function ze(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=ie,this.setTextureCube=G,this.rebindTextures=tt,this.setupRenderTarget=T,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=de,this.useMultisampledRTT=re}function A_(i,e){function t(n,s=Fn){let r,a=Ke.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===Na)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===El)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ml)return i.BYTE;if(n===Sl)return i.SHORT;if(n===rs)return i.UNSIGNED_SHORT;if(n===Ua)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===as)return i.HALF_FLOAT;if(n===Tl)return i.ALPHA;if(n===Al)return i.RGB;if(n===en)return i.RGBA;if(n===$i)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===Rl)return i.RED;if(n===Oa)return i.RED_INTEGER;if(n===Cl)return i.RG;if(n===Ba)return i.RG_INTEGER;if(n===ka)return i.RGBA_INTEGER;if(n===lr||n===cr||n===hr||n===ur)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===Va||n===Ha||n===Ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wa||n===$a||n===Xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wa||n===$a)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qa||n===Ya||n===Ja||n===Za||n===Ka||n===ja||n===Qa||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===to)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===no)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===io)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===so)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ro)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ao)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oo||n===lo||n===co)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oo)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ho||n===uo||n===fo||n===po)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var R_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new un({vertexShader:R_,fragmentShader:C_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ql=class extends Ln{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,d=null,_=typeof XRWebGLBinding<"u",g=new jl,f={},w=t.getContextAttributes(),S=null,y=null,R=[],A=[],I=new ge,D=null,M=new Rt;M.viewport=new mt;let b=new Rt;b.viewport=new mt;let C=[M,b],B=new Ma,H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=R[k];return J===void 0&&(J=new ji,R[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=R[k];return J===void 0&&(J=new ji,R[k]=J),J.getGripSpace()},this.getHand=function(k){let J=R[k];return J===void 0&&(J=new ji,R[k]=J),J.getHandSpace()};function q(k){let J=A.indexOf(k.inputSource);if(J===-1)return;let de=R[J];de!==void 0&&(de.update(k.inputSource,k.frame,c||a),de.dispatchEvent({type:k.type,data:k.inputSource}))}function $(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ie);for(let k=0;k<R.length;k++){let J=A[k];J!==null&&(A[k]=null,R[k].disconnect(J))}H=null,X=null,g.reset();for(let k in f)delete f[k];e.setRenderTarget(S),m=null,p=null,u=null,s=null,y=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ie),w.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ae=null,Se=null;w.depth&&(Se=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=w.stencil?ls:$i,Ae=w.stencil?os:ii);let We={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(We),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new _n(p.textureWidth,p.textureHeight,{format:en,type:dn,depthTexture:new ks(p.textureWidth,p.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let de={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new _n(m.framebufferWidth,m.framebufferHeight,{format:en,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(k){for(let J=0;J<k.removed.length;J++){let de=k.removed[J],Ae=A.indexOf(de);Ae>=0&&(A[Ae]=null,R[Ae].disconnect(de))}for(let J=0;J<k.added.length;J++){let de=k.added[J],Ae=A.indexOf(de);if(Ae===-1){for(let We=0;We<R.length;We++)if(We>=A.length){A.push(de),Ae=We;break}else if(A[We]===null){A[We]=de,Ae=We;break}if(Ae===-1)break}let Se=R[Ae];Se&&Se.connect(de)}}let G=new L,ue=new L;function ve(k,J,de){G.setFromMatrixPosition(J.matrixWorld),ue.setFromMatrixPosition(de.matrixWorld);let Ae=G.distanceTo(ue),Se=J.projectionMatrix.elements,We=de.projectionMatrix.elements,tt=Se[14]/(Se[10]-1),T=Se[14]/(Se[10]+1),ne=(Se[9]+1)/Se[5],Q=(Se[9]-1)/Se[5],K=(Se[8]-1)/Se[0],Z=(We[8]+1)/We[0],fe=tt*K,re=tt*Z,pe=Ae/(-K+Z),He=pe*-K;if(J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(He),k.translateZ(pe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Se[10]===-1)k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let ze=tt+pe,E=T+pe,v=fe-He,F=re+(Ae-He),W=ne*T/E*ze,te=Q*T/E*ze;k.projectionMatrix.makePerspective(v,F,W,te,ze,E),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Me(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let J=k.near,de=k.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(de=g.depthFar)),B.near=b.near=M.near=J,B.far=b.far=M.far=de,(H!==B.near||X!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,X=B.far),B.layers.mask=k.layers.mask|6,M.layers.mask=B.layers.mask&3,b.layers.mask=B.layers.mask&5;let Ae=k.parent,Se=B.cameras;Me(B,Ae);for(let We=0;We<Se.length;We++)Me(Se[We],Ae);Se.length===2?ve(B,M,b):B.projectionMatrix.copy(M.projectionMatrix),ke(k,B,Ae)};function ke(k,J,de){de===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(de.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Xi*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(k){l=k,p!==null&&(p.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(k){return f[k]};let Je=null;function j(k,J){if(h=J.getViewerPose(c||a),d=J,h!==null){let de=h.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Ae=!1;de.length!==B.cameras.length&&(B.cameras.length=0,Ae=!0);for(let T=0;T<de.length;T++){let ne=de[T],Q=null;if(m!==null)Q=m.getViewport(ne);else{let Z=u.getViewSubImage(p,ne);Q=Z.viewport,T===0&&(e.setRenderTargetTextures(y,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(y))}let K=C[T];K===void 0&&(K=new Rt,K.layers.enable(T),K.viewport=new mt,C[T]=K),K.matrix.fromArray(ne.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(ne.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Q.x,Q.y,Q.width,Q.height),T===0&&(B.matrix.copy(K.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ae===!0&&B.cameras.push(K)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let T=u.getDepthInformation(de[0]);T&&T.isValid&&T.texture&&g.init(T,s.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let T=0;T<de.length;T++){let ne=de[T].camera;if(ne){let Q=f[ne];Q||(Q=new zs,f[ne]=Q);let K=u.getCameraImage(ne);Q.sourceTexture=K}}}}for(let de=0;de<R.length;de++){let Ae=A[de],Se=R[de];Ae!==null&&Se!==void 0&&Se.update(Ae,J,c||a)}Je&&Je(k,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),d=null}let se=new ou;se.setAnimationLoop(j),this.setAnimationLoop=function(k){Je=k},this.dispose=function(){}}},Ti=new hn,I_=new pt;function P_(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Nl(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,w,S,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),p(g,f),f.isMeshPhysicalMaterial&&m(g,f,y)):f.isMeshMatcapMaterial?(r(g,f),d(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),_(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,w,S):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Ut&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Ut&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let w=e.get(f),S=w.envMap,y=w.envMapRotation;S&&(g.envMap.value=S,Ti.copy(y),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),g.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(Ti)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,w,S){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*w,g.scale.value=S*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function p(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,w){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ut&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){let w=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function L_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){let y=S.program;n.uniformBlockBinding(w,y)}function c(w,S){let y=s[w.id];y===void 0&&(d(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",g));let R=S.program;n.updateUBOMapping(w,R);let A=e.render.frame;r[w.id]!==A&&(p(w),r[w.id]=A)}function h(w){let S=u();w.__bindingPointIndex=S;let y=i.createBuffer(),R=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){let S=s[w.id],y=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,I=y.length;A<I;A++){let D=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,b=D.length;M<b;M++){let C=D[M];if(m(C,A,M,R)===!0){let B=C.__offset,H=Array.isArray(C.value)?C.value:[C.value],X=0;for(let q=0;q<H.length;q++){let $=H[q],ie=_($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,B+X,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,X),X+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,S,y,R){let A=w.value,I=S+"_"+y;if(R[I]===void 0)return typeof A=="number"||typeof A=="boolean"?R[I]=A:R[I]=A.clone(),!0;{let D=R[I];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[I]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function d(w){let S=w.uniforms,y=0,R=16;for(let I=0,D=S.length;I<D;I++){let M=Array.isArray(S[I])?S[I]:[S[I]];for(let b=0,C=M.length;b<C;b++){let B=M[b],H=Array.isArray(B.value)?B.value:[B.value];for(let X=0,q=H.length;X<q;X++){let $=H[X],ie=_($),G=y%R,ue=G%ie.boundary,ve=G+ue;y+=ue,ve!==0&&R-ve<ie.storage&&(y+=R-ve),B.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=ie.storage}}}let A=y%R;return A>0&&(y+=R-A),w.__size=y,w.__cache={},this}function _(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function g(w){let S=w.target;S.removeEventListener("dispose",g);let y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var xo=class{constructor(e={}){let{canvas:t=Ch(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let d=new Uint32Array(4),_=new Int32Array(4),g=null,f=null,w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,R=!1;this._outputColorSpace=Dt;let A=0,I=0,D=null,M=-1,b=null,C=new mt,B=new mt,H=null,X=new Xe(0),q=0,$=t.width,ie=t.height,G=1,ue=null,ve=null,Me=new mt(0,0,$,ie),ke=new mt(0,0,$,ie),Je=!1,j=new Qi,se=!1,k=!1,J=new pt,de=new L,Ae=new mt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function tt(){return D===null?G:1}let T=n;function ne(x,U){return t.getContext(x,U)}try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",oe,!1),T===null){let U="webgl2";if(T=ne(U,x),T===null)throw ne(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Q,K,Z,fe,re,pe,He,ze,E,v,F,W,te,Y,Pe,he,Re,Ce,ae,be,Oe,Le,xe,$e;function P(){Q=new Zm(T),Q.init(),Le=new A_(T,Q),K=new Gm(T,Q,e,Le),Z=new w_(T,Q),K.reversedDepthBuffer&&p&&Z.buffers.depth.setReversed(!0),fe=new Qm(T),re=new d_,pe=new T_(T,Q,Z,re,K,Le,fe),He=new $m(y),ze=new Jm(y),E=new rf(T),xe=new Vm(T,E),v=new Km(T,E,fe,xe),F=new tg(T,v,E,fe),ae=new eg(T,K,pe),he=new Wm(re),W=new u_(y,He,ze,Q,K,xe,he),te=new P_(y,re),Y=new p_,Pe=new y_(Q),Ce=new zm(y,He,ze,Z,F,m,l),Re=new S_(y,F,K),$e=new L_(T,fe,K,Z),be=new Hm(T,Q,fe),Oe=new jm(T,Q,fe),fe.programs=W.programs,y.capabilities=K,y.extensions=Q,y.properties=re,y.renderLists=Y,y.shadowMap=Re,y.state=Z,y.info=fe}P();let ce=new Ql(y,T);this.xr=ce,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let x=Q.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Q.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(x){x!==void 0&&(G=x,this.setSize($,ie,!1))},this.getSize=function(x){return x.set($,ie)},this.setSize=function(x,U,z=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=x,ie=U,t.width=Math.floor(x*G),t.height=Math.floor(U*G),z===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set($*G,ie*G).floor()},this.setDrawingBufferSize=function(x,U,z){$=x,ie=U,G=z,t.width=Math.floor(x*z),t.height=Math.floor(U*z),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(Me)},this.setViewport=function(x,U,z,V){x.isVector4?Me.set(x.x,x.y,x.z,x.w):Me.set(x,U,z,V),Z.viewport(C.copy(Me).multiplyScalar(G).round())},this.getScissor=function(x){return x.copy(ke)},this.setScissor=function(x,U,z,V){x.isVector4?ke.set(x.x,x.y,x.z,x.w):ke.set(x,U,z,V),Z.scissor(B.copy(ke).multiplyScalar(G).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(x){Z.setScissorTest(Je=x)},this.setOpaqueSort=function(x){ue=x},this.setTransparentSort=function(x){ve=x},this.getClearColor=function(x){return x.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,z=!0){let V=0;if(x){let N=!1;if(D!==null){let le=D.texture.format;N=le===ka||le===Ba||le===Oa}if(N){let le=D.texture.type,ye=le===dn||le===ii||le===rs||le===os||le===Na||le===Fa,Te=Ce.getClearColor(),Ee=Ce.getClearAlpha(),Fe=Te.r,Be=Te.g,De=Te.b;ye?(d[0]=Fe,d[1]=Be,d[2]=De,d[3]=Ee,T.clearBufferuiv(T.COLOR,0,d)):(_[0]=Fe,_[1]=Be,_[2]=De,_[3]=Ee,T.clearBufferiv(T.COLOR,0,_))}else V|=T.COLOR_BUFFER_BIT}U&&(V|=T.DEPTH_BUFFER_BIT),z&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Ce.dispose(),Y.dispose(),Pe.dispose(),re.dispose(),He.dispose(),ze.dispose(),F.dispose(),xe.dispose(),$e.dispose(),W.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",pn),ce.removeEventListener("sessionend",uc),oi.stop()};function me(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let x=fe.autoReset,U=Re.enabled,z=Re.autoUpdate,V=Re.needsUpdate,N=Re.type;P(),fe.autoReset=x,Re.enabled=U,Re.autoUpdate=z,Re.needsUpdate=V,Re.type=N}function oe(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ee(x){let U=x.target;U.removeEventListener("dispose",ee),Ie(U)}function Ie(x){Ge(x),re.remove(x)}function Ge(x){let U=re.get(x).programs;U!==void 0&&(U.forEach(function(z){W.releaseProgram(z)}),x.isShaderMaterial&&W.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,z,V,N,le){U===null&&(U=Se);let ye=N.isMesh&&N.matrixWorld.determinant()<0,Te=Lu(x,U,z,V,N);Z.setMaterial(V,ye);let Ee=z.index,Fe=1;if(V.wireframe===!0){if(Ee=v.getWireframeAttribute(z),Ee===void 0)return;Fe=2}let Be=z.drawRange,De=z.attributes.position,Ze=Be.start*Fe,st=(Be.start+Be.count)*Fe;le!==null&&(Ze=Math.max(Ze,le.start*Fe),st=Math.min(st,(le.start+le.count)*Fe)),Ee!==null?(Ze=Math.max(Ze,0),st=Math.min(st,Ee.count)):De!=null&&(Ze=Math.max(Ze,0),st=Math.min(st,De.count));let gt=st-Ze;if(gt<0||gt===1/0)return;xe.setup(N,V,Te,z,Ee);let ct,at=be;if(Ee!==null&&(ct=E.get(Ee),at=Oe,at.setIndex(ct)),N.isMesh)V.wireframe===!0?(Z.setLineWidth(V.wireframeLinewidth*tt()),at.setMode(T.LINES)):at.setMode(T.TRIANGLES);else if(N.isLine){let Ue=V.linewidth;Ue===void 0&&(Ue=1),Z.setLineWidth(Ue*tt()),N.isLineSegments?at.setMode(T.LINES):N.isLineLoop?at.setMode(T.LINE_LOOP):at.setMode(T.LINE_STRIP)}else N.isPoints?at.setMode(T.POINTS):N.isSprite&&at.setMode(T.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)qi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))at.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ue=N._multiDrawStarts,ut=N._multiDrawCounts,je=N._multiDrawCount,kt=Ee?E.get(Ee).bytesPerElement:1,Ii=re.get(V).currentProgram.getUniforms();for(let zt=0;zt<je;zt++)Ii.setValue(T,"_gl_DrawID",zt),at.render(Ue[zt]/kt,ut[zt])}else if(N.isInstancedMesh)at.renderInstances(Ze,gt,N.count);else if(z.isInstancedBufferGeometry){let Ue=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ut=Math.min(z.instanceCount,Ue);at.renderInstances(Ze,gt,ut)}else at.render(Ze,gt)};function ot(x,U,z){x.transparent===!0&&x.side===xn&&x.forceSinglePass===!1?(x.side=Ut,x.needsUpdate=!0,Ar(x,U,z),x.side=Pn,x.needsUpdate=!0,Ar(x,U,z),x.side=xn):Ar(x,U,z)}this.compile=function(x,U,z=null){z===null&&(z=x),f=Pe.get(z),f.init(U),S.push(f),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),x!==z&&x.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let V=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let le=N.material;if(le)if(Array.isArray(le))for(let ye=0;ye<le.length;ye++){let Te=le[ye];ot(Te,z,N),V.add(Te)}else ot(le,z,N),V.add(le)}),f=S.pop(),V},this.compileAsync=function(x,U,z=null){let V=this.compile(x,U,z);return new Promise(N=>{function le(){if(V.forEach(function(ye){re.get(ye).currentProgram.isReady()&&V.delete(ye)}),V.size===0){N(x);return}setTimeout(le,10)}Q.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let nt=null;function En(x){nt&&nt(x)}function pn(){oi.stop()}function uc(){oi.start()}let oi=new ou;oi.setAnimationLoop(En),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(x){nt=x,ce.setAnimationLoop(x),x===null?oi.stop():oi.start()},ce.addEventListener("sessionstart",pn),ce.addEventListener("sessionend",uc),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,U,D),f=Pe.get(x,S.length),f.init(U),S.push(f),J.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(J,ln,U.reversedDepth),k=this.localClippingEnabled,se=he.init(this.clippingPlanes,k),g=Y.get(x,w.length),g.init(),w.push(g),ce.enabled===!0&&ce.isPresenting===!0){let le=y.xr.getDepthSensingMesh();le!==null&&Io(le,U,-1/0,y.sortObjects)}Io(x,U,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ue,ve),We=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,We&&Ce.addToRenderList(g,x),this.info.render.frame++,se===!0&&he.beginShadows();let z=f.state.shadowsArray;Re.render(z,x,U),se===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=g.opaque,N=g.transmissive;if(f.setupLights(),U.isArrayCamera){let le=U.cameras;if(N.length>0)for(let ye=0,Te=le.length;ye<Te;ye++){let Ee=le[ye];fc(V,N,x,Ee)}We&&Ce.render(x);for(let ye=0,Te=le.length;ye<Te;ye++){let Ee=le[ye];dc(g,x,Ee,Ee.viewport)}}else N.length>0&&fc(V,N,x,U),We&&Ce.render(x),dc(g,x,U);D!==null&&I===0&&(pe.updateMultisampleRenderTarget(D),pe.updateRenderTargetMipmap(D)),x.isScene===!0&&x.onAfterRender(y,x,U),xe.resetDefaultState(),M=-1,b=null,S.pop(),S.length>0?(f=S[S.length-1],se===!0&&he.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function Io(x,U,z,V){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||j.intersectsSprite(x)){V&&Ae.setFromMatrixPosition(x.matrixWorld).applyMatrix4(J);let ye=F.update(x),Te=x.material;Te.visible&&g.push(x,ye,Te,z,Ae.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||j.intersectsObject(x))){let ye=F.update(x),Te=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ae.copy(x.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ae.copy(ye.boundingSphere.center)),Ae.applyMatrix4(x.matrixWorld).applyMatrix4(J)),Array.isArray(Te)){let Ee=ye.groups;for(let Fe=0,Be=Ee.length;Fe<Be;Fe++){let De=Ee[Fe],Ze=Te[De.materialIndex];Ze&&Ze.visible&&g.push(x,ye,Ze,z,Ae.z,De)}}else Te.visible&&g.push(x,ye,Te,z,Ae.z,null)}}let le=x.children;for(let ye=0,Te=le.length;ye<Te;ye++)Io(le[ye],U,z,V)}function dc(x,U,z,V){let N=x.opaque,le=x.transmissive,ye=x.transparent;f.setupLightsView(z),se===!0&&he.setGlobalState(y.clippingPlanes,z),V&&Z.viewport(C.copy(V)),N.length>0&&Tr(N,U,z),le.length>0&&Tr(le,U,z),ye.length>0&&Tr(ye,U,z),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function fc(x,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new _n(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?as:dn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let le=f.state.transmissionRenderTarget[V.id],ye=V.viewport||C;le.setSize(ye.z*y.transmissionResolutionScale,ye.w*y.transmissionResolutionScale);let Te=y.getRenderTarget(),Ee=y.getActiveCubeFace(),Fe=y.getActiveMipmapLevel();y.setRenderTarget(le),y.getClearColor(X),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),We&&Ce.render(z);let Be=y.toneMapping;y.toneMapping=Nn;let De=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),se===!0&&he.setGlobalState(y.clippingPlanes,V),Tr(x,z,V),pe.updateMultisampleRenderTarget(le),pe.updateRenderTargetMipmap(le),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let st=0,gt=U.length;st<gt;st++){let ct=U[st],at=ct.object,Ue=ct.geometry,ut=ct.material,je=ct.group;if(ut.side===xn&&at.layers.test(V.layers)){let kt=ut.side;ut.side=Ut,ut.needsUpdate=!0,pc(at,z,V,Ue,ut,je),ut.side=kt,ut.needsUpdate=!0,Ze=!0}}Ze===!0&&(pe.updateMultisampleRenderTarget(le),pe.updateRenderTargetMipmap(le))}y.setRenderTarget(Te,Ee,Fe),y.setClearColor(X,q),De!==void 0&&(V.viewport=De),y.toneMapping=Be}function Tr(x,U,z){let V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,le=x.length;N<le;N++){let ye=x[N],Te=ye.object,Ee=ye.geometry,Fe=ye.group,Be=ye.material;Be.allowOverride===!0&&V!==null&&(Be=V),Te.layers.test(z.layers)&&pc(Te,U,z,Ee,Be,Fe)}}function pc(x,U,z,V,N,le){x.onBeforeRender(y,U,z,V,N,le),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(y,U,z,V,x,le),N.transparent===!0&&N.side===xn&&N.forceSinglePass===!1?(N.side=Ut,N.needsUpdate=!0,y.renderBufferDirect(z,U,V,N,x,le),N.side=Pn,N.needsUpdate=!0,y.renderBufferDirect(z,U,V,N,x,le),N.side=xn):y.renderBufferDirect(z,U,V,N,x,le),x.onAfterRender(y,U,z,V,N,le)}function Ar(x,U,z){U.isScene!==!0&&(U=Se);let V=re.get(x),N=f.state.lights,le=f.state.shadowsArray,ye=N.state.version,Te=W.getParameters(x,N.state,le,U,z),Ee=W.getProgramCacheKey(Te),Fe=V.programs;V.environment=x.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(x.isMeshStandardMaterial?ze:He).get(x.envMap||V.environment),V.envMapRotation=V.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Fe===void 0&&(x.addEventListener("dispose",ee),Fe=new Map,V.programs=Fe);let Be=Fe.get(Ee);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===ye)return gc(x,Te),Be}else Te.uniforms=W.getUniforms(x),x.onBeforeCompile(Te,y),Be=W.acquireProgram(Te,Ee),Fe.set(Ee,Be),V.uniforms=Te.uniforms;let De=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(De.clippingPlanes=he.uniform),gc(x,Te),V.needsLights=Uu(x),V.lightsStateVersion=ye,V.needsLights&&(De.ambientLightColor.value=N.state.ambient,De.lightProbe.value=N.state.probe,De.directionalLights.value=N.state.directional,De.directionalLightShadows.value=N.state.directionalShadow,De.spotLights.value=N.state.spot,De.spotLightShadows.value=N.state.spotShadow,De.rectAreaLights.value=N.state.rectArea,De.ltc_1.value=N.state.rectAreaLTC1,De.ltc_2.value=N.state.rectAreaLTC2,De.pointLights.value=N.state.point,De.pointLightShadows.value=N.state.pointShadow,De.hemisphereLights.value=N.state.hemi,De.directionalShadowMap.value=N.state.directionalShadowMap,De.directionalShadowMatrix.value=N.state.directionalShadowMatrix,De.spotShadowMap.value=N.state.spotShadowMap,De.spotLightMatrix.value=N.state.spotLightMatrix,De.spotLightMap.value=N.state.spotLightMap,De.pointShadowMap.value=N.state.pointShadowMap,De.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Be,V.uniformsList=null,Be}function mc(x){if(x.uniformsList===null){let U=x.currentProgram.getUniforms();x.uniformsList=us.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function gc(x,U){let z=re.get(x);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Lu(x,U,z,V,N){U.isScene!==!0&&(U=Se),pe.resetTextureUnits();let le=U.fog,ye=V.isMeshStandardMaterial?U.environment:null,Te=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:_i,Ee=(V.isMeshStandardMaterial?ze:He).get(V.envMap||ye),Fe=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Be=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),De=!!z.morphAttributes.position,Ze=!!z.morphAttributes.normal,st=!!z.morphAttributes.color,gt=Nn;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(gt=y.toneMapping);let ct=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,at=ct!==void 0?ct.length:0,Ue=re.get(V),ut=f.state.lights;if(se===!0&&(k===!0||x!==b)){let Pt=x===b&&V.id===M;he.setState(V,x,Pt)}let je=!1;V.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==ut.state.version||Ue.outputColorSpace!==Te||N.isBatchedMesh&&Ue.batching===!1||!N.isBatchedMesh&&Ue.batching===!0||N.isBatchedMesh&&Ue.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ue.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ue.instancing===!1||!N.isInstancedMesh&&Ue.instancing===!0||N.isSkinnedMesh&&Ue.skinning===!1||!N.isSkinnedMesh&&Ue.skinning===!0||N.isInstancedMesh&&Ue.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ue.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ue.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ue.instancingMorph===!1&&N.morphTexture!==null||Ue.envMap!==Ee||V.fog===!0&&Ue.fog!==le||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==he.numPlanes||Ue.numIntersection!==he.numIntersection)||Ue.vertexAlphas!==Fe||Ue.vertexTangents!==Be||Ue.morphTargets!==De||Ue.morphNormals!==Ze||Ue.morphColors!==st||Ue.toneMapping!==gt||Ue.morphTargetsCount!==at)&&(je=!0):(je=!0,Ue.__version=V.version);let kt=Ue.currentProgram;je===!0&&(kt=Ar(V,U,N));let Ii=!1,zt=!1,_s=!1,dt=kt.getUniforms(),Jt=Ue.uniforms;if(Z.useProgram(kt.program)&&(Ii=!0,zt=!0,_s=!0),V.id!==M&&(M=V.id,zt=!0),Ii||b!==x){Z.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),dt.setValue(T,"projectionMatrix",x.projectionMatrix),dt.setValue(T,"viewMatrix",x.matrixWorldInverse);let Ft=dt.map.cameraPosition;Ft!==void 0&&Ft.setValue(T,de.setFromMatrixPosition(x.matrixWorld)),K.logarithmicDepthBuffer&&dt.setValue(T,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(T,"isOrthographic",x.isOrthographicCamera===!0),b!==x&&(b=x,zt=!0,_s=!0)}if(N.isSkinnedMesh){dt.setOptional(T,N,"bindMatrix"),dt.setOptional(T,N,"bindMatrixInverse");let Pt=N.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),dt.setValue(T,"boneTexture",Pt.boneTexture,pe))}N.isBatchedMesh&&(dt.setOptional(T,N,"batchingTexture"),dt.setValue(T,"batchingTexture",N._matricesTexture,pe),dt.setOptional(T,N,"batchingIdTexture"),dt.setValue(T,"batchingIdTexture",N._indirectTexture,pe),dt.setOptional(T,N,"batchingColorTexture"),N._colorsTexture!==null&&dt.setValue(T,"batchingColorTexture",N._colorsTexture,pe));let Zt=z.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&ae.update(N,z,kt),(zt||Ue.receiveShadow!==N.receiveShadow)&&(Ue.receiveShadow=N.receiveShadow,dt.setValue(T,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Jt.envMap.value=Ee,Jt.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Jt.envMapIntensity.value=U.environmentIntensity),zt&&(dt.setValue(T,"toneMappingExposure",y.toneMappingExposure),Ue.needsLights&&Du(Jt,_s),le&&V.fog===!0&&te.refreshFogUniforms(Jt,le),te.refreshMaterialUniforms(Jt,V,G,ie,f.state.transmissionRenderTarget[x.id]),us.upload(T,mc(Ue),Jt,pe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(us.upload(T,mc(Ue),Jt,pe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(T,"center",N.center),dt.setValue(T,"modelViewMatrix",N.modelViewMatrix),dt.setValue(T,"normalMatrix",N.normalMatrix),dt.setValue(T,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Pt=V.uniformsGroups;for(let Ft=0,Po=Pt.length;Ft<Po;Ft++){let li=Pt[Ft];$e.update(li,kt),$e.bind(li,kt)}}return kt}function Du(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function Uu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(x,U,z){let V=re.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),re.get(x.texture).__webglTexture=U,re.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){let z=re.get(x);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};let Nu=T.createFramebuffer();this.setRenderTarget=function(x,U=0,z=0){D=x,A=U,I=z;let V=!0,N=null,le=!1,ye=!1;if(x){let Ee=re.get(x);if(Ee.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(T.FRAMEBUFFER,null),V=!1;else if(Ee.__webglFramebuffer===void 0)pe.setupRenderTarget(x);else if(Ee.__hasExternalTextures)pe.rebindTextures(x,re.get(x.texture).__webglTexture,re.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let De=x.depthTexture;if(Ee.__boundDepthTexture!==De){if(De!==null&&re.has(De)&&(x.width!==De.image.width||x.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(x)}}let Fe=x.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);let Be=re.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?N=Be[U][z]:N=Be[U],le=!0):x.samples>0&&pe.useMultisampledRTT(x)===!1?N=re.get(x).__webglMultisampledFramebuffer:Array.isArray(Be)?N=Be[z]:N=Be,C.copy(x.viewport),B.copy(x.scissor),H=x.scissorTest}else C.copy(Me).multiplyScalar(G).floor(),B.copy(ke).multiplyScalar(G).floor(),H=Je;if(z!==0&&(N=Nu),Z.bindFramebuffer(T.FRAMEBUFFER,N)&&V&&Z.drawBuffers(x,N),Z.viewport(C),Z.scissor(B),Z.setScissorTest(H),le){let Ee=re.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,z)}else if(ye){let Ee=U;for(let Fe=0;Fe<x.textures.length;Fe++){let Be=re.get(x.textures[Fe]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,z,Ee)}}else if(x!==null&&z!==0){let Ee=re.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ee.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(x,U,z,V,N,le,ye,Te=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=re.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){Z.bindFramebuffer(T.FRAMEBUFFER,Ee);try{let Fe=x.textures[Te],Be=Fe.format,De=Fe.type;if(!K.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-V&&z>=0&&z<=x.height-N&&(x.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Te),T.readPixels(U,z,V,N,Le.convert(Be),Le.convert(De),le))}finally{let Fe=D!==null?re.get(D).__webglFramebuffer:null;Z.bindFramebuffer(T.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(x,U,z,V,N,le,ye,Te=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=re.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee)if(U>=0&&U<=x.width-V&&z>=0&&z<=x.height-N){Z.bindFramebuffer(T.FRAMEBUFFER,Ee);let Fe=x.textures[Te],Be=Fe.format,De=Fe.type;if(!K.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ze),T.bufferData(T.PIXEL_PACK_BUFFER,le.byteLength,T.STREAM_READ),x.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Te),T.readPixels(U,z,V,N,Le.convert(Be),Le.convert(De),0);let st=D!==null?re.get(D).__webglFramebuffer:null;Z.bindFramebuffer(T.FRAMEBUFFER,st);let gt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Ih(T,gt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ze),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,le),T.deleteBuffer(Ze),T.deleteSync(gt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,z=0){let V=Math.pow(2,-z),N=Math.floor(x.image.width*V),le=Math.floor(x.image.height*V),ye=U!==null?U.x:0,Te=U!==null?U.y:0;pe.setTexture2D(x,0),T.copyTexSubImage2D(T.TEXTURE_2D,z,0,0,ye,Te,N,le),Z.unbindTexture()};let Fu=T.createFramebuffer(),Ou=T.createFramebuffer();this.copyTextureToTexture=function(x,U,z=null,V=null,N=0,le=null){le===null&&(N!==0?(qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=N,N=0):le=0);let ye,Te,Ee,Fe,Be,De,Ze,st,gt,ct=x.isCompressedTexture?x.mipmaps[le]:x.image;if(z!==null)ye=z.max.x-z.min.x,Te=z.max.y-z.min.y,Ee=z.isBox3?z.max.z-z.min.z:1,Fe=z.min.x,Be=z.min.y,De=z.isBox3?z.min.z:0;else{let Zt=Math.pow(2,-N);ye=Math.floor(ct.width*Zt),Te=Math.floor(ct.height*Zt),x.isDataArrayTexture?Ee=ct.depth:x.isData3DTexture?Ee=Math.floor(ct.depth*Zt):Ee=1,Fe=0,Be=0,De=0}V!==null?(Ze=V.x,st=V.y,gt=V.z):(Ze=0,st=0,gt=0);let at=Le.convert(U.format),Ue=Le.convert(U.type),ut;U.isData3DTexture?(pe.setTexture3D(U,0),ut=T.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(pe.setTexture2DArray(U,0),ut=T.TEXTURE_2D_ARRAY):(pe.setTexture2D(U,0),ut=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,U.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,U.unpackAlignment);let je=T.getParameter(T.UNPACK_ROW_LENGTH),kt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ii=T.getParameter(T.UNPACK_SKIP_PIXELS),zt=T.getParameter(T.UNPACK_SKIP_ROWS),_s=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ct.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ct.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Fe),T.pixelStorei(T.UNPACK_SKIP_ROWS,Be),T.pixelStorei(T.UNPACK_SKIP_IMAGES,De);let dt=x.isDataArrayTexture||x.isData3DTexture,Jt=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){let Zt=re.get(x),Pt=re.get(U),Ft=re.get(Zt.__renderTarget),Po=re.get(Pt.__renderTarget);Z.bindFramebuffer(T.READ_FRAMEBUFFER,Ft.__webglFramebuffer),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,Po.__webglFramebuffer);for(let li=0;li<Ee;li++)dt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,re.get(x).__webglTexture,N,De+li),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,re.get(U).__webglTexture,le,gt+li)),T.blitFramebuffer(Fe,Be,ye,Te,Ze,st,ye,Te,T.DEPTH_BUFFER_BIT,T.NEAREST);Z.bindFramebuffer(T.READ_FRAMEBUFFER,null),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||re.has(x)){let Zt=re.get(x),Pt=re.get(U);Z.bindFramebuffer(T.READ_FRAMEBUFFER,Fu),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ou);for(let Ft=0;Ft<Ee;Ft++)dt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Zt.__webglTexture,N,De+Ft):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Zt.__webglTexture,N),Jt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Pt.__webglTexture,le,gt+Ft):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Pt.__webglTexture,le),N!==0?T.blitFramebuffer(Fe,Be,ye,Te,Ze,st,ye,Te,T.COLOR_BUFFER_BIT,T.NEAREST):Jt?T.copyTexSubImage3D(ut,le,Ze,st,gt+Ft,Fe,Be,ye,Te):T.copyTexSubImage2D(ut,le,Ze,st,Fe,Be,ye,Te);Z.bindFramebuffer(T.READ_FRAMEBUFFER,null),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Jt?x.isDataTexture||x.isData3DTexture?T.texSubImage3D(ut,le,Ze,st,gt,ye,Te,Ee,at,Ue,ct.data):U.isCompressedArrayTexture?T.compressedTexSubImage3D(ut,le,Ze,st,gt,ye,Te,Ee,at,ct.data):T.texSubImage3D(ut,le,Ze,st,gt,ye,Te,Ee,at,Ue,ct):x.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,le,Ze,st,ye,Te,at,Ue,ct.data):x.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,le,Ze,st,ct.width,ct.height,at,ct.data):T.texSubImage2D(T.TEXTURE_2D,le,Ze,st,ye,Te,at,Ue,ct);T.pixelStorei(T.UNPACK_ROW_LENGTH,je),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,kt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ii),T.pixelStorei(T.UNPACK_SKIP_ROWS,zt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,_s),le===0&&U.generateMipmaps&&T.generateMipmap(ut),Z.unbindTexture()},this.initRenderTarget=function(x){re.get(x).__webglFramebuffer===void 0&&pe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?pe.setTextureCube(x,0):x.isData3DTexture?pe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?pe.setTexture2DArray(x,0):pe.setTexture2D(x,0),Z.unbindTexture()},this.resetState=function(){A=0,I=0,D=null,Z.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};function du(i,e,t,n){let s=document.createElement("canvas");s.className="parking-inspection-canvas",s.setAttribute("aria-label","3D\u8ECA\u4E21\u3092\u56DE\u8EE2\u3057\u640D\u50B7\u7B87\u6240\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u8A18\u9332"),i.replaceChildren(s);let r=new Bs;r.background=new Xe("#f2f6f9");let a=new Rt(34,1,.1,40),o=new xo({canvas:s,antialias:!0,powerPreference:"low-power"});o.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),o.outputColorSpace=Dt,o.toneMapping=Ia,r.add(new nr("#ffffff","#73879a",2));let l=new sr("#ffffff",3);l.position.set(-4,7,5),r.add(l);let c=new gn;r.add(c);let h=new ss({color:"#d8e3e9",metalness:.18,roughness:.32,clearcoat:.8}),u=new ss({color:"#183348",metalness:.18,roughness:.2,clearcoat:1}),p=new Qn({color:"#263746",roughness:.45}),m=[],d=(j,se,k,J)=>{let de=new ns;de.moveTo(j[0][0],j[0][1]);for(let[We,tt]of j.slice(1))de.lineTo(We,tt);de.closePath();let Ae=new Ks(de,{depth:se,bevelEnabled:!0,bevelSegments:3,bevelSize:.04,bevelThickness:.04});Ae.translate(0,0,J);let Se=new bt(Ae,k);Se.castShadow=!0,c.add(Se),m.push(Se)};d([[-2.22,.42],[-2.06,.72],[-1.5,.83],[-1.13,1.02],[-.82,1.57],[-.44,1.76],[.58,1.74],[1.08,1.45],[1.52,.91],[2.02,.78],[2.2,.56],[2.13,.32],[-2.08,.32]],1.46,h,-.73);for(let j of[-1,1]){let se=j*.73;d([[-.94,1.15],[-.67,1.52],[-.37,1.63],[-.3,1.15]],.018,u,se),d([[-.21,1.15],[-.2,1.63],[.5,1.61],[.84,1.34],[.7,1.15]],.018,u,se);for(let k of[-1.35,1.28]){let J=new bt(new Vs(.39,.39,.25,24),p);J.rotation.x=Math.PI/2,J.position.set(k,.43,se),c.add(J)}}let _=new bt(new xi(100,100),new Qn({color:"#edf2f6",roughness:.95}));_.rotation.x=-Math.PI/2,_.position.y=-.04,r.add(_);let g=.82,f=1.18,w=null,S=null,y=null,R=[...t],A=[],I=new rr,D=new ge,M=()=>{a.position.set(7.7*Math.sin(f)*Math.sin(g),7.7*Math.cos(f),7.7*Math.sin(f)*Math.cos(g)),a.lookAt(0,.86,0)},b=()=>o.render(r,a),C=j=>[j.world_x,j.world_y,j.world_z].every(Number.isFinite)?new L(j.world_x,j.world_y,j.world_z):new L((j.x-.5)*3.7,.92+(.5-j.y)*.8,.76),B=()=>{for(let j of A.splice(0))c.remove(j),j.traverse(se=>{se instanceof bt&&(se.geometry.dispose(),Array.isArray(se.material)?se.material.forEach(k=>k.dispose()):se.material.dispose())});for(let j of R){let se=e.find(We=>We.id===j.damage_type_id);if(!se)continue;let k=new gn;k.position.copy(C(j));let J=new L(j.world_nx??0,j.world_ny??0,j.world_nz??1);J.lengthSq()<.01&&J.set(0,0,1),k.quaternion.setFromUnitVectors(new L(0,0,1),J.normalize());let Ae=se.built_in_key==="scratch"||se.name.includes("\u50B7")?new Qs(new ts(Array.from({length:25},(We,tt)=>{let T=tt/24;return new L((T-.5)*.42,Math.sin(T*Math.PI*6)*.045,0)})),48,.022,8,!1):new js(.115,.026,10,32),Se=new bt(Ae,new Qn({color:se.color,emissive:se.color,emissiveIntensity:.65}));Se.userData.markId=j.id,k.add(Se),c.add(k),A.push(k)}b()},H=(j,se)=>{let k=s.getBoundingClientRect();return j<k.left||j>k.right||se<k.top||se>k.bottom?[]:(D.set((j-k.left)/k.width*2-1,-((se-k.top)/k.height)*2+1),I.setFromCamera(D,a),I.intersectObjects([...A,...m],!0))},X=(j,se)=>{let k=new Ve().getNormalMatrix(se.object.matrixWorld),J=se.face.normal.clone().applyMatrix3(k).normalize(),de=se.point.clone().addScaledVector(J,.035);return{id:crypto.randomUUID(),damage_type_id:j,x:dr.clamp((se.point.x+2.3)/4.6,0,1),y:dr.clamp(1-se.point.y/1.9,0,1),world_x:de.x,world_y:de.y,world_z:de.z,world_nx:J.x,world_ny:J.y,world_nz:J.z}},q=(j,se,k)=>{let J=H(se,k).find(de=>m.includes(de.object));return!J||!e.some(de=>de.id===j)?!1:(R.push(X(j,J)),n(R),B(),!0)},$=j=>{j.button===0&&(w={id:j.pointerId,x:j.clientX,y:j.clientY,moved:!1},s.setPointerCapture(j.pointerId))},ie=j=>{if(!w||w.id!==j.pointerId)return;let se=j.clientX-w.x,k=j.clientY-w.y;Math.abs(se)+Math.abs(k)>3&&(w.moved=!0),g-=se*.009,f=dr.clamp(f-k*.006,.38,1.48),w.x=j.clientX,w.y=j.clientY,M(),b()},G=j=>{if(!w||w.id!==j.pointerId)return;let se=w.moved;if(w=null,se)return;let J=H(j.clientX,j.clientY).find(de=>typeof de.object.userData.markId=="string");if(J){R=R.filter(de=>de.id!==J.object.userData.markId),n(R),B();return}y!==null&&q(y,j.clientX,j.clientY)},ue=j=>{let se=j.target.closest("[data-damage-type]");se&&(y=Number(se.dataset.damageType),S={id:j.pointerId,typeId:y,startX:j.clientX,startY:j.clientY,moved:!1,ghost:null},se.setPointerCapture(j.pointerId),i.querySelectorAll("[data-damage-type]").forEach(k=>k.classList.remove("selected")),se.classList.add("selected"),j.preventDefault())},ve=j=>{if(!S||S.id!==j.pointerId)return;let se=S;if(Math.abs(j.clientX-se.startX)+Math.abs(j.clientY-se.startY)>7&&(se.moved=!0),!!se.moved){if(!se.ghost){let k=e.find(J=>J.id===se.typeId);se.ghost=document.createElement("div"),se.ghost.className="parking-inspection-drag-ghost",se.ghost.style.backgroundColor=k?.color??"#b33",se.ghost.textContent=`${k?.icon??""} ${k?.name??""}`,document.body.append(se.ghost)}se.ghost.style.left=`${j.clientX}px`,se.ghost.style.top=`${j.clientY}px`}},Me=j=>{if(!S||S.id!==j.pointerId)return;let se=S;S=null,se.ghost?.remove(),se.moved&&q(se.typeId,j.clientX,j.clientY)},ke=()=>{let j=Math.max(i.clientWidth,1),se=Math.max(i.clientHeight,1);o.setSize(j,se,!1),a.aspect=j/se,a.updateProjectionMatrix(),b()},Je=new ResizeObserver(ke);return Je.observe(i),s.addEventListener("pointerdown",$),s.addEventListener("pointermove",ie),s.addEventListener("pointerup",G),s.addEventListener("pointercancel",()=>{w=null}),i.addEventListener("pointerdown",ue),i.addEventListener("pointermove",ve),i.addEventListener("pointerup",Me),i.addEventListener("pointercancel",Me),M(),B(),ke(),{dispose(){Je.disconnect(),s.removeEventListener("pointerdown",$),s.removeEventListener("pointermove",ie),s.removeEventListener("pointerup",G),i.removeEventListener("pointerdown",ue),i.removeEventListener("pointermove",ve),i.removeEventListener("pointerup",Me),i.removeEventListener("pointercancel",Me),o.dispose(),r.traverse(j=>{j instanceof bt&&(j.geometry.dispose(),Array.isArray(j.material)?j.material.forEach(se=>se.dispose()):j.material.dispose())})},placeAt:q,setMarks(j){R=[...j],B()}}}var fu={\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9:"\u8FD0\u8425\u4EEA\u8868\u76D8",\u30EC\u30F3\u30BF\u30AB\u30FC\u904B\u55B6\u7BA1\u7406:"\u79DF\u8F66\u8FD0\u8425\u7BA1\u7406",\u30E1\u30CB\u30E5\u30FC:"\u83DC\u5355",\u6B63\u5E38\u7A3C\u50CD\u4E2D:"\u8FD0\u884C\u6B63\u5E38",\u66F4\u65B0:"\u5237\u65B0",\u518D\u8A66\u884C:"\u91CD\u8BD5","\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026":"\u6B63\u5728\u52A0\u8F7D\u2026",\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F:"\u65E0\u6CD5\u52A0\u8F7D","\u64CD\u4F5C\u3092\u5B8C\u4E86\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6642\u9593\u3092\u304A\u3044\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002":"\u64CD\u4F5C\u672A\u80FD\u5B8C\u6210\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","\u4E88\u7D04\u30FB\u53D7\u4ED8":"\u9884\u7EA6\u4E0E\u63A5\u5F85",\u5E97\u8217\u7BA1\u7406:"\u95E8\u5E97\u7BA1\u7406",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8:"\u5E97\u94FA\u8D26\u6237",\u5E97\u8217\u3054\u3068\u306E\u30ED\u30B0\u30A4\u30F3\u3068\u5229\u7528\u6A29\u9650\u3092\u7BA1\u7406:"\u7BA1\u7406\u5404\u5E97\u94FA\u7684\u767B\u5F55\u8D26\u6237\u548C\u4F7F\u7528\u6743\u9650",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u5E97\u94FA\u8D26\u6237",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u5E97\u94FA\u8D26\u6237","\u5E97\u8217 / \u30A2\u30AB\u30A6\u30F3\u30C8":"\u5E97\u94FA / \u8D26\u6237",\u5E97\u8217\u30B3\u30FC\u30C9:"\u5E97\u94FA\u4EE3\u7801",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u7DE8\u96C6:"\u7F16\u8F91\u5E97\u94FA\u8D26\u6237",\u5E97\u8217\u7528\u306E\u30ED\u30B0\u30A4\u30F3ID\u3068\u5229\u7528\u6A29\u9650\u3092\u8A2D\u5B9A\u3057\u307E\u3059:"\u8BBE\u7F6E\u5E97\u94FA\u767B\u5F55 ID \u548C\u4F7F\u7528\u6743\u9650",\u5229\u7528\u6A29\u9650:"\u4F7F\u7528\u6743\u9650",\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F:"\u5458\u5DE5\u540D\u5355",\u30B9\u30BF\u30C3\u30D5\u540D:"\u5458\u5DE5\u59D3\u540D","\u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u62C5\u5F53\u8005\u9078\u629E\u306B\u4F7F\u3044\u307E\u3059":"\u7528\u4E8E\u9009\u62E9\u51FA\u79DF\u548C\u6536\u8F66\u7684\u7ECF\u529E\u5458\u5DE5",\u30B9\u30BF\u30C3\u30D5\u540D\u304C\u307E\u3060\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093:"\u5C1A\u672A\u767B\u8BB0\u5458\u5DE5\u59D3\u540D",\u7121\u52B9\u306B\u3059\u308B:"\u505C\u7528",\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7DE8\u96C6:"\u7F16\u8F91\u5458\u5DE5\u59D3\u540D","\u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u8A18\u9332\u306B\u8868\u793A\u3059\u308B\u540D\u524D\u3092\u5909\u66F4\u3057\u307E\u3059":"\u66F4\u6539\u51FA\u79DF\u548C\u6536\u8F66\u8BB0\u5F55\u4E2D\u663E\u793A\u7684\u59D3\u540D","\u8CB8\u51FA\u62C5\u5F53\uFF1A":"\u51FA\u79DF\u7ECF\u529E\uFF1A","\u8FD4\u5374\u62C5\u5F53\uFF1A":"\u6536\u8F66\u7ECF\u529E\uFF1A","\u8CB8\u51FA\u30FB\u8FD4\u5374\u6642\u306B\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u8A18\u9332\u3057\u307E\u3059":"\u767B\u8BB0\u51FA\u79DF\u548C\u6536\u8F66\u65F6\u7684\u7ECF\u529E\u5458\u5DE5",\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5:"\u7ECF\u529E\u5458\u5DE5",\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9\u5458\u5DE5","\u5148\u306B\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3078\u62C5\u5F53\u8005\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u5148\u5728\u5458\u5DE5\u540D\u5355\u4E2D\u767B\u8BB0\u7ECF\u529E\u5458\u5DE5\u3002",\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3092\u958B\u304F:"\u6253\u5F00\u5458\u5DE5\u540D\u5355",\u8CB8\u51FA\u624B\u7D9A\u304D:"\u529E\u7406\u51FA\u79DF",\u8FD4\u5374\u624B\u7D9A\u304D:"\u529E\u7406\u6536\u8F66",\u8CB8\u51FA\u3092\u78BA\u5B9A:"\u786E\u8BA4\u51FA\u79DF",\u8FD4\u5374\u3092\u78BA\u5B9A:"\u786E\u8BA4\u6536\u8F66","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u6DFB\u52A0\u5458\u5DE5\u59D3\u540D\u3002","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u66F4\u65B0\u5458\u5DE5\u59D3\u540D\u3002","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u518D\u958B\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u91CD\u65B0\u542F\u7528\u5458\u5DE5\u59D3\u540D\u3002","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7121\u52B9\u306B\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u505C\u7528\u5458\u5DE5\u59D3\u540D\u3002",employee_required:"\u8BF7\u9009\u62E9\u8D1F\u8D23\u6B64\u6B21\u64CD\u4F5C\u7684\u5458\u5DE5\u3002",invalid_employee:"\u8BF7\u68C0\u67E5\u5458\u5DE5\u59D3\u540D\u3002",\u8ECA\u4E21\u7BA1\u7406:"\u8F66\u8F86\u7BA1\u7406",\u99D0\u8ECA\u5834\u914D\u7F6E:"\u505C\u8F66\u573A\u5E03\u5C40",\u8ECA\u4E21\u4E00\u89A7\u3078\u623B\u308B:"\u8FD4\u56DE\u8F66\u8F86\u5217\u8868",\u30ED\u30B0\u30A2\u30A6\u30C8:"\u9000\u51FA\u767B\u5F55",\u6240\u5C5E\u5E97\u8217:"\u6240\u5C5E\u95E8\u5E97",\u6709\u52B9:"\u542F\u7528",\u7121\u52B9:"\u505C\u7528",\u8CB8\u51FA\u53EF\u80FD:"\u53EF\u51FA\u79DF",\u8CB8\u51FA\u4E2D:"\u51FA\u79DF\u4E2D",\u6574\u5099\u4E2D:"\u7EF4\u4FEE\u4E2D",\u767B\u9332\u62B9\u6D88:"\u5DF2\u6CE8\u9500",\u672C\u90E8:"\u603B\u90E8",\u76F4\u55B6\u5E97:"\u76F4\u8425\u5E97",\u52A0\u76DF\u5E97:"\u52A0\u76DF\u5E97",\u4E88\u7D04\u6E08\u307F:"\u5DF2\u9884\u7EA6",\u8FD4\u5374\u6E08\u307F:"\u5DF2\u5F52\u8FD8",\u30AD\u30E3\u30F3\u30BB\u30EB:"\u53D6\u6D88","\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002":"\u8D26\u6237\u6216\u5BC6\u7801\u4E0D\u6B63\u786E\u3002","\u3053\u306E\u64CD\u4F5C\u3092\u884C\u3046\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002":"\u60A8\u6CA1\u6709\u6743\u9650\u6267\u884C\u6B64\u64CD\u4F5C\u3002","\u60C5\u5831\u304C\u91CD\u8907\u3057\u3066\u3044\u307E\u3059\u3002\u5E97\u8217\u30B3\u30FC\u30C9\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u540D\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u307E\u305F\u306F\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u4FE1\u606F\u91CD\u590D\uFF0C\u8BF7\u68C0\u67E5\u95E8\u5E97\u4EE3\u7801\u3001\u8D26\u6237\u540D\u3001\u8F66\u724C\u53F7\u6216\u5458\u5DE5\u59D3\u540D\u3002","\u8ECA\u4E21\u307E\u305F\u306F\u4F5C\u696D\u4E88\u5B9A\u304C\u6B8B\u3063\u3066\u3044\u308B\u305F\u3081\u3001\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002":"\u4ECD\u6709\u8F66\u8F86\u6216\u4F5C\u4E1A\u8BA1\u5212\uFF0C\u6B64\u505C\u8F66\u533A\u57DF\u65E0\u6CD5\u5220\u9664\u3002","\u6700\u5F8C\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002":"\u65E0\u6CD5\u5220\u9664\u6700\u540E\u4E00\u4E2A\u505C\u8F66\u533A\u57DF\u3002","\u8ECA\u4E21\u307E\u305F\u306F\u4E88\u7D04\u306E\u72B6\u614B\u304C\u5909\u66F4\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002":"\u8F66\u8F86\u6216\u9884\u7EA6\u72B6\u6001\u5DF2\u66F4\u6539\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5\u3002","\u9078\u629E\u3057\u305F\u5E97\u8217\u3001\u5F79\u5272\u3001\u307E\u305F\u306F\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u6240\u9009\u95E8\u5E97\u3001\u89D2\u8272\u6216\u8F66\u8F86\u3002","\u5165\u529B\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u8F93\u5165\u5185\u5BB9\u3002","\u30B7\u30B9\u30C6\u30E0\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u3057\u3070\u3089\u304F\u3057\u3066\u304B\u3089\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002":"\u53D1\u751F\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","ERP\u62E0\u70B9\u304C\u5909\u66F4\u3055\u308C\u305F\u8ECA\u4E21\u304C\u3042\u308A\u307E\u3059\u3002\u99D0\u8ECA\u5834\u30C7\u30FC\u30BF\u306E\u62E0\u70B9\u5272\u5F53\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u6709\u8F66\u8F86\u7684 ERP \u7F51\u70B9\u5DF2\u66F4\u6539\uFF0C\u8BF7\u68C0\u67E5\u505C\u8F66\u573A\u6570\u636E\u4E2D\u7684\u7F51\u70B9\u5206\u914D\u3002","\u30ED\u30B0\u30A4\u30F3\u306E\u6709\u52B9\u671F\u9650\u304C\u5207\u308C\u307E\u3057\u305F\u3002\u518D\u5EA6\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u3002","\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u6240\u5C5E\u5E97\u8217\u304C\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002":"\u8D26\u6237\u6216\u6240\u5C5E\u95E8\u5E97\u5DF2\u505C\u7528\u3002","\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u8D26\u6237\u3002","\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u8F66\u8F86\u3002","\u4E88\u7D04\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u9884\u7EA6\u3002","\u5E97\u8217\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u95E8\u5E97\u4FE1\u606F\u3002","\u5F79\u5272\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u89D2\u8272\u4FE1\u606F\u3002","\u30A2\u30AB\u30A6\u30F3\u30C8\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u8D26\u6237\u4FE1\u606F\u3002","\u9078\u629E\u3055\u308C\u305F\u6A29\u9650\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u6240\u9009\u6743\u9650\u3002","\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u9009\u62E9\u95E8\u5E97\u3002","\u4E88\u7D04\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u9884\u7EA6\u5185\u5BB9\u3002","\u5BFE\u8C61\u306E\u60C5\u5831\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u76F8\u5173\u4FE1\u606F\u3002",\u30A2\u30AB\u30A6\u30F3\u30C8:"\u8D26\u6237",\u30D1\u30B9\u30EF\u30FC\u30C9:"\u5BC6\u7801",\u30ED\u30B0\u30A4\u30F3:"\u767B\u5F55","\u30ED\u30B0\u30A4\u30F3\u4E2D\u2026":"\u6B63\u5728\u767B\u5F55\u2026","\u99D0\u8ECA\u5834\u306E\u66F4\u65B0\u901A\u77E5\u3092\u8AAD\u307F\u53D6\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002":"\u65E0\u6CD5\u8BFB\u53D6\u505C\u8F66\u573A\u66F4\u65B0\u901A\u77E5\u3002","\u99D0\u8ECA\u5834\u306E\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u63A5\u7D9A\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u63A5\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u505C\u8F66\u573A\u5B9E\u65F6\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u65B0\u8FDE\u63A5\u3002","\u672C\u90E8\u30FB\u76F4\u55B6\u5E97\u30FB\u52A0\u76DF\u5E97\u3092\u7BA1\u7406":"\u7BA1\u7406\u603B\u90E8\u3001\u76F4\u8425\u5E97\u548C\u52A0\u76DF\u5E97",\u5E97\u8217\u6570:"\u95E8\u5E97\u6570",\u76F4\u55B6:"\u76F4\u8425",\u52A0\u76DF:"\u52A0\u76DF","\u6709\u52B9 ":"\u542F\u7528 ",\u4EF6:"\u9879",\u8ECA\u4E21\u53F0\u6570:"\u8F66\u8F86\u6570",\u53F0:"\u8F86","\u6700\u8FD1\u306E\u4E88\u7D04\u30FB\u53D7\u4ED8":"\u6700\u8FD1\u7684\u9884\u7EA6\u4E0E\u63A5\u5F85",\u3059\u3079\u3066\u8868\u793A:"\u67E5\u770B\u5168\u90E8",\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u9884\u7EA6",\u8ECA\u4E21\u72B6\u6CC1:"\u8F66\u8F86\u72B6\u6001",\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u96C6\u8A08:"\u5B9E\u65F6\u7EDF\u8BA1",\u5E97\u8217\u4E00\u89A7:"\u95E8\u5E97\u5217\u8868",\u5E97\u8217\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u95E8\u5E97\u4FE1\u606F",\u3059\u3079\u3066\u306E\u5E97\u8217\u3092\u8868\u793A:"\u67E5\u770B\u6240\u6709\u95E8\u5E97",\u691C\u7D22:"\u641C\u7D22",\u5E97\u8217\u540D\u307E\u305F\u306F\u5E97\u8217\u30B3\u30FC\u30C9\u3067\u691C\u7D22:"\u6309\u95E8\u5E97\u540D\u79F0\u6216\u4EE3\u7801\u641C\u7D22",\u5E97\u8217\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093:"\u627E\u4E0D\u5230\u95E8\u5E97","\u5E97\u8217\u540D / \u30B3\u30FC\u30C9":"\u95E8\u5E97\u540D\u79F0 / \u4EE3\u7801",\u5E97\u8217\u7A2E\u5225:"\u95E8\u5E97\u7C7B\u578B",\u72B6\u614B:"\u72B6\u6001",\u64CD\u4F5C:"\u64CD\u4F5C",\u5E97\u8217\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u95E8\u5E97","\u5E97\u8217\u540D\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u540D\u3067\u691C\u7D22":"\u6309\u5E97\u94FA\u540D\u79F0\u6216\u8D26\u6237\u540D\u641C\u7D22",\u7DE8\u96C6:"\u7F16\u8F91",\u5E97\u8217\u60C5\u5831\u306E\u95B2\u89A7:"\u67E5\u770B\u95E8\u5E97\u4FE1\u606F",\u5E97\u8217\u60C5\u5831\u306E\u7BA1\u7406:"\u7BA1\u7406\u95E8\u5E97\u4FE1\u606F",\u8ECA\u4E21\u60C5\u5831\u306E\u95B2\u89A7:"\u67E5\u770B\u8F66\u8F86\u4FE1\u606F",\u8ECA\u4E21\u60C5\u5831\u306E\u7BA1\u7406:"\u7BA1\u7406\u8F66\u8F86\u4FE1\u606F",\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u95B2\u89A7:"\u67E5\u770B\u505C\u8F66\u573A\u770B\u677F",\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u64CD\u4F5C:"\u64CD\u4F5C\u505C\u8F66\u573A\u770B\u677F",\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u8A2D\u5B9A\u7BA1\u7406:"\u7BA1\u7406\u505C\u8F66\u573A\u770B\u677F\u8BBE\u7F6E","\u4E88\u7D04\u30FB\u53D7\u4ED8\u60C5\u5831\u306E\u95B2\u89A7":"\u67E5\u770B\u9884\u7EA6\u4E0E\u63A5\u5F85\u4FE1\u606F","\u4E88\u7D04\u306E\u4F5C\u6210\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D":"\u521B\u5EFA\u9884\u7EA6\u3001\u529E\u7406\u51FA\u79DF\u4E0E\u5F52\u8FD8",\u305D\u306E\u4ED6\u306E\u6A29\u9650:"\u5176\u4ED6\u6743\u9650",\u6A29\u9650\u306E\u8AAC\u660E\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u6743\u9650\u8BF4\u660E",\u3059\u3079\u3066\u306E\u72B6\u614B:"\u6240\u6709\u72B6\u6001",\u8ECA\u4E21\u60C5\u5831\u3068\u7A3C\u50CD\u72B6\u6CC1\u3092\u7BA1\u7406:"\u7BA1\u7406\u8F66\u8F86\u4FE1\u606F\u548C\u8FD0\u8425\u72B6\u6001","\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u30E1\u30FC\u30AB\u30FC\u3001\u8ECA\u7A2E\u3067\u691C\u7D22":"\u6309\u8F66\u724C\u53F7\u3001\u5236\u9020\u5546\u6216\u8F66\u578B\u641C\u7D22","\u8ECA\u4E21 / \u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8":"\u8F66\u8F86 / \u8F66\u724C\u53F7",\u56FA\u5B9AID:"\u56FA\u5B9A ID",\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093:"\u627E\u4E0D\u5230\u8F66\u8F86",\u8ECA\u4E21\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u8F66\u8F86",ERP\u8ECA\u4E21\u3092\u30DC\u30FC\u30C9\u3078\u53CD\u6620:"\u5C06 ERP \u8F66\u8F86\u540C\u6B65\u5230\u770B\u677F","\u914D\u7F6E\u30FB\u72B6\u614B\u3092\u4FDD\u5B58":"\u4FDD\u5B58\u4F4D\u7F6E\u548C\u72B6\u6001",\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u30EC\u30A4\u30A2\u30A6\u30C8:"\u505C\u8F66\u533A\u57DF\u5E03\u5C40",\u672A\u914D\u7F6E:"\u672A\u5206\u914D","\u4F4D\u7F6E X":"\u4F4D\u7F6E X","\u4F4D\u7F6E Y":"\u4F4D\u7F6E Y",\u99D0\u8ECA\u533A\u753B:"\u505C\u8F66\u533A\u57DF",\u696D\u52D9\u72B6\u614B:"\u4E1A\u52A1\u72B6\u6001",\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3:"\u8F66\u8F86\u9009\u9879",\u6D17\u8ECA\u5F85\u3061:"\u5F85\u6D17\u8F66",\u7D66\u6CB9\u5F85\u3061:"\u5F85\u52A0\u6CB9",\u4FEE\u7406\u5F85\u3061:"\u5F85\u7EF4\u4FEE",\u672A\u8A55\u4FA1:"\u672A\u8BC4\u4F30",\u640D\u50B7\u30DE\u30FC\u30AB\u30FC:"\u635F\u4F24\u6807\u8BB0","3D\u8ECA\u4E21\u691C\u67FB\u30FB\u640D\u50B7\u3092\u7DE8\u96C6":"3D \u8F66\u8F86\u68C0\u67E5 / \u7F16\u8F91\u635F\u4F24",\u640D\u50B7\u30DE\u30FC\u30AB\u30FC\u306E\u30D7\u30EC\u30D3\u30E5\u30FC:"\u635F\u4F24\u6807\u8BB0\u9884\u89C8","3D\u691C\u67FB\u3067\u640D\u50B7\u4F4D\u7F6E\u3092\u7DE8\u96C6":"\u5728 3D \u68C0\u67E5\u4E2D\u7F16\u8F91\u635F\u4F24\u4F4D\u7F6E",\u30E1\u30E2:"\u5907\u6CE8",\u72B6\u614B\u306A\u3057:"\u65E0\u72B6\u6001",\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5:"\u62D6\u52A8\u4EE5\u79FB\u52A8","\u8A73\u7D30\u30FB\u72B6\u614B":"\u8BE6\u60C5\u4E0E\u72B6\u6001",\u904B\u7528\u4E2D:"\u8FD0\u8425\u4E2D",\u505C\u6B62\u4E2D:"\u5DF2\u505C\u7528",\u4E0A\u3078:"\u4E0A\u79FB",\u4E0B\u3078:"\u4E0B\u79FB",\u30EC\u30A4\u30A2\u30A6\u30C8:"\u5E03\u5C40",\u7DDA\u63CF\u753B\u3092\u7D42\u4E86:"\u7ED3\u675F\u7ED8\u7EBF",\u7DDA\u3092\u63CF\u304F:"\u7ED8\u5236\u7EBF\u6761",\u505C\u6B62:"\u505C\u7528",\u518D\u958B:"\u91CD\u65B0\u542F\u7528",\u524A\u9664:"\u5220\u9664",\u99D0\u8ECA\u533A\u753B\u306E\u30E9\u30A4\u30F3:"\u505C\u8F66\u533A\u57DF\u7EBF\u6761",\u3053\u3053\u3078\u8ECA\u4E21\u3092\u30C9\u30E9\u30C3\u30B0:"\u5C06\u8F66\u8F86\u62D6\u52A8\u5230\u6B64\u5904",\u7DDA\u306E\u8272:"\u7EBF\u6761\u989C\u8272",\u6700\u5F8C\u306E\u7DDA\u3092\u53D6\u308A\u6D88\u3059:"\u64A4\u9500\u6700\u540E\u4E00\u6761\u7EBF","\u56F3\u9762\u5185\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u533A\u753B\u7DDA\u3092\u63CF\u304D\u307E\u3059\u3002\u6307\u3092\u96E2\u3059\u3068\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002":"\u5728\u56FE\u4E2D\u62D6\u52A8\u4EE5\u7ED8\u5236\u533A\u57DF\u7EBF\u6761\uFF0C\u677E\u5F00\u9F20\u6807\u540E\u81EA\u52A8\u4FDD\u5B58\u3002","\u8ECA\u4E21\u306E\u283F\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u914D\u7F6E\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u5909\u66F4\u306F\u81EA\u52D5\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002":"\u62D6\u52A8\u8F66\u8F86\u7684 \u283F \u6807\u8BB0\u53EF\u8C03\u6574\u4F4D\u7F6E\uFF0C\u4FEE\u6539\u4F1A\u81EA\u52A8\u4FDD\u5B58\u3002","\u79FB\u52D5\u30FB\u4F5C\u696D\u4E88\u5B9A":"\u79FB\u52A8\u8F66\u8F86 / \u4F5C\u4E1A\u8BA1\u5212",\u4E88\u5B9A:"\u8BA1\u5212",\u5B8C\u4E86:"\u5B8C\u6210",\u4E88\u5B9A\u65E5\u6642:"\u8BA1\u5212\u65F6\u95F4",\u4E88\u5B9A\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u8BA1\u5212",\u4E88\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u8BA1\u5212",\u99D0\u8ECA\u30A8\u30EA\u30A2\u540D:"\u505C\u8F66\u533A\u57DF\u540D\u79F0","Google Maps \u6848\u5185URL":"Google Maps \u5BFC\u822A URL",\u30A8\u30EA\u30A2\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u533A\u57DF",\u8ECA\u4E21\u30AF\u30E9\u30B9:"\u8F66\u8F86\u7C7B\u522B",\u30AF\u30E9\u30B9\u540D:"\u7C7B\u522B\u540D\u79F0",\u8FFD\u52A0:"\u6DFB\u52A0",\u72B6\u614B\u540D:"\u72B6\u6001\u540D\u79F0",\u30AA\u30D7\u30B7\u30E7\u30F3\u540D:"\u9009\u9879\u540D\u79F0","\u30D5\u30E9\u30F3\u30C1\u30E3\u30A4\u30BA\u5E97\u8217 / \u62E0\u70B9":"\u52A0\u76DF\u95E8\u5E97 / \u7F51\u70B9","\u65E7Parking\u306E\u5E97\u8217\u306F\u73FE\u5728\u306EERP\u62E0\u70B9\u306B\u5C5E\u3059\u308B\u5E97\u8217\u30C7\u30FC\u30BF\u3078\u79FB\u884C\u3057\u307E\u3059\u3002\u30D5\u30E9\u30F3\u30C1\u30E3\u30A4\u30BA\u62E0\u70B9\u3068\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u306FERP\u306E\u300C\u5E97\u8217\u300D\u300C\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u300D\u304B\u3089\u7BA1\u7406\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u65E7\u505C\u8F66\u7CFB\u7EDF\u7684\u95E8\u5E97\u6570\u636E\u5C06\u8FC1\u79FB\u5230\u5F53\u524D ERP \u7F51\u70B9\u3002\u8BF7\u5728 ERP \u7684\u201C\u95E8\u5E97\u201D\u548C\u201C\u5E97\u94FA\u8D26\u6237\u201D\u4E2D\u7BA1\u7406\u52A0\u76DF\u7F51\u70B9\u53CA\u8D26\u6237\u3002",\u5E97\u8217\u540D:"\u95E8\u5E97\u540D\u79F0",\u5E97\u8217\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u95E8\u5E97",\u62E0\u70B9\u9593\u8DDD\u96E2:"\u505C\u8F66\u533A\u57DF\u95F4\u8DDD\u79BB","\u5206\u3092\u7A7A\u6B04\u306B\u3059\u308B\u3068\u65E2\u5B58\u306E\u8DDD\u96E2\u3092\u524A\u9664\u3057\u307E\u3059\u3002":"\u5206\u949F\u7559\u7A7A\u5C06\u5220\u9664\u5DF2\u6709\u8DDD\u79BB\u8BBE\u7F6E\u3002",\u5206:"\u5206\u949F",\u4FDD\u5B58:"\u4FDD\u5B58",\u5E97\u8217\u304B\u3089\u99D0\u8ECA\u5834\u307E\u3067:"\u95E8\u5E97\u81F3\u505C\u8F66\u573A","\u5E97\u8217\u3068\u99D0\u8ECA\u5834\u306E\u6240\u8981\u6642\u9593\u30FB\u8DDD\u96E2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002":"\u8BBE\u7F6E\u95E8\u5E97\u4E0E\u505C\u8F66\u573A\u4E4B\u95F4\u7684\u65F6\u95F4\u548C\u8DDD\u79BB\u3002",\u8DDD\u96E2\u8A2D\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u8DDD\u79BB\u8BBE\u7F6E",\u5E97\u8217\u3068\u99D0\u8ECA\u5834\u3092\u5148\u306B\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u5148\u6DFB\u52A0\u95E8\u5E97\u548C\u505C\u8F66\u573A",\u67FB\u5B9A\u9805\u76EE:"\u8BC4\u4F30\u9879\u76EE",\u5358\u4F4D:"\u5355\u4F4D",\u6A19\u6E96:"\u9ED8\u8BA4",\u67FB\u5B9A\u9805\u76EE\u540D:"\u8BC4\u4F30\u9879\u76EE\u540D\u79F0",\u640D\u50B7\u540D:"\u635F\u4F24\u540D\u79F0",\u914D\u7F6E\u3092\u53D6\u308A\u6D88\u3059:"\u64A4\u9500\u4F4D\u7F6E\u4FEE\u6539","\u8ECA\u4E21\u306E\u914D\u7F6E\u30FB\u696D\u52D9\u72B6\u614B\u3092\u7BA1\u7406":"\u7BA1\u7406\u8F66\u8F86\u4F4D\u7F6E\u548C\u4E1A\u52A1\u72B6\u6001","\u95B2\u89A7\u5C02\u7528\u3067\u3059\u3002\u914D\u7F6E\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u99D0\u8ECA\u5834\u66F8\u304D\u8FBC\u307F\u6A29\u9650\u304C\u5FC5\u8981\u3067\u3059\u3002":"\u5F53\u524D\u4E3A\u53EA\u8BFB\u6A21\u5F0F\u3002\u9700\u8981\u505C\u8F66\u573A\u5199\u5165\u6743\u9650\u624D\u80FD\u8C03\u6574\u4F4D\u7F6E\u3002","\u4E88\u7D04\u756A\u53F7\u3001\u304A\u5BA2\u69D8\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3067\u691C\u7D22":"\u6309\u9884\u7EA6\u7F16\u53F7\u3001\u5BA2\u6237\u6216\u8F66\u724C\u53F7\u641C\u7D22","\u4E88\u7D04\u3092\u767B\u9332\u3057\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D\u3092\u884C\u3044\u307E\u3059":"\u767B\u8BB0\u9884\u7EA6\u5E76\u529E\u7406\u51FA\u79DF\u3001\u5F52\u8FD8\u624B\u7EED","\u4E88\u7D04\u756A\u53F7 / \u5E97\u8217":"\u9884\u7EA6\u7F16\u53F7 / \u95E8\u5E97",\u304A\u5BA2\u69D8\u60C5\u5831:"\u5BA2\u6237\u4FE1\u606F",\u5229\u7528\u671F\u9593:"\u4F7F\u7528\u671F\u95F4",\u53D7\u4ED8\u64CD\u4F5C:"\u63A5\u5F85\u64CD\u4F5C",\u3059\u3079\u3066\u306E\u4E88\u7D04:"\u6240\u6709\u9884\u7EA6","\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u6765\u5E97\u6642\u306B\u53D7\u4ED8\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044":"\u6682\u65E0\u9884\u7EA6\u3002\u5BA2\u6237\u5230\u5E97\u65F6\u8BF7\u767B\u8BB0\u63A5\u5F85\u4FE1\u606F\u3002",\u4E88\u7D04\u3092\u4F5C\u6210:"\u521B\u5EFA\u9884\u7EA6",\u4E88\u7D04\u3092\u4FDD\u5B58:"\u4FDD\u5B58\u9884\u7EA6",\u304A\u5BA2\u69D8\u3068\u5229\u7528\u671F\u9593\u3092\u767B\u9332\u3057\u307E\u3059:"\u767B\u8BB0\u5BA2\u6237\u548C\u4F7F\u7528\u671F\u9650",\u304A\u5BA2\u69D8\u306E\u6C0F\u540D:"\u5BA2\u6237\u59D3\u540D",\u96FB\u8A71\u756A\u53F7:"\u7535\u8BDD\u53F7\u7801",\u8CB8\u51FA\u4E88\u5B9A\u65E5\u6642:"\u8BA1\u5212\u51FA\u79DF\u65F6\u95F4",\u53D7\u4ED8\u5E97\u8217:"\u63A5\u5F85\u95E8\u5E97",\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9\u95E8\u5E97",\u8ECA\u4E21\u306E\u4E88\u7D04:"\u9884\u7EA6\u8F66\u8F86",\u8CB8\u51FA\u53EF\u80FD\u306A\u8ECA\u4E21\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9\u53EF\u51FA\u79DF\u7684\u8F66\u8F86","\u8CB8\u51FA\u65E5\u6642\u3068\u8FD4\u5374\u65E5\u6642\u3092\u6B63\u3057\u304F\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u6B63\u786E\u586B\u5199\u51FA\u79DF\u548C\u5F52\u8FD8\u65F6\u95F4\u3002","\u8CB8\u51FA\u624B\u7D9A\u304D\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002":"\u51FA\u79DF\u624B\u7EED\u5DF2\u5B8C\u6210\u3002","\u8FD4\u5374\u624B\u7D9A\u304D\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002":"\u5F52\u8FD8\u624B\u7EED\u5DF2\u5B8C\u6210\u3002","\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3057\u305F\u3002":"\u9884\u7EA6\u5DF2\u53D6\u6D88\u3002",\u4E88\u7D04\u756A\u53F7:"\u9884\u7EA6\u7F16\u53F7",\u304A\u5BA2\u69D8:"\u5BA2\u6237",\u8ECA\u4E21:"\u8F66\u8F86","\u8ECA\u4E21\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026":"\u6B63\u5728\u52A0\u8F7D\u8F66\u8F86\u2026","\u8ECA\u4E21\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5E97\u8217\u3092\u9078\u629E\u3057\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u65E0\u6CD5\u52A0\u8F7D\u8F66\u8F86\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u95E8\u5E97\u3002",\u8FD4\u5374\u4E88\u5B9A\u65E5\u6642:"\u8BA1\u5212\u5F52\u8FD8\u65F6\u95F4","\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u53D6\u6D88\u6B64\u9884\u7EA6\u5417\uFF1F","\u3053\u306E\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u5220\u9664\u6B64\u8BA1\u5212\u5417\uFF1F","\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u5220\u9664\u6B64\u505C\u8F66\u533A\u57DF\u5417\uFF1F","\u3053\u306E\u8A2D\u5B9A\u9805\u76EE\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u5220\u9664\u6B64\u8BBE\u7F6E\u9879\u5417\uFF1F","\u4E88\u5B9A\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002":"\u8BA1\u5212\u5DF2\u66F4\u65B0\u3002","\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002":"\u8BA1\u5212\u5DF2\u5220\u9664\u3002","\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u4FDD\u5B58\u3002",\u8A2D\u5B9A\u3092\u4FDD\u5B58:"\u4FDD\u5B58\u8BBE\u7F6E",\u8A2D\u5B9A\u9805\u76EE:"\u8BBE\u7F6E\u9879",\u30A2\u30AB\u30A6\u30F3\u30C8\u540D:"\u8D26\u6237\u540D","\u534A\u89D2\u82F1\u6570\u5B57\u30FB\u8A18\u53F7 3\uFF5E64 \u6587\u5B57":"3\u201364 \u4E2A\u534A\u89D2\u5B57\u6BCD\u3001\u6570\u5B57\u6216\u7B26\u53F7",\u6C0F\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u59D3\u540D",\u521D\u671F\u30D1\u30B9\u30EF\u30FC\u30C9:"\u521D\u59CB\u5BC6\u7801","12 \u6587\u5B57\u4EE5\u4E0A":"\u81F3\u5C11 12 \u4E2A\u5B57\u7B26",\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u72B6\u614B:"\u8D26\u6237\u72B6\u6001","\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u518D\u8A2D\u5B9A\uFF08\u4EFB\u610F\uFF09":"\u91CD\u7F6E\u5BC6\u7801\uFF08\u53EF\u9009\uFF09",\u7A7A\u6B04\u306E\u5834\u5408\u306F\u5909\u66F4\u3057\u307E\u305B\u3093:"\u7559\u7A7A\u5219\u4E0D\u66F4\u6539","\u8ECA\u53F0\u756A\u53F7\uFF08\u4EFB\u610F\uFF09":"\u8F66\u67B6\u53F7\uFF08\u53EF\u9009\uFF09",\u8ECA\u53F0\u756A\u53F7:"\u8F66\u67B6\u53F7",\u30E1\u30FC\u30AB\u30FC:"\u5236\u9020\u5546",\u8ECA\u7A2E:"\u8F66\u578B","\u4F8B\uFF1AToyota":"\u4F8B\u5982\uFF1AToyota","\u4F8B\uFF1APrius":"\u4F8B\u5982\uFF1APrius","\u5E74\u5F0F\uFF08\u4EFB\u610F\uFF09":"\u5E74\u4EFD\uFF08\u53EF\u9009\uFF09",\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8:"\u8F66\u724C\u53F7",\u30D7\u30EC\u30FC\u30C8\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u8F66\u724C\u53F7",\u8ECA\u4E21\u60C5\u5831\u3092\u767B\u9332\u3057\u307E\u3059:"\u767B\u8BB0\u8F66\u8F86\u4FE1\u606F",\u8ECA\u4E21\u60C5\u5831\u3092\u7DE8\u96C6:"\u7F16\u8F91\u8F66\u8F86\u4FE1\u606F",\u56FA\u5B9A\u8ECA\u4E21ID\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093:"\u56FA\u5B9A\u8F66\u8F86 ID \u4E0D\u53EF\u66F4\u6539",\u8ECA\u4E21\u306E\u72B6\u614B:"\u8F66\u8F86\u72B6\u6001",\u8ECA\u4E21\u3092\u4E88\u7D04:"\u9884\u7EA6\u8F66\u8F86",\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB:"\u53D6\u6D88\u9884\u7EA6","\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\uFF08\u65B0\u898F ":"\u505C\u8F66\u573A\u770B\u677F\u5DF2\u66F4\u65B0\uFF08\u65B0\u589E "," \u53F0\u3001\u66F4\u65B0 ":" \u8F86\uFF0C\u66F4\u65B0 ","\uFF09\u3002":"\uFF09\u3002",\u4E0A\u4F4D\u304B\u3089\u30AB\u30F3\u30DE\u533A\u5207\u308A:"\u6309\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\u4EE5\u9017\u53F7\u5206\u9694","\u512A\u5148\u8ECA\u4E21\u30AF\u30E9\u30B9\uFF08\u4E0A\u4F4D\u304B\u3089\u30AB\u30F3\u30DE\u533A\u5207\u308A\uFF09":"\u4F18\u5148\u8F66\u8F86\u7C7B\u522B\uFF08\u6309\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\uFF0C\u4EE5\u9017\u53F7\u5206\u9694\uFF09","\u56F3\u9762\u30B5\u30A4\u30BA\u3001\u53CE\u5BB9\u53F0\u6570\u3001\u512A\u5148\u30AF\u30E9\u30B9\u3092\u8A2D\u5B9A":"\u8BBE\u7F6E\u56FE\u7EB8\u5C3A\u5BF8\u3001\u5BB9\u91CF\u548C\u4F18\u5148\u7C7B\u522B","\u56F3\u9762\u306E\u9AD8\u3055\uFF08px\uFF09":"\u56FE\u7EB8\u9AD8\u5EA6\uFF08px\uFF09","\u56F3\u9762\u306E\u5E45\uFF08%\uFF09":"\u56FE\u7EB8\u5BBD\u5EA6\uFF08%\uFF09","\u53CE\u5BB9\u53F0\u6570\uFF08\u7121\u5236\u9650\u306F\u7A7A\u6B04\uFF09":"\u5BB9\u91CF\uFF08\u4E0D\u9650\u65F6\u7559\u7A7A\uFF09",\u7A3C\u50CD\u72B6\u614B:"\u8FD0\u8425\u72B6\u6001",\u30A8\u30EA\u30A2\u540D:"\u533A\u57DF\u540D\u79F0","3D\u8ECA\u4E21\u691C\u67FB":"3D \u8F66\u8F86\u68C0\u67E5","\u30C9\u30E9\u30C3\u30B0\u3067360\xB0\u56DE\u8EE2\u3002\u7A2E\u985E\u3092\u9078\u3093\u3067\u8ECA\u4F53\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u8A18\u9332\u3001\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u524A\u9664\u3057\u307E\u3059\u3002":"\u62D6\u52A8\u53EF\u65CB\u8F6C 360\xB0\u3002\u9009\u62E9\u7C7B\u578B\u540E\u70B9\u51FB\u8F66\u8EAB\u5373\u53EF\u8BB0\u5F55\uFF0C\u70B9\u51FB\u6807\u8BB0\u53EF\u5220\u9664\u3002",\u9589\u3058\u308B:"\u5173\u95ED",\u7533\u3057\u8A33\u3042\u308A\u307E\u305B\u3093:"\u62B1\u6B49","\uFF5E":"\u2013",\u524D\u3078:"\u4E0A\u4E00\u9875",\u6B21\u3078:"\u4E0B\u4E00\u9875",\u4EF6\u3092\u8868\u793A:"\u9879",\u4E0D\u660E:"\u672A\u77E5",\u76F4\u55B6\u5E97\u307E\u305F\u306F\u52A0\u76DF\u5E97\u3092\u767B\u9332\u3057\u307E\u3059:"\u767B\u8BB0\u76F4\u8425\u5E97\u6216\u52A0\u76DF\u5E97","\u4F8B\uFF1ATKY-001":"\u4F8B\u5982\uFF1ATKY-001",\u5E97\u8217\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u95E8\u5E97\u540D\u79F0",\u96FB\u8A71\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801",\u5E74\u5F0F:"\u5E74\u4EFD",\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F:"\u6253\u5F00\u83DC\u5355","\u30AA\u30D5\u30E9\u30A4\u30F3\u7528\u30A2\u30D7\u30EA\u306E\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u79BB\u7EBF\u5E94\u7528\u6CE8\u518C\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002","\u76F4\u55B6 ":"\u76F4\u8425 ","\u52A0\u76DF ":"\u52A0\u76DF ","\u5E97 \xB7 ":"\u5BB6 \xB7 ","\u8CB8\u51FA\u53EF\u80FD ":"\u53EF\u51FA\u79DF ","\u6574\u5099\u4E2D ":"\u7EF4\u4FEE\u4E2D ",\u6A29\u9650:"\u6743\u9650",\u76F4\u55B6\u5E97\u307E\u305F\u306F\u52A0\u76DF\u5E97:"\u76F4\u8425\u5E97\u6216\u52A0\u76DF\u5E97",\u8ECA\u4E21\u3092\u3059\u3079\u3066\u8868\u793A:"\u67E5\u770B\u6240\u6709\u8F66\u8F86",\u8ECA\u4E21\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5:"\u62D6\u52A8\u8F66\u8F86\u4EE5\u79FB\u52A8",\u65E5\u672C\u8A9E:"\u65E5\u8BED",\u4E2D\u6587:"\u4E2D\u6587",\u8A00\u8A9E\u5207\u66FF:"\u8BED\u8A00\u5207\u6362",\u30B9\u30AD\u30C3\u30D7:"\u8DF3\u8FC7",\u672A\u5272\u308A\u5F53\u3066:"\u672A\u5206\u914D",\u5E97\u8217\u3092\u9078\u629E\u3057\u76F4\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u91CD\u65B0\u9009\u62E9\u95E8\u5E97",\u99D0\u8ECA\u5834\u66F8\u304D\u8FBC\u307F\u6A29\u9650:"\u505C\u8F66\u573A\u5199\u5165\u6743\u9650",\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9",\u9001\u308A\u5148:"\u76EE\u7684\u5730","\u69D8\u3078\u306E\u8CB8\u51FA\u624B\u7D9A\u304D\u3092\u884C\u3044\u307E\u3059\u304B\uFF1F":"\u8981\u4E3A\u8BE5\u5BA2\u6237\u529E\u7406\u51FA\u79DF\u624B\u7EED\u5417\uFF1F","\u69D8\u306E\u8FD4\u5374\u3092\u78BA\u8A8D\u3057\u307E\u3059\u304B\uFF1F":"\u8981\u786E\u8BA4\u8BE5\u5BA2\u6237\u5DF2\u5F52\u8FD8\u8F66\u8F86\u5417\uFF1F","\u69D8\u306E\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u304B\uFF1F":"\u8981\u53D6\u6D88\u8BE5\u5BA2\u6237\u7684\u9884\u7EA6\u5417\uFF1F","\u8ECA\u4E21 ":"\u8F66\u8F86 "," \u306F\u8CB8\u51FA\u4E2D\u306B\u306A\u308A\u307E\u3059\u3002":" \u5C06\u53D8\u4E3A\u51FA\u79DF\u4E2D\u3002","\u8ECA\u4E21\u306F\u8CB8\u51FA\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002":"\u8F66\u8F86\u5C06\u53D8\u4E3A\u53EF\u51FA\u79DF\u72B6\u6001\u3002","\u5E97\u8217\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406":"\u521B\u5EFA\u548C\u7BA1\u7406\u95E8\u5E97\u4FE1\u606F","\u8ECA\u4E21\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406":"\u521B\u5EFA\u548C\u7BA1\u7406\u8F66\u8F86\u4FE1\u606F","\u8ECA\u4E21\u4F4D\u7F6E\u30FB\u696D\u52D9\u72B6\u6CC1\u306E\u66F4\u65B0":"\u66F4\u65B0\u8F66\u8F86\u4F4D\u7F6E\u548C\u4E1A\u52A1\u72B6\u6001","\u99D0\u8ECA\u5834\u30FB\u30AF\u30E9\u30B9\u30FB\u72B6\u614B\u306A\u3069\u306E\u8A2D\u5B9A\u7BA1\u7406":"\u7BA1\u7406\u505C\u8F66\u573A\u3001\u7C7B\u522B\u548C\u72B6\u6001\u7B49\u8BBE\u7F6E",\u4E88\u7D04\u60C5\u5831\u3068\u53D7\u4ED8\u72B6\u6CC1\u306E\u95B2\u89A7:"\u67E5\u770B\u9884\u7EA6\u4FE1\u606F\u548C\u63A5\u5F85\u72B6\u6001",\u30EC\u30A4\u30A2\u30A6\u30C8\u3092\u4FDD\u5B58:"\u4FDD\u5B58\u5E03\u5C40",\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5:"\u62D6\u52A8\u4EE5\u79FB\u52A8","3D\u8ECA\u4E21\u3092\u56DE\u8EE2\u3057\u640D\u50B7\u7B87\u6240\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u8A18\u9332":"\u65CB\u8F6C 3D \u8F66\u8F86\u5E76\u70B9\u51FB\u635F\u4F24\u90E8\u4F4D\u8FDB\u884C\u8BB0\u5F55","\u30D0\u30FC\u30B8\u30E7\u30F3 ":"\u7248\u672C "},U_=new Map(Object.entries(fu).map(([i,e])=>[e,i])),N_=Object.entries(fu).sort(([i],[e])=>e.length-i.length),F_=[...U_.entries()].sort(([i],[e])=>e.length-i.length);function pr(i,e){return(e==="zh"?N_:F_).reduce((n,[s,r])=>n.replaceAll(s,r),i)}var Et=(i,e=document)=>e.querySelector(i),Ot=Et("#app"),xu=document.querySelector('meta[name="app-version"]')?.content??"\u4E0D\u660E",ac=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),O_=i=>{if(Array.isArray(i))return i.map(String);if(typeof i!="string")return[];try{let e=JSON.parse(i);return Array.isArray(e)?e.map(String):[]}catch{return[]}},pu={dashboard:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',site:'<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M8 9v.01M8 12v.01M8 15v.01M8 18v.01M15 12v.01M15 15v.01M15 18v.01"/>',people:'<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',vehicle:'<path d="m5 11 1.5-5h11L19 11M3 11h18v8H3zM5 19v2m14-2v2"/><circle cx="7.5" cy="15" r="1"/><circle cx="16.5" cy="15" r="1"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',plus:'<path d="M12 5v14M5 12h14"/>',logout:'<path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',sites:'<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>',team:'<circle cx="9" cy="8" r="4"/><path d="M2 21v-2a7 7 0 0 1 14 0v2M16 4a4 4 0 0 1 0 8m2 3a6 6 0 0 1 4 6"/>',fleet:'<path d="m5 11 1.5-5h11L19 11M3 11h18v8H3z"/><circle cx="7.5" cy="15" r="1"/><circle cx="16.5" cy="15" r="1"/>',arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',refresh:'<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2"/>'},Nt=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${pu[i]??pu.dashboard}</svg>`,B_={dashboard:"\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",reservations:"\u4E88\u7D04\u30FB\u53D7\u4ED8",sites:"\u5E97\u8217\u7BA1\u7406",accounts:"\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8",vehicles:"\u8ECA\u4E21\u7BA1\u7406"},k_={active:"\u6709\u52B9",disabled:"\u7121\u52B9",inactive:"\u7121\u52B9",available:"\u8CB8\u51FA\u53EF\u80FD",rented:"\u8CB8\u51FA\u4E2D",maintenance:"\u6574\u5099\u4E2D",retired:"\u767B\u9332\u62B9\u6D88",headquarters:"\u672C\u90E8",direct:"\u76F4\u55B6\u5E97",franchise:"\u52A0\u76DF\u5E97",reserved:"\u4E88\u7D04\u6E08\u307F",checked_in:"\u8CB8\u51FA\u4E2D",completed:"\u8FD4\u5374\u6E08\u307F",cancelled:"\u30AD\u30E3\u30F3\u30BB\u30EB"},z_={active:"green",available:"green",completed:"gray",rented:"blue",checked_in:"blue",maintenance:"orange",reserved:"orange",disabled:"red",cancelled:"gray",retired:"gray"},wr=i=>k_[i]??i,ri=i=>`<span class="badge badge-${z_[i]??(i==="headquarters"?"blue":"gray")}">${ac(wr(i))}</span>`,O=i=>ac(i).replace(/[^\u0000-\u007F]/gu,e=>`&#${e.codePointAt(0)};`),tc=i=>{let e=new Date(i),t=Ci()==="zh"?"zh-CN":"ja-JP";return Number.isNaN(e.getTime())?ac(i):new Intl.DateTimeFormat(t,{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(e)},yt=i=>({invalid_credentials:"\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002",forbidden:"\u3053\u306E\u64CD\u4F5C\u3092\u884C\u3046\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002",resource_conflict:"\u60C5\u5831\u304C\u91CD\u8907\u3057\u3066\u3044\u307E\u3059\u3002\u5E97\u8217\u30B3\u30FC\u30C9\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u540D\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u307E\u305F\u306F\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",in_use:"\u8ECA\u4E21\u307E\u305F\u306F\u4F5C\u696D\u4E88\u5B9A\u304C\u6B8B\u3063\u3066\u3044\u308B\u305F\u3081\u3001\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002",last_lot:"\u6700\u5F8C\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002",reservation_conflict:"\u8ECA\u4E21\u307E\u305F\u306F\u4E88\u7D04\u306E\u72B6\u614B\u304C\u5909\u66F4\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",invalid_reference:"\u9078\u629E\u3057\u305F\u30B9\u30BF\u30C3\u30D5\u3001\u5E97\u8217\u3001\u307E\u305F\u306F\u8ECA\u4E21\u304C\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002",invalid_request:"\u5165\u529B\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",internal_error:"\u30B7\u30B9\u30C6\u30E0\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u3057\u3070\u3089\u304F\u3057\u3066\u304B\u3089\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",site_mapping_conflict:"ERP\u62E0\u70B9\u304C\u5909\u66F4\u3055\u308C\u305F\u8ECA\u4E21\u304C\u3042\u308A\u307E\u3059\u3002\u99D0\u8ECA\u5834\u30C7\u30FC\u30BF\u306E\u62E0\u70B9\u5272\u5F53\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",unauthorized:"\u30ED\u30B0\u30A4\u30F3\u306E\u6709\u52B9\u671F\u9650\u304C\u5207\u308C\u307E\u3057\u305F\u3002\u518D\u5EA6\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002",account_unavailable:"\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u6240\u5C5E\u5E97\u8217\u304C\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002",employee_required:"\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",invalid_employee:"\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",account_not_found:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",vehicle_not_found:"\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",reservation_not_found:"\u4E88\u7D04\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",invalid_site:"\u5E97\u8217\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",invalid_role:"\u5F79\u5272\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",invalid_account:"\u30A2\u30AB\u30A6\u30F3\u30C8\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",unknown_permission:"\u9078\u629E\u3055\u308C\u305F\u6A29\u9650\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",site_required:"\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",invalid_reservation:"\u4E88\u7D04\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",not_found:"\u5BFE\u8C61\u306E\u60C5\u5831\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002"})[i]??"\u64CD\u4F5C\u3092\u5B8C\u4E86\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6642\u9593\u3092\u304A\u3044\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",nn=sessionStorage.getItem("guts_erp_token")||"",Qe=null,kn="ja",zn="dashboard",yr="list",br="",Sn="",sn=0,ai="",Bt=[],nc=[],yu=[],bu="",ic=[],Mr=null,Mu=[],Su=[],mr=!1,mu=0,fs=null,sc=0,tn=new Map,fn=null,gr=[],vt=null,To=null,oc=null,ps=null,Sr="#e34b4b",Yt=null;function Ci(){return Qe?.isAdmin?kn:"ja"}function Vn(i,e){i.innerHTML=pr(e,Ci())}async function V_(i){Qe?.isAdmin&&(kn=i,localStorage.setItem("guts_erp_language",kn),document.documentElement.lang=kn==="zh"?"zh-CN":"ja",lc(),await Bn())}async function Ne(i,e={}){let t=new Headers(e.headers);t.set("Accept","application/json"),nn&&t.set("Authorization",`Bearer ${nn}`),e.body&&t.set("Content-Type","application/json");let n=await fetch(i,{...e,headers:t});if(n.status===401&&nn)throw nn="",Qe=null,sessionStorage.removeItem("guts_erp_token"),Er(),new Error("unauthorized");let s=await n.json().catch(()=>({}));if(!n.ok)throw new Error(s.message||s.error||`HTTP ${n.status}`);return s}function rc(i){fetch("/api/v1/client-errors",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),keepalive:!0}).catch(e=>console.warn("Unable to send ERP client error report.",e))}function et(i,e=!1){let t=Et(".toast-area");t||(t=document.createElement("div"),t.className="toast-area",document.body.append(t));let n=document.createElement("div");n.className=`toast${e?" error":""}`,n.textContent=pr(i,Ci()),t.append(n),window.setTimeout(()=>n.remove(),3600)}function bo(i){return window.confirm(pr(i,Ci()))}window.addEventListener("error",i=>{let e=i.target;if(e instanceof Element&&["AUDIO","EMBED","IFRAME","IMG","LINK","OBJECT","SCRIPT","SOURCE","TRACK","VIDEO"].includes(e.tagName)){let t=e.getAttribute("src")||e.getAttribute("href")||e.getAttribute("data")||void 0;(e instanceof HTMLImageElement||e instanceof HTMLMediaElement)&&(t=e.currentSrc||t),rc({type:"resource",message:`Failed to load ${e.tagName.toLowerCase()} resource.`,...t?{source:t}:{},path:window.location.pathname});return}rc({type:"error",message:i.message||"Uncaught browser error.",...i.error instanceof Error&&i.error.stack?{stack:i.error.stack}:{},...i.filename?{source:i.filename}:{},path:window.location.pathname,...i.lineno?{line:i.lineno}:{},...i.colno?{column:i.colno}:{}})},!0);window.addEventListener("unhandledrejection",i=>{let e=i.reason;rc({type:"unhandledrejection",message:e instanceof Error?e.message:String(e),...e instanceof Error&&e.stack?{stack:e.stack}:{},path:window.location.pathname})});function rt(i){return!!Qe?.permissions.includes(i)}function H_(){let i=[{page:"dashboard",title:"\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",icon:"dashboard"},{page:"reservations",title:"\u4E88\u7D04\u30FB\u53D7\u4ED8",icon:"calendar",permission:"reservations:read"},{page:"sites",title:"\u5E97\u8217\u7BA1\u7406",icon:"site",permission:"sites:read"},{page:"vehicles",title:"\u8ECA\u4E21\u7BA1\u7406",icon:"vehicle",permission:"vehicles:read"}];return Qe?.isAdmin&&i.splice(3,0,{page:"accounts",title:"\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8",icon:"people"}),i.filter(e=>e.page==="vehicles"?rt("vehicles:read")||rt("parking:read"):!e.permission||rt(e.permission))}function Er(){document.documentElement.lang="ja",Ot.innerHTML=`<main class="login-screen login-simple">
    <form class="login-form" data-form="login">
      <input name="username" autocomplete="username" required placeholder="\u30A2\u30AB\u30A6\u30F3\u30C8" aria-label="\u30A2\u30AB\u30A6\u30F3\u30C8">
      <input name="password" type="password" autocomplete="current-password" required placeholder="\u30D1\u30B9\u30EF\u30FC\u30C9" aria-label="\u30D1\u30B9\u30EF\u30FC\u30C9">
      <button class="btn btn-primary" type="submit">\u30ED\u30B0\u30A4\u30F3</button>
    </form>
    <small class="app-version">\u30D0\u30FC\u30B8\u30E7\u30F3 ${O(xu)}</small>
  </main>`,Ot.onsubmit=async i=>{let e=i.target.closest('[data-form="login"]');if(!e)return;i.preventDefault();let t=Et('button[type="submit"]',e);t.disabled=!0,t.textContent="\u30ED\u30B0\u30A4\u30F3\u4E2D\u2026";let n=new FormData(e);try{nn=(await Ne("/api/v1/auth/login",{method:"POST",body:JSON.stringify({username:n.get("username"),password:n.get("password")})})).accessToken,sessionStorage.setItem("guts_erp_token",nn),await Eu()}catch(s){et(yt(s.message),!0),t.disabled=!1,t.textContent="\u30ED\u30B0\u30A4\u30F3"}}}async function Eu(){Qe=await Ne("/api/v1/auth/me"),kn=Qe.isAdmin&&localStorage.getItem("guts_erp_language")==="zh"?"zh":"ja",document.documentElement.lang=Ci()==="zh"?"zh-CN":"ja",lc(),await Bn(),wu()}async function wu(){if(!(!nn||!rt("parking:read")||fs))try{let{ticket:i}=await Ne("/api/v1/parking/ws-ticket",{method:"POST"});if(!nn||!rt("parking:read"))return;let e=location.protocol==="https:"?"wss:":"ws:",t=new WebSocket(`${e}//${location.host}/api/v1/parking/ws?ticket=${encodeURIComponent(i)}`);fs=t,t.onmessage=n=>{try{JSON.parse(String(n.data)).type==="parking:updated"&&zn==="vehicles"&&yr==="parking"&&qt()}catch{et("\u99D0\u8ECA\u5834\u306E\u66F4\u65B0\u901A\u77E5\u3092\u8AAD\u307F\u53D6\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002",!0)}},t.onclose=()=>{fs===t&&(fs=null),nn&&rt("parking:read")&&(window.clearTimeout(sc),sc=window.setTimeout(()=>{wu()},1500))},t.onerror=()=>t.close()}catch(i){i.message!=="unauthorized"&&et("\u99D0\u8ECA\u5834\u306E\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u63A5\u7D9A\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u63A5\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002",!0)}}function lc(){if(!Qe)return Er();let i=H_(),e=Qe.displayName.trim().slice(0,1)||"G";Vn(Ot,`<div class="shell">
    <aside class="sidebar${mr?" open":""}">
      <a class="brand" href="#" data-page="dashboard"><span class="brand-mark">G</span><span><strong>GUTS ERP</strong><small>\u30EC\u30F3\u30BF\u30AB\u30FC\u904B\u55B6\u7BA1\u7406</small></span></a>
      <div class="nav-label">\u30E1\u30CB\u30E5\u30FC</div><nav class="nav">${i.map(t=>`<button class="nav-button${zn===t.page?" active":""}" data-page="${t.page}">${Nt(t.icon)}<span>${t.title}</span></button>`).join("")}</nav>
      <div class="sidebar-bottom">
        <div class="site-chip"><small>\u6240\u5C5E\u5E97\u8217</small><strong>${O(Qe.site.name)} \xB7 ${O(Qe.site.code)}</strong></div>
        <div class="user-row"><span class="avatar">${O(e)}</span><span class="user-text"><strong>${O(Qe.displayName)}</strong><small>${O(Qe.username)}</small></span><button class="logout" title="\u30ED\u30B0\u30A2\u30A6\u30C8" data-action="logout">${Nt("logout")}</button></div>
      </div>
    </aside>
    <main class="main">
      <header class="topbar"><button class="mobile-menu" data-action="menu" aria-label="\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F">\u2630</button><div class="crumb">GUTS ERP&nbsp; / &nbsp;<b>${B_[zn]}</b></div><div class="top-actions">${Qe.isAdmin?`<div class="language-switch" role="group" aria-label="\u8A00\u8A9E\u5207\u66FF"><button class="btn btn-sm${kn==="ja"?" active":""}" data-language="ja" aria-pressed="${kn==="ja"}">\u65E5\u672C\u8A9E</button><button class="btn btn-sm${kn==="zh"?" active":""}" data-language="zh" aria-pressed="${kn==="zh"}">\u4E2D\u6587</button></div>`:""}<span class="live"><i></i> \u6B63\u5E38\u7A3C\u50CD\u4E2D</span><button class="btn btn-sm btn-quiet" data-action="refresh">${Nt("refresh")} \u66F4\u65B0</button><small class="app-version">v${O(xu)}</small></div></header>
      <section class="content" id="page-content"><div class="empty">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div></section>
    </main>
  </div>`),Ot.onclick=j_,Ot.onsubmit=K_,Ot.oninput=Q_,Ot.onchange=e0,Ot.onpointerdown=t=>{$_(t),q_(t)},Ot.onpointermove=t=>{X_(t),Y_(t)},Ot.onpointerup=t=>{vu(t),J_(t)},Ot.onpointercancel=t=>{vu(t),Z_(t)}}async function Bn(){try{switch(zn){case"dashboard":await G_();break;case"reservations":await Cu();break;case"sites":await Tu();break;case"accounts":await Ru();break;case"vehicles":await Ao();break}}catch(i){if(i.message!=="unauthorized"){let e=Et("#page-content");e&&Vn(e,`<div class="empty"><strong>\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F</strong>${O(yt(i.message))}<br><br><button class="btn" data-action="refresh">${Nt("refresh")} \u518D\u8A66\u884C</button></div>`)}}}function ms(i){let e=Et("#page-content");e&&Vn(e,i)}function gs(i,e,t=""){return`<div class="page-head"><div><h1>${i}</h1><p>${e}</p></div><div class="head-actions">${t}</div></div>`}function Mo(i,e,t,n,s=""){let r=Ci()==="zh"?"zh-CN":"ja-JP";return`<article class="stat-card"><div class="stat-top">${i}<span class="stat-icon ${s}">${Nt(n)}</span></div><div class="stat-number">${e.toLocaleString(r)}</div><div class="stat-foot">${t}</div></article>`}async function G_(){let[i,e,t]=await Promise.all([Ne("/api/v1/dashboard/stats"),rt("sites:read")?Ne("/api/v1/sites"):Promise.resolve({items:[]}),rt("reservations:read")?Ne("/api/v1/reservations?limit=6"):Promise.resolve({items:[]})]);Bt=e.items;let n=t.items.slice(0,5);ms(`${gs("\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",`${O(Qe.site.name)} \xB7 \u5E97\u8217\u306E\u904B\u55B6\u72B6\u6CC1`,Qe.site.type!=="headquarters"?`<button class="btn" data-action="employee-roster" data-site-id="${O(Qe.site.id)}">${Nt("team")} \u30B9\u30BF\u30C3\u30D5\u540D\u7C3F</button>`:"")}
    <div class="grid stat-grid">
      ${Mo("\u5E97\u8217\u6570",i.sites.total,`\u76F4\u55B6 ${i.sites.direct} \u5E97 \xB7 \u52A0\u76DF ${i.sites.franchise} \u5E97`,"sites")}
      ${Mo("\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8",i.accounts.total,`\u6709\u52B9 ${i.accounts.active} \u4EF6`,"team","green")}
      ${Mo("\u8ECA\u4E21\u53F0\u6570",i.vehicles.total,`\u8CB8\u51FA\u53EF\u80FD ${i.vehicles.available} \u53F0`,"fleet")}
      ${Mo("\u8CB8\u51FA\u4E2D",i.vehicles.rented,`\u6574\u5099\u4E2D ${i.vehicles.maintenance} \u53F0`,"calendar","orange")}
    </div>
    <div class="grid dashboard-grid">
      ${rt("reservations:read")?`<section class="panel"><div class="panel-head"><h2>\u6700\u8FD1\u306E\u4E88\u7D04\u30FB\u53D7\u4ED8</h2><button class="btn btn-sm btn-quiet" data-page="reservations">\u3059\u3079\u3066\u8868\u793A ${Nt("arrow")}</button></div>
        ${n.length?`<div class="site-list">${n.map(s=>`<div class="site-line"><div><div class="site-name">${O(s.guest_name)} <span class="secondary">${O(s.guest_phone)}</span></div><div class="site-meta">${tc(s.start_at)} &nbsp;\xB7&nbsp; ${O(s.make??"")} ${O(s.model??"")}</div></div><span class="site-code">${O(s.reservation_code)}</span>${ri(s.status)}</div>`).join("")}</div>`:'<div class="empty">\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093</div>'}
      </section>`:`<section class="panel"><div class="panel-head"><h2>\u8ECA\u4E21\u72B6\u6CC1</h2><small>\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u96C6\u8A08</small></div>${gu(i)}</section>`}
      <section class="panel"><div class="panel-head"><h2>${Qe.site.type==="headquarters"?"\u5E97\u8217\u4E00\u89A7":"\u6240\u5C5E\u5E97\u8217"}</h2><small>${Bt.length} \u5E97\u8217</small></div>
        ${Bt.length?`<div class="site-list">${Bt.slice(0,6).map(s=>`<div class="site-line"><div><div class="site-name">${O(s.name)}</div><div class="site-meta">${O(s.code)}</div></div>${ri(s.type)}${ri(s.status)}</div>`).join("")}</div>`:'<div class="empty">\u5E97\u8217\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093</div>'}
        ${Bt.length>6?`<button class="btn btn-sm" data-page="sites">\u3059\u3079\u3066\u306E\u5E97\u8217\u3092\u8868\u793A ${Nt("arrow")}</button>`:""}
      </section>
      ${rt("reservations:read")?`<section class="panel"><div class="panel-head"><h2>\u8ECA\u4E21\u72B6\u6CC1</h2><small>\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u96C6\u8A08</small></div>${gu(i)}</section>`:""}
    </div>`)}function gu(i){let e=Math.max(i.vehicles.total,1);return`<div class="fleet-breakdown">${[["\u8CB8\u51FA\u53EF\u80FD",i.vehicles.available,"green"],["\u8CB8\u51FA\u4E2D",i.vehicles.rented,""],["\u6574\u5099\u4E2D",i.vehicles.maintenance,"orange"]].map(([n,s,r])=>`<div class="fleet-row"><span>${n}</span><div class="fleet-track"><div class="fleet-fill ${r}" style="width:${Math.min(100,s/e*100)}%"></div></div><b>${s}</b></div>`).join("")}</div>`}function Ro(i,e=""){return`<div class="toolbar"><label class="search">${Nt("search")}<input data-search placeholder="${i}" value="${O(Sn)}"></label>${e}</div>`}function Co(i,e,t){return`<div class="table-wrap">${e?`<table class="table"><thead><tr>${i.map(n=>`<th>${n}</th>`).join("")}</tr></thead><tbody>${e}</tbody></table>`:`<div class="empty">${t}</div>`}</div>`}function cc(i,e=50){return`<div class="pagination"><span>${i?sn+1:0}\uFF5E${sn+i}\u4EF6\u3092\u8868\u793A</span><div><button class="btn btn-sm" data-action="prev" ${sn<=0?"disabled":""}>\u524D\u3078</button><button class="btn btn-sm" data-action="next" ${i<e?"disabled":""}>\u6B21\u3078</button></div></div>`}async function Tu(){let i=await Ne("/api/v1/sites");Bt=i.items;let t=i.items.filter(n=>`${n.name} ${n.code} ${wr(n.type)}`.toLowerCase().includes(Sn.toLowerCase())).map(n=>`<tr><td class="primary-cell" data-label="\u5E97\u8217">${O(n.name)}<span class="secondary">${O(n.code)}</span></td><td data-label="\u7A2E\u5225">${ri(n.type)}</td><td data-label="\u72B6\u614B">${ri(n.status)}</td><td data-label="\u64CD\u4F5C">${rt("sites:write")?'<span class="secondary">\u2014</span>':""}</td></tr>`).join("");ms(`${gs("\u5E97\u8217\u7BA1\u7406","\u672C\u90E8\u30FB\u76F4\u55B6\u5E97\u30FB\u52A0\u76DF\u5E97\u3092\u7BA1\u7406",rt("sites:write")&&Qe.site.type==="headquarters"?`<button class="btn btn-primary" data-modal="site">${Nt("plus")} \u5E97\u8217\u3092\u8FFD\u52A0</button>`:"")}
    ${Ro("\u5E97\u8217\u540D\u307E\u305F\u306F\u5E97\u8217\u30B3\u30FC\u30C9\u3067\u691C\u7D22")}
    ${Co(["\u5E97\u8217\u540D / \u30B3\u30FC\u30C9","\u5E97\u8217\u7A2E\u5225","\u72B6\u614B","\u64CD\u4F5C"],t,"\u5E97\u8217\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093")}`)}async function Au(){if(Bt.length&&nc.length)return;let[i,e]=await Promise.all([Ne("/api/v1/sites"),Ne("/api/v1/permissions")]);Bt=i.items,nc=e.items}async function Ru(){await Au();let i=new URLSearchParams({limit:"50",offset:String(sn)});Sn&&i.set("search",Sn);let e=await Ne(`/api/v1/accounts?${i}`);Mu=e.items;let t=e.items.map(n=>`<tr>
    <td class="primary-cell" data-label="\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8">${O(n.site_name)}<span class="secondary">${O(n.username)}</span></td>
    <td data-label="\u5E97\u8217\u30B3\u30FC\u30C9">${O(n.site_code)}</td>
    <td data-label="\u72B6\u614B">${ri(n.status)}</td>
    <td data-label="\u64CD\u4F5C"><button class="btn btn-sm" data-action="edit-account" data-id="${O(n.id)}">\u7DE8\u96C6</button></td>
  </tr>`).join("");ms(`${gs("\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8","\u5E97\u8217\u3054\u3068\u306E\u30ED\u30B0\u30A4\u30F3\u3068\u5229\u7528\u6A29\u9650\u3092\u7BA1\u7406",`<button class="btn btn-primary" data-modal="account">${Nt("plus")} \u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0</button>`)}
    ${Ro("\u5E97\u8217\u540D\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u540D\u3067\u691C\u7D22")}
    ${Co(["\u5E97\u8217 / \u30A2\u30AB\u30A6\u30F3\u30C8","\u5E97\u8217\u30B3\u30FC\u30C9","\u72B6\u614B","\u64CD\u4F5C"],t,"\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u3042\u308A\u307E\u305B\u3093")}
    ${cc(e.items.length)}`)}function So(i="",e=!1){return Bt.filter(t=>e||t.type!=="headquarters").map(t=>`<option value="${O(t.id)}" ${String(t.id)===i?"selected":""}>${O(t.name)} \xB7 ${O(t.code)}</option>`).join("")}function _u(i=[]){let e={"sites:read":"\u5E97\u8217\u60C5\u5831\u306E\u95B2\u89A7","sites:write":"\u5E97\u8217\u60C5\u5831\u306E\u7BA1\u7406","vehicles:read":"\u8ECA\u4E21\u60C5\u5831\u306E\u95B2\u89A7","vehicles:write":"\u8ECA\u4E21\u60C5\u5831\u306E\u7BA1\u7406","parking:read":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u95B2\u89A7","parking:write":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u64CD\u4F5C","parking:admin":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u8A2D\u5B9A\u7BA1\u7406","reservations:read":"\u4E88\u7D04\u30FB\u53D7\u4ED8\u60C5\u5831\u306E\u95B2\u89A7","reservations:write":"\u4E88\u7D04\u306E\u4F5C\u6210\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D"},t={"sites:read":"\u5E97\u8217\u60C5\u5831\u306E\u95B2\u89A7","sites:write":"\u5E97\u8217\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406","vehicles:read":"\u8ECA\u4E21\u60C5\u5831\u306E\u95B2\u89A7","vehicles:write":"\u8ECA\u4E21\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406","parking:read":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u95B2\u89A7","parking:write":"\u8ECA\u4E21\u4F4D\u7F6E\u30FB\u696D\u52D9\u72B6\u6CC1\u306E\u66F4\u65B0","parking:admin":"\u99D0\u8ECA\u5834\u30FB\u30AF\u30E9\u30B9\u30FB\u72B6\u614B\u306A\u3069\u306E\u8A2D\u5B9A\u7BA1\u7406","reservations:read":"\u4E88\u7D04\u60C5\u5831\u3068\u53D7\u4ED8\u72B6\u6CC1\u306E\u95B2\u89A7","reservations:write":"\u4E88\u7D04\u306E\u4F5C\u6210\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D"};return`<div class="check-grid">${nc.filter(({permission_key:n})=>n!=="accounts:write").map(n=>`<label class="check-item"><input type="checkbox" name="permissions" value="${O(n.permission_key)}" ${i.includes(n.permission_key)?"checked":""}><span>${e[n.permission_key]??"\u305D\u306E\u4ED6\u306E\u6A29\u9650"}<small>${t[n.permission_key]??"\u6A29\u9650\u306E\u8AAC\u660E\u306F\u3042\u308A\u307E\u305B\u3093"}</small></span></label>`).join("")}</div>`}async function Ao(){if(rt("vehicles:read")||(yr="parking"),yr==="parking"){await qt();return}await vr();let i=new URLSearchParams({limit:"50",offset:String(sn)});ai&&i.set("status",ai),Sn&&i.set("search",Sn);let e=await Ne(`/api/v1/vehicles?${i}`);Su=e.items;let t=e.items.map(r=>`<tr>
    <td class="primary-cell" data-label="\u8ECA\u4E21">${O(r.registration_number)}<span class="secondary">${O(r.make)} ${O(r.model)} ${r.model_year?`\u30FB${r.model_year}`:""}</span></td>
    <td data-label="\u5E97\u8217">${O(Bt.find(a=>a.id===r.site_id)?.name??r.site_id)}</td>
    <td data-label="\u72B6\u614B">${ri(r.status)}</td>
    <td data-label="\u8ECA\u4E21ID"><span class="secondary">${O(r.id.slice(0,8))}\u2026</span></td>
    <td data-label="\u64CD\u4F5C">${rt("vehicles:write")?`<button class="btn btn-sm" data-action="edit-vehicle" data-id="${O(r.id)}">\u7DE8\u96C6</button>`:""}</td>
  </tr>`).join(""),n=`<select class="filter-select" data-status><option value="">\u3059\u3079\u3066\u306E\u72B6\u614B</option>${["available","rented","maintenance","retired"].map(r=>`<option value="${r}" ${ai===r?"selected":""}>${wr(r)}</option>`).join("")}</select>`,s=[...rt("parking:read")?['<button class="btn" data-action="parking-board">\u99D0\u8ECA\u5834\u914D\u7F6E</button>']:[],...rt("vehicles:write")&&Qe.site.type==="headquarters"?['<button class="btn" data-action="sync-parking">ERP\u8ECA\u4E21\u3092\u30DC\u30FC\u30C9\u3078\u53CD\u6620</button>',`<button class="btn btn-primary" data-modal="vehicle">${Nt("plus")} \u8ECA\u4E21\u3092\u8FFD\u52A0</button>`]:[]].join("");ms(`${gs("\u8ECA\u4E21\u7BA1\u7406","\u8ECA\u4E21\u60C5\u5831\u3068\u7A3C\u50CD\u72B6\u6CC1\u3092\u7BA1\u7406",s)}
    ${Ro("\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u30E1\u30FC\u30AB\u30FC\u3001\u8ECA\u7A2E\u3067\u691C\u7D22",n)}
    ${Co(["\u8ECA\u4E21 / \u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8","\u6240\u5C5E\u5E97\u8217","\u72B6\u614B","\u56FA\u5B9AID","\u64CD\u4F5C"],t,"\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093")}
    ${cc(e.items.length)}`)}async function qt(){let i=await Ne("/api/v1/parking/bootstrap");fn=i;let e=rt("parking:write");for(let d of i.vehicles)tn.has(d.id)||tn.set(d.id,d.inspection_marks);let t=d=>e?`<form class="parking-vehicle-controls" data-form="parking-vehicle" data-id="${O(d.id)}">
        <label>\u4F4D\u7F6E X <input name="position_x" type="number" min="0" max="1" step="0.01" value="${O(d.position_x)}" required></label>
        <label>\u4F4D\u7F6E Y <input name="position_y" type="number" min="0" max="1" step="0.01" value="${O(d.position_y)}" required></label>
        <label>\u99D0\u8ECA\u533A\u753B <select name="parking_lot_id"><option value="">\u672A\u914D\u7F6E</option>${i.parking_lots.map(_=>`<option value="${O(_.id)}" ${d.parking_lot_id===_.id?"selected":""}>${O(_.name)}</option>`).join("")}</select></label>
        <fieldset><legend>\u696D\u52D9\u72B6\u614B</legend>${i.statuses.map(_=>`<label><input type="checkbox" name="status_ids" value="${O(_.id)}" ${d.status_ids.includes(_.id)?"checked":""}>${O(_.icon)} ${O(_.name)}</label>`).join("")}
          <label><input type="checkbox" name="unwashed" ${d.unwashed?"checked":""}>\u6D17\u8ECA\u5F85\u3061</label>
          <label><input type="checkbox" name="no_fuel" ${d.no_fuel?"checked":""}>\u7D66\u6CB9\u5F85\u3061</label>
          <label><input type="checkbox" name="needs_repair" ${d.needs_repair?"checked":""}>\u4FEE\u7406\u5F85\u3061</label>
        </fieldset>
        <fieldset><legend>\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3</legend>${i.vehicle_options.map(_=>`<label><input type="checkbox" name="options" value="${O(_.name)}" ${d.options.includes(_.name)?"checked":""}>${O(_.name)}</label>`).join("")}</fieldset>
        ${i.assessment_fields.map(_=>{let g=d.assessment_values[String(_.id)]??"",f=_.field_type==="rating"?`<select data-assessment-id="${O(_.id)}"><option value="">\u672A\u8A55\u4FA1</option>${[1,2,3,4,5].map(w=>`<option value="${w}" ${g===String(w)?"selected":""}>${w}</option>`).join("")}</select>`:_.field_type==="checkbox"?`<input type="checkbox" data-assessment-id="${O(_.id)}" ${g==="true"?"checked":""}>`:`<input type="${_.field_type==="number"?"number":"text"}" ${_.field_type==="number"?'step="1"':""} maxlength="500" data-assessment-id="${O(_.id)}" value="${O(g)}">`;return`<label class="assessment-input">${O(_.name)}${_.suffix?` (${O(_.suffix)})`:""}${f}</label>`}).join("")}
        ${i.damage_types.length?`<fieldset class="damage-field"><legend>\u640D\u50B7\u30DE\u30FC\u30AB\u30FC</legend>
          <button class="btn btn-sm" type="button" data-action="parking-inspect3d" data-id="${O(d.id)}">3D\u8ECA\u4E21\u691C\u67FB\u30FB\u640D\u50B7\u3092\u7DE8\u96C6</button>
          <div class="damage-map read-only" data-id="${O(d.id)}" aria-label="\u640D\u50B7\u30DE\u30FC\u30AB\u30FC\u306E\u30D7\u30EC\u30D3\u30E5\u30FC">
            <span class="damage-map-hint">3D\u691C\u67FB\u3067\u640D\u50B7\u4F4D\u7F6E\u3092\u7DE8\u96C6</span>
            ${(tn.get(d.id)??[]).map(_=>`<button type="button" class="damage-marker" data-action="parking-damage-remove" data-vehicle-id="${O(d.id)}" data-mark-id="${O(_.id)}" style="left:${_.x*100}%;top:${_.y*100}%;background:${O(_.color??i.damage_types.find(g=>g.id===_.damage_type_id)?.color??"#e34b4b")}">${O(_.icon??"\xD7")}</button>`).join("")}
          </div>
        </fieldset>`:""}
        <label>\u30E1\u30E2 <textarea name="notes" maxlength="2000">${O(d.notes??"")}</textarea></label>
        <button class="btn btn-sm btn-primary" type="submit">\u914D\u7F6E\u30FB\u72B6\u614B\u3092\u4FDD\u5B58</button>
      </form>`:`<div class="parking-statuses">${i.statuses.filter(_=>d.status_ids.includes(_.id)).map(_=>`${O(_.icon)} ${O(_.name)}`).join("\u3001")||"\u72B6\u614B\u306A\u3057"}
      ${d.inspection_marks.length?`<div class="damage-map read-only">${d.inspection_marks.map(_=>`<span class="damage-marker" style="left:${_.x*100}%;top:${_.y*100}%;background:${O(_.color??"#e34b4b")}">${O(_.icon??"\xD7")}</span>`).join("")}</div>`:""}</div>`,n=i.parking_lots.map(d=>{let _=i.vehicles.filter(w=>w.parking_lot_id===d.id),g=_.map(w=>`<article class="parking-map-vehicle"
      style="left:${w.position_x*100}%;top:${w.position_y*100}%">
      <button class="parking-drag-handle" type="button" data-parking-drag="${O(w.id)}"
        aria-label="${O(w.plate)}\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5">\u283F ${O(w.plate)}</button>
      <details><summary>\u8A73\u7D30\u30FB\u72B6\u614B</summary>${t(w)}</details>
    </article>`).join(""),f=d.markings.map(w=>`<line x1="${w.x1*1e3}" y1="${w.y1*1e3}" x2="${w.x2*1e3}" y2="${w.y2*1e3}" stroke="${O(w.color)}" stroke-width="7" stroke-linecap="round"/>`).join("");return`<section class="card parking-lot"><header><div><h2>${O(d.name)}</h2><span>${d.capacity===null?_.length:`${_.length}/${d.capacity}`} \u53F0 \xB7 ${d.is_active?"\u904B\u7528\u4E2D":"\u505C\u6B62\u4E2D"}</span></div>
      ${rt("parking:admin")?`<div class="parking-admin-actions">
        <button class="btn btn-sm" data-action="parking-lot-order" data-id="${O(d.id)}" data-direction="up" aria-label="\u4E0A\u3078">\u2191</button>
        <button class="btn btn-sm" data-action="parking-lot-order" data-id="${O(d.id)}" data-direction="down" aria-label="\u4E0B\u3078">\u2193</button>
        <button class="btn btn-sm" data-action="parking-lot-settings" data-id="${O(d.id)}">\u30EC\u30A4\u30A2\u30A6\u30C8</button>
        <button class="btn btn-sm" data-action="parking-marking-toggle" data-id="${O(d.id)}">${ps===d.id?"\u7DDA\u63CF\u753B\u3092\u7D42\u4E86":"\u7DDA\u3092\u63CF\u304F"}</button>
        <button class="btn btn-sm" data-action="parking-lot-toggle" data-id="${O(d.id)}" data-active="${String(!d.is_active)}">${d.is_active?"\u505C\u6B62":"\u518D\u958B"}</button>
        <button class="btn btn-sm btn-quiet" data-action="parking-lot-delete" data-id="${O(d.id)}">\u524A\u9664</button>
      </div>`:""}</header>
      <div class="parking-map${d.is_active?"":" inactive"}" data-parking-map data-lot-id="${O(d.id)}"
        style="height:${O(Math.max(160,Math.min(600,d.area_height||240)))}px;width:${O(Math.max(30,Math.min(100,d.area_width||100)))}%">
        <svg class="parking-map-markings${ps===d.id?" editable":""}" data-marking-svg
          data-lot-id="${O(d.id)}" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-label="\u99D0\u8ECA\u533A\u753B\u306E\u30E9\u30A4\u30F3">${f}</svg>
        ${g||'<span class="parking-map-empty">\u3053\u3053\u3078\u8ECA\u4E21\u3092\u30C9\u30E9\u30C3\u30B0</span>'}
      </div>
      ${ps===d.id?`<div class="parking-marking-tools"><label>\u7DDA\u306E\u8272 <input type="color" data-marking-color value="${O(Sr)}"></label>
        <button class="btn btn-sm" data-action="parking-marking-undo" data-id="${O(d.id)}" ${d.markings.length?"":"disabled"}>\u6700\u5F8C\u306E\u7DDA\u3092\u53D6\u308A\u6D88\u3059</button>
        <span>\u56F3\u9762\u5185\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u533A\u753B\u7DDA\u3092\u63CF\u304D\u307E\u3059\u3002\u6307\u3092\u96E2\u3059\u3068\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002</span></div>`:""}
      ${rt("parking:write")?'<p class="parking-map-hint">\u8ECA\u4E21\u306E\u283F\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u914D\u7F6E\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u5909\u66F4\u306F\u81EA\u52D5\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002</p>':""}
    </section>`}).join(""),s=i.vehicles.filter(d=>d.parking_lot_id===null),r=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,16),a=i.jobs.map(d=>{let _=i.vehicles.find(f=>f.id===d.vehicle_id),g=i.parking_lots.find(f=>f.id===d.destination_lot_id);return`<article class="parking-job${d.completed?" completed":""}">
      <div><strong>${O(_?.plate??`#${d.vehicle_id}`)}</strong>
        <span class="secondary">${O(g?.name??`#${d.destination_lot_id}`)} \xB7 ${O(d.scheduled_at)}</span></div>
      <div>${rt("parking:write")?`<button class="btn btn-sm" data-action="parking-job-toggle" data-id="${O(d.id)}" data-completed="${String(!d.completed)}">${d.completed?"\u518D\u958B":"\u5B8C\u4E86"}</button>
        <button class="btn btn-sm btn-quiet" data-action="parking-job-delete" data-id="${O(d.id)}">\u524A\u9664</button>`:d.completed?"\u5B8C\u4E86":"\u4E88\u5B9A"}</div>
    </article>`}).join(""),o=`<section class="card parking-jobs"><header><h2>\u79FB\u52D5\u30FB\u4F5C\u696D\u4E88\u5B9A</h2><span>${i.jobs.filter(d=>!d.completed).length} \u4EF6</span></header>
    ${e?`<form class="parking-job-form" data-form="parking-job">
      <label>\u8ECA\u4E21 <select name="vehicle_id" required><option value="">\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${i.vehicles.map(d=>`<option value="${O(d.id)}">${O(d.plate)}</option>`).join("")}</select></label>
      <label>\u9001\u308A\u5148 <select name="destination_lot_id" required><option value="">\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${i.parking_lots.map(d=>`<option value="${O(d.id)}">${O(d.name)}</option>`).join("")}</select></label>
      <label>\u4E88\u5B9A\u65E5\u6642 <input name="scheduled_at" type="datetime-local" value="${O(r)}" required></label>
      <button class="btn btn-sm btn-primary" type="submit">\u4E88\u5B9A\u3092\u8FFD\u52A0</button>
    </form>`:""}
    ${a||'<p class="empty">\u4E88\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</section>`,l=rt("parking:admin")?`<form class="card parking-lot-create" data-form="parking-lot">
    <label>\u99D0\u8ECA\u30A8\u30EA\u30A2\u540D <input name="name" maxlength="40" required></label>
    <label>Google Maps \u6848\u5185URL <input name="navigation_url" type="url" maxlength="2000" placeholder="https://maps.google.com/\u2026"></label>
    <button class="btn btn-sm btn-primary" type="submit">\u30A8\u30EA\u30A2\u3092\u8FFD\u52A0</button>
  </form>`:"",c=(d,_)=>`<select name="${d}" required>
    ${i.parking_lots.map(g=>`<option value="${O(g.id)}" ${_===g.id?"selected":""}>${O(g.name)}</option>`).join("")}
  </select>`,h=(d,_)=>`<select name="${d}" required>
    ${i.stores.map(g=>`<option value="${O(g.id)}" ${_===g.id?"selected":""}>${O(g.name)}</option>`).join("")}
  </select>`,u=(d,_,g,f,w,S,y)=>`<form class="parking-distance-form" data-form="${d}">
      ${d==="lot-distance"?c(_,f):h(_,f)}
      ${c(g,w)}
      <label>\u5206 <input name="minutes" type="number" min="0" max="100000" step="any" value="${S??""}"></label>
      <label>km <input name="km" type="number" min="0" max="100000" step="any" value="${y??""}"></label>
      <button class="btn btn-sm" type="submit">${S===void 0?"\u8FFD\u52A0":"\u4FDD\u5B58"}</button>
    </form>`,p=rt("parking:admin")?`<section class="card parking-catalogs">
    <div><h2>\u8ECA\u4E21\u30AF\u30E9\u30B9</h2><form data-form="parking-class">
      <input name="name" maxlength="40" placeholder="\u30AF\u30E9\u30B9\u540D" required><input name="color" type="color" value="#4f86f7">
      <button class="btn btn-sm" type="submit">\u8FFD\u52A0</button>
    </form>${i.vehicle_classes.map(d=>`<div class="parking-catalog-row"><span><i style="background:${O(d.color)}"></i>${O(d.name)}</span><button class="btn btn-sm btn-quiet" data-action="parking-class-delete" data-id="${O(d.id)}">\u524A\u9664</button></div>`).join("")}</div>
    <div><h2>\u696D\u52D9\u72B6\u614B</h2><form data-form="parking-status">
      <input name="name" maxlength="40" placeholder="\u72B6\u614B\u540D" required><input name="icon" maxlength="8" placeholder="\u{1F514}">
      <button class="btn btn-sm" type="submit">\u8FFD\u52A0</button>
    </form>${i.statuses.map(d=>`<div class="parking-catalog-row"><span>${O(d.icon)} ${O(d.name)}</span><button class="btn btn-sm btn-quiet" data-action="parking-status-delete" data-id="${O(d.id)}">\u524A\u9664</button></div>`).join("")}</div>
    <div><h2>\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3</h2><form data-form="parking-option">
      <input name="name" maxlength="40" placeholder="\u30AA\u30D7\u30B7\u30E7\u30F3\u540D" required><button class="btn btn-sm" type="submit">\u8FFD\u52A0</button>
    </form>${i.vehicle_options.map(d=>`<div class="parking-catalog-row"><span>${O(d.name)}</span><button class="btn btn-sm btn-quiet" data-action="parking-option-delete" data-id="${O(d.id)}">\u524A\u9664</button></div>`).join("")}</div>
    <div><h2>\u30D5\u30E9\u30F3\u30C1\u30E3\u30A4\u30BA\u5E97\u8217 / \u62E0\u70B9</h2><p class="secondary">\u65E7Parking\u306E\u5E97\u8217\u306F\u73FE\u5728\u306EERP\u62E0\u70B9\u306B\u5C5E\u3059\u308B\u5E97\u8217\u30C7\u30FC\u30BF\u3078\u79FB\u884C\u3057\u307E\u3059\u3002\u30D5\u30E9\u30F3\u30C1\u30E3\u30A4\u30BA\u62E0\u70B9\u3068\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u306FERP\u306E\u300C\u5E97\u8217\u300D\u300C\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u300D\u304B\u3089\u7BA1\u7406\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>
      <form data-form="parking-store"><input name="name" maxlength="120" placeholder="\u5E97\u8217\u540D" required><button class="btn btn-sm" type="submit">\u8FFD\u52A0</button></form>
      ${i.stores.map(d=>`<div class="parking-catalog-row"><span>${O(d.name)}</span><button class="btn btn-sm btn-quiet" data-action="parking-store-delete" data-id="${O(d.id)}">\u524A\u9664</button></div>`).join("")||'<p class="empty">\u5E97\u8217\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</div>
    <div><h2>\u62E0\u70B9\u9593\u8DDD\u96E2</h2><p class="secondary">\u5206\u3092\u7A7A\u6B04\u306B\u3059\u308B\u3068\u65E2\u5B58\u306E\u8DDD\u96E2\u3092\u524A\u9664\u3057\u307E\u3059\u3002</p>
      ${u("lot-distance","from_lot_id","to_lot_id")}
      ${i.lot_distances.map(d=>`<div class="parking-distance-row">${u("lot-distance","from_lot_id","to_lot_id",d.from_lot_id,d.to_lot_id,d.minutes,d.km)}</div>`).join("")||'<p class="empty">\u8DDD\u96E2\u8A2D\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</div>
    <div><h2>\u5E97\u8217\u304B\u3089\u99D0\u8ECA\u5834\u307E\u3067</h2><p class="secondary">\u5E97\u8217\u3068\u99D0\u8ECA\u5834\u306E\u6240\u8981\u6642\u9593\u30FB\u8DDD\u96E2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002</p>
      ${i.stores.length&&i.parking_lots.length?u("store-distance","store_id","lot_id"):'<p class="empty">\u5E97\u8217\u3068\u99D0\u8ECA\u5834\u3092\u5148\u306B\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044</p>'}
      ${i.store_lot_distances.map(d=>`<div class="parking-distance-row">${u("store-distance","store_id","lot_id",d.store_id,d.lot_id,d.minutes,d.km)}</div>`).join("")||'<p class="empty">\u8DDD\u96E2\u8A2D\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</div>
    <div><h2>\u67FB\u5B9A\u9805\u76EE</h2>${i.assessment_fields.map(d=>`<form class="parking-config-form" data-form="parking-assessment" data-id="${O(d.id)}">
      <input name="name" maxlength="120" value="${O(d.name)}" required>
      <select name="field_type">${["rating","checkbox","number","text"].map(_=>`<option value="${_}" ${d.field_type===_?"selected":""}>${_}</option>`).join("")}</select>
      <input name="suffix" maxlength="120" value="${O(d.suffix)}" placeholder="\u5358\u4F4D">
      ${d.built_in_key?'<span class="secondary">\u6A19\u6E96</span>':'<button class="btn btn-sm btn-quiet" type="button" data-action="parking-assessment-delete" data-id="'+O(d.id)+'">\u524A\u9664</button>'}
      <button class="btn btn-sm" type="submit">\u4FDD\u5B58</button></form>`).join("")}
      <form class="parking-config-form" data-form="parking-assessment"><input name="name" maxlength="120" placeholder="\u67FB\u5B9A\u9805\u76EE\u540D" required>
        <select name="field_type"><option value="rating">rating</option><option value="checkbox">checkbox</option><option value="number">number</option><option value="text">text</option></select>
        <input name="suffix" maxlength="120" placeholder="\u5358\u4F4D"><button class="btn btn-sm" type="submit">\u8FFD\u52A0</button></form></div>
    <div><h2>\u640D\u50B7\u30DE\u30FC\u30AB\u30FC</h2>${i.damage_types.map(d=>`<form class="parking-config-form" data-form="parking-damage" data-id="${O(d.id)}">
      <input name="name" maxlength="120" value="${O(d.name)}" required><input name="icon" maxlength="40" value="${O(d.icon)}">
      <input name="color" type="color" value="${O(d.color)}"><button class="btn btn-sm" type="submit">\u4FDD\u5B58</button>
      <button class="btn btn-sm btn-quiet" type="button" data-action="parking-damage-delete" data-id="${O(d.id)}">\u524A\u9664</button></form>`).join("")}
      <form class="parking-config-form" data-form="parking-damage"><input name="name" maxlength="120" placeholder="\u640D\u50B7\u540D" required>
        <input name="icon" maxlength="40" placeholder="\u26A0\uFE0F"><input name="color" type="color" value="#e34b4b">
        <button class="btn btn-sm" type="submit">\u8FFD\u52A0</button></form></div>
  </section>`:"",m=`${gr.length?'<button class="btn btn-sm" data-action="parking-move-undo">\u914D\u7F6E\u3092\u53D6\u308A\u6D88\u3059</button>':""}
    ${rt("vehicles:read")?'<button class="btn btn-sm" data-action="vehicle-list">\u8ECA\u4E21\u4E00\u89A7\u3078\u623B\u308B</button>':""}`;ms(`${gs("\u99D0\u8ECA\u5834\u914D\u7F6E","\u8ECA\u4E21\u306E\u914D\u7F6E\u30FB\u696D\u52D9\u72B6\u614B\u3092\u7BA1\u7406",m)}
    ${e?"":'<div class="section-note">\u95B2\u89A7\u5C02\u7528\u3067\u3059\u3002\u914D\u7F6E\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u99D0\u8ECA\u5834\u66F8\u304D\u8FBC\u307F\u6A29\u9650\u304C\u5FC5\u8981\u3067\u3059\u3002</div>'}
    ${l}<div class="parking-board">${n}${s.length?`<section class="card parking-lot"><header><h2>\u672A\u914D\u7F6E</h2><span>${s.length} \u53F0</span></header>
      <div class="parking-map unassigned" data-parking-map data-lot-id="" style="height:auto;min-height:100px">
        ${s.map(d=>`<article class="parking-map-vehicle unassigned-vehicle">
          <button class="parking-drag-handle" type="button" data-parking-drag="${O(d.id)}"
            aria-label="${O(d.plate)}\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5">\u283F ${O(d.plate)}</button>
          <details><summary>\u8A73\u7D30\u30FB\u72B6\u614B</summary>${t(d)}</details>
        </article>`).join("")}
      </div></section>`:""}
    </div>${o}${p}`)}async function Cu(){let i=new URLSearchParams({limit:"50",offset:String(sn)});ai&&i.set("status",ai),Sn&&i.set("search",Sn);let e=await Ne(`/api/v1/reservations?${i}`);ic=e.items;let t=e.items.map(r=>{let a=r.status==="reserved"&&rt("reservations:write")?`<button class="btn btn-sm btn-primary" data-action="reservation-checkin" data-id="${O(r.id)}">\u8CB8\u51FA\u624B\u7D9A\u304D</button> <button class="btn btn-sm btn-quiet" data-action="reservation-cancel" data-id="${O(r.id)}">\u30AD\u30E3\u30F3\u30BB\u30EB</button>`:r.status==="checked_in"&&rt("reservations:write")?`<button class="btn btn-sm btn-primary" data-action="reservation-return" data-id="${O(r.id)}">\u8FD4\u5374\u624B\u7D9A\u304D</button>`:'<span class="secondary">\u2014</span>';return`<tr>
      <td class="primary-cell" data-label="\u4E88\u7D04\u756A\u53F7">${O(r.reservation_code)}<span class="secondary">${O(r.site_name)}</span></td>
      <td data-label="\u304A\u5BA2\u69D8">${O(r.guest_name)}<span class="secondary">${O(r.guest_phone)}</span></td>
      <td data-label="\u5229\u7528\u671F\u9593">${tc(r.start_at)}<span class="secondary">\uFF5E ${tc(r.end_at)}</span></td>
      <td data-label="\u8ECA\u4E21">${O(r.registration_number??"\u672A\u5272\u308A\u5F53\u3066")}<span class="secondary">${O(r.make??"")} ${O(r.model??"")}</span></td>
      <td data-label="\u72B6\u614B">${ri(r.status)}${r.checked_out_by_name?`<span class="secondary">\u8CB8\u51FA\u62C5\u5F53\uFF1A${O(r.checked_out_by_name)}</span>`:""}${r.returned_by_name?`<span class="secondary">\u8FD4\u5374\u62C5\u5F53\uFF1A${O(r.returned_by_name)}</span>`:""}</td>
      <td data-label="\u53D7\u4ED8\u64CD\u4F5C">${a}</td>
    </tr>`}).join(""),n=`<select class="filter-select" data-status><option value="">\u3059\u3079\u3066\u306E\u4E88\u7D04</option>${["reserved","checked_in","completed","cancelled"].map(r=>`<option value="${r}" ${ai===r?"selected":""}>${wr(r)}</option>`).join("")}</select>`,s=[Qe.site.type!=="headquarters"?`<button class="btn" data-action="employee-roster" data-site-id="${O(Qe.site.id)}">${Nt("team")} \u30B9\u30BF\u30C3\u30D5\u540D\u7C3F</button>`:"",rt("reservations:write")?`<button class="btn btn-primary" data-modal="reservation">${Nt("plus")} \u4E88\u7D04\u3092\u4F5C\u6210</button>`:""].join("");ms(`${gs("\u4E88\u7D04\u30FB\u53D7\u4ED8","\u8CB8\u51FA\u30FB\u8FD4\u5374\u6642\u306B\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u8A18\u9332\u3057\u307E\u3059",s)}
    ${Ro("\u4E88\u7D04\u756A\u53F7\u3001\u304A\u5BA2\u69D8\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3067\u691C\u7D22",n)}
    ${Co(["\u4E88\u7D04\u756A\u53F7 / \u5E97\u8217","\u304A\u5BA2\u69D8\u60C5\u5831","\u5229\u7528\u671F\u9593","\u8ECA\u4E21","\u72B6\u614B","\u64CD\u4F5C"],t,"\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u6765\u5E97\u6642\u306B\u53D7\u4ED8\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044")}
    ${cc(e.items.length)}`)}async function _r(i){try{let e=Qe?.site.id===i?Qe.site:(await vr(),Bt.find(s=>s.id===i));if(!e||e.type==="headquarters")throw new Error("invalid_site");let t=await Ne(`/api/v1/employees?${new URLSearchParams({siteId:i,includeDisabled:"true"})}`);yu=t.items,bu=i,br="employees";let n=document.createElement("div");n.className="overlay",Vn(n,`<section class="modal employee-modal" role="dialog" aria-modal="true" aria-labelledby="employee-modal-title">
      <header class="modal-head"><div><h2 id="employee-modal-title">\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F</h2><p>${O(e.name)} \xB7 \u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u62C5\u5F53\u8005\u9078\u629E\u306B\u4F7F\u3044\u307E\u3059</p></div><button class="modal-close" data-action="close-modal" aria-label="\u9589\u3058\u308B">\xD7</button></header>
      <div class="modal-body">
        <form class="employee-create" data-form="employee">
          <input type="hidden" name="siteId" value="${O(i)}">
          <label class="field"><span class="field-label">\u30B9\u30BF\u30C3\u30D5\u540D</span><input name="name" maxlength="120" required placeholder="\u6C0F\u540D\u3092\u5165\u529B"></label>
          <button class="btn btn-primary" type="submit">${Nt("plus")} \u8FFD\u52A0</button>
        </form>
        <div class="employee-list">${t.items.length?t.items.map(s=>`<div class="employee-row">
          <span class="${s.status==="disabled"?"employee-disabled":""}">${O(s.name)}${s.status==="disabled"?"<small>\uFF08\u7121\u52B9\uFF09</small>":""}</span>
          <div><button class="btn btn-sm" data-action="employee-edit" data-id="${O(s.id)}">\u7DE8\u96C6</button>
          <button class="btn btn-sm ${s.status==="active"?"btn-quiet":""}" data-action="employee-toggle" data-id="${O(s.id)}" data-status="${s.status==="active"?"disabled":"active"}">${s.status==="active"?"\u7121\u52B9\u306B\u3059\u308B":"\u518D\u958B"}</button></div>
        </div>`).join(""):'<div class="empty">\u30B9\u30BF\u30C3\u30D5\u540D\u304C\u307E\u3060\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}</div>
      </div><footer class="modal-foot"><button type="button" class="btn" data-action="close-modal">\u9589\u3058\u308B</button></footer>
    </section>`),Ot.append(n),n.addEventListener("click",s=>{s.target===n&&Mn()})}catch(e){Mr=null,et(yt(e.message),!0)}}async function Iu(i,e){let n=(await Ne(`/api/v1/employees?${new URLSearchParams({siteId:i.site_id})}`)).items.map(r=>`<option value="${O(r.id)}">${O(r.name)}</option>`).join(""),s=e==="checked_in"?"\u8CB8\u51FA":"\u8FD4\u5374";On(`${s}\u624B\u7D9A\u304D`,`${O(i.registration_number??"")} \xB7 \u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E`,`
    <input type="hidden" name="id" value="${O(i.id)}">
    <input type="hidden" name="status" value="${e}">
    ${si("employeeId","\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5",`<option value="">\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${n}`)}
    ${n?"":`<p class="section-note">\u5148\u306B\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3078\u62C5\u5F53\u8005\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><button type="button" class="btn" data-action="employee-roster" data-site-id="${O(i.site_id)}">\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3092\u958B\u304F</button>`}
  `,"reservation-transition",`${s}\u3092\u78BA\u5B9A`)}function lt(i,e,t="text",n="",s="",r=!1,a=""){return`<div class="field ${a}"><label for="f-${i}">${e}</label><input id="f-${i}" name="${i}" type="${t}" value="${O(n)}" placeholder="${O(s)}" ${r?"required":""}></div>`}function si(i,e,t,n=!0){return`<div class="field"><label for="f-${i}">${e}</label><select id="f-${i}" name="${i}" ${n?"required":""}>${t}</select></div>`}function On(i,e,t,n,s="\u4FDD\u5B58"){br=n;let r=document.createElement("div");r.className="overlay",Vn(r,`<section class="modal" role="dialog" aria-modal="true"><header class="modal-head"><div><h2>${i}</h2><p>${e}</p></div><button class="modal-close" data-action="close-modal" aria-label="\u9589\u3058\u308B">\xD7</button></header><form data-form="${n}"><div class="modal-body">${t}</div><footer class="modal-foot"><button type="button" class="btn" data-action="close-modal">\u30AD\u30E3\u30F3\u30BB\u30EB</button><button type="submit" class="btn btn-primary">${s}</button></footer></form></section>`),Ot.append(r),r.addEventListener("click",a=>{a.target===r&&Mn()})}function Mn(){Et(".overlay")?.remove(),br="",Mr=null}async function Eo(i,e=""){try{if(["account"].includes(i)&&await Au(),i==="site")On("\u5E97\u8217\u3092\u8FFD\u52A0","\u76F4\u55B6\u5E97\u307E\u305F\u306F\u52A0\u76DF\u5E97\u3092\u767B\u9332\u3057\u307E\u3059",`<div class="form-grid">
        ${lt("code","\u5E97\u8217\u30B3\u30FC\u30C9","text","","\u4F8B\uFF1ATKY-001",!0)}
        ${si("type","\u5E97\u8217\u7A2E\u5225",'<option value="direct">\u76F4\u55B6\u5E97</option><option value="franchise">\u52A0\u76DF\u5E97</option>')}
        ${lt("name","\u5E97\u8217\u540D","text","","\u5E97\u8217\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",!0,"full")}
      </div>`,"site");else if(i==="account")On("\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0","\u5E97\u8217\u7528\u306E\u30ED\u30B0\u30A4\u30F3ID\u3068\u5229\u7528\u6A29\u9650\u3092\u8A2D\u5B9A\u3057\u307E\u3059",`<div class="form-grid">
        ${lt("username","\u30A2\u30AB\u30A6\u30F3\u30C8\u540D","text","","\u534A\u89D2\u82F1\u6570\u5B57\u30FB\u8A18\u53F7 3\uFF5E64 \u6587\u5B57",!0)}
        ${lt("password","\u521D\u671F\u30D1\u30B9\u30EF\u30FC\u30C9","password","","12 \u6587\u5B57\u4EE5\u4E0A",!0)}
        ${si("siteId","\u6240\u5C5E\u5E97\u8217",`<option value="">\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${So()}`)}
        <div class="field full"><span class="field-label">\u5229\u7528\u6A29\u9650</span>${_u()}</div>
      </div>`,"account");else if(i==="edit-account"){let t=Mu.find(n=>n.id===e);if(!t)throw new Error("not_found");On("\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u7DE8\u96C6",`${O(t.site_name)} \xB7 ${O(t.username)}`,`<input type="hidden" name="id" value="${O(t.id)}"><div class="form-grid">
        ${si("status","\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u72B6\u614B",`<option value="active" ${t.status==="active"?"selected":""}>\u6709\u52B9</option><option value="disabled" ${t.status==="disabled"?"selected":""}>\u7121\u52B9</option>`)}
        ${lt("password","\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u518D\u8A2D\u5B9A\uFF08\u4EFB\u610F\uFF09","password","","\u7A7A\u6B04\u306E\u5834\u5408\u306F\u5909\u66F4\u3057\u307E\u305B\u3093")}
        <div class="field full"><span class="field-label">\u5229\u7528\u6A29\u9650</span>${_u(O_(t.permissions))}</div>
      </div>`,"edit-account")}else if(i==="employee-edit"){let t=yu.find(n=>n.id===e);if(!t)throw new Error("not_found");On("\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7DE8\u96C6","\u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u8A18\u9332\u306B\u8868\u793A\u3059\u308B\u540D\u524D\u3092\u5909\u66F4\u3057\u307E\u3059",`
        <input type="hidden" name="id" value="${O(t.id)}">
        <input type="hidden" name="siteId" value="${O(t.site_id)}">
        ${lt("name","\u30B9\u30BF\u30C3\u30D5\u540D","text",t.name,"\u6C0F\u540D\u3092\u5165\u529B",!0)}
      `,"employee-edit")}else if(i==="vehicle")await vr(),On("\u8ECA\u4E21\u3092\u8FFD\u52A0","\u8ECA\u4E21\u60C5\u5831\u3092\u767B\u9332\u3057\u307E\u3059",`<div class="form-grid">
        ${lt("registrationNumber","\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8","text","","\u30D7\u30EC\u30FC\u30C8\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",!0)}
        ${lt("vin","\u8ECA\u53F0\u756A\u53F7\uFF08\u4EFB\u610F\uFF09","text","","\u8ECA\u53F0\u756A\u53F7")}
        ${lt("make","\u30E1\u30FC\u30AB\u30FC","text","","\u4F8B\uFF1AToyota",!0)}
        ${lt("model","\u8ECA\u7A2E","text","","\u4F8B\uFF1APrius",!0)}
        ${lt("modelYear","\u5E74\u5F0F\uFF08\u4EFB\u610F\uFF09","number","","2024")}
        ${si("siteId","\u6240\u5C5E\u5E97\u8217",`<option value="">\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${So()}`)}
      </div>`,"vehicle");else if(i==="edit-vehicle"){let t=Su.find(n=>n.id===e);if(!t)throw new Error("not_found");await vr(),On("\u8ECA\u4E21\u60C5\u5831\u3092\u7DE8\u96C6",`${O(t.registration_number)} \xB7 \u56FA\u5B9A\u8ECA\u4E21ID\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093`,`<input type="hidden" name="id" value="${O(t.id)}"><div class="form-grid">
        ${lt("registrationNumber","\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8","text",t.registration_number,"",!0)}
        ${lt("vin","\u8ECA\u53F0\u756A\u53F7","text",t.vin??"")}
        ${lt("make","\u30E1\u30FC\u30AB\u30FC","text",t.make,"",!0)}
        ${lt("model","\u8ECA\u7A2E","text",t.model,"",!0)}
        ${lt("modelYear","\u5E74\u5F0F","number",String(t.model_year??""))}
        ${si("siteId","\u6240\u5C5E\u5E97\u8217",So(t.site_id))}
        ${si("status","\u8ECA\u4E21\u306E\u72B6\u614B",["available","rented","maintenance","retired"].map(n=>`<option value="${n}" ${t.status===n?"selected":""}>${wr(n)}</option>`).join(""))}
      </div>`,"edit-vehicle")}else if(i==="reservation"){await vr();let t=new Date(Date.now()+30*6e4),n=new Date(t.getTime()+1440*6e4),s=h=>new Date(h.getTime()-h.getTimezoneOffset()*6e4).toISOString().slice(0,16),r=Qe.site.type==="headquarters"?"":Qe.site.id,a=r?`&siteId=${encodeURIComponent(r)}`:"",l=(await Ne(`/api/v1/vehicles?status=available&limit=100${a}`)).items.map(h=>`<option value="${O(h.id)}">${O(h.registration_number)} \xB7 ${O(h.make)} ${O(h.model)}</option>`).join(""),c=Qe.site.type==="headquarters"?`<div class="field"><label for="f-siteId">\u53D7\u4ED8\u5E97\u8217</label><select id="f-siteId" name="siteId" data-reservation-site required><option value="">\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${So()}</select></div>`:"";On("\u4E88\u7D04\u3092\u4F5C\u6210","\u304A\u5BA2\u69D8\u3068\u5229\u7528\u671F\u9593\u3092\u767B\u9332\u3057\u307E\u3059",`<div class="form-grid">
        ${lt("guestName","\u304A\u5BA2\u69D8\u306E\u6C0F\u540D","text","","\u6C0F\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",!0)}
        ${lt("guestPhone","\u96FB\u8A71\u756A\u53F7","tel","","\u96FB\u8A71\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",!0)}
        ${lt("startAt","\u8CB8\u51FA\u4E88\u5B9A\u65E5\u6642","datetime-local",s(t),"",!0)}
        ${lt("endAt","\u8FD4\u5374\u4E88\u5B9A\u65E5\u6642","datetime-local",s(n),"",!0)}
        ${c}
        ${si("vehicleId","\u8ECA\u4E21\u306E\u4E88\u7D04",`<option value="">\u8CB8\u51FA\u53EF\u80FD\u306A\u8ECA\u4E21\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${l}`)}
      </div>`,"reservation","\u4E88\u7D04\u3092\u4FDD\u5B58")}else if(i==="parking-lot-layout"){let t=fn?.parking_lots.find(n=>String(n.id)===e);if(!t)throw new Error("not_found");On("\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u30EC\u30A4\u30A2\u30A6\u30C8",`${O(t.name)} \xB7 \u56F3\u9762\u30B5\u30A4\u30BA\u3001\u53CE\u5BB9\u53F0\u6570\u3001\u512A\u5148\u30AF\u30E9\u30B9\u3092\u8A2D\u5B9A`,`
        <input type="hidden" name="id" value="${O(t.id)}"><div class="form-grid">
          ${lt("name","\u30A8\u30EA\u30A2\u540D","text",t.name,"",!0)}
          ${lt("area_height","\u56F3\u9762\u306E\u9AD8\u3055\uFF08px\uFF09","number",String(t.area_height),"160\uFF5E600",!0)}
          ${lt("area_width","\u56F3\u9762\u306E\u5E45\uFF08%\uFF09","number",String(t.area_width),"30\uFF5E100",!0)}
          ${lt("capacity","\u53CE\u5BB9\u53F0\u6570\uFF08\u7121\u5236\u9650\u306F\u7A7A\u6B04\uFF09","number",t.capacity===null?"":String(t.capacity),"0\uFF5E1000")}
          ${lt("navigation_url","Google Maps \u6848\u5185URL","url",t.navigation_url,"https://maps.google.com/\u2026",!1,"full")}
          ${lt("class_priority","\u512A\u5148\u8ECA\u4E21\u30AF\u30E9\u30B9\uFF08\u4E0A\u4F4D\u304B\u3089\u30AB\u30F3\u30DE\u533A\u5207\u308A\uFF09","text",t.class_priority.join(", "),"",!1,"full")}
          <label class="field"><span class="field-label">\u7A3C\u50CD\u72B6\u614B</span><select name="is_active"><option value="true" ${t.is_active?"selected":""}>\u904B\u7528\u4E2D</option><option value="false" ${t.is_active?"":"selected"}>\u505C\u6B62\u4E2D</option></select></label>
        </div>`,"parking-lot-layout","\u30EC\u30A4\u30A2\u30A6\u30C8\u3092\u4FDD\u5B58")}}catch(t){et(yt(t.message),!0)}}async function vr(){Bt.length||(Bt=(await Ne("/api/v1/sites")).items)}function wo(i,e){return[...i.querySelectorAll(`input[name="${e}"]:checked`)].map(t=>t.value)}function xr(){To?.dispose(),To=null,oc=null,Et(".parking-inspection-overlay")?.remove()}function W_(i){let e=fn,t=e?.vehicles.find(r=>r.id===i);if(!e||!t||!e.damage_types.length)return;xr();let n=document.createElement("div");n.className="parking-inspection-overlay",Vn(n,`<section class="parking-inspection-dialog" role="dialog" aria-modal="true">
    <header><div><h2>3D\u8ECA\u4E21\u691C\u67FB</h2><p>${O(t.plate)} \xB7 \u30C9\u30E9\u30C3\u30B0\u3067360\xB0\u56DE\u8EE2\u3002\u7A2E\u985E\u3092\u9078\u3093\u3067\u8ECA\u4F53\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u8A18\u9332\u3001\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u524A\u9664\u3057\u307E\u3059\u3002</p></div>
      <button class="btn btn-sm" type="button" data-action="parking-inspect3d-close">\u9589\u3058\u308B</button></header>
    <div class="parking-inspection-palette">${e.damage_types.map(r=>`<button type="button" data-damage-type="${O(r.id)}" style="--damage-color:${O(r.color)}">${O(r.icon)} ${O(r.name)}</button>`).join("")}</div>
    <div class="parking-inspection-view"></div>
  </section>`),Ot.append(n),oc=i,To=du(Et(".parking-inspection-view",n),e.damage_types,tn.get(i)??t.inspection_marks,r=>tn.set(i,r));let s=Et(".parking-inspection-canvas",n);s&&s.setAttribute("aria-label",pr("3D\u8ECA\u4E21\u3092\u56DE\u8EE2\u3057\u640D\u50B7\u7B87\u6240\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u8A18\u9332",Ci())),n.addEventListener("click",r=>{r.target===n&&xr()})}function $_(i){let e=i.target.closest("[data-parking-drag]");if(!e||!rt("parking:write")||!fn||i.button!==0||vt)return;let t=Number(e.dataset.parkingDrag),n=e.closest(".parking-map-vehicle"),s=fn.vehicles.find(a=>a.id===t);if(!n||!s)return;i.preventDefault();let r=e.cloneNode(!0);r.className="parking-drag-ghost",r.style.left=`${i.clientX}px`,r.style.top=`${i.clientY}px`,document.body.append(r),vt={vehicleId:t,pointerId:i.pointerId,source:n,ghost:r,clientX:i.clientX,clientY:i.clientY,startX:i.clientX,startY:i.clientY,moved:!1,frame:0},e.setPointerCapture(i.pointerId),vt.frame=requestAnimationFrame(Pu)}function Pu(){if(!vt||(vt.frame=requestAnimationFrame(Pu),!vt.moved))return;let i=Math.min(90,window.innerHeight*.14),e=vt.clientY,t=e<i?-Math.ceil(18*(1-e/i)):e>window.innerHeight-i?Math.ceil(18*(1-(window.innerHeight-e)/i)):0;t&&window.scrollBy(0,t)}function X_(i){!vt||i.pointerId!==vt.pointerId||(vt.clientX=i.clientX,vt.clientY=i.clientY,Math.abs(i.clientX-vt.startX)+Math.abs(i.clientY-vt.startY)>5&&(vt.moved=!0),vt.moved&&(vt.ghost.style.left=`${i.clientX}px`,vt.ghost.style.top=`${i.clientY}px`,document.querySelectorAll(".parking-map.drop-target").forEach(e=>e.classList.remove("drop-target")),document.elementFromPoint(i.clientX,i.clientY)?.closest("[data-parking-map]")?.classList.add("drop-target")))}function hc(i,e,t){let n=i.getBoundingClientRect();return{x:Math.max(0,Math.min(1,(e-n.left)/n.width)),y:Math.max(0,Math.min(1,(t-n.top)/n.height))}}function q_(i){let e=i.target.closest("svg[data-marking-svg].editable");if(!e||!rt("parking:admin")||ps!==Number(e.dataset.lotId)||i.button!==0||!fn)return;let t=hc(e,i.clientX,i.clientY);i.preventDefault(),Yt={pointerId:i.pointerId,lotId:Number(e.dataset.lotId),x1:t.x,y1:t.y,svg:e},e.setPointerCapture(i.pointerId);let n=document.createElementNS("http://www.w3.org/2000/svg","line");n.classList.add("parking-marking-preview"),n.dataset.draftMarking="true",n.setAttribute("x1",String(t.x*1e3)),n.setAttribute("y1",String(t.y*1e3)),n.setAttribute("x2",String(t.x*1e3)),n.setAttribute("y2",String(t.y*1e3)),n.setAttribute("stroke",Sr),n.setAttribute("stroke-width","7"),n.setAttribute("stroke-linecap","round"),e.append(n)}function Y_(i){if(!Yt||Yt.pointerId!==i.pointerId)return;let e=hc(Yt.svg,i.clientX,i.clientY),t=Yt.svg.querySelector('[data-draft-marking="true"]');t?.setAttribute("x2",String(e.x*1e3)),t?.setAttribute("y2",String(e.y*1e3))}async function J_(i){if(!Yt||Yt.pointerId!==i.pointerId)return;let e=Yt;Yt=null,e.svg.querySelector('[data-draft-marking="true"]')?.remove();let n=hc(e.svg,i.clientX,i.clientY);if(Math.hypot(n.x-e.x1,n.y-e.y1)<.005)return;let s=fn?.parking_lots.find(a=>a.id===e.lotId);if(!s)return;let r={id:crypto.randomUUID(),x1:e.x1,y1:e.y1,x2:n.x,y2:n.y,color:Sr};try{await Ne(`/api/v1/parking/lots/${s.id}`,{method:"PATCH",body:JSON.stringify({markings:[...s.markings,r]})}),await qt()}catch(a){et(yt(a.message),!0)}}function Z_(i){!Yt||Yt.pointerId!==i.pointerId||(Yt.svg.querySelector('[data-draft-marking="true"]')?.remove(),Yt=null)}async function vu(i){if(!vt||i.pointerId!==vt.pointerId)return;let e=vt;if(vt=null,cancelAnimationFrame(e.frame),e.ghost.remove(),document.querySelectorAll(".parking-map.drop-target").forEach(c=>c.classList.remove("drop-target")),!e.moved)return;let t=document.elementFromPoint(i.clientX,i.clientY)?.closest("[data-parking-map]"),n=fn?.vehicles.find(c=>c.id===e.vehicleId);if(!t||!n)return;let s=t.getBoundingClientRect(),r=t.dataset.lotId?Number(t.dataset.lotId):null,a=r===null?n.position_x:Math.max(0,Math.min(1,(i.clientX-s.left)/s.width)),o=r===null?n.position_y:Math.max(0,Math.min(1,(i.clientY-s.top)/s.height)),l={vehicleId:n.id,lotId:n.parking_lot_id,x:n.position_x,y:n.position_y};try{await Ne(`/api/v1/parking/vehicles/${n.id}`,{method:"PATCH",body:JSON.stringify({parking_lot_id:r,position_x:a,position_y:o})}),gr.push(l),await qt()}catch(c){et(yt(c.message),!0)}}async function K_(i){let e=i.target.closest("form[data-form]");if(!e)return;i.preventDefault();let t=e.dataset.form,n=new FormData(e),s=a=>String(n.get(a)??"").trim(),r=Et('button[type="submit"]',e);r&&r.setAttribute("disabled","true");try{if(t==="site")await Ne("/api/v1/sites",{method:"POST",body:JSON.stringify({code:s("code"),name:s("name"),type:s("type")})});else if(t==="account")await Ne("/api/v1/accounts",{method:"POST",body:JSON.stringify({siteId:s("siteId"),username:s("username"),password:s("password"),permissions:wo(e,"permissions")})});else if(t==="edit-account"){let a={status:s("status"),permissions:wo(e,"permissions")};s("password")&&(a.password=s("password")),await Ne(`/api/v1/accounts/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify(a)})}else if(t==="employee"){await Ne("/api/v1/employees",{method:"POST",body:JSON.stringify({siteId:s("siteId"),name:s("name")})});let a=s("siteId"),o=Mr;Mr=null,Mn(),et("\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\u3002"),o?await Iu(o.reservation,o.status):await _r(a);return}else if(t==="employee-edit"){await Ne(`/api/v1/employees/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({siteId:s("siteId"),name:s("name")})});let a=s("siteId");Mn(),et("\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002"),await _r(a);return}else if(t==="reservation-transition")await Ne(`/api/v1/reservations/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({status:s("status"),employeeId:s("employeeId")})});else if(t==="vehicle")await Ne("/api/v1/vehicles",{method:"POST",body:JSON.stringify({registrationNumber:s("registrationNumber"),vin:s("vin")||void 0,make:s("make"),model:s("model"),modelYear:s("modelYear")?Number(s("modelYear")):void 0,siteId:s("siteId")})});else if(t==="edit-vehicle")await Ne(`/api/v1/vehicles/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({registrationNumber:s("registrationNumber"),vin:s("vin")||null,make:s("make"),model:s("model"),modelYear:s("modelYear")?Number(s("modelYear")):null,siteId:s("siteId"),status:s("status")})});else if(t==="reservation"){let a=new Date(s("startAt")),o=new Date(s("endAt"));if(!Number.isFinite(a.getTime())||!Number.isFinite(o.getTime())||a>=o)throw new Error("\u8CB8\u51FA\u65E5\u6642\u3068\u8FD4\u5374\u65E5\u6642\u3092\u6B63\u3057\u304F\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");let l={guestName:s("guestName"),guestPhone:s("guestPhone"),startAt:a.toISOString(),endAt:o.toISOString(),vehicleId:s("vehicleId")};Qe.site.type==="headquarters"&&(l.siteId=s("siteId")),await Ne("/api/v1/reservations",{method:"POST",body:JSON.stringify(l)})}else if(t==="parking-vehicle"){let a=Number(s("position_x")),o=Number(s("position_y"));if(!Number.isFinite(a)||!Number.isFinite(o)||a<0||a>1||o<0||o>1)throw new Error("invalid_request");await Ne(`/api/v1/parking/vehicles/${encodeURIComponent(e.dataset.id)}`,{method:"PATCH",body:JSON.stringify({parking_lot_id:s("parking_lot_id")?Number(s("parking_lot_id")):null,position_x:a,position_y:o,status_ids:wo(e,"status_ids").map(Number),unwashed:!!n.get("unwashed"),no_fuel:!!n.get("no_fuel"),needs_repair:!!n.get("needs_repair"),options:wo(e,"options"),notes:s("notes")||null,assessment_values:Object.fromEntries([...e.querySelectorAll("[data-assessment-id]")].map(l=>[l.dataset.assessmentId,l instanceof HTMLInputElement&&l.type==="checkbox"?l.checked:l.value])),inspection_marks:(tn.get(Number(e.dataset.id))??[]).map(l=>({id:l.id,damage_type_id:l.damage_type_id,x:l.x,y:l.y,...typeof l.world_x=="number"&&typeof l.world_y=="number"&&typeof l.world_z=="number"?{world_x:l.world_x,world_y:l.world_y,world_z:l.world_z}:{},...typeof l.world_nx=="number"&&typeof l.world_ny=="number"&&typeof l.world_nz=="number"?{world_nx:l.world_nx,world_ny:l.world_ny,world_nz:l.world_nz}:{}}))})}),tn.delete(Number(e.dataset.id))}else if(t==="parking-job")await Ne("/api/v1/parking/jobs",{method:"POST",body:JSON.stringify({vehicle_id:Number(s("vehicle_id")),destination_lot_id:Number(s("destination_lot_id")),scheduled_at:s("scheduled_at")})});else if(t==="parking-lot")await Ne("/api/v1/parking/lots",{method:"POST",body:JSON.stringify({name:s("name"),navigation_url:s("navigation_url")})});else if(t==="parking-lot-layout"){let a=Number(s("area_height")),o=Number(s("area_width")),l=s("capacity")?Number(s("capacity")):null;if(!Number.isInteger(a)||a<160||a>600||!Number.isInteger(o)||o<30||o>100||l!==null&&(!Number.isInteger(l)||l<0||l>1e3))throw new Error("invalid_request");await Ne(`/api/v1/parking/lots/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({name:s("name"),area_height:a,area_width:o,capacity:l,navigation_url:s("navigation_url"),class_priority:s("class_priority").split(",").map(c=>c.trim()).filter(Boolean),is_active:s("is_active")==="true"})})}else if(t==="parking-class")await Ne("/api/v1/parking/classes",{method:"POST",body:JSON.stringify({name:s("name"),color:s("color")})});else if(t==="parking-status")await Ne("/api/v1/parking/statuses",{method:"POST",body:JSON.stringify({name:s("name"),icon:s("icon")||void 0})});else if(t==="parking-option")await Ne("/api/v1/parking/options",{method:"POST",body:JSON.stringify({name:s("name")})});else if(t==="parking-store")await Ne("/api/v1/parking/stores",{method:"POST",body:JSON.stringify({name:s("name")})});else if(t==="lot-distance"||t==="store-distance"){let a=s("minutes")===""?null:Number(s("minutes")),o=s("km")===""?null:Number(s("km"));if(a!==null&&!Number.isFinite(a)||o!==null&&!Number.isFinite(o))throw new Error("invalid_request");let l=t==="lot-distance"?{from_lot_id:Number(s("from_lot_id")),to_lot_id:Number(s("to_lot_id")),minutes:a,km:o}:{store_id:Number(s("store_id")),lot_id:Number(s("lot_id")),minutes:a,km:o};await Ne(`/api/v1/parking/${t==="lot-distance"?"lot-distances":"store-distances"}`,{method:"PUT",body:JSON.stringify({entries:[l]})})}else if(t==="parking-assessment"){let a={name:s("name"),field_type:s("field_type"),suffix:s("suffix")};await Ne(`/api/v1/parking/assessment-fields${e.dataset.id?`/${encodeURIComponent(e.dataset.id)}`:""}`,{method:e.dataset.id?"PATCH":"POST",body:JSON.stringify(a)})}else if(t==="parking-damage"){let a={name:s("name"),icon:s("icon"),color:s("color")};await Ne(`/api/v1/parking/damage-types${e.dataset.id?`/${encodeURIComponent(e.dataset.id)}`:""}`,{method:e.dataset.id?"PATCH":"POST",body:JSON.stringify(a)})}Mn(),et("\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002"),t==="site"&&(Bt=[]),await Bn()}catch(a){et(yt(a.message),!0),r&&r.removeAttribute("disabled")}}async function j_(i){let e=i.target.closest('[data-action="parking-damage-remove"]');if(e){i.preventDefault();let s=Number(e.dataset.vehicleId),r=e.dataset.markId;tn.set(s,(tn.get(s)??[]).filter(a=>a.id!==r)),oc===s&&To?.setMarks(tn.get(s)??[]),e.remove();return}let t=i.target.closest("[data-damage-map]");if(t){i.preventDefault();let s=t.closest('form[data-form="parking-vehicle"]'),r=Et('[name="damage_type_id"]',s??document);if(!s||!r?.value)return;let a=t.getBoundingClientRect();if(!a.width||!a.height)return;let o=Number(t.dataset.id),l={id:crypto.randomUUID(),damage_type_id:Number(r.value),x:Math.max(0,Math.min(1,(i.clientX-a.left)/a.width)),y:Math.max(0,Math.min(1,(i.clientY-a.top)/a.height))},c=[...tn.get(o)??[],l];tn.set(o,c);let h=document.createElement("button");h.type="button",h.className="damage-marker",h.dataset.action="parking-damage-remove",h.dataset.vehicleId=String(o),h.dataset.markId=l.id,h.style.left=`${l.x*100}%`,h.style.top=`${l.y*100}%`,h.style.background=r.selectedOptions[0]?.dataset.color??"#e34b4b",h.textContent="\xD7",t.append(h);return}let n=i.target.closest("[data-page],[data-action],[data-modal],[data-language]");if(n){if(n.dataset.language==="ja"||n.dataset.language==="zh")await V_(n.dataset.language);else if(n.dataset.page)i.preventDefault(),xr(),zn=n.dataset.page,sn=0,Sn="",ai="",mr=!1,lc(),await Bn();else if(n.dataset.modal)await Eo(n.dataset.modal);else if(n.dataset.action==="close-modal")Mn();else if(n.dataset.action==="logout")xr(),window.clearTimeout(sc),fs?.close(),fs=null,nn="",Qe=null,sessionStorage.removeItem("guts_erp_token"),Er();else if(n.dataset.action==="parking-board")yr="parking",await Ao();else if(n.dataset.action==="employee-roster"){if(br==="reservation-transition"){let s=Et('form[data-form="reservation-transition"]'),r=ic.find(l=>l.id===Et('[name="id"]',s??document)?.value),a=Et('[name="status"]',s??document)?.value,o=null;r&&a==="checked_in"?o={reservation:r,status:"checked_in"}:r&&a==="completed"&&(o={reservation:r,status:"completed"}),Mn(),Mr=o,await _r(n.dataset.siteId??Qe.site.id);return}else br&&Mn();await _r(n.dataset.siteId??Qe.site.id)}else if(n.dataset.action==="employee-edit")Mn(),await Eo("employee-edit",n.dataset.id);else if(n.dataset.action==="employee-toggle"){let s=bu;Mn();try{await Ne(`/api/v1/employees/${encodeURIComponent(n.dataset.id)}`,{method:"PATCH",body:JSON.stringify({siteId:s,status:n.dataset.status})}),et(n.dataset.status==="active"?"\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u518D\u958B\u3057\u307E\u3057\u305F\u3002":"\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7121\u52B9\u306B\u3057\u307E\u3057\u305F\u3002"),await _r(s)}catch(r){et(yt(r.message),!0)}}else if(n.dataset.action==="parking-inspect3d")W_(Number(n.dataset.id));else if(n.dataset.action==="parking-inspect3d-close")xr();else if(n.dataset.action==="parking-move-undo"){let s=gr[gr.length-1];if(!s)return;try{await Ne(`/api/v1/parking/vehicles/${s.vehicleId}`,{method:"PATCH",body:JSON.stringify({parking_lot_id:s.lotId,position_x:s.x,position_y:s.y})}),gr.pop(),await qt()}catch(r){et(yt(r.message),!0)}}else if(n.dataset.action==="parking-lot-settings")await Eo("parking-lot-layout",n.dataset.id);else if(n.dataset.action==="parking-marking-toggle"){let s=Number(n.dataset.id);ps=ps===s?null:s,await qt()}else if(n.dataset.action==="parking-marking-undo"){let s=fn?.parking_lots.find(r=>String(r.id)===n.dataset.id);if(!s?.markings.length)return;try{await Ne(`/api/v1/parking/lots/${s.id}`,{method:"PATCH",body:JSON.stringify({markings:s.markings.slice(0,-1)})}),await qt()}catch(r){et(yt(r.message),!0)}}else if(n.dataset.action==="parking-job-toggle")try{await Ne(`/api/v1/parking/jobs/${encodeURIComponent(n.dataset.id)}`,{method:"PATCH",body:JSON.stringify({completed:n.dataset.completed==="true"})}),et("\u4E88\u5B9A\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002"),await qt()}catch(s){et(yt(s.message),!0)}else if(n.dataset.action==="parking-job-delete"){if(!bo("\u3053\u306E\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F"))return;try{await Ne(`/api/v1/parking/jobs/${encodeURIComponent(n.dataset.id)}`,{method:"DELETE"}),et("\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002"),await qt()}catch(s){et(yt(s.message),!0)}}else if(n.dataset.action==="parking-lot-toggle")try{await Ne(`/api/v1/parking/lots/${encodeURIComponent(n.dataset.id)}`,{method:"PATCH",body:JSON.stringify({is_active:n.dataset.active==="true"})}),await qt()}catch(s){et(yt(s.message),!0)}else if(n.dataset.action==="parking-lot-delete"){if(!bo("\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F"))return;try{await Ne(`/api/v1/parking/lots/${encodeURIComponent(n.dataset.id)}`,{method:"DELETE"}),await qt()}catch(s){et(yt(s.message),!0)}}else if(n.dataset.action==="parking-lot-order"){if(!fn)return;let s=fn.parking_lots.map(o=>o.id),r=s.indexOf(Number(n.dataset.id)),a=r+(n.dataset.direction==="up"?-1:1);if(r<0||a<0||a>=s.length)return;[s[r],s[a]]=[s[a],s[r]];try{await Ne("/api/v1/parking/lots/order",{method:"PUT",body:JSON.stringify({ids:s})}),await qt()}catch(o){et(yt(o.message),!0)}}else if(n.dataset.action?.startsWith("parking-")&&["parking-class-delete","parking-status-delete","parking-option-delete","parking-store-delete","parking-assessment-delete","parking-damage-delete"].includes(n.dataset.action)){let s=n.dataset.action==="parking-class-delete"?"classes":n.dataset.action==="parking-status-delete"?"statuses":n.dataset.action==="parking-option-delete"?"options":n.dataset.action==="parking-store-delete"?"stores":n.dataset.action==="parking-assessment-delete"?"assessment-fields":"damage-types";if(!bo("\u3053\u306E\u8A2D\u5B9A\u9805\u76EE\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F"))return;try{await Ne(`/api/v1/parking/${s}/${encodeURIComponent(n.dataset.id)}`,{method:"DELETE"}),await qt()}catch(r){et(yt(r.message),!0)}}else if(n.dataset.action==="vehicle-list")yr="list",await Ao();else if(n.dataset.action==="sync-parking"){let s=n;s.disabled=!0;try{let r=await Ne("/api/v1/parking/vehicles:sync",{method:"POST"});et(`\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\uFF08\u65B0\u898F ${r.created} \u53F0\u3001\u66F4\u65B0 ${r.updated} \u53F0\uFF09\u3002`)}catch(r){et(r.message,!0)}finally{s.disabled=!1}}else if(n.dataset.action==="refresh")await Bn();else if(n.dataset.action==="menu")mr=!mr,Et(".sidebar")?.classList.toggle("open",mr);else if(n.dataset.action==="next")sn+=50,await Bn();else if(n.dataset.action==="prev")sn=Math.max(0,sn-50),await Bn();else if(n.dataset.action==="edit-account"||n.dataset.action==="edit-vehicle")await Eo(n.dataset.action,n.dataset.id);else if(n.dataset.action?.startsWith("reservation-")){let s=ic.find(a=>a.id===n.dataset.id);if(!s)return;if(n.dataset.action==="reservation-checkin"||n.dataset.action==="reservation-return"){try{await Iu(s,n.dataset.action==="reservation-checkin"?"checked_in":"completed")}catch(a){et(yt(a.message),!0)}return}let r=`${s.guest_name} \u69D8\u306E\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u304B\uFF1F`;if(!bo(r))return;try{await Ne(`/api/v1/reservations/${encodeURIComponent(s.id)}`,{method:"PATCH",body:JSON.stringify({status:"cancelled"})}),et("\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3057\u305F\u3002"),await Bn()}catch(a){et(yt(a.message),!0)}}}}function Q_(i){if(!(i.target instanceof HTMLInputElement))return;if(i.target.matches("[data-marking-color]")){Sr=i.target.value,Et(".parking-marking-preview")?.setAttribute("stroke",Sr);return}if(!i.target.matches("[data-search]"))return;let e=i.target.selectionStart;Sn=i.target.value,sn=0;let t=zn==="sites"?Tu:zn==="accounts"?Ru:zn==="vehicles"?Ao:zn==="reservations"?Cu:null;t&&(window.clearTimeout(mu),mu=window.setTimeout(()=>{t().then(()=>{let n=Et("[data-search]");n?.focus(),n instanceof HTMLInputElement&&e!==null&&n.setSelectionRange(e,e)}).catch(n=>et(yt(n.message),!0))},180))}function e0(i){let e=i.target;if(e.matches("[data-status]"))ai=e.value,sn=0,Bn();else if(e.matches("[data-reservation-site]")){let t=Et('[name="vehicleId"]',Et(".overlay"));if(!t)return;Vn(t,'<option value="">\u8ECA\u4E21\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</option>'),t.setAttribute("disabled","true"),Ne(`/api/v1/vehicles?${new URLSearchParams({status:"available",limit:"100",siteId:e.value})}`).then(n=>{Vn(t,`<option value="">\u8CB8\u51FA\u53EF\u80FD\u306A\u8ECA\u4E21\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${n.items.map(s=>`<option value="${O(s.id)}">${O(s.registration_number)} \xB7 ${O(s.make)} ${O(s.model)}</option>`).join("")}`)}).catch(n=>{Vn(t,'<option value="">\u8ECA\u4E21\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5E97\u8217\u3092\u9078\u629E\u3057\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002</option>'),et(yt(n.message),!0)}).finally(()=>t.removeAttribute("disabled"))}}"serviceWorker"in navigator&&window.isSecureContext&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js",{scope:"/"}).catch(()=>et("\u30AA\u30D5\u30E9\u30A4\u30F3\u7528\u30A2\u30D7\u30EA\u306E\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u304F\u3060\u3055\u3044\u3002",!0))},{once:!0});nn?Eu().catch(()=>{nn="",Qe=null,sessionStorage.removeItem("guts_erp_token"),Er()}):Er();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
