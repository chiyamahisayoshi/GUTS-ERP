(()=>{var Qc=0,Sl=1,th=2;var El=1,eh=2,Mn=3,Nn=0,He=1,Sn=2,kn=0,gi=1,wl=2,Tl=3,Al=4,nh=5,Kn=100,ih=101,sh=102,rh=103,ah=104,oh=200,lh=201,ch=202,hh=203,ta=204,ea=205,uh=206,dh=207,fh=208,ph=209,mh=210,gh=211,_h=212,vh=213,yh=214,Aa=0,Ca=1,Ra=2,_i=3,Ia=4,Pa=5,La=6,Da=7,Cl=0,xh=1,bh=2,Bn=0,Mh=1,Sh=2,Eh=3,Ua=4,wh=5,Th=6,Ah=7;var Rl=300,Mi=301,Si=302,Na=303,Fa=304,ur=306,na=1e3,Zn=1001,ia=1002,sn=1003,Ch=1004;var dr=1005;var pn=1006,Oa=1007;var ii=1008;var _n=1009,Il=1010,Pl=1011,cs=1012,ka=1013,si=1014,En=1015,hs=1016,Ba=1017,za=1018,us=1020,Ll=35902,Dl=35899,Ul=1021,Nl=1022,an=1023,Ji=1026,ds=1027,Fl=1028,Ha=1029,Ol=1030,Va=1031;var Ga=1033,fr=33776,pr=33777,mr=33778,gr=33779,Wa=35840,$a=35841,Xa=35842,qa=35843,Ya=36196,Ja=37492,Za=37496,Ka=37808,ja=37809,Qa=37810,to=37811,eo=37812,no=37813,io=37814,so=37815,ro=37816,ao=37817,oo=37818,lo=37819,co=37820,ho=37821,uo=36492,fo=36494,po=36495,mo=36283,go=36284,_o=36285,vo=36286;var Ls=2300,sa=2301,Qr=2302,ul=2400,dl=2401,fl=2402;var Rh=3200,Ih=3201;var kl=0,Ph=1,zn="",ze="srgb",vi="srgb-linear",Ds="linear",se="srgb";var pi=7680;var pl=519,Lh=512,Dh=513,Uh=514,Bl=515,Nh=516,Fh=517,Oh=518,kh=519,ml=35044;var zl="300 es",fn=2e3,Us=2001;var Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ac=1234567,Cs=Math.PI/180,Zi=180/Math.PI;function Ei(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function Hl(i,t){return(i%t+t)%t}function Qu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function td(i,t,e){return i!==t?(e-i)/(t-i):0}function Rs(i,t,e){return(1-e)*i+e*t}function ed(i,t,e,n){return Rs(i,t,1-Math.exp(-e*n))}function nd(i,t=1){return t-Math.abs(Hl(i,t*2)-t)}function id(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function sd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function rd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ad(i,t){return i+Math.random()*(t-i)}function od(i){return i*(.5-Math.random())}function ld(i){i!==void 0&&(Ac=i);let t=Ac+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cd(i){return i*Cs}function hd(i){return i*Zi}function ud(i){return(i&i-1)===0&&i!==0}function dd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _r={DEG2RAD:Cs,RAD2DEG:Zi,generateUUID:Ei,clamp:Jt,euclideanModulo:Hl,mapLinear:Qu,inverseLerp:td,lerp:Rs,damp:ed,pingpong:nd,smoothstep:id,smootherstep:sd,randInt:rd,randFloat:ad,randFloatSpread:od,seededRandom:ld,degToRad:cd,radToDeg:hd,isPowerOfTwo:ud,ceilPowerOfTwo:dd,floorPowerOfTwo:fd,setQuaternionFromProperEuler:pd,normalize:Be,denormalize:qi},gt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},On=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],b=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=b;return}if(u!==b||l!==f||c!==p||h!==g){let m=1-o,d=l*f+c*p+h*g+u*b,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let A=Math.sqrt(y),C=Math.atan2(A,d*v);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}let x=o*v;if(l=l*m+f*x,c=c*m+p*x,h=h*m+g*x,u=u*m+b*x,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zo.copy(this).projectOnVector(t),this.sub(zo)}reflect(t){return this.sub(zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zo=new D,Cc=new On,Ht=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],b=s[0],m=s[3],d=s[6],v=s[1],y=s[4],x=s[7],A=s[2],C=s[5],R=s[8];return r[0]=a*b+o*v+l*A,r[3]=a*m+o*y+l*C,r[6]=a*d+o*x+l*R,r[1]=c*b+h*v+u*A,r[4]=c*m+h*y+u*C,r[7]=c*d+h*x+u*R,r[2]=f*b+p*v+g*A,r[5]=f*m+p*y+g*C,r[8]=f*d+p*x+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=u*b,t[1]=(s*c-h*n)*b,t[2]=(o*n-s*a)*b,t[3]=f*b,t[4]=(h*e-s*l)*b,t[5]=(s*r-o*e)*b,t[6]=p*b,t[7]=(n*l-c*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ho.makeScale(t,e)),this}rotate(t){return this.premultiply(Ho.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ho.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ho=new Ht;function Vl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bh(){let i=Ns("canvas");return i.style.display="block",i}var Rc={};function Ki(i){i in Rc||(Rc[i]=!0,console.warn(i))}function zh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ic=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function md(){let i={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===se&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?Ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ki("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ki("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vi]:{primaries:t,whitePoint:n,transfer:Ds,toXYZ:Ic,fromXYZ:Pc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:se,toXYZ:Ic,fromXYZ:Pc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var te=md();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ni,ra=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ni===void 0&&(Ni=Ns("canvas")),Ni.width=t.width,Ni.height=t.height;let s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ns("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gd=0,ji=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vo(s[a].image)):r.push(Vo(s[a]))}else r=Vo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _d=0,Go=new D,Ze=class i extends Fn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Zn,s=Zn,r=pn,a=ii,o=an,l=_n,c=i.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Ei(),this.name="",this.source=new ji(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Go).x}get height(){return this.source.getSize(Go).y}get depth(){return this.source.getSize(Go).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case na:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case na:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Rl;Ze.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],b=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(p+1)/2,A=(d+1)/2,C=(h+f)/4,R=(u+b)/4,U=(g+m)/4;return y>x&&y>A?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=R/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=C/s,r=U/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=U/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-b)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},aa=class extends Fn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Ze(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ji(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends aa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fs=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oa=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),Dr.subVectors(this.max,Ss),Fi.subVectors(t.a,Ss),Oi.subVectors(t.b,Ss),ki.subVectors(t.c,Ss),Gn.subVectors(Oi,Fi),Wn.subVectors(ki,Oi),hi.subVectors(Fi,ki);let e=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-hi.z,hi.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,hi.z,0,-hi.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-hi.y,hi.x,0];return!Wo(e,Fi,Oi,ki,Dr)||(e=[1,0,0,0,1,0,0,0,1],!Wo(e,Fi,Oi,ki,Dr))?!1:(Ur.crossVectors(Gn,Wn),e=[Ur.x,Ur.y,Ur.z],Wo(e,Fi,Oi,ki,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Rn=[new D,new D,new D,new D,new D,new D,new D,new D],hn=new D,Lr=new jn,Fi=new D,Oi=new D,ki=new D,Gn=new D,Wn=new D,hi=new D,Ss=new D,Dr=new D,Ur=new D,ui=new D;function Wo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ui.fromArray(i,r);let o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var vd=new jn,Es=new D,$o=new D,Qi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);let e=Es.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add($o)),this.expandByPoint(Es.copy(t.center).sub($o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},In=new D,Xo=new D,Nr=new D,$n=new D,qo=new D,Fr=new D,Yo=new D,Os=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xo.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Xo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Nr),o=$n.dot(this.direction),l=-$n.dot(Nr),c=$n.lengthSq(),h=Math.abs(1-a*a),u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let b=1/h;u*=b,f*=b,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xo).addScaledVector(Nr,f),p}intersectSphere(t,e){In.subVectors(t.center,this.origin);let n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){qo.subVectors(e,t),Fr.subVectors(n,t),Yo.crossVectors(qo,Fr);let a=this.direction.dot(Yo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,t);let l=o*this.direction.dot(Fr.crossVectors($n,Fr));if(l<0)return null;let c=o*this.direction.dot(qo.cross($n));if(c<0||l+c>a)return null;let h=-o*$n.dot(Yo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,g,b,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,b,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,b,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=b,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*u,g=o*h,b=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-b*c,e[9]=-o*l,e[2]=b-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,g=c*h,b=c*u;e[0]=f+b*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=b+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,g=c*h,b=c*u;e[0]=f-b*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=b-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,p=a*u,g=o*h,b=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+b,e[1]=l*u,e[5]=b*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,g=o*l,b=o*c;e[0]=l*h,e[4]=b-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-b*u}else if(t.order==="XZY"){let f=a*l,p=a*c,g=o*l,b=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+b,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,xd)}lookAt(t,e,n){let s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Xn.crossVectors(n,qe),Xn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Xn.crossVectors(n,qe)),Xn.normalize(),Or.crossVectors(qe,Xn),s[0]=Xn.x,s[4]=Or.x,s[8]=qe.x,s[1]=Xn.y,s[5]=Or.y,s[9]=qe.y,s[2]=Xn.z,s[6]=Or.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],b=n[6],m=n[10],d=n[14],v=n[3],y=n[7],x=n[11],A=n[15],C=s[0],R=s[4],U=s[8],E=s[12],S=s[1],I=s[5],k=s[9],V=s[13],X=s[2],q=s[6],$=s[10],it=s[14],G=s[3],ut=s[7],vt=s[11],Mt=s[15];return r[0]=a*C+o*S+l*X+c*G,r[4]=a*R+o*I+l*q+c*ut,r[8]=a*U+o*k+l*$+c*vt,r[12]=a*E+o*V+l*it+c*Mt,r[1]=h*C+u*S+f*X+p*G,r[5]=h*R+u*I+f*q+p*ut,r[9]=h*U+u*k+f*$+p*vt,r[13]=h*E+u*V+f*it+p*Mt,r[2]=g*C+b*S+m*X+d*G,r[6]=g*R+b*I+m*q+d*ut,r[10]=g*U+b*k+m*$+d*vt,r[14]=g*E+b*V+m*it+d*Mt,r[3]=v*C+y*S+x*X+A*G,r[7]=v*R+y*I+x*q+A*ut,r[11]=v*U+y*k+x*$+A*vt,r[15]=v*E+y*V+x*it+A*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],b=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+b*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],b=t[13],m=t[14],d=t[15],v=u*m*c-b*f*c+b*l*p-o*m*p-u*l*d+o*f*d,y=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,x=h*b*c-g*u*c+g*o*p-a*b*p-h*o*d+a*u*d,A=g*u*l-h*b*l-g*o*f+a*b*f+h*o*m-a*u*m,C=e*v+n*y+s*x+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return t[0]=v*R,t[1]=(b*f*r-u*m*r-b*s*p+n*m*p+u*s*d-n*f*d)*R,t[2]=(o*m*r-b*l*r+b*s*c-n*m*c-o*s*d+n*l*d)*R,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*R,t[4]=y*R,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*R,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*R,t[8]=x*R,t[9]=(g*u*r-h*b*r-g*n*p+e*b*p+h*n*d-e*u*d)*R,t[10]=(a*b*r-g*o*r+g*n*c-e*b*c-a*n*d+e*o*d)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*R,t[12]=A*R,t[13]=(h*b*s-g*u*s+g*n*f-e*b*f-h*n*m+e*u*m)*R,t[14]=(g*o*s-a*b*s-g*n*l+e*b*l+a*n*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,b=a*h,m=a*u,d=o*u,v=l*c,y=l*h,x=l*u,A=n.x,C=n.y,R=n.z;return s[0]=(1-(b+d))*A,s[1]=(p+x)*A,s[2]=(g-y)*A,s[3]=0,s[4]=(p-x)*C,s[5]=(1-(f+d))*C,s[6]=(m+v)*C,s[7]=0,s[8]=(g+y)*R,s[9]=(m-v)*R,s[10]=(1-(f+b))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Bi.set(s[0],s[1],s[2]).length(),a=Bi.set(s[4],s[5],s[6]).length(),o=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);let c=1/r,h=1/a,u=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=fn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),g,b;if(l)g=r/(a-r),b=a*r/(a-r);else if(o===fn)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Us)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=fn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),g,b;if(l)g=1/(a-r),b=a/(a-r);else if(o===fn)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===Us)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Bi=new D,un=new me,yd=new D(0,0,0),xd=new D(1,1,1),Xn=new D,Or=new D,qe=new D,Lc=new me,Dc=new On,mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var ts=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bd=0,Uc=new D,zi=new On,Pn=new me,kr=new D,ws=new D,Md=new D,Sd=new On,Nc=new D(1,0,0),Fc=new D(0,1,0),Oc=new D(0,0,1),kc={type:"added"},Ed={type:"removed"},Hi={type:"childadded",child:null},Jo={type:"childremoved",child:null},Ue=class i extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new mn,n=new On,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Ht}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(Nc,t)}rotateY(t){return this.rotateOnAxis(Fc,t)}rotateZ(t){return this.rotateOnAxis(Oc,t)}translateOnAxis(t,e){return Uc.copy(t).applyQuaternion(this.quaternion),this.position.add(Uc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nc,t)}translateY(t){return this.translateOnAxis(Fc,t)}translateZ(t){return this.translateOnAxis(Oc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ws,kr,this.up):Pn.lookAt(kr,ws,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(Pn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ed),Jo.child=t,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,Md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ue.DEFAULT_UP=new D(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new D,Ln=new D,Zo=new D,Dn=new D,Vi=new D,Gi=new D,Bc=new D,Ko=new D,jo=new D,Qo=new D,tl=new ge,el=new ge,nl=new ge,Jn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),dn.subVectors(t,e),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){dn.subVectors(s,e),Ln.subVectors(n,e),Zo.subVectors(t,e);let a=dn.dot(dn),o=dn.dot(Ln),l=dn.dot(Zo),c=Ln.dot(Ln),h=Ln.dot(Zo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return tl.setScalar(0),el.setScalar(0),nl.setScalar(0),tl.fromBufferAttribute(t,e),el.fromBufferAttribute(t,n),nl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(tl,r.x),a.addScaledVector(el,r.y),a.addScaledVector(nl,r.z),a}static isFrontFacing(t,e,n,s){return dn.subVectors(n,e),Ln.subVectors(t,e),dn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),dn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Vi.subVectors(s,n),Gi.subVectors(r,n),Ko.subVectors(t,n);let l=Vi.dot(Ko),c=Gi.dot(Ko);if(l<=0&&c<=0)return e.copy(n);jo.subVectors(t,s);let h=Vi.dot(jo),u=Gi.dot(jo);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Vi,a);Qo.subVectors(t,r);let p=Vi.dot(Qo),g=Gi.dot(Qo);if(g>=0&&p<=g)return e.copy(r);let b=p*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Gi,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Bc.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Bc,o);let d=1/(m+b+f);return a=b*d,o=f*d,e.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Br={h:0,s:0,l:0};function il(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Hl(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=il(a,r,t+1/3),this.g=il(a,r,t),this.b=il(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=Hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return te.workingToColorSpace(Le.copy(this),t),Math.round(Jt(Le.r*255,0,255))*65536+Math.round(Jt(Le.g*255,0,255))*256+Math.round(Jt(Le.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Le.copy(this),e);let n=Le.r,s=Le.g,r=Le.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=ze){te.workingToColorSpace(Le.copy(this),t);let e=Le.r,n=Le.g,s=Le.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(Br);let n=Rs(qn.h,Br.h,e),s=Rs(qn.s,Br.s,e),r=Rs(qn.l,Br.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new Xt;Xt.NAMES=Hh;var wd=0,Qn=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=gi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=ea,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ta&&(n.blendSrc=this.blendSrc),this.blendDst!==ea&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ks=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new D,zr=new gt,Td=0,Je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Td++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ml,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ml&&(t.usage=this.usage),t}};var Bs=class extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var zs=class extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ad=0,nn=new me,sl=new Ue,Wi=new D,Ye=new jn,Ts=new jn,Ae=new D,rn=class i extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vl(t)?zs:Bs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return sl.lookAt(t),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(Ye.min,Ts.min),Ye.expandByPoint(Ae),Ae.addVectors(Ye.max,Ts.max),Ye.expandByPoint(Ae)):(Ye.expandByPoint(Ts.min),Ye.expandByPoint(Ts.max))}Ye.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ae.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),Ae.add(Wi)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new D,l[U]=new D;let c=new D,h=new D,u=new D,f=new gt,p=new gt,g=new gt,b=new D,m=new D;function d(U,E,S){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),o[U].add(b),o[E].add(b),o[S].add(b),l[U].add(m),l[E].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let U=0,E=v.length;U<E;++U){let S=v[U],I=S.start,k=S.count;for(let V=I,X=I+k;V<X;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let y=new D,x=new D,A=new D,C=new D;function R(U){A.fromBufferAttribute(s,U),C.copy(A);let E=o[U];y.copy(E),y.sub(A.multiplyScalar(A.dot(E))).normalize(),x.crossVectors(C,E);let I=x.dot(l[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,I)}for(let U=0,E=v.length;U<E;++U){let S=v[U],I=S.start,k=S.count;for(let V=I,X=I+k;V<X;V+=3)R(t.getX(V+0)),R(t.getX(V+1)),R(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),b=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Je(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zc=new me,di=new Os,Hr=new Qi,Hc=new D,Vr=new D,Gr=new D,Wr=new D,rl=new D,$r=new D,Vc=new D,Xr=new D,Se=class extends Ue{constructor(t=new rn,e=new ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){$r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(rl.fromBufferAttribute(u,t),a?$r.addScaledVector(rl,h):$r.addScaledVector(rl.sub(e),h))}e.add($r)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(Hr.containsPoint(di.origin)===!1&&(di.intersectSphere(Hr,Hc)===null||di.origin.distanceToSquared(Hc)>(t.far-t.near)**2))&&(zc.copy(r).invert(),di.copy(t.ray).applyMatrix4(zc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,A=y;x<A;x+=3){let C=o.getX(x),R=o.getX(x+1),U=o.getX(x+2);s=qr(this,d,t,n,c,h,u,C,R,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=g,d=b;m<d;m+=3){let v=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=qr(this,a,t,n,c,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,A=y;x<A;x+=3){let C=x,R=x+1,U=x+2;s=qr(this,d,t,n,c,h,u,C,R,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=g,d=b;m<d;m+=3){let v=m,y=m+1,x=m+2;s=qr(this,a,t,n,c,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Cd(i,t,e,n,s,r,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Nn,o),l===null)return null;Xr.copy(o),Xr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Xr);return c<e.near||c>e.far?null:{distance:c,point:Xr.clone(),object:i}}function qr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Vr),i.getVertexPosition(l,Gr),i.getVertexPosition(c,Wr);let h=Cd(i,t,e,n,Vr,Gr,Wr,Vc);if(h){let u=new D;Jn.getBarycoord(Vc,Vr,Gr,Wr,u),s&&(h.uv=Jn.getInterpolatedAttribute(s,o,l,c,u,new gt)),r&&(h.uv1=Jn.getInterpolatedAttribute(r,o,l,c,u,new gt)),a&&(h.normal=Jn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new D,materialIndex:0};Jn.getNormal(Vr,Gr,Wr,f.normal),h.face=f,h.barycoord=u}return h}var es=class i extends rn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function g(b,m,d,v,y,x,A,C,R,U,E){let S=x/R,I=A/U,k=x/2,V=A/2,X=C/2,q=R+1,$=U+1,it=0,G=0,ut=new D;for(let vt=0;vt<$;vt++){let Mt=vt*I-V;for(let Bt=0;Bt<q;Bt++){let Kt=Bt*S-k;ut[b]=Kt*v,ut[m]=Mt*y,ut[d]=X,c.push(ut.x,ut.y,ut.z),ut[b]=0,ut[m]=0,ut[d]=C>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(Bt/R),u.push(1-vt/U),it+=1}}for(let vt=0;vt<U;vt++)for(let Mt=0;Mt<R;Mt++){let Bt=f+Mt+q*vt,Kt=f+Mt+q*(vt+1),j=f+(Mt+1)+q*(vt+1),st=f+(Mt+1)+q*vt;l.push(Bt,Kt,st),l.push(Kt,j,st),G+=6}o.addGroup(p,G,E),p+=G,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ne(i){let t={};for(let e=0;e<i.length;e++){let n=wi(i[e]);for(let s in n)t[s]=n[s]}return t}function Rd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Vh={clone:wi,merge:Ne},Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=Rd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Hs=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yn=new D,Gc=new gt,Wc=new gt,De=class extends Hs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Wc),e.subVectors(Wc,Gc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$i=-90,Xi=1,la=class extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De($i,Xi,t,e);s.layers=this.layers,this.add(s);let r=new De($i,Xi,t,e);r.layers=this.layers,this.add(r);let a=new De($i,Xi,t,e);a.layers=this.layers,this.add(a);let o=new De($i,Xi,t,e);o.layers=this.layers,this.add(o);let l=new De($i,Xi,t,e);l.layers=this.layers,this.add(l);let c=new De($i,Xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Vs=class extends Ze{constructor(t=[],e=Mi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ca=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new es(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:kn});r.uniforms.tEquirect.value=e;let a=new Se(s,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=pn),new la(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},xn=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ld={type:"move"},ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,n),d=this._getHandJoint(c,b);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ld)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Gs=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var al=new D,Dd=new D,Ud=new Ht,yn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=al.subVectors(n,e).cross(Dd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(al),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ud.getNormalMatrix(t),s=this.coplanarPoint(al).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new Qi,Nd=new gt(.5,.5),Yr=new D,is=class{constructor(t=new yn,e=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],b=r[9],m=r[10],d=r[11],v=r[12],y=r[13],x=r[14],A=r[15];if(s[0].setComponents(c-a,p-h,d-g,A-v).normalize(),s[1].setComponents(c+a,p+h,d+g,A+v).normalize(),s[2].setComponents(c+o,p+u,d+b,A+y).normalize(),s[3].setComponents(c-o,p-u,d-b,A-y).normalize(),n)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,p-f,d-m,A-x).normalize();else if(s[4].setComponents(c-l,p-f,d-m,A-x).normalize(),e===fn)s[5].setComponents(c+l,p+f,d+m,A+x).normalize();else if(e===Us)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){fi.center.set(0,0,0);let e=Nd.distanceTo(t.center);return fi.radius=.7071067811865476+e,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Yr.x=s.normal.x>0?t.max.x:t.min.x,Yr.y=s.normal.y>0?t.max.y:t.min.y,Yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ws=class extends Ze{constructor(t,e,n=si,s,r,a,o=sn,l=sn,c,h=Ji,u=1){if(h!==Ji&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ji(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},$s=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Xs=class i extends rn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,b=[],m=n/2,d=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(p,2));function v(){let x=new D,A=new D,C=0,R=(e-t)/n;for(let U=0;U<=r;U++){let E=[],S=U/r,I=S*(e-t)+t;for(let k=0;k<=s;k++){let V=k/s,X=V*l+o,q=Math.sin(X),$=Math.cos(X);A.x=I*q,A.y=-S*n+m,A.z=I*$,u.push(A.x,A.y,A.z),x.set(q,R,$).normalize(),f.push(x.x,x.y,x.z),p.push(V,1-S),E.push(g++)}b.push(E)}for(let U=0;U<s;U++)for(let E=0;E<r;E++){let S=b[E][U],I=b[E+1][U],k=b[E+1][U+1],V=b[E][U+1];(t>0||E!==0)&&(h.push(S,I,V),C+=3),(e>0||E!==r-1)&&(h.push(I,k,V),C+=3)}c.addGroup(d,C,0),d+=C}function y(x){let A=g,C=new gt,R=new D,U=0,E=x===!0?t:e,S=x===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;let I=g;for(let k=0;k<=s;k++){let X=k/s*l+o,q=Math.cos(X),$=Math.sin(X);R.x=E*$,R.y=m*S,R.z=E*q,u.push(R.x,R.y,R.z),f.push(0,S,0),C.x=q*.5+.5,C.y=$*.5*S+.5,p.push(C.x,C.y),g++}for(let k=0;k<s;k++){let V=A+k,X=I+k;x===!0?h.push(X,X+1,V):h.push(X+1,X,V),U+=3}c.addGroup(d,U,x===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ke=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new gt:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new me;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Jt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Jt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ss=class extends Ke{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new gt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ha=class extends ss{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Wl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Jr=new D,ol=new Wl,ll=new Wl,cl=new Wl,rs=class extends Ke{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Jr.subVectors(s[0],s[1]).add(s[0]),c=Jr);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),b=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),ol.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,b,m),ll.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,b,m),cl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ll.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),cl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ol.calc(l),ll.calc(l),cl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $c(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Fd(i,t){let e=1-i;return e*e*t}function Od(i,t){return 2*(1-i)*i*t}function kd(i,t){return i*i*t}function Is(i,t,e,n){return Fd(i,t)+Od(i,e)+kd(i,n)}function Bd(i,t){let e=1-i;return e*e*e*t}function zd(i,t){let e=1-i;return 3*e*e*i*t}function Hd(i,t){return 3*(1-i)*i*i*t}function Vd(i,t){return i*i*i*t}function Ps(i,t,e,n,s){return Bd(i,t)+zd(i,e)+Hd(i,n)+Vd(i,s)}var qs=class extends Ke{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(t,s.x,r.x,a.x,o.x),Ps(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ua=class extends Ke{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(t,s.x,r.x,a.x,o.x),Ps(t,s.y,r.y,a.y,o.y),Ps(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ys=class extends Ke{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},da=class extends Ke{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Js=class extends Ke{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(t,s.x,r.x,a.x),Is(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zs=class extends Ke{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(t,s.x,r.x,a.x),Is(t,s.y,r.y,a.y),Is(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ks=class extends Ke{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set($c(o,l.x,c.x,h.x,u.x),$c(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new gt().fromArray(s))}return this}},fa=Object.freeze({__proto__:null,ArcCurve:ha,CatmullRomCurve3:rs,CubicBezierCurve:qs,CubicBezierCurve3:ua,EllipseCurve:ss,LineCurve:Ys,LineCurve3:da,QuadraticBezierCurve:Js,QuadraticBezierCurve3:Zs,SplineCurve:Ks}),pa=class extends Ke{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new fa[s.type]().fromJSON(s))}return this}},js=class extends pa{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ys(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Js(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new qs(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ks(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ss(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},as=class extends js{constructor(t){super(t),this.uuid=Ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new js().fromJSON(s))}return this}};function Gd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Gh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Yd(i,t,r,e)),i.length>80*e){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){let p=i[f],g=i[f+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Qs(r,a,e,o,l,c,0),a}function Gh(i,t,e,n,s){let r;if(s===af(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Xc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Xc(a/n|0,i[a],i[a+1],r);return r&&os(r,r.next)&&(er(r),r=r.next),r}function yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(os(e,e.next)||pe(e.prev,e,e.next)===0)){if(er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Qd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?$d(i,n,s,r):Wd(i)){t.push(l.i,i.i,c.i),er(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Xd(yi(i),t),Qs(i,t,e,n,s,r,2)):a===2&&qd(i,t,e,n,s,r):Qs(yi(i),t,e,n,s,r,1);break}}}function Wd(i){let t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),p=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&As(s,o,r,l,a,c,g.x,g.y)&&pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $d(i,t,e,n){let s=i.prev,r=i,a=i.next;if(pe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=Math.min(o,l,c),g=Math.min(h,u,f),b=Math.max(o,l,c),m=Math.max(h,u,f),d=gl(p,g,t,e,n),v=gl(b,m,t,e,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=d&&x&&x.z<=v;){if(y.x>=p&&y.x<=b&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&As(o,h,l,u,c,f,y.x,y.y)&&pe(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=b&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&As(o,h,l,u,c,f,x.x,x.y)&&pe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=b&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&As(o,h,l,u,c,f,y.x,y.y)&&pe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=b&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&As(o,h,l,u,c,f,x.x,x.y)&&pe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Xd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!os(n,s)&&$h(n,e,e.next,s)&&tr(n,s)&&tr(s,n)&&(t.push(n.i,e.i,s.i),er(e),er(e.next),e=i=s),e=e.next}while(e!==i);return yi(e)}function qd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&nf(a,o)){let l=Xh(a,o);a=yi(a,a.next),l=yi(l,l.next),Qs(a,t,e,n,s,r,0),Qs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Yd(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Gh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ef(c))}s.sort(Jd);for(let r=0;r<s.length;r++)e=Zd(s[r],e);return e}function Jd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Zd(i,t){let e=Kd(i,t);if(!e)return t;let n=Xh(e,i);return yi(n,n.next),yi(e,e.next)}function Kd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(os(i,e))return e;do{if(os(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Wh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);tr(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&jd(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function jd(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function Qd(i,t,e,n){let s=i;do s.z===0&&(s.z=gl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,tf(s)}function tf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function gl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ef(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function As(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Wh(i,t,e,n,s,r,a,o)}function nf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!sf(i,t)&&(tr(i,t)&&tr(t,i)&&rf(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||os(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function os(i,t){return i.x===t.x&&i.y===t.y}function $h(i,t,e,n){let s=Kr(pe(i,t,e)),r=Kr(pe(i,t,n)),a=Kr(pe(e,n,i)),o=Kr(pe(e,n,t));return!!(s!==r&&a!==o||s===0&&Zr(i,e,t)||r===0&&Zr(i,n,t)||a===0&&Zr(e,i,n)||o===0&&Zr(e,t,n))}function Zr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Kr(i){return i>0?1:i<0?-1:0}function sf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$h(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function tr(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function rf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Xh(i,t){let e=_l(i.i,i.x,i.y),n=_l(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Xc(i,t,e,n){let s=_l(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _l(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function af(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var vl=class{static triangulate(t,e,n=2){return Gd(t,e,n)}},mi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];qc(t),Yc(n,t);let a=t.length;e.forEach(qc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Yc(n,e[l]);let o=vl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function qc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Yc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var nr=class i extends rn{constructor(t=new as([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:of,y,x=!1,A,C,R,U;d&&(y=d.getSpacedPoints(h),x=!0,f=!1,A=d.computeFrenetFrames(h,!1),C=new D,R=new D,U=new D),f||(m=0,p=0,g=0,b=0);let E=o.extractPoints(c),S=E.shape,I=E.holes;if(!mi.isClockWise(S)){S=S.reverse();for(let nt=0,Q=I.length;nt<Q;nt++){let K=I[nt];mi.isClockWise(K)&&(I[nt]=K.reverse())}}function V(nt){let K=10000000000000001e-36,Z=nt[0];for(let ft=1;ft<=nt.length;ft++){let rt=ft%nt.length,pt=nt[rt],Vt=pt.x-Z.x,zt=pt.y-Z.y,w=Vt*Vt+zt*zt,_=Math.max(Math.abs(pt.x),Math.abs(pt.y),Math.abs(Z.x),Math.abs(Z.y)),O=K*_*_;if(w<=O){nt.splice(rt,1),ft--;continue}Z=pt}}V(S),I.forEach(V);let X=I.length,q=S;for(let nt=0;nt<X;nt++){let Q=I[nt];S=S.concat(Q)}function $(nt,Q,K){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(Q,K)}let it=S.length;function G(nt,Q,K){let Z,ft,rt,pt=nt.x-Q.x,Vt=nt.y-Q.y,zt=K.x-nt.x,w=K.y-nt.y,_=pt*pt+Vt*Vt,O=pt*w-Vt*zt;if(Math.abs(O)>Number.EPSILON){let W=Math.sqrt(_),et=Math.sqrt(zt*zt+w*w),Y=Q.x-Vt/W,Pt=Q.y+pt/W,ht=K.x-w/et,Ct=K.y+zt/et,Rt=((ht-Y)*w-(Ct-Pt)*zt)/(pt*w-Vt*zt);Z=Y+pt*Rt-nt.x,ft=Pt+Vt*Rt-nt.y;let at=Z*Z+ft*ft;if(at<=2)return new gt(Z,ft);rt=Math.sqrt(at/2)}else{let W=!1;pt>Number.EPSILON?zt>Number.EPSILON&&(W=!0):pt<-Number.EPSILON?zt<-Number.EPSILON&&(W=!0):Math.sign(Vt)===Math.sign(w)&&(W=!0),W?(Z=-Vt,ft=pt,rt=Math.sqrt(_)):(Z=pt,ft=Vt,rt=Math.sqrt(_/2))}return new gt(Z/rt,ft/rt)}let ut=[];for(let nt=0,Q=q.length,K=Q-1,Z=nt+1;nt<Q;nt++,K++,Z++)K===Q&&(K=0),Z===Q&&(Z=0),ut[nt]=G(q[nt],q[K],q[Z]);let vt=[],Mt,Bt=ut.concat();for(let nt=0,Q=X;nt<Q;nt++){let K=I[nt];Mt=[];for(let Z=0,ft=K.length,rt=ft-1,pt=Z+1;Z<ft;Z++,rt++,pt++)rt===ft&&(rt=0),pt===ft&&(pt=0),Mt[Z]=G(K[Z],K[rt],K[pt]);vt.push(Mt),Bt=Bt.concat(Mt)}let Kt;if(m===0)Kt=mi.triangulateShape(q,I);else{let nt=[],Q=[];for(let K=0;K<m;K++){let Z=K/m,ft=p*Math.cos(Z*Math.PI/2),rt=g*Math.sin(Z*Math.PI/2)+b;for(let pt=0,Vt=q.length;pt<Vt;pt++){let zt=$(q[pt],ut[pt],rt);At(zt.x,zt.y,-ft),Z===0&&nt.push(zt)}for(let pt=0,Vt=X;pt<Vt;pt++){let zt=I[pt];Mt=vt[pt];let w=[];for(let _=0,O=zt.length;_<O;_++){let W=$(zt[_],Mt[_],rt);At(W.x,W.y,-ft),Z===0&&w.push(W)}Z===0&&Q.push(w)}}Kt=mi.triangulateShape(nt,Q)}let j=Kt.length,st=g+b;for(let nt=0;nt<it;nt++){let Q=f?$(S[nt],Bt[nt],st):S[nt];x?(R.copy(A.normals[0]).multiplyScalar(Q.x),C.copy(A.binormals[0]).multiplyScalar(Q.y),U.copy(y[0]).add(R).add(C),At(U.x,U.y,U.z)):At(Q.x,Q.y,0)}for(let nt=1;nt<=h;nt++)for(let Q=0;Q<it;Q++){let K=f?$(S[Q],Bt[Q],st):S[Q];x?(R.copy(A.normals[nt]).multiplyScalar(K.x),C.copy(A.binormals[nt]).multiplyScalar(K.y),U.copy(y[nt]).add(R).add(C),At(U.x,U.y,U.z)):At(K.x,K.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){let Q=nt/m,K=p*Math.cos(Q*Math.PI/2),Z=g*Math.sin(Q*Math.PI/2)+b;for(let ft=0,rt=q.length;ft<rt;ft++){let pt=$(q[ft],ut[ft],Z);At(pt.x,pt.y,u+K)}for(let ft=0,rt=I.length;ft<rt;ft++){let pt=I[ft];Mt=vt[ft];for(let Vt=0,zt=pt.length;Vt<zt;Vt++){let w=$(pt[Vt],Mt[Vt],Z);x?At(w.x,w.y+y[h-1].y,y[h-1].x+K):At(w.x,w.y,u+K)}}}B(),J();function B(){let nt=s.length/3;if(f){let Q=0,K=it*Q;for(let Z=0;Z<j;Z++){let ft=Kt[Z];St(ft[2]+K,ft[1]+K,ft[0]+K)}Q=h+m*2,K=it*Q;for(let Z=0;Z<j;Z++){let ft=Kt[Z];St(ft[0]+K,ft[1]+K,ft[2]+K)}}else{for(let Q=0;Q<j;Q++){let K=Kt[Q];St(K[2],K[1],K[0])}for(let Q=0;Q<j;Q++){let K=Kt[Q];St(K[0]+it*h,K[1]+it*h,K[2]+it*h)}}n.addGroup(nt,s.length/3-nt,0)}function J(){let nt=s.length/3,Q=0;dt(q,Q),Q+=q.length;for(let K=0,Z=I.length;K<Z;K++){let ft=I[K];dt(ft,Q),Q+=ft.length}n.addGroup(nt,s.length/3-nt,1)}function dt(nt,Q){let K=nt.length;for(;--K>=0;){let Z=K,ft=K-1;ft<0&&(ft=nt.length-1);for(let rt=0,pt=h+m*2;rt<pt;rt++){let Vt=it*rt,zt=it*(rt+1),w=Q+Z+Vt,_=Q+ft+Vt,O=Q+ft+zt,W=Q+Z+zt;Wt(w,_,O,W)}}}function At(nt,Q,K){l.push(nt),l.push(Q),l.push(K)}function St(nt,Q,K){ne(nt),ne(Q),ne(K);let Z=s.length/3,ft=v.generateTopUV(n,s,Z-3,Z-2,Z-1);T(ft[0]),T(ft[1]),T(ft[2])}function Wt(nt,Q,K,Z){ne(nt),ne(Q),ne(Z),ne(Q),ne(K),ne(Z);let ft=s.length/3,rt=v.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);T(rt[0]),T(rt[1]),T(rt[3]),T(rt[1]),T(rt[2]),T(rt[3])}function ne(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function T(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return lf(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new fa[s.type]().fromJSON(s)),new i(n,t.options)}},of={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new gt(r,a),new gt(o,l),new gt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],b=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new gt(a,1-l),new gt(c,1-u),new gt(f,1-g),new gt(b,1-d)]:[new gt(o,1-l),new gt(h,1-u),new gt(p,1-g),new gt(m,1-d)]}};function lf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var xi=class i extends rn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],b=[],m=[];for(let d=0;d<h;d++){let v=d*f-a;for(let y=0;y<c;y++){let x=y*u-r;g.push(x,-v,0),b.push(0,0,1),m.push(y/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){let y=v+c*d,x=v+c*(d+1),A=v+1+c*(d+1),C=v+1+c*d;p.push(y,x,C),p.push(x,A,C)}this.setIndex(p),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(b,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ir=class i extends rn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new D,u=new D,f=new D;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let b=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(b),u.y=(t+e*Math.cos(m))*Math.sin(b),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(b),h.y=t*Math.sin(b),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let b=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,v=(s+1)*p+g;a.push(b,m,v),a.push(m,d,v)}this.setIndex(a),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var sr=class i extends rn{constructor(t=new Zs(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new gt,h=new D,u=[],f=[],p=[],g=[];b(),this.setIndex(g),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(p,2));function b(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),v(),d()}function m(y){h=t.getPointAt(y/e,h);let x=a.normals[y],A=a.binormals[y];for(let C=0;C<=s;C++){let R=C/s*Math.PI*2,U=Math.sin(R),E=-Math.cos(R);l.x=E*x.x+U*A.x,l.y=E*x.y+U*A.y,l.z=E*x.z+U*A.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function d(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){let A=(s+1)*(y-1)+(x-1),C=(s+1)*y+(x-1),R=(s+1)*y+x,U=(s+1)*(y-1)+x;g.push(A,C,U),g.push(C,R,U)}}function v(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)c.x=y/e,c.y=x/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new fa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ti=class extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ls=class extends ti{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ma=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ga=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function jr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function cf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var bi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_a=class extends bi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ul,endingEnd:ul}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case dl:r=t,o=2*e-n;break;case fl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case dl:a=t,l=2*n-e;break;case fl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),b=g*g,m=b*g,d=-f*m+2*f*b-f*g,v=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*b+.5*g,x=p*m-p*b;for(let A=0;A!==o;++A)r[A]=d*a[h+A]+v*a[c+A]+y*a[l+A]+x*a[u+A];return r}},va=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},ya=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},je=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jr(e,this.TimeBufferType),this.values=jr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:jr(t.times,Array),values:jr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _a(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ls:e=this.InterpolantFactoryMethodDiscrete;break;case sa:e=this.InterpolantFactoryMethodLinear;break;case Qr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return sa;case this.InterpolantFactoryMethodSmooth:return Qr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&cf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let b=e[u+g];if(b!==e[f+g]||b!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};je.prototype.ValueTypeName="";je.prototype.TimeBufferType=Float32Array;je.prototype.ValueBufferType=Float32Array;je.prototype.DefaultInterpolation=sa;var ei=class extends je{constructor(t,e,n){super(t,e,n)}};ei.prototype.ValueTypeName="bool";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=Ls;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends je{constructor(t,e,n,s){super(t,e,n,s)}};xa.prototype.ValueTypeName="color";var ba=class extends je{constructor(t,e,n,s){super(t,e,n,s)}};ba.prototype.ValueTypeName="number";var Ma=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)On.slerpFlat(r,0,a,c-o,a,c,l);return r}},rr=class extends je{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ma(this.times,this.values,this.getValueSize(),t)}};rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends je{constructor(t,e,n){super(t,e,n)}};ni.prototype.ValueTypeName="string";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Ls;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends je{constructor(t,e,n,s){super(t,e,n,s)}};Sa.prototype.ValueTypeName="vector";var Ea=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},qh=new Ea,wa=class{constructor(t){this.manager=t!==void 0?t:qh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},or=class extends ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},hl=new me,Jc=new D,Zc=new D,yl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jc),Zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zc),e.updateMatrixWorld(),hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var lr=class extends Hs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xl=class extends yl{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new xl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ta=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var $l="\\[\\]\\.:\\/",hf=new RegExp("["+$l+"]","g"),Xl="[^"+$l+"]",uf="[^"+$l.replace("\\.","")+"]",df=/((?:WC+[\/:])*)/.source.replace("WC",Xl),ff=/(WCOD+)?/.source.replace("WCOD",uf),pf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),mf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),gf=new RegExp("^"+df+ff+pf+mf+"$"),_f=["material","materials","bones","map"],bl=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hf,"")}static parseTrackName(t){let e=gf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_f.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=bl;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yv=new Float32Array(1);var Kc=new me,hr=class{constructor(t,e,n=0,s=1/0){this.ray=new Os(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Kc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kc),this}intersectObject(t,e=!0,n=[]){return Ml(t,this,n,e),n.sort(jc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ml(t[s],this,n,e);return n.sort(jc),n}};function jc(i,t){return i.distance-t.distance}function Ml(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ml(r[a],t,e,!0)}}function ql(i,t,e,n){let s=vf(n);switch(e){case Ul:return i*t;case Fl:return i*t/s.components*s.byteLength;case Ha:return i*t/s.components*s.byteLength;case Ol:return i*t*2/s.components*s.byteLength;case Va:return i*t*2/s.components*s.byteLength;case Nl:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case Ga:return i*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:case qa:return Math.max(i,16)*Math.max(t,8)/4;case Wa:case Xa:return Math.max(i,8)*Math.max(t,8)/2;case Ya:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case uo:case fo:case po:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mo:case go:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _o:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vf(i){switch(i){case _n:case Il:return{byteLength:1,components:1};case cs:case Pl:case hs:return{byteLength:2,components:1};case Ba:case za:return{byteLength:2,components:4};case si:case ka:case En:return{byteLength:4,components:1};case Ll:case Dl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function _u(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],b=u[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++f,u[f]=b)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let b=u[p];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mf=`#ifdef USE_ALPHAHASH
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
#endif`,Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Af=`#ifdef USE_AOMAP
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
#endif`,Cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
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
#endif`,If=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Df=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uf=`#ifdef USE_IRIDESCENCE
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
#endif`,Nf=`#ifdef USE_BUMPMAP
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wf=`#define PI 3.141592653589793
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
} // validated`,$f=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xf=`vec3 transformedNormal = objectNormal;
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
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qf=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
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
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dp=`uniform bool receiveShadow;
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
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
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
#endif`,yp=`struct PhysicalMaterial {
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
}`,xp=`
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
#endif`,bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ip=`#if defined( USE_POINTS_UV )
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
#endif`,Pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
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
#endif`,Op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
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
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rm=`float getShadowMask() {
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
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
}`,Cm=`#define DISTANCE
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
}`,Rm=`#define DISTANCE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Fm=`#define LAMBERT
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
}`,Om=`#define LAMBERT
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
}`,km=`#define MATCAP
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
}`,Bm=`#define MATCAP
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
}`,zm=`#define NORMAL
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
}`,Hm=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Gm=`#define PHONG
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
}`,Wm=`#define STANDARD
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
}`,$m=`#define STANDARD
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
}`,Xm=`#define TOON
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
}`,qm=`#define TOON
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
}`,Ym=`uniform float size;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Zm=`#include <common>
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
}`,Km=`uniform vec3 color;
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
}`,jm=`uniform float rotation;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:bf,alphahash_pars_fragment:Mf,alphamap_fragment:Sf,alphamap_pars_fragment:Ef,alphatest_fragment:wf,alphatest_pars_fragment:Tf,aomap_fragment:Af,aomap_pars_fragment:Cf,batching_pars_vertex:Rf,batching_vertex:If,begin_vertex:Pf,beginnormal_vertex:Lf,bsdfs:Df,iridescence_fragment:Uf,bumpmap_pars_fragment:Nf,clipping_planes_fragment:Ff,clipping_planes_pars_fragment:Of,clipping_planes_pars_vertex:kf,clipping_planes_vertex:Bf,color_fragment:zf,color_pars_fragment:Hf,color_pars_vertex:Vf,color_vertex:Gf,common:Wf,cube_uv_reflection_fragment:$f,defaultnormal_vertex:Xf,displacementmap_pars_vertex:qf,displacementmap_vertex:Yf,emissivemap_fragment:Jf,emissivemap_pars_fragment:Zf,colorspace_fragment:Kf,colorspace_pars_fragment:jf,envmap_fragment:Qf,envmap_common_pars_fragment:tp,envmap_pars_fragment:ep,envmap_pars_vertex:np,envmap_physical_pars_fragment:fp,envmap_vertex:ip,fog_vertex:sp,fog_pars_vertex:rp,fog_fragment:ap,fog_pars_fragment:op,gradientmap_pars_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:hp,lights_lambert_pars_fragment:up,lights_pars_begin:dp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:_p,lights_physical_fragment:vp,lights_physical_pars_fragment:yp,lights_fragment_begin:xp,lights_fragment_maps:bp,lights_fragment_end:Mp,logdepthbuf_fragment:Sp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:Tp,map_fragment:Ap,map_pars_fragment:Cp,map_particle_fragment:Rp,map_particle_pars_fragment:Ip,metalnessmap_fragment:Pp,metalnessmap_pars_fragment:Lp,morphinstance_vertex:Dp,morphcolor_vertex:Up,morphnormal_vertex:Np,morphtarget_pars_vertex:Fp,morphtarget_vertex:Op,normal_fragment_begin:kp,normal_fragment_maps:Bp,normal_pars_fragment:zp,normal_pars_vertex:Hp,normal_vertex:Vp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:$p,clearcoat_pars_fragment:Xp,iridescence_pars_fragment:qp,opaque_fragment:Yp,packing:Jp,premultiplied_alpha_fragment:Zp,project_vertex:Kp,dithering_fragment:jp,dithering_pars_fragment:Qp,roughnessmap_fragment:tm,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:sm,shadowmask_pars_fragment:rm,skinbase_vertex:am,skinning_pars_vertex:om,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:hm,specularmap_pars_fragment:um,tonemapping_fragment:dm,tonemapping_pars_fragment:fm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:_m,uv_vertex:vm,worldpos_vertex:ym,background_vert:xm,background_frag:bm,backgroundCube_vert:Mm,backgroundCube_frag:Sm,cube_vert:Em,cube_frag:wm,depth_vert:Tm,depth_frag:Am,distanceRGBA_vert:Cm,distanceRGBA_frag:Rm,equirect_vert:Im,equirect_frag:Pm,linedashed_vert:Lm,linedashed_frag:Dm,meshbasic_vert:Um,meshbasic_frag:Nm,meshlambert_vert:Fm,meshlambert_frag:Om,meshmatcap_vert:km,meshmatcap_frag:Bm,meshnormal_vert:zm,meshnormal_frag:Hm,meshphong_vert:Vm,meshphong_frag:Gm,meshphysical_vert:Wm,meshphysical_frag:$m,meshtoon_vert:Xm,meshtoon_frag:qm,points_vert:Ym,points_frag:Jm,shadow_vert:Zm,shadow_frag:Km,sprite_vert:jm,sprite_frag:Qm},_t={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},wn={basic:{uniforms:Ne([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ne([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ne([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ne([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ne([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ne([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ne([_t.points,_t.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ne([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ne([_t.common,_t.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ne([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ne([_t.sprite,_t.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ne([_t.common,_t.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ne([_t.lights,_t.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};wn.physical={uniforms:Ne([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var yo={r:0,b:0,g:0},Ti=new mn,tg=new me;function eg(i,t,e,n,s,r,a){let o=new Xt(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function b(y){let x=!1,A=g(y);A===null?d(o,l):A&&A.isColor&&(d(A,1),x=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){let A=g(x);A&&(A.isCubeTexture||A.mapping===ur)?(h===void 0&&(h=new Se(new es(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:wi(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ti.copy(x.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tg.makeRotationFromEuler(Ti)),h.material.toneMapped=te.getTransfer(A.colorSpace)!==se,(u!==A||f!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Se(new xi(2,2),new gn({name:"BackgroundMaterial",uniforms:wi(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=te.getTransfer(A.colorSpace)!==se,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,x){y.getRGB(yo,Gl(i)),n.buffers.color.setClear(yo.r,yo.g,yo.b,x,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:b,addToRenderList:m,dispose:v}}function ng(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(S,I,k,V,X){let q=!1,$=u(V,k,I);r!==$&&(r=$,c(r.object)),q=p(S,V,k,X),q&&g(S,V,k,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(S,I,k,V),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,I,k){let V=k.wireframe===!0,X=n[S.id];X===void 0&&(X={},n[S.id]=X);let q=X[I.id];q===void 0&&(q={},X[I.id]=q);let $=q[V];return $===void 0&&($=f(l()),q[V]=$),$}function f(S){let I=[],k=[],V=[];for(let X=0;X<e;X++)I[X]=0,k[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,I,k,V){let X=r.attributes,q=I.attributes,$=0,it=k.getAttributes();for(let G in it)if(it[G].location>=0){let vt=X[G],Mt=q[G];if(Mt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Mt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Mt=S.instanceColor)),vt===void 0||vt.attribute!==Mt||Mt&&vt.data!==Mt.data)return!0;$++}return r.attributesNum!==$||r.index!==V}function g(S,I,k,V){let X={},q=I.attributes,$=0,it=k.getAttributes();for(let G in it)if(it[G].location>=0){let vt=q[G];vt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor));let Mt={};Mt.attribute=vt,vt&&vt.data&&(Mt.data=vt.data),X[G]=Mt,$++}r.attributes=X,r.attributesNum=$,r.index=V}function b(){let S=r.newAttributes;for(let I=0,k=S.length;I<k;I++)S[I]=0}function m(S){d(S,0)}function d(S,I){let k=r.newAttributes,V=r.enabledAttributes,X=r.attributeDivisors;k[S]=1,V[S]===0&&(i.enableVertexAttribArray(S),V[S]=1),X[S]!==I&&(i.vertexAttribDivisor(S,I),X[S]=I)}function v(){let S=r.newAttributes,I=r.enabledAttributes;for(let k=0,V=I.length;k<V;k++)I[k]!==S[k]&&(i.disableVertexAttribArray(k),I[k]=0)}function y(S,I,k,V,X,q,$){$===!0?i.vertexAttribIPointer(S,I,k,X,q):i.vertexAttribPointer(S,I,k,V,X,q)}function x(S,I,k,V){b();let X=V.attributes,q=k.getAttributes(),$=I.defaultAttributeValues;for(let it in q){let G=q[it];if(G.location>=0){let ut=X[it];if(ut===void 0&&(it==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),it==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),ut!==void 0){let vt=ut.normalized,Mt=ut.itemSize,Bt=t.get(ut);if(Bt===void 0)continue;let Kt=Bt.buffer,j=Bt.type,st=Bt.bytesPerElement,B=j===i.INT||j===i.UNSIGNED_INT||ut.gpuType===ka;if(ut.isInterleavedBufferAttribute){let J=ut.data,dt=J.stride,At=ut.offset;if(J.isInstancedInterleavedBuffer){for(let St=0;St<G.locationSize;St++)d(G.location+St,J.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let St=0;St<G.locationSize;St++)m(G.location+St);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let St=0;St<G.locationSize;St++)y(G.location+St,Mt/G.locationSize,j,vt,dt*st,(At+Mt/G.locationSize*St)*st,B)}else{if(ut.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)d(G.location+J,ut.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let J=0;J<G.locationSize;J++)m(G.location+J);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let J=0;J<G.locationSize;J++)y(G.location+J,Mt/G.locationSize,j,vt,Mt*st,Mt/G.locationSize*J*st,B)}}else if($!==void 0){let vt=$[it];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(G.location,vt);break;case 3:i.vertexAttrib3fv(G.location,vt);break;case 4:i.vertexAttrib4fv(G.location,vt);break;default:i.vertexAttrib1fv(G.location,vt)}}}}v()}function A(){U();for(let S in n){let I=n[S];for(let k in I){let V=I[k];for(let X in V)h(V[X].object),delete V[X];delete I[k]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;let I=n[S.id];for(let k in I){let V=I[k];for(let X in V)h(V[X].object),delete V[X];delete I[k]}delete n[S.id]}function R(S){for(let I in n){let k=n[I];if(k[S.id]===void 0)continue;let V=k[S.id];for(let X in V)h(V[X].object),delete V[X];delete k[S.id]}}function U(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function ig(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b]*f[b];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==an&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let U=R===hs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==_n&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==En&&!U)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:A,maxSamples:C}}function rg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new yn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,y=v*4,x=d.clippingState||null;l.value=x,x=h(g,f,y,p);for(let A=0;A!==y;++A)x[A]=e[A];d.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let d=p+b*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==b;++y,x+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}function ag(i){let t=new WeakMap;function e(a,o){return o===Na?a.mapping=Mi:o===Fa&&(a.mapping=Si),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Na||o===Fa)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ca(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ps=4,Yh=[.125,.215,.35,.446,.526,.582],Ri=20,Yl=new lr,Jh=new Xt,Jl=null,Zl=0,Kl=0,jl=!1,Ci=(1+Math.sqrt(5))/2,fs=1/Ci,Zh=[new D(-Ci,fs,0),new D(Ci,fs,0),new D(-fs,0,Ci),new D(fs,0,Ci),new D(0,Ci,-fs),new D(0,Ci,fs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],og=new D,Mo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=og}=r;Jl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jl,Zl,Kl),this._renderer.xr.enabled=jl,t.scissorTest=!1,xo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===Si?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:hs,format:an,colorSpace:vi,depthBuffer:!1},s=Kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lg(r)),this._blurMaterial=cg(r,t,e)}return s}_compileMaterial(t){let e=new Se(this._lodPlanes[0],t);this._renderer.compile(e,Yl)}_sceneToCubeUV(t,e,n,s,r){let l=new De(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Jh),u.toneMapping=Bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let b=new ks({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),m=new Se(new es,b),d=!1,v=t.background;v?v.isColor&&(b.color.copy(v),t.background=null,d=!0):(b.color.copy(Jh),d=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let A=this._cubeSize;xo(s,x*A,y>2?A:0,A,A),u.setRenderTarget(s),d&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Mi||t.mapping===Si;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;xo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Yl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zh[(s-r-1)%Zh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Se(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);let d=[],v=0;for(let R=0;R<Ri;++R){let U=R/b,E=Math.exp(-U*U/2);d.push(E),R===0?v+=E:R<m&&(v+=2*E)}for(let R=0;R<d.length;R++)d[R]=d[R]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let x=this._sizeLods[s],A=3*x*(s>y-ps?s-y+ps:0),C=4*(this._cubeSize-x);xo(e,A,C,3*x,2*x),l.setRenderTarget(e),l.render(u,Yl)}};function lg(i){let t=[],e=[],n=[],s=i,r=i-ps+1+Yh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ps?l=Yh[a-i+ps-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,b=3,m=2,d=1,v=new Float32Array(b*g*p),y=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let C=0;C<p;C++){let R=C%3*2/3-1,U=C>2?0:-1,E=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];v.set(E,b*g*C),y.set(f,m*g*C);let S=[C,C,C,C,C,C];x.set(S,d*g*C)}let A=new rn;A.setAttribute("position",new Je(v,b)),A.setAttribute("uv",new Je(y,m)),A.setAttribute("faceIndex",new Je(x,d)),t.push(A),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kh(i,t,e){let n=new bn(i,t,e);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cg(i,t,e){let n=new Float32Array(Ri),s=new D(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lc(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function jh(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Qh(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function hg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Na||l===Fa,h=l===Mi||l===Si;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Mo(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Mo(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ug(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ki("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dg(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(u){let f=[],p=u.index,g=u.attributes.position,b=0;if(p!==null){let v=p.array;b=p.version;for(let y=0,x=v.length;y<x;y+=3){let A=v[y+0],C=v[y+1],R=v[y+2];f.push(A,C,C,R,R,A)}}else if(g!==void 0){let v=g.array;b=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){let A=y+0,C=y+1,R=y+2;f.push(A,C,C,R,R,A)}}else return;let m=new(Vl(f)?zs:Bs)(f,1);m.version=b;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function fg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,b){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],b[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,b,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*b[v];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function pg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function mg(i,t,e){let n=new WeakMap,s=new ge;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let E=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),b===!0&&(y=3);let x=o.attributes.position.count*y,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let C=new Float32Array(x*A*4*u),R=new Fs(C,x,A,u);R.type=En,R.needsUpdate=!0;let U=y*4;for(let S=0;S<u;S++){let I=m[S],k=d[S],V=v[S],X=x*A*4*S;for(let q=0;q<I.count;q++){let $=q*U;p===!0&&(s.fromBufferAttribute(I,q),C[X+$+0]=s.x,C[X+$+1]=s.y,C[X+$+2]=s.z,C[X+$+3]=0),g===!0&&(s.fromBufferAttribute(k,q),C[X+$+4]=s.x,C[X+$+5]=s.y,C[X+$+6]=s.z,C[X+$+7]=0),b===!0&&(s.fromBufferAttribute(V,q),C[X+$+8]=s.x,C[X+$+9]=s.y,C[X+$+10]=s.z,C[X+$+11]=V.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new gt(x,A)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function gg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var vu=new Ze,tu=new Ws(1,1),yu=new Fs,xu=new oa,bu=new Vs,eu=[],nu=[],iu=new Float32Array(16),su=new Float32Array(9),ru=new Float32Array(4);function gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Eo(i,t){let e=nu[t];e===void 0&&(e=new Int32Array(t),nu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;ru.set(n),i.uniformMatrix2fv(this.addr,!1,ru),we(e,n)}}function Mg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;su.set(n),i.uniformMatrix3fv(this.addr,!1,su),we(e,n)}}function Sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;iu.set(n),i.uniformMatrix4fv(this.addr,!1,iu),we(e,n)}}function Eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function Cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function Lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tu.compareFunction=Bl,r=tu):r=vu,e.setTexture2D(t||r,s)}function Dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xu,s)}function Ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bu,s)}function Ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yu,s)}function Fg(i){switch(i){case 5126:return _g;case 35664:return vg;case 35665:return yg;case 35666:return xg;case 35674:return bg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return Eg;case 35667:case 35671:return wg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Cg;case 36294:return Rg;case 36295:return Ig;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ng}}function Og(i,t){i.uniform1fv(this.addr,t)}function kg(i,t){let e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function Bg(i,t){let e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function zg(i,t){let e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function Hg(i,t){let e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Vg(i,t){let e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gg(i,t){let e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Wg(i,t){i.uniform1iv(this.addr,t)}function $g(i,t){i.uniform2iv(this.addr,t)}function Xg(i,t){i.uniform3iv(this.addr,t)}function qg(i,t){i.uniform4iv(this.addr,t)}function Yg(i,t){i.uniform1uiv(this.addr,t)}function Jg(i,t){i.uniform2uiv(this.addr,t)}function Zg(i,t){i.uniform3uiv(this.addr,t)}function Kg(i,t){i.uniform4uiv(this.addr,t)}function jg(i,t,e){let n=this.cache,s=t.length,r=Eo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||vu,r[a])}function Qg(i,t,e){let n=this.cache,s=t.length,r=Eo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||xu,r[a])}function t_(i,t,e){let n=this.cache,s=t.length,r=Eo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||bu,r[a])}function e_(i,t,e){let n=this.cache,s=t.length,r=Eo(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||yu,r[a])}function n_(i){switch(i){case 5126:return Og;case 35664:return kg;case 35665:return Bg;case 35666:return zg;case 35674:return Hg;case 35675:return Vg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return $g;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return Jg;case 36295:return Zg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}var tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fg(e.type)}},ec=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=n_(e.type)}},nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ql=/(\w+)(\])?(\[|\.)?/g;function au(i,t){i.seq.push(t),i.map[t.id]=t}function i_(i,t,e){let n=i.name,s=n.length;for(Ql.lastIndex=0;;){let r=Ql.exec(n),a=Ql.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){au(e,c===void 0?new tc(o,i,t):new ec(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new nc(o),au(e,u)),e=u}}}var ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);i_(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ou(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var s_=37297,r_=0;function a_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var lu=new Ht;function o_(i){te._getMatrix(lu,te.workingColorSpace,i);let t=`mat3( ${lu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Ds:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+a_(i.getShaderSource(t),o)}else return r}function l_(i,t){let e=o_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function c_(i,t){let e;switch(t){case Mh:e="Linear";break;case Sh:e="Reinhard";break;case Eh:e="Cineon";break;case Ua:e="ACESFilmic";break;case Th:e="AgX";break;case Ah:e="Neutral";break;case wh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var bo=new D;function h_(){te.getLuminanceCoefficients(bo);let i=bo.x.toFixed(4),t=bo.y.toFixed(4),e=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function d_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function f_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function vr(i){return i!==""}function hu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var p_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(i){return i.replace(p_,g_)}var m_=new Map;function g_(i,t){let e=qt[t];if(e===void 0){let n=m_.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ic(e)}var __=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(i){return i.replace(__,v_)}function v_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fu(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function y_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===El?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function x_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Mi:case Si:t="ENVMAP_TYPE_CUBE";break;case ur:t="ENVMAP_TYPE_CUBE_UV";break}return t}function b_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Si&&(t="ENVMAP_MODE_REFRACTION"),t}function M_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cl:t="ENVMAP_BLENDING_MULTIPLY";break;case xh:t="ENVMAP_BLENDING_MIX";break;case bh:t="ENVMAP_BLENDING_ADD";break}return t}function S_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function E_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=y_(e),c=x_(e),h=b_(e),u=M_(e),f=S_(e),p=u_(e),g=d_(r),b=s.createProgram(),m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vr).join(`
`),d.length>0&&(d+=`
`)):(m=[fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),d=[fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?c_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,l_("linearToOutputTexel",e.outputColorSpace),h_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),a=ic(a),a=hu(a,e),a=uu(a,e),o=ic(o),o=hu(o,e),o=uu(o,e),a=du(a),o=du(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=v+m+a,x=v+d+o,A=ou(s,s.VERTEX_SHADER,y),C=ou(s,s.FRAGMENT_SHADER,x);s.attachShader(b,A),s.attachShader(b,C),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function R(I){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(b)||"",V=s.getShaderInfoLog(A)||"",X=s.getShaderInfoLog(C)||"",q=k.trim(),$=V.trim(),it=X.trim(),G=!0,ut=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,A,C);else{let vt=cu(s,A,"vertex"),Mt=cu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+q+`
`+vt+`
`+Mt)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):($===""||it==="")&&(ut=!1);ut&&(I.diagnostics={runnable:G,programLog:q,vertexShader:{log:$,prefix:m},fragmentShader:{log:it,prefix:d}})}s.deleteShader(A),s.deleteShader(C),U=new ms(s,b),E=f_(s,b)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(b,s_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=r_++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=C,this}var w_=0,sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rc(t),e.set(t,n)),n}},rc=class{constructor(t){this.id=w_++,this.code=t,this.usedTimes=0}};function T_(i,t,e,n,s,r,a){let o=new ts,l=new sc,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,I,k,V){let X=k.fog,q=V.geometry,$=E.isMeshStandardMaterial?k.environment:null,it=(E.isMeshStandardMaterial?e:t).get(E.envMap||$),G=it&&it.mapping===ur?it.image.height:null,ut=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let vt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Mt=vt!==void 0?vt.length:0,Bt=0;q.morphAttributes.position!==void 0&&(Bt=1),q.morphAttributes.normal!==void 0&&(Bt=2),q.morphAttributes.color!==void 0&&(Bt=3);let Kt,j,st,B;if(ut){let ie=wn[ut];Kt=ie.vertexShader,j=ie.fragmentShader}else Kt=E.vertexShader,j=E.fragmentShader,l.update(E),st=l.getVertexShaderID(E),B=l.getFragmentShaderID(E);let J=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),At=V.isInstancedMesh===!0,St=V.isBatchedMesh===!0,Wt=!!E.map,ne=!!E.matcap,T=!!it,nt=!!E.aoMap,Q=!!E.lightMap,K=!!E.bumpMap,Z=!!E.normalMap,ft=!!E.displacementMap,rt=!!E.emissiveMap,pt=!!E.metalnessMap,Vt=!!E.roughnessMap,zt=E.anisotropy>0,w=E.clearcoat>0,_=E.dispersion>0,O=E.iridescence>0,W=E.sheen>0,et=E.transmission>0,Y=zt&&!!E.anisotropyMap,Pt=w&&!!E.clearcoatMap,ht=w&&!!E.clearcoatNormalMap,Ct=w&&!!E.clearcoatRoughnessMap,Rt=O&&!!E.iridescenceMap,at=O&&!!E.iridescenceThicknessMap,bt=W&&!!E.sheenColorMap,Ot=W&&!!E.sheenRoughnessMap,Lt=!!E.specularMap,yt=!!E.specularColorMap,$t=!!E.specularIntensityMap,P=et&&!!E.transmissionMap,ct=et&&!!E.thicknessMap,mt=!!E.gradientMap,wt=!!E.alphaMap,ot=E.alphaTest>0,tt=!!E.alphaHash,It=!!E.extensions,Gt=Bn;E.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Gt=i.toneMapping);let le={shaderID:ut,shaderType:E.type,shaderName:E.name,vertexShader:Kt,fragmentShader:j,defines:E.defines,customVertexShaderID:st,customFragmentShaderID:B,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:St,batchingColor:St&&V._colorsTexture!==null,instancing:At,instancingColor:At&&V.instanceColor!==null,instancingMorph:At&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:vi,alphaToCoverage:!!E.alphaToCoverage,map:Wt,matcap:ne,envMap:T,envMapMode:T&&it.mapping,envMapCubeUVHeight:G,aoMap:nt,lightMap:Q,bumpMap:K,normalMap:Z,displacementMap:f&&ft,emissiveMap:rt,normalMapObjectSpace:Z&&E.normalMapType===Ph,normalMapTangentSpace:Z&&E.normalMapType===kl,metalnessMap:pt,roughnessMap:Vt,anisotropy:zt,anisotropyMap:Y,clearcoat:w,clearcoatMap:Pt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Ct,dispersion:_,iridescence:O,iridescenceMap:Rt,iridescenceThicknessMap:at,sheen:W,sheenColorMap:bt,sheenRoughnessMap:Ot,specularMap:Lt,specularColorMap:yt,specularIntensityMap:$t,transmission:et,transmissionMap:P,thicknessMap:ct,gradientMap:mt,opaque:E.transparent===!1&&E.blending===gi&&E.alphaToCoverage===!1,alphaMap:wt,alphaTest:ot,alphaHash:tt,combine:E.combine,mapUv:Wt&&b(E.map.channel),aoMapUv:nt&&b(E.aoMap.channel),lightMapUv:Q&&b(E.lightMap.channel),bumpMapUv:K&&b(E.bumpMap.channel),normalMapUv:Z&&b(E.normalMap.channel),displacementMapUv:ft&&b(E.displacementMap.channel),emissiveMapUv:rt&&b(E.emissiveMap.channel),metalnessMapUv:pt&&b(E.metalnessMap.channel),roughnessMapUv:Vt&&b(E.roughnessMap.channel),anisotropyMapUv:Y&&b(E.anisotropyMap.channel),clearcoatMapUv:Pt&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:ht&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:at&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&b(E.sheenRoughnessMap.channel),specularMapUv:Lt&&b(E.specularMap.channel),specularColorMapUv:yt&&b(E.specularColorMap.channel),specularIntensityMapUv:$t&&b(E.specularIntensityMap.channel),transmissionMapUv:P&&b(E.transmissionMap.channel),thicknessMapUv:ct&&b(E.thicknessMap.channel),alphaMapUv:wt&&b(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Z||zt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!q.attributes.uv&&(Wt||wt),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:dt,skinning:V.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Wt&&E.map.isVideoTexture===!0&&te.getTransfer(E.map.colorSpace)===se,decodeVideoTextureEmissive:rt&&E.emissiveMap.isVideoTexture===!0&&te.getTransfer(E.emissiveMap.colorSpace)===se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Sn,flipSided:E.side===He,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:It&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&E.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function d(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(v(S,E),y(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){let S=g[E.type],I;if(S){let k=wn[S];I=Vh.clone(k.uniforms)}else I=E.uniforms;return I}function A(E,S){let I;for(let k=0,V=h.length;k<V;k++){let X=h[k];if(X.cacheKey===S){I=X,++I.usedTimes;break}}return I===void 0&&(I=new E_(i,S,E,r),h.push(I)),I}function C(E){if(--E.usedTimes===0){let S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function R(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:A,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:U}}function A_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function C_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,b,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=b,d.group=m),t++,d}function o(u,f,p,g,b,m){let d=a(u,f,p,g,b,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,b,m){let d=a(u,f,p,g,b,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||C_),n.length>1&&n.sort(f||pu),s.length>1&&s.sort(f||pu)}function h(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function R_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new mu,i.set(n,[a])):s>=r.length?(a=new mu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function I_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Xt};break;case"SpotLight":e={position:new D,direction:new D,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function P_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var L_=0;function D_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function U_(i){let t=new I_,e=P_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new me,a=new me;function o(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,b=0,m=0,d=0,v=0,y=0,x=0,A=0,C=0,R=0;c.sort(D_);for(let E=0,S=c.length;E<S;E++){let I=c[E],k=I.color,V=I.intensity,X=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*V,u+=k.g*V,f+=k.b*V;else if(I.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(I.sh.coefficients[$],V);R++}else if(I.isDirectionalLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let it=I.shadow,G=e.get(I);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=I.shadow.matrix,v++}n.directional[p]=$,p++}else if(I.isSpotLight){let $=t.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(k).multiplyScalar(V),$.distance=X,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,n.spot[b]=$;let it=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,it.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[b]=it.matrix,I.castShadow){let G=e.get(I);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,n.spotShadow[b]=G,n.spotShadowMap[b]=q,x++}b++}else if(I.isRectAreaLight){let $=t.get(I);$.color.copy(k).multiplyScalar(V),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=$,m++}else if(I.isPointLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){let it=I.shadow,G=e.get(I);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,G.shadowCameraNear=it.camera.near,G.shadowCameraFar=it.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=$,g++}else if(I.isHemisphereLight){let $=t.get(I);$.skyColor.copy(I.color).multiplyScalar(V),$.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[d]=$,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==b||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==v||U.numPointShadows!==y||U.numSpotShadows!==x||U.numSpotMaps!==A||U.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,U.directionalLength=p,U.pointLength=g,U.spotLength=b,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=v,U.numPointShadows=y,U.numSpotShadows=x,U.numSpotMaps=A,U.numLightProbes=R,n.version=L_++)}function l(c,h){let u=0,f=0,p=0,g=0,b=0,m=h.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){let y=c[d];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let x=n.hemi[b];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:n}}function gu(i){let t=new U_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function N_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new gu(i),t.set(s,[o])):r>=a.length?(o=new gu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O_=`uniform sampler2D shadow_pass;
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
}`;function k_(i,t,e){let n=new is,s=new gt,r=new gt,a=new ge,o=new ma({depthPacking:Ih}),l=new ga,c={},h=e.maxTextureSize,u={[Nn]:He,[He]:Nn,[Sn]:Sn},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:F_,fragmentShader:O_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new rn;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Se(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let d=this.type;this.render=function(C,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let E=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),k=i.state;k.setBlending(kn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=d!==Mn&&this.type===Mn,X=d===Mn&&this.type!==Mn;for(let q=0,$=C.length;q<$;q++){let it=C[q],G=it.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ut=G.getFrameExtents();if(s.multiply(ut),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,G.mapSize.y=r.y)),G.map===null||V===!0||X===!0){let Mt=this.type!==Mn?{minFilter:sn,magFilter:sn}:{};G.map!==null&&G.map.dispose(),G.map=new bn(s.x,s.y,Mt),G.map.texture.name=it.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let vt=G.getViewportCount();for(let Mt=0;Mt<vt;Mt++){let Bt=G.getViewport(Mt);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),k.viewport(a),G.updateMatrices(it,Mt),n=G.getFrustum(),x(R,U,G.camera,it,this.type)}G.isPointLightShadow!==!0&&this.type===Mn&&v(G,U),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,I)};function v(C,R){let U=t.update(b);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new bn(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,U,f,b,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,U,p,b,null)}function y(C,R,U,E){let S=null,I=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)S=I;else if(S=U.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let k=S.uuid,V=R.uuid,X=c[k];X===void 0&&(X={},c[k]=X);let q=X[V];q===void 0&&(q=S.clone(),X[V]=q,R.addEventListener("dispose",A)),S=q}if(S.visible=R.visible,S.wireframe=R.wireframe,E===Mn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let k=i.properties.get(S);k.light=U}return S}function x(C,R,U,E,S){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Mn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let V=t.update(C),X=C.material;if(Array.isArray(X)){let q=V.groups;for(let $=0,it=q.length;$<it;$++){let G=q[$],ut=X[G.materialIndex];if(ut&&ut.visible){let vt=y(C,ut,E,S);C.onBeforeShadow(i,C,R,U,V,vt,G),i.renderBufferDirect(U,null,V,vt,C,G),C.onAfterShadow(i,C,R,U,V,vt,G)}}}else if(X.visible){let q=y(C,X,E,S);C.onBeforeShadow(i,C,R,U,V,q,null),i.renderBufferDirect(U,null,V,q,C,null),C.onAfterShadow(i,C,R,U,V,q,null)}}let k=C.children;for(let V=0,X=k.length;V<X;V++)x(k[V],R,U,E,S)}function A(C){C.target.removeEventListener("dispose",A);for(let U in c){let E=c[U],S=C.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}var B_={[Aa]:Ca,[Ra]:La,[Ia]:Da,[_i]:Pa,[Ca]:Aa,[La]:Ra,[Da]:Ia,[Pa]:_i};function z_(i,t){function e(){let P=!1,ct=new ge,mt=null,wt=new ge(0,0,0,0);return{setMask:function(ot){mt!==ot&&!P&&(i.colorMask(ot,ot,ot,ot),mt=ot)},setLocked:function(ot){P=ot},setClear:function(ot,tt,It,Gt,le){le===!0&&(ot*=Gt,tt*=Gt,It*=Gt),ct.set(ot,tt,It,Gt),wt.equals(ct)===!1&&(i.clearColor(ot,tt,It,Gt),wt.copy(ct))},reset:function(){P=!1,mt=null,wt.set(-1,0,0,0)}}}function n(){let P=!1,ct=!1,mt=null,wt=null,ot=null;return{setReversed:function(tt){if(ct!==tt){let It=t.get("EXT_clip_control");tt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ct=tt;let Gt=ot;ot=null,this.setClear(Gt)}},getReversed:function(){return ct},setTest:function(tt){tt?J(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(tt){mt!==tt&&!P&&(i.depthMask(tt),mt=tt)},setFunc:function(tt){if(ct&&(tt=B_[tt]),wt!==tt){switch(tt){case Aa:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case _i:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=tt}},setLocked:function(tt){P=tt},setClear:function(tt){ot!==tt&&(ct&&(tt=1-tt),i.clearDepth(tt),ot=tt)},reset:function(){P=!1,mt=null,wt=null,ot=null,ct=!1}}}function s(){let P=!1,ct=null,mt=null,wt=null,ot=null,tt=null,It=null,Gt=null,le=null;return{setTest:function(ie){P||(ie?J(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(ie){ct!==ie&&!P&&(i.stencilMask(ie),ct=ie)},setFunc:function(ie,Cn,vn){(mt!==ie||wt!==Cn||ot!==vn)&&(i.stencilFunc(ie,Cn,vn),mt=ie,wt=Cn,ot=vn)},setOp:function(ie,Cn,vn){(tt!==ie||It!==Cn||Gt!==vn)&&(i.stencilOp(ie,Cn,vn),tt=ie,It=Cn,Gt=vn)},setLocked:function(ie){P=ie},setClear:function(ie){le!==ie&&(i.clearStencil(ie),le=ie)},reset:function(){P=!1,ct=null,mt=null,wt=null,ot=null,tt=null,It=null,Gt=null,le=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,b=!1,m=null,d=null,v=null,y=null,x=null,A=null,C=null,R=new Xt(0,0,0),U=0,E=!1,S=null,I=null,k=null,V=null,X=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,it=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(G)[1]),$=it>=1):G.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),$=it>=2);let ut=null,vt={},Mt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),Kt=new ge().fromArray(Mt),j=new ge().fromArray(Bt);function st(P,ct,mt,wt){let ot=new Uint8Array(4),tt=i.createTexture();i.bindTexture(P,tt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<mt;It++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(ct+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return tt}let B={};B[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(_i),K(!1),Z(Sl),J(i.CULL_FACE),nt(kn);function J(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function dt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function At(P,ct){return u[P]!==ct?(i.bindFramebuffer(P,ct),u[P]=ct,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function St(P,ct){let mt=p,wt=!1;if(P){mt=f.get(ct),mt===void 0&&(mt=[],f.set(ct,mt));let ot=P.textures;if(mt.length!==ot.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,It=ot.length;tt<It;tt++)mt[tt]=i.COLOR_ATTACHMENT0+tt;mt.length=ot.length,wt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(mt)}function Wt(P){return g!==P?(i.useProgram(P),g=P,!0):!1}let ne={[Kn]:i.FUNC_ADD,[ih]:i.FUNC_SUBTRACT,[sh]:i.FUNC_REVERSE_SUBTRACT};ne[rh]=i.MIN,ne[ah]=i.MAX;let T={[oh]:i.ZERO,[lh]:i.ONE,[ch]:i.SRC_COLOR,[ta]:i.SRC_ALPHA,[mh]:i.SRC_ALPHA_SATURATE,[fh]:i.DST_COLOR,[uh]:i.DST_ALPHA,[hh]:i.ONE_MINUS_SRC_COLOR,[ea]:i.ONE_MINUS_SRC_ALPHA,[ph]:i.ONE_MINUS_DST_COLOR,[dh]:i.ONE_MINUS_DST_ALPHA,[gh]:i.CONSTANT_COLOR,[_h]:i.ONE_MINUS_CONSTANT_COLOR,[vh]:i.CONSTANT_ALPHA,[yh]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(P,ct,mt,wt,ot,tt,It,Gt,le,ie){if(P===kn){b===!0&&(dt(i.BLEND),b=!1);return}if(b===!1&&(J(i.BLEND),b=!0),P!==nh){if(P!==m||ie!==E){if((d!==Kn||x!==Kn)&&(i.blendEquation(i.FUNC_ADD),d=Kn,x=Kn),ie)switch(P){case gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFunc(i.ONE,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Al:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,y=null,A=null,C=null,R.set(0,0,0),U=0,m=P,E=ie}return}ot=ot||ct,tt=tt||mt,It=It||wt,(ct!==d||ot!==x)&&(i.blendEquationSeparate(ne[ct],ne[ot]),d=ct,x=ot),(mt!==v||wt!==y||tt!==A||It!==C)&&(i.blendFuncSeparate(T[mt],T[wt],T[tt],T[It]),v=mt,y=wt,A=tt,C=It),(Gt.equals(R)===!1||le!==U)&&(i.blendColor(Gt.r,Gt.g,Gt.b,le),R.copy(Gt),U=le),m=P,E=!1}function Q(P,ct){P.side===Sn?dt(i.CULL_FACE):J(i.CULL_FACE);let mt=P.side===He;ct&&(mt=!mt),K(mt),P.blending===gi&&P.transparent===!1?nt(kn):nt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let wt=P.stencilWrite;o.setTest(wt),wt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),rt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(P){S!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),S=P)}function Z(P){P!==Qc?(J(i.CULL_FACE),P!==I&&(P===Sl?i.cullFace(i.BACK):P===th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),I=P}function ft(P){P!==k&&($&&i.lineWidth(P),k=P)}function rt(P,ct,mt){P?(J(i.POLYGON_OFFSET_FILL),(V!==ct||X!==mt)&&(i.polygonOffset(ct,mt),V=ct,X=mt)):dt(i.POLYGON_OFFSET_FILL)}function pt(P){P?J(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function Vt(P){P===void 0&&(P=i.TEXTURE0+q-1),ut!==P&&(i.activeTexture(P),ut=P)}function zt(P,ct,mt){mt===void 0&&(ut===null?mt=i.TEXTURE0+q-1:mt=ut);let wt=vt[mt];wt===void 0&&(wt={type:void 0,texture:void 0},vt[mt]=wt),(wt.type!==P||wt.texture!==ct)&&(ut!==mt&&(i.activeTexture(mt),ut=mt),i.bindTexture(P,ct||B[P]),wt.type=P,wt.texture=ct)}function w(){let P=vt[ut];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(P){Kt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Kt.copy(P))}function Ot(P){j.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),j.copy(P))}function Lt(P,ct){let mt=c.get(ct);mt===void 0&&(mt=new WeakMap,c.set(ct,mt));let wt=mt.get(P);wt===void 0&&(wt=i.getUniformBlockIndex(ct,P.name),mt.set(P,wt))}function yt(P,ct){let wt=c.get(ct).get(P);l.get(ct)!==wt&&(i.uniformBlockBinding(ct,wt,P.__bindingPointIndex),l.set(ct,wt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ut=null,vt={},u={},f=new WeakMap,p=[],g=null,b=!1,m=null,d=null,v=null,y=null,x=null,A=null,C=null,R=new Xt(0,0,0),U=0,E=!1,S=null,I=null,k=null,V=null,X=null,Kt.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:dt,bindFramebuffer:At,drawBuffers:St,useProgram:Wt,setBlending:nt,setMaterial:Q,setFlipSided:K,setCullFace:Z,setLineWidth:ft,setPolygonOffset:rt,setScissorTest:pt,activeTexture:Vt,bindTexture:zt,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:Rt,texImage3D:at,updateUBOMapping:Lt,uniformBlockBinding:yt,texStorage2D:ht,texStorage3D:Ct,texSubImage2D:W,texSubImage3D:et,compressedTexSubImage2D:Y,compressedTexSubImage3D:Pt,scissor:bt,viewport:Ot,reset:$t}}function H_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return p?new OffscreenCanvas(w,_):Ns("canvas")}function b(w,_,O){let W=1,et=zt(w);if((et.width>O||et.height>O)&&(W=O/Math.max(et.width,et.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Y=Math.floor(W*et.width),Pt=Math.floor(W*et.height);u===void 0&&(u=g(Y,Pt));let ht=_?g(Y,Pt):u;return ht.width=Y,ht.height=Pt,ht.getContext("2d").drawImage(w,0,0,Y,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Y+"x"+Pt+")."),ht}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,_,O,W,et=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=_;if(_===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),_===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let Pt=et?Ds:te.getTransfer(W);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Pt===se?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(w,_){let O;return w?_===null||_===si||_===us?O=i.DEPTH24_STENCIL8:_===En?O=i.DEPTH32F_STENCIL8:_===cs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===si||_===us?O=i.DEPTH_COMPONENT24:_===En?O=i.DEPTH_COMPONENT32F:_===cs&&(O=i.DEPTH_COMPONENT16),O}function A(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==sn&&w.minFilter!==pn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){let _=w.target;_.removeEventListener("dispose",C),U(_),_.isVideoTexture&&h.delete(_)}function R(w){let _=w.target;_.removeEventListener("dispose",R),S(_)}function U(w){let _=n.get(w);if(_.__webglInit===void 0)return;let O=w.source,W=f.get(O);if(W){let et=W[_.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(w),Object.keys(W).length===0&&f.delete(O)}n.remove(w)}function E(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let O=w.source,W=f.get(O);delete W[_.__cacheKey],a.memory.textures--}function S(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let et=0;et<_.__webglFramebuffer[W].length;et++)i.deleteFramebuffer(_.__webglFramebuffer[W][et]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=w.textures;for(let W=0,et=O.length;W<et;W++){let Y=n.get(O[W]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(O[W])}n.remove(w)}let I=0;function k(){I=0}function V(){let w=I;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),I+=1,w}function X(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function q(w,_){let O=n.get(w);if(w.isVideoTexture&&pt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(O,w,_);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function $(w,_){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){B(O,w,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function it(w,_){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){B(O,w,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function G(w,_){let O=n.get(w);if(w.version>0&&O.__version!==w.version){J(O,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let ut={[na]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},vt={[sn]:i.NEAREST,[Ch]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Oa]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},Mt={[Lh]:i.NEVER,[kh]:i.ALWAYS,[Dh]:i.LESS,[Bl]:i.LEQUAL,[Uh]:i.EQUAL,[Oh]:i.GEQUAL,[Nh]:i.GREATER,[Fh]:i.NOTEQUAL};function Bt(w,_){if(_.type===En&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===pn||_.magFilter===Oa||_.magFilter===dr||_.magFilter===ii||_.minFilter===pn||_.minFilter===Oa||_.minFilter===dr||_.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ut[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ut[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ut[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,vt[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,vt[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Mt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===sn||_.minFilter!==dr&&_.minFilter!==ii||_.type===En&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Kt(w,_){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));let W=_.source,et=f.get(W);et===void 0&&(et={},f.set(W,et));let Y=X(_);if(Y!==w.__cacheKey){et[Y]===void 0&&(et[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),et[Y].usedTimes++;let Pt=et[w.__cacheKey];Pt!==void 0&&(et[w.__cacheKey].usedTimes--,Pt.usedTimes===0&&E(_)),w.__cacheKey=Y,w.__webglTexture=et[Y].texture}return O}function j(w,_,O){return Math.floor(Math.floor(w/O)/_)}function st(w,_,O,W){let Y=w.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,W,_.data);else{Y.sort((at,bt)=>at.start-bt.start);let Pt=0;for(let at=1;at<Y.length;at++){let bt=Y[Pt],Ot=Y[at],Lt=bt.start+bt.count,yt=j(Ot.start,_.width,4),$t=j(bt.start,_.width,4);Ot.start<=Lt+1&&yt===$t&&j(Ot.start+Ot.count-1,_.width,4)===yt?bt.count=Math.max(bt.count,Ot.start+Ot.count-bt.start):(++Pt,Y[Pt]=Ot)}Y.length=Pt+1;let ht=i.getParameter(i.UNPACK_ROW_LENGTH),Ct=i.getParameter(i.UNPACK_SKIP_PIXELS),Rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let at=0,bt=Y.length;at<bt;at++){let Ot=Y[at],Lt=Math.floor(Ot.start/4),yt=Math.ceil(Ot.count/4),$t=Lt%_.width,P=Math.floor(Lt/_.width),ct=yt,mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),e.texSubImage2D(i.TEXTURE_2D,0,$t,P,ct,mt,O,W,_.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ht),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),i.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function B(w,_,O){let W=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=i.TEXTURE_3D);let et=Kt(w,_),Y=_.source;e.bindTexture(W,w.__webglTexture,i.TEXTURE0+O);let Pt=n.get(Y);if(Y.version!==Pt.__version||et===!0){e.activeTexture(i.TEXTURE0+O);let ht=te.getPrimaries(te.workingColorSpace),Ct=_.colorSpace===zn?null:te.getPrimaries(_.colorSpace),Rt=_.colorSpace===zn||ht===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let at=b(_.image,!1,s.maxTextureSize);at=Vt(_,at);let bt=r.convert(_.format,_.colorSpace),Ot=r.convert(_.type),Lt=y(_.internalFormat,bt,Ot,_.colorSpace,_.isVideoTexture);Bt(W,_);let yt,$t=_.mipmaps,P=_.isVideoTexture!==!0,ct=Pt.__version===void 0||et===!0,mt=Y.dataReady,wt=A(_,at);if(_.isDepthTexture)Lt=x(_.format===ds,_.type),ct&&(P?e.texStorage2D(i.TEXTURE_2D,1,Lt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Lt,at.width,at.height,0,bt,Ot,null));else if(_.isDataTexture)if($t.length>0){P&&ct&&e.texStorage2D(i.TEXTURE_2D,wt,Lt,$t[0].width,$t[0].height);for(let ot=0,tt=$t.length;ot<tt;ot++)yt=$t[ot],P?mt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,yt.width,yt.height,bt,Ot,yt.data):e.texImage2D(i.TEXTURE_2D,ot,Lt,yt.width,yt.height,0,bt,Ot,yt.data);_.generateMipmaps=!1}else P?(ct&&e.texStorage2D(i.TEXTURE_2D,wt,Lt,at.width,at.height),mt&&st(_,at,bt,Ot)):e.texImage2D(i.TEXTURE_2D,0,Lt,at.width,at.height,0,bt,Ot,at.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){P&&ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Lt,$t[0].width,$t[0].height,at.depth);for(let ot=0,tt=$t.length;ot<tt;ot++)if(yt=$t[ot],_.format!==an)if(bt!==null)if(P){if(mt)if(_.layerUpdates.size>0){let It=ql(yt.width,yt.height,_.format,_.type);for(let Gt of _.layerUpdates){let le=yt.data.subarray(Gt*It/yt.data.BYTES_PER_ELEMENT,(Gt+1)*It/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Gt,yt.width,yt.height,1,bt,le)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,yt.width,yt.height,at.depth,bt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Lt,yt.width,yt.height,at.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,yt.width,yt.height,at.depth,bt,Ot,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Lt,yt.width,yt.height,at.depth,0,bt,Ot,yt.data)}else{P&&ct&&e.texStorage2D(i.TEXTURE_2D,wt,Lt,$t[0].width,$t[0].height);for(let ot=0,tt=$t.length;ot<tt;ot++)yt=$t[ot],_.format!==an?bt!==null?P?mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,yt.width,yt.height,bt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Lt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?mt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,yt.width,yt.height,bt,Ot,yt.data):e.texImage2D(i.TEXTURE_2D,ot,Lt,yt.width,yt.height,0,bt,Ot,yt.data)}else if(_.isDataArrayTexture)if(P){if(ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Lt,at.width,at.height,at.depth),mt)if(_.layerUpdates.size>0){let ot=ql(at.width,at.height,_.format,_.type);for(let tt of _.layerUpdates){let It=at.data.subarray(tt*ot/at.data.BYTES_PER_ELEMENT,(tt+1)*ot/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,at.width,at.height,1,bt,Ot,It)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,bt,Ot,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,at.width,at.height,at.depth,0,bt,Ot,at.data);else if(_.isData3DTexture)P?(ct&&e.texStorage3D(i.TEXTURE_3D,wt,Lt,at.width,at.height,at.depth),mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,bt,Ot,at.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,at.width,at.height,at.depth,0,bt,Ot,at.data);else if(_.isFramebufferTexture){if(ct)if(P)e.texStorage2D(i.TEXTURE_2D,wt,Lt,at.width,at.height);else{let ot=at.width,tt=at.height;for(let It=0;It<wt;It++)e.texImage2D(i.TEXTURE_2D,It,Lt,ot,tt,0,bt,Ot,null),ot>>=1,tt>>=1}}else if($t.length>0){if(P&&ct){let ot=zt($t[0]);e.texStorage2D(i.TEXTURE_2D,wt,Lt,ot.width,ot.height)}for(let ot=0,tt=$t.length;ot<tt;ot++)yt=$t[ot],P?mt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,bt,Ot,yt):e.texImage2D(i.TEXTURE_2D,ot,Lt,bt,Ot,yt);_.generateMipmaps=!1}else if(P){if(ct){let ot=zt(at);e.texStorage2D(i.TEXTURE_2D,wt,Lt,ot.width,ot.height)}mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Ot,at)}else e.texImage2D(i.TEXTURE_2D,0,Lt,bt,Ot,at);m(_)&&d(W),Pt.__version=Y.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function J(w,_,O){if(_.image.length!==6)return;let W=Kt(w,_),et=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);let Y=n.get(et);if(et.version!==Y.__version||W===!0){e.activeTexture(i.TEXTURE0+O);let Pt=te.getPrimaries(te.workingColorSpace),ht=_.colorSpace===zn?null:te.getPrimaries(_.colorSpace),Ct=_.colorSpace===zn||Pt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Rt=_.isCompressedTexture||_.image[0].isCompressedTexture,at=_.image[0]&&_.image[0].isDataTexture,bt=[];for(let tt=0;tt<6;tt++)!Rt&&!at?bt[tt]=b(_.image[tt],!0,s.maxCubemapSize):bt[tt]=at?_.image[tt].image:_.image[tt],bt[tt]=Vt(_,bt[tt]);let Ot=bt[0],Lt=r.convert(_.format,_.colorSpace),yt=r.convert(_.type),$t=y(_.internalFormat,Lt,yt,_.colorSpace),P=_.isVideoTexture!==!0,ct=Y.__version===void 0||W===!0,mt=et.dataReady,wt=A(_,Ot);Bt(i.TEXTURE_CUBE_MAP,_);let ot;if(Rt){P&&ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,$t,Ot.width,Ot.height);for(let tt=0;tt<6;tt++){ot=bt[tt].mipmaps;for(let It=0;It<ot.length;It++){let Gt=ot[It];_.format!==an?Lt!==null?P?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It,0,0,Gt.width,Gt.height,Lt,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It,$t,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It,0,0,Gt.width,Gt.height,Lt,yt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It,$t,Gt.width,Gt.height,0,Lt,yt,Gt.data)}}}else{if(ot=_.mipmaps,P&&ct){ot.length>0&&wt++;let tt=zt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,$t,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(at){P?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,bt[tt].width,bt[tt].height,Lt,yt,bt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,bt[tt].width,bt[tt].height,0,Lt,yt,bt[tt].data);for(let It=0;It<ot.length;It++){let le=ot[It].image[tt].image;P?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It+1,0,0,le.width,le.height,Lt,yt,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It+1,$t,le.width,le.height,0,Lt,yt,le.data)}}else{P?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,yt,bt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,Lt,yt,bt[tt]);for(let It=0;It<ot.length;It++){let Gt=ot[It];P?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It+1,0,0,Lt,yt,Gt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,It+1,$t,Lt,yt,Gt.image[tt])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),Y.__version=et.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function dt(w,_,O,W,et,Y){let Pt=r.convert(O.format,O.colorSpace),ht=r.convert(O.type),Ct=y(O.internalFormat,Pt,ht,O.colorSpace),Rt=n.get(_),at=n.get(O);if(at.__renderTarget=_,!Rt.__hasExternalTextures){let bt=Math.max(1,_.width>>Y),Ot=Math.max(1,_.height>>Y);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Y,Ct,bt,Ot,_.depth,0,Pt,ht,null):e.texImage2D(et,Y,Ct,bt,Ot,0,Pt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),rt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,et,at.__webglTexture,0,ft(_)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,et,at.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(w,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let W=_.depthTexture,et=W&&W.isDepthTexture?W.type:null,Y=x(_.stencilBuffer,et),Pt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=ft(_);rt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Y,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,w)}else{let W=_.textures;for(let et=0;et<W.length;et++){let Y=W[et],Pt=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),Ct=y(Y.internalFormat,Pt,ht,Y.colorSpace),Rt=ft(_);O&&rt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,Ct,_.width,_.height):rt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,Ct,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);let et=W.__webglTexture,Y=ft(_);if(_.depthTexture.format===Ji)rt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(_.depthTexture.format===ds)rt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Wt(w){let _=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let W=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let et=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",et)};W.addEventListener("dispose",et),_.__depthDisposeCallback=et}_.__boundDepthTexture=W}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let W=w.texture.mipmaps;W&&W.length>0?St(_.__webglFramebuffer[0],w):St(_.__webglFramebuffer,w)}else if(O){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=i.createRenderbuffer(),At(_.__webglDepthbuffer[W],w,!1);else{let et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Y)}}else{let W=w.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),At(_.__webglDepthbuffer,w,!1);else{let et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(w,_,O){let W=n.get(w);_!==void 0&&dt(W.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Wt(w)}function T(w){let _=w.texture,O=n.get(w),W=n.get(_);w.addEventListener("dispose",R);let et=w.textures,Y=w.isWebGLCubeRenderTarget===!0,Pt=et.length>1;if(Pt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,a.memory.textures++),Y){O.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ht]=[];for(let Ct=0;Ct<_.mipmaps.length;Ct++)O.__webglFramebuffer[ht][Ct]=i.createFramebuffer()}else O.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ht=0;ht<_.mipmaps.length;ht++)O.__webglFramebuffer[ht]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let ht=0,Ct=et.length;ht<Ct;ht++){let Rt=n.get(et[ht]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&rt(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){let Ct=et[ht];O.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ht]);let Rt=r.convert(Ct.format,Ct.colorSpace),at=r.convert(Ct.type),bt=y(Ct.internalFormat,Rt,at,Ct.colorSpace,w.isXRRenderTarget===!0),Ot=ft(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,bt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,O.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),At(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,_);for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ct=0;Ct<_.mipmaps.length;Ct++)dt(O.__webglFramebuffer[ht][Ct],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct);else dt(O.__webglFramebuffer[ht],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(_)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ht=0,Ct=et.length;ht<Ct;ht++){let Rt=et[ht],at=n.get(Rt),bt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(bt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,at.__webglTexture),Bt(bt,Rt),dt(O.__webglFramebuffer,w,Rt,i.COLOR_ATTACHMENT0+ht,bt,0),m(Rt)&&d(bt)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ht=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,W.__webglTexture),Bt(ht,_),_.mipmaps&&_.mipmaps.length>0)for(let Ct=0;Ct<_.mipmaps.length;Ct++)dt(O.__webglFramebuffer[Ct],w,_,i.COLOR_ATTACHMENT0,ht,Ct);else dt(O.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,ht,0);m(_)&&d(ht),e.unbindTexture()}w.depthBuffer&&Wt(w)}function nt(w){let _=w.textures;for(let O=0,W=_.length;O<W;O++){let et=_[O];if(m(et)){let Y=v(w),Pt=n.get(et).__webglTexture;e.bindTexture(Y,Pt),d(Y),e.unbindTexture()}}}let Q=[],K=[];function Z(w){if(w.samples>0){if(rt(w)===!1){let _=w.textures,O=w.width,W=w.height,et=i.COLOR_BUFFER_BIT,Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(w),ht=_.length>1;if(ht)for(let Rt=0;Rt<_.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);let Ct=w.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Rt=0;Rt<_.length;Rt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);let at=n.get(_[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,O,W,0,0,O,W,et,i.NEAREST),l===!0&&(Q.length=0,K.length=0,Q.push(i.COLOR_ATTACHMENT0+Rt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Q.push(Y),K.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Rt=0;Rt<_.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);let at=n.get(_[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ft(w){return Math.min(s.maxSamples,w.samples)}function rt(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function pt(w){let _=a.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function Vt(w,_){let O=w.colorSpace,W=w.format,et=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==vi&&O!==zn&&(te.getTransfer(O)===se?(W!==an||et!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function zt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=it,this.setTextureCube=G,this.rebindTextures=ne,this.setupRenderTarget=T,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=rt}function V_(i,t){function e(n,s=zn){let r,a=te.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Il)return i.BYTE;if(n===Pl)return i.SHORT;if(n===cs)return i.UNSIGNED_SHORT;if(n===ka)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===hs)return i.HALF_FLOAT;if(n===Ul)return i.ALPHA;if(n===Nl)return i.RGB;if(n===an)return i.RGBA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===ds)return i.DEPTH_STENCIL;if(n===Fl)return i.RED;if(n===Ha)return i.RED_INTEGER;if(n===Ol)return i.RG;if(n===Va)return i.RG_INTEGER;if(n===Ga)return i.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===$a||n===Xa||n===qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===Ja||n===Za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===Ja)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Za)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ka||n===ja||n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ka)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===to)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===no)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===io)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===so)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ro)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ao)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===co)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ho)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uo||n===fo||n===po)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===uo)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mo||n===go||n===_o||n===vo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var G_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W_=`
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

}`,ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new $s(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new gn({vertexShader:G_,fragmentShader:W_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oc=class extends Fn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,b=typeof XRWebGLBinding<"u",m=new ac,d={},v=e.getContextAttributes(),y=null,x=null,A=[],C=[],R=new gt,U=null,E=new De;E.viewport=new ge;let S=new De;S.viewport=new ge;let I=[E,S],k=new Ta,V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let J=A[B];return J===void 0&&(J=new ns,A[B]=J),J.getTargetRaySpace()},this.getControllerGrip=function(B){let J=A[B];return J===void 0&&(J=new ns,A[B]=J),J.getGripSpace()},this.getHand=function(B){let J=A[B];return J===void 0&&(J=new ns,A[B]=J),J.getHandSpace()};function q(B){let J=C.indexOf(B.inputSource);if(J===-1)return;let dt=A[J];dt!==void 0&&(dt.update(B.inputSource,B.frame,c||a),dt.dispatchEvent({type:B.type,data:B.inputSource}))}function $(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",it);for(let B=0;B<A.length;B++){let J=C[B];J!==null&&(C[B]=null,A[B].disconnect(J))}V=null,X=null,m.reset();for(let B in d)delete d[B];t.setRenderTarget(y),p=null,f=null,u=null,s=null,x=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",$),s.addEventListener("inputsourceschange",it),v.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,At=null,St=null;v.depth&&(St=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=v.stencil?ds:Ji,At=v.stencil?us:si);let Wt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new bn(f.textureWidth,f.textureHeight,{format:an,type:_n,depthTexture:new Ws(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let dt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new bn(p.framebufferWidth,p.framebufferHeight,{format:an,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(B){for(let J=0;J<B.removed.length;J++){let dt=B.removed[J],At=C.indexOf(dt);At>=0&&(C[At]=null,A[At].disconnect(dt))}for(let J=0;J<B.added.length;J++){let dt=B.added[J],At=C.indexOf(dt);if(At===-1){for(let Wt=0;Wt<A.length;Wt++)if(Wt>=C.length){C.push(dt),At=Wt;break}else if(C[Wt]===null){C[Wt]=dt,At=Wt;break}if(At===-1)break}let St=A[At];St&&St.connect(dt)}}let G=new D,ut=new D;function vt(B,J,dt){G.setFromMatrixPosition(J.matrixWorld),ut.setFromMatrixPosition(dt.matrixWorld);let At=G.distanceTo(ut),St=J.projectionMatrix.elements,Wt=dt.projectionMatrix.elements,ne=St[14]/(St[10]-1),T=St[14]/(St[10]+1),nt=(St[9]+1)/St[5],Q=(St[9]-1)/St[5],K=(St[8]-1)/St[0],Z=(Wt[8]+1)/Wt[0],ft=ne*K,rt=ne*Z,pt=At/(-K+Z),Vt=pt*-K;if(J.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Vt),B.translateZ(pt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),St[10]===-1)B.projectionMatrix.copy(J.projectionMatrix),B.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let zt=ne+pt,w=T+pt,_=ft-Vt,O=rt+(At-Vt),W=nt*T/w*zt,et=Q*T/w*zt;B.projectionMatrix.makePerspective(_,O,W,et,zt,w),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Mt(B,J){J===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(J.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let J=B.near,dt=B.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),k.near=S.near=E.near=J,k.far=S.far=E.far=dt,(V!==k.near||X!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),V=k.near,X=k.far),k.layers.mask=B.layers.mask|6,E.layers.mask=k.layers.mask&3,S.layers.mask=k.layers.mask&5;let At=B.parent,St=k.cameras;Mt(k,At);for(let Wt=0;Wt<St.length;Wt++)Mt(St[Wt],At);St.length===2?vt(k,E,S):k.projectionMatrix.copy(E.projectionMatrix),Bt(B,k,At)};function Bt(B,J,dt){dt===null?B.matrix.copy(J.matrixWorld):(B.matrix.copy(dt.matrixWorld),B.matrix.invert(),B.matrix.multiply(J.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(J.projectionMatrix),B.projectionMatrixInverse.copy(J.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Zi*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(B){return d[B]};let Kt=null;function j(B,J){if(h=J.getViewerPose(c||a),g=J,h!==null){let dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let At=!1;dt.length!==k.cameras.length&&(k.cameras.length=0,At=!0);for(let T=0;T<dt.length;T++){let nt=dt[T],Q=null;if(p!==null)Q=p.getViewport(nt);else{let Z=u.getViewSubImage(f,nt);Q=Z.viewport,T===0&&(t.setRenderTargetTextures(x,Z.colorTexture,Z.depthStencilTexture),t.setRenderTarget(x))}let K=I[T];K===void 0&&(K=new De,K.layers.enable(T),K.viewport=new ge,I[T]=K),K.matrix.fromArray(nt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(nt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Q.x,Q.y,Q.width,Q.height),T===0&&(k.matrix.copy(K.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),At===!0&&k.cameras.push(K)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let T=u.getDepthInformation(dt[0]);T&&T.isValid&&T.texture&&m.init(T,s.renderState)}if(St&&St.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let T=0;T<dt.length;T++){let nt=dt[T].camera;if(nt){let Q=d[nt];Q||(Q=new $s,d[nt]=Q);let K=u.getCameraImage(nt);Q.sourceTexture=K}}}}for(let dt=0;dt<A.length;dt++){let At=C[dt],St=A[dt];At!==null&&St!==void 0&&St.update(At,J,c||a)}Kt&&Kt(B,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let st=new _u;st.setAnimationLoop(j),this.setAnimationLoop=function(B){Kt=B},this.dispose=function(){}}},Ai=new mn,$_=new me;function X_(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Gl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),b(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,v,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===He&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===He&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Ai.copy(x),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(Ai)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===He&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function b(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function q_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));let A=y.program;n.updateUBOMapping(v,A);let C=t.render.frame;r[v.id]!==C&&(f(v),r[v.id]=C)}function h(v){let y=u();v.__bindingPointIndex=y;let x=i.createBuffer(),A=v.__size,C=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=s[v.id],x=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,R=x.length;C<R;C++){let U=Array.isArray(x[C])?x[C]:[x[C]];for(let E=0,S=U.length;E<S;E++){let I=U[E];if(p(I,C,E,A)===!0){let k=I.__offset,V=Array.isArray(I.value)?I.value:[I.value],X=0;for(let q=0;q<V.length;q++){let $=V[q],it=b($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,k+X,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):($.toArray(I.__data,X),X+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,y,x,A){let C=v.value,R=y+"_"+x;if(A[R]===void 0)return typeof C=="number"||typeof C=="boolean"?A[R]=C:A[R]=C.clone(),!0;{let U=A[R];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return A[R]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(v){let y=v.uniforms,x=0,A=16;for(let R=0,U=y.length;R<U;R++){let E=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,I=E.length;S<I;S++){let k=E[S],V=Array.isArray(k.value)?k.value:[k.value];for(let X=0,q=V.length;X<q;X++){let $=V[X],it=b($),G=x%A,ut=G%it.boundary,vt=G+ut;x+=ut,vt!==0&&A-vt<it.storage&&(x+=A-vt),k.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=it.storage}}}let C=x%A;return C>0&&(x+=A-C),v.__size=x,v.__cache={},this}function b(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var So=class{constructor(t={}){let{canvas:e=Bh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),b=new Int32Array(4),m=null,d=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,A=!1;this._outputColorSpace=ze;let C=0,R=0,U=null,E=-1,S=null,I=new ge,k=new ge,V=null,X=new Xt(0),q=0,$=e.width,it=e.height,G=1,ut=null,vt=null,Mt=new ge(0,0,$,it),Bt=new ge(0,0,$,it),Kt=!1,j=new is,st=!1,B=!1,J=new me,dt=new D,At=new ge,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function ne(){return U===null?G:1}let T=n;function nt(M,N){return e.getContext(M,N)}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),T===null){let N="webgl2";if(T=nt(N,M),T===null)throw nt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Q,K,Z,ft,rt,pt,Vt,zt,w,_,O,W,et,Y,Pt,ht,Ct,Rt,at,bt,Ot,Lt,yt,$t;function P(){Q=new ug(T),Q.init(),Lt=new V_(T,Q),K=new sg(T,Q,t,Lt),Z=new z_(T,Q),K.reversedDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),ft=new pg(T),rt=new A_,pt=new H_(T,Q,Z,rt,K,Lt,ft),Vt=new ag(x),zt=new hg(x),w=new xf(T),yt=new ng(T,w),_=new dg(T,w,ft,yt),O=new gg(T,_,w,ft),at=new mg(T,K,pt),ht=new rg(rt),W=new T_(x,Vt,zt,Q,K,yt,ht),et=new X_(x,rt),Y=new R_,Pt=new N_(Q),Rt=new eg(x,Vt,zt,Z,O,p,l),Ct=new k_(x,O,K),$t=new q_(T,ft,K,Z),bt=new ig(T,Q,ft),Ot=new fg(T,Q,ft),ft.programs=W.programs,x.capabilities=K,x.extensions=Q,x.properties=rt,x.renderLists=Y,x.shadowMap=Ct,x.state=Z,x.info=ft}P();let ct=new oc(x,T);this.xr=ct,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let M=Q.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Q.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize($,it,!1))},this.getSize=function(M){return M.set($,it)},this.setSize=function(M,N,z=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,it=N,e.width=Math.floor(M*G),e.height=Math.floor(N*G),z===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set($*G,it*G).floor()},this.setDrawingBufferSize=function(M,N,z){$=M,it=N,G=z,e.width=Math.floor(M*z),e.height=Math.floor(N*z),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(Mt)},this.setViewport=function(M,N,z,H){M.isVector4?Mt.set(M.x,M.y,M.z,M.w):Mt.set(M,N,z,H),Z.viewport(I.copy(Mt).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(Bt)},this.setScissor=function(M,N,z,H){M.isVector4?Bt.set(M.x,M.y,M.z,M.w):Bt.set(M,N,z,H),Z.scissor(k.copy(Bt).multiplyScalar(G).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(M){Z.setScissorTest(Kt=M)},this.setOpaqueSort=function(M){ut=M},this.setTransparentSort=function(M){vt=M},this.getClearColor=function(M){return M.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,z=!0){let H=0;if(M){let F=!1;if(U!==null){let lt=U.texture.format;F=lt===Ga||lt===Va||lt===Ha}if(F){let lt=U.texture.type,xt=lt===_n||lt===si||lt===cs||lt===us||lt===Ba||lt===za,Tt=Rt.getClearColor(),Et=Rt.getClearAlpha(),Ft=Tt.r,kt=Tt.g,Ut=Tt.b;xt?(g[0]=Ft,g[1]=kt,g[2]=Ut,g[3]=Et,T.clearBufferuiv(T.COLOR,0,g)):(b[0]=Ft,b[1]=kt,b[2]=Ut,b[3]=Et,T.clearBufferiv(T.COLOR,0,b))}else H|=T.COLOR_BUFFER_BIT}N&&(H|=T.DEPTH_BUFFER_BIT),z&&(H|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Rt.dispose(),Y.dispose(),Pt.dispose(),rt.dispose(),Vt.dispose(),zt.dispose(),O.dispose(),yt.dispose(),$t.dispose(),W.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",vn),ct.removeEventListener("sessionend",bc),li.stop()};function mt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let M=ft.autoReset,N=Ct.enabled,z=Ct.autoUpdate,H=Ct.needsUpdate,F=Ct.type;P(),ft.autoReset=M,Ct.enabled=N,Ct.autoUpdate=z,Ct.needsUpdate=H,Ct.type=F}function ot(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function tt(M){let N=M.target;N.removeEventListener("dispose",tt),It(N)}function It(M){Gt(M),rt.remove(M)}function Gt(M){let N=rt.get(M).programs;N!==void 0&&(N.forEach(function(z){W.releaseProgram(z)}),M.isShaderMaterial&&W.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,z,H,F,lt){N===null&&(N=St);let xt=F.isMesh&&F.matrixWorld.determinant()<0,Tt=qu(M,N,z,H,F);Z.setMaterial(H,xt);let Et=z.index,Ft=1;if(H.wireframe===!0){if(Et=_.getWireframeAttribute(z),Et===void 0)return;Ft=2}let kt=z.drawRange,Ut=z.attributes.position,jt=kt.start*Ft,ae=(kt.start+kt.count)*Ft;lt!==null&&(jt=Math.max(jt,lt.start*Ft),ae=Math.min(ae,(lt.start+lt.count)*Ft)),Et!==null?(jt=Math.max(jt,0),ae=Math.min(ae,Et.count)):Ut!=null&&(jt=Math.max(jt,0),ae=Math.min(ae,Ut.count));let _e=ae-jt;if(_e<0||_e===1/0)return;yt.setup(F,H,Tt,z,Et);let he,oe=bt;if(Et!==null&&(he=w.get(Et),oe=Ot,oe.setIndex(he)),F.isMesh)H.wireframe===!0?(Z.setLineWidth(H.wireframeLinewidth*ne()),oe.setMode(T.LINES)):oe.setMode(T.TRIANGLES);else if(F.isLine){let Nt=H.linewidth;Nt===void 0&&(Nt=1),Z.setLineWidth(Nt*ne()),F.isLineSegments?oe.setMode(T.LINES):F.isLineLoop?oe.setMode(T.LINE_LOOP):oe.setMode(T.LINE_STRIP)}else F.isPoints?oe.setMode(T.POINTS):F.isSprite&&oe.setMode(T.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))oe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Nt=F._multiDrawStarts,de=F._multiDrawCounts,ee=F._multiDrawCount,$e=Et?w.get(Et).bytesPerElement:1,Ui=rt.get(H).currentProgram.getUniforms();for(let Xe=0;Xe<ee;Xe++)Ui.setValue(T,"_gl_DrawID",Xe),oe.render(Nt[Xe]/$e,de[Xe])}else if(F.isInstancedMesh)oe.renderInstances(jt,_e,F.count);else if(z.isInstancedBufferGeometry){let Nt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,de=Math.min(z.instanceCount,Nt);oe.renderInstances(jt,_e,de)}else oe.render(jt,_e)};function le(M,N,z){M.transparent===!0&&M.side===Sn&&M.forceSinglePass===!1?(M.side=He,M.needsUpdate=!0,Pr(M,N,z),M.side=Nn,M.needsUpdate=!0,Pr(M,N,z),M.side=Sn):Pr(M,N,z)}this.compile=function(M,N,z=null){z===null&&(z=M),d=Pt.get(z),d.init(N),y.push(d),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),M!==z&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();let H=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let lt=F.material;if(lt)if(Array.isArray(lt))for(let xt=0;xt<lt.length;xt++){let Tt=lt[xt];le(Tt,z,F),H.add(Tt)}else le(lt,z,F),H.add(lt)}),d=y.pop(),H},this.compileAsync=function(M,N,z=null){let H=this.compile(M,N,z);return new Promise(F=>{function lt(){if(H.forEach(function(xt){rt.get(xt).currentProgram.isReady()&&H.delete(xt)}),H.size===0){F(M);return}setTimeout(lt,10)}Q.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ie=null;function Cn(M){ie&&ie(M)}function vn(){li.stop()}function bc(){li.start()}let li=new _u;li.setAnimationLoop(Cn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(M){ie=M,ct.setAnimationLoop(M),M===null?li.stop():li.start()},ct.addEventListener("sessionstart",vn),ct.addEventListener("sessionend",bc),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(N),N=ct.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,N,U),d=Pt.get(M,y.length),d.init(N),y.push(d),J.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(J,fn,N.reversedDepth),B=this.localClippingEnabled,st=ht.init(this.clippingPlanes,B),m=Y.get(M,v.length),m.init(),v.push(m),ct.enabled===!0&&ct.isPresenting===!0){let lt=x.xr.getDepthSensingMesh();lt!==null&&ko(lt,N,-1/0,x.sortObjects)}ko(M,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ut,vt),Wt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Wt&&Rt.addToRenderList(m,M),this.info.render.frame++,st===!0&&ht.beginShadows();let z=d.state.shadowsArray;Ct.render(z,M,N),st===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,F=m.transmissive;if(d.setupLights(),N.isArrayCamera){let lt=N.cameras;if(F.length>0)for(let xt=0,Tt=lt.length;xt<Tt;xt++){let Et=lt[xt];Sc(H,F,M,Et)}Wt&&Rt.render(M);for(let xt=0,Tt=lt.length;xt<Tt;xt++){let Et=lt[xt];Mc(m,M,Et,Et.viewport)}}else F.length>0&&Sc(H,F,M,N),Wt&&Rt.render(M),Mc(m,M,N);U!==null&&R===0&&(pt.updateMultisampleRenderTarget(U),pt.updateRenderTargetMipmap(U)),M.isScene===!0&&M.onAfterRender(x,M,N),yt.resetDefaultState(),E=-1,S=null,y.pop(),y.length>0?(d=y[y.length-1],st===!0&&ht.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ko(M,N,z,H){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){H&&At.setFromMatrixPosition(M.matrixWorld).applyMatrix4(J);let xt=O.update(M),Tt=M.material;Tt.visible&&m.push(M,xt,Tt,z,At.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||j.intersectsObject(M))){let xt=O.update(M),Tt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),At.copy(M.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),At.copy(xt.boundingSphere.center)),At.applyMatrix4(M.matrixWorld).applyMatrix4(J)),Array.isArray(Tt)){let Et=xt.groups;for(let Ft=0,kt=Et.length;Ft<kt;Ft++){let Ut=Et[Ft],jt=Tt[Ut.materialIndex];jt&&jt.visible&&m.push(M,xt,jt,z,At.z,Ut)}}else Tt.visible&&m.push(M,xt,Tt,z,At.z,null)}}let lt=M.children;for(let xt=0,Tt=lt.length;xt<Tt;xt++)ko(lt[xt],N,z,H)}function Mc(M,N,z,H){let F=M.opaque,lt=M.transmissive,xt=M.transparent;d.setupLightsView(z),st===!0&&ht.setGlobalState(x.clippingPlanes,z),H&&Z.viewport(I.copy(H)),F.length>0&&Ir(F,N,z),lt.length>0&&Ir(lt,N,z),xt.length>0&&Ir(xt,N,z),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Sc(M,N,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new bn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?hs:_n,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let lt=d.state.transmissionRenderTarget[H.id],xt=H.viewport||I;lt.setSize(xt.z*x.transmissionResolutionScale,xt.w*x.transmissionResolutionScale);let Tt=x.getRenderTarget(),Et=x.getActiveCubeFace(),Ft=x.getActiveMipmapLevel();x.setRenderTarget(lt),x.getClearColor(X),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Wt&&Rt.render(z);let kt=x.toneMapping;x.toneMapping=Bn;let Ut=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),st===!0&&ht.setGlobalState(x.clippingPlanes,H),Ir(M,z,H),pt.updateMultisampleRenderTarget(lt),pt.updateRenderTargetMipmap(lt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let ae=0,_e=N.length;ae<_e;ae++){let he=N[ae],oe=he.object,Nt=he.geometry,de=he.material,ee=he.group;if(de.side===Sn&&oe.layers.test(H.layers)){let $e=de.side;de.side=He,de.needsUpdate=!0,Ec(oe,z,H,Nt,de,ee),de.side=$e,de.needsUpdate=!0,jt=!0}}jt===!0&&(pt.updateMultisampleRenderTarget(lt),pt.updateRenderTargetMipmap(lt))}x.setRenderTarget(Tt,Et,Ft),x.setClearColor(X,q),Ut!==void 0&&(H.viewport=Ut),x.toneMapping=kt}function Ir(M,N,z){let H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,lt=M.length;F<lt;F++){let xt=M[F],Tt=xt.object,Et=xt.geometry,Ft=xt.group,kt=xt.material;kt.allowOverride===!0&&H!==null&&(kt=H),Tt.layers.test(z.layers)&&Ec(Tt,N,z,Et,kt,Ft)}}function Ec(M,N,z,H,F,lt){M.onBeforeRender(x,N,z,H,F,lt),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,N,z,H,M,lt),F.transparent===!0&&F.side===Sn&&F.forceSinglePass===!1?(F.side=He,F.needsUpdate=!0,x.renderBufferDirect(z,N,H,F,M,lt),F.side=Nn,F.needsUpdate=!0,x.renderBufferDirect(z,N,H,F,M,lt),F.side=Sn):x.renderBufferDirect(z,N,H,F,M,lt),M.onAfterRender(x,N,z,H,F,lt)}function Pr(M,N,z){N.isScene!==!0&&(N=St);let H=rt.get(M),F=d.state.lights,lt=d.state.shadowsArray,xt=F.state.version,Tt=W.getParameters(M,F.state,lt,N,z),Et=W.getProgramCacheKey(Tt),Ft=H.programs;H.environment=M.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(M.isMeshStandardMaterial?zt:Vt).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ft===void 0&&(M.addEventListener("dispose",tt),Ft=new Map,H.programs=Ft);let kt=Ft.get(Et);if(kt!==void 0){if(H.currentProgram===kt&&H.lightsStateVersion===xt)return Tc(M,Tt),kt}else Tt.uniforms=W.getUniforms(M),M.onBeforeCompile(Tt,x),kt=W.acquireProgram(Tt,Et),Ft.set(Et,kt),H.uniforms=Tt.uniforms;let Ut=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ut.clippingPlanes=ht.uniform),Tc(M,Tt),H.needsLights=Ju(M),H.lightsStateVersion=xt,H.needsLights&&(Ut.ambientLightColor.value=F.state.ambient,Ut.lightProbe.value=F.state.probe,Ut.directionalLights.value=F.state.directional,Ut.directionalLightShadows.value=F.state.directionalShadow,Ut.spotLights.value=F.state.spot,Ut.spotLightShadows.value=F.state.spotShadow,Ut.rectAreaLights.value=F.state.rectArea,Ut.ltc_1.value=F.state.rectAreaLTC1,Ut.ltc_2.value=F.state.rectAreaLTC2,Ut.pointLights.value=F.state.point,Ut.pointLightShadows.value=F.state.pointShadow,Ut.hemisphereLights.value=F.state.hemi,Ut.directionalShadowMap.value=F.state.directionalShadowMap,Ut.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ut.spotShadowMap.value=F.state.spotShadowMap,Ut.spotLightMatrix.value=F.state.spotLightMatrix,Ut.spotLightMap.value=F.state.spotLightMap,Ut.pointShadowMap.value=F.state.pointShadowMap,Ut.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=kt,H.uniformsList=null,kt}function wc(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=ms.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Tc(M,N){let z=rt.get(M);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function qu(M,N,z,H,F){N.isScene!==!0&&(N=St),pt.resetTextureUnits();let lt=N.fog,xt=H.isMeshStandardMaterial?N.environment:null,Tt=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:vi,Et=(H.isMeshStandardMaterial?zt:Vt).get(H.envMap||xt),Ft=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,kt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ut=!!z.morphAttributes.position,jt=!!z.morphAttributes.normal,ae=!!z.morphAttributes.color,_e=Bn;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(_e=x.toneMapping);let he=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,oe=he!==void 0?he.length:0,Nt=rt.get(H),de=d.state.lights;if(st===!0&&(B===!0||M!==S)){let ke=M===S&&H.id===E;ht.setState(H,M,ke)}let ee=!1;H.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==de.state.version||Nt.outputColorSpace!==Tt||F.isBatchedMesh&&Nt.batching===!1||!F.isBatchedMesh&&Nt.batching===!0||F.isBatchedMesh&&Nt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Nt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Nt.instancing===!1||!F.isInstancedMesh&&Nt.instancing===!0||F.isSkinnedMesh&&Nt.skinning===!1||!F.isSkinnedMesh&&Nt.skinning===!0||F.isInstancedMesh&&Nt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Nt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Nt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Nt.instancingMorph===!1&&F.morphTexture!==null||Nt.envMap!==Et||H.fog===!0&&Nt.fog!==lt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ht.numPlanes||Nt.numIntersection!==ht.numIntersection)||Nt.vertexAlphas!==Ft||Nt.vertexTangents!==kt||Nt.morphTargets!==Ut||Nt.morphNormals!==jt||Nt.morphColors!==ae||Nt.toneMapping!==_e||Nt.morphTargetsCount!==oe)&&(ee=!0):(ee=!0,Nt.__version=H.version);let $e=Nt.currentProgram;ee===!0&&($e=Pr(H,N,F));let Ui=!1,Xe=!1,Ms=!1,fe=$e.getUniforms(),tn=Nt.uniforms;if(Z.useProgram($e.program)&&(Ui=!0,Xe=!0,Ms=!0),H.id!==E&&(E=H.id,Xe=!0),Ui||S!==M){Z.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),fe.setValue(T,"projectionMatrix",M.projectionMatrix),fe.setValue(T,"viewMatrix",M.matrixWorldInverse);let Ve=fe.map.cameraPosition;Ve!==void 0&&Ve.setValue(T,dt.setFromMatrixPosition(M.matrixWorld)),K.logarithmicDepthBuffer&&fe.setValue(T,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&fe.setValue(T,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Xe=!0,Ms=!0)}if(F.isSkinnedMesh){fe.setOptional(T,F,"bindMatrix"),fe.setOptional(T,F,"bindMatrixInverse");let ke=F.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),fe.setValue(T,"boneTexture",ke.boneTexture,pt))}F.isBatchedMesh&&(fe.setOptional(T,F,"batchingTexture"),fe.setValue(T,"batchingTexture",F._matricesTexture,pt),fe.setOptional(T,F,"batchingIdTexture"),fe.setValue(T,"batchingIdTexture",F._indirectTexture,pt),fe.setOptional(T,F,"batchingColorTexture"),F._colorsTexture!==null&&fe.setValue(T,"batchingColorTexture",F._colorsTexture,pt));let en=z.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&at.update(F,z,$e),(Xe||Nt.receiveShadow!==F.receiveShadow)&&(Nt.receiveShadow=F.receiveShadow,fe.setValue(T,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(tn.envMap.value=Et,tn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(tn.envMapIntensity.value=N.environmentIntensity),Xe&&(fe.setValue(T,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&Yu(tn,Ms),lt&&H.fog===!0&&et.refreshFogUniforms(tn,lt),et.refreshMaterialUniforms(tn,H,G,it,d.state.transmissionRenderTarget[M.id]),ms.upload(T,wc(Nt),tn,pt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ms.upload(T,wc(Nt),tn,pt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&fe.setValue(T,"center",F.center),fe.setValue(T,"modelViewMatrix",F.modelViewMatrix),fe.setValue(T,"normalMatrix",F.normalMatrix),fe.setValue(T,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let ke=H.uniformsGroups;for(let Ve=0,Bo=ke.length;Ve<Bo;Ve++){let ci=ke[Ve];$t.update(ci,$e),$t.bind(ci,$e)}}return $e}function Yu(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Ju(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,N,z){let H=rt.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),rt.get(M.texture).__webglTexture=N,rt.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let z=rt.get(M);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};let Zu=T.createFramebuffer();this.setRenderTarget=function(M,N=0,z=0){U=M,C=N,R=z;let H=!0,F=null,lt=!1,xt=!1;if(M){let Et=rt.get(M);if(Et.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(T.FRAMEBUFFER,null),H=!1;else if(Et.__webglFramebuffer===void 0)pt.setupRenderTarget(M);else if(Et.__hasExternalTextures)pt.rebindTextures(M,rt.get(M.texture).__webglTexture,rt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ut=M.depthTexture;if(Et.__boundDepthTexture!==Ut){if(Ut!==null&&rt.has(Ut)&&(M.width!==Ut.image.width||M.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(M)}}let Ft=M.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(xt=!0);let kt=rt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(kt[N])?F=kt[N][z]:F=kt[N],lt=!0):M.samples>0&&pt.useMultisampledRTT(M)===!1?F=rt.get(M).__webglMultisampledFramebuffer:Array.isArray(kt)?F=kt[z]:F=kt,I.copy(M.viewport),k.copy(M.scissor),V=M.scissorTest}else I.copy(Mt).multiplyScalar(G).floor(),k.copy(Bt).multiplyScalar(G).floor(),V=Kt;if(z!==0&&(F=Zu),Z.bindFramebuffer(T.FRAMEBUFFER,F)&&H&&Z.drawBuffers(M,F),Z.viewport(I),Z.scissor(k),Z.setScissorTest(V),lt){let Et=rt.get(M.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+N,Et.__webglTexture,z)}else if(xt){let Et=N;for(let Ft=0;Ft<M.textures.length;Ft++){let kt=rt.get(M.textures[Ft]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ft,kt.__webglTexture,z,Et)}}else if(M!==null&&z!==0){let Et=rt.get(M.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Et.__webglTexture,z)}E=-1},this.readRenderTargetPixels=function(M,N,z,H,F,lt,xt,Tt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=rt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){Z.bindFramebuffer(T.FRAMEBUFFER,Et);try{let Ft=M.textures[Tt],kt=Ft.format,Ut=Ft.type;if(!K.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-H&&z>=0&&z<=M.height-F&&(M.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Tt),T.readPixels(N,z,H,F,Lt.convert(kt),Lt.convert(Ut),lt))}finally{let Ft=U!==null?rt.get(U).__webglFramebuffer:null;Z.bindFramebuffer(T.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(M,N,z,H,F,lt,xt,Tt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=rt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et)if(N>=0&&N<=M.width-H&&z>=0&&z<=M.height-F){Z.bindFramebuffer(T.FRAMEBUFFER,Et);let Ft=M.textures[Tt],kt=Ft.format,Ut=Ft.type;if(!K.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,jt),T.bufferData(T.PIXEL_PACK_BUFFER,lt.byteLength,T.STREAM_READ),M.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Tt),T.readPixels(N,z,H,F,Lt.convert(kt),Lt.convert(Ut),0);let ae=U!==null?rt.get(U).__webglFramebuffer:null;Z.bindFramebuffer(T.FRAMEBUFFER,ae);let _e=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await zh(T,_e,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,jt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,lt),T.deleteBuffer(jt),T.deleteSync(_e),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,z=0){let H=Math.pow(2,-z),F=Math.floor(M.image.width*H),lt=Math.floor(M.image.height*H),xt=N!==null?N.x:0,Tt=N!==null?N.y:0;pt.setTexture2D(M,0),T.copyTexSubImage2D(T.TEXTURE_2D,z,0,0,xt,Tt,F,lt),Z.unbindTexture()};let Ku=T.createFramebuffer(),ju=T.createFramebuffer();this.copyTextureToTexture=function(M,N,z=null,H=null,F=0,lt=null){lt===null&&(F!==0?(Ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=F,F=0):lt=0);let xt,Tt,Et,Ft,kt,Ut,jt,ae,_e,he=M.isCompressedTexture?M.mipmaps[lt]:M.image;if(z!==null)xt=z.max.x-z.min.x,Tt=z.max.y-z.min.y,Et=z.isBox3?z.max.z-z.min.z:1,Ft=z.min.x,kt=z.min.y,Ut=z.isBox3?z.min.z:0;else{let en=Math.pow(2,-F);xt=Math.floor(he.width*en),Tt=Math.floor(he.height*en),M.isDataArrayTexture?Et=he.depth:M.isData3DTexture?Et=Math.floor(he.depth*en):Et=1,Ft=0,kt=0,Ut=0}H!==null?(jt=H.x,ae=H.y,_e=H.z):(jt=0,ae=0,_e=0);let oe=Lt.convert(N.format),Nt=Lt.convert(N.type),de;N.isData3DTexture?(pt.setTexture3D(N,0),de=T.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(pt.setTexture2DArray(N,0),de=T.TEXTURE_2D_ARRAY):(pt.setTexture2D(N,0),de=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,N.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,N.unpackAlignment);let ee=T.getParameter(T.UNPACK_ROW_LENGTH),$e=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ui=T.getParameter(T.UNPACK_SKIP_PIXELS),Xe=T.getParameter(T.UNPACK_SKIP_ROWS),Ms=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,he.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,he.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ft),T.pixelStorei(T.UNPACK_SKIP_ROWS,kt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ut);let fe=M.isDataArrayTexture||M.isData3DTexture,tn=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let en=rt.get(M),ke=rt.get(N),Ve=rt.get(en.__renderTarget),Bo=rt.get(ke.__renderTarget);Z.bindFramebuffer(T.READ_FRAMEBUFFER,Ve.__webglFramebuffer),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,Bo.__webglFramebuffer);for(let ci=0;ci<Et;ci++)fe&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,rt.get(M).__webglTexture,F,Ut+ci),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,rt.get(N).__webglTexture,lt,_e+ci)),T.blitFramebuffer(Ft,kt,xt,Tt,jt,ae,xt,Tt,T.DEPTH_BUFFER_BIT,T.NEAREST);Z.bindFramebuffer(T.READ_FRAMEBUFFER,null),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||rt.has(M)){let en=rt.get(M),ke=rt.get(N);Z.bindFramebuffer(T.READ_FRAMEBUFFER,Ku),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,ju);for(let Ve=0;Ve<Et;Ve++)fe?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,en.__webglTexture,F,Ut+Ve):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,en.__webglTexture,F),tn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ke.__webglTexture,lt,_e+Ve):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ke.__webglTexture,lt),F!==0?T.blitFramebuffer(Ft,kt,xt,Tt,jt,ae,xt,Tt,T.COLOR_BUFFER_BIT,T.NEAREST):tn?T.copyTexSubImage3D(de,lt,jt,ae,_e+Ve,Ft,kt,xt,Tt):T.copyTexSubImage2D(de,lt,jt,ae,Ft,kt,xt,Tt);Z.bindFramebuffer(T.READ_FRAMEBUFFER,null),Z.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else tn?M.isDataTexture||M.isData3DTexture?T.texSubImage3D(de,lt,jt,ae,_e,xt,Tt,Et,oe,Nt,he.data):N.isCompressedArrayTexture?T.compressedTexSubImage3D(de,lt,jt,ae,_e,xt,Tt,Et,oe,he.data):T.texSubImage3D(de,lt,jt,ae,_e,xt,Tt,Et,oe,Nt,he):M.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,lt,jt,ae,xt,Tt,oe,Nt,he.data):M.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,lt,jt,ae,he.width,he.height,oe,he.data):T.texSubImage2D(T.TEXTURE_2D,lt,jt,ae,xt,Tt,oe,Nt,he);T.pixelStorei(T.UNPACK_ROW_LENGTH,ee),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,$e),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ui),T.pixelStorei(T.UNPACK_SKIP_ROWS,Xe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ms),lt===0&&N.generateMipmaps&&T.generateMipmap(de),Z.unbindTexture()},this.initRenderTarget=function(M){rt.get(M).__webglFramebuffer===void 0&&pt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?pt.setTextureCube(M,0):M.isData3DTexture?pt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?pt.setTexture2DArray(M,0):pt.setTexture2D(M,0),Z.unbindTexture()},this.resetState=function(){C=0,R=0,U=null,Z.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};function Mu(i,t,e,n){let s=document.createElement("canvas");s.className="parking-inspection-canvas",s.setAttribute("aria-label","3D\u8ECA\u4E21\u3092\u56DE\u8EE2\u3057\u640D\u50B7\u7B87\u6240\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u8A18\u9332"),i.replaceChildren(s);let r=new Gs;r.background=new Xt("#f2f6f9");let a=new De(34,1,.1,40),o=new So({canvas:s,antialias:!0,powerPreference:"low-power"});o.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),o.outputColorSpace=ze,o.toneMapping=Ua,r.add(new or("#ffffff","#73879a",2));let l=new cr("#ffffff",3);l.position.set(-4,7,5),r.add(l);let c=new xn;r.add(c);let h=new ls({color:"#d8e3e9",metalness:.18,roughness:.32,clearcoat:.8}),u=new ls({color:"#183348",metalness:.18,roughness:.2,clearcoat:1}),f=new ti({color:"#263746",roughness:.45}),p=[],g=(j,st,B,J)=>{let dt=new as;dt.moveTo(j[0][0],j[0][1]);for(let[Wt,ne]of j.slice(1))dt.lineTo(Wt,ne);dt.closePath();let At=new nr(dt,{depth:st,bevelEnabled:!0,bevelSegments:3,bevelSize:.04,bevelThickness:.04});At.translate(0,0,J);let St=new Se(At,B);St.castShadow=!0,c.add(St),p.push(St)};g([[-2.22,.42],[-2.06,.72],[-1.5,.83],[-1.13,1.02],[-.82,1.57],[-.44,1.76],[.58,1.74],[1.08,1.45],[1.52,.91],[2.02,.78],[2.2,.56],[2.13,.32],[-2.08,.32]],1.46,h,-.73);for(let j of[-1,1]){let st=j*.73;g([[-.94,1.15],[-.67,1.52],[-.37,1.63],[-.3,1.15]],.018,u,st),g([[-.21,1.15],[-.2,1.63],[.5,1.61],[.84,1.34],[.7,1.15]],.018,u,st);for(let B of[-1.35,1.28]){let J=new Se(new Xs(.39,.39,.25,24),f);J.rotation.x=Math.PI/2,J.position.set(B,.43,st),c.add(J)}}let b=new Se(new xi(100,100),new ti({color:"#edf2f6",roughness:.95}));b.rotation.x=-Math.PI/2,b.position.y=-.04,r.add(b);let m=.82,d=1.18,v=null,y=null,x=null,A=[...e],C=[],R=new hr,U=new gt,E=()=>{a.position.set(7.7*Math.sin(d)*Math.sin(m),7.7*Math.cos(d),7.7*Math.sin(d)*Math.cos(m)),a.lookAt(0,.86,0)},S=()=>o.render(r,a),I=j=>[j.world_x,j.world_y,j.world_z].every(Number.isFinite)?new D(j.world_x,j.world_y,j.world_z):new D((j.x-.5)*3.7,.92+(.5-j.y)*.8,.76),k=()=>{for(let j of C.splice(0))c.remove(j),j.traverse(st=>{st instanceof Se&&(st.geometry.dispose(),Array.isArray(st.material)?st.material.forEach(B=>B.dispose()):st.material.dispose())});for(let j of A){let st=t.find(Wt=>Wt.id===j.damage_type_id);if(!st)continue;let B=new xn;B.position.copy(I(j));let J=new D(j.world_nx??0,j.world_ny??0,j.world_nz??1);J.lengthSq()<.01&&J.set(0,0,1),B.quaternion.setFromUnitVectors(new D(0,0,1),J.normalize());let At=st.built_in_key==="scratch"||st.name.includes("\u50B7")?new sr(new rs(Array.from({length:25},(Wt,ne)=>{let T=ne/24;return new D((T-.5)*.42,Math.sin(T*Math.PI*6)*.045,0)})),48,.022,8,!1):new ir(.115,.026,10,32),St=new Se(At,new ti({color:st.color,emissive:st.color,emissiveIntensity:.65}));St.userData.markId=j.id,B.add(St),c.add(B),C.push(B)}S()},V=(j,st)=>{let B=s.getBoundingClientRect();return j<B.left||j>B.right||st<B.top||st>B.bottom?[]:(U.set((j-B.left)/B.width*2-1,-((st-B.top)/B.height)*2+1),R.setFromCamera(U,a),R.intersectObjects([...C,...p],!0))},X=(j,st)=>{let B=new Ht().getNormalMatrix(st.object.matrixWorld),J=st.face.normal.clone().applyMatrix3(B).normalize(),dt=st.point.clone().addScaledVector(J,.035);return{id:crypto.randomUUID(),damage_type_id:j,x:_r.clamp((st.point.x+2.3)/4.6,0,1),y:_r.clamp(1-st.point.y/1.9,0,1),world_x:dt.x,world_y:dt.y,world_z:dt.z,world_nx:J.x,world_ny:J.y,world_nz:J.z}},q=(j,st,B)=>{let J=V(st,B).find(dt=>p.includes(dt.object));return!J||!t.some(dt=>dt.id===j)?!1:(A.push(X(j,J)),n(A),k(),!0)},$=j=>{j.button===0&&(v={id:j.pointerId,x:j.clientX,y:j.clientY,moved:!1},s.setPointerCapture(j.pointerId))},it=j=>{if(!v||v.id!==j.pointerId)return;let st=j.clientX-v.x,B=j.clientY-v.y;Math.abs(st)+Math.abs(B)>3&&(v.moved=!0),m-=st*.009,d=_r.clamp(d-B*.006,.38,1.48),v.x=j.clientX,v.y=j.clientY,E(),S()},G=j=>{if(!v||v.id!==j.pointerId)return;let st=v.moved;if(v=null,st)return;let J=V(j.clientX,j.clientY).find(dt=>typeof dt.object.userData.markId=="string");if(J){A=A.filter(dt=>dt.id!==J.object.userData.markId),n(A),k();return}x!==null&&q(x,j.clientX,j.clientY)},ut=j=>{let st=j.target.closest("[data-damage-type]");st&&(x=Number(st.dataset.damageType),y={id:j.pointerId,typeId:x,startX:j.clientX,startY:j.clientY,moved:!1,ghost:null},st.setPointerCapture(j.pointerId),i.querySelectorAll("[data-damage-type]").forEach(B=>B.classList.remove("selected")),st.classList.add("selected"),j.preventDefault())},vt=j=>{if(!y||y.id!==j.pointerId)return;let st=y;if(Math.abs(j.clientX-st.startX)+Math.abs(j.clientY-st.startY)>7&&(st.moved=!0),!!st.moved){if(!st.ghost){let B=t.find(J=>J.id===st.typeId);st.ghost=document.createElement("div"),st.ghost.className="parking-inspection-drag-ghost",st.ghost.style.backgroundColor=B?.color??"#b33",st.ghost.textContent=`${B?.icon??""} ${B?.name??""}`,document.body.append(st.ghost)}st.ghost.style.left=`${j.clientX}px`,st.ghost.style.top=`${j.clientY}px`}},Mt=j=>{if(!y||y.id!==j.pointerId)return;let st=y;y=null,st.ghost?.remove(),st.moved&&q(st.typeId,j.clientX,j.clientY)},Bt=()=>{let j=Math.max(i.clientWidth,1),st=Math.max(i.clientHeight,1);o.setSize(j,st,!1),a.aspect=j/st,a.updateProjectionMatrix(),S()},Kt=new ResizeObserver(Bt);return Kt.observe(i),s.addEventListener("pointerdown",$),s.addEventListener("pointermove",it),s.addEventListener("pointerup",G),s.addEventListener("pointercancel",()=>{v=null}),i.addEventListener("pointerdown",ut),i.addEventListener("pointermove",vt),i.addEventListener("pointerup",Mt),i.addEventListener("pointercancel",Mt),E(),k(),Bt(),{dispose(){Kt.disconnect(),s.removeEventListener("pointerdown",$),s.removeEventListener("pointermove",it),s.removeEventListener("pointerup",G),i.removeEventListener("pointerdown",ut),i.removeEventListener("pointermove",vt),i.removeEventListener("pointerup",Mt),i.removeEventListener("pointercancel",Mt),o.dispose(),r.traverse(j=>{j instanceof Se&&(j.geometry.dispose(),Array.isArray(j.material)?j.material.forEach(st=>st.dispose()):j.material.dispose())})},placeAt:q,setMarks(j){A=[...j],k()}}}var Su={\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9:"\u8FD0\u8425\u4EEA\u8868\u76D8",\u30EC\u30F3\u30BF\u30AB\u30FC\u904B\u55B6\u7BA1\u7406:"\u79DF\u8F66\u8FD0\u8425\u7BA1\u7406",\u99D0\u8ECA\u5834\u7BA1\u7406:"\u505C\u8F66\u573A\u7BA1\u7406",\u8ECA\u4E21\u914D\u7F6E:"\u8F66\u8F86\u5E03\u5C40",\u4F4D\u7F6E\u3092\u7BA1\u7406:"\u7BA1\u7406\u505C\u8F66\u4F4D\u7F6E",\u99D0\u8ECA\u4F4D\u7F6E\u3092\u7BA1\u7406:"\u7BA1\u7406\u505C\u8F66\u4F4D\u7F6E",\u99D0\u8ECA\u5834\u8A2D\u5B9A:"\u505C\u8F66\u573A\u8BBE\u7F6E",\u767B\u9332\u6E08\u307F\u99D0\u8ECA\u30A8\u30EA\u30A2:"\u5DF2\u767B\u8BB0\u7684\u505C\u8F66\u533A\u57DF","\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u3042\u308A\u307E\u305B\u3093\u3002":"\u6682\u65E0\u505C\u8F66\u533A\u57DF\u3002","\u99D0\u8ECA\u30A8\u30EA\u30A2\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u5220\u9664\u505C\u8F66\u533A\u57DF\u3002","\u8ECA\u4E21\u30AF\u30E9\u30B9\u3001\u696D\u52D9\u72B6\u614B\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u3001\u8DDD\u96E2\u3001\u67FB\u5B9A\u9805\u76EE\u3001\u640D\u50B7\u30DE\u30FC\u30AB\u30FC\u3092\u7BA1\u7406\u3057\u307E\u3059\u3002":"\u7BA1\u7406\u8F66\u8F86\u7C7B\u522B\u3001\u4E1A\u52A1\u72B6\u6001\u3001\u9009\u9879\u3001\u8DDD\u79BB\u3001\u8BC4\u4F30\u9879\u76EE\u548C\u635F\u4F24\u6807\u8BB0\u3002","\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u8FFD\u52A0\u3068\u524A\u9664\u3092\u884C\u3044\u307E\u3059\u3002\u8ECA\u4E21\u3084\u4F5C\u696D\u4E88\u5B9A\u304C\u3042\u308B\u30A8\u30EA\u30A2\u3001\u6700\u5F8C\u306E\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002":"\u6DFB\u52A0\u6216\u5220\u9664\u505C\u8F66\u533A\u57DF\u3002\u4ECD\u6709\u8F66\u8F86\u6216\u4F5C\u4E1A\u8BB0\u5F55\u7684\u533A\u57DF\u4EE5\u53CA\u6700\u540E\u4E00\u4E2A\u533A\u57DF\u65E0\u6CD5\u5220\u9664\u3002",\u4F5C\u696D\u4E88\u5B9A:"\u4F5C\u4E1A\u8BB0\u5F55","\u53F0 \xB7 \u4F5C\u696D\u4E88\u5B9A":"\u8F86 \xB7 \u4F5C\u4E1A\u8BB0\u5F55",\u30AF\u30E9\u30B9:"\u7C7B\u522B",\u5148\u306B\u6240\u5C5E\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u5148\u9009\u62E9\u6240\u5C5E\u95E8\u5E97","\u8ECA\u4E21\u30AF\u30E9\u30B9\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026":"\u6B63\u5728\u52A0\u8F7D\u8F66\u8F86\u7C7B\u522B\u2026",\u8ECA\u4E21\u30AF\u30E9\u30B9\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F:"\u65E0\u6CD5\u52A0\u8F7D\u8F66\u8F86\u7C7B\u522B",\u30AF\u30E9\u30B9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9\u7C7B\u522B","\u8A2D\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u5220\u9664\u8BBE\u7F6E\u3002",\u767B\u9332\u8ECA\u4E21:"\u767B\u8BB0\u8F66\u8F86",\u914D\u7F6E\u30A8\u30EA\u30A2:"\u505C\u8F66\u533A\u57DF",\u8981\u5BFE\u5FDC:"\u5F85\u5904\u7406",\u30B9\u30C6\u30FC\u30BF\u30B9\u5225\u306E\u8ECA\u4E21:"\u6309\u72B6\u6001\u5206\u7C7B\u7684\u8F66\u8F86",\u30B8\u30E7\u30D6:"\u4EFB\u52A1",\u8ECA\u4E21\u4E00\u89A7:"\u8F66\u8F86\u5217\u8868",\u8ECA\u756A\u3067\u691C\u7D22:"\u6309\u8F66\u724C\u641C\u7D22",ERP\u8ECA\u4E21\u3092\u540C\u671F:"\u540C\u6B65 ERP \u8F66\u8F86",All:"\u5168\u90E8",\u3059\u3079\u3066:"\u5168\u90E8","\u8A72\u5F53\u3059\u308B\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u8F66\u8F86\u3002","\u8ECA\u4E21\u7BA1\u7406\u304B\u3089\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u524D\u5F80\u8F66\u8F86\u7BA1\u7406\u9875\u9762\u767B\u8BB0\u3002",\u8ECA\u4E21\u7BA1\u7406\u3078:"\u524D\u5F80\u8F66\u8F86\u7BA1\u7406",\u99D0\u8ECA\u30A8\u30EA\u30A2\u304C\u3042\u308A\u307E\u305B\u3093:"\u5C1A\u672A\u8BBE\u7F6E\u505C\u8F66\u533A\u57DF","\u300C\u4F4D\u7F6E\u3092\u7BA1\u7406\u300D\u304B\u3089\u30A8\u30EA\u30A2\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u8ECA\u4E21\u3092\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002":"\u901A\u8FC7\u201C\u7BA1\u7406\u505C\u8F66\u4F4D\u7F6E\u201D\u6DFB\u52A0\u533A\u57DF\u540E\uFF0C\u5373\u53EF\u5E03\u7F6E\u8F66\u8F86\u3002",\u30B5\u30A4\u30BA\u8ABF\u6574:"\u8C03\u6574\u5C3A\u5BF8",\u8A2D\u5B9A:"\u8BBE\u7F6E","\u30A8\u30EA\u30A2\u306E\u5E45\uFF08%\uFF09":"\u533A\u57DF\u5BBD\u5EA6\uFF08%\uFF09",\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4:"\u62D6\u52A8\u4EE5\u8C03\u6574\u505C\u8F66\u533A\u57DF\u5927\u5C0F",\u30E1\u30CB\u30E5\u30FC:"\u83DC\u5355",\u6B63\u5E38\u7A3C\u50CD\u4E2D:"\u8FD0\u884C\u6B63\u5E38",\u66F4\u65B0:"\u5237\u65B0",\u518D\u8A66\u884C:"\u91CD\u8BD5","\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026":"\u6B63\u5728\u52A0\u8F7D\u2026",\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F:"\u65E0\u6CD5\u52A0\u8F7D","\u64CD\u4F5C\u3092\u5B8C\u4E86\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6642\u9593\u3092\u304A\u3044\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002":"\u64CD\u4F5C\u672A\u80FD\u5B8C\u6210\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","\u4E88\u7D04\u30FB\u53D7\u4ED8":"\u9884\u7EA6\u4E0E\u63A5\u5F85",\u5E97\u8217\u7BA1\u7406:"\u95E8\u5E97\u7BA1\u7406",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8:"\u5E97\u94FA\u8D26\u6237",\u5E97\u8217\u3054\u3068\u306E\u30ED\u30B0\u30A4\u30F3\u3068\u5229\u7528\u6A29\u9650\u3092\u7BA1\u7406:"\u7BA1\u7406\u5404\u5E97\u94FA\u7684\u767B\u5F55\u8D26\u6237\u548C\u4F7F\u7528\u6743\u9650",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u5E97\u94FA\u8D26\u6237",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u5E97\u94FA\u8D26\u6237","\u5E97\u8217 / \u30A2\u30AB\u30A6\u30F3\u30C8":"\u5E97\u94FA / \u8D26\u6237",\u5E97\u8217\u30B3\u30FC\u30C9:"\u5E97\u94FA\u4EE3\u7801",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u7DE8\u96C6:"\u7F16\u8F91\u5E97\u94FA\u8D26\u6237",\u5E97\u8217\u7528\u306E\u30ED\u30B0\u30A4\u30F3ID\u3068\u5229\u7528\u6A29\u9650\u3092\u8A2D\u5B9A\u3057\u307E\u3059:"\u8BBE\u7F6E\u5E97\u94FA\u767B\u5F55 ID \u548C\u4F7F\u7528\u6743\u9650",\u5229\u7528\u6A29\u9650:"\u4F7F\u7528\u6743\u9650",\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F:"\u5458\u5DE5\u540D\u5355",\u30B9\u30BF\u30C3\u30D5\u540D:"\u5458\u5DE5\u59D3\u540D","\u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u62C5\u5F53\u8005\u9078\u629E\u306B\u4F7F\u3044\u307E\u3059":"\u7528\u4E8E\u9009\u62E9\u51FA\u79DF\u548C\u6536\u8F66\u7684\u7ECF\u529E\u5458\u5DE5",\u30B9\u30BF\u30C3\u30D5\u540D\u304C\u307E\u3060\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093:"\u5C1A\u672A\u767B\u8BB0\u5458\u5DE5\u59D3\u540D",\u7121\u52B9\u306B\u3059\u308B:"\u505C\u7528",\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7DE8\u96C6:"\u7F16\u8F91\u5458\u5DE5\u59D3\u540D","\u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u8A18\u9332\u306B\u8868\u793A\u3059\u308B\u540D\u524D\u3092\u5909\u66F4\u3057\u307E\u3059":"\u66F4\u6539\u51FA\u79DF\u548C\u6536\u8F66\u8BB0\u5F55\u4E2D\u663E\u793A\u7684\u59D3\u540D","\u8CB8\u51FA\u62C5\u5F53\uFF1A":"\u51FA\u79DF\u7ECF\u529E\uFF1A","\u8FD4\u5374\u62C5\u5F53\uFF1A":"\u6536\u8F66\u7ECF\u529E\uFF1A","\u8CB8\u51FA\u30FB\u8FD4\u5374\u6642\u306B\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u8A18\u9332\u3057\u307E\u3059":"\u767B\u8BB0\u51FA\u79DF\u548C\u6536\u8F66\u65F6\u7684\u7ECF\u529E\u5458\u5DE5",\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5:"\u7ECF\u529E\u5458\u5DE5",\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9\u5458\u5DE5","\u5148\u306B\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3078\u62C5\u5F53\u8005\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u5148\u5728\u5458\u5DE5\u540D\u5355\u4E2D\u767B\u8BB0\u7ECF\u529E\u5458\u5DE5\u3002",\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3092\u958B\u304F:"\u6253\u5F00\u5458\u5DE5\u540D\u5355",\u8CB8\u51FA\u624B\u7D9A\u304D:"\u529E\u7406\u51FA\u79DF",\u8FD4\u5374\u624B\u7D9A\u304D:"\u529E\u7406\u6536\u8F66",\u8CB8\u51FA\u3092\u78BA\u5B9A:"\u786E\u8BA4\u51FA\u79DF",\u8FD4\u5374\u3092\u78BA\u5B9A:"\u786E\u8BA4\u6536\u8F66","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u6DFB\u52A0\u5458\u5DE5\u59D3\u540D\u3002","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u66F4\u65B0\u5458\u5DE5\u59D3\u540D\u3002","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u518D\u958B\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u91CD\u65B0\u542F\u7528\u5458\u5DE5\u59D3\u540D\u3002","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7121\u52B9\u306B\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u505C\u7528\u5458\u5DE5\u59D3\u540D\u3002",employee_required:"\u8BF7\u9009\u62E9\u8D1F\u8D23\u6B64\u6B21\u64CD\u4F5C\u7684\u5458\u5DE5\u3002",invalid_employee:"\u8BF7\u68C0\u67E5\u5458\u5DE5\u59D3\u540D\u3002",\u8ECA\u4E21\u7BA1\u7406:"\u8F66\u8F86\u7BA1\u7406",\u99D0\u8ECA\u5834\u914D\u7F6E:"\u505C\u8F66\u573A\u5E03\u5C40",\u8ECA\u4E21\u4E00\u89A7\u3078\u623B\u308B:"\u8FD4\u56DE\u8F66\u8F86\u5217\u8868",\u30ED\u30B0\u30A2\u30A6\u30C8:"\u9000\u51FA\u767B\u5F55",\u6240\u5C5E\u5E97\u8217:"\u6240\u5C5E\u95E8\u5E97",\u6709\u52B9:"\u542F\u7528",\u7121\u52B9:"\u505C\u7528",\u8CB8\u51FA\u53EF\u80FD:"\u53EF\u51FA\u79DF",\u8CB8\u51FA\u4E2D:"\u51FA\u79DF\u4E2D",\u6574\u5099\u4E2D:"\u7EF4\u4FEE\u4E2D",\u767B\u9332\u62B9\u6D88:"\u5DF2\u6CE8\u9500",\u672C\u90E8:"\u603B\u90E8",\u76F4\u55B6\u5E97:"\u76F4\u8425\u5E97",\u52A0\u76DF\u5E97:"\u52A0\u76DF\u5E97",\u4E88\u7D04\u6E08\u307F:"\u5DF2\u9884\u7EA6",\u8FD4\u5374\u6E08\u307F:"\u5DF2\u5F52\u8FD8",\u30AD\u30E3\u30F3\u30BB\u30EB:"\u53D6\u6D88","\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002":"\u8D26\u6237\u6216\u5BC6\u7801\u4E0D\u6B63\u786E\u3002","\u3053\u306E\u64CD\u4F5C\u3092\u884C\u3046\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002":"\u60A8\u6CA1\u6709\u6743\u9650\u6267\u884C\u6B64\u64CD\u4F5C\u3002","\u60C5\u5831\u304C\u91CD\u8907\u3057\u3066\u3044\u307E\u3059\u3002\u5E97\u8217\u30B3\u30FC\u30C9\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u540D\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u307E\u305F\u306F\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u4FE1\u606F\u91CD\u590D\uFF0C\u8BF7\u68C0\u67E5\u95E8\u5E97\u4EE3\u7801\u3001\u8D26\u6237\u540D\u3001\u8F66\u724C\u53F7\u6216\u5458\u5DE5\u59D3\u540D\u3002","\u8ECA\u4E21\u307E\u305F\u306F\u4F5C\u696D\u4E88\u5B9A\u304C\u6B8B\u3063\u3066\u3044\u308B\u305F\u3081\u3001\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002":"\u4ECD\u6709\u8F66\u8F86\u6216\u4F5C\u4E1A\u8BA1\u5212\uFF0C\u6B64\u505C\u8F66\u533A\u57DF\u65E0\u6CD5\u5220\u9664\u3002","\u6700\u5F8C\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002":"\u65E0\u6CD5\u5220\u9664\u6700\u540E\u4E00\u4E2A\u505C\u8F66\u533A\u57DF\u3002","\u8ECA\u4E21\u307E\u305F\u306F\u4E88\u7D04\u306E\u72B6\u614B\u304C\u5909\u66F4\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002":"\u8F66\u8F86\u6216\u9884\u7EA6\u72B6\u6001\u5DF2\u66F4\u6539\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5\u3002","\u9078\u629E\u3057\u305F\u5E97\u8217\u3001\u5F79\u5272\u3001\u307E\u305F\u306F\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u6240\u9009\u95E8\u5E97\u3001\u89D2\u8272\u6216\u8F66\u8F86\u3002","\u9078\u629E\u3057\u305F\u30B9\u30BF\u30C3\u30D5\u3001\u5E97\u8217\u3001\u307E\u305F\u306F\u8ECA\u4E21\u304C\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002":"\u6240\u9009\u5458\u5DE5\u3001\u95E8\u5E97\u6216\u8F66\u8F86\u4E0D\u53EF\u7528\u3002","\u5165\u529B\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u8F93\u5165\u5185\u5BB9\u3002","\u30B7\u30B9\u30C6\u30E0\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u3057\u3070\u3089\u304F\u3057\u3066\u304B\u3089\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002":"\u53D1\u751F\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","ERP\u62E0\u70B9\u304C\u5909\u66F4\u3055\u308C\u305F\u8ECA\u4E21\u304C\u3042\u308A\u307E\u3059\u3002\u99D0\u8ECA\u5834\u30C7\u30FC\u30BF\u306E\u62E0\u70B9\u5272\u5F53\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u6709\u8F66\u8F86\u7684 ERP \u7F51\u70B9\u5DF2\u66F4\u6539\uFF0C\u8BF7\u68C0\u67E5\u505C\u8F66\u573A\u6570\u636E\u4E2D\u7684\u7F51\u70B9\u5206\u914D\u3002","\u30ED\u30B0\u30A4\u30F3\u306E\u6709\u52B9\u671F\u9650\u304C\u5207\u308C\u307E\u3057\u305F\u3002\u518D\u5EA6\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u3002","\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u6240\u5C5E\u5E97\u8217\u304C\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002":"\u8D26\u6237\u6216\u6240\u5C5E\u95E8\u5E97\u5DF2\u505C\u7528\u3002","\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u8D26\u6237\u3002","\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u8F66\u8F86\u3002","\u4E88\u7D04\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u9884\u7EA6\u3002","\u5E97\u8217\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u95E8\u5E97\u4FE1\u606F\u3002","\u5F79\u5272\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u89D2\u8272\u4FE1\u606F\u3002","\u30A2\u30AB\u30A6\u30F3\u30C8\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u8D26\u6237\u4FE1\u606F\u3002","\u9078\u629E\u3055\u308C\u305F\u6A29\u9650\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u6240\u9009\u6743\u9650\u3002","\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u9009\u62E9\u95E8\u5E97\u3002","\u4E88\u7D04\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u9884\u7EA6\u5185\u5BB9\u3002","\u5BFE\u8C61\u306E\u60C5\u5831\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u76F8\u5173\u4FE1\u606F\u3002",\u30A2\u30AB\u30A6\u30F3\u30C8:"\u8D26\u6237",\u30D1\u30B9\u30EF\u30FC\u30C9:"\u5BC6\u7801",\u30ED\u30B0\u30A4\u30F3:"\u767B\u5F55","\u30ED\u30B0\u30A4\u30F3\u4E2D\u2026":"\u6B63\u5728\u767B\u5F55\u2026","\u99D0\u8ECA\u5834\u306E\u66F4\u65B0\u901A\u77E5\u3092\u8AAD\u307F\u53D6\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002":"\u65E0\u6CD5\u8BFB\u53D6\u505C\u8F66\u573A\u66F4\u65B0\u901A\u77E5\u3002","\u99D0\u8ECA\u5834\u306E\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u63A5\u7D9A\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u63A5\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u505C\u8F66\u573A\u5B9E\u65F6\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u65B0\u8FDE\u63A5\u3002","\u672C\u90E8\u30FB\u76F4\u55B6\u5E97\u30FB\u52A0\u76DF\u5E97\u3092\u7BA1\u7406":"\u7BA1\u7406\u603B\u90E8\u3001\u76F4\u8425\u5E97\u548C\u52A0\u76DF\u5E97",\u5E97\u8217\u6570:"\u95E8\u5E97\u6570",\u76F4\u55B6:"\u76F4\u8425",\u52A0\u76DF:"\u52A0\u76DF","\u6709\u52B9 ":"\u542F\u7528 ",\u4EF6:"\u9879",\u8ECA\u4E21\u53F0\u6570:"\u8F66\u8F86\u6570",\u53F0:"\u8F86","\u6700\u8FD1\u306E\u4E88\u7D04\u30FB\u53D7\u4ED8":"\u6700\u8FD1\u7684\u9884\u7EA6\u4E0E\u63A5\u5F85",\u3059\u3079\u3066\u8868\u793A:"\u67E5\u770B\u5168\u90E8",\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u9884\u7EA6",\u8ECA\u4E21\u72B6\u6CC1:"\u8F66\u8F86\u72B6\u6001",\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u96C6\u8A08:"\u5B9E\u65F6\u7EDF\u8BA1",\u5E97\u8217\u4E00\u89A7:"\u95E8\u5E97\u5217\u8868",\u5E97\u8217\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u95E8\u5E97\u4FE1\u606F",\u3059\u3079\u3066\u306E\u5E97\u8217\u3092\u8868\u793A:"\u67E5\u770B\u6240\u6709\u95E8\u5E97",\u691C\u7D22:"\u641C\u7D22",\u5E97\u8217\u540D\u307E\u305F\u306F\u5E97\u8217\u30B3\u30FC\u30C9\u3067\u691C\u7D22:"\u6309\u95E8\u5E97\u540D\u79F0\u6216\u4EE3\u7801\u641C\u7D22",\u5E97\u8217\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093:"\u627E\u4E0D\u5230\u95E8\u5E97","\u5E97\u8217\u540D / \u30B3\u30FC\u30C9":"\u95E8\u5E97\u540D\u79F0 / \u4EE3\u7801",\u5E97\u8217\u7A2E\u5225:"\u95E8\u5E97\u7C7B\u578B",\u72B6\u614B:"\u72B6\u6001",\u64CD\u4F5C:"\u64CD\u4F5C",\u5E97\u8217\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u95E8\u5E97","\u5E97\u8217\u540D\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u540D\u3067\u691C\u7D22":"\u6309\u5E97\u94FA\u540D\u79F0\u6216\u8D26\u6237\u540D\u641C\u7D22",\u7DE8\u96C6:"\u7F16\u8F91",\u5E97\u8217\u60C5\u5831\u306E\u95B2\u89A7:"\u67E5\u770B\u95E8\u5E97\u4FE1\u606F",\u5E97\u8217\u60C5\u5831\u306E\u7BA1\u7406:"\u7BA1\u7406\u95E8\u5E97\u4FE1\u606F",\u8ECA\u4E21\u60C5\u5831\u306E\u95B2\u89A7:"\u67E5\u770B\u8F66\u8F86\u4FE1\u606F",\u8ECA\u4E21\u60C5\u5831\u306E\u7BA1\u7406:"\u7BA1\u7406\u8F66\u8F86\u4FE1\u606F",\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u95B2\u89A7:"\u67E5\u770B\u505C\u8F66\u573A\u770B\u677F",\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u64CD\u4F5C:"\u64CD\u4F5C\u505C\u8F66\u573A\u770B\u677F",\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u8A2D\u5B9A\u7BA1\u7406:"\u7BA1\u7406\u505C\u8F66\u573A\u770B\u677F\u8BBE\u7F6E","\u4E88\u7D04\u30FB\u53D7\u4ED8\u60C5\u5831\u306E\u95B2\u89A7":"\u67E5\u770B\u9884\u7EA6\u4E0E\u63A5\u5F85\u4FE1\u606F","\u4E88\u7D04\u306E\u4F5C\u6210\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D":"\u521B\u5EFA\u9884\u7EA6\u3001\u529E\u7406\u51FA\u79DF\u4E0E\u5F52\u8FD8",\u305D\u306E\u4ED6\u306E\u6A29\u9650:"\u5176\u4ED6\u6743\u9650",\u6A29\u9650\u306E\u8AAC\u660E\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u6743\u9650\u8BF4\u660E",\u3059\u3079\u3066\u306E\u72B6\u614B:"\u6240\u6709\u72B6\u6001",\u8ECA\u4E21\u60C5\u5831\u3068\u7A3C\u50CD\u72B6\u6CC1\u3092\u7BA1\u7406:"\u7BA1\u7406\u8F66\u8F86\u4FE1\u606F\u548C\u8FD0\u8425\u72B6\u6001","\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u30E1\u30FC\u30AB\u30FC\u3001\u8ECA\u7A2E\u3067\u691C\u7D22":"\u6309\u8F66\u724C\u53F7\u3001\u5236\u9020\u5546\u6216\u8F66\u578B\u641C\u7D22","\u8ECA\u4E21 / \u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8":"\u8F66\u8F86 / \u8F66\u724C\u53F7",\u56FA\u5B9AID:"\u56FA\u5B9A ID",\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093:"\u627E\u4E0D\u5230\u8F66\u8F86",\u8ECA\u4E21\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u8F66\u8F86",ERP\u8ECA\u4E21\u3092\u30DC\u30FC\u30C9\u3078\u53CD\u6620:"\u5C06 ERP \u8F66\u8F86\u540C\u6B65\u5230\u770B\u677F","\u914D\u7F6E\u30FB\u72B6\u614B\u3092\u4FDD\u5B58":"\u4FDD\u5B58\u4F4D\u7F6E\u548C\u72B6\u6001",\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u30EC\u30A4\u30A2\u30A6\u30C8:"\u505C\u8F66\u533A\u57DF\u5E03\u5C40",\u672A\u914D\u7F6E:"\u672A\u5206\u914D","\u4F4D\u7F6E X":"\u4F4D\u7F6E X","\u4F4D\u7F6E Y":"\u4F4D\u7F6E Y",\u99D0\u8ECA\u533A\u753B:"\u505C\u8F66\u533A\u57DF",\u696D\u52D9\u72B6\u614B:"\u4E1A\u52A1\u72B6\u6001",\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3:"\u8F66\u8F86\u9009\u9879",\u6D17\u8ECA\u5F85\u3061:"\u5F85\u6D17\u8F66",\u7D66\u6CB9\u5F85\u3061:"\u5F85\u52A0\u6CB9",\u4FEE\u7406\u5F85\u3061:"\u5F85\u7EF4\u4FEE",\u672A\u8A55\u4FA1:"\u672A\u8BC4\u4F30",\u640D\u50B7\u30DE\u30FC\u30AB\u30FC:"\u635F\u4F24\u6807\u8BB0","3D\u8ECA\u4E21\u691C\u67FB\u30FB\u640D\u50B7\u3092\u7DE8\u96C6":"3D \u8F66\u8F86\u68C0\u67E5 / \u7F16\u8F91\u635F\u4F24",\u640D\u50B7\u30DE\u30FC\u30AB\u30FC\u306E\u30D7\u30EC\u30D3\u30E5\u30FC:"\u635F\u4F24\u6807\u8BB0\u9884\u89C8","3D\u691C\u67FB\u3067\u640D\u50B7\u4F4D\u7F6E\u3092\u7DE8\u96C6":"\u5728 3D \u68C0\u67E5\u4E2D\u7F16\u8F91\u635F\u4F24\u4F4D\u7F6E",\u30E1\u30E2:"\u5907\u6CE8",\u72B6\u614B\u306A\u3057:"\u65E0\u72B6\u6001",\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5:"\u62D6\u52A8\u4EE5\u79FB\u52A8","\u8A73\u7D30\u30FB\u72B6\u614B":"\u8BE6\u60C5\u4E0E\u72B6\u6001",\u904B\u7528\u4E2D:"\u8FD0\u8425\u4E2D",\u505C\u6B62\u4E2D:"\u5DF2\u505C\u7528",\u4E0A\u3078:"\u4E0A\u79FB",\u4E0B\u3078:"\u4E0B\u79FB",\u30EC\u30A4\u30A2\u30A6\u30C8:"\u5E03\u5C40",\u7DDA\u63CF\u753B\u3092\u7D42\u4E86:"\u7ED3\u675F\u7ED8\u7EBF",\u7DDA\u3092\u63CF\u304F:"\u7ED8\u5236\u7EBF\u6761",\u505C\u6B62:"\u505C\u7528",\u518D\u958B:"\u91CD\u65B0\u542F\u7528",\u524A\u9664:"\u5220\u9664",\u99D0\u8ECA\u533A\u753B\u306E\u30E9\u30A4\u30F3:"\u505C\u8F66\u533A\u57DF\u7EBF\u6761",\u3053\u3053\u3078\u8ECA\u4E21\u3092\u30C9\u30E9\u30C3\u30B0:"\u5C06\u8F66\u8F86\u62D6\u52A8\u5230\u6B64\u5904",\u7DDA\u306E\u8272:"\u7EBF\u6761\u989C\u8272",\u6700\u5F8C\u306E\u7DDA\u3092\u53D6\u308A\u6D88\u3059:"\u64A4\u9500\u6700\u540E\u4E00\u6761\u7EBF","\u56F3\u9762\u5185\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u533A\u753B\u7DDA\u3092\u63CF\u304D\u307E\u3059\u3002\u6307\u3092\u96E2\u3059\u3068\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002":"\u5728\u56FE\u4E2D\u62D6\u52A8\u4EE5\u7ED8\u5236\u533A\u57DF\u7EBF\u6761\uFF0C\u677E\u5F00\u9F20\u6807\u540E\u81EA\u52A8\u4FDD\u5B58\u3002","\u8ECA\u4E21\u306E\u283F\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u914D\u7F6E\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u5909\u66F4\u306F\u81EA\u52D5\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002":"\u62D6\u52A8\u8F66\u8F86\u7684 \u283F \u6807\u8BB0\u53EF\u8C03\u6574\u4F4D\u7F6E\uFF0C\u4FEE\u6539\u4F1A\u81EA\u52A8\u4FDD\u5B58\u3002","\u79FB\u52D5\u30FB\u4F5C\u696D\u4E88\u5B9A":"\u79FB\u52A8\u8F66\u8F86 / \u4F5C\u4E1A\u8BA1\u5212",\u4E88\u5B9A:"\u8BA1\u5212",\u5B8C\u4E86:"\u5B8C\u6210",\u4E88\u5B9A\u65E5\u6642:"\u8BA1\u5212\u65F6\u95F4",\u4E88\u5B9A\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u8BA1\u5212",\u4E88\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u8BA1\u5212",\u99D0\u8ECA\u30A8\u30EA\u30A2\u540D:"\u505C\u8F66\u533A\u57DF\u540D\u79F0","Google Maps \u6848\u5185URL":"Google Maps \u5BFC\u822A URL",\u30A8\u30EA\u30A2\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u533A\u57DF",\u8ECA\u4E21\u30AF\u30E9\u30B9:"\u8F66\u8F86\u7C7B\u522B",\u30AF\u30E9\u30B9\u540D:"\u7C7B\u522B\u540D\u79F0",\u8FFD\u52A0:"\u6DFB\u52A0",\u72B6\u614B\u540D:"\u72B6\u6001\u540D\u79F0",\u30AA\u30D7\u30B7\u30E7\u30F3\u540D:"\u9009\u9879\u540D\u79F0","\u30D5\u30E9\u30F3\u30C1\u30E3\u30A4\u30BA\u5E97\u8217 / \u62E0\u70B9":"\u52A0\u76DF\u95E8\u5E97 / \u7F51\u70B9","\u65E7Parking\u306E\u5E97\u8217\u306F\u73FE\u5728\u306EERP\u62E0\u70B9\u306B\u5C5E\u3059\u308B\u5E97\u8217\u30C7\u30FC\u30BF\u3078\u79FB\u884C\u3057\u307E\u3059\u3002\u30D5\u30E9\u30F3\u30C1\u30E3\u30A4\u30BA\u62E0\u70B9\u3068\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u306FERP\u306E\u300C\u5E97\u8217\u300D\u300C\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u300D\u304B\u3089\u7BA1\u7406\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u65E7\u505C\u8F66\u7CFB\u7EDF\u7684\u95E8\u5E97\u6570\u636E\u5C06\u8FC1\u79FB\u5230\u5F53\u524D ERP \u7F51\u70B9\u3002\u8BF7\u5728 ERP \u7684\u201C\u95E8\u5E97\u201D\u548C\u201C\u5E97\u94FA\u8D26\u6237\u201D\u4E2D\u7BA1\u7406\u52A0\u76DF\u7F51\u70B9\u53CA\u8D26\u6237\u3002",\u5E97\u8217\u540D:"\u95E8\u5E97\u540D\u79F0",\u5E97\u8217\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u95E8\u5E97",\u62E0\u70B9\u9593\u8DDD\u96E2:"\u505C\u8F66\u533A\u57DF\u95F4\u8DDD\u79BB","\u5206\u3092\u7A7A\u6B04\u306B\u3059\u308B\u3068\u65E2\u5B58\u306E\u8DDD\u96E2\u3092\u524A\u9664\u3057\u307E\u3059\u3002":"\u5206\u949F\u7559\u7A7A\u5C06\u5220\u9664\u5DF2\u6709\u8DDD\u79BB\u8BBE\u7F6E\u3002",\u5206:"\u5206\u949F",\u4FDD\u5B58:"\u4FDD\u5B58",\u5E97\u8217\u304B\u3089\u99D0\u8ECA\u5834\u307E\u3067:"\u95E8\u5E97\u81F3\u505C\u8F66\u573A","\u5E97\u8217\u3068\u99D0\u8ECA\u5834\u306E\u6240\u8981\u6642\u9593\u30FB\u8DDD\u96E2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002":"\u8BBE\u7F6E\u95E8\u5E97\u4E0E\u505C\u8F66\u573A\u4E4B\u95F4\u7684\u65F6\u95F4\u548C\u8DDD\u79BB\u3002",\u8DDD\u96E2\u8A2D\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u8DDD\u79BB\u8BBE\u7F6E",\u5E97\u8217\u3068\u99D0\u8ECA\u5834\u3092\u5148\u306B\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u5148\u6DFB\u52A0\u95E8\u5E97\u548C\u505C\u8F66\u573A",\u67FB\u5B9A\u9805\u76EE:"\u8BC4\u4F30\u9879\u76EE",\u5358\u4F4D:"\u5355\u4F4D",\u6A19\u6E96:"\u9ED8\u8BA4",\u67FB\u5B9A\u9805\u76EE\u540D:"\u8BC4\u4F30\u9879\u76EE\u540D\u79F0",\u640D\u50B7\u540D:"\u635F\u4F24\u540D\u79F0",\u914D\u7F6E\u3092\u53D6\u308A\u6D88\u3059:"\u64A4\u9500\u4F4D\u7F6E\u4FEE\u6539","\u8ECA\u4E21\u306E\u914D\u7F6E\u30FB\u696D\u52D9\u72B6\u614B\u3092\u7BA1\u7406":"\u7BA1\u7406\u8F66\u8F86\u4F4D\u7F6E\u548C\u4E1A\u52A1\u72B6\u6001","\u95B2\u89A7\u5C02\u7528\u3067\u3059\u3002\u914D\u7F6E\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u99D0\u8ECA\u5834\u66F8\u304D\u8FBC\u307F\u6A29\u9650\u304C\u5FC5\u8981\u3067\u3059\u3002":"\u5F53\u524D\u4E3A\u53EA\u8BFB\u6A21\u5F0F\u3002\u9700\u8981\u505C\u8F66\u573A\u5199\u5165\u6743\u9650\u624D\u80FD\u8C03\u6574\u4F4D\u7F6E\u3002","\u4E88\u7D04\u756A\u53F7\u3001\u304A\u5BA2\u69D8\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3067\u691C\u7D22":"\u6309\u9884\u7EA6\u7F16\u53F7\u3001\u5BA2\u6237\u6216\u8F66\u724C\u53F7\u641C\u7D22","\u4E88\u7D04\u3092\u767B\u9332\u3057\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D\u3092\u884C\u3044\u307E\u3059":"\u767B\u8BB0\u9884\u7EA6\u5E76\u529E\u7406\u51FA\u79DF\u3001\u5F52\u8FD8\u624B\u7EED","\u4E88\u7D04\u756A\u53F7 / \u5E97\u8217":"\u9884\u7EA6\u7F16\u53F7 / \u95E8\u5E97",\u304A\u5BA2\u69D8\u60C5\u5831:"\u5BA2\u6237\u4FE1\u606F",\u5229\u7528\u671F\u9593:"\u4F7F\u7528\u671F\u95F4",\u53D7\u4ED8\u64CD\u4F5C:"\u63A5\u5F85\u64CD\u4F5C",\u3059\u3079\u3066\u306E\u4E88\u7D04:"\u6240\u6709\u9884\u7EA6","\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u6765\u5E97\u6642\u306B\u53D7\u4ED8\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044":"\u6682\u65E0\u9884\u7EA6\u3002\u5BA2\u6237\u5230\u5E97\u65F6\u8BF7\u767B\u8BB0\u63A5\u5F85\u4FE1\u606F\u3002",\u4E88\u7D04\u3092\u4F5C\u6210:"\u521B\u5EFA\u9884\u7EA6",\u4E88\u7D04\u3092\u4FDD\u5B58:"\u4FDD\u5B58\u9884\u7EA6",\u304A\u5BA2\u69D8\u3068\u5229\u7528\u671F\u9593\u3092\u767B\u9332\u3057\u307E\u3059:"\u767B\u8BB0\u5BA2\u6237\u548C\u4F7F\u7528\u671F\u9650",\u304A\u5BA2\u69D8\u306E\u6C0F\u540D:"\u5BA2\u6237\u59D3\u540D",\u96FB\u8A71\u756A\u53F7:"\u7535\u8BDD\u53F7\u7801",\u8CB8\u51FA\u4E88\u5B9A\u65E5\u6642:"\u8BA1\u5212\u51FA\u79DF\u65F6\u95F4",\u53D7\u4ED8\u5E97\u8217:"\u63A5\u5F85\u95E8\u5E97",\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9\u95E8\u5E97",\u8ECA\u4E21\u306E\u4E88\u7D04:"\u9884\u7EA6\u8F66\u8F86",\u8CB8\u51FA\u53EF\u80FD\u306A\u8ECA\u4E21\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9\u53EF\u51FA\u79DF\u7684\u8F66\u8F86","\u8CB8\u51FA\u65E5\u6642\u3068\u8FD4\u5374\u65E5\u6642\u3092\u6B63\u3057\u304F\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u6B63\u786E\u586B\u5199\u51FA\u79DF\u548C\u5F52\u8FD8\u65F6\u95F4\u3002","\u8CB8\u51FA\u624B\u7D9A\u304D\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002":"\u51FA\u79DF\u624B\u7EED\u5DF2\u5B8C\u6210\u3002","\u8FD4\u5374\u624B\u7D9A\u304D\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002":"\u5F52\u8FD8\u624B\u7EED\u5DF2\u5B8C\u6210\u3002","\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3057\u305F\u3002":"\u9884\u7EA6\u5DF2\u53D6\u6D88\u3002",\u4E88\u7D04\u756A\u53F7:"\u9884\u7EA6\u7F16\u53F7",\u304A\u5BA2\u69D8:"\u5BA2\u6237",\u8ECA\u4E21:"\u8F66\u8F86","\u8ECA\u4E21\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026":"\u6B63\u5728\u52A0\u8F7D\u8F66\u8F86\u2026","\u8ECA\u4E21\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5E97\u8217\u3092\u9078\u629E\u3057\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u65E0\u6CD5\u52A0\u8F7D\u8F66\u8F86\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u95E8\u5E97\u3002",\u8FD4\u5374\u4E88\u5B9A\u65E5\u6642:"\u8BA1\u5212\u5F52\u8FD8\u65F6\u95F4","\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u53D6\u6D88\u6B64\u9884\u7EA6\u5417\uFF1F","\u3053\u306E\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u5220\u9664\u6B64\u8BA1\u5212\u5417\uFF1F","\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u5220\u9664\u6B64\u505C\u8F66\u533A\u57DF\u5417\uFF1F","\u3053\u306E\u8A2D\u5B9A\u9805\u76EE\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u5220\u9664\u6B64\u8BBE\u7F6E\u9879\u5417\uFF1F","\u4E88\u5B9A\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002":"\u8BA1\u5212\u5DF2\u66F4\u65B0\u3002","\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002":"\u8BA1\u5212\u5DF2\u5220\u9664\u3002","\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u4FDD\u5B58\u3002",\u8A2D\u5B9A\u3092\u4FDD\u5B58:"\u4FDD\u5B58\u8BBE\u7F6E",\u8A2D\u5B9A\u9805\u76EE:"\u8BBE\u7F6E\u9879",\u30A2\u30AB\u30A6\u30F3\u30C8\u540D:"\u8D26\u6237\u540D","\u534A\u89D2\u82F1\u6570\u5B57\u30FB\u8A18\u53F7 3\uFF5E64 \u6587\u5B57":"3\u201364 \u4E2A\u534A\u89D2\u5B57\u6BCD\u3001\u6570\u5B57\u6216\u7B26\u53F7",\u6C0F\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u59D3\u540D",\u521D\u671F\u30D1\u30B9\u30EF\u30FC\u30C9:"\u521D\u59CB\u5BC6\u7801","12 \u6587\u5B57\u4EE5\u4E0A":"\u81F3\u5C11 12 \u4E2A\u5B57\u7B26",\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u72B6\u614B:"\u8D26\u6237\u72B6\u6001","\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u518D\u8A2D\u5B9A\uFF08\u4EFB\u610F\uFF09":"\u91CD\u7F6E\u5BC6\u7801\uFF08\u53EF\u9009\uFF09",\u7A7A\u6B04\u306E\u5834\u5408\u306F\u5909\u66F4\u3057\u307E\u305B\u3093:"\u7559\u7A7A\u5219\u4E0D\u66F4\u6539","\u8ECA\u53F0\u756A\u53F7\uFF08\u4EFB\u610F\uFF09":"\u8F66\u67B6\u53F7\uFF08\u53EF\u9009\uFF09",\u8ECA\u53F0\u756A\u53F7:"\u8F66\u67B6\u53F7",\u30E1\u30FC\u30AB\u30FC:"\u5236\u9020\u5546",\u8ECA\u7A2E:"\u8F66\u578B","\u4F8B\uFF1AToyota":"\u4F8B\u5982\uFF1AToyota","\u4F8B\uFF1APrius":"\u4F8B\u5982\uFF1APrius","\u5E74\u5F0F\uFF08\u4EFB\u610F\uFF09":"\u5E74\u4EFD\uFF08\u53EF\u9009\uFF09",\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8:"\u8F66\u724C\u53F7",\u30D7\u30EC\u30FC\u30C8\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u8F66\u724C\u53F7",\u8ECA\u4E21\u60C5\u5831\u3092\u767B\u9332\u3057\u307E\u3059:"\u767B\u8BB0\u8F66\u8F86\u4FE1\u606F",\u8ECA\u4E21\u60C5\u5831\u3092\u7DE8\u96C6:"\u7F16\u8F91\u8F66\u8F86\u4FE1\u606F",\u56FA\u5B9A\u8ECA\u4E21ID\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093:"\u56FA\u5B9A\u8F66\u8F86 ID \u4E0D\u53EF\u66F4\u6539",\u8ECA\u4E21\u306E\u72B6\u614B:"\u8F66\u8F86\u72B6\u6001",\u8ECA\u4E21\u3092\u4E88\u7D04:"\u9884\u7EA6\u8F66\u8F86",\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB:"\u53D6\u6D88\u9884\u7EA6","\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\uFF08\u65B0\u898F ":"\u505C\u8F66\u573A\u770B\u677F\u5DF2\u66F4\u65B0\uFF08\u65B0\u589E "," \u53F0\u3001\u66F4\u65B0 ":" \u8F86\uFF0C\u66F4\u65B0 ","\uFF09\u3002":"\uFF09\u3002",\u4E0A\u4F4D\u304B\u3089\u30AB\u30F3\u30DE\u533A\u5207\u308A:"\u6309\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\u4EE5\u9017\u53F7\u5206\u9694","\u512A\u5148\u8ECA\u4E21\u30AF\u30E9\u30B9\uFF08\u4E0A\u4F4D\u304B\u3089\u30AB\u30F3\u30DE\u533A\u5207\u308A\uFF09":"\u4F18\u5148\u8F66\u8F86\u7C7B\u522B\uFF08\u6309\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\uFF0C\u4EE5\u9017\u53F7\u5206\u9694\uFF09","\u56F3\u9762\u30B5\u30A4\u30BA\u3001\u53CE\u5BB9\u53F0\u6570\u3001\u512A\u5148\u30AF\u30E9\u30B9\u3092\u8A2D\u5B9A":"\u8BBE\u7F6E\u56FE\u7EB8\u5C3A\u5BF8\u3001\u5BB9\u91CF\u548C\u4F18\u5148\u7C7B\u522B","\u56F3\u9762\u306E\u9AD8\u3055\uFF08px\uFF09":"\u56FE\u7EB8\u9AD8\u5EA6\uFF08px\uFF09","\u56F3\u9762\u306E\u5E45\uFF08%\uFF09":"\u56FE\u7EB8\u5BBD\u5EA6\uFF08%\uFF09","\u53CE\u5BB9\u53F0\u6570\uFF08\u7121\u5236\u9650\u306F\u7A7A\u6B04\uFF09":"\u5BB9\u91CF\uFF08\u4E0D\u9650\u65F6\u7559\u7A7A\uFF09",\u7A3C\u50CD\u72B6\u614B:"\u8FD0\u8425\u72B6\u6001",\u30A8\u30EA\u30A2\u540D:"\u533A\u57DF\u540D\u79F0","3D\u8ECA\u4E21\u691C\u67FB":"3D \u8F66\u8F86\u68C0\u67E5","\u30C9\u30E9\u30C3\u30B0\u3067360\xB0\u56DE\u8EE2\u3002\u7A2E\u985E\u3092\u9078\u3093\u3067\u8ECA\u4F53\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u8A18\u9332\u3001\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u524A\u9664\u3057\u307E\u3059\u3002":"\u62D6\u52A8\u53EF\u65CB\u8F6C 360\xB0\u3002\u9009\u62E9\u7C7B\u578B\u540E\u70B9\u51FB\u8F66\u8EAB\u5373\u53EF\u8BB0\u5F55\uFF0C\u70B9\u51FB\u6807\u8BB0\u53EF\u5220\u9664\u3002",\u9589\u3058\u308B:"\u5173\u95ED",\u7533\u3057\u8A33\u3042\u308A\u307E\u305B\u3093:"\u62B1\u6B49","\uFF5E":"\u2013",\u524D\u3078:"\u4E0A\u4E00\u9875",\u6B21\u3078:"\u4E0B\u4E00\u9875",\u4EF6\u3092\u8868\u793A:"\u9879",\u4E0D\u660E:"\u672A\u77E5",\u76F4\u55B6\u5E97\u307E\u305F\u306F\u52A0\u76DF\u5E97\u3092\u767B\u9332\u3057\u307E\u3059:"\u767B\u8BB0\u76F4\u8425\u5E97\u6216\u52A0\u76DF\u5E97","\u4F8B\uFF1ATKY-001":"\u4F8B\u5982\uFF1ATKY-001",\u5E97\u8217\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u95E8\u5E97\u540D\u79F0",\u96FB\u8A71\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801",\u5E74\u5F0F:"\u5E74\u4EFD",\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F:"\u6253\u5F00\u83DC\u5355","\u30AA\u30D5\u30E9\u30A4\u30F3\u7528\u30A2\u30D7\u30EA\u306E\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u79BB\u7EBF\u5E94\u7528\u6CE8\u518C\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002","\u76F4\u55B6 ":"\u76F4\u8425 ","\u52A0\u76DF ":"\u52A0\u76DF ","\u5E97 \xB7 ":"\u5BB6 \xB7 ","\u8CB8\u51FA\u53EF\u80FD ":"\u53EF\u51FA\u79DF ","\u6574\u5099\u4E2D ":"\u7EF4\u4FEE\u4E2D ",\u6A29\u9650:"\u6743\u9650",\u76F4\u55B6\u5E97\u307E\u305F\u306F\u52A0\u76DF\u5E97:"\u76F4\u8425\u5E97\u6216\u52A0\u76DF\u5E97",\u8ECA\u4E21\u3092\u3059\u3079\u3066\u8868\u793A:"\u67E5\u770B\u6240\u6709\u8F66\u8F86",\u8ECA\u4E21\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5:"\u62D6\u52A8\u8F66\u8F86\u4EE5\u79FB\u52A8",\u65E5\u672C\u8A9E:"\u65E5\u8BED",\u4E2D\u6587:"\u4E2D\u6587",\u8A00\u8A9E\u5207\u66FF:"\u8BED\u8A00\u5207\u6362",\u30B9\u30AD\u30C3\u30D7:"\u8DF3\u8FC7",\u672A\u5272\u308A\u5F53\u3066:"\u672A\u5206\u914D",\u5E97\u8217\u3092\u9078\u629E\u3057\u76F4\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u91CD\u65B0\u9009\u62E9\u95E8\u5E97",\u99D0\u8ECA\u5834\u66F8\u304D\u8FBC\u307F\u6A29\u9650:"\u505C\u8F66\u573A\u5199\u5165\u6743\u9650",\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9",\u9001\u308A\u5148:"\u76EE\u7684\u5730","\u69D8\u3078\u306E\u8CB8\u51FA\u624B\u7D9A\u304D\u3092\u884C\u3044\u307E\u3059\u304B\uFF1F":"\u8981\u4E3A\u8BE5\u5BA2\u6237\u529E\u7406\u51FA\u79DF\u624B\u7EED\u5417\uFF1F","\u69D8\u306E\u8FD4\u5374\u3092\u78BA\u8A8D\u3057\u307E\u3059\u304B\uFF1F":"\u8981\u786E\u8BA4\u8BE5\u5BA2\u6237\u5DF2\u5F52\u8FD8\u8F66\u8F86\u5417\uFF1F","\u69D8\u306E\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u304B\uFF1F":"\u8981\u53D6\u6D88\u8BE5\u5BA2\u6237\u7684\u9884\u7EA6\u5417\uFF1F","\u8ECA\u4E21 ":"\u8F66\u8F86 "," \u306F\u8CB8\u51FA\u4E2D\u306B\u306A\u308A\u307E\u3059\u3002":" \u5C06\u53D8\u4E3A\u51FA\u79DF\u4E2D\u3002","\u8ECA\u4E21\u306F\u8CB8\u51FA\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002":"\u8F66\u8F86\u5C06\u53D8\u4E3A\u53EF\u51FA\u79DF\u72B6\u6001\u3002","\u5E97\u8217\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406":"\u521B\u5EFA\u548C\u7BA1\u7406\u95E8\u5E97\u4FE1\u606F","\u8ECA\u4E21\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406":"\u521B\u5EFA\u548C\u7BA1\u7406\u8F66\u8F86\u4FE1\u606F","\u8ECA\u4E21\u4F4D\u7F6E\u30FB\u696D\u52D9\u72B6\u6CC1\u306E\u66F4\u65B0":"\u66F4\u65B0\u8F66\u8F86\u4F4D\u7F6E\u548C\u4E1A\u52A1\u72B6\u6001","\u99D0\u8ECA\u5834\u30FB\u30AF\u30E9\u30B9\u30FB\u72B6\u614B\u306A\u3069\u306E\u8A2D\u5B9A\u7BA1\u7406":"\u7BA1\u7406\u505C\u8F66\u573A\u3001\u7C7B\u522B\u548C\u72B6\u6001\u7B49\u8BBE\u7F6E",\u4E88\u7D04\u60C5\u5831\u3068\u53D7\u4ED8\u72B6\u6CC1\u306E\u95B2\u89A7:"\u67E5\u770B\u9884\u7EA6\u4FE1\u606F\u548C\u63A5\u5F85\u72B6\u6001",\u30EC\u30A4\u30A2\u30A6\u30C8\u3092\u4FDD\u5B58:"\u4FDD\u5B58\u5E03\u5C40",\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5:"\u62D6\u52A8\u4EE5\u79FB\u52A8","3D\u8ECA\u4E21\u3092\u56DE\u8EE2\u3057\u640D\u50B7\u7B87\u6240\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u8A18\u9332":"\u65CB\u8F6C 3D \u8F66\u8F86\u5E76\u70B9\u51FB\u635F\u4F24\u90E8\u4F4D\u8FDB\u884C\u8BB0\u5F55","\u30D0\u30FC\u30B8\u30E7\u30F3 ":"\u7248\u672C "},J_=new Map(Object.entries(Su).map(([i,t])=>[t,i])),Z_=Object.entries(Su).sort(([i],[t])=>t.length-i.length),K_=[...J_.entries()].sort(([i],[t])=>t.length-i.length);function yr(i,t){return(t==="zh"?Z_:K_).reduce((n,[s,r])=>n.replaceAll(s,r),i)}var Eu=new Set(["dashboard","reservations","sites","accounts","vehicles","parking"]);function wu(i,t){let e=String(i||"").replace(/^#\/?/,"").split(/[?&]/,1)[0];return Eu.has(e)&&t.includes(e)?e:"dashboard"}function xr(i){return`#${Eu.has(i)?i:"dashboard"}`}var re=(i,t=document)=>t.querySelector(i),Oe=re("#app"),Lu=document.querySelector('meta[name="app-version"]')?.content??"\u4E0D\u660E",mc=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),j_=i=>{if(Array.isArray(i))return i.map(String);if(typeof i!="string")return[];try{let t=JSON.parse(i);return Array.isArray(t)?t.map(String):[]}catch{return[]}},Tu={dashboard:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',site:'<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M8 9v.01M8 12v.01M8 15v.01M8 18v.01M15 12v.01M15 15v.01M15 18v.01"/>',parking:'<path d="M5 21V3h8a6 6 0 0 1 0 12H5"/><path d="M9 7h4a2 2 0 0 1 0 4H9z"/>',people:'<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',vehicle:'<path d="m5 11 1.5-5h11L19 11M3 11h18v8H3zM5 19v2m14-2v2"/><circle cx="7.5" cy="15" r="1"/><circle cx="16.5" cy="15" r="1"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',plus:'<path d="M12 5v14M5 12h14"/>',logout:'<path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',sites:'<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>',team:'<circle cx="9" cy="8" r="4"/><path d="M2 21v-2a7 7 0 0 1 14 0v2M16 4a4 4 0 0 1 0 8m2 3a6 6 0 0 1 4 6"/>',fleet:'<path d="m5 11 1.5-5h11L19 11M3 11h18v8H3z"/><circle cx="7.5" cy="15" r="1"/><circle cx="16.5" cy="15" r="1"/>',arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',refresh:'<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2"/>'},Ce=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Tu[i]??Tu.dashboard}</svg>`,Q_={dashboard:"\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",reservations:"\u4E88\u7D04\u30FB\u53D7\u4ED8",sites:"\u5E97\u8217\u7BA1\u7406",accounts:"\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8",vehicles:"\u8ECA\u4E21\u7BA1\u7406",parking:"\u99D0\u8ECA\u5834\u7BA1\u7406"},tv={active:"\u6709\u52B9",disabled:"\u7121\u52B9",inactive:"\u7121\u52B9",available:"\u8CB8\u51FA\u53EF\u80FD",rented:"\u8CB8\u51FA\u4E2D",maintenance:"\u6574\u5099\u4E2D",retired:"\u767B\u9332\u62B9\u6D88",headquarters:"\u672C\u90E8",direct:"\u76F4\u55B6\u5E97",franchise:"\u52A0\u76DF\u5E97",reserved:"\u4E88\u7D04\u6E08\u307F",checked_in:"\u8CB8\u51FA\u4E2D",completed:"\u8FD4\u5374\u6E08\u307F",cancelled:"\u30AD\u30E3\u30F3\u30BB\u30EB"},ev={active:"green",available:"green",completed:"gray",rented:"blue",checked_in:"blue",maintenance:"orange",reserved:"orange",disabled:"red",cancelled:"gray",retired:"gray"},Rr=i=>tv[i]??i,ai=i=>`<span class="badge badge-${ev[i]??(i==="headquarters"?"blue":"gray")}">${mc(Rr(i))}</span>`,L=i=>mc(i).replace(/[^\u0000-\u007F]/gu,t=>`&#${t.codePointAt(0)};`),cc=i=>{let t=new Date(i),e=Di()==="zh"?"zh-CN":"ja-JP";return Number.isNaN(t.getTime())?mc(i):new Intl.DateTimeFormat(e,{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(t)},ve=i=>({invalid_credentials:"\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002",forbidden:"\u3053\u306E\u64CD\u4F5C\u3092\u884C\u3046\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002",resource_conflict:"\u60C5\u5831\u304C\u91CD\u8907\u3057\u3066\u3044\u307E\u3059\u3002\u5E97\u8217\u30B3\u30FC\u30C9\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u540D\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u307E\u305F\u306F\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",in_use:"\u8ECA\u4E21\u307E\u305F\u306F\u4F5C\u696D\u4E88\u5B9A\u304C\u6B8B\u3063\u3066\u3044\u308B\u305F\u3081\u3001\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002",last_lot:"\u6700\u5F8C\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002",reservation_conflict:"\u8ECA\u4E21\u307E\u305F\u306F\u4E88\u7D04\u306E\u72B6\u614B\u304C\u5909\u66F4\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",invalid_reference:"\u9078\u629E\u3057\u305F\u30B9\u30BF\u30C3\u30D5\u3001\u5E97\u8217\u3001\u307E\u305F\u306F\u8ECA\u4E21\u304C\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002",invalid_request:"\u5165\u529B\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",internal_error:"\u30B7\u30B9\u30C6\u30E0\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u3057\u3070\u3089\u304F\u3057\u3066\u304B\u3089\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",site_mapping_conflict:"ERP\u62E0\u70B9\u304C\u5909\u66F4\u3055\u308C\u305F\u8ECA\u4E21\u304C\u3042\u308A\u307E\u3059\u3002\u99D0\u8ECA\u5834\u30C7\u30FC\u30BF\u306E\u62E0\u70B9\u5272\u5F53\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",unauthorized:"\u30ED\u30B0\u30A4\u30F3\u306E\u6709\u52B9\u671F\u9650\u304C\u5207\u308C\u307E\u3057\u305F\u3002\u518D\u5EA6\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002",account_unavailable:"\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u6240\u5C5E\u5E97\u8217\u304C\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002",employee_required:"\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",invalid_employee:"\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",account_not_found:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",vehicle_not_found:"\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",reservation_not_found:"\u4E88\u7D04\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",invalid_site:"\u5E97\u8217\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",invalid_role:"\u5F79\u5272\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",invalid_account:"\u30A2\u30AB\u30A6\u30F3\u30C8\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",unknown_permission:"\u9078\u629E\u3055\u308C\u305F\u6A29\u9650\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",site_required:"\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",invalid_reservation:"\u4E88\u7D04\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",not_found:"\u5BFE\u8C61\u306E\u60C5\u5831\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002"})[i]??"\u64CD\u4F5C\u3092\u5B8C\u4E86\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6642\u9593\u3092\u304A\u3044\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",ln=sessionStorage.getItem("guts_erp_token")||"",Yt=null,Vn="ja",Io="guts_erp_current_page",Po=["dashboard","reservations","sites","accounts","vehicles","parking"];function gc(){let i=location.hash.slice(1);return Po.includes(i)?wu(location.hash,Po):null}var Te=gc()??"dashboard",Li="",An="",cn=0,oi="",br="",ri="all",Pi="all",hc="",We=[],uc=[],Du=[],Uu="",dc=[],Tr=null,Nu=[],Fu=[],Mr=!1,Au=0,_s=null,fc=0,on=new Map,ye=null,Sr=[],be=null,Lo=null,_c=null,vs=null,Ar="#e34b4b",Qe=null,Do=null,Re=null;function Di(){return Yt?.isAdmin?Vn:"ja"}function Ie(i,t){i.innerHTML=yr(t,Di())}async function nv(i){Yt?.isAdmin&&(Vn=i,localStorage.setItem("guts_erp_language",Vn),document.documentElement.lang=Vn==="zh"?"zh-CN":"ja",No(),await Tn())}async function Dt(i,t={}){let e=new Headers(t.headers);e.set("Accept","application/json"),ln&&e.set("Authorization",`Bearer ${ln}`),t.body&&e.set("Content-Type","application/json");let n=await fetch(i,{...t,headers:e});if(n.status===401&&ln)throw ln="",Yt=null,sessionStorage.removeItem("guts_erp_token"),Cr(),new Error("unauthorized");let s=await n.json().catch(()=>({}));if(!n.ok)throw new Error(s.message||s.error||`HTTP ${n.status}`);return s}function pc(i){fetch("/api/v1/client-errors",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),keepalive:!0}).catch(t=>console.warn("Unable to send ERP client error report.",t))}function Qt(i,t=!1){let e=re(".toast-area");e||(e=document.createElement("div"),e.className="toast-area",document.body.append(e));let n=document.createElement("div");n.className=`toast${t?" error":""}`,n.textContent=yr(i,Di()),e.append(n),window.setTimeout(()=>n.remove(),3600)}function wo(i){return window.confirm(yr(i,Di()))}window.addEventListener("error",i=>{let t=i.target;if(t instanceof Element&&["AUDIO","EMBED","IFRAME","IMG","LINK","OBJECT","SCRIPT","SOURCE","TRACK","VIDEO"].includes(t.tagName)){let e=t.getAttribute("src")||t.getAttribute("href")||t.getAttribute("data")||void 0;(t instanceof HTMLImageElement||t instanceof HTMLMediaElement)&&(e=t.currentSrc||e),pc({type:"resource",message:`Failed to load ${t.tagName.toLowerCase()} resource.`,...e?{source:e}:{},path:window.location.pathname});return}pc({type:"error",message:i.message||"Uncaught browser error.",...i.error instanceof Error&&i.error.stack?{stack:i.error.stack}:{},...i.filename?{source:i.filename}:{},path:window.location.pathname,...i.lineno?{line:i.lineno}:{},...i.colno?{column:i.colno}:{}})},!0);window.addEventListener("unhandledrejection",i=>{let t=i.reason;pc({type:"unhandledrejection",message:t instanceof Error?t.message:String(t),...t instanceof Error&&t.stack?{stack:t.stack}:{},path:window.location.pathname})});function Zt(i){return!!Yt?.permissions.includes(i)}function Uo(){let i=[{page:"dashboard",title:"\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",icon:"dashboard"},{page:"reservations",title:"\u4E88\u7D04\u30FB\u53D7\u4ED8",icon:"calendar",permission:"reservations:read"},{page:"sites",title:"\u5E97\u8217\u7BA1\u7406",icon:"site",permission:"sites:read"},{page:"vehicles",title:"\u8ECA\u4E21\u7BA1\u7406",icon:"vehicle",permission:"vehicles:read"},{page:"parking",title:"\u99D0\u8ECA\u5834\u7BA1\u7406",icon:"parking",permission:"parking:read"}];return Yt?.isAdmin&&i.splice(3,0,{page:"accounts",title:"\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8",icon:"people"}),i.filter(t=>!t.permission||Zt(t.permission))}function Cr(){document.documentElement.lang="ja",Oe.innerHTML=`<main class="login-screen login-simple">
    <form class="login-form" data-form="login">
      <input name="username" autocomplete="username" required placeholder="\u30A2\u30AB\u30A6\u30F3\u30C8" aria-label="\u30A2\u30AB\u30A6\u30F3\u30C8">
      <input name="password" type="password" autocomplete="current-password" required placeholder="\u30D1\u30B9\u30EF\u30FC\u30C9" aria-label="\u30D1\u30B9\u30EF\u30FC\u30C9">
      <button class="btn btn-primary" type="submit">\u30ED\u30B0\u30A4\u30F3</button>
    </form>
    <small class="app-version">\u30D0\u30FC\u30B8\u30E7\u30F3 ${L(Lu)}</small>
  </main>`,Oe.onsubmit=async i=>{let t=i.target.closest('[data-form="login"]');if(!t)return;i.preventDefault();let e=re('button[type="submit"]',t);e.disabled=!0,e.textContent="\u30ED\u30B0\u30A4\u30F3\u4E2D\u2026";let n=new FormData(t);try{ln=(await Dt("/api/v1/auth/login",{method:"POST",body:JSON.stringify({username:n.get("username"),password:n.get("password")})})).accessToken,sessionStorage.setItem("guts_erp_token",ln),await Ou()}catch(s){Qt(ve(s.message),!0),e.disabled=!1,e.textContent="\u30ED\u30B0\u30A4\u30F3"}}}async function Ou(){Yt=await Dt("/api/v1/auth/me");let i=gc()??localStorage.getItem(Io),t=Po.includes(i)?i:"dashboard";Te=Uo().some(e=>e.page===t)?t:"dashboard",location.hash!==`#${Te}`&&history.replaceState(null,"",xr(Te)),localStorage.setItem(Io,Te),Vn=Yt.isAdmin&&localStorage.getItem("guts_erp_language")==="zh"?"zh":"ja",document.documentElement.lang=Di()==="zh"?"zh-CN":"ja",No(),await Tn(),ku()}async function ku(){if(!(!ln||!Zt("parking:read")||_s))try{let{ticket:i}=await Dt("/api/v1/parking/ws-ticket",{method:"POST"});if(!ln||!Zt("parking:read"))return;let t=location.protocol==="https:"?"wss:":"ws:",e=new WebSocket(`${t}//${location.host}/api/v1/parking/ws?ticket=${encodeURIComponent(i)}`);_s=e,e.onmessage=n=>{try{JSON.parse(String(n.data)).type==="parking:updated"&&Te==="parking"&&Fe()}catch{Qt("\u99D0\u8ECA\u5834\u306E\u66F4\u65B0\u901A\u77E5\u3092\u8AAD\u307F\u53D6\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002",!0)}},e.onclose=()=>{_s===e&&(_s=null),ln&&Zt("parking:read")&&(window.clearTimeout(fc),fc=window.setTimeout(()=>{ku()},1500))},e.onerror=()=>e.close()}catch(i){i.message!=="unauthorized"&&Qt("\u99D0\u8ECA\u5834\u306E\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u63A5\u7D9A\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u63A5\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002",!0)}}function No(){if(!Yt)return Cr();let i=Uo(),t=Yt.displayName.trim().slice(0,1)||"G";Ie(Oe,`<div class="shell">
    <aside class="sidebar${Mr?" open":""}">
      <a class="brand" href="#" data-page="dashboard"><span class="brand-mark">G</span><span><strong>GUTS ERP</strong><small>\u30EC\u30F3\u30BF\u30AB\u30FC\u904B\u55B6\u7BA1\u7406</small></span></a>
      <div class="nav-label">\u30E1\u30CB\u30E5\u30FC</div><nav class="nav">${i.map(e=>`<button class="nav-button${Te===e.page?" active":""}" data-page="${e.page}">${Ce(e.icon)}<span>${e.title}</span></button>`).join("")}</nav>
      <div class="sidebar-bottom">
        <div class="site-chip"><small>\u6240\u5C5E\u5E97\u8217</small><strong>${L(Yt.site.name)} \xB7 ${L(Yt.site.code)}</strong></div>
        <div class="user-row"><span class="avatar">${L(t)}</span><span class="user-text"><strong>${L(Yt.displayName)}</strong><small>${L(Yt.username)}</small></span><button class="logout" title="\u30ED\u30B0\u30A2\u30A6\u30C8" data-action="logout">${Ce("logout")}</button></div>
      </div>
    </aside>
    <main class="main">
      <header class="topbar"><button class="mobile-menu" data-action="menu" aria-label="\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F">\u2630</button><div class="crumb">GUTS ERP&nbsp; / &nbsp;<b>${Q_[Te]}</b></div><div class="top-actions">${Yt.isAdmin?`<div class="language-switch" role="group" aria-label="\u8A00\u8A9E\u5207\u66FF"><button class="btn btn-sm${Vn==="ja"?" active":""}" data-language="ja" aria-pressed="${Vn==="ja"}">\u65E5\u672C\u8A9E</button><button class="btn btn-sm${Vn==="zh"?" active":""}" data-language="zh" aria-pressed="${Vn==="zh"}">\u4E2D\u6587</button></div>`:""}<span class="live"><i></i> \u6B63\u5E38\u7A3C\u50CD\u4E2D</span><button class="btn btn-sm btn-quiet" data-action="refresh">${Ce("refresh")} \u66F4\u65B0</button><small class="app-version">v${L(Lu)}</small></div></header>
      <section class="content" id="page-content"><div class="empty">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div></section>
    </main>
  </div>`),Oe.onclick=gv,Oe.onsubmit=mv,Oe.oninput=_v,Oe.onchange=vv,Oe.onpointerdown=e=>{ov(e),uv(e),lv(e)},Oe.onpointermove=e=>{hv(e),dv(e),cv(e)},Oe.onpointerup=e=>{Pu(e),fv(e),Iu(e)},Oe.onpointercancel=e=>{Pu(e),pv(e),Iu(e,!0)}}async function Tn(){try{switch(Te){case"dashboard":await iv();break;case"reservations":await Wu();break;case"sites":await Bu();break;case"accounts":await Hu();break;case"vehicles":await Vu();break;case"parking":await Fe();break}}catch(i){if(i.message!=="unauthorized"){let t=re("#page-content");t&&Ie(t,`<div class="empty"><strong>\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F</strong>${L(ve(i.message))}<br><br><button class="btn" data-action="refresh">${Ce("refresh")} \u518D\u8A66\u884C</button></div>`)}}}function xs(i){let t=re("#page-content");t&&Ie(t,i)}function bs(i,t,e=""){return`<div class="page-head"><div><h1>${i}</h1><p>${t}</p></div><div class="head-actions">${e}</div></div>`}function To(i,t,e,n,s=""){let r=Di()==="zh"?"zh-CN":"ja-JP";return`<article class="stat-card"><div class="stat-top">${i}<span class="stat-icon ${s}">${Ce(n)}</span></div><div class="stat-number">${t.toLocaleString(r)}</div><div class="stat-foot">${e}</div></article>`}async function iv(){let[i,t,e]=await Promise.all([Dt("/api/v1/dashboard/stats"),Zt("sites:read")?Dt("/api/v1/sites"):Promise.resolve({items:[]}),Zt("reservations:read")?Dt("/api/v1/reservations?limit=6"):Promise.resolve({items:[]})]);We=t.items;let n=e.items.slice(0,5);xs(`${bs("\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",`${L(Yt.site.name)} \xB7 \u5E97\u8217\u306E\u904B\u55B6\u72B6\u6CC1`,Yt.site.type!=="headquarters"?`<button class="btn" data-action="employee-roster" data-site-id="${L(Yt.site.id)}">${Ce("team")} \u30B9\u30BF\u30C3\u30D5\u540D\u7C3F</button>`:"")}
    <div class="grid stat-grid">
      ${To("\u5E97\u8217\u6570",i.sites.total,`\u76F4\u55B6 ${i.sites.direct} \u5E97 \xB7 \u52A0\u76DF ${i.sites.franchise} \u5E97`,"sites")}
      ${To("\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8",i.accounts.total,`\u6709\u52B9 ${i.accounts.active} \u4EF6`,"team","green")}
      ${To("\u8ECA\u4E21\u53F0\u6570",i.vehicles.total,`\u8CB8\u51FA\u53EF\u80FD ${i.vehicles.available} \u53F0`,"fleet")}
      ${To("\u8CB8\u51FA\u4E2D",i.vehicles.rented,`\u6574\u5099\u4E2D ${i.vehicles.maintenance} \u53F0`,"calendar","orange")}
    </div>
    <div class="grid dashboard-grid">
      ${Zt("reservations:read")?`<section class="panel"><div class="panel-head"><h2>\u6700\u8FD1\u306E\u4E88\u7D04\u30FB\u53D7\u4ED8</h2><button class="btn btn-sm btn-quiet" data-page="reservations">\u3059\u3079\u3066\u8868\u793A ${Ce("arrow")}</button></div>
        ${n.length?`<div class="site-list">${n.map(s=>`<div class="site-line"><div><div class="site-name">${L(s.guest_name)} <span class="secondary">${L(s.guest_phone)}</span></div><div class="site-meta">${cc(s.start_at)} &nbsp;\xB7&nbsp; ${L(s.make??"")} ${L(s.model??"")}</div></div><span class="site-code">${L(s.reservation_code)}</span>${ai(s.status)}</div>`).join("")}</div>`:'<div class="empty">\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093</div>'}
      </section>`:`<section class="panel"><div class="panel-head"><h2>\u8ECA\u4E21\u72B6\u6CC1</h2><small>\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u96C6\u8A08</small></div>${Cu(i)}</section>`}
      <section class="panel"><div class="panel-head"><h2>${Yt.site.type==="headquarters"?"\u5E97\u8217\u4E00\u89A7":"\u6240\u5C5E\u5E97\u8217"}</h2><small>${We.length} \u5E97\u8217</small></div>
        ${We.length?`<div class="site-list">${We.slice(0,6).map(s=>`<div class="site-line"><div><div class="site-name">${L(s.name)}</div><div class="site-meta">${L(s.code)}</div></div>${ai(s.type)}${ai(s.status)}</div>`).join("")}</div>`:'<div class="empty">\u5E97\u8217\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093</div>'}
        ${We.length>6?`<button class="btn btn-sm" data-page="sites">\u3059\u3079\u3066\u306E\u5E97\u8217\u3092\u8868\u793A ${Ce("arrow")}</button>`:""}
      </section>
      ${Zt("reservations:read")?`<section class="panel"><div class="panel-head"><h2>\u8ECA\u4E21\u72B6\u6CC1</h2><small>\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u96C6\u8A08</small></div>${Cu(i)}</section>`:""}
    </div>`)}function Cu(i){let t=Math.max(i.vehicles.total,1);return`<div class="fleet-breakdown">${[["\u8CB8\u51FA\u53EF\u80FD",i.vehicles.available,"green"],["\u8CB8\u51FA\u4E2D",i.vehicles.rented,""],["\u6574\u5099\u4E2D",i.vehicles.maintenance,"orange"]].map(([n,s,r])=>`<div class="fleet-row"><span>${n}</span><div class="fleet-track"><div class="fleet-fill ${r}" style="width:${Math.min(100,s/t*100)}%"></div></div><b>${s}</b></div>`).join("")}</div>`}function Fo(i,t=""){return`<div class="toolbar"><label class="search">${Ce("search")}<input data-search placeholder="${i}" value="${L(An)}"></label>${t}</div>`}function Oo(i,t,e){return`<div class="table-wrap">${t?`<table class="table"><thead><tr>${i.map(n=>`<th>${n}</th>`).join("")}</tr></thead><tbody>${t}</tbody></table>`:`<div class="empty">${e}</div>`}</div>`}function vc(i,t=50){return`<div class="pagination"><span>${i?cn+1:0}\uFF5E${cn+i}\u4EF6\u3092\u8868\u793A</span><div><button class="btn btn-sm" data-action="prev" ${cn<=0?"disabled":""}>\u524D\u3078</button><button class="btn btn-sm" data-action="next" ${i<t?"disabled":""}>\u6B21\u3078</button></div></div>`}async function Bu(){let i=await Dt("/api/v1/sites");We=i.items;let e=i.items.filter(n=>`${n.name} ${n.code} ${Rr(n.type)}`.toLowerCase().includes(An.toLowerCase())).map(n=>`<tr><td class="primary-cell" data-label="\u5E97\u8217">${L(n.name)}<span class="secondary">${L(n.code)}</span></td><td data-label="\u7A2E\u5225">${ai(n.type)}</td><td data-label="\u72B6\u614B">${ai(n.status)}</td><td data-label="\u64CD\u4F5C">${Zt("sites:write")?'<span class="secondary">\u2014</span>':""}</td></tr>`).join("");xs(`${bs("\u5E97\u8217\u7BA1\u7406","\u672C\u90E8\u30FB\u76F4\u55B6\u5E97\u30FB\u52A0\u76DF\u5E97\u3092\u7BA1\u7406",Zt("sites:write")&&Yt.site.type==="headquarters"?`<button class="btn btn-primary" data-modal="site">${Ce("plus")} \u5E97\u8217\u3092\u8FFD\u52A0</button>`:"")}
    ${Fo("\u5E97\u8217\u540D\u307E\u305F\u306F\u5E97\u8217\u30B3\u30FC\u30C9\u3067\u691C\u7D22")}
    ${Oo(["\u5E97\u8217\u540D / \u30B3\u30FC\u30C9","\u5E97\u8217\u7A2E\u5225","\u72B6\u614B","\u64CD\u4F5C"],e,"\u5E97\u8217\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093")}`)}async function zu(){if(We.length&&uc.length)return;let[i,t]=await Promise.all([Dt("/api/v1/sites"),Dt("/api/v1/permissions")]);We=i.items,uc=t.items}async function Hu(){await zu();let i=new URLSearchParams({limit:"50",offset:String(cn)});An&&i.set("search",An);let t=await Dt(`/api/v1/accounts?${i}`);Nu=t.items;let e=t.items.map(n=>`<tr>
    <td class="primary-cell" data-label="\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8">${L(n.site_name)}<span class="secondary">${L(n.username)}</span></td>
    <td data-label="\u5E97\u8217\u30B3\u30FC\u30C9">${L(n.site_code)}</td>
    <td data-label="\u72B6\u614B">${ai(n.status)}</td>
    <td data-label="\u64CD\u4F5C"><button class="btn btn-sm" data-action="edit-account" data-id="${L(n.id)}">\u7DE8\u96C6</button></td>
  </tr>`).join("");xs(`${bs("\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8","\u5E97\u8217\u3054\u3068\u306E\u30ED\u30B0\u30A4\u30F3\u3068\u5229\u7528\u6A29\u9650\u3092\u7BA1\u7406",`<button class="btn btn-primary" data-modal="account">${Ce("plus")} \u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0</button>`)}
    ${Fo("\u5E97\u8217\u540D\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u540D\u3067\u691C\u7D22")}
    ${Oo(["\u5E97\u8217 / \u30A2\u30AB\u30A6\u30F3\u30C8","\u5E97\u8217\u30B3\u30FC\u30C9","\u72B6\u614B","\u64CD\u4F5C"],e,"\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u3042\u308A\u307E\u305B\u3093")}
    ${vc(t.items.length)}`)}function Ao(i="",t=!1){return We.filter(e=>t||e.type!=="headquarters").map(e=>`<option value="${L(e.id)}" ${String(e.id)===i?"selected":""}>${L(e.name)} \xB7 ${L(e.code)}</option>`).join("")}function Ru(i=[]){let t={"sites:read":"\u5E97\u8217\u60C5\u5831\u306E\u95B2\u89A7","sites:write":"\u5E97\u8217\u60C5\u5831\u306E\u7BA1\u7406","vehicles:read":"\u8ECA\u4E21\u60C5\u5831\u306E\u95B2\u89A7","vehicles:write":"\u8ECA\u4E21\u60C5\u5831\u306E\u7BA1\u7406","parking:read":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u95B2\u89A7","parking:write":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u64CD\u4F5C","parking:admin":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u8A2D\u5B9A\u7BA1\u7406","reservations:read":"\u4E88\u7D04\u30FB\u53D7\u4ED8\u60C5\u5831\u306E\u95B2\u89A7","reservations:write":"\u4E88\u7D04\u306E\u4F5C\u6210\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D"},e={"sites:read":"\u5E97\u8217\u60C5\u5831\u306E\u95B2\u89A7","sites:write":"\u5E97\u8217\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406","vehicles:read":"\u8ECA\u4E21\u60C5\u5831\u306E\u95B2\u89A7","vehicles:write":"\u8ECA\u4E21\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406","parking:read":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u95B2\u89A7","parking:write":"\u8ECA\u4E21\u4F4D\u7F6E\u30FB\u696D\u52D9\u72B6\u6CC1\u306E\u66F4\u65B0","parking:admin":"\u99D0\u8ECA\u5834\u30FB\u30AF\u30E9\u30B9\u30FB\u72B6\u614B\u306A\u3069\u306E\u8A2D\u5B9A\u7BA1\u7406","reservations:read":"\u4E88\u7D04\u60C5\u5831\u3068\u53D7\u4ED8\u72B6\u6CC1\u306E\u95B2\u89A7","reservations:write":"\u4E88\u7D04\u306E\u4F5C\u6210\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D"};return`<div class="check-grid">${uc.filter(({permission_key:n})=>n!=="accounts:write").map(n=>`<label class="check-item"><input type="checkbox" name="permissions" value="${L(n.permission_key)}" ${i.includes(n.permission_key)?"checked":""}><span>${t[n.permission_key]??"\u305D\u306E\u4ED6\u306E\u6A29\u9650"}<small>${e[n.permission_key]??"\u6A29\u9650\u306E\u8AAC\u660E\u306F\u3042\u308A\u307E\u305B\u3093"}</small></span></label>`).join("")}</div>`}async function Vu(){Zt("sites:read")&&await wr();let i=new URLSearchParams({limit:"50",offset:String(cn)});oi&&i.set("status",oi),An&&i.set("search",An);let t=await Dt(`/api/v1/vehicles?${i}`);Fu=t.items;let e=t.items.map(r=>`<tr>
    <td class="primary-cell" data-label="\u8ECA\u4E21">${L(r.registration_number)}<span class="secondary">${L(r.make)} ${L(r.model)} ${r.model_year?`\u30FB${r.model_year}`:""}</span></td>
    <td data-label="\u5E97\u8217">${L(We.find(a=>a.id===r.site_id)?.name??(Yt.site.id===r.site_id?Yt.site.name:r.site_id))}</td>
    <td data-label="\u72B6\u614B">${ai(r.status)}</td>
    <td data-label="\u64CD\u4F5C">${Zt("vehicles:write")?`<button class="btn btn-sm" data-action="edit-vehicle" data-id="${L(r.id)}">\u7DE8\u96C6</button>`:""}</td>
  </tr>`).join(""),n=`<select class="filter-select" data-status><option value="">\u3059\u3079\u3066\u306E\u72B6\u614B</option>${["available","rented","maintenance","retired"].map(r=>`<option value="${r}" ${oi===r?"selected":""}>${Rr(r)}</option>`).join("")}</select>`,s=[...Zt("vehicles:write")?[`<button class="btn btn-primary" data-modal="vehicle">${Ce("plus")} \u8ECA\u4E21\u3092\u8FFD\u52A0</button>`]:[]].join("");xs(`${bs("\u8ECA\u4E21\u7BA1\u7406","\u8ECA\u4E21\u60C5\u5831\u3068\u7A3C\u50CD\u72B6\u6CC1\u3092\u7BA1\u7406",s)}
    ${Fo("\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u30E1\u30FC\u30AB\u30FC\u3001\u8ECA\u7A2E\u3067\u691C\u7D22",n)}
    ${Oo(["\u8ECA\u4E21 / \u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8","\u6240\u5C5E\u5E97\u8217","\u72B6\u614B","\u64CD\u4F5C"],e,"\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093")}
    ${vc(t.items.length)}`)}function yc(i){let t=i.vehicles.filter(n=>(ri==="all"||n.vehicle_type===ri)&&(!br||`${n.plate} ${n.vehicle_type} ${n.options.join(" ")}`.toLocaleLowerCase("ja").includes(br.toLocaleLowerCase("ja")))),e=["all",...i.vehicle_classes.map(n=>n.name)];return`<div class="parking-catalog-content" id="parking-catalog-content">
    <label class="parking-catalog-search">${Ce("search")}<input type="search" data-parking-search
      placeholder="\u8ECA\u756A\u3067\u691C\u7D22" value="${L(br)}" aria-label="\u8ECA\u756A\u3067\u691C\u7D22"></label>
    <div class="parking-class-filters" role="group" aria-label="\u8ECA\u7A2E\u3067\u7D5E\u308A\u8FBC\u307F">
      ${e.map(n=>`<button type="button" class="parking-class-filter${ri===n?" active":""}"
        data-action="parking-class-filter" data-class="${L(n)}">${n==="all"?"All":L(n)}</button>`).join("")}
    </div>
    <div class="parking-catalog-list" aria-live="polite">
      ${t.length?t.map(n=>{let s=i.parking_lots.find(o=>o.id===n.parking_lot_id),r=i.statuses.filter(o=>n.status_ids.includes(o.id)).map(o=>`${o.icon} ${o.name}`).join("\u30FB"),a=[n.vehicle_type,s?.name??"\u672A\u914D\u7F6E",r,n.options.join("\u30FB")].filter(Boolean).join(" \xB7 ");return`<button type="button" class="parking-catalog-item" data-action="parking-focus-vehicle"
          data-id="${L(n.id)}"><strong>${L(n.plate)}</strong><span>${L(a)}</span></button>`}).join(""):br||ri!=="all"?'<p class="parking-catalog-empty">\u8A72\u5F53\u3059\u308B\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p>':`<div class="parking-catalog-empty">\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002<br>\u8ECA\u4E21\u7BA1\u7406\u304B\u3089\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002
          ${Zt("vehicles:read")?'<button type="button" class="btn btn-sm" data-page="vehicles">\u8ECA\u4E21\u7BA1\u7406\u3078</button>':""}</div>`}
    </div>
  </div>`}function Gu(i){let t=i.vehicles.filter(n=>Pi==="all"||n.status_ids.includes(Number(Pi)));return`<div id="parking-status-content">
    <div class="parking-status-filters" role="group" aria-label="\u5BFE\u5FDC\u30B9\u30C6\u30FC\u30BF\u30B9\u3067\u7D5E\u308A\u8FBC\u307F">
      ${[{id:"all",label:"\u3059\u3079\u3066"},...i.statuses.map(n=>({id:String(n.id),label:`${n.icon} ${n.name}`}))].map(n=>`<button type="button" class="parking-status-filter${Pi===n.id?" active":""}"
        data-action="parking-status-filter" data-status-id="${L(n.id)}">${L(n.label)}</button>`).join("")}
    </div>
    <div class="parking-status-list">
      ${t.length?t.map(n=>{let s=i.statuses.filter(o=>n.status_ids.includes(o.id)).map(o=>`${o.icon} ${o.name}`),r=[n.unwashed?"\u6D17\u8ECA\u5F85\u3061":"",n.no_fuel?"\u7D66\u6CB9\u5F85\u3061":"",n.needs_repair?"\u4FEE\u7406\u5F85\u3061":""].filter(Boolean),a=i.parking_lots.find(o=>o.id===n.parking_lot_id);return`<button type="button" class="parking-status-item" data-action="parking-focus-vehicle"
          data-id="${L(n.id)}"><strong>${L(n.plate)}</strong>
          <span>${L([a?.name??"\u672A\u914D\u7F6E",...s,...r].join(" \xB7 "))}</span></button>`}).join(""):'<p class="parking-catalog-empty">\u8A72\u5F53\u3059\u308B\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p>'}
    </div>
  </div>`}async function Fe(){let i=await Dt("/api/v1/parking/bootstrap");ye=i,ri!=="all"&&!i.vehicle_classes.some(v=>v.name===ri)&&(ri="all"),Pi!=="all"&&!i.statuses.some(v=>String(v.id)===Pi)&&(Pi="all");let t=Zt("parking:write");for(let v of i.vehicles)on.has(v.id)||on.set(v.id,v.inspection_marks);let e=v=>t?`<form class="parking-vehicle-controls" data-form="parking-vehicle" data-id="${L(v.id)}">
        <label>\u4F4D\u7F6E X <input name="position_x" type="number" min="0" max="1" step="0.01" value="${L(v.position_x)}" required></label>
        <label>\u4F4D\u7F6E Y <input name="position_y" type="number" min="0" max="1" step="0.01" value="${L(v.position_y)}" required></label>
        <label>\u99D0\u8ECA\u533A\u753B <select name="parking_lot_id"><option value="">\u672A\u914D\u7F6E</option>${i.parking_lots.map(y=>`<option value="${L(y.id)}" ${v.parking_lot_id===y.id?"selected":""}>${L(y.name)}</option>`).join("")}</select></label>
        <fieldset><legend>\u696D\u52D9\u72B6\u614B</legend>${i.statuses.map(y=>`<label><input type="checkbox" name="status_ids" value="${L(y.id)}" ${v.status_ids.includes(y.id)?"checked":""}>${L(y.icon)} ${L(y.name)}</label>`).join("")}
          <label><input type="checkbox" name="unwashed" ${v.unwashed?"checked":""}>\u6D17\u8ECA\u5F85\u3061</label>
          <label><input type="checkbox" name="no_fuel" ${v.no_fuel?"checked":""}>\u7D66\u6CB9\u5F85\u3061</label>
          <label><input type="checkbox" name="needs_repair" ${v.needs_repair?"checked":""}>\u4FEE\u7406\u5F85\u3061</label>
        </fieldset>
        <fieldset><legend>\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3</legend>${i.vehicle_options.map(y=>`<label><input type="checkbox" name="options" value="${L(y.name)}" ${v.options.includes(y.name)?"checked":""}>${L(y.name)}</label>`).join("")}</fieldset>
        ${i.assessment_fields.map(y=>{let x=v.assessment_values[String(y.id)]??"",A=y.field_type==="rating"?`<select data-assessment-id="${L(y.id)}"><option value="">\u672A\u8A55\u4FA1</option>${[1,2,3,4,5].map(C=>`<option value="${C}" ${x===String(C)?"selected":""}>${C}</option>`).join("")}</select>`:y.field_type==="checkbox"?`<input type="checkbox" data-assessment-id="${L(y.id)}" ${x==="true"?"checked":""}>`:`<input type="${y.field_type==="number"?"number":"text"}" ${y.field_type==="number"?'step="1"':""} maxlength="500" data-assessment-id="${L(y.id)}" value="${L(x)}">`;return`<label class="assessment-input">${L(y.name)}${y.suffix?` (${L(y.suffix)})`:""}${A}</label>`}).join("")}
        ${i.damage_types.length?`<fieldset class="damage-field"><legend>\u640D\u50B7\u30DE\u30FC\u30AB\u30FC</legend>
          <button class="btn btn-sm" type="button" data-action="parking-inspect3d" data-id="${L(v.id)}">3D\u8ECA\u4E21\u691C\u67FB\u30FB\u640D\u50B7\u3092\u7DE8\u96C6</button>
          <div class="damage-map read-only" data-id="${L(v.id)}" aria-label="\u640D\u50B7\u30DE\u30FC\u30AB\u30FC\u306E\u30D7\u30EC\u30D3\u30E5\u30FC">
            <span class="damage-map-hint">3D\u691C\u67FB\u3067\u640D\u50B7\u4F4D\u7F6E\u3092\u7DE8\u96C6</span>
            ${(on.get(v.id)??[]).map(y=>`<button type="button" class="damage-marker" data-action="parking-damage-remove" data-vehicle-id="${L(v.id)}" data-mark-id="${L(y.id)}" style="left:${y.x*100}%;top:${y.y*100}%;background:${L(y.color??i.damage_types.find(x=>x.id===y.damage_type_id)?.color??"#e34b4b")}">${L(y.icon??"\xD7")}</button>`).join("")}
          </div>
        </fieldset>`:""}
        <label>\u30E1\u30E2 <textarea name="notes" maxlength="2000">${L(v.notes??"")}</textarea></label>
        <button class="btn btn-sm btn-primary" type="submit">\u914D\u7F6E\u30FB\u72B6\u614B\u3092\u4FDD\u5B58</button>
      </form>`:`<div class="parking-statuses">${i.statuses.filter(y=>v.status_ids.includes(y.id)).map(y=>`${L(y.icon)} ${L(y.name)}`).join("\u3001")||"\u72B6\u614B\u306A\u3057"}
      ${v.inspection_marks.length?`<div class="damage-map read-only">${v.inspection_marks.map(y=>`<span class="damage-marker" style="left:${y.x*100}%;top:${y.y*100}%;background:${L(y.color??"#e34b4b")}">${L(y.icon??"\xD7")}</span>`).join("")}</div>`:""}</div>`,n=i.parking_lots.map(v=>{let y=i.vehicles.filter(R=>R.parking_lot_id===v.id),x=y.map(R=>`<article class="parking-map-vehicle"
      data-vehicle-id="${L(R.id)}"
      style="left:${R.position_x*100}%;top:${R.position_y*100}%">
      <button class="parking-drag-handle" type="button" data-parking-drag="${L(R.id)}"
        aria-label="${L(R.plate)}\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5">\u283F ${L(R.plate)}</button>
      <details><summary>\u8A73\u7D30\u30FB\u72B6\u614B</summary>${e(R)}</details>
    </article>`).join(""),A=v.markings.map(R=>`<line x1="${R.x1*1e3}" y1="${R.y1*1e3}" x2="${R.x2*1e3}" y2="${R.y2*1e3}" stroke="${L(R.color)}" stroke-width="7" stroke-linecap="round"/>`).join(""),C=v.navigation_url?`<a class="parking-lot-name" href="${L(v.navigation_url)}" target="_blank" rel="noopener noreferrer">${L(v.name)} <span aria-hidden="true">\u2197</span></a>`:`<h2 class="parking-lot-name">${L(v.name)}</h2>`;return`<section class="card parking-lot" style="--parking-lot-width:${L(Math.max(30,Math.min(100,v.area_width||50)))}%">
      <header><div class="parking-lot-heading">${C}<span class="parking-lot-count">${v.capacity===null?y.length:`${y.length}/${v.capacity}`} \u53F0</span></div>
      ${Zt("parking:admin")?`<div class="parking-admin-actions">
        <button class="btn btn-sm" data-action="parking-lot-order" data-id="${L(v.id)}" data-direction="up" aria-label="\u4E0A\u3078">\u2191</button>
        <button class="btn btn-sm" data-action="parking-lot-order" data-id="${L(v.id)}" data-direction="down" aria-label="\u4E0B\u3078">\u2193</button>
        <button class="btn btn-sm" data-action="parking-lot-resize" data-id="${L(v.id)}"
          aria-pressed="${Do===v.id}">\u30B5\u30A4\u30BA\u8ABF\u6574</button>
        <button class="btn btn-sm" data-action="parking-lot-settings" data-id="${L(v.id)}">\u8A2D\u5B9A</button>
        <button class="btn btn-sm" data-action="parking-marking-toggle" data-id="${L(v.id)}">${vs===v.id?"\u7DDA\u63CF\u753B\u3092\u7D42\u4E86":"\u7DDA\u3092\u63CF\u304F"}</button>
        <button class="btn btn-sm" data-action="parking-lot-toggle" data-id="${L(v.id)}" data-active="${String(!v.is_active)}">${v.is_active?"\u505C\u6B62":"\u518D\u958B"}</button>
        <button class="btn btn-sm btn-quiet" data-action="parking-lot-delete" data-id="${L(v.id)}">\u524A\u9664</button>
      </div>`:""}</header>
      <div class="parking-map${v.is_active?"":" inactive"}" data-parking-map data-lot-id="${L(v.id)}"
        style="height:${L(Math.max(160,Math.min(600,v.area_height||240)))}px">
        <svg class="parking-map-markings${vs===v.id?" editable":""}" data-marking-svg
          data-lot-id="${L(v.id)}" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-label="\u99D0\u8ECA\u533A\u753B\u306E\u30E9\u30A4\u30F3">${A}</svg>
        ${x||'<span class="parking-map-empty">\u3053\u3053\u3078\u8ECA\u4E21\u3092\u30C9\u30E9\u30C3\u30B0</span>'}
        ${Zt("parking:admin")&&Do===v.id?`<button class="parking-resize-handle" type="button" data-parking-resize="${L(v.id)}"
              aria-label="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u30B5\u30A4\u30BA\u3092\u5909\u66F4">\u2198</button>`:""}
      </div>
      ${vs===v.id?`<div class="parking-marking-tools"><label>\u7DDA\u306E\u8272 <input type="color" data-marking-color value="${L(Ar)}"></label>
        <button class="btn btn-sm" data-action="parking-marking-undo" data-id="${L(v.id)}" ${v.markings.length?"":"disabled"}>\u6700\u5F8C\u306E\u7DDA\u3092\u53D6\u308A\u6D88\u3059</button>
        <span>\u56F3\u9762\u5185\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u533A\u753B\u7DDA\u3092\u63CF\u304D\u307E\u3059\u3002\u6307\u3092\u96E2\u3059\u3068\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002</span></div>`:""}
      ${Zt("parking:write")?'<p class="parking-map-hint">\u8ECA\u4E21\u306E\u283F\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u914D\u7F6E\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u5909\u66F4\u306F\u81EA\u52D5\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002</p>':""}
    </section>`}).join(""),s=i.vehicles.filter(v=>v.parking_lot_id===null),r=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,16),a=i.jobs.map(v=>{let y=i.vehicles.find(A=>A.id===v.vehicle_id),x=i.parking_lots.find(A=>A.id===v.destination_lot_id);return`<article class="parking-job${v.completed?" completed":""}">
      <div><strong>${L(y?.plate??`#${v.vehicle_id}`)}</strong>
        <span class="secondary">${L(x?.name??`#${v.destination_lot_id}`)} \xB7 ${L(v.scheduled_at)}</span></div>
      <div>${Zt("parking:write")?`<button class="btn btn-sm" data-action="parking-job-toggle" data-id="${L(v.id)}" data-completed="${String(!v.completed)}">${v.completed?"\u518D\u958B":"\u5B8C\u4E86"}</button>
        <button class="btn btn-sm btn-quiet" data-action="parking-job-delete" data-id="${L(v.id)}">\u524A\u9664</button>`:v.completed?"\u5B8C\u4E86":"\u4E88\u5B9A"}</div>
    </article>`}).join(""),o=`${t?`<form class="parking-job-form" data-form="parking-job">
      <label>\u8ECA\u4E21 <select name="vehicle_id" required><option value="">\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${i.vehicles.map(v=>`<option value="${L(v.id)}">${L(v.plate)}</option>`).join("")}</select></label>
      <label>\u9001\u308A\u5148 <select name="destination_lot_id" required><option value="">\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${i.parking_lots.map(v=>`<option value="${L(v.id)}">${L(v.name)}</option>`).join("")}</select></label>
      <label>\u4E88\u5B9A\u65E5\u6642 <input name="scheduled_at" type="datetime-local" value="${L(r)}" required></label>
      <button class="btn btn-sm btn-primary" type="submit">\u4E88\u5B9A\u3092\u8FFD\u52A0</button>
    </form>`:""}
    <div class="parking-job-list">${a||'<p class="parking-catalog-empty">\u4E88\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p>'}</div>`,l=(v,y)=>`<select name="${v}" required>
    ${i.parking_lots.map(x=>`<option value="${L(x.id)}" ${y===x.id?"selected":""}>${L(x.name)}</option>`).join("")}
  </select>`,c=(v,y)=>`<select name="${v}" required>
    ${i.stores.map(x=>`<option value="${L(x.id)}" ${y===x.id?"selected":""}>${L(x.name)}</option>`).join("")}
  </select>`,h=(v,y,x,A,C,R,U)=>`<form class="parking-distance-form" data-form="${v}">
      ${v==="lot-distance"?l(y,A):c(y,A)}
      ${l(x,C)}
      <label>\u5206 <input name="minutes" type="number" min="0" max="100000" step="any" value="${R??""}"></label>
      <label>km <input name="km" type="number" min="0" max="100000" step="any" value="${U??""}"></label>
      <button class="btn btn-sm" type="submit">${R===void 0?"\u8FFD\u52A0":"\u4FDD\u5B58"}</button>
    </form>`;hc=Zt("parking:admin")?`<section class="card parking-catalogs">
    <div><h2>\u8ECA\u4E21\u30AF\u30E9\u30B9</h2><form data-form="parking-class">
      <input name="name" maxlength="40" placeholder="\u30AF\u30E9\u30B9\u540D" required><input name="color" type="color" value="#4f86f7">
      <button class="btn btn-sm" type="submit">\u8FFD\u52A0</button>
    </form>${i.vehicle_classes.map(v=>`<div class="parking-catalog-row"><span><i style="background:${L(v.color)}"></i>${L(v.name)}</span><button class="btn btn-sm btn-quiet" data-action="parking-class-delete" data-id="${L(v.id)}">\u524A\u9664</button></div>`).join("")}</div>
    <div><h2>\u696D\u52D9\u72B6\u614B</h2><form data-form="parking-status">
      <input name="name" maxlength="40" placeholder="\u72B6\u614B\u540D" required><input name="icon" maxlength="8" placeholder="\u{1F514}">
      <button class="btn btn-sm" type="submit">\u8FFD\u52A0</button>
    </form>${i.statuses.map(v=>`<div class="parking-catalog-row"><span>${L(v.icon)} ${L(v.name)}</span><button class="btn btn-sm btn-quiet" data-action="parking-status-delete" data-id="${L(v.id)}">\u524A\u9664</button></div>`).join("")}</div>
    <div><h2>\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3</h2><form data-form="parking-option">
      <input name="name" maxlength="40" placeholder="\u30AA\u30D7\u30B7\u30E7\u30F3\u540D" required><button class="btn btn-sm" type="submit">\u8FFD\u52A0</button>
    </form>${i.vehicle_options.map(v=>`<div class="parking-catalog-row"><span>${L(v.name)}</span><button class="btn btn-sm btn-quiet" data-action="parking-option-delete" data-id="${L(v.id)}">\u524A\u9664</button></div>`).join("")}</div>
    <div><h2>\u30D5\u30E9\u30F3\u30C1\u30E3\u30A4\u30BA\u5E97\u8217 / \u62E0\u70B9</h2><p class="secondary">\u65E7Parking\u306E\u5E97\u8217\u306F\u73FE\u5728\u306EERP\u62E0\u70B9\u306B\u5C5E\u3059\u308B\u5E97\u8217\u30C7\u30FC\u30BF\u3078\u79FB\u884C\u3057\u307E\u3059\u3002\u30D5\u30E9\u30F3\u30C1\u30E3\u30A4\u30BA\u62E0\u70B9\u3068\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u306FERP\u306E\u300C\u5E97\u8217\u300D\u300C\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u300D\u304B\u3089\u7BA1\u7406\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>
      <form data-form="parking-store"><input name="name" maxlength="120" placeholder="\u5E97\u8217\u540D" required><button class="btn btn-sm" type="submit">\u8FFD\u52A0</button></form>
      ${i.stores.map(v=>`<div class="parking-catalog-row"><span>${L(v.name)}</span><button class="btn btn-sm btn-quiet" data-action="parking-store-delete" data-id="${L(v.id)}">\u524A\u9664</button></div>`).join("")||'<p class="empty">\u5E97\u8217\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</div>
    <div><h2>\u62E0\u70B9\u9593\u8DDD\u96E2</h2><p class="secondary">\u5206\u3092\u7A7A\u6B04\u306B\u3059\u308B\u3068\u65E2\u5B58\u306E\u8DDD\u96E2\u3092\u524A\u9664\u3057\u307E\u3059\u3002</p>
      ${h("lot-distance","from_lot_id","to_lot_id")}
      ${i.lot_distances.map(v=>`<div class="parking-distance-row">${h("lot-distance","from_lot_id","to_lot_id",v.from_lot_id,v.to_lot_id,v.minutes,v.km)}</div>`).join("")||'<p class="empty">\u8DDD\u96E2\u8A2D\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</div>
    <div><h2>\u5E97\u8217\u304B\u3089\u99D0\u8ECA\u5834\u307E\u3067</h2><p class="secondary">\u5E97\u8217\u3068\u99D0\u8ECA\u5834\u306E\u6240\u8981\u6642\u9593\u30FB\u8DDD\u96E2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002</p>
      ${i.stores.length&&i.parking_lots.length?h("store-distance","store_id","lot_id"):'<p class="empty">\u5E97\u8217\u3068\u99D0\u8ECA\u5834\u3092\u5148\u306B\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044</p>'}
      ${i.store_lot_distances.map(v=>`<div class="parking-distance-row">${h("store-distance","store_id","lot_id",v.store_id,v.lot_id,v.minutes,v.km)}</div>`).join("")||'<p class="empty">\u8DDD\u96E2\u8A2D\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</div>
    <div><h2>\u67FB\u5B9A\u9805\u76EE</h2>${i.assessment_fields.map(v=>`<form class="parking-config-form" data-form="parking-assessment" data-id="${L(v.id)}">
      <input name="name" maxlength="120" value="${L(v.name)}" required>
      <select name="field_type">${["rating","checkbox","number","text"].map(y=>`<option value="${y}" ${v.field_type===y?"selected":""}>${y}</option>`).join("")}</select>
      <input name="suffix" maxlength="120" value="${L(v.suffix)}" placeholder="\u5358\u4F4D">
      ${v.built_in_key?'<span class="secondary">\u6A19\u6E96</span>':'<button class="btn btn-sm btn-quiet" type="button" data-action="parking-assessment-delete" data-id="'+L(v.id)+'">\u524A\u9664</button>'}
      <button class="btn btn-sm" type="submit">\u4FDD\u5B58</button></form>`).join("")}
      <form class="parking-config-form" data-form="parking-assessment"><input name="name" maxlength="120" placeholder="\u67FB\u5B9A\u9805\u76EE\u540D" required>
        <select name="field_type"><option value="rating">rating</option><option value="checkbox">checkbox</option><option value="number">number</option><option value="text">text</option></select>
        <input name="suffix" maxlength="120" placeholder="\u5358\u4F4D"><button class="btn btn-sm" type="submit">\u8FFD\u52A0</button></form></div>
    <div><h2>\u640D\u50B7\u30DE\u30FC\u30AB\u30FC</h2>${i.damage_types.map(v=>`<form class="parking-config-form" data-form="parking-damage" data-id="${L(v.id)}">
      <input name="name" maxlength="120" value="${L(v.name)}" required><input name="icon" maxlength="40" value="${L(v.icon)}">
      <input name="color" type="color" value="${L(v.color)}"><button class="btn btn-sm" type="submit">\u4FDD\u5B58</button>
      <button class="btn btn-sm btn-quiet" type="button" data-action="parking-damage-delete" data-id="${L(v.id)}">\u524A\u9664</button></form>`).join("")}
      <form class="parking-config-form" data-form="parking-damage"><input name="name" maxlength="120" placeholder="\u640D\u50B7\u540D" required>
        <input name="icon" maxlength="40" placeholder="\u26A0\uFE0F"><input name="color" type="color" value="#e34b4b">
        <button class="btn btn-sm" type="submit">\u8FFD\u52A0</button></form></div>
  </section>`:"";let p=[Sr.length?'<button class="btn btn-sm" data-action="parking-move-undo">\u914D\u7F6E\u3092\u53D6\u308A\u6D88\u3059</button>':"",Zt("vehicles:read")&&Zt("vehicles:write")&&Yt.site.type==="headquarters"?'<button class="btn btn-sm" data-action="sync-parking">ERP\u8ECA\u4E21\u3092\u540C\u671F</button>':"",Zt("parking:admin")?`<button class="btn btn-primary" data-action="parking-location-manager">${Ce("plus")} \u99D0\u8ECA\u4F4D\u7F6E\u3092\u7BA1\u7406</button>
        <button class="btn" data-action="parking-settings">\u99D0\u8ECA\u5834\u8A2D\u5B9A</button>`:""].filter(Boolean).join(""),g=i.vehicles.filter(v=>v.status_ids.length||v.unwashed||v.no_fuel||v.needs_repair).length,b=i.jobs.length,m=i.jobs.filter(v=>!v.completed).length,d=i.parking_lots.length||s.length?`${n}${s.length?`<section class="card parking-lot parking-unassigned-lot"><header><div class="parking-lot-heading"><h2 class="parking-lot-name">\u672A\u914D\u7F6E</h2><span class="parking-lot-count">${s.length} \u53F0</span></div></header>
      <div class="parking-map unassigned" data-parking-map data-lot-id="" style="height:auto;min-height:100px">
        ${s.map(v=>`<article class="parking-map-vehicle unassigned-vehicle" data-vehicle-id="${L(v.id)}">
          <button class="parking-drag-handle" type="button" data-parking-drag="${L(v.id)}"
            aria-label="${L(v.plate)}\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5">\u283F ${L(v.plate)}</button>
          <details><summary>\u8A73\u7D30\u30FB\u72B6\u614B</summary>${e(v)}</details>
        </article>`).join("")}
      </div></section>`:""}`:`<section class="parking-empty-state"><strong>\u99D0\u8ECA\u30A8\u30EA\u30A2\u304C\u3042\u308A\u307E\u305B\u3093</strong>
      <span>\u300C\u4F4D\u7F6E\u3092\u7BA1\u7406\u300D\u304B\u3089\u30A8\u30EA\u30A2\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u8ECA\u4E21\u3092\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002</span>
      ${Zt("parking:admin")?'<button class="btn btn-sm btn-primary" data-action="parking-location-manager">\u4F4D\u7F6E\u3092\u7BA1\u7406</button>':""}</section>`;xs(`${bs("\u8ECA\u4E21\u914D\u7F6E","",p)}
    <div class="parking-summary" aria-label="\u8ECA\u4E21\u306E\u6982\u8981">
      <div class="parking-summary-card"><span>\u767B\u9332\u8ECA\u4E21</span><strong>${i.vehicles.length}</strong></div>
      <div class="parking-summary-card"><span>\u914D\u7F6E\u30A8\u30EA\u30A2</span><strong>${i.parking_lots.length}</strong></div>
      <div class="parking-summary-card"><span>\u8981\u5BFE\u5FDC</span><strong>${g}</strong></div>
    </div>
    <section class="parking-fold"><details id="parking-status-panel">
      <summary class="parking-fold-summary"><strong>\u30B9\u30C6\u30FC\u30BF\u30B9\u5225\u306E\u8ECA\u4E21</strong><span>${i.vehicles.length} \u53F0 <span class="parking-fold-chevron" aria-hidden="true">\u203A</span></span></summary>
      ${Gu(i)}
    </details></section>
    <section class="parking-fold"><details id="parking-job-panel">
      <summary class="parking-fold-summary"><strong>\u30B8\u30E7\u30D6</strong><span>\u672A\u5B8C\u4E86 ${m} / \u5168 ${b} \u4EF6 <span class="parking-fold-chevron" aria-hidden="true">\u203A</span></span></summary>
      <div class="parking-fold-content">${o}</div>
    </details></section>
    ${t?"":'<div class="section-note">\u95B2\u89A7\u5C02\u7528\u3067\u3059\u3002\u914D\u7F6E\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u99D0\u8ECA\u5834\u66F8\u304D\u8FBC\u307F\u6A29\u9650\u304C\u5FC5\u8981\u3067\u3059\u3002</div>'}
    <div class="parking-workspace"><div class="parking-grid">${d}</div>
      <aside class="parking-vehicle-catalog" aria-labelledby="parking-catalog-title">
        <details open><summary class="parking-catalog-heading"><strong id="parking-catalog-title">\u8ECA\u4E21\u4E00\u89A7</strong><span>${i.vehicles.length} \u53F0 <span class="parking-fold-chevron" aria-hidden="true">\u2304</span></span></summary>
          ${yc(i)}
        </details>
      </aside>
    </div>`)}async function Wu(){let i=new URLSearchParams({limit:"50",offset:String(cn)});oi&&i.set("status",oi),An&&i.set("search",An);let t=await Dt(`/api/v1/reservations?${i}`);dc=t.items;let e=t.items.map(r=>{let a=r.status==="reserved"&&Zt("reservations:write")?`<button class="btn btn-sm btn-primary" data-action="reservation-checkin" data-id="${L(r.id)}">\u8CB8\u51FA\u624B\u7D9A\u304D</button> <button class="btn btn-sm btn-quiet" data-action="reservation-cancel" data-id="${L(r.id)}">\u30AD\u30E3\u30F3\u30BB\u30EB</button>`:r.status==="checked_in"&&Zt("reservations:write")?`<button class="btn btn-sm btn-primary" data-action="reservation-return" data-id="${L(r.id)}">\u8FD4\u5374\u624B\u7D9A\u304D</button>`:'<span class="secondary">\u2014</span>';return`<tr>
      <td class="primary-cell" data-label="\u4E88\u7D04\u756A\u53F7">${L(r.reservation_code)}<span class="secondary">${L(r.site_name)}</span></td>
      <td data-label="\u304A\u5BA2\u69D8">${L(r.guest_name)}<span class="secondary">${L(r.guest_phone)}</span></td>
      <td data-label="\u5229\u7528\u671F\u9593">${cc(r.start_at)}<span class="secondary">\uFF5E ${cc(r.end_at)}</span></td>
      <td data-label="\u8ECA\u4E21">${L(r.registration_number??"\u672A\u5272\u308A\u5F53\u3066")}<span class="secondary">${L(r.make??"")} ${L(r.model??"")}</span></td>
      <td data-label="\u72B6\u614B">${ai(r.status)}${r.checked_out_by_name?`<span class="secondary">\u8CB8\u51FA\u62C5\u5F53\uFF1A${L(r.checked_out_by_name)}</span>`:""}${r.returned_by_name?`<span class="secondary">\u8FD4\u5374\u62C5\u5F53\uFF1A${L(r.returned_by_name)}</span>`:""}</td>
      <td data-label="\u53D7\u4ED8\u64CD\u4F5C">${a}</td>
    </tr>`}).join(""),n=`<select class="filter-select" data-status><option value="">\u3059\u3079\u3066\u306E\u4E88\u7D04</option>${["reserved","checked_in","completed","cancelled"].map(r=>`<option value="${r}" ${oi===r?"selected":""}>${Rr(r)}</option>`).join("")}</select>`,s=[Yt.site.type!=="headquarters"?`<button class="btn" data-action="employee-roster" data-site-id="${L(Yt.site.id)}">${Ce("team")} \u30B9\u30BF\u30C3\u30D5\u540D\u7C3F</button>`:"",Zt("reservations:write")?`<button class="btn btn-primary" data-modal="reservation">${Ce("plus")} \u4E88\u7D04\u3092\u4F5C\u6210</button>`:""].join("");xs(`${bs("\u4E88\u7D04\u30FB\u53D7\u4ED8","\u8CB8\u51FA\u30FB\u8FD4\u5374\u6642\u306B\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u8A18\u9332\u3057\u307E\u3059",s)}
    ${Fo("\u4E88\u7D04\u756A\u53F7\u3001\u304A\u5BA2\u69D8\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3067\u691C\u7D22",n)}
    ${Oo(["\u4E88\u7D04\u756A\u53F7 / \u5E97\u8217","\u304A\u5BA2\u69D8\u60C5\u5831","\u5229\u7528\u671F\u9593","\u8ECA\u4E21","\u72B6\u614B","\u64CD\u4F5C"],e,"\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u6765\u5E97\u6642\u306B\u53D7\u4ED8\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044")}
    ${vc(t.items.length)}`)}async function Er(i){try{let t=Yt?.site.id===i?Yt.site:(await wr(),We.find(s=>s.id===i));if(!t||t.type==="headquarters")throw new Error("invalid_site");let e=await Dt(`/api/v1/employees?${new URLSearchParams({siteId:i,includeDisabled:"true"})}`);Du=e.items,Uu=i,Li="employees";let n=document.createElement("div");n.className="overlay",Ie(n,`<section class="modal employee-modal" role="dialog" aria-modal="true" aria-labelledby="employee-modal-title">
      <header class="modal-head"><div><h2 id="employee-modal-title">\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F</h2><p>${L(t.name)} \xB7 \u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u62C5\u5F53\u8005\u9078\u629E\u306B\u4F7F\u3044\u307E\u3059</p></div><button class="modal-close" data-action="close-modal" aria-label="\u9589\u3058\u308B">\xD7</button></header>
      <div class="modal-body">
        <form class="employee-create" data-form="employee">
          <input type="hidden" name="siteId" value="${L(i)}">
          <label class="field"><span class="field-label">\u30B9\u30BF\u30C3\u30D5\u540D</span><input name="name" maxlength="120" required placeholder="\u6C0F\u540D\u3092\u5165\u529B"></label>
          <button class="btn btn-primary" type="submit">${Ce("plus")} \u8FFD\u52A0</button>
        </form>
        <div class="employee-list">${e.items.length?e.items.map(s=>`<div class="employee-row">
          <span class="${s.status==="disabled"?"employee-disabled":""}">${L(s.name)}${s.status==="disabled"?"<small>\uFF08\u7121\u52B9\uFF09</small>":""}</span>
          <div><button class="btn btn-sm" data-action="employee-edit" data-id="${L(s.id)}">\u7DE8\u96C6</button>
          <button class="btn btn-sm ${s.status==="active"?"btn-quiet":""}" data-action="employee-toggle" data-id="${L(s.id)}" data-status="${s.status==="active"?"disabled":"active"}">${s.status==="active"?"\u7121\u52B9\u306B\u3059\u308B":"\u518D\u958B"}</button></div>
        </div>`).join(""):'<div class="empty">\u30B9\u30BF\u30C3\u30D5\u540D\u304C\u307E\u3060\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}</div>
      </div><footer class="modal-foot"><button type="button" class="btn" data-action="close-modal">\u9589\u3058\u308B</button></footer>
    </section>`),Oe.append(n),n.addEventListener("click",s=>{s.target===n&&Ge()})}catch(t){Tr=null,Qt(ve(t.message),!0)}}async function $u(i,t){let n=(await Dt(`/api/v1/employees?${new URLSearchParams({siteId:i.site_id})}`)).items.map(r=>`<option value="${L(r.id)}">${L(r.name)}</option>`).join(""),s=t==="checked_in"?"\u8CB8\u51FA":"\u8FD4\u5374";Hn(`${s}\u624B\u7D9A\u304D`,`${L(i.registration_number??"")} \xB7 \u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E`,`
    <input type="hidden" name="id" value="${L(i.id)}">
    <input type="hidden" name="status" value="${t}">
    ${Ii("employeeId","\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5",`<option value="">\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${n}`)}
    ${n?"":`<p class="section-note">\u5148\u306B\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3078\u62C5\u5F53\u8005\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><button type="button" class="btn" data-action="employee-roster" data-site-id="${L(i.site_id)}">\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3092\u958B\u304F</button>`}
  `,"reservation-transition",`${s}\u3092\u78BA\u5B9A`)}function ce(i,t,e="text",n="",s="",r=!1,a=""){return`<div class="field ${a}"><label for="f-${i}">${t}</label><input id="f-${i}" name="${i}" type="${e}" value="${L(n)}" placeholder="${L(s)}" ${r?"required":""}></div>`}function Ii(i,t,e,n=!0){return`<div class="field"><label for="f-${i}">${t}</label><select id="f-${i}" name="${i}" ${n?"required":""}>${e}</select></div>`}function Hn(i,t,e,n,s="\u4FDD\u5B58"){Li=n;let r=document.createElement("div");r.className="overlay",Ie(r,`<section class="modal" role="dialog" aria-modal="true"><header class="modal-head"><div><h2>${i}</h2><p>${t}</p></div><button class="modal-close" data-action="close-modal" aria-label="\u9589\u3058\u308B">\xD7</button></header><form data-form="${n}"><div class="modal-body">${e}</div><footer class="modal-foot"><button type="button" class="btn" data-action="close-modal">\u30AD\u30E3\u30F3\u30BB\u30EB</button><button type="submit" class="btn btn-primary">${s}</button></footer></form></section>`),Oe.append(r),r.addEventListener("click",a=>{a.target===r&&Ge()})}function Ge(){re(".overlay")?.remove(),Li="",Tr=null}function sv(){if(!Zt("parking:admin")||!ye)return;let i=ye,t=document.createElement("div");t.className="overlay";let e=i.parking_lots.map(n=>{let s=i.vehicles.filter(c=>c.parking_lot_id===n.id).length,r=i.jobs.filter(c=>c.destination_lot_id===n.id).length,a=s>0||r>0,l=i.parking_lots.length<=1?"\u6700\u5F8C\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002":a?`\u8ECA\u4E21 ${s} \u53F0\u30FB\u4F5C\u696D\u4E88\u5B9A ${r} \u4EF6\u304C\u3042\u308B\u305F\u3081\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002`:"";return`<div class="parking-location-row"><div><strong>${L(n.name)}</strong>
      <span class="secondary">${s} \u53F0 \xB7 \u4F5C\u696D\u4E88\u5B9A ${r} \u4EF6${n.is_active?"":" \xB7 \u505C\u6B62\u4E2D"}</span>
      ${l?`<small>${L(l)}</small>`:""}</div>
      <button class="btn btn-sm btn-quiet" data-action="parking-lot-delete" data-id="${L(n.id)}"
        ${l?"disabled":""}>\u524A\u9664</button></div>`}).join("");Ie(t,`<section class="modal parking-admin-dialog" role="dialog" aria-modal="true" aria-labelledby="parking-location-title">
    <header class="modal-head"><div><h2 id="parking-location-title">\u99D0\u8ECA\u4F4D\u7F6E\u3092\u7BA1\u7406</h2>
      <p>\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u8FFD\u52A0\u3068\u524A\u9664\u3092\u884C\u3044\u307E\u3059\u3002\u8ECA\u4E21\u3084\u4F5C\u696D\u4E88\u5B9A\u304C\u3042\u308B\u30A8\u30EA\u30A2\u3001\u6700\u5F8C\u306E\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002</p></div>
      <button class="modal-close" data-action="close-modal" aria-label="\u9589\u3058\u308B">\xD7</button></header>
    <div class="modal-body"><form class="card parking-lot-create" data-form="parking-lot">
      <label>\u99D0\u8ECA\u30A8\u30EA\u30A2\u540D <input name="name" maxlength="40" required></label>
      <label>Google Maps \u6848\u5185URL <input name="navigation_url" type="url" maxlength="2000" placeholder="https://maps.google.com/\u2026"></label>
      <button class="btn btn-sm btn-primary" type="submit">${Ce("plus")} \u30A8\u30EA\u30A2\u3092\u8FFD\u52A0</button>
    </form><section class="parking-location-list" aria-label="\u767B\u9332\u6E08\u307F\u99D0\u8ECA\u30A8\u30EA\u30A2">
      ${e||'<p class="empty">\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p>'}
    </section></div><footer class="modal-foot"><button class="btn" data-action="close-modal">\u9589\u3058\u308B</button></footer>
  </section>`),Oe.append(t),Li="parking-locations",t.addEventListener("click",n=>{n.target===t&&Ge()})}function rv(){if(!Zt("parking:admin")||!hc)return;let i=document.createElement("div");i.className="overlay",Ie(i,`<section class="modal parking-admin-dialog" role="dialog" aria-modal="true" aria-labelledby="parking-settings-title">
    <header class="modal-head"><div><h2 id="parking-settings-title">\u99D0\u8ECA\u5834\u8A2D\u5B9A</h2>
      <p>\u8ECA\u4E21\u30AF\u30E9\u30B9\u3001\u696D\u52D9\u72B6\u614B\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u3001\u8DDD\u96E2\u3001\u67FB\u5B9A\u9805\u76EE\u3001\u640D\u50B7\u30DE\u30FC\u30AB\u30FC\u3092\u7BA1\u7406\u3057\u307E\u3059\u3002</p></div>
      <button class="modal-close" data-action="close-modal" aria-label="\u9589\u3058\u308B">\xD7</button></header>
    <div class="modal-body">${hc}</div>
    <footer class="modal-foot"><button class="btn" data-action="close-modal">\u9589\u3058\u308B</button></footer>
  </section>`),Oe.append(i),Li="parking-settings",i.addEventListener("click",t=>{t.target===i&&Ge()})}async function Co(i,t=""){try{if(["account"].includes(i)&&await zu(),i==="site")Hn("\u5E97\u8217\u3092\u8FFD\u52A0","\u76F4\u55B6\u5E97\u307E\u305F\u306F\u52A0\u76DF\u5E97\u3092\u767B\u9332\u3057\u307E\u3059",`<div class="form-grid">
        ${ce("code","\u5E97\u8217\u30B3\u30FC\u30C9","text","","\u4F8B\uFF1ATKY-001",!0)}
        ${Ii("type","\u5E97\u8217\u7A2E\u5225",'<option value="direct">\u76F4\u55B6\u5E97</option><option value="franchise">\u52A0\u76DF\u5E97</option>')}
        ${ce("name","\u5E97\u8217\u540D","text","","\u5E97\u8217\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",!0,"full")}
      </div>`,"site");else if(i==="account")Hn("\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0","\u5E97\u8217\u7528\u306E\u30ED\u30B0\u30A4\u30F3ID\u3068\u5229\u7528\u6A29\u9650\u3092\u8A2D\u5B9A\u3057\u307E\u3059",`<div class="form-grid">
        ${ce("username","\u30A2\u30AB\u30A6\u30F3\u30C8\u540D","text","","\u534A\u89D2\u82F1\u6570\u5B57\u30FB\u8A18\u53F7 3\uFF5E64 \u6587\u5B57",!0)}
        ${ce("password","\u521D\u671F\u30D1\u30B9\u30EF\u30FC\u30C9","password","","12 \u6587\u5B57\u4EE5\u4E0A",!0)}
        ${Ii("siteId","\u6240\u5C5E\u5E97\u8217",`<option value="">\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${Ao()}`)}
        <div class="field full"><span class="field-label">\u5229\u7528\u6A29\u9650</span>${Ru()}</div>
      </div>`,"account");else if(i==="edit-account"){let e=Nu.find(n=>n.id===t);if(!e)throw new Error("not_found");Hn("\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u7DE8\u96C6",`${L(e.site_name)} \xB7 ${L(e.username)}`,`<input type="hidden" name="id" value="${L(e.id)}"><div class="form-grid">
        ${Ii("status","\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u72B6\u614B",`<option value="active" ${e.status==="active"?"selected":""}>\u6709\u52B9</option><option value="disabled" ${e.status==="disabled"?"selected":""}>\u7121\u52B9</option>`)}
        ${ce("password","\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u518D\u8A2D\u5B9A\uFF08\u4EFB\u610F\uFF09","password","","\u7A7A\u6B04\u306E\u5834\u5408\u306F\u5909\u66F4\u3057\u307E\u305B\u3093")}
        <div class="field full"><span class="field-label">\u5229\u7528\u6A29\u9650</span>${Ru(j_(e.permissions))}</div>
      </div>`,"edit-account")}else if(i==="employee-edit"){let e=Du.find(n=>n.id===t);if(!e)throw new Error("not_found");Hn("\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7DE8\u96C6","\u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u8A18\u9332\u306B\u8868\u793A\u3059\u308B\u540D\u524D\u3092\u5909\u66F4\u3057\u307E\u3059",`
        <input type="hidden" name="id" value="${L(e.id)}">
        <input type="hidden" name="siteId" value="${L(e.site_id)}">
        ${ce("name","\u30B9\u30BF\u30C3\u30D5\u540D","text",e.name,"\u6C0F\u540D\u3092\u5165\u529B",!0)}
      `,"employee-edit")}else if(i==="vehicle"){let e=Yt.site.type==="headquarters";e&&await wr();let n=Zt("parking:read")&&Zt("parking:write")&&!e?await Dt("/api/v1/parking/vehicle-catalog"):null;if(n&&!n.vehicle_classes.length)throw new Error("invalid_reference");let s=e?`<div class="field"><label for="f-siteId">\u6240\u5C5E\u5E97\u8217</label><select id="f-siteId" name="siteId" data-vehicle-site required>
          <option value="">\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${Ao()}</select></div>`:`<input type="hidden" name="siteId" value="${L(Yt.site.id)}">`,r=Zt("parking:read")&&Zt("parking:write")?`<div class="field"><label for="f-parkingClass">\u30AF\u30E9\u30B9</label><select id="f-parkingClass" name="parkingClass" data-vehicle-class required
            ${e?"disabled":""}>
            ${e?'<option value="">\u5148\u306B\u6240\u5C5E\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>':""}
            ${(n?.vehicle_classes??[]).map(a=>`<option value="${L(a.name)}">${L(a.name)}</option>`).join("")}
          </select></div>`:"";Hn("\u8ECA\u4E21\u3092\u8FFD\u52A0","\u8ECA\u4E21\u60C5\u5831\u3092\u767B\u9332\u3057\u307E\u3059",`<div class="form-grid">
        ${ce("registrationNumber","\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8","text","","\u30D7\u30EC\u30FC\u30C8\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",!0)}
        ${ce("vin","\u8ECA\u53F0\u756A\u53F7\uFF08\u4EFB\u610F\uFF09","text","","\u8ECA\u53F0\u756A\u53F7")}
        ${ce("make","\u30E1\u30FC\u30AB\u30FC","text","","\u4F8B\uFF1AToyota",!0)}
        ${ce("model","\u8ECA\u7A2E","text","","\u4F8B\uFF1APrius",!0)}
        ${ce("modelYear","\u5E74\u5F0F\uFF08\u4EFB\u610F\uFF09","number","","2024")}
        ${s}
        ${r}
      </div>`,"vehicle")}else if(i==="edit-vehicle"){let e=Fu.find(s=>s.id===t);if(!e)throw new Error("not_found");Yt.site.type==="headquarters"&&await wr();let n=Yt.site.type==="headquarters"?Ii("siteId","\u6240\u5C5E\u5E97\u8217",Ao(e.site_id)):`<input type="hidden" name="siteId" value="${L(Yt.site.id)}">`;Hn("\u8ECA\u4E21\u60C5\u5831\u3092\u7DE8\u96C6",`${L(e.registration_number)} \xB7 \u56FA\u5B9A\u8ECA\u4E21ID\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093`,`<input type="hidden" name="id" value="${L(e.id)}"><div class="form-grid">
        ${ce("registrationNumber","\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8","text",e.registration_number,"",!0)}
        ${ce("vin","\u8ECA\u53F0\u756A\u53F7","text",e.vin??"")}
        ${ce("make","\u30E1\u30FC\u30AB\u30FC","text",e.make,"",!0)}
        ${ce("model","\u8ECA\u7A2E","text",e.model,"",!0)}
        ${ce("modelYear","\u5E74\u5F0F","number",String(e.model_year??""))}
        ${n}
        ${Ii("status","\u8ECA\u4E21\u306E\u72B6\u614B",["available","rented","maintenance","retired"].map(s=>`<option value="${s}" ${e.status===s?"selected":""}>${Rr(s)}</option>`).join(""))}
      </div>`,"edit-vehicle")}else if(i==="reservation"){await wr();let e=new Date(Date.now()+30*6e4),n=new Date(e.getTime()+1440*6e4),s=h=>new Date(h.getTime()-h.getTimezoneOffset()*6e4).toISOString().slice(0,16),r=Yt.site.type==="headquarters"?"":Yt.site.id,a=r?`&siteId=${encodeURIComponent(r)}`:"",l=(await Dt(`/api/v1/vehicles?status=available&limit=100${a}`)).items.map(h=>`<option value="${L(h.id)}">${L(h.registration_number)} \xB7 ${L(h.make)} ${L(h.model)}</option>`).join(""),c=Yt.site.type==="headquarters"?`<div class="field"><label for="f-siteId">\u53D7\u4ED8\u5E97\u8217</label><select id="f-siteId" name="siteId" data-reservation-site required><option value="">\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${Ao()}</select></div>`:"";Hn("\u4E88\u7D04\u3092\u4F5C\u6210","\u304A\u5BA2\u69D8\u3068\u5229\u7528\u671F\u9593\u3092\u767B\u9332\u3057\u307E\u3059",`<div class="form-grid">
        ${ce("guestName","\u304A\u5BA2\u69D8\u306E\u6C0F\u540D","text","","\u6C0F\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",!0)}
        ${ce("guestPhone","\u96FB\u8A71\u756A\u53F7","tel","","\u96FB\u8A71\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",!0)}
        ${ce("startAt","\u8CB8\u51FA\u4E88\u5B9A\u65E5\u6642","datetime-local",s(e),"",!0)}
        ${ce("endAt","\u8FD4\u5374\u4E88\u5B9A\u65E5\u6642","datetime-local",s(n),"",!0)}
        ${c}
        ${Ii("vehicleId","\u8ECA\u4E21\u306E\u4E88\u7D04",`<option value="">\u8CB8\u51FA\u53EF\u80FD\u306A\u8ECA\u4E21\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${l}`)}
      </div>`,"reservation","\u4E88\u7D04\u3092\u4FDD\u5B58")}else if(i==="parking-lot-layout"){let e=ye?.parking_lots.find(n=>String(n.id)===t);if(!e)throw new Error("not_found");Hn("\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u30EC\u30A4\u30A2\u30A6\u30C8",`${L(e.name)} \xB7 \u56F3\u9762\u30B5\u30A4\u30BA\u3001\u53CE\u5BB9\u53F0\u6570\u3001\u512A\u5148\u30AF\u30E9\u30B9\u3092\u8A2D\u5B9A`,`
        <input type="hidden" name="id" value="${L(e.id)}"><div class="form-grid">
          ${ce("name","\u30A8\u30EA\u30A2\u540D","text",e.name,"",!0)}
          ${ce("area_height","\u56F3\u9762\u306E\u9AD8\u3055\uFF08px\uFF09","number",String(e.area_height),"160\uFF5E600",!0)}
          ${ce("area_width","\u30A8\u30EA\u30A2\u306E\u5E45\uFF08%\uFF09","number",String(e.area_width),"30\uFF5E100",!0)}
          ${ce("capacity","\u53CE\u5BB9\u53F0\u6570\uFF08\u7121\u5236\u9650\u306F\u7A7A\u6B04\uFF09","number",e.capacity===null?"":String(e.capacity),"0\uFF5E1000")}
          ${ce("navigation_url","Google Maps \u6848\u5185URL","url",e.navigation_url,"https://maps.google.com/\u2026",!1,"full")}
          ${ce("class_priority","\u512A\u5148\u8ECA\u4E21\u30AF\u30E9\u30B9\uFF08\u4E0A\u4F4D\u304B\u3089\u30AB\u30F3\u30DE\u533A\u5207\u308A\uFF09","text",e.class_priority.join(", "),"",!1,"full")}
          <label class="field"><span class="field-label">\u7A3C\u50CD\u72B6\u614B</span><select name="is_active"><option value="true" ${e.is_active?"selected":""}>\u904B\u7528\u4E2D</option><option value="false" ${e.is_active?"":"selected"}>\u505C\u6B62\u4E2D</option></select></label>
        </div>`,"parking-lot-layout","\u30EC\u30A4\u30A2\u30A6\u30C8\u3092\u4FDD\u5B58")}}catch(e){Qt(ve(e.message),!0)}}async function wr(){We.length||(We=(await Dt("/api/v1/sites")).items)}function Ro(i,t){return[...i.querySelectorAll(`input[name="${t}"]:checked`)].map(e=>e.value)}function ys(){Lo?.dispose(),Lo=null,_c=null,re(".parking-inspection-overlay")?.remove()}function av(i){let t=ye,e=t?.vehicles.find(r=>r.id===i);if(!t||!e||!t.damage_types.length)return;ys();let n=document.createElement("div");n.className="parking-inspection-overlay",Ie(n,`<section class="parking-inspection-dialog" role="dialog" aria-modal="true">
    <header><div><h2>3D\u8ECA\u4E21\u691C\u67FB</h2><p>${L(e.plate)} \xB7 \u30C9\u30E9\u30C3\u30B0\u3067360\xB0\u56DE\u8EE2\u3002\u7A2E\u985E\u3092\u9078\u3093\u3067\u8ECA\u4F53\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u8A18\u9332\u3001\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u524A\u9664\u3057\u307E\u3059\u3002</p></div>
      <button class="btn btn-sm" type="button" data-action="parking-inspect3d-close">\u9589\u3058\u308B</button></header>
    <div class="parking-inspection-palette">${t.damage_types.map(r=>`<button type="button" data-damage-type="${L(r.id)}" style="--damage-color:${L(r.color)}">${L(r.icon)} ${L(r.name)}</button>`).join("")}</div>
    <div class="parking-inspection-view"></div>
  </section>`),Oe.append(n),_c=i,Lo=Mu(re(".parking-inspection-view",n),t.damage_types,on.get(i)??e.inspection_marks,r=>on.set(i,r));let s=re(".parking-inspection-canvas",n);s&&s.setAttribute("aria-label",yr("3D\u8ECA\u4E21\u3092\u56DE\u8EE2\u3057\u640D\u50B7\u7B87\u6240\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u8A18\u9332",Di())),n.addEventListener("click",r=>{r.target===n&&ys()})}function ov(i){let t=i.target.closest("[data-parking-drag]");if(!t||!Zt("parking:write")||!ye||i.button!==0||be)return;let e=Number(t.dataset.parkingDrag),n=t.closest(".parking-map-vehicle"),s=ye.vehicles.find(a=>a.id===e);if(!n||!s)return;i.preventDefault();let r=t.cloneNode(!0);r.className="parking-drag-ghost",r.style.left=`${i.clientX}px`,r.style.top=`${i.clientY}px`,document.body.append(r),be={vehicleId:e,pointerId:i.pointerId,source:n,ghost:r,clientX:i.clientX,clientY:i.clientY,startX:i.clientX,startY:i.clientY,moved:!1,frame:0},t.setPointerCapture(i.pointerId),be.frame=requestAnimationFrame(Xu)}function lv(i){let t=i.target.closest("[data-parking-resize]");if(!t||!Zt("parking:admin")||!ye||i.button!==0||Re)return;let e=Number(t.dataset.parkingResize),n=ye.parking_lots.find(l=>l.id===e),s=t.closest(".parking-lot"),r=re("[data-parking-map]",s??document),a=re(".parking-grid");if(!n||!s||!r||!a)return;let o=a.getBoundingClientRect().width;o&&(i.preventDefault(),i.stopPropagation(),Re={pointerId:i.pointerId,lotId:e,card:s,map:r,handle:t,startX:i.clientX,startY:i.clientY,width:n.area_width,height:n.area_height,gridWidth:o,nextWidth:n.area_width,nextHeight:n.area_height},t.setPointerCapture(i.pointerId),s.classList.add("parking-lot-resizing"))}function cv(i){if(!Re||i.pointerId!==Re.pointerId)return;let t=Math.max(30,Math.min(100,Math.round(Re.width+(i.clientX-Re.startX)/Re.gridWidth*100))),e=Math.max(160,Math.min(600,Math.round(Re.height+i.clientY-Re.startY)));Re.nextWidth=t,Re.nextHeight=e,Re.card.style.setProperty("--parking-lot-width",`${t}%`),Re.map.style.height=`${e}px`}async function Iu(i,t=!1){if(!Re||i.pointerId!==Re.pointerId)return;let e=Re;Re=null,e.card.classList.remove("parking-lot-resizing");let n=ye?.parking_lots.find(s=>s.id===e.lotId);if(t||!n){e.card.style.setProperty("--parking-lot-width",`${e.width}%`),e.map.style.height=`${e.height}px`;return}if(!(e.nextWidth===e.width&&e.nextHeight===e.height))try{await Dt(`/api/v1/parking/lots/${e.lotId}`,{method:"PATCH",body:JSON.stringify({area_width:e.nextWidth,area_height:e.nextHeight})}),await Fe()}catch(s){Qt(ve(s.message),!0),e.card.style.setProperty("--parking-lot-width",`${e.width}%`),e.map.style.height=`${e.height}px`}}function Xu(){if(!be||(be.frame=requestAnimationFrame(Xu),!be.moved))return;let i=Math.min(90,window.innerHeight*.14),t=be.clientY,e=t<i?-Math.ceil(18*(1-t/i)):t>window.innerHeight-i?Math.ceil(18*(1-(window.innerHeight-t)/i)):0;e&&window.scrollBy(0,e)}function hv(i){!be||i.pointerId!==be.pointerId||(be.clientX=i.clientX,be.clientY=i.clientY,Math.abs(i.clientX-be.startX)+Math.abs(i.clientY-be.startY)>5&&(be.moved=!0),be.moved&&(be.ghost.style.left=`${i.clientX}px`,be.ghost.style.top=`${i.clientY}px`,document.querySelectorAll(".parking-map.drop-target").forEach(t=>t.classList.remove("drop-target")),document.elementFromPoint(i.clientX,i.clientY)?.closest("[data-parking-map]")?.classList.add("drop-target")))}function xc(i,t,e){let n=i.getBoundingClientRect();return{x:Math.max(0,Math.min(1,(t-n.left)/n.width)),y:Math.max(0,Math.min(1,(e-n.top)/n.height))}}function uv(i){let t=i.target.closest("svg[data-marking-svg].editable");if(!t||!Zt("parking:admin")||vs!==Number(t.dataset.lotId)||i.button!==0||!ye)return;let e=xc(t,i.clientX,i.clientY);i.preventDefault(),Qe={pointerId:i.pointerId,lotId:Number(t.dataset.lotId),x1:e.x,y1:e.y,svg:t},t.setPointerCapture(i.pointerId);let n=document.createElementNS("http://www.w3.org/2000/svg","line");n.classList.add("parking-marking-preview"),n.dataset.draftMarking="true",n.setAttribute("x1",String(e.x*1e3)),n.setAttribute("y1",String(e.y*1e3)),n.setAttribute("x2",String(e.x*1e3)),n.setAttribute("y2",String(e.y*1e3)),n.setAttribute("stroke",Ar),n.setAttribute("stroke-width","7"),n.setAttribute("stroke-linecap","round"),t.append(n)}function dv(i){if(!Qe||Qe.pointerId!==i.pointerId)return;let t=xc(Qe.svg,i.clientX,i.clientY),e=Qe.svg.querySelector('[data-draft-marking="true"]');e?.setAttribute("x2",String(t.x*1e3)),e?.setAttribute("y2",String(t.y*1e3))}async function fv(i){if(!Qe||Qe.pointerId!==i.pointerId)return;let t=Qe;Qe=null,t.svg.querySelector('[data-draft-marking="true"]')?.remove();let n=xc(t.svg,i.clientX,i.clientY);if(Math.hypot(n.x-t.x1,n.y-t.y1)<.005)return;let s=ye?.parking_lots.find(a=>a.id===t.lotId);if(!s)return;let r={id:crypto.randomUUID(),x1:t.x1,y1:t.y1,x2:n.x,y2:n.y,color:Ar};try{await Dt(`/api/v1/parking/lots/${s.id}`,{method:"PATCH",body:JSON.stringify({markings:[...s.markings,r]})}),await Fe()}catch(a){Qt(ve(a.message),!0)}}function pv(i){!Qe||Qe.pointerId!==i.pointerId||(Qe.svg.querySelector('[data-draft-marking="true"]')?.remove(),Qe=null)}async function Pu(i){if(!be||i.pointerId!==be.pointerId)return;let t=be;if(be=null,cancelAnimationFrame(t.frame),t.ghost.remove(),document.querySelectorAll(".parking-map.drop-target").forEach(c=>c.classList.remove("drop-target")),!t.moved)return;let e=document.elementFromPoint(i.clientX,i.clientY)?.closest("[data-parking-map]"),n=ye?.vehicles.find(c=>c.id===t.vehicleId);if(!e||!n)return;let s=e.getBoundingClientRect(),r=e.dataset.lotId?Number(e.dataset.lotId):null,a=r===null?n.position_x:Math.max(0,Math.min(1,(i.clientX-s.left)/s.width)),o=r===null?n.position_y:Math.max(0,Math.min(1,(i.clientY-s.top)/s.height)),l={vehicleId:n.id,lotId:n.parking_lot_id,x:n.position_x,y:n.position_y};try{await Dt(`/api/v1/parking/vehicles/${n.id}`,{method:"PATCH",body:JSON.stringify({parking_lot_id:r,position_x:a,position_y:o})}),Sr.push(l),await Fe()}catch(c){Qt(ve(c.message),!0)}}async function mv(i){let t=i.target.closest("form[data-form]");if(!t)return;i.preventDefault();let e=t.dataset.form,n=new FormData(t),s=a=>String(n.get(a)??"").trim(),r=re('button[type="submit"]',t);r&&r.setAttribute("disabled","true");try{if(e==="site")await Dt("/api/v1/sites",{method:"POST",body:JSON.stringify({code:s("code"),name:s("name"),type:s("type")})});else if(e==="account")await Dt("/api/v1/accounts",{method:"POST",body:JSON.stringify({siteId:s("siteId"),username:s("username"),password:s("password"),permissions:Ro(t,"permissions")})});else if(e==="edit-account"){let a={status:s("status"),permissions:Ro(t,"permissions")};s("password")&&(a.password=s("password")),await Dt(`/api/v1/accounts/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify(a)})}else if(e==="employee"){await Dt("/api/v1/employees",{method:"POST",body:JSON.stringify({siteId:s("siteId"),name:s("name")})});let a=s("siteId"),o=Tr;Tr=null,Ge(),Qt("\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\u3002"),o?await $u(o.reservation,o.status):await Er(a);return}else if(e==="employee-edit"){await Dt(`/api/v1/employees/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({siteId:s("siteId"),name:s("name")})});let a=s("siteId");Ge(),Qt("\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002"),await Er(a);return}else if(e==="reservation-transition")await Dt(`/api/v1/reservations/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({status:s("status"),employeeId:s("employeeId")})});else if(e==="vehicle")await Dt("/api/v1/vehicles",{method:"POST",body:JSON.stringify({registrationNumber:s("registrationNumber"),vin:s("vin")||void 0,make:s("make"),model:s("model"),modelYear:s("modelYear")?Number(s("modelYear")):void 0,siteId:s("siteId"),...Zt("parking:read")&&Zt("parking:write")?{parkingClass:s("parkingClass")}:{}})});else if(e==="edit-vehicle")await Dt(`/api/v1/vehicles/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({registrationNumber:s("registrationNumber"),vin:s("vin")||null,make:s("make"),model:s("model"),modelYear:s("modelYear")?Number(s("modelYear")):null,siteId:s("siteId"),status:s("status")})});else if(e==="reservation"){let a=new Date(s("startAt")),o=new Date(s("endAt"));if(!Number.isFinite(a.getTime())||!Number.isFinite(o.getTime())||a>=o)throw new Error("\u8CB8\u51FA\u65E5\u6642\u3068\u8FD4\u5374\u65E5\u6642\u3092\u6B63\u3057\u304F\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");let l={guestName:s("guestName"),guestPhone:s("guestPhone"),startAt:a.toISOString(),endAt:o.toISOString(),vehicleId:s("vehicleId")};Yt.site.type==="headquarters"&&(l.siteId=s("siteId")),await Dt("/api/v1/reservations",{method:"POST",body:JSON.stringify(l)})}else if(e==="parking-vehicle"){let a=Number(s("position_x")),o=Number(s("position_y"));if(!Number.isFinite(a)||!Number.isFinite(o)||a<0||a>1||o<0||o>1)throw new Error("invalid_request");await Dt(`/api/v1/parking/vehicles/${encodeURIComponent(t.dataset.id)}`,{method:"PATCH",body:JSON.stringify({parking_lot_id:s("parking_lot_id")?Number(s("parking_lot_id")):null,position_x:a,position_y:o,status_ids:Ro(t,"status_ids").map(Number),unwashed:!!n.get("unwashed"),no_fuel:!!n.get("no_fuel"),needs_repair:!!n.get("needs_repair"),options:Ro(t,"options"),notes:s("notes")||null,assessment_values:Object.fromEntries([...t.querySelectorAll("[data-assessment-id]")].map(l=>[l.dataset.assessmentId,l instanceof HTMLInputElement&&l.type==="checkbox"?l.checked:l.value])),inspection_marks:(on.get(Number(t.dataset.id))??[]).map(l=>({id:l.id,damage_type_id:l.damage_type_id,x:l.x,y:l.y,...typeof l.world_x=="number"&&typeof l.world_y=="number"&&typeof l.world_z=="number"?{world_x:l.world_x,world_y:l.world_y,world_z:l.world_z}:{},...typeof l.world_nx=="number"&&typeof l.world_ny=="number"&&typeof l.world_nz=="number"?{world_nx:l.world_nx,world_ny:l.world_ny,world_nz:l.world_nz}:{}}))})}),on.delete(Number(t.dataset.id))}else if(e==="parking-job")await Dt("/api/v1/parking/jobs",{method:"POST",body:JSON.stringify({vehicle_id:Number(s("vehicle_id")),destination_lot_id:Number(s("destination_lot_id")),scheduled_at:s("scheduled_at")})});else if(e==="parking-lot")await Dt("/api/v1/parking/lots",{method:"POST",body:JSON.stringify({name:s("name"),navigation_url:s("navigation_url")})});else if(e==="parking-lot-layout"){let a=Number(s("area_height")),o=Number(s("area_width")),l=s("capacity")?Number(s("capacity")):null;if(!Number.isInteger(a)||a<160||a>600||!Number.isInteger(o)||o<30||o>100||l!==null&&(!Number.isInteger(l)||l<0||l>1e3))throw new Error("invalid_request");await Dt(`/api/v1/parking/lots/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({name:s("name"),area_height:a,area_width:o,capacity:l,navigation_url:s("navigation_url"),class_priority:s("class_priority").split(",").map(c=>c.trim()).filter(Boolean),is_active:s("is_active")==="true"})})}else if(e==="parking-class")await Dt("/api/v1/parking/classes",{method:"POST",body:JSON.stringify({name:s("name"),color:s("color")})});else if(e==="parking-status")await Dt("/api/v1/parking/statuses",{method:"POST",body:JSON.stringify({name:s("name"),icon:s("icon")||void 0})});else if(e==="parking-option")await Dt("/api/v1/parking/options",{method:"POST",body:JSON.stringify({name:s("name")})});else if(e==="parking-store")await Dt("/api/v1/parking/stores",{method:"POST",body:JSON.stringify({name:s("name")})});else if(e==="lot-distance"||e==="store-distance"){let a=s("minutes")===""?null:Number(s("minutes")),o=s("km")===""?null:Number(s("km"));if(a!==null&&!Number.isFinite(a)||o!==null&&!Number.isFinite(o))throw new Error("invalid_request");let l=e==="lot-distance"?{from_lot_id:Number(s("from_lot_id")),to_lot_id:Number(s("to_lot_id")),minutes:a,km:o}:{store_id:Number(s("store_id")),lot_id:Number(s("lot_id")),minutes:a,km:o};await Dt(`/api/v1/parking/${e==="lot-distance"?"lot-distances":"store-distances"}`,{method:"PUT",body:JSON.stringify({entries:[l]})})}else if(e==="parking-assessment"){let a={name:s("name"),field_type:s("field_type"),suffix:s("suffix")};await Dt(`/api/v1/parking/assessment-fields${t.dataset.id?`/${encodeURIComponent(t.dataset.id)}`:""}`,{method:t.dataset.id?"PATCH":"POST",body:JSON.stringify(a)})}else if(e==="parking-damage"){let a={name:s("name"),icon:s("icon"),color:s("color")};await Dt(`/api/v1/parking/damage-types${t.dataset.id?`/${encodeURIComponent(t.dataset.id)}`:""}`,{method:t.dataset.id?"PATCH":"POST",body:JSON.stringify(a)})}Ge(),Qt("\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002"),e==="site"&&(We=[]),await Tn()}catch(a){Qt(ve(a.message),!0),r&&r.removeAttribute("disabled")}}async function gv(i){let t=i.target.closest('[data-action="parking-damage-remove"]');if(t){i.preventDefault();let s=Number(t.dataset.vehicleId),r=t.dataset.markId;on.set(s,(on.get(s)??[]).filter(a=>a.id!==r)),_c===s&&Lo?.setMarks(on.get(s)??[]),t.remove();return}let e=i.target.closest("[data-damage-map]");if(e){i.preventDefault();let s=e.closest('form[data-form="parking-vehicle"]'),r=re('[name="damage_type_id"]',s??document);if(!s||!r?.value)return;let a=e.getBoundingClientRect();if(!a.width||!a.height)return;let o=Number(e.dataset.id),l={id:crypto.randomUUID(),damage_type_id:Number(r.value),x:Math.max(0,Math.min(1,(i.clientX-a.left)/a.width)),y:Math.max(0,Math.min(1,(i.clientY-a.top)/a.height))},c=[...on.get(o)??[],l];on.set(o,c);let h=document.createElement("button");h.type="button",h.className="damage-marker",h.dataset.action="parking-damage-remove",h.dataset.vehicleId=String(o),h.dataset.markId=l.id,h.style.left=`${l.x*100}%`,h.style.top=`${l.y*100}%`,h.style.background=r.selectedOptions[0]?.dataset.color??"#e34b4b",h.textContent="\xD7",e.append(h);return}let n=i.target.closest("[data-page],[data-action],[data-modal],[data-language]");if(n){if(n.dataset.language==="ja"||n.dataset.language==="zh")await nv(n.dataset.language);else if(n.dataset.page){i.preventDefault(),ys();let s=n.dataset.page;if(!Po.includes(s)||!Uo().some(r=>r.page===s))return;s!==Te&&history.pushState(null,"",xr(s)),Te=s,localStorage.setItem(Io,Te),cn=0,An="",oi="",Mr=!1,No(),await Tn()}else if(n.dataset.modal)await Co(n.dataset.modal);else if(n.dataset.action==="close-modal")Ge();else if(n.dataset.action==="logout")ys(),window.clearTimeout(fc),_s?.close(),_s=null,ln="",Yt=null,sessionStorage.removeItem("guts_erp_token"),Cr();else if(n.dataset.action==="parking-location-manager")sv();else if(n.dataset.action==="parking-settings")rv();else if(n.dataset.action==="parking-class-filter"){ri=n.dataset.class??"all";let s=re("#parking-catalog-content");s&&ye&&(Ie(s,yc(ye)),s.replaceWith(s.firstElementChild))}else if(n.dataset.action==="parking-status-filter"){Pi=n.dataset.statusId??"all";let s=re("#parking-status-content");s&&ye&&(Ie(s,Gu(ye)),s.replaceWith(s.firstElementChild))}else if(n.dataset.action==="parking-focus-vehicle"){let s=re(`.parking-map-vehicle[data-vehicle-id="${CSS.escape(n.dataset.id??"")}"]`);s?.scrollIntoView({behavior:"smooth",block:"center"}),re("[data-parking-drag]",s??document)?.focus({preventScroll:!0}),s?.classList.add("parking-vehicle-highlight"),window.setTimeout(()=>s?.classList.remove("parking-vehicle-highlight"),1700)}else if(n.dataset.action==="employee-roster"){if(Li==="reservation-transition"){let s=re('form[data-form="reservation-transition"]'),r=dc.find(l=>l.id===re('[name="id"]',s??document)?.value),a=re('[name="status"]',s??document)?.value,o=null;r&&a==="checked_in"?o={reservation:r,status:"checked_in"}:r&&a==="completed"&&(o={reservation:r,status:"completed"}),Ge(),Tr=o,await Er(n.dataset.siteId??Yt.site.id);return}else Li&&Ge();await Er(n.dataset.siteId??Yt.site.id)}else if(n.dataset.action==="employee-edit")Ge(),await Co("employee-edit",n.dataset.id);else if(n.dataset.action==="employee-toggle"){let s=Uu;Ge();try{await Dt(`/api/v1/employees/${encodeURIComponent(n.dataset.id)}`,{method:"PATCH",body:JSON.stringify({siteId:s,status:n.dataset.status})}),Qt(n.dataset.status==="active"?"\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u518D\u958B\u3057\u307E\u3057\u305F\u3002":"\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7121\u52B9\u306B\u3057\u307E\u3057\u305F\u3002"),await Er(s)}catch(r){Qt(ve(r.message),!0)}}else if(n.dataset.action==="parking-inspect3d")av(Number(n.dataset.id));else if(n.dataset.action==="parking-inspect3d-close")ys();else if(n.dataset.action==="parking-move-undo"){let s=Sr[Sr.length-1];if(!s)return;try{await Dt(`/api/v1/parking/vehicles/${s.vehicleId}`,{method:"PATCH",body:JSON.stringify({parking_lot_id:s.lotId,position_x:s.x,position_y:s.y})}),Sr.pop(),await Fe()}catch(r){Qt(ve(r.message),!0)}}else if(n.dataset.action==="parking-lot-settings")await Co("parking-lot-layout",n.dataset.id);else if(n.dataset.action==="parking-lot-resize"){let s=Number(n.dataset.id);Do=Do===s?null:s,await Fe()}else if(n.dataset.action==="parking-marking-toggle"){let s=Number(n.dataset.id);vs=vs===s?null:s,await Fe()}else if(n.dataset.action==="parking-marking-undo"){let s=ye?.parking_lots.find(r=>String(r.id)===n.dataset.id);if(!s?.markings.length)return;try{await Dt(`/api/v1/parking/lots/${s.id}`,{method:"PATCH",body:JSON.stringify({markings:s.markings.slice(0,-1)})}),await Fe()}catch(r){Qt(ve(r.message),!0)}}else if(n.dataset.action==="parking-job-toggle")try{await Dt(`/api/v1/parking/jobs/${encodeURIComponent(n.dataset.id)}`,{method:"PATCH",body:JSON.stringify({completed:n.dataset.completed==="true"})}),Qt("\u4E88\u5B9A\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002"),await Fe()}catch(s){Qt(ve(s.message),!0)}else if(n.dataset.action==="parking-job-delete"){if(!wo("\u3053\u306E\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F"))return;try{await Dt(`/api/v1/parking/jobs/${encodeURIComponent(n.dataset.id)}`,{method:"DELETE"}),Qt("\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002"),await Fe()}catch(s){Qt(ve(s.message),!0)}}else if(n.dataset.action==="parking-lot-toggle")try{await Dt(`/api/v1/parking/lots/${encodeURIComponent(n.dataset.id)}`,{method:"PATCH",body:JSON.stringify({is_active:n.dataset.active==="true"})}),await Fe()}catch(s){Qt(ve(s.message),!0)}else if(n.dataset.action==="parking-lot-delete"){if(!Zt("parking:admin")||!wo("\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F"))return;try{await Dt(`/api/v1/parking/lots/${encodeURIComponent(n.dataset.id)}`,{method:"DELETE"}),Ge(),Qt("\u99D0\u8ECA\u30A8\u30EA\u30A2\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002"),await Fe()}catch(s){Qt(ve(s.message),!0)}}else if(n.dataset.action==="parking-lot-order"){if(!ye)return;let s=ye.parking_lots.map(o=>o.id),r=s.indexOf(Number(n.dataset.id)),a=r+(n.dataset.direction==="up"?-1:1);if(r<0||a<0||a>=s.length)return;[s[r],s[a]]=[s[a],s[r]];try{await Dt("/api/v1/parking/lots/order",{method:"PUT",body:JSON.stringify({ids:s})}),await Fe()}catch(o){Qt(ve(o.message),!0)}}else if(n.dataset.action?.startsWith("parking-")&&["parking-class-delete","parking-status-delete","parking-option-delete","parking-store-delete","parking-assessment-delete","parking-damage-delete"].includes(n.dataset.action)){let s=n.dataset.action==="parking-class-delete"?"classes":n.dataset.action==="parking-status-delete"?"statuses":n.dataset.action==="parking-option-delete"?"options":n.dataset.action==="parking-store-delete"?"stores":n.dataset.action==="parking-assessment-delete"?"assessment-fields":"damage-types";if(!wo("\u3053\u306E\u8A2D\u5B9A\u9805\u76EE\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F"))return;try{await Dt(`/api/v1/parking/${s}/${encodeURIComponent(n.dataset.id)}`,{method:"DELETE"}),Ge(),Qt("\u8A2D\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002"),await Fe()}catch(r){Qt(ve(r.message),!0)}}else if(n.dataset.action==="sync-parking"){let s=n;s.disabled=!0;try{let r=await Dt("/api/v1/parking/vehicles:sync",{method:"POST"});Qt(`\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\uFF08\u65B0\u898F ${r.created} \u53F0\u3001\u66F4\u65B0 ${r.updated} \u53F0\uFF09\u3002`),await Fe()}catch(r){Qt(r.message,!0)}finally{s.disabled=!1}}else if(n.dataset.action==="refresh")await Tn();else if(n.dataset.action==="menu")Mr=!Mr,re(".sidebar")?.classList.toggle("open",Mr);else if(n.dataset.action==="next")cn+=50,await Tn();else if(n.dataset.action==="prev")cn=Math.max(0,cn-50),await Tn();else if(n.dataset.action==="edit-account"||n.dataset.action==="edit-vehicle")await Co(n.dataset.action,n.dataset.id);else if(n.dataset.action?.startsWith("reservation-")){let s=dc.find(a=>a.id===n.dataset.id);if(!s)return;if(n.dataset.action==="reservation-checkin"||n.dataset.action==="reservation-return"){try{await $u(s,n.dataset.action==="reservation-checkin"?"checked_in":"completed")}catch(a){Qt(ve(a.message),!0)}return}let r=`${s.guest_name} \u69D8\u306E\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u304B\uFF1F`;if(!wo(r))return;try{await Dt(`/api/v1/reservations/${encodeURIComponent(s.id)}`,{method:"PATCH",body:JSON.stringify({status:"cancelled"})}),Qt("\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3057\u305F\u3002"),await Tn()}catch(a){Qt(ve(a.message),!0)}}}}function _v(i){if(!(i.target instanceof HTMLInputElement))return;if(i.target.matches("[data-parking-search]")){br=i.target.value.trim();let n=re("#parking-catalog-content");if(n&&ye){Ie(n,yc(ye)),n.replaceWith(n.firstElementChild);let s=re("[data-parking-search]");s?.focus(),s instanceof HTMLInputElement&&s.setSelectionRange(s.value.length,s.value.length)}return}if(i.target.matches("[data-marking-color]")){Ar=i.target.value,re(".parking-marking-preview")?.setAttribute("stroke",Ar);return}if(!i.target.matches("[data-search]"))return;let t=i.target.selectionStart;An=i.target.value,cn=0;let e=Te==="sites"?Bu:Te==="accounts"?Hu:Te==="vehicles"?Vu:Te==="reservations"?Wu:null;e&&(window.clearTimeout(Au),Au=window.setTimeout(()=>{e().then(()=>{let n=re("[data-search]");n?.focus(),n instanceof HTMLInputElement&&t!==null&&n.setSelectionRange(t,t)}).catch(n=>Qt(ve(n.message),!0))},180))}function vv(i){let t=i.target;if(t.matches("[data-vehicle-site]")){let e=re("[data-vehicle-class]",re(".overlay"));if(!e)return;let n=t.value;if(e.disabled=!0,Ie(e,n?'<option value="">\u8ECA\u4E21\u30AF\u30E9\u30B9\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</option>':'<option value="">\u5148\u306B\u6240\u5C5E\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>'),!n)return;Dt(`/api/v1/parking/vehicle-catalog?${new URLSearchParams({siteId:n})}`).then(s=>{if(t.value===n){if(!s.vehicle_classes.length)throw new Error("invalid_reference");Ie(e,`${s.vehicle_classes.map(r=>`<option value="${L(r.name)}">${L(r.name)}</option>`).join("")}`)}}).catch(s=>{t.value===n&&(Ie(e,'<option value="">\u8ECA\u4E21\u30AF\u30E9\u30B9\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F</option>'),Qt(ve(s.message),!0))}).finally(()=>{t.value===n&&(e.disabled=!1)})}else if(t.matches("[data-status]"))oi=t.value,cn=0,Tn();else if(t.matches("[data-reservation-site]")){let e=re('[name="vehicleId"]',re(".overlay"));if(!e)return;Ie(e,'<option value="">\u8ECA\u4E21\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</option>'),e.setAttribute("disabled","true"),Dt(`/api/v1/vehicles?${new URLSearchParams({status:"available",limit:"100",siteId:t.value})}`).then(n=>{Ie(e,`<option value="">\u8CB8\u51FA\u53EF\u80FD\u306A\u8ECA\u4E21\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${n.items.map(s=>`<option value="${L(s.id)}">${L(s.registration_number)} \xB7 ${L(s.make)} ${L(s.model)}</option>`).join("")}`)}).catch(n=>{Ie(e,'<option value="">\u8ECA\u4E21\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5E97\u8217\u3092\u9078\u629E\u3057\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002</option>'),Qt(ve(n.message),!0)}).finally(()=>e.removeAttribute("disabled"))}}"serviceWorker"in navigator&&window.isSecureContext&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js",{scope:"/"}).catch(()=>Qt("\u30AA\u30D5\u30E9\u30A4\u30F3\u7528\u30A2\u30D7\u30EA\u306E\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u304F\u3060\u3055\u3044\u3002",!0))},{once:!0});window.addEventListener("hashchange",()=>{if(!Yt)return;let i=gc()??"dashboard";Te=Uo().some(t=>t.page===i)?i:"dashboard",location.hash!==xr(Te)&&history.replaceState(null,"",xr(Te)),localStorage.setItem(Io,Te),ys(),No(),Tn()});ln?Ou().catch(()=>{ln="",Yt=null,sessionStorage.removeItem("guts_erp_token"),Cr()}):Cr();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
