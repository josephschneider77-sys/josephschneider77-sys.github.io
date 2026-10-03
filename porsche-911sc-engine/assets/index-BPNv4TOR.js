var Lh=Object.defineProperty;var Dh=(i,e,t)=>e in i?Lh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ut=(i,e,t)=>Dh(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Rc="930/04",Ih={"930/03":{driveWheel:"930 102 115 01",airInjection:!1,egr:!1,frontExhaust:"pre-silencer"},"930/04":{driveWheel:"930 102 115 02",airInjection:!0,egr:!0,frontExhaust:"catalytic-converter"},"930/06":{driveWheel:"930 102 115 02",airInjection:!0,egr:!0,frontExhaust:"catalytic-converter"}},kh=Ih[Rc];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="170",Ii={ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uh=0,Go=1,Nh=2,Cc=1,Fh=2,En=3,Dn=0,Dt=1,nn=2,Yn=0,ki=1,Vo=2,Wo=3,jo=4,Oh=5,li=100,Bh=101,zh=102,Hh=103,Gh=104,Vh=200,Wh=201,jh=202,qh=203,pa=204,ma=205,Xh=206,Kh=207,Yh=208,$h=209,Zh=210,Jh=211,Qh=212,eu=213,tu=214,ga=0,ba=1,_a=2,Bi=3,va=4,xa=5,ya=6,Ma=7,Pc=0,nu=1,iu=2,$n=0,su=1,ru=2,au=3,Lc=4,ou=5,lu=6,cu=7,qo="attached",hu="detached",Dc=300,zi=301,Hi=302,Sa=303,Ea=304,Sr=306,Gi=1e3,qn=1001,vr=1002,It=1003,Ic=1004,ms=1005,Gt=1006,dr=1007,wn=1008,In=1009,kc=1010,Uc=1011,Es=1012,ho=1013,ui=1014,an=1015,Ls=1016,uo=1017,fo=1018,Vi=1020,Nc=35902,Fc=1021,Oc=1022,Yt=1023,Bc=1024,zc=1025,Ui=1026,Wi=1027,po=1028,mo=1029,Hc=1030,go=1031,bo=1033,fr=33776,pr=33777,mr=33778,gr=33779,Ta=35840,wa=35841,Aa=35842,Ra=35843,Ca=36196,Pa=37492,La=37496,Da=37808,Ia=37809,ka=37810,Ua=37811,Na=37812,Fa=37813,Oa=37814,Ba=37815,za=37816,Ha=37817,Ga=37818,Va=37819,Wa=37820,ja=37821,br=36492,qa=36494,Xa=36495,Gc=36283,Ka=36284,Ya=36285,$a=36286,Ts=2300,ws=2301,Cr=2302,Xo=2400,Ko=2401,Yo=2402,uu=2500,du=0,Vc=1,Za=2,fu=3200,pu=3201,Wc=0,mu=1,Wn="",gt="srgb",Ut="srgb-linear",Er="linear",et="srgb",mi=7680,$o=519,gu=512,bu=513,_u=514,jc=515,vu=516,xu=517,yu=518,Mu=519,Ja=35044,Zo="300 es",An=2e3,xr=2001;class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jo=1234567;const vs=Math.PI/180,ji=180/Math.PI;function on(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function _o(i,e){return(i%e+e)%e}function Su(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Eu(i,e,t){return i!==e?(t-i)/(e-i):0}function xs(i,e,t){return(1-t)*i+t*e}function Tu(i,e,t,n){return xs(i,e,1-Math.exp(-t*n))}function wu(i,e=1){return e-Math.abs(_o(i,e*2)-e)}function Au(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ru(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Pu(i,e){return i+Math.random()*(e-i)}function Lu(i){return i*(.5-Math.random())}function Du(i){i!==void 0&&(Jo=i);let e=Jo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Iu(i){return i*vs}function ku(i){return i*ji}function Uu(i){return(i&i-1)===0&&i!==0}function Nu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ou(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qc={DEG2RAD:vs,RAD2DEG:ji,generateUUID:on,clamp:Mt,euclideanModulo:_o,mapLinear:Su,inverseLerp:Eu,lerp:xs,damp:Tu,pingpong:wu,smoothstep:Au,smootherstep:Ru,randInt:Cu,randFloat:Pu,randFloatSpread:Lu,seededRandom:Du,degToRad:Iu,radToDeg:ku,isPowerOfTwo:Uu,ceilPowerOfTwo:Nu,floorPowerOfTwo:Fu,setQuaternionFromProperEuler:Ou,normalize:Je,denormalize:sn};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,s,r,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],b=s[0],m=s[3],f=s[6],M=s[1],S=s[4],v=s[7],k=s[2],A=s[5],w=s[8];return r[0]=a*b+o*M+l*k,r[3]=a*m+o*S+l*A,r[6]=a*f+o*v+l*w,r[1]=c*b+h*M+u*k,r[4]=c*m+h*S+u*A,r[7]=c*f+h*v+u*w,r[2]=d*b+p*M+g*k,r[5]=d*m+p*S+g*A,r[8]=d*f+p*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=u*b,e[1]=(s*c-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(h*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Pr.makeScale(e,t)),this}rotate(e){return this.premultiply(Pr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pr=new ke;function Xc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function As(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bu(){const i=As("canvas");return i.style.display="block",i}const Qo={};function gs(i){i in Qo||(Qo[i]=!0,console.warn(i))}function zu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Hu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ze={enabled:!0,workingColorSpace:Ut,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===et&&(i.r=Pn(i.r),i.g=Pn(i.g),i.b=Pn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===et&&(i.r=Ni(i.r),i.g=Ni(i.g),i.b=Ni(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wn?Er:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const el=[.64,.33,.3,.6,.15,.06],tl=[.2126,.7152,.0722],nl=[.3127,.329],il=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ze.define({[Ut]:{primaries:el,whitePoint:nl,transfer:Er,toXYZ:il,fromXYZ:sl,luminanceCoefficients:tl,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:el,whitePoint:nl,transfer:et,toXYZ:il,fromXYZ:sl,luminanceCoefficients:tl,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}});let gi;class Vu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gi===void 0&&(gi=As("canvas")),gi.width=e.width,gi.height=e.height;const n=gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=As("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wu=0;class Kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=on(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lr(s[a].image)):r.push(Lr(s[a]))}else r=Lr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Lr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Vu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ju=0;class bt extends fi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=qn,s=qn,r=Gt,a=wn,o=Yt,l=In,c=bt.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=on(),this.name="",this.source=new Kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gi:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gi:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Dc;bt.DEFAULT_ANISOTROPY=1;class Xe{constructor(e=0,t=0,n=0,s=1){Xe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],b=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(p+1)/2,k=(f+1)/2,A=(h+d)/4,w=(u+b)/4,U=(g+m)/4;return S>v&&S>k?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=w/n):v>k?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=U/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=w/r,s=U/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-b)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qu extends fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends qu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yc extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xu extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $t{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=b;return}if(u!==b||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*b,M=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const k=Math.sqrt(S),A=Math.atan2(k,f*M);m=Math.sin(m*A)/k,o=Math.sin(o*A)/k}const v=o*M;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+b*v,m===1-o){const k=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=k,c*=k,h*=k,u*=k}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dr.copy(this).projectOnVector(e),this.sub(Dr)}reflect(e){return this.sub(Dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new R,rl=new $t;class Vt{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(r,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),Fs.subVectors(this.max,rs),bi.subVectors(e.a,rs),_i.subVectors(e.b,rs),vi.subVectors(e.c,rs),Nn.subVectors(_i,bi),Fn.subVectors(vi,_i),Qn.subVectors(bi,vi);let t=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Qn.z,Qn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Qn.z,0,-Qn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Qn.y,Qn.x,0];return!Ir(t,bi,_i,vi,Fs)||(t=[1,0,0,0,1,0,0,0,1],!Ir(t,bi,_i,vi,Fs))?!1:(Os.crossVectors(Nn,Fn),t=[Os.x,Os.y,Os.z],Ir(t,bi,_i,vi,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new R,new R,new R,new R,new R,new R,new R,new R],Qt=new R,Ns=new Vt,bi=new R,_i=new R,vi=new R,Nn=new R,Fn=new R,Qn=new R,rs=new R,Fs=new R,Os=new R,ei=new R;function Ir(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ei.fromArray(i,r);const o=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ku=new Vt,as=new R,kr=new R;class dn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ku.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(kr)),this.expandByPoint(as.copy(e.center).sub(kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new R,Ur=new R,Bs=new R,On=new R,Nr=new R,zs=new R,Fr=new R;class Zi{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ur.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),On.copy(this.origin).sub(Ur);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Bs),o=On.dot(this.direction),l=-On.dot(Bs),c=On.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const b=1/h;u*=b,d*=b,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ur).addScaledVector(Bs,d),p}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,s,r){Nr.subVectors(t,e),zs.subVectors(n,e),Fr.crossVectors(Nr,zs);let a=this.direction.dot(Fr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,e);const l=o*this.direction.dot(zs.crossVectors(On,zs));if(l<0)return null;const c=o*this.direction.dot(Nr.cross(On));if(c<0||l+c>a)return null;const h=-o*On.dot(Fr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,n,s,r,a,o,l,c,h,u,d,p,g,b,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,p,g,b,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,p,g,b,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/xi.setFromMatrixColumn(e,0).length(),r=1/xi.setFromMatrixColumn(e,1).length(),a=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,b=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,b=c*u;t[0]=d+b*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,b=c*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,b=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+b,t[1]=l*u,t[5]=b*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,b=o*c;t[0]=l*h,t[4]=b-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-b*u}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,b=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+b,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yu,e,$u)}lookAt(e,t,n){const s=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Bn.crossVectors(n,Bt),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Bn.crossVectors(n,Bt)),Bn.normalize(),Hs.crossVectors(Bt,Bn),s[0]=Bn.x,s[4]=Hs.x,s[8]=Bt.x,s[1]=Bn.y,s[5]=Hs.y,s[9]=Bt.y,s[2]=Bn.z,s[6]=Hs.z,s[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],b=n[6],m=n[10],f=n[14],M=n[3],S=n[7],v=n[11],k=n[15],A=s[0],w=s[4],U=s[8],E=s[12],y=s[1],C=s[5],V=s[9],z=s[13],Y=s[2],$=s[6],q=s[10],J=s[14],G=s[3],se=s[7],he=s[11],ye=s[15];return r[0]=a*A+o*y+l*Y+c*G,r[4]=a*w+o*C+l*$+c*se,r[8]=a*U+o*V+l*q+c*he,r[12]=a*E+o*z+l*J+c*ye,r[1]=h*A+u*y+d*Y+p*G,r[5]=h*w+u*C+d*$+p*se,r[9]=h*U+u*V+d*q+p*he,r[13]=h*E+u*z+d*J+p*ye,r[2]=g*A+b*y+m*Y+f*G,r[6]=g*w+b*C+m*$+f*se,r[10]=g*U+b*V+m*q+f*he,r[14]=g*E+b*z+m*J+f*ye,r[3]=M*A+S*y+v*Y+k*G,r[7]=M*w+S*C+v*$+k*se,r[11]=M*U+S*V+v*q+k*he,r[15]=M*E+S*z+v*J+k*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],b=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+b*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],b=e[13],m=e[14],f=e[15],M=u*m*c-b*d*c+b*l*p-o*m*p-u*l*f+o*d*f,S=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,v=h*b*c-g*u*c+g*o*p-a*b*p-h*o*f+a*u*f,k=g*u*l-h*b*l-g*o*d+a*b*d+h*o*m-a*u*m,A=t*M+n*S+s*v+r*k;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=M*w,e[1]=(b*d*r-u*m*r-b*s*p+n*m*p+u*s*f-n*d*f)*w,e[2]=(o*m*r-b*l*r+b*s*c-n*m*c-o*s*f+n*l*f)*w,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*w,e[4]=S*w,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*w,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*w,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*p+t*l*p)*w,e[8]=v*w,e[9]=(g*u*r-h*b*r-g*n*p+t*b*p+h*n*f-t*u*f)*w,e[10]=(a*b*r-g*o*r+g*n*c-t*b*c-a*n*f+t*o*f)*w,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*w,e[12]=k*w,e[13]=(h*b*s-g*u*s+g*n*d-t*b*d-h*n*m+t*u*m)*w,e[14]=(g*o*s-a*b*s-g*n*l+t*b*l+a*n*m-t*o*m)*w,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,b=a*h,m=a*u,f=o*u,M=l*c,S=l*h,v=l*u,k=n.x,A=n.y,w=n.z;return s[0]=(1-(b+f))*k,s[1]=(p+v)*k,s[2]=(g-S)*k,s[3]=0,s[4]=(p-v)*A,s[5]=(1-(d+f))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(g+S)*w,s[9]=(m-M)*w,s[10]=(1-(d+b))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=xi.set(s[0],s[1],s[2]).length();const a=xi.set(s[4],s[5],s[6]).length(),o=xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],en.copy(this);const c=1/r,h=1/a,u=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,t.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=An){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(o===An)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===xr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=An){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,p=(n+s)*h;let g,b;if(o===An)g=(a+r)*u,b=-2*u;else if(o===xr)g=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=b,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xi=new R,en=new Le,Yu=new R(0,0,0),$u=new R(1,1,1),Bn=new R,Hs=new R,Bt=new R,al=new Le,ol=new $t;class ln{constructor(e=0,t=0,n=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ol.setFromEuler(this),this.setFromQuaternion(ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class vo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zu=0;const ll=new R,yi=new $t,xn=new Le,Gs=new R,os=new R,Ju=new R,Qu=new $t,cl=new R(1,0,0),hl=new R(0,1,0),ul=new R(0,0,1),dl={type:"added"},ed={type:"removed"},Mi={type:"childadded",child:null},Or={type:"childremoved",child:null};class ct extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new R,t=new ln,n=new $t,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new ke}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(cl,e)}rotateY(e){return this.rotateOnAxis(hl,e)}rotateZ(e){return this.rotateOnAxis(ul,e)}translateOnAxis(e,t){return ll.copy(e).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cl,e)}translateY(e){return this.translateOnAxis(hl,e)}translateZ(e){return this.translateOnAxis(ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gs.copy(e):Gs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(os,Gs,this.up):xn.lookAt(Gs,os,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(xn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dl),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ed),Or.child=e,this.dispatchEvent(Or),Or.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dl),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,Ju),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Qu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ct.DEFAULT_UP=new R(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new R,yn=new R,Br=new R,Mn=new R,Si=new R,Ei=new R,fl=new R,zr=new R,Hr=new R,Gr=new R,Vr=new Xe,Wr=new Xe,jr=new Xe;class rn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){tn.subVectors(s,t),yn.subVectors(n,t),Br.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(yn),l=tn.dot(Br),c=yn.dot(yn),h=yn.dot(Br),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(o,Mn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Vr.setScalar(0),Wr.setScalar(0),jr.setScalar(0),Vr.fromBufferAttribute(e,t),Wr.fromBufferAttribute(e,n),jr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Vr,r.x),a.addScaledVector(Wr,r.y),a.addScaledVector(jr,r.z),a}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),yn.subVectors(e,t),tn.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),tn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Si.subVectors(s,n),Ei.subVectors(r,n),zr.subVectors(e,n);const l=Si.dot(zr),c=Ei.dot(zr);if(l<=0&&c<=0)return t.copy(n);Hr.subVectors(e,s);const h=Si.dot(Hr),u=Ei.dot(Hr);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Si,a);Gr.subVectors(e,r);const p=Si.dot(Gr),g=Ei.dot(Gr);if(g>=0&&p<=g)return t.copy(r);const b=p*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ei,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return fl.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(fl,o);const f=1/(m+b+d);return a=b*f,o=d*f,t.copy(n).addScaledVector(Si,a).addScaledVector(Ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function qr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ze.workingColorSpace){if(e=_o(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=qr(a,r,e+1/3),this.g=qr(a,r,e),this.b=qr(a,r,e-1/3)}return ze.toWorkingColorSpace(this,s),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const n=$c[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return ze.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Mt(Tt.r*255,0,255))*65536+Math.round(Mt(Tt.g*255,0,255))*256+Math.round(Mt(Tt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.fromWorkingColorSpace(Tt.copy(this),t);const n=Tt.r,s=Tt.g,r=Tt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ze.workingColorSpace){return ze.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=gt){ze.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,s=Tt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Vs);const n=xs(zn.h,Vs.h,t),s=xs(zn.s,Vs.s,t),r=xs(zn.l,Vs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ae;Ae.NAMES=$c;let td=0;class un extends fi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=on(),this.name="",this.blending=ki,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ma,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pa&&(n.blendSrc=this.blendSrc),this.blendDst!==ma&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rn extends un{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new R,Ws=new we;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ja,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ja&&(e.usage=this.usage),e}}class Zc extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jc extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ln extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nd=0;const qt=new Le,Xr=new ct,Ti=new R,zt=new Vt,ls=new Vt,xt=new R;class fn extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xc(e)?Jc:Zc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Xr.lookAt(e),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ln(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];zt.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(zt.min,ls.min),zt.expandByPoint(xt),xt.addVectors(zt.max,ls.max),zt.expandByPoint(xt)):(zt.expandByPoint(ls.min),zt.expandByPoint(ls.max))}zt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xt.fromBufferAttribute(o,c),l&&(Ti.fromBufferAttribute(e,c),xt.add(Ti)),s=Math.max(s,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new R,l[U]=new R;const c=new R,h=new R,u=new R,d=new we,p=new we,g=new we,b=new R,m=new R;function f(U,E,y){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[U].add(b),o[E].add(b),o[y].add(b),l[U].add(m),l[E].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let U=0,E=M.length;U<E;++U){const y=M[U],C=y.start,V=y.count;for(let z=C,Y=C+V;z<Y;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new R,v=new R,k=new R,A=new R;function w(U){k.fromBufferAttribute(s,U),A.copy(k);const E=o[U];S.copy(E),S.sub(k.multiplyScalar(k.dot(E))).normalize(),v.crossVectors(A,E);const C=v.dot(l[U])<0?-1:1;a.setXYZW(U,S.x,S.y,S.z,C)}for(let U=0,E=M.length;U<E;++U){const y=M[U],C=y.start,V=y.count;for(let z=C,Y=C+V;z<Y;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new kt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new Le,ti=new Zi,js=new dn,ml=new R,qs=new R,Xs=new R,Ks=new R,Kr=new R,Ys=new R,gl=new R,$s=new R;class it extends ct{constructor(e=new fn,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Kr.fromBufferAttribute(u,e),a?Ys.addScaledVector(Kr,h):Ys.addScaledVector(Kr.sub(t),h))}t.add(Ys)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(js.containsPoint(ti.origin)===!1&&(ti.intersectSphere(js,ml)===null||ti.origin.distanceToSquared(ml)>(e.far-e.near)**2))&&(pl.copy(r).invert(),ti.copy(e.ray).applyMatrix4(pl),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){const m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,k=S;v<k;v+=3){const A=o.getX(v),w=o.getX(v+1),U=o.getX(v+2);s=Zs(this,f,e,n,c,h,u,A,w,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const M=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);s=Zs(this,a,e,n,c,h,u,M,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){const m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,k=S;v<k;v+=3){const A=v,w=v+1,U=v+2;s=Zs(this,f,e,n,c,h,u,A,w,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const M=m,S=m+1,v=m+2;s=Zs(this,a,e,n,c,h,u,M,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function id(i,e,t,n,s,r,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Dn,o),l===null)return null;$s.copy(o),$s.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo($s);return c<t.near||c>t.far?null:{distance:c,point:$s.clone(),object:i}}function Zs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,qs),i.getVertexPosition(l,Xs),i.getVertexPosition(c,Ks);const h=id(i,e,t,n,qs,Xs,Ks,gl);if(h){const u=new R;rn.getBarycoord(gl,qs,Xs,Ks,u),s&&(h.uv=rn.getInterpolatedAttribute(s,o,l,c,u,new we)),r&&(h.uv1=rn.getInterpolatedAttribute(r,o,l,c,u,new we)),a&&(h.normal=rn.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new R,materialIndex:0};rn.getNormal(qs,Xs,Ks,d.normal),h.face=d,h.barycoord=u}return h}class Ji extends fn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ln(c,3)),this.setAttribute("normal",new Ln(h,3)),this.setAttribute("uv",new Ln(u,2));function g(b,m,f,M,S,v,k,A,w,U,E){const y=v/w,C=k/U,V=v/2,z=k/2,Y=A/2,$=w+1,q=U+1;let J=0,G=0;const se=new R;for(let he=0;he<q;he++){const ye=he*C-z;for(let Fe=0;Fe<$;Fe++){const nt=Fe*y-V;se[b]=nt*M,se[m]=ye*S,se[f]=Y,c.push(se.x,se.y,se.z),se[b]=0,se[m]=0,se[f]=A>0?1:-1,h.push(se.x,se.y,se.z),u.push(Fe/w),u.push(1-he/U),J+=1}}for(let he=0;he<U;he++)for(let ye=0;ye<w;ye++){const Fe=d+ye+$*he,nt=d+ye+$*(he+1),j=d+(ye+1)+$*(he+1),te=d+(ye+1)+$*he;l.push(Fe,nt,te),l.push(nt,j,te),G+=6}o.addGroup(p,G,E),p+=G,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=qi(i[t]);for(const s in n)e[s]=n[s]}return e}function sd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const rd={clone:qi,merge:Ct};var ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends un{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ad,this.fragmentShader=od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class eh extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new R,bl=new we,_l=new we;class Lt extends eh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,bl,_l),t.subVectors(_l,bl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=-90,Ai=1;class ld extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Lt(wi,Ai,e,t);s.layers=this.layers,this.add(s);const r=new Lt(wi,Ai,e,t);r.layers=this.layers,this.add(r);const a=new Lt(wi,Ai,e,t);a.layers=this.layers,this.add(a);const o=new Lt(wi,Ai,e,t);o.layers=this.layers,this.add(o);const l=new Lt(wi,Ai,e,t);l.layers=this.layers,this.add(l);const c=new Lt(wi,Ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class th extends bt{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:zi,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cd extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new th(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ji(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Yn});r.uniforms.tEquirect.value=t;const a=new it(s,r),o=t.minFilter;return t.minFilter===wn&&(t.minFilter=Gt),new ld(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Yr=new R,hd=new R,ud=new ke;class Vn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Yr.subVectors(n,t).cross(hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Yr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ud.getNormalMatrix(e),s=this.coplanarPoint(Yr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new dn,Js=new R;class xo{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],b=s[10],m=s[11],f=s[12],M=s[13],S=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+a,d+h,m+g,v+M).normalize(),n[3].setComponents(l-a,d-h,m-g,v-M).normalize(),n[4].setComponents(l-o,d-u,m-b,v-S).normalize(),t===An)n[5].setComponents(l+o,d+u,m+b,v+S).normalize();else if(t===xr)n[5].setComponents(o,u,b,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Js.x=s.normal.x>0?e.max.x:e.min.x,Js.y=s.normal.y>0?e.max.y:e.min.y,Js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function dd(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],b=u[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const b=u[p];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Ds extends fn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],b=[],m=[];for(let f=0;f<h;f++){const M=f*d-a;for(let S=0;S<c;S++){const v=S*u-r;g.push(v,-M,0),b.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){const S=M+c*f,v=M+c*(f+1),k=M+1+c*(f+1),A=M+1+c*f;p.push(S,v,A),p.push(v,k,A)}this.setIndex(p),this.setAttribute("position",new Ln(g,3)),this.setAttribute("normal",new Ln(b,3)),this.setAttribute("uv",new Ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.widthSegments,e.heightSegments)}}var fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pd=`#ifdef USE_ALPHAHASH
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
#endif`,md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vd=`#ifdef USE_AOMAP
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
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yd=`#ifdef USE_BATCHING
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
#endif`,Md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Td=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ad=`#ifdef USE_BUMPMAP
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nd=`#define PI 3.141592653589793
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
} // validated`,Fd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Od=`vec3 transformedNormal = objectNormal;
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
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ef=`#ifdef USE_GRADIENTMAP
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
}`,tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rf=`uniform bool receiveShadow;
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
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uf=`PhysicalMaterial material;
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
#endif`,df=`struct PhysicalMaterial {
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
}`,ff=`
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
#endif`,pf=`#if defined( RE_IndirectDiffuse )
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
#endif`,mf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sf=`#if defined( USE_POINTS_UV )
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
#endif`,Ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Af=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`#ifdef USE_MORPHTARGETS
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
#endif`,Pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Df=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nf=`#ifdef USE_NORMALMAP
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
#endif`,Ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jf=`float getShadowMask() {
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
}`,Qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
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
#endif`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`#include <common>
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
}`,xp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yp=`#define DISTANCE
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
}`,Mp=`#define DISTANCE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`uniform float scale;
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
}`,wp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#define LAMBERT
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
}`,Pp=`#define LAMBERT
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
}`,Lp=`#define MATCAP
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
}`,Dp=`#define MATCAP
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
}`,Ip=`#define NORMAL
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
}`,kp=`#define NORMAL
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
}`,Up=`#define PHONG
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
}`,Np=`#define PHONG
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
}`,Fp=`#define STANDARD
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
}`,Op=`#define STANDARD
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
}`,Bp=`#define TOON
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
}`,zp=`#define TOON
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
}`,Hp=`uniform float size;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Wp=`uniform vec3 color;
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
}`,jp=`uniform float rotation;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:fd,alphahash_pars_fragment:pd,alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:bd,alphatest_pars_fragment:_d,aomap_fragment:vd,aomap_pars_fragment:xd,batching_pars_vertex:yd,batching_vertex:Md,begin_vertex:Sd,beginnormal_vertex:Ed,bsdfs:Td,iridescence_fragment:wd,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Ld,color_fragment:Dd,color_pars_fragment:Id,color_pars_vertex:kd,color_vertex:Ud,common:Nd,cube_uv_reflection_fragment:Fd,defaultnormal_vertex:Od,displacementmap_pars_vertex:Bd,displacementmap_vertex:zd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Gd,colorspace_fragment:Vd,colorspace_pars_fragment:Wd,envmap_fragment:jd,envmap_common_pars_fragment:qd,envmap_pars_fragment:Xd,envmap_pars_vertex:Kd,envmap_physical_pars_fragment:af,envmap_vertex:Yd,fog_vertex:$d,fog_pars_vertex:Zd,fog_fragment:Jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:ef,lightmap_pars_fragment:tf,lights_lambert_fragment:nf,lights_lambert_pars_fragment:sf,lights_pars_begin:rf,lights_toon_fragment:of,lights_toon_pars_fragment:lf,lights_phong_fragment:cf,lights_phong_pars_fragment:hf,lights_physical_fragment:uf,lights_physical_pars_fragment:df,lights_fragment_begin:ff,lights_fragment_maps:pf,lights_fragment_end:mf,logdepthbuf_fragment:gf,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:_f,logdepthbuf_vertex:vf,map_fragment:xf,map_pars_fragment:yf,map_particle_fragment:Mf,map_particle_pars_fragment:Sf,metalnessmap_fragment:Ef,metalnessmap_pars_fragment:Tf,morphinstance_vertex:wf,morphcolor_vertex:Af,morphnormal_vertex:Rf,morphtarget_pars_vertex:Cf,morphtarget_vertex:Pf,normal_fragment_begin:Lf,normal_fragment_maps:Df,normal_pars_fragment:If,normal_pars_vertex:kf,normal_vertex:Uf,normalmap_pars_fragment:Nf,clearcoat_normal_fragment_begin:Ff,clearcoat_normal_fragment_maps:Of,clearcoat_pars_fragment:Bf,iridescence_pars_fragment:zf,opaque_fragment:Hf,packing:Gf,premultiplied_alpha_fragment:Vf,project_vertex:Wf,dithering_fragment:jf,dithering_pars_fragment:qf,roughnessmap_fragment:Xf,roughnessmap_pars_fragment:Kf,shadowmap_pars_fragment:Yf,shadowmap_pars_vertex:$f,shadowmap_vertex:Zf,shadowmask_pars_fragment:Jf,skinbase_vertex:Qf,skinning_pars_vertex:ep,skinning_vertex:tp,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:sp,tonemapping_fragment:rp,tonemapping_pars_fragment:ap,transmission_fragment:op,transmission_pars_fragment:lp,uv_pars_fragment:cp,uv_pars_vertex:hp,uv_vertex:up,worldpos_vertex:dp,background_vert:fp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:bp,cube_frag:_p,depth_vert:vp,depth_frag:xp,distanceRGBA_vert:yp,distanceRGBA_frag:Mp,equirect_vert:Sp,equirect_frag:Ep,linedashed_vert:Tp,linedashed_frag:wp,meshbasic_vert:Ap,meshbasic_frag:Rp,meshlambert_vert:Cp,meshlambert_frag:Pp,meshmatcap_vert:Lp,meshmatcap_frag:Dp,meshnormal_vert:Ip,meshnormal_frag:kp,meshphong_vert:Up,meshphong_frag:Np,meshphysical_vert:Fp,meshphysical_frag:Op,meshtoon_vert:Bp,meshtoon_frag:zp,points_vert:Hp,points_frag:Gp,shadow_vert:Vp,shadow_frag:Wp,sprite_vert:jp,sprite_frag:qp},ne={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},hn={basic:{uniforms:Ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Ct([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Ct([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Ct([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Ct([ne.points,ne.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Ct([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Ct([ne.common,ne.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Ct([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Ct([ne.sprite,ne.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Ct([ne.common,ne.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Ct([ne.lights,ne.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};hn.physical={uniforms:Ct([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Qs={r:0,b:0,g:0},ii=new ln,Xp=new Le;function Kp(i,e,t,n,s,r,a){const o=new Ae(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?t:e).get(S)),S}function b(M){let S=!1;const v=g(M);v===null?f(o,l):v&&v.isColor&&(f(v,1),S=!0);const k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===Sr)?(h===void 0&&(h=new it(new Ji(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:qi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ii.copy(S.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(ii)),h.material.toneMapped=ze.getTransfer(v.colorSpace)!==et,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new it(new Ds(2,2),new Zn({name:"BackgroundMaterial",uniforms:qi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ze.getTransfer(v.colorSpace)!==et,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,S){M.getRGB(Qs,Qc(i)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:b,addToRenderList:m}}function Yp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(y,C,V,z,Y){let $=!1;const q=u(z,V,C);r!==q&&(r=q,c(r.object)),$=p(y,z,V,Y),$&&g(y,z,V,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,v(y,C,V,z),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,C,V){const z=V.wireframe===!0;let Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let $=Y[C.id];$===void 0&&($={},Y[C.id]=$);let q=$[z];return q===void 0&&(q=d(l()),$[z]=q),q}function d(y){const C=[],V=[],z=[];for(let Y=0;Y<t;Y++)C[Y]=0,V[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,C,V,z){const Y=r.attributes,$=C.attributes;let q=0;const J=V.getAttributes();for(const G in J)if(J[G].location>=0){const he=Y[G];let ye=$[G];if(ye===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),he===void 0||he.attribute!==ye||ye&&he.data!==ye.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function g(y,C,V,z){const Y={},$=C.attributes;let q=0;const J=V.getAttributes();for(const G in J)if(J[G].location>=0){let he=$[G];he===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(he=y.instanceColor));const ye={};ye.attribute=he,he&&he.data&&(ye.data=he.data),Y[G]=ye,q++}r.attributes=Y,r.attributesNum=q,r.index=z}function b(){const y=r.newAttributes;for(let C=0,V=y.length;C<V;C++)y[C]=0}function m(y){f(y,0)}function f(y,C){const V=r.newAttributes,z=r.enabledAttributes,Y=r.attributeDivisors;V[y]=1,z[y]===0&&(i.enableVertexAttribArray(y),z[y]=1),Y[y]!==C&&(i.vertexAttribDivisor(y,C),Y[y]=C)}function M(){const y=r.newAttributes,C=r.enabledAttributes;for(let V=0,z=C.length;V<z;V++)C[V]!==y[V]&&(i.disableVertexAttribArray(V),C[V]=0)}function S(y,C,V,z,Y,$,q){q===!0?i.vertexAttribIPointer(y,C,V,Y,$):i.vertexAttribPointer(y,C,V,z,Y,$)}function v(y,C,V,z){b();const Y=z.attributes,$=V.getAttributes(),q=C.defaultAttributeValues;for(const J in $){const G=$[J];if(G.location>=0){let se=Y[J];if(se===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),se!==void 0){const he=se.normalized,ye=se.itemSize,Fe=e.get(se);if(Fe===void 0)continue;const nt=Fe.buffer,j=Fe.type,te=Fe.bytesPerElement,be=j===i.INT||j===i.UNSIGNED_INT||se.gpuType===ho;if(se.isInterleavedBufferAttribute){const re=se.data,Te=re.stride,Pe=se.offset;if(re.isInstancedInterleavedBuffer){for(let Oe=0;Oe<G.locationSize;Oe++)f(G.location+Oe,re.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Oe=0;Oe<G.locationSize;Oe++)m(G.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Oe=0;Oe<G.locationSize;Oe++)S(G.location+Oe,ye/G.locationSize,j,he,Te*te,(Pe+ye/G.locationSize*Oe)*te,be)}else{if(se.isInstancedBufferAttribute){for(let re=0;re<G.locationSize;re++)f(G.location+re,se.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let re=0;re<G.locationSize;re++)m(G.location+re);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let re=0;re<G.locationSize;re++)S(G.location+re,ye/G.locationSize,j,he,ye*te,ye/G.locationSize*re*te,be)}}else if(q!==void 0){const he=q[J];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(G.location,he);break;case 3:i.vertexAttrib3fv(G.location,he);break;case 4:i.vertexAttrib4fv(G.location,he);break;default:i.vertexAttrib1fv(G.location,he)}}}}M()}function k(){U();for(const y in n){const C=n[y];for(const V in C){const z=C[V];for(const Y in z)h(z[Y].object),delete z[Y];delete C[V]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const V in C){const z=C[V];for(const Y in z)h(z[Y].object),delete z[Y];delete C[V]}delete n[y.id]}function w(y){for(const C in n){const V=n[C];if(V[y.id]===void 0)continue;const z=V[y.id];for(const Y in z)h(z[Y].object),delete z[Y];delete V[y.id]}}function U(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:k,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:m,disableUnusedAttributes:M}}function $p(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b]*d[b];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Yt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const U=w===Ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==In&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==an&&!U)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:k,maxSamples:A}}function Jp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Vn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,S=M*4;let v=f.clippingState||null;l.value=v,v=h(g,d,S,p);for(let k=0;k!==S;++k)v[k]=t[k];f.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const b=u!==null?u.length:0;let m=null;if(b!==0){if(m=l.value,g!==!0||m===null){const f=p+b*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,v=p;S!==b;++S,v+=4)a.copy(u[S]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function Qp(i){let e=new WeakMap;function t(a,o){return o===Sa?a.mapping=zi:o===Ea&&(a.mapping=Hi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sa||o===Ea)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new cd(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class yo extends eh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Di=4,vl=[.125,.215,.35,.446,.526,.582],ci=20,$r=new yo,xl=new Ae;let Zr=null,Jr=0,Qr=0,ea=!1;const oi=(1+Math.sqrt(5))/2,Ri=1/oi,yl=[new R(-oi,Ri,0),new R(oi,Ri,0),new R(-Ri,0,oi),new R(Ri,0,oi),new R(0,oi,-Ri),new R(0,oi,Ri),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Qa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zr,Jr,Qr),this._renderer.xr.enabled=ea,e.scissorTest=!1,er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Ls,format:Yt,colorSpace:Ut,depthBuffer:!1},s=Ml(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=em(r)),this._blurMaterial=tm(r,e,t)}return s}_compileMaterial(e){const t=new it(this._lodPlanes[0],e);this._renderer.compile(t,$r)}_sceneToCubeUV(e,t,n,s){const o=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(xl),h.toneMapping=$n,h.autoClear=!1;const p=new Rn({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new it(new Ji,p);let b=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,b=!0):(p.color.copy(xl),b=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;er(s,M*S,f>2?S:0,S,S),h.setRenderTarget(s),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===zi||e.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;er(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,$r)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yl[(s-r-1)%yl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new it(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ci-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):ci;m>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);const f=[];let M=0;for(let w=0;w<ci;++w){const U=w/b,E=Math.exp(-U*U/2);f.push(E),w===0?M+=E:w<m&&(M+=2*E)}for(let w=0;w<f.length;w++)f[w]=f[w]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const v=this._sizeLods[s],k=3*v*(s>S-Di?s-S+Di:0),A=4*(this._cubeSize-v);er(t,k,A,3*v,2*v),l.setRenderTarget(t),l.render(u,$r)}}function em(i){const e=[],t=[],n=[];let s=i;const r=i-Di+1+vl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Di?l=vl[a-i+Di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,b=3,m=2,f=1,M=new Float32Array(b*g*p),S=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,U=A>2?0:-1,E=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];M.set(E,b*g*A),S.set(d,m*g*A);const y=[A,A,A,A,A,A];v.set(y,f*g*A)}const k=new fn;k.setAttribute("position",new kt(M,b)),k.setAttribute("uv",new kt(S,m)),k.setAttribute("faceIndex",new kt(v,f)),e.push(k),s>Di&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ml(i,e,t){const n=new di(i,e,t);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function tm(i,e,t){const n=new Float32Array(ci),s=new R(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Sl(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function El(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Mo(){return`

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
	`}function nm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sa||l===Ea,h=l===zi||l===Hi;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Qa(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Qa(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function im(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&gs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sm(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const b=d.morphAttributes[g];for(let m=0,f=b.length;m<f;m++)e.remove(b[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const b=p[g];for(let m=0,f=b.length;m<f;m++)e.update(b[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let b=0;if(p!==null){const M=p.array;b=p.version;for(let S=0,v=M.length;S<v;S+=3){const k=M[S+0],A=M[S+1],w=M[S+2];d.push(k,A,A,w,w,k)}}else if(g!==void 0){const M=g.array;b=g.version;for(let S=0,v=M.length/3-1;S<v;S+=3){const k=S+0,A=S+1,w=S+2;d.push(k,A,A,w,w,k)}}else return;const m=new(Xc(d)?Jc:Zc)(d,1);m.version=b;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function rm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],b[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,b,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*b[M];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function am(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function om(i,e,t){const n=new WeakMap,s=new Xe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),b===!0&&(v=2),m===!0&&(v=3);let k=o.attributes.position.count*v,A=1;k>e.maxTextureSize&&(A=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const w=new Float32Array(k*A*4*u),U=new Yc(w,k,A,u);U.type=an,U.needsUpdate=!0;const E=v*4;for(let C=0;C<u;C++){const V=f[C],z=M[C],Y=S[C],$=k*A*4*C;for(let q=0;q<V.count;q++){const J=q*E;g===!0&&(s.fromBufferAttribute(V,q),w[$+J+0]=s.x,w[$+J+1]=s.y,w[$+J+2]=s.z,w[$+J+3]=0),b===!0&&(s.fromBufferAttribute(z,q),w[$+J+4]=s.x,w[$+J+5]=s.y,w[$+J+6]=s.z,w[$+J+7]=0),m===!0&&(s.fromBufferAttribute(Y,q),w[$+J+8]=s.x,w[$+J+9]=s.y,w[$+J+10]=s.z,w[$+J+11]=Y.itemSize===4?s.w:1)}}d={count:u,texture:U,size:new we(k,A)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const b=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",b),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function lm(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class ih extends bt{constructor(e,t,n,s,r,a,o,l,c,h=Ui){if(h!==Ui&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=ui),n===void 0&&h===Wi&&(n=Vi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const sh=new bt,Tl=new ih(1,1),rh=new Yc,ah=new Xu,oh=new th,wl=[],Al=[],Rl=new Float32Array(16),Cl=new Float32Array(9),Pl=new Float32Array(4);function Qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=wl[s];if(r===void 0&&(r=new Float32Array(s),wl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Tr(i,e){let t=Al[e];t===void 0&&(t=new Int32Array(e),Al[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function cm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function fm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Pl.set(n),i.uniformMatrix2fv(this.addr,!1,Pl),vt(t,n)}}function pm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Cl.set(n),i.uniformMatrix3fv(this.addr,!1,Cl),vt(t,n)}}function mm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Rl.set(n),i.uniformMatrix4fv(this.addr,!1,Rl),vt(t,n)}}function gm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function _m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function xm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function Sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function Em(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tl.compareFunction=jc,r=Tl):r=sh,t.setTexture2D(e||r,s)}function Tm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ah,s)}function wm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||oh,s)}function Am(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rh,s)}function Rm(i){switch(i){case 5126:return cm;case 35664:return hm;case 35665:return um;case 35666:return dm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return bm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return xm;case 36294:return ym;case 36295:return Mm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Am}}function Cm(i,e){i.uniform1fv(this.addr,e)}function Pm(i,e){const t=Qi(e,this.size,2);i.uniform2fv(this.addr,t)}function Lm(i,e){const t=Qi(e,this.size,3);i.uniform3fv(this.addr,t)}function Dm(i,e){const t=Qi(e,this.size,4);i.uniform4fv(this.addr,t)}function Im(i,e){const t=Qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function km(i,e){const t=Qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Um(i,e){const t=Qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Nm(i,e){i.uniform1iv(this.addr,e)}function Fm(i,e){i.uniform2iv(this.addr,e)}function Om(i,e){i.uniform3iv(this.addr,e)}function Bm(i,e){i.uniform4iv(this.addr,e)}function zm(i,e){i.uniform1uiv(this.addr,e)}function Hm(i,e){i.uniform2uiv(this.addr,e)}function Gm(i,e){i.uniform3uiv(this.addr,e)}function Vm(i,e){i.uniform4uiv(this.addr,e)}function Wm(i,e,t){const n=this.cache,s=e.length,r=Tr(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||sh,r[a])}function jm(i,e,t){const n=this.cache,s=e.length,r=Tr(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ah,r[a])}function qm(i,e,t){const n=this.cache,s=e.length,r=Tr(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||oh,r[a])}function Xm(i,e,t){const n=this.cache,s=e.length,r=Tr(t,s);_t(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||rh,r[a])}function Km(i){switch(i){case 5126:return Cm;case 35664:return Pm;case 35665:return Lm;case 35666:return Dm;case 35674:return Im;case 35675:return km;case 35676:return Um;case 5124:case 35670:return Nm;case 35667:case 35671:return Fm;case 35668:case 35672:return Om;case 35669:case 35673:return Bm;case 5125:return zm;case 36294:return Hm;case 36295:return Gm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Xm}}class Ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rm(t.type)}}class $m{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Km(t.type)}}class Zm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function Ll(i,e){i.seq.push(e),i.map[e.id]=e}function Jm(i,e,t){const n=i.name,s=n.length;for(ta.lastIndex=0;;){const r=ta.exec(n),a=ta.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ll(t,c===void 0?new Ym(o,i,e):new $m(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Zm(o),Ll(t,u)),t=u}}}class _r{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Jm(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Dl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Qm=37297;let eg=0;function tg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Il=new ke;function ng(i){ze._getMatrix(Il,ze.workingColorSpace,i);const e=`mat3( ${Il.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(i)){case Er:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+tg(i.getShaderSource(e),a)}else return s}function ig(i,e){const t=ng(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sg(i,e){let t;switch(e){case su:t="Linear";break;case ru:t="Reinhard";break;case au:t="Cineon";break;case Lc:t="ACESFilmic";break;case lu:t="AgX";break;case cu:t="Neutral";break;case ou:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tr=new R;function rg(){ze.getLuminanceCoefficients(tr);const i=tr.x.toFixed(4),e=tr.y.toFixed(4),t=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function og(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function bs(i){return i!==""}function Ul(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(i){return i.replace(cg,ug)}const hg=new Map;function ug(i,e){let t=Ne[e];if(t===void 0){const n=hg.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return eo(t)}const dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(i){return i.replace(dg,fg)}function fg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ol(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function pg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function mg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case Hi:e="ENVMAP_TYPE_CUBE";break;case Sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function bg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pc:e="ENVMAP_BLENDING_MULTIPLY";break;case nu:e="ENVMAP_BLENDING_MIX";break;case iu:e="ENVMAP_BLENDING_ADD";break}return e}function _g(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function vg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=pg(t),c=mg(t),h=gg(t),u=bg(t),d=_g(t),p=ag(t),g=og(r),b=s.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bs).join(`
`),f.length>0&&(f+=`
`)):(m=[Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),f=[Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Ne.tonemapping_pars_fragment:"",t.toneMapping!==$n?sg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,ig("linearToOutputTexel",t.outputColorSpace),rg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),a=eo(a),a=Ul(a,t),a=Nl(a,t),o=eo(o),o=Ul(o,t),o=Nl(o,t),a=Fl(a),o=Fl(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=M+m+a,v=M+f+o,k=Dl(s,s.VERTEX_SHADER,S),A=Dl(s,s.FRAGMENT_SHADER,v);s.attachShader(b,k),s.attachShader(b,A),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function w(C){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(b).trim(),z=s.getShaderInfoLog(k).trim(),Y=s.getShaderInfoLog(A).trim();let $=!0,q=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,k,A);else{const J=kl(s,k,"vertex"),G=kl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+J+`
`+G)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||Y==="")&&(q=!1);q&&(C.diagnostics={runnable:$,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(k),s.deleteShader(A),U=new _r(s,b),E=lg(s,b)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(b,Qm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eg++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=k,this.fragmentShader=A,this}let xg=0;class yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mg(e),t.set(e,n)),n}}class Mg{constructor(e){this.id=xg++,this.code=e,this.usedTimes=0}}function Sg(i,e,t,n,s,r,a){const o=new vo,l=new yg,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,C,V,z){const Y=V.fog,$=z.geometry,q=E.isMeshStandardMaterial?V.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),G=J&&J.mapping===Sr?J.image.height:null,se=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const he=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ye=he!==void 0?he.length:0;let Fe=0;$.morphAttributes.position!==void 0&&(Fe=1),$.morphAttributes.normal!==void 0&&(Fe=2),$.morphAttributes.color!==void 0&&(Fe=3);let nt,j,te,be;if(se){const Ze=hn[se];nt=Ze.vertexShader,j=Ze.fragmentShader}else nt=E.vertexShader,j=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),be=l.getFragmentShaderID(E);const re=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Pe=z.isInstancedMesh===!0,Oe=z.isBatchedMesh===!0,ht=!!E.map,We=!!E.matcap,ft=!!J,I=!!E.aoMap,Wt=!!E.lightMap,He=!!E.bumpMap,Ge=!!E.normalMap,Se=!!E.displacementMap,at=!!E.emissiveMap,Me=!!E.metalnessMap,T=!!E.roughnessMap,_=E.anisotropy>0,N=E.clearcoat>0,X=E.dispersion>0,Z=E.iridescence>0,W=E.sheen>0,_e=E.transmission>0,ae=_&&!!E.anisotropyMap,ue=N&&!!E.clearcoatMap,je=N&&!!E.clearcoatNormalMap,Q=N&&!!E.clearcoatRoughnessMap,de=Z&&!!E.iridescenceMap,Ee=Z&&!!E.iridescenceThicknessMap,Re=W&&!!E.sheenColorMap,fe=W&&!!E.sheenRoughnessMap,Ve=!!E.specularMap,Ue=!!E.specularColorMap,st=!!E.specularIntensityMap,P=_e&&!!E.transmissionMap,ie=_e&&!!E.thicknessMap,H=!!E.gradientMap,K=!!E.alphaMap,ce=E.alphaTest>0,oe=!!E.alphaHash,De=!!E.extensions;let dt=$n;E.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(dt=i.toneMapping);const St={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:nt,fragmentShader:j,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:be,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&z._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&z.instanceColor!==null,instancingMorph:Pe&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ut,alphaToCoverage:!!E.alphaToCoverage,map:ht,matcap:We,envMap:ft,envMapMode:ft&&J.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:Wt,bumpMap:He,normalMap:Ge,displacementMap:d&&Se,emissiveMap:at,normalMapObjectSpace:Ge&&E.normalMapType===mu,normalMapTangentSpace:Ge&&E.normalMapType===Wc,metalnessMap:Me,roughnessMap:T,anisotropy:_,anisotropyMap:ae,clearcoat:N,clearcoatMap:ue,clearcoatNormalMap:je,clearcoatRoughnessMap:Q,dispersion:X,iridescence:Z,iridescenceMap:de,iridescenceThicknessMap:Ee,sheen:W,sheenColorMap:Re,sheenRoughnessMap:fe,specularMap:Ve,specularColorMap:Ue,specularIntensityMap:st,transmission:_e,transmissionMap:P,thicknessMap:ie,gradientMap:H,opaque:E.transparent===!1&&E.blending===ki&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:ce,alphaHash:oe,combine:E.combine,mapUv:ht&&b(E.map.channel),aoMapUv:I&&b(E.aoMap.channel),lightMapUv:Wt&&b(E.lightMap.channel),bumpMapUv:He&&b(E.bumpMap.channel),normalMapUv:Ge&&b(E.normalMap.channel),displacementMapUv:Se&&b(E.displacementMap.channel),emissiveMapUv:at&&b(E.emissiveMap.channel),metalnessMapUv:Me&&b(E.metalnessMap.channel),roughnessMapUv:T&&b(E.roughnessMap.channel),anisotropyMapUv:ae&&b(E.anisotropyMap.channel),clearcoatMapUv:ue&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:je&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:fe&&b(E.sheenRoughnessMap.channel),specularMapUv:Ve&&b(E.specularMap.channel),specularColorMapUv:Ue&&b(E.specularColorMap.channel),specularIntensityMapUv:st&&b(E.specularIntensityMap.channel),transmissionMapUv:P&&b(E.transmissionMap.channel),thicknessMapUv:ie&&b(E.thicknessMap.channel),alphaMapUv:K&&b(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ge||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(ht||K),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Te,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:ht&&E.map.isVideoTexture===!0&&ze.getTransfer(E.map.colorSpace)===et,decodeVideoTextureEmissive:at&&E.emissiveMap.isVideoTexture===!0&&ze.getTransfer(E.emissiveMap.colorSpace)===et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===nn,flipSided:E.side===Dt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:De&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&E.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function f(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)y.push(C),y.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(M(y,E),S(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function M(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function S(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){const y=g[E.type];let C;if(y){const V=hn[y];C=rd.clone(V.uniforms)}else C=E.uniforms;return C}function k(E,y){let C;for(let V=0,z=h.length;V<z;V++){const Y=h[V];if(Y.cacheKey===y){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new vg(i,y,E,r),h.push(C)),C}function A(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:k,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:U}}function Eg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Tg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Bl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,p,g,b,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=b,f.group=m),e++,f}function o(u,d,p,g,b,m){const f=a(u,d,p,g,b,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,b,m){const f=a(u,d,p,g,b,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Tg),n.length>1&&n.sort(d||Bl),s.length>1&&s.sort(d||Bl)}function h(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function wg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new zl,i.set(n,[a])):s>=r.length?(a=new zl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ag(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ae};break;case"SpotLight":t={position:new R,direction:new R,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Rg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Cg=0;function Pg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lg(i){const e=new Ag,t=Rg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new Le,a=new Le;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,b=0,m=0,f=0,M=0,S=0,v=0,k=0,A=0,w=0;c.sort(Pg);for(let E=0,y=c.length;E<y;E++){const C=c[E],V=C.color,z=C.intensity,Y=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=V.r*z,u+=V.g*z,d+=V.b*z;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],z);w++}else if(C.isDirectionalLight){const q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,G=t.get(C);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=C.shadow.matrix,M++}n.directional[p]=q,p++}else if(C.isSpotLight){const q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(V).multiplyScalar(z),q.distance=Y,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[b]=q;const J=C.shadow;if(C.map&&(n.spotLightMap[k]=C.map,k++,J.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[b]=J.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[b]=G,n.spotShadowMap[b]=$,v++}b++}else if(C.isRectAreaLight){const q=e.get(C);q.color.copy(V).multiplyScalar(z),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=q,m++}else if(C.isPointLight){const q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const J=C.shadow,G=t.get(C);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=q,g++}else if(C.isHemisphereLight){const q=e.get(C);q.skyColor.copy(C.color).multiplyScalar(z),q.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[f]=q,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==b||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==M||U.numPointShadows!==S||U.numSpotShadows!==v||U.numSpotMaps!==k||U.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+k-A,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,U.directionalLength=p,U.pointLength=g,U.spotLength=b,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=M,U.numPointShadows=S,U.numSpotShadows=v,U.numSpotMaps=k,U.numLightProbes=w,n.version=Cg++)}function l(c,h){let u=0,d=0,p=0,g=0,b=0;const m=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const S=c[f];if(S.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(S.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const v=n.hemi[b];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:n}}function Hl(i){const e=new Lg(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Dg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Hl(i),e.set(s,[o])):r>=a.length?(o=new Hl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Ig extends un{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kg extends un{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
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
}`;function Fg(i,e,t){let n=new xo;const s=new we,r=new we,a=new Xe,o=new Ig({depthPacking:pu}),l=new kg,c={},h=t.maxTextureSize,u={[Dn]:Dt,[Dt]:Dn,[nn]:nn},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Ug,fragmentShader:Ng}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new fn;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new it(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let f=this.type;this.render=function(A,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Yn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=f!==En&&this.type===En,Y=f===En&&this.type!==En;for(let $=0,q=A.length;$<q;$++){const J=A[$],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const se=G.getFrameExtents();if(s.multiply(se),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,G.mapSize.y=r.y)),G.map===null||z===!0||Y===!0){const ye=this.type!==En?{minFilter:It,magFilter:It}:{};G.map!==null&&G.map.dispose(),G.map=new di(s.x,s.y,ye),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const he=G.getViewportCount();for(let ye=0;ye<he;ye++){const Fe=G.getViewport(ye);a.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),V.viewport(a),G.updateMatrices(J,ye),n=G.getFrustum(),v(w,U,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===En&&M(G,U),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,C)};function M(A,w){const U=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new di(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,U,d,b,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,U,p,b,null)}function S(A,w,U,E){let y=null;const C=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=U.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=y.uuid,z=w.uuid;let Y=c[V];Y===void 0&&(Y={},c[V]=Y);let $=Y[z];$===void 0&&($=y.clone(),Y[z]=$,w.addEventListener("dispose",k)),y=$}if(y.visible=w.visible,y.wireframe=w.wireframe,E===En?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=i.properties.get(y);V.light=U}return y}function v(A,w,U,E,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===En)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const z=e.update(A),Y=A.material;if(Array.isArray(Y)){const $=z.groups;for(let q=0,J=$.length;q<J;q++){const G=$[q],se=Y[G.materialIndex];if(se&&se.visible){const he=S(A,se,E,y);A.onBeforeShadow(i,A,w,U,z,he,G),i.renderBufferDirect(U,null,z,he,A,G),A.onAfterShadow(i,A,w,U,z,he,G)}}}else if(Y.visible){const $=S(A,Y,E,y);A.onBeforeShadow(i,A,w,U,z,$,null),i.renderBufferDirect(U,null,z,$,A,null),A.onAfterShadow(i,A,w,U,z,$,null)}}const V=A.children;for(let z=0,Y=V.length;z<Y;z++)v(V[z],w,U,E,y)}function k(A){A.target.removeEventListener("dispose",k);for(const U in c){const E=c[U],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const Og={[ga]:ba,[_a]:ya,[va]:Ma,[Bi]:xa,[ba]:ga,[ya]:_a,[Ma]:va,[xa]:Bi};function Bg(i,e){function t(){let P=!1;const ie=new Xe;let H=null;const K=new Xe(0,0,0,0);return{setMask:function(ce){H!==ce&&!P&&(i.colorMask(ce,ce,ce,ce),H=ce)},setLocked:function(ce){P=ce},setClear:function(ce,oe,De,dt,St){St===!0&&(ce*=dt,oe*=dt,De*=dt),ie.set(ce,oe,De,dt),K.equals(ie)===!1&&(i.clearColor(ce,oe,De,dt),K.copy(ie))},reset:function(){P=!1,H=null,K.set(-1,0,0,0)}}}function n(){let P=!1,ie=!1,H=null,K=null,ce=null;return{setReversed:function(oe){if(ie!==oe){const De=e.get("EXT_clip_control");ie?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const dt=ce;ce=null,this.setClear(dt)}ie=oe},getReversed:function(){return ie},setTest:function(oe){oe?re(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(oe){H!==oe&&!P&&(i.depthMask(oe),H=oe)},setFunc:function(oe){if(ie&&(oe=Og[oe]),K!==oe){switch(oe){case ga:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case _a:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case xa:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=oe}},setLocked:function(oe){P=oe},setClear:function(oe){ce!==oe&&(ie&&(oe=1-oe),i.clearDepth(oe),ce=oe)},reset:function(){P=!1,H=null,K=null,ce=null,ie=!1}}}function s(){let P=!1,ie=null,H=null,K=null,ce=null,oe=null,De=null,dt=null,St=null;return{setTest:function(Ze){P||(Ze?re(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!P&&(i.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,Zt,gn){(H!==Ze||K!==Zt||ce!==gn)&&(i.stencilFunc(Ze,Zt,gn),H=Ze,K=Zt,ce=gn)},setOp:function(Ze,Zt,gn){(oe!==Ze||De!==Zt||dt!==gn)&&(i.stencilOp(Ze,Zt,gn),oe=Ze,De=Zt,dt=gn)},setLocked:function(Ze){P=Ze},setClear:function(Ze){St!==Ze&&(i.clearStencil(Ze),St=Ze)},reset:function(){P=!1,ie=null,H=null,K=null,ce=null,oe=null,De=null,dt=null,St=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,b=!1,m=null,f=null,M=null,S=null,v=null,k=null,A=null,w=new Ae(0,0,0),U=0,E=!1,y=null,C=null,V=null,z=null,Y=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=J>=2);let se=null,he={};const ye=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),nt=new Xe().fromArray(ye),j=new Xe().fromArray(Fe);function te(P,ie,H,K){const ce=new Uint8Array(4),oe=i.createTexture();i.bindTexture(P,oe),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<H;De++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(ie+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return oe}const be={};be[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(Bi),He(!1),Ge(Go),re(i.CULL_FACE),I(Yn);function re(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Te(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Pe(P,ie){return u[P]!==ie?(i.bindFramebuffer(P,ie),u[P]=ie,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ie),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Oe(P,ie){let H=p,K=!1;if(P){H=d.get(ie),H===void 0&&(H=[],d.set(ie,H));const ce=P.textures;if(H.length!==ce.length||H[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,De=ce.length;oe<De;oe++)H[oe]=i.COLOR_ATTACHMENT0+oe;H.length=ce.length,K=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,K=!0);K&&i.drawBuffers(H)}function ht(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const We={[li]:i.FUNC_ADD,[Bh]:i.FUNC_SUBTRACT,[zh]:i.FUNC_REVERSE_SUBTRACT};We[Hh]=i.MIN,We[Gh]=i.MAX;const ft={[Vh]:i.ZERO,[Wh]:i.ONE,[jh]:i.SRC_COLOR,[pa]:i.SRC_ALPHA,[Zh]:i.SRC_ALPHA_SATURATE,[Yh]:i.DST_COLOR,[Xh]:i.DST_ALPHA,[qh]:i.ONE_MINUS_SRC_COLOR,[ma]:i.ONE_MINUS_SRC_ALPHA,[$h]:i.ONE_MINUS_DST_COLOR,[Kh]:i.ONE_MINUS_DST_ALPHA,[Jh]:i.CONSTANT_COLOR,[Qh]:i.ONE_MINUS_CONSTANT_COLOR,[eu]:i.CONSTANT_ALPHA,[tu]:i.ONE_MINUS_CONSTANT_ALPHA};function I(P,ie,H,K,ce,oe,De,dt,St,Ze){if(P===Yn){b===!0&&(Te(i.BLEND),b=!1);return}if(b===!1&&(re(i.BLEND),b=!0),P!==Oh){if(P!==m||Ze!==E){if((f!==li||v!==li)&&(i.blendEquation(i.FUNC_ADD),f=li,v=li),Ze)switch(P){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFunc(i.ONE,i.ONE);break;case Wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,S=null,k=null,A=null,w.set(0,0,0),U=0,m=P,E=Ze}return}ce=ce||ie,oe=oe||H,De=De||K,(ie!==f||ce!==v)&&(i.blendEquationSeparate(We[ie],We[ce]),f=ie,v=ce),(H!==M||K!==S||oe!==k||De!==A)&&(i.blendFuncSeparate(ft[H],ft[K],ft[oe],ft[De]),M=H,S=K,k=oe,A=De),(dt.equals(w)===!1||St!==U)&&(i.blendColor(dt.r,dt.g,dt.b,St),w.copy(dt),U=St),m=P,E=!1}function Wt(P,ie){P.side===nn?Te(i.CULL_FACE):re(i.CULL_FACE);let H=P.side===Dt;ie&&(H=!H),He(H),P.blending===ki&&P.transparent===!1?I(Yn):I(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const K=P.stencilWrite;o.setTest(K),K&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),at(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(P){y!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),y=P)}function Ge(P){P!==Uh?(re(i.CULL_FACE),P!==C&&(P===Go?i.cullFace(i.BACK):P===Nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),C=P}function Se(P){P!==V&&(q&&i.lineWidth(P),V=P)}function at(P,ie,H){P?(re(i.POLYGON_OFFSET_FILL),(z!==ie||Y!==H)&&(i.polygonOffset(ie,H),z=ie,Y=H)):Te(i.POLYGON_OFFSET_FILL)}function Me(P){P?re(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function T(P){P===void 0&&(P=i.TEXTURE0+$-1),se!==P&&(i.activeTexture(P),se=P)}function _(P,ie,H){H===void 0&&(se===null?H=i.TEXTURE0+$-1:H=se);let K=he[H];K===void 0&&(K={type:void 0,texture:void 0},he[H]=K),(K.type!==P||K.texture!==ie)&&(se!==H&&(i.activeTexture(H),se=H),i.bindTexture(P,ie||be[P]),K.type=P,K.texture=ie)}function N(){const P=he[se];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(P){nt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),nt.copy(P))}function fe(P){j.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),j.copy(P))}function Ve(P,ie){let H=c.get(ie);H===void 0&&(H=new WeakMap,c.set(ie,H));let K=H.get(P);K===void 0&&(K=i.getUniformBlockIndex(ie,P.name),H.set(P,K))}function Ue(P,ie){const K=c.get(ie).get(P);l.get(ie)!==K&&(i.uniformBlockBinding(ie,K,P.__bindingPointIndex),l.set(ie,K))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},se=null,he={},u={},d=new WeakMap,p=[],g=null,b=!1,m=null,f=null,M=null,S=null,v=null,k=null,A=null,w=new Ae(0,0,0),U=0,E=!1,y=null,C=null,V=null,z=null,Y=null,nt.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:Te,bindFramebuffer:Pe,drawBuffers:Oe,useProgram:ht,setBlending:I,setMaterial:Wt,setFlipSided:He,setCullFace:Ge,setLineWidth:Se,setPolygonOffset:at,setScissorTest:Me,activeTexture:T,bindTexture:_,unbindTexture:N,compressedTexImage2D:X,compressedTexImage3D:Z,texImage2D:de,texImage3D:Ee,updateUBOMapping:Ve,uniformBlockBinding:Ue,texStorage2D:je,texStorage3D:Q,texSubImage2D:W,texSubImage3D:_e,compressedTexSubImage2D:ae,compressedTexSubImage3D:ue,scissor:Re,viewport:fe,reset:st}}function Gl(i,e,t,n){const s=zg(n);switch(t){case Fc:return i*e;case Bc:return i*e;case zc:return i*e*2;case po:return i*e/s.components*s.byteLength;case mo:return i*e/s.components*s.byteLength;case Hc:return i*e*2/s.components*s.byteLength;case go:return i*e*2/s.components*s.byteLength;case Oc:return i*e*3/s.components*s.byteLength;case Yt:return i*e*4/s.components*s.byteLength;case bo:return i*e*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wa:case Ra:return Math.max(i,16)*Math.max(e,8)/4;case Ta:case Aa:return Math.max(i,8)*Math.max(e,8)/2;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case br:case qa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Gc:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ya:case $a:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zg(i){switch(i){case In:case kc:return{byteLength:1,components:1};case Es:case Uc:case Ls:return{byteLength:2,components:1};case uo:case fo:return{byteLength:2,components:4};case ui:case ho:case an:return{byteLength:4,components:1};case Nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Hg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):As("canvas")}function b(T,_,N){let X=1;const Z=Me(T);if((Z.width>N||Z.height>N)&&(X=N/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){const W=Math.floor(X*Z.width),_e=Math.floor(X*Z.height);u===void 0&&(u=g(W,_e));const ae=_?g(W,_e):u;return ae.width=W,ae.height=_e,ae.getContext("2d").drawImage(T,0,0,W,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+_e+")."),ae}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,_,N,X,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=_;if(_===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),_===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),_===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),_===i.RGBA){const _e=Z?Er:ze.getTransfer(X);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=_e===et?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function v(T,_){let N;return T?_===null||_===ui||_===Vi?N=i.DEPTH24_STENCIL8:_===an?N=i.DEPTH32F_STENCIL8:_===Es&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ui||_===Vi?N=i.DEPTH_COMPONENT24:_===an?N=i.DEPTH_COMPONENT32F:_===Es&&(N=i.DEPTH_COMPONENT16),N}function k(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==It&&T.minFilter!==Gt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){const _=T.target;_.removeEventListener("dispose",A),U(_),_.isVideoTexture&&h.delete(_)}function w(T){const _=T.target;_.removeEventListener("dispose",w),y(_)}function U(T){const _=n.get(T);if(_.__webglInit===void 0)return;const N=T.source,X=d.get(N);if(X){const Z=X[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(T),Object.keys(X).length===0&&d.delete(N)}n.remove(T)}function E(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const N=T.source,X=d.get(N);delete X[_.__cacheKey],a.memory.textures--}function y(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let Z=0;Z<_.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=T.textures;for(let X=0,Z=N.length;X<Z;X++){const W=n.get(N[X]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(N[X])}n.remove(T)}let C=0;function V(){C=0}function z(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function Y(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function $(T,_){const N=n.get(T);if(T.isVideoTexture&&Se(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(N,T,_);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function q(T,_){const N=n.get(T);if(T.version>0&&N.__version!==T.version){j(N,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function J(T,_){const N=n.get(T);if(T.version>0&&N.__version!==T.version){j(N,T,_);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function G(T,_){const N=n.get(T);if(T.version>0&&N.__version!==T.version){te(N,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const se={[Gi]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[vr]:i.MIRRORED_REPEAT},he={[It]:i.NEAREST,[Ic]:i.NEAREST_MIPMAP_NEAREST,[ms]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[dr]:i.LINEAR_MIPMAP_NEAREST,[wn]:i.LINEAR_MIPMAP_LINEAR},ye={[gu]:i.NEVER,[Mu]:i.ALWAYS,[bu]:i.LESS,[jc]:i.LEQUAL,[_u]:i.EQUAL,[yu]:i.GEQUAL,[vu]:i.GREATER,[xu]:i.NOTEQUAL};function Fe(T,_){if(_.type===an&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Gt||_.magFilter===dr||_.magFilter===ms||_.magFilter===wn||_.minFilter===Gt||_.minFilter===dr||_.minFilter===ms||_.minFilter===wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,se[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,se[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,se[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,he[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ye[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===It||_.minFilter!==ms&&_.minFilter!==wn||_.type===an&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function nt(T,_){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));const X=_.source;let Z=d.get(X);Z===void 0&&(Z={},d.set(X,Z));const W=Y(_);if(W!==T.__cacheKey){Z[W]===void 0&&(Z[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[W].usedTimes++;const _e=Z[T.__cacheKey];_e!==void 0&&(Z[T.__cacheKey].usedTimes--,_e.usedTimes===0&&E(_)),T.__cacheKey=W,T.__webglTexture=Z[W].texture}return N}function j(T,_,N){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const Z=nt(T,_),W=_.source;t.bindTexture(X,T.__webglTexture,i.TEXTURE0+N);const _e=n.get(W);if(W.version!==_e.__version||Z===!0){t.activeTexture(i.TEXTURE0+N);const ae=ze.getPrimaries(ze.workingColorSpace),ue=_.colorSpace===Wn?null:ze.getPrimaries(_.colorSpace),je=_.colorSpace===Wn||ae===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let Q=b(_.image,!1,s.maxTextureSize);Q=at(_,Q);const de=r.convert(_.format,_.colorSpace),Ee=r.convert(_.type);let Re=S(_.internalFormat,de,Ee,_.colorSpace,_.isVideoTexture);Fe(X,_);let fe;const Ve=_.mipmaps,Ue=_.isVideoTexture!==!0,st=_e.__version===void 0||Z===!0,P=W.dataReady,ie=k(_,Q);if(_.isDepthTexture)Re=v(_.format===Wi,_.type),st&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,Re,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Re,Q.width,Q.height,0,de,Ee,null));else if(_.isDataTexture)if(Ve.length>0){Ue&&st&&t.texStorage2D(i.TEXTURE_2D,ie,Re,Ve[0].width,Ve[0].height);for(let H=0,K=Ve.length;H<K;H++)fe=Ve[H],Ue?P&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,fe.width,fe.height,de,Ee,fe.data):t.texImage2D(i.TEXTURE_2D,H,Re,fe.width,fe.height,0,de,Ee,fe.data);_.generateMipmaps=!1}else Ue?(st&&t.texStorage2D(i.TEXTURE_2D,ie,Re,Q.width,Q.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,de,Ee,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Re,Q.width,Q.height,0,de,Ee,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ue&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Re,Ve[0].width,Ve[0].height,Q.depth);for(let H=0,K=Ve.length;H<K;H++)if(fe=Ve[H],_.format!==Yt)if(de!==null)if(Ue){if(P)if(_.layerUpdates.size>0){const ce=Gl(fe.width,fe.height,_.format,_.type);for(const oe of _.layerUpdates){const De=fe.data.subarray(oe*ce/fe.data.BYTES_PER_ELEMENT,(oe+1)*ce/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,oe,fe.width,fe.height,1,de,De)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,Q.depth,de,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Re,fe.width,fe.height,Q.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,Q.depth,de,Ee,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,H,Re,fe.width,fe.height,Q.depth,0,de,Ee,fe.data)}else{Ue&&st&&t.texStorage2D(i.TEXTURE_2D,ie,Re,Ve[0].width,Ve[0].height);for(let H=0,K=Ve.length;H<K;H++)fe=Ve[H],_.format!==Yt?de!==null?Ue?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,H,Re,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?P&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,fe.width,fe.height,de,Ee,fe.data):t.texImage2D(i.TEXTURE_2D,H,Re,fe.width,fe.height,0,de,Ee,fe.data)}else if(_.isDataArrayTexture)if(Ue){if(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Re,Q.width,Q.height,Q.depth),P)if(_.layerUpdates.size>0){const H=Gl(Q.width,Q.height,_.format,_.type);for(const K of _.layerUpdates){const ce=Q.data.subarray(K*H/Q.data.BYTES_PER_ELEMENT,(K+1)*H/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,de,Ee,ce)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,Ee,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,Q.width,Q.height,Q.depth,0,de,Ee,Q.data);else if(_.isData3DTexture)Ue?(st&&t.texStorage3D(i.TEXTURE_3D,ie,Re,Q.width,Q.height,Q.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,Ee,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Re,Q.width,Q.height,Q.depth,0,de,Ee,Q.data);else if(_.isFramebufferTexture){if(st)if(Ue)t.texStorage2D(i.TEXTURE_2D,ie,Re,Q.width,Q.height);else{let H=Q.width,K=Q.height;for(let ce=0;ce<ie;ce++)t.texImage2D(i.TEXTURE_2D,ce,Re,H,K,0,de,Ee,null),H>>=1,K>>=1}}else if(Ve.length>0){if(Ue&&st){const H=Me(Ve[0]);t.texStorage2D(i.TEXTURE_2D,ie,Re,H.width,H.height)}for(let H=0,K=Ve.length;H<K;H++)fe=Ve[H],Ue?P&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,de,Ee,fe):t.texImage2D(i.TEXTURE_2D,H,Re,de,Ee,fe);_.generateMipmaps=!1}else if(Ue){if(st){const H=Me(Q);t.texStorage2D(i.TEXTURE_2D,ie,Re,H.width,H.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Ee,Q)}else t.texImage2D(i.TEXTURE_2D,0,Re,de,Ee,Q);m(_)&&f(X),_e.__version=W.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function te(T,_,N){if(_.image.length!==6)return;const X=nt(T,_),Z=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);const W=n.get(Z);if(Z.version!==W.__version||X===!0){t.activeTexture(i.TEXTURE0+N);const _e=ze.getPrimaries(ze.workingColorSpace),ae=_.colorSpace===Wn?null:ze.getPrimaries(_.colorSpace),ue=_.colorSpace===Wn||_e===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const je=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!je&&!Q?de[K]=b(_.image[K],!0,s.maxCubemapSize):de[K]=Q?_.image[K].image:_.image[K],de[K]=at(_,de[K]);const Ee=de[0],Re=r.convert(_.format,_.colorSpace),fe=r.convert(_.type),Ve=S(_.internalFormat,Re,fe,_.colorSpace),Ue=_.isVideoTexture!==!0,st=W.__version===void 0||X===!0,P=Z.dataReady;let ie=k(_,Ee);Fe(i.TEXTURE_CUBE_MAP,_);let H;if(je){Ue&&st&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,Ve,Ee.width,Ee.height);for(let K=0;K<6;K++){H=de[K].mipmaps;for(let ce=0;ce<H.length;ce++){const oe=H[ce];_.format!==Yt?Re!==null?Ue?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,oe.width,oe.height,Re,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,Ve,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,oe.width,oe.height,Re,fe,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,Ve,oe.width,oe.height,0,Re,fe,oe.data)}}}else{if(H=_.mipmaps,Ue&&st){H.length>0&&ie++;const K=Me(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,Ve,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Ue?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,Re,fe,de[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,de[K].width,de[K].height,0,Re,fe,de[K].data);for(let ce=0;ce<H.length;ce++){const De=H[ce].image[K].image;Ue?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,De.width,De.height,Re,fe,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,Ve,De.width,De.height,0,Re,fe,De.data)}}else{Ue?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,fe,de[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,Re,fe,de[K]);for(let ce=0;ce<H.length;ce++){const oe=H[ce];Ue?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Re,fe,oe.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,Ve,Re,fe,oe.image[K])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),W.__version=Z.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function be(T,_,N,X,Z,W){const _e=r.convert(N.format,N.colorSpace),ae=r.convert(N.type),ue=S(N.internalFormat,_e,ae,N.colorSpace),je=n.get(_),Q=n.get(N);if(Q.__renderTarget=_,!je.__hasExternalTextures){const de=Math.max(1,_.width>>W),Ee=Math.max(1,_.height>>W);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,W,ue,de,Ee,_.depth,0,_e,ae,null):t.texImage2D(Z,W,ue,de,Ee,0,_e,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ge(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,Q.__webglTexture,0,He(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,Q.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(T,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const X=_.depthTexture,Z=X&&X.isDepthTexture?X.type:null,W=v(_.stencilBuffer,Z),_e=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=He(_);Ge(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,W,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,W,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,W,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,T)}else{const X=_.textures;for(let Z=0;Z<X.length;Z++){const W=X[Z],_e=r.convert(W.format,W.colorSpace),ae=r.convert(W.type),ue=S(W.internalFormat,_e,ae,W.colorSpace),je=He(_);N&&Ge(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,ue,_.width,_.height):Ge(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,ue,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ue,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(_.depthTexture);X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const Z=X.__webglTexture,W=He(_);if(_.depthTexture.format===Ui)Ge(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Wi)Ge(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Pe(T){const _=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=X}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Te(_.__webglFramebuffer,T)}else if(N){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),re(_.__webglDepthbuffer[X],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,W)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),re(_.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(T,_,N){const X=n.get(T);_!==void 0&&be(X.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Pe(T)}function ht(T){const _=T.texture,N=n.get(T),X=n.get(_);T.addEventListener("dispose",w);const Z=T.textures,W=T.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,a.memory.textures++),W){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let ue=0;ue<_.mipmaps.length;ue++)N.__webglFramebuffer[ae][ue]=i.createFramebuffer()}else N.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)N.__webglFramebuffer[ae]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(_e)for(let ae=0,ue=Z.length;ae<ue;ae++){const je=n.get(Z[ae]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ge(T)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const ue=Z[ae];N.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ae]);const je=r.convert(ue.format,ue.colorSpace),Q=r.convert(ue.type),de=S(ue.internalFormat,je,Q,ue.colorSpace,T.isXRRenderTarget===!0),Ee=He(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,de,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,N.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),re(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)be(N.__webglFramebuffer[ae][ue],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else be(N.__webglFramebuffer[ae],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ae=0,ue=Z.length;ae<ue;ae++){const je=Z[ae],Q=n.get(je);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Fe(i.TEXTURE_2D,je),be(N.__webglFramebuffer,T,je,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),m(je)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,X.__webglTexture),Fe(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)be(N.__webglFramebuffer[ue],T,_,i.COLOR_ATTACHMENT0,ae,ue);else be(N.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,ae,0);m(_)&&f(ae),t.unbindTexture()}T.depthBuffer&&Pe(T)}function We(T){const _=T.textures;for(let N=0,X=_.length;N<X;N++){const Z=_[N];if(m(Z)){const W=M(T),_e=n.get(Z).__webglTexture;t.bindTexture(W,_e),f(W),t.unbindTexture()}}}const ft=[],I=[];function Wt(T){if(T.samples>0){if(Ge(T)===!1){const _=T.textures,N=T.width,X=T.height;let Z=i.COLOR_BUFFER_BIT;const W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(T),ae=_.length>1;if(ae)for(let ue=0;ue<_.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ue]);const je=n.get(_[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,N,X,0,0,N,X,Z,i.NEAREST),l===!0&&(ft.length=0,I.length=0,ft.push(i.COLOR_ATTACHMENT0+ue),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ft.push(W),I.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let ue=0;ue<_.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ue]);const je=n.get(_[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function He(T){return Math.min(s.maxSamples,T.samples)}function Ge(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Se(T){const _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function at(T,_){const N=T.colorSpace,X=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Ut&&N!==Wn&&(ze.getTransfer(N)===et?(X!==Yt||Z!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function Me(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=Oe,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ge}function Gg(i,e){function t(n,s=Wn){let r;const a=ze.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return i.BYTE;if(n===Uc)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===Ls)return i.HALF_FLOAT;if(n===Fc)return i.ALPHA;if(n===Oc)return i.RGB;if(n===Yt)return i.RGBA;if(n===Bc)return i.LUMINANCE;if(n===zc)return i.LUMINANCE_ALPHA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===Wi)return i.DEPTH_STENCIL;if(n===po)return i.RED;if(n===mo)return i.RED_INTEGER;if(n===Hc)return i.RG;if(n===go)return i.RG_INTEGER;if(n===bo)return i.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ta||n===wa||n===Aa||n===Ra)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Pa||n===La)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ca||n===Pa)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===La)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Da||n===Ia||n===ka||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===Ha||n===Ga||n===Va||n===Wa||n===ja)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Da)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ga)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===br||n===qa||n===Xa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===br)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gc||n===Ka||n===Ya||n===$a)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Vg extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cn extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wg={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),f=this._getHandJoint(c,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
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

}`;class Xg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zn({vertexShader:jg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new Ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kg extends fi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const b=new Xg,m=t.getContextAttributes();let f=null,M=null;const S=[],v=[],k=new we;let A=null;const w=new Lt;w.viewport=new Xe;const U=new Lt;U.viewport=new Xe;const E=[w,U],y=new Vg;let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=S[j];return te===void 0&&(te=new na,S[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=S[j];return te===void 0&&(te=new na,S[j]=te),te.getGripSpace()},this.getHand=function(j){let te=S[j];return te===void 0&&(te=new na,S[j]=te),te.getHandSpace()};function z(j){const te=v.indexOf(j.inputSource);if(te===-1)return;const be=S[te];be!==void 0&&(be.update(j.inputSource,j.frame,c||a),be.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",$);for(let j=0;j<S.length;j++){const te=v[j];te!==null&&(v[j]=null,S[j].disconnect(te))}C=null,V=null,b.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(k),s.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new di(p.framebufferWidth,p.framebufferHeight,{format:Yt,type:In,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,be=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Wi:Ui,be=m.stencil?Vi:ui);const Te={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Te),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new di(d.textureWidth,d.textureHeight,{format:Yt,type:In,depthTexture:new ih(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function $(j){for(let te=0;te<j.removed.length;te++){const be=j.removed[te],re=v.indexOf(be);re>=0&&(v[re]=null,S[re].disconnect(be))}for(let te=0;te<j.added.length;te++){const be=j.added[te];let re=v.indexOf(be);if(re===-1){for(let Pe=0;Pe<S.length;Pe++)if(Pe>=v.length){v.push(be),re=Pe;break}else if(v[Pe]===null){v[Pe]=be,re=Pe;break}if(re===-1)break}const Te=S[re];Te&&Te.connect(be)}}const q=new R,J=new R;function G(j,te,be){q.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(be.matrixWorld);const re=q.distanceTo(J),Te=te.projectionMatrix.elements,Pe=be.projectionMatrix.elements,Oe=Te[14]/(Te[10]-1),ht=Te[14]/(Te[10]+1),We=(Te[9]+1)/Te[5],ft=(Te[9]-1)/Te[5],I=(Te[8]-1)/Te[0],Wt=(Pe[8]+1)/Pe[0],He=Oe*I,Ge=Oe*Wt,Se=re/(-I+Wt),at=Se*-I;if(te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(at),j.translateZ(Se),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Te[10]===-1)j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Me=Oe+Se,T=ht+Se,_=He-at,N=Ge+(re-at),X=We*ht/T*Me,Z=ft*ht/T*Me;j.projectionMatrix.makePerspective(_,N,X,Z,Me,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function se(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let te=j.near,be=j.far;b.texture!==null&&(b.depthNear>0&&(te=b.depthNear),b.depthFar>0&&(be=b.depthFar)),y.near=U.near=w.near=te,y.far=U.far=w.far=be,(C!==y.near||V!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,V=y.far),w.layers.mask=j.layers.mask|2,U.layers.mask=j.layers.mask|4,y.layers.mask=w.layers.mask|U.layers.mask;const re=j.parent,Te=y.cameras;se(y,re);for(let Pe=0;Pe<Te.length;Pe++)se(Te[Pe],re);Te.length===2?G(y,w,U):y.projectionMatrix.copy(w.projectionMatrix),he(j,y,re)};function he(j,te,be){be===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(be.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ji*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(y)};let ye=null;function Fe(j,te){if(h=te.getViewerPose(c||a),g=te,h!==null){const be=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let re=!1;be.length!==y.cameras.length&&(y.cameras.length=0,re=!0);for(let Pe=0;Pe<be.length;Pe++){const Oe=be[Pe];let ht=null;if(p!==null)ht=p.getViewport(Oe);else{const ft=u.getViewSubImage(d,Oe);ht=ft.viewport,Pe===0&&(e.setRenderTargetTextures(M,ft.colorTexture,d.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(M))}let We=E[Pe];We===void 0&&(We=new Lt,We.layers.enable(Pe),We.viewport=new Xe,E[Pe]=We),We.matrix.fromArray(Oe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Oe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ht.x,ht.y,ht.width,ht.height),Pe===0&&(y.matrix.copy(We.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),re===!0&&y.cameras.push(We)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Pe=u.getDepthInformation(be[0]);Pe&&Pe.isValid&&Pe.texture&&b.init(e,Pe,s.renderState)}}for(let be=0;be<S.length;be++){const re=v[be],Te=S[be];re!==null&&Te!==void 0&&Te.update(re,te,c||a)}ye&&ye(j,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const nt=new nh;nt.setAnimationLoop(Fe),this.setAnimationLoop=function(j){ye=j},this.dispose=function(){}}}const si=new ln,Yg=new Le;function $g(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Qc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,S,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),b(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Dt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Dt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),S=M.envMap,v=M.envMapRotation;S&&(m.envMap.value=S,si.copy(v),si.x*=-1,si.y*=-1,si.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(si)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const v=S.program;n.uniformBlockBinding(M,v)}function c(M,S){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));const k=S.program;n.updateUBOMapping(M,k);const A=e.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function h(M){const S=u();M.__bindingPointIndex=S;const v=i.createBuffer(),k=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,k,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const S=s[M.id],v=M.uniforms,k=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,w=v.length;A<w;A++){const U=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,y=U.length;E<y;E++){const C=U[E];if(p(C,A,E,k)===!0){const V=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let $=0;$<z.length;$++){const q=z[$],J=b(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,V+Y,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,S,v,k){const A=M.value,w=S+"_"+v;if(k[w]===void 0)return typeof A=="number"||typeof A=="boolean"?k[w]=A:k[w]=A.clone(),!0;{const U=k[w];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return k[w]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(M){const S=M.uniforms;let v=0;const k=16;for(let w=0,U=S.length;w<U;w++){const E=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,C=E.length;y<C;y++){const V=E[y],z=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,$=z.length;Y<$;Y++){const q=z[Y],J=b(q),G=v%k,se=G%J.boundary,he=G+se;v+=se,he!==0&&k-he<J.storage&&(v+=k-he),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=J.storage}}}const A=v%k;return A>0&&(v+=k-A),M.__size=v,M.__cache={},this}function b(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Jg{constructor(e={}){const{canvas:t=Bu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,f=null;const M=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this.toneMapping=$n,this.toneMappingExposure=1;const v=this;let k=!1,A=0,w=0,U=null,E=-1,y=null;const C=new Xe,V=new Xe;let z=null;const Y=new Ae(0);let $=0,q=t.width,J=t.height,G=1,se=null,he=null;const ye=new Xe(0,0,q,J),Fe=new Xe(0,0,q,J);let nt=!1;const j=new xo;let te=!1,be=!1;const re=new Le,Te=new Le,Pe=new R,Oe=new Xe,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ft(){return U===null?G:1}let I=n;function Wt(x,L){return t.getContext(x,L)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${co}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",oe,!1),I===null){const L="webgl2";if(I=Wt(L,x),I===null)throw Wt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let He,Ge,Se,at,Me,T,_,N,X,Z,W,_e,ae,ue,je,Q,de,Ee,Re,fe,Ve,Ue,st,P;function ie(){He=new im(I),He.init(),Ue=new Gg(I,He),Ge=new Zp(I,He,e,Ue),Se=new Bg(I,He),Ge.reverseDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),at=new am(I),Me=new Eg,T=new Hg(I,He,Se,Me,Ge,Ue,at),_=new Qp(v),N=new nm(v),X=new dd(I),st=new Yp(I,X),Z=new sm(I,X,at,st),W=new lm(I,Z,X,at),Re=new om(I,Ge,T),Q=new Jp(Me),_e=new Sg(v,_,N,He,Ge,st,Q),ae=new $g(v,Me),ue=new wg,je=new Dg(He),Ee=new Kp(v,_,N,Se,W,p,l),de=new Fg(v,W,Ge),P=new Zg(I,at,Ge,Se),fe=new $p(I,He,at),Ve=new rm(I,He,at),at.programs=_e.programs,v.capabilities=Ge,v.extensions=He,v.properties=Me,v.renderLists=ue,v.shadowMap=de,v.state=Se,v.info=at}ie();const H=new Kg(v,I);this.xr=H,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=He.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=He.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(x){x!==void 0&&(G=x,this.setSize(q,J,!1))},this.getSize=function(x){return x.set(q,J)},this.setSize=function(x,L,F=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=x,J=L,t.width=Math.floor(x*G),t.height=Math.floor(L*G),F===!0&&(t.style.width=x+"px",t.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(q*G,J*G).floor()},this.setDrawingBufferSize=function(x,L,F){q=x,J=L,G=F,t.width=Math.floor(x*F),t.height=Math.floor(L*F),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(ye)},this.setViewport=function(x,L,F,O){x.isVector4?ye.set(x.x,x.y,x.z,x.w):ye.set(x,L,F,O),Se.viewport(C.copy(ye).multiplyScalar(G).round())},this.getScissor=function(x){return x.copy(Fe)},this.setScissor=function(x,L,F,O){x.isVector4?Fe.set(x.x,x.y,x.z,x.w):Fe.set(x,L,F,O),Se.scissor(V.copy(Fe).multiplyScalar(G).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(x){Se.setScissorTest(nt=x)},this.setOpaqueSort=function(x){se=x},this.setTransparentSort=function(x){he=x},this.getClearColor=function(x){return x.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(x=!0,L=!0,F=!0){let O=0;if(x){let D=!1;if(U!==null){const ee=U.texture.format;D=ee===bo||ee===go||ee===mo}if(D){const ee=U.texture.type,le=ee===In||ee===ui||ee===Es||ee===Vi||ee===uo||ee===fo,pe=Ee.getClearColor(),me=Ee.getClearAlpha(),Ce=pe.r,Ie=pe.g,ge=pe.b;le?(g[0]=Ce,g[1]=Ie,g[2]=ge,g[3]=me,I.clearBufferuiv(I.COLOR,0,g)):(b[0]=Ce,b[1]=Ie,b[2]=ge,b[3]=me,I.clearBufferiv(I.COLOR,0,b))}else O|=I.COLOR_BUFFER_BIT}L&&(O|=I.DEPTH_BUFFER_BIT),F&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ue.dispose(),je.dispose(),Me.dispose(),_.dispose(),N.dispose(),W.dispose(),st.dispose(),P.dispose(),_e.dispose(),H.dispose(),H.removeEventListener("sessionstart",ko),H.removeEventListener("sessionend",Uo),Jn.stop()};function K(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const x=at.autoReset,L=de.enabled,F=de.autoUpdate,O=de.needsUpdate,D=de.type;ie(),at.autoReset=x,de.enabled=L,de.autoUpdate=F,de.needsUpdate=O,de.type=D}function oe(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function De(x){const L=x.target;L.removeEventListener("dispose",De),dt(L)}function dt(x){St(x),Me.remove(x)}function St(x){const L=Me.get(x).programs;L!==void 0&&(L.forEach(function(F){_e.releaseProgram(F)}),x.isShaderMaterial&&_e.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,F,O,D,ee){L===null&&(L=ht);const le=D.isMesh&&D.matrixWorld.determinant()<0,pe=Rh(x,L,F,O,D);Se.setMaterial(O,le);let me=F.index,Ce=1;if(O.wireframe===!0){if(me=Z.getWireframeAttribute(F),me===void 0)return;Ce=2}const Ie=F.drawRange,ge=F.attributes.position;let qe=Ie.start*Ce,rt=(Ie.start+Ie.count)*Ce;ee!==null&&(qe=Math.max(qe,ee.start*Ce),rt=Math.min(rt,(ee.start+ee.count)*Ce)),me!==null?(qe=Math.max(qe,0),rt=Math.min(rt,me.count)):ge!=null&&(qe=Math.max(qe,0),rt=Math.min(rt,ge.count));const ot=rt-qe;if(ot<0||ot===1/0)return;st.setup(D,O,pe,F,me);let Nt,Ke=fe;if(me!==null&&(Nt=X.get(me),Ke=Ve,Ke.setIndex(Nt)),D.isMesh)O.wireframe===!0?(Se.setLineWidth(O.wireframeLinewidth*ft()),Ke.setMode(I.LINES)):Ke.setMode(I.TRIANGLES);else if(D.isLine){let ve=O.linewidth;ve===void 0&&(ve=1),Se.setLineWidth(ve*ft()),D.isLineSegments?Ke.setMode(I.LINES):D.isLineLoop?Ke.setMode(I.LINE_LOOP):Ke.setMode(I.LINE_STRIP)}else D.isPoints?Ke.setMode(I.POINTS):D.isSprite&&Ke.setMode(I.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Ke.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Ke.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const ve=D._multiDrawStarts,bn=D._multiDrawCounts,Ye=D._multiDrawCount,Jt=me?X.get(me).bytesPerElement:1,pi=Me.get(O).currentProgram.getUniforms();for(let Ot=0;Ot<Ye;Ot++)pi.setValue(I,"_gl_DrawID",Ot),Ke.render(ve[Ot]/Jt,bn[Ot])}else if(D.isInstancedMesh)Ke.renderInstances(qe,ot,D.count);else if(F.isInstancedBufferGeometry){const ve=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,bn=Math.min(F.instanceCount,ve);Ke.renderInstances(qe,ot,bn)}else Ke.render(qe,ot)};function Ze(x,L,F){x.transparent===!0&&x.side===nn&&x.forceSinglePass===!1?(x.side=Dt,x.needsUpdate=!0,Us(x,L,F),x.side=Dn,x.needsUpdate=!0,Us(x,L,F),x.side=nn):Us(x,L,F)}this.compile=function(x,L,F=null){F===null&&(F=x),f=je.get(F),f.init(L),S.push(f),F.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),x!==F&&x.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();const O=new Set;return x.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const ee=D.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const pe=ee[le];Ze(pe,F,D),O.add(pe)}else Ze(ee,F,D),O.add(ee)}),S.pop(),f=null,O},this.compileAsync=function(x,L,F=null){const O=this.compile(x,L,F);return new Promise(D=>{function ee(){if(O.forEach(function(le){Me.get(le).currentProgram.isReady()&&O.delete(le)}),O.size===0){D(x);return}setTimeout(ee,10)}He.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Zt=null;function gn(x){Zt&&Zt(x)}function ko(){Jn.stop()}function Uo(){Jn.start()}const Jn=new nh;Jn.setAnimationLoop(gn),typeof self!="undefined"&&Jn.setContext(self),this.setAnimationLoop=function(x){Zt=x,H.setAnimationLoop(x),x===null?Jn.stop():Jn.start()},H.addEventListener("sessionstart",ko),H.addEventListener("sessionend",Uo),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(L),L=H.getCamera()),x.isScene===!0&&x.onBeforeRender(v,x,L,U),f=je.get(x,S.length),f.init(L),S.push(f),Te.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),j.setFromProjectionMatrix(Te),be=this.localClippingEnabled,te=Q.init(this.clippingPlanes,be),m=ue.get(x,M.length),m.init(),M.push(m),H.enabled===!0&&H.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&Rr(ee,L,-1/0,v.sortObjects)}Rr(x,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(se,he),We=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,We&&Ee.addToRenderList(m,x),this.info.render.frame++,te===!0&&Q.beginShadows();const F=f.state.shadowsArray;de.render(F,x,L),te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=m.opaque,D=m.transmissive;if(f.setupLights(),L.isArrayCamera){const ee=L.cameras;if(D.length>0)for(let le=0,pe=ee.length;le<pe;le++){const me=ee[le];Fo(O,D,x,me)}We&&Ee.render(x);for(let le=0,pe=ee.length;le<pe;le++){const me=ee[le];No(m,x,me,me.viewport)}}else D.length>0&&Fo(O,D,x,L),We&&Ee.render(x),No(m,x,L);U!==null&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(v,x,L),st.resetDefaultState(),E=-1,y=null,S.pop(),S.length>0?(f=S[S.length-1],te===!0&&Q.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Rr(x,L,F,O){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||j.intersectsSprite(x)){O&&Oe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Te);const le=W.update(x),pe=x.material;pe.visible&&m.push(x,le,pe,F,Oe.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||j.intersectsObject(x))){const le=W.update(x),pe=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Oe.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Oe.copy(le.boundingSphere.center)),Oe.applyMatrix4(x.matrixWorld).applyMatrix4(Te)),Array.isArray(pe)){const me=le.groups;for(let Ce=0,Ie=me.length;Ce<Ie;Ce++){const ge=me[Ce],qe=pe[ge.materialIndex];qe&&qe.visible&&m.push(x,le,qe,F,Oe.z,ge)}}else pe.visible&&m.push(x,le,pe,F,Oe.z,null)}}const ee=x.children;for(let le=0,pe=ee.length;le<pe;le++)Rr(ee[le],L,F,O)}function No(x,L,F,O){const D=x.opaque,ee=x.transmissive,le=x.transparent;f.setupLightsView(F),te===!0&&Q.setGlobalState(v.clippingPlanes,F),O&&Se.viewport(C.copy(O)),D.length>0&&ks(D,L,F),ee.length>0&&ks(ee,L,F),le.length>0&&ks(le,L,F),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Fo(x,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[O.id]===void 0&&(f.state.transmissionRenderTarget[O.id]=new di(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Ls:In,minFilter:wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));const ee=f.state.transmissionRenderTarget[O.id],le=O.viewport||C;ee.setSize(le.z,le.w);const pe=v.getRenderTarget();v.setRenderTarget(ee),v.getClearColor(Y),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),We&&Ee.render(F);const me=v.toneMapping;v.toneMapping=$n;const Ce=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),f.setupLightsView(O),te===!0&&Q.setGlobalState(v.clippingPlanes,O),ks(x,F,O),T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ge=0,qe=L.length;ge<qe;ge++){const rt=L[ge],ot=rt.object,Nt=rt.geometry,Ke=rt.material,ve=rt.group;if(Ke.side===nn&&ot.layers.test(O.layers)){const bn=Ke.side;Ke.side=Dt,Ke.needsUpdate=!0,Oo(ot,F,O,Nt,Ke,ve),Ke.side=bn,Ke.needsUpdate=!0,Ie=!0}}Ie===!0&&(T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee))}v.setRenderTarget(pe),v.setClearColor(Y,$),Ce!==void 0&&(O.viewport=Ce),v.toneMapping=me}function ks(x,L,F){const O=L.isScene===!0?L.overrideMaterial:null;for(let D=0,ee=x.length;D<ee;D++){const le=x[D],pe=le.object,me=le.geometry,Ce=O===null?le.material:O,Ie=le.group;pe.layers.test(F.layers)&&Oo(pe,L,F,me,Ce,Ie)}}function Oo(x,L,F,O,D,ee){x.onBeforeRender(v,L,F,O,D,ee),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),D.onBeforeRender(v,L,F,O,x,ee),D.transparent===!0&&D.side===nn&&D.forceSinglePass===!1?(D.side=Dt,D.needsUpdate=!0,v.renderBufferDirect(F,L,O,D,x,ee),D.side=Dn,D.needsUpdate=!0,v.renderBufferDirect(F,L,O,D,x,ee),D.side=nn):v.renderBufferDirect(F,L,O,D,x,ee),x.onAfterRender(v,L,F,O,D,ee)}function Us(x,L,F){L.isScene!==!0&&(L=ht);const O=Me.get(x),D=f.state.lights,ee=f.state.shadowsArray,le=D.state.version,pe=_e.getParameters(x,D.state,ee,L,F),me=_e.getProgramCacheKey(pe);let Ce=O.programs;O.environment=x.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(x.isMeshStandardMaterial?N:_).get(x.envMap||O.environment),O.envMapRotation=O.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Ce===void 0&&(x.addEventListener("dispose",De),Ce=new Map,O.programs=Ce);let Ie=Ce.get(me);if(Ie!==void 0){if(O.currentProgram===Ie&&O.lightsStateVersion===le)return zo(x,pe),Ie}else pe.uniforms=_e.getUniforms(x),x.onBeforeCompile(pe,v),Ie=_e.acquireProgram(pe,me),Ce.set(me,Ie),O.uniforms=pe.uniforms;const ge=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(ge.clippingPlanes=Q.uniform),zo(x,pe),O.needsLights=Ph(x),O.lightsStateVersion=le,O.needsLights&&(ge.ambientLightColor.value=D.state.ambient,ge.lightProbe.value=D.state.probe,ge.directionalLights.value=D.state.directional,ge.directionalLightShadows.value=D.state.directionalShadow,ge.spotLights.value=D.state.spot,ge.spotLightShadows.value=D.state.spotShadow,ge.rectAreaLights.value=D.state.rectArea,ge.ltc_1.value=D.state.rectAreaLTC1,ge.ltc_2.value=D.state.rectAreaLTC2,ge.pointLights.value=D.state.point,ge.pointLightShadows.value=D.state.pointShadow,ge.hemisphereLights.value=D.state.hemi,ge.directionalShadowMap.value=D.state.directionalShadowMap,ge.directionalShadowMatrix.value=D.state.directionalShadowMatrix,ge.spotShadowMap.value=D.state.spotShadowMap,ge.spotLightMatrix.value=D.state.spotLightMatrix,ge.spotLightMap.value=D.state.spotLightMap,ge.pointShadowMap.value=D.state.pointShadowMap,ge.pointShadowMatrix.value=D.state.pointShadowMatrix),O.currentProgram=Ie,O.uniformsList=null,Ie}function Bo(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=_r.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function zo(x,L){const F=Me.get(x);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function Rh(x,L,F,O,D){L.isScene!==!0&&(L=ht),T.resetTextureUnits();const ee=L.fog,le=O.isMeshStandardMaterial?L.environment:null,pe=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ut,me=(O.isMeshStandardMaterial?N:_).get(O.envMap||le),Ce=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ie=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ge=!!F.morphAttributes.position,qe=!!F.morphAttributes.normal,rt=!!F.morphAttributes.color;let ot=$n;O.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ot=v.toneMapping);const Nt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ke=Nt!==void 0?Nt.length:0,ve=Me.get(O),bn=f.state.lights;if(te===!0&&(be===!0||x!==y)){const jt=x===y&&O.id===E;Q.setState(O,x,jt)}let Ye=!1;O.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==bn.state.version||ve.outputColorSpace!==pe||D.isBatchedMesh&&ve.batching===!1||!D.isBatchedMesh&&ve.batching===!0||D.isBatchedMesh&&ve.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&ve.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&ve.instancing===!1||!D.isInstancedMesh&&ve.instancing===!0||D.isSkinnedMesh&&ve.skinning===!1||!D.isSkinnedMesh&&ve.skinning===!0||D.isInstancedMesh&&ve.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&ve.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&ve.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&ve.instancingMorph===!1&&D.morphTexture!==null||ve.envMap!==me||O.fog===!0&&ve.fog!==ee||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Q.numPlanes||ve.numIntersection!==Q.numIntersection)||ve.vertexAlphas!==Ce||ve.vertexTangents!==Ie||ve.morphTargets!==ge||ve.morphNormals!==qe||ve.morphColors!==rt||ve.toneMapping!==ot||ve.morphTargetsCount!==Ke)&&(Ye=!0):(Ye=!0,ve.__version=O.version);let Jt=ve.currentProgram;Ye===!0&&(Jt=Us(O,L,D));let pi=!1,Ot=!1,is=!1;const lt=Jt.getUniforms(),cn=ve.uniforms;if(Se.useProgram(Jt.program)&&(pi=!0,Ot=!0,is=!0),O.id!==E&&(E=O.id,Ot=!0),pi||y!==x){Se.buffers.depth.getReversed()?(re.copy(x.projectionMatrix),Hu(re),Gu(re),lt.setValue(I,"projectionMatrix",re)):lt.setValue(I,"projectionMatrix",x.projectionMatrix),lt.setValue(I,"viewMatrix",x.matrixWorldInverse);const kn=lt.map.cameraPosition;kn!==void 0&&kn.setValue(I,Pe.setFromMatrixPosition(x.matrixWorld)),Ge.logarithmicDepthBuffer&&lt.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&lt.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Ot=!0,is=!0)}if(D.isSkinnedMesh){lt.setOptional(I,D,"bindMatrix"),lt.setOptional(I,D,"bindMatrixInverse");const jt=D.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),lt.setValue(I,"boneTexture",jt.boneTexture,T))}D.isBatchedMesh&&(lt.setOptional(I,D,"batchingTexture"),lt.setValue(I,"batchingTexture",D._matricesTexture,T),lt.setOptional(I,D,"batchingIdTexture"),lt.setValue(I,"batchingIdTexture",D._indirectTexture,T),lt.setOptional(I,D,"batchingColorTexture"),D._colorsTexture!==null&&lt.setValue(I,"batchingColorTexture",D._colorsTexture,T));const ss=F.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0)&&Re.update(D,F,Jt),(Ot||ve.receiveShadow!==D.receiveShadow)&&(ve.receiveShadow=D.receiveShadow,lt.setValue(I,"receiveShadow",D.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(cn.envMap.value=me,cn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(cn.envMapIntensity.value=L.environmentIntensity),Ot&&(lt.setValue(I,"toneMappingExposure",v.toneMappingExposure),ve.needsLights&&Ch(cn,is),ee&&O.fog===!0&&ae.refreshFogUniforms(cn,ee),ae.refreshMaterialUniforms(cn,O,G,J,f.state.transmissionRenderTarget[x.id]),_r.upload(I,Bo(ve),cn,T)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(_r.upload(I,Bo(ve),cn,T),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&lt.setValue(I,"center",D.center),lt.setValue(I,"modelViewMatrix",D.modelViewMatrix),lt.setValue(I,"normalMatrix",D.normalMatrix),lt.setValue(I,"modelMatrix",D.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const jt=O.uniformsGroups;for(let kn=0,Un=jt.length;kn<Un;kn++){const Ho=jt[kn];P.update(Ho,Jt),P.bind(Ho,Jt)}}return Jt}function Ch(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Ph(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,L,F){Me.get(x.texture).__webglTexture=L,Me.get(x.depthTexture).__webglTexture=F;const O=Me.get(x);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){const F=Me.get(x);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,F=0){U=x,A=L,w=F;let O=!0,D=null,ee=!1,le=!1;if(x){const me=Me.get(x);if(me.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(I.FRAMEBUFFER,null),O=!1;else if(me.__webglFramebuffer===void 0)T.setupRenderTarget(x);else if(me.__hasExternalTextures)T.rebindTextures(x,Me.get(x.texture).__webglTexture,Me.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const ge=x.depthTexture;if(me.__boundDepthTexture!==ge){if(ge!==null&&Me.has(ge)&&(x.width!==ge.image.width||x.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(x)}}const Ce=x.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(le=!0);const Ie=Me.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ie[L])?D=Ie[L][F]:D=Ie[L],ee=!0):x.samples>0&&T.useMultisampledRTT(x)===!1?D=Me.get(x).__webglMultisampledFramebuffer:Array.isArray(Ie)?D=Ie[F]:D=Ie,C.copy(x.viewport),V.copy(x.scissor),z=x.scissorTest}else C.copy(ye).multiplyScalar(G).floor(),V.copy(Fe).multiplyScalar(G).floor(),z=nt;if(Se.bindFramebuffer(I.FRAMEBUFFER,D)&&O&&Se.drawBuffers(x,D),Se.viewport(C),Se.scissor(V),Se.setScissorTest(z),ee){const me=Me.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,F)}else if(le){const me=Me.get(x.texture),Ce=L||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,me.__webglTexture,F||0,Ce)}E=-1},this.readRenderTargetPixels=function(x,L,F,O,D,ee,le){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Me.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){Se.bindFramebuffer(I.FRAMEBUFFER,pe);try{const me=x.texture,Ce=me.format,Ie=me.type;if(!Ge.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-O&&F>=0&&F<=x.height-D&&I.readPixels(L,F,O,D,Ue.convert(Ce),Ue.convert(Ie),ee)}finally{const me=U!==null?Me.get(U).__webglFramebuffer:null;Se.bindFramebuffer(I.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(x,L,F,O,D,ee,le){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Me.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){const me=x.texture,Ce=me.format,Ie=me.type;if(!Ge.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-O&&F>=0&&F<=x.height-D){Se.bindFramebuffer(I.FRAMEBUFFER,pe);const ge=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ge),I.bufferData(I.PIXEL_PACK_BUFFER,ee.byteLength,I.STREAM_READ),I.readPixels(L,F,O,D,Ue.convert(Ce),Ue.convert(Ie),0);const qe=U!==null?Me.get(U).__webglFramebuffer:null;Se.bindFramebuffer(I.FRAMEBUFFER,qe);const rt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await zu(I,rt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ge),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ee),I.deleteBuffer(ge),I.deleteSync(rt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,L=null,F=0){x.isTexture!==!0&&(gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);const O=Math.pow(2,-F),D=Math.floor(x.image.width*O),ee=Math.floor(x.image.height*O),le=L!==null?L.x:0,pe=L!==null?L.y:0;T.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,F,0,0,le,pe,D,ee),Se.unbindTexture()},this.copyTextureToTexture=function(x,L,F=null,O=null,D=0){x.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,x=arguments[1],L=arguments[2],D=arguments[3]||0,F=null);let ee,le,pe,me,Ce,Ie,ge,qe,rt;const ot=x.isCompressedTexture?x.mipmaps[D]:x.image;F!==null?(ee=F.max.x-F.min.x,le=F.max.y-F.min.y,pe=F.isBox3?F.max.z-F.min.z:1,me=F.min.x,Ce=F.min.y,Ie=F.isBox3?F.min.z:0):(ee=ot.width,le=ot.height,pe=ot.depth||1,me=0,Ce=0,Ie=0),O!==null?(ge=O.x,qe=O.y,rt=O.z):(ge=0,qe=0,rt=0);const Nt=Ue.convert(L.format),Ke=Ue.convert(L.type);let ve;L.isData3DTexture?(T.setTexture3D(L,0),ve=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),ve=I.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),ve=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);const bn=I.getParameter(I.UNPACK_ROW_LENGTH),Ye=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Jt=I.getParameter(I.UNPACK_SKIP_PIXELS),pi=I.getParameter(I.UNPACK_SKIP_ROWS),Ot=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ot.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,me),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ce),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ie);const is=x.isDataArrayTexture||x.isData3DTexture,lt=L.isDataArrayTexture||L.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const cn=Me.get(x),ss=Me.get(L),jt=Me.get(cn.__renderTarget),kn=Me.get(ss.__renderTarget);Se.bindFramebuffer(I.READ_FRAMEBUFFER,jt.__webglFramebuffer),Se.bindFramebuffer(I.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Un=0;Un<pe;Un++)is&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(x).__webglTexture,D,Ie+Un),x.isDepthTexture?(lt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(L).__webglTexture,D,rt+Un),I.blitFramebuffer(me,Ce,ee,le,ge,qe,ee,le,I.DEPTH_BUFFER_BIT,I.NEAREST)):lt?I.copyTexSubImage3D(ve,D,ge,qe,rt+Un,me,Ce,ee,le):I.copyTexSubImage2D(ve,D,ge,qe,rt+Un,me,Ce,ee,le);Se.bindFramebuffer(I.READ_FRAMEBUFFER,null),Se.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else lt?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(ve,D,ge,qe,rt,ee,le,pe,Nt,Ke,ot.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(ve,D,ge,qe,rt,ee,le,pe,Nt,ot.data):I.texSubImage3D(ve,D,ge,qe,rt,ee,le,pe,Nt,Ke,ot):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,D,ge,qe,ee,le,Nt,Ke,ot.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,D,ge,qe,ot.width,ot.height,Nt,ot.data):I.texSubImage2D(I.TEXTURE_2D,D,ge,qe,ee,le,Nt,Ke,ot);I.pixelStorei(I.UNPACK_ROW_LENGTH,bn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ye),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jt),I.pixelStorei(I.UNPACK_SKIP_ROWS,pi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ot),D===0&&L.generateMipmaps&&I.generateMipmap(ve),Se.unbindTexture()},this.copyTextureToTexture3D=function(x,L,F=null,O=null,D=0){return x.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,x=arguments[2],L=arguments[3],D=arguments[4]||0),gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,L,F,O,D)},this.initRenderTarget=function(x){Me.get(x).__webglFramebuffer===void 0&&T.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?T.setTextureCube(x,0):x.isData3DTexture?T.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?T.setTexture2DArray(x,0):T.setTexture2D(x,0),Se.unbindTexture()},this.resetState=function(){A=0,w=0,U=null,Se.reset(),st.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}class lh extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ja,this.updateRanges=[],this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const At=new R;class So{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new So(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vl=new R,Wl=new Xe,jl=new Xe,e0=new R,ql=new Le,nr=new R,ia=new dn,Xl=new Le,sa=new Zi;class t0 extends it{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qo,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nr),this.boundingBox.expandByPoint(nr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nr),this.boundingSphere.expandByPoint(nr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ia.copy(this.boundingSphere),ia.applyMatrix4(s),e.ray.intersectsSphere(ia)!==!1&&(Xl.copy(s).invert(),sa.copy(e.ray).applyMatrix4(Xl),!(this.boundingBox!==null&&sa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Xe,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Wl.fromBufferAttribute(s.attributes.skinIndex,e),jl.fromBufferAttribute(s.attributes.skinWeight,e),Vl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=jl.getComponent(r);if(a!==0){const o=Wl.getComponent(r);ql.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(e0.copy(Vl).applyMatrix4(ql),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ch extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hh extends bt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=It,h=It,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kl=new Le,n0=new Le;class Eo{constructor(e=[],t=[]){this.uuid=on(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:n0;Kl.multiplyMatrices(o,t[r]),Kl.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Eo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new hh(t,e,e,Yt,an);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ch),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class to extends kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ci=new Le,Yl=new Le,ir=[],$l=new Vt,i0=new Le,cs=new it,hs=new dn;class s0 extends it{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new to(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,i0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),$l.copy(e.boundingBox).applyMatrix4(Ci),this.boundingBox.union($l)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),hs.copy(e.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),e.ray.intersectsSphere(hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ci),Yl.multiplyMatrices(n,Ci),cs.matrixWorld=Yl,cs.raycast(e,ir);for(let a=0,o=ir.length;a<o;a++){const l=ir[a];l.instanceId=r,l.object=this,t.push(l)}ir.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new to(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hh(new Float32Array(s*this.count),s,this.count,po,an));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class uh extends un{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yr=new R,Mr=new R,Zl=new Le,us=new Zi,sr=new dn,ra=new R,Jl=new R;class To extends ct{constructor(e=new fn,t=new uh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)yr.fromBufferAttribute(t,s-1),Mr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=yr.distanceTo(Mr);e.setAttribute("lineDistance",new Ln(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,e.ray.intersectsSphere(sr)===!1)return;Zl.copy(s).invert(),us.copy(e.ray).applyMatrix4(Zl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=c){const f=h.getX(b),M=h.getX(b+1),S=rr(this,e,us,l,f,M);S&&t.push(S)}if(this.isLineLoop){const b=h.getX(g-1),m=h.getX(p),f=rr(this,e,us,l,b,m);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=c){const f=rr(this,e,us,l,b,b+1);f&&t.push(f)}if(this.isLineLoop){const b=rr(this,e,us,l,g-1,p);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rr(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(yr.fromBufferAttribute(a,s),Mr.fromBufferAttribute(a,r),t.distanceSqToSegment(yr,Mr,ra,Jl)>n)return;ra.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ra);if(!(l<e.near||l>e.far))return{distance:l,point:Jl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Ql=new R,ec=new R;class r0 extends To{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ql.fromBufferAttribute(t,s),ec.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ql.distanceTo(ec);e.setAttribute("lineDistance",new Ln(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class a0 extends To{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class dh extends un{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tc=new Le,no=new Zi,ar=new dn,or=new R;class o0 extends ct{constructor(e=new fn,t=new dh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,e.ray.intersectsSphere(ar)===!1)return;tc.copy(s).invert(),no.copy(e.ray).applyMatrix4(tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,b=p;g<b;g++){const m=c.getX(g);or.fromBufferAttribute(u,m),nc(or,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,b=p;g<b;g++)or.fromBufferAttribute(u,g),nc(or,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function nc(i,e,t,n,s,r,a){const o=no.distanceSqToPoint(i);if(o<t){const l=new R;no.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class l0 extends bt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rs extends un{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pn extends Rs{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function lr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function c0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function h0(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ic(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function fh(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Is{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class u0 extends Is{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xo,endingEnd:Xo}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ko:r=e,o=2*t-n;break;case Yo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ko:a=e,l=2*n-t;break;case Yo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),b=g*g,m=b*g,f=-d*m+2*d*b-d*g,M=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,S=(-1-p)*m+(1.5+p)*b+.5*g,v=p*m-p*b;for(let k=0;k!==o;++k)r[k]=f*a[h+k]+M*a[c+k]+S*a[l+k]+v*a[u+k];return r}}class d0 extends Is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class f0 extends Is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class mn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lr(t,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lr(e.times,Array),values:lr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new f0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new d0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new u0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ts:t=this.InterpolantFactoryMethodDiscrete;break;case ws:t=this.InterpolantFactoryMethodLinear;break;case Cr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return ws;case this.InterpolantFactoryMethodSmooth:return Cr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&c0(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Cr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{const u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const b=t[u+g];if(b!==t[d+g]||b!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=ws;class es extends mn{constructor(e,t,n){super(e,t,n)}}es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Ts;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;class ph extends mn{}ph.prototype.ValueTypeName="color";class Xi extends mn{}Xi.prototype.ValueTypeName="number";class p0 extends Is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let h=c+o;c!==h;c+=4)$t.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ki extends mn{InterpolantFactoryMethodLinear(e){return new p0(this.times,this.values,this.getValueSize(),e)}}Ki.prototype.ValueTypeName="quaternion";Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class ts extends mn{constructor(e,t,n){super(e,t,n)}}ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Ts;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Yi extends mn{}Yi.prototype.ValueTypeName="vector";class m0{constructor(e="",t=-1,n=[],s=uu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=on(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(b0(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(mn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=h0(l);l=ic(l,1,h),c=ic(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Xi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,b){if(p.length!==0){const m=[],f=[];fh(p,m,f,g),m.length!==0&&b.push(new u(d,m,f))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)p[d[g].morphTargets[b]]=-1;for(const b in p){const m=[],f=[];for(let M=0;M!==d[g].morphTargets.length;++M){const S=d[g];m.push(S.time),f.push(S.morphTarget===b?1:0)}s.push(new Xi(".morphTargetInfluence["+b+"]",m,f))}l=p.length*a}else{const p=".bones["+t[u].name+"]";n(Yi,p+".position",d,"pos",s),n(Ki,p+".quaternion",d,"rot",s),n(Yi,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function g0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xi;case"vector":case"vector2":case"vector3":case"vector4":return Yi;case"color":return ph;case"quaternion":return Ki;case"bool":case"boolean":return es;case"string":return ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function b0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=g0(i.type);if(i.times===void 0){const t=[],n=[];fh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Xn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class _0{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const v0=new _0;class ns{constructor(e){this.manager=e!==void 0?e:v0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ns.DEFAULT_MATERIAL_NAME="__DEFAULT";const Sn={};class x0 extends Error{constructor(e,t){super(e),this.response=t}}class mh extends ns{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Xn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Sn[e]!==void 0){Sn[e].push({onLoad:t,onProgress:n,onError:s});return}Sn[e]=[],Sn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const h=Sn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let b=0;const m=new ReadableStream({start(f){M();function M(){u.read().then(({done:S,value:v})=>{if(S)f.close();else{b+=v.byteLength;const k=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:p});for(let A=0,w=h.length;A<w;A++){const U=h[A];U.onProgress&&U.onProgress(k)}f.enqueue(v),M()}},S=>{f.error(S)})}}});return new Response(m)}else throw new x0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Xn.add(e,c);const h=Sn[e];delete Sn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Sn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Sn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class y0 extends ns{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Xn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=As("img");function l(){h(),Xn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class M0 extends ns{constructor(e){super(e)}load(e,t,n,s){const r=new bt,a=new y0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class wr extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class S0 extends wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const aa=new Le,sc=new R,rc=new R;class wo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xo,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(sc),rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rc),t.updateMatrixWorld(),aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class E0 extends wo{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ji*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class T0 extends wr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new E0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ac=new Le,ds=new R,oa=new R;class w0 extends wo{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ds.setFromMatrixPosition(e.matrixWorld),n.position.copy(ds),oa.copy(n.position),oa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oa),n.updateMatrixWorld(),s.makeTranslation(-ds.x,-ds.y,-ds.z),ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac)}}class gh extends wr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new w0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class A0 extends wo{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class io extends wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new A0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ys{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class R0 extends ns{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Xn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Xn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Xn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Xn.add(e,l),r.manager.itemStart(e)}}class C0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=oc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function oc(){return performance.now()}const Ao="\\[\\]\\.:\\/",P0=new RegExp("["+Ao+"]","g"),Ro="[^"+Ao+"]",L0="[^"+Ao.replace("\\.","")+"]",D0=/((?:WC+[\/:])*)/.source.replace("WC",Ro),I0=/(WCOD+)?/.source.replace("WCOD",L0),k0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ro),U0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ro),N0=new RegExp("^"+D0+I0+k0+U0+"$"),F0=["material","materials","bones","map"];class O0{constructor(e,t,n){const s=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(P0,"")}static parseTrackName(e){const t=N0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);F0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=O0;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const lc=new Le;class B0{constructor(e,t,n=0,s=1/0){this.ray=new Zi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lc),this}intersectObject(e,t=!0,n=[]){return so(e,this,n,t),n.sort(cc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)so(e[s],this,n,t);return n.sort(cc),n}}function cc(i,e){return i.distance-e.distance}function so(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)so(r[a],e,t,!0)}}class hc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class z0 extends fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);const uc={type:"change"},Co={type:"start"},bh={type:"end"},cr=new Zi,dc=new Vn,H0=Math.cos(70*qc.DEG2RAD),mt=new R,Ft=2*Math.PI,tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},la=1e-6;class G0 extends z0{constructor(e,t=null){super(e,t),this.state=tt.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new $t,this._lastTargetPosition=new R,this._quat=new $t().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hc,this._sphericalDelta=new hc,this._scale=1,this._panOffset=new R,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new R,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=W0.bind(this),this._onPointerDown=V0.bind(this),this._onPointerUp=j0.bind(this),this._onContextMenu=J0.bind(this),this._onMouseWheel=K0.bind(this),this._onKeyDown=Y0.bind(this),this._onTouchStart=$0.bind(this),this._onTouchMove=Z0.bind(this),this._onMouseDown=q0.bind(this),this._onMouseMove=X0.bind(this),this._interceptControlDown=Q0.bind(this),this._interceptControlUp=eb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uc),this.update(),this.state=tt.NONE}update(e=null){const t=this.object.position;mt.copy(t).sub(this.target),mt.applyQuaternion(this._quat),this._spherical.setFromVector3(mt),this.autoRotate&&this.state===tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ft:n>Math.PI&&(n-=Ft),s<-Math.PI?s+=Ft:s>Math.PI&&(s-=Ft),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(mt.setFromSpherical(this._spherical),mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=mt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(cr.origin.copy(this.object.position),cr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cr.direction))<H0?this.object.lookAt(this.target):(dc.setFromNormalAndCoplanarPoint(this.object.up,this.target),cr.intersectPlane(dc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>la||8*(1-this._lastQuaternion.dot(this.object.quaternion))>la||this._lastTargetPosition.distanceToSquared(this.target)>la?(this.dispatchEvent(uc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ft/60*this.autoRotateSpeed*e:Ft/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){mt.setFromMatrixColumn(t,0),mt.multiplyScalar(-e),this._panOffset.add(mt)}_panUp(e,t){this.screenSpacePanning===!0?mt.setFromMatrixColumn(t,1):(mt.setFromMatrixColumn(t,0),mt.crossVectors(this.object.up,mt)),mt.multiplyScalar(e),this._panOffset.add(mt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;mt.copy(s).sub(this.target);let r=mt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function V0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function W0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function j0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bh),this.state=tt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function q0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=tt.DOLLY;break;case Ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=tt.ROTATE}break;case Ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=tt.PAN}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(Co)}function X0(i){switch(this.state){case tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function K0(i){this.enabled===!1||this.enableZoom===!1||this.state!==tt.NONE||(i.preventDefault(),this.dispatchEvent(Co),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(bh))}function Y0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function $0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=tt.TOUCH_ROTATE;break;case Li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=tt.TOUCH_PAN;break;default:this.state=tt.NONE}break;case 2:switch(this.touches.TWO){case Li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=tt.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=tt.TOUCH_DOLLY_ROTATE;break;default:this.state=tt.NONE}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(Co)}function Z0(i){switch(this._trackPointer(i),this.state){case tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=tt.NONE}}function J0(i){this.enabled!==!1&&i.preventDefault()}function Q0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fc(i,e){if(e===du)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Za||e===Vc){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Za)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class tb extends ns{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ab(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new xb(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ys.extractUrlBase(e);a=ys.resolveURL(c,this.path)}else a=ys.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new mh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_h){try{a[Be.KHR_BINARY_GLTF]=new yb(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Be.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new kb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Be.KHR_MATERIALS_UNLIT:a[u]=new sb;break;case Be.KHR_DRACO_MESH_COMPRESSION:a[u]=new Mb(r,this.dracoLoader);break;case Be.KHR_TEXTURE_TRANSFORM:a[u]=new Sb;break;case Be.KHR_MESH_QUANTIZATION:a[u]=new Eb;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function nb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ib{constructor(e){this.parser=e,this.name=Be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ae(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ut);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new io(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new gh(h),c.distance=u;break;case"spot":c=new T0(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Tn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class sb{constructor(){this.name=Be.KHR_MATERIALS_UNLIT}getMaterialType(){return Rn}extendParams(e,t,n){const s=[];e.color=new Ae(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ut),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,gt))}return Promise.all(s)}}class rb{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ab{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(o,o)}return Promise.all(r)}}class ob{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class lb{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class cb{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ut)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,gt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class hb{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class ub{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(o[0],o[1],o[2],Ut),Promise.all(r)}}class db{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class fb{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(o[0],o[1],o[2],Ut),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,gt)),Promise.all(r)}}class pb{constructor(e){this.parser=e,this.name=Be.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class mb{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class gb{constructor(e){this.parser=e,this.name=Be.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class bb{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _b{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class vb{constructor(e){this.name=Be.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}}class xb{constructor(e){this.name=Be.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Kt.TRIANGLES&&c.mode!==Kt.TRIANGLE_STRIP&&c.mode!==Kt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const g of u){const b=new Le,m=new R,f=new $t,M=new R(1,1,1),S=new s0(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,v),l.SCALE&&M.fromBufferAttribute(l.SCALE,v),S.setMatrixAt(v,b.compose(m,f,M));for(const v in l)if(v==="_COLOR_0"){const k=l[v];S.instanceColor=new to(k.array,k.itemSize,k.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);ct.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),p.push(S)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const _h="glTF",fs=12,pc={JSON:1313821514,BIN:5130562};class yb{constructor(e){this.name=Be.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,fs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_h)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-fs,r=new DataView(e,fs);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===pc.JSON){const c=new Uint8Array(e,fs+a,o);this.content=n.decode(c)}else if(l===pc.BIN){const c=fs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Mb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Be.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=ro[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=ro[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],p=Fi[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(const g in p.attributes){const b=p.attributes[g],m=l[g];m!==void 0&&(b.normalized=m)}u(p)},o,c,Ut,d)})})}}class Sb{constructor(){this.name=Be.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Eb{constructor(){this.name=Be.KHR_MESH_QUANTIZATION}}class vh extends Is{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,p=d*u,g=e*c,b=g-c,m=-2*p+3*d,f=p-d,M=1-m,S=f-d+u;for(let v=0;v!==o;v++){const k=a[b+v+o],A=a[b+v+l]*h,w=a[g+v+o],U=a[g+v]*h;r[v]=M*k+S*A+m*w+f*U}return r}}const Tb=new $t;class wb extends vh{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Tb.fromArray(r).normalize().toArray(r),r}}const Kt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mc={9728:It,9729:Gt,9984:Ic,9985:dr,9986:ms,9987:wn},gc={33071:qn,33648:vr,10497:Gi},ca={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ro={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ab={CUBICSPLINE:void 0,LINEAR:ws,STEP:Ts},ha={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Rb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Rs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dn})),i.DefaultMaterial}function ri(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Tn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Cb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Pb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Lb(i){let e;const t=i.extensions&&i.extensions[Be.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ua(t.attributes):e=i.indices+":"+ua(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ua(i.targets[n]);return e}function ua(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ao(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Db(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ib=new Le;class kb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new nb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator!="undefined"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&a<98?this.textureLoader=new M0(this.options.manager):this.textureLoader=new R0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ri(r,o,s),Tn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(ys.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=ca[s.type],o=Fi[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new kt(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=ca[s.type],c=Fi[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let b,m;if(p&&p!==u){const f=Math.floor(d/p),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let S=t.cache.get(M);S||(b=new c(o,f*p,s.count*p/h),S=new Qg(b,p/h),t.cache.add(M,S)),m=new So(S,l,d%p/h,g)}else o===null?b=new c(s.count*l):b=new c(o,d,s.count*l),m=new kt(b,l,g);if(s.sparse!==void 0){const f=ca.SCALAR,M=Fi[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,k=new M(a[1],S,s.sparse.count*f),A=new c(a[2],v,s.sparse.count*l);o!==null&&(m=new kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,U=k.length;w<U;w++){const E=k[w];if(m.setX(E,A[w*l]),l>=2&&m.setY(E,A[w*l+1]),l>=3&&m.setZ(E,A[w*l+2]),l>=4&&m.setW(E,A[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=mc[d.magFilter]||Gt,h.minFilter=mc[d.minFilter]||wn,h.wrapS=gc[d.wrapS]||Gi,h.wrapT=gc[d.wrapT]||Gi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==It&&h.minFilter!==Gt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){const m=new bt(b);m.needsUpdate=!0,d(m)}),t.load(ys.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Tn(u,a),u.userData.mimeType=a.mimeType||Db(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Be.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Be.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new dh,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new uh,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Rs}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Be.KHR_MATERIALS_UNLIT]){const u=s[Be.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ut),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,gt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=nn);const h=r.alphaMode||ha.OPAQUE;if(h===ha.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ha.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Rn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new we(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Rn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Rn){const u=r.emissiveFactor;o.emissive=new Ae().setRGB(u[0],u[1],u[2],Ut)}return r.emissiveTexture!==void 0&&a!==Rn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,gt)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Tn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ri(s,u,r),u})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return bc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Lb(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Be.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=bc(new fn,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Rb(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const b=h[p],m=a[p];let f;const M=c[p];if(m.mode===Kt.TRIANGLES||m.mode===Kt.TRIANGLE_STRIP||m.mode===Kt.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new t0(b,M):new it(b,M),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Kt.TRIANGLE_STRIP?f.geometry=fc(f.geometry,Vc):m.mode===Kt.TRIANGLE_FAN&&(f.geometry=fc(f.geometry,Za));else if(m.mode===Kt.LINES)f=new r0(b,M);else if(m.mode===Kt.LINE_STRIP)f=new To(b,M);else if(m.mode===Kt.LINE_LOOP)f=new a0(b,M);else if(m.mode===Kt.POINTS)f=new o0(b,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Pb(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Tn(f,r),m.extensions&&ri(s,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&ri(s,u[0],r),u[0];const d=new Cn;r.extensions&&ri(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(qc.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new yo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Tn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Le;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Eo(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const p=s.channels[u],g=s.samplers[p.sampler],b=p.target,m=b.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],b=u[3],m=u[4],f=[];for(let M=0,S=d.length;M<S;M++){const v=d[M],k=p[M],A=g[M],w=b[M],U=m[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const E=n._createAnimationTracks(v,k,A,w,U);if(E)for(let y=0;y<E.length;y++)f.push(E[y])}return new m0(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Ib)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new ch:c.length>1?h=new Cn:c.length===1?h=c[0]:h=new ct,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Tn(h,r),r.extensions&&ri(n,h,r),r.matrix!==void 0){const u=new Le;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Cn;n.name&&(r.name=s.createUniqueName(n.name)),Tn(r,n),n.extensions&&ri(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of s.associations)(d instanceof un||d instanceof bt)&&u.set(d,p);return h.traverse(d=>{const p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];Gn[r.path]===Gn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Gn[r.path]){case Gn.weights:c=Xi;break;case Gn.rotation:c=Ki;break;case Gn.position:case Gn.scale:c=Yi;break;default:switch(n.itemSize){case 1:c=Xi;break;case 2:case 3:default:c=Yi;break}break}const h=s.interpolation!==void 0?Ab[s.interpolation]:ws,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+Gn[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ao(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ki?wb:vh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ub(i,e,t){const n=e.attributes,s=new Vt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){const h=ao(Fi[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new R,l=new R;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const b=ao(Fi[d.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new dn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function bc(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=ro[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ze.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`),Tn(i,e),Ub(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Cb(i,e.targets,t):i})}var Nb=function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var M=new Uint8Array(f.length),S=0;S<f.length;++S){var v=f.charCodeAt(S);M[S]=v>96?v-97:v>64?v-39:v+4}for(var k=0,S=0;S<f.length;++S)M[k++]=M[S]<60?n[M[S]]:(M[S]-60)*64+M[++S];return M.buffer.slice(0,k)}function l(f,M,S,v,k,A){var w=r.exports.sbrk,U=S+3&-4,E=w(U*v),y=w(k.length),C=new Uint8Array(r.exports.memory.buffer);C.set(k,y);var V=f(E,S,v,y,k.length);if(V==0&&A&&A(E,U,v),M.set(C.subarray(E,E+S*v)),w(E-w(0)),V!=0)throw new Error("Malformed buffer data: "+V)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(f){var M={object:new Worker(f),pending:0,requests:{}};return M.object.onmessage=function(S){var v=S.data;M.pending-=v.count,M.requests[v.id][v.action](v.value),delete M.requests[v.id]},M}function g(f){for(var M="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+m.toString(),S=new Blob([M],{type:"text/javascript"}),v=URL.createObjectURL(S),k=0;k<f;++k)u[k]=p(v);URL.revokeObjectURL(v)}function b(f,M,S,v,k){for(var A=u[0],w=1;w<u.length;++w)u[w].pending<A.pending&&(A=u[w]);return new Promise(function(U,E){var y=new Uint8Array(S),C=d++;A.pending+=f,A.requests[C]={resolve:U,reject:E},A.object.postMessage({id:C,count:f,size:M,source:y,mode:v,filter:k},[y.buffer])})}function m(f){a.then(function(){var M=f.data;try{var S=new Uint8Array(M.count*M.size);l(r.exports[M.mode],S,M.count,M.size,M.source,r.exports[M.filter]),self.postMessage({id:M.id,count:M.count,action:"resolve",value:S},[S.buffer])}catch(v){self.postMessage({id:M.id,count:M.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(f){g(f)},decodeVertexBuffer:function(f,M,S,v,k){l(r.exports.meshopt_decodeVertexBuffer,f,M,S,v,r.exports[c[k]])},decodeIndexBuffer:function(f,M,S,v){l(r.exports.meshopt_decodeIndexBuffer,f,M,S,v)},decodeIndexSequence:function(f,M,S,v){l(r.exports.meshopt_decodeIndexSequence,f,M,S,v)},decodeGltfBuffer:function(f,M,S,v,k,A){l(r.exports[h[k]],f,M,S,v,r.exports[c[A]])},decodeGltfBufferAsync:function(f,M,S,v,k){return u.length>0?b(f,M,S,h[v],c[k]):a.then(function(){var A=new Uint8Array(f*M);return l(r.exports[h[v]],A,f,M,S,r.exports[c[k]]),A})}}}();class Fb extends lh{constructor(){super();const e=new Ji;e.deleteAttribute("uv");const t=new Rs({side:Dt}),n=new Rs,s=new gh(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new it(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new it(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new it(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new it(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new it(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new it(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new it(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new it(e,Pi(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new it(e,Pi(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new it(e,Pi(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const b=new it(e,Pi(43));b.position.set(-.462,8.89,14.52),b.scale.set(4.38,5.441,.088),this.add(b);const m=new it(e,Pi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new it(e,Pi(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Pi(i){const e=new Rn;return e.color.setScalar(i),e}const da={crankRadius:35.2,rodLength:127},Ob=103,_s=201,Bb={1:147.5,4:88.5,2:29.5,5:-29.5,3:-88.5,6:-147.5},zb={1:0,6:60,2:120,4:180,3:240,5:300};function Po(i){return i<=3?1:-1}function Hb(i,e=0){const t=(zb[i]+e)*(Math.PI/180),n=da.crankRadius*Math.cos(t),s=da.crankRadius*Math.sin(t),r=Po(i),a=Math.sqrt(da.rodLength**2-s**2),o=n+r*a,l=Math.atan2(-s,o-n);return{pinX:o,throwXY:[n,s],rodAngle:l}}const hr={x:2.36,y:-20},_c=34,Gb=[.8009,.5871,.1181];function Vb(){return Gb}function Wb(i){return(i>0?280:100)*Math.PI/180}const jb=-70,ur={x:_s+26,y:65},vc={dx:8,dy:50},wt=i=>[i("right",1),i("left",-1)],Lo=[...wt(i=>({id:`head-nuts-${i}`,name:`Cylinder-head barrel nuts, ${i} bank`,count:12,step:"cam-housings",follows:`cam-housing-${i}`,size:"M10 barrel nut + washer",catalog:[{ill:"103-00",pos:"17",pn:"901 104 382 02",qty:24,note:"Barrel nut (12 per bank); washer #16 999 031 091 01 x24"},{ill:"101-05",pos:"3",pn:"911 101 172 00",qty:12,note:"Upper head studs, two per cylinder"},{ill:"101-05",pos:"3",pn:"930 101 170 00",qty:12,note:"Lower Dilavar head studs, two per cylinder. A separate line from the upper studs"}],description:"Four tall barrel nuts per head on the case head studs (4 studs per cylinder), seated on bosses on top of the head core under the cam housing. Reached with a long hex socket through the cam housing; they come off just before the cam housing + heads lift away."})),...wt(i=>({id:`cam-housing-nuts-${i}`,name:`Cam-housing to head nuts, ${i} bank`,count:12,step:"heads",carriedBy:`cam-housing-${i}`,follows:`cam-housing-${i}`,size:"M8 hex nut + washer",catalog:[{ill:"103-05",pos:"22",pn:"900 084 004 03",qty:40,note:"M8 hex nut (24 cam housing to heads + 16 chain housing); washer #21. Spring washer #23 is the cover nuts, not this pool"},{ill:"103-00",pos:"7",pn:"999 062 041 02",qty:24,note:"Stud BM8x50 in the head"}],description:"Four M8 nuts per head on studs from the head through the cam-housing base plate. The cam housing lifts off with the heads still attached; these come off on the bench to separate them."})),...["upper","lower"].flatMap(i=>wt(e=>({id:`valve-cover-nuts-${i}-${e}`,name:`Valve-cover nuts, ${i} ${e}`,count:i==="upper"?6:11,step:"valve-covers",follows:`valve-cover-${i}-${e}`,size:"M8 hex nut + spring washer",catalog:[{ill:"103-05",pos:"25",pn:"900 076 025 02",qty:34,note:"M8 hex nut: 6 per upper cover and 11 per lower cover (34). Spring washer #23 N 012 241 8 (B 8×15) under the nut. The 3 raised lugs on each lower cover take the special nuts #24, with the same washer"},{ill:"103-05",pos:"14/15",pn:"999 062 009 02 / 999 062 010 02",qty:34,note:"Studs BM8x28 x12 on the upper covers / BM8x35 x22 on the lower covers"}],description:`Nuts on the ${i} valve cover ear studs (studs in the cam-housing rails), axis normal to the cover seat flange.`}))),...wt((i,e)=>({id:`chain-cover-nuts-${i}`,name:`Chain-housing cover nuts, ${i}`,count:e>0?10:9,step:"chain-covers",follows:`chain-housing-lid-${i}`,size:"M6 lock nut + washer",catalog:[{ill:"103-05",pos:"12",pn:"900 910 012 02",qty:19,note:"M6 lock nut (19 per engine; split 10 right / 9 left, E); washer #11 x19"},{ill:"103-05",pos:"3",pn:"999 062 102 02",qty:19,note:"Stud BM6x22 in the chain housing"}],description:"Perimeter lock nuts holding the chain-housing cover on the housing studs. The catalogue lists 19 cover studs for the engine; the rebuild photos of a later 3.2 cover show about 13 per side, so the per-side split here is estimated."})),...wt(i=>({id:`chain-housing-nuts-${i}`,name:`Chain-housing to crankcase nuts, ${i}`,count:6,step:"chain-housings",follows:`chain-housing-${i}`,size:"M8 hex nut + washer",catalog:[{ill:"103-05",pos:"22",pn:"900 084 004 03",qty:40,note:"Same M8 nut as the cam-housing studs (16 for the chain housings: 6 per side on the case flange + 2 per side on the cam-housing end studs, chain-end-nuts-*)"}],description:"Nuts inside the chain box on the inner-edge flange, on studs from the crankcase chain well. Only reachable once the cover, chain and sprocket are off."})),...wt(i=>({id:`intake-nuts-${i}`,name:`Intake-pipe flange nuts, ${i}`,count:6,step:"intake",follows:i==="right"?"intake-runner-1":"intake-runner-4",size:"M8 lock nut + washer",catalog:[{ill:"106-00",pos:"8",pn:"999 084 601 02",qty:12,note:"M8 lock nut; washer #12 900 025 007 02 x12"},{ill:"103-00",pos:"6",pn:"999 062 009 02",qty:12,note:"Intake stud in the head"}],description:"Two nuts per intake pipe on studs in the head intake flange."})),...wt(i=>({id:`exhaust-nuts-${i}`,name:`Heat-exchanger port hex nuts, ${i}`,count:3,step:"heat-exchangers",follows:`heat-exchanger-${i}`,size:"M8 brass nut",catalog:[{ill:"202-00",pos:"32/33",pn:"900 076 025 02 / 999 085 001 02",qty:12,note:"One hex nut (#32) and one socket-head nut (#33) per port (exhaust-socket-nuts-*)"},{ill:"103-00",pos:"5",pn:"999 062 220 02",qty:12,note:"Exhaust stud in the head"}],description:"Two nuts per exhaust port clamping the heat-exchanger flange to the head studs from below; notorious for seizing."})),...wt(i=>({id:`exhaust-socket-nuts-${i}`,name:`Heat-exchanger port socket-head nuts, ${i}`,count:3,step:"heat-exchangers",follows:`heat-exchanger-${i}`,size:"M8 socket-head nut",catalog:[{ill:"202-00",pos:"33",pn:"999 085 001 02",qty:6}],description:"The inboard nut of each exhaust port is a socket-head (Allen) nut: there is no room for a spanner between the port and the cylinder fins."})),{id:"case-through-bolts",name:"Crankcase through-bolts",count:11,step:"split",follows:"crankcase-left",size:"M10x1 through-bolt + washer",catalog:[{ill:"101-10",pos:"25",pn:"930 101 173 02",qty:11,note:"Screw; plus 1 stud #16 930 101 175 00 with a cap nut each end; washers #27 x12"}],description:"Long through-bolts across the main bearing webs, heads on the right half (x+) with sealing washers, threaded into cap nuts on the left half."},{id:"case-through-nuts",name:"Crankcase through-bolt cap nuts",count:12,step:"split",follows:"crankcase-left",size:"M10x1 cap nut + washer",catalog:[{ill:"101-05",pos:"26",pn:"930 101 172 01",qty:13,note:"Cap nut M10x1; washers #25 x12"}],description:"12 cap nuts on the left half."},{id:"case-through-stud-nut",name:"Through-stud cap nut (right half)",count:1,step:"split",follows:"crankcase-left",size:"M10x1 cap nut + washer",catalog:[{ill:"101-05",pos:"26",pn:"930 101 172 01",qty:13,note:"13th cap nut, on the right-hand end of the through-stud 101-10 #16"}],description:"Second cap nut of the through-stud, on the right half."},{id:"case-perimeter-nuts",name:"Crankcase perimeter nuts",count:24,step:"split",follows:"crankcase-left",size:"M8 lock nut + washer",catalog:[{ill:"101-05",pos:"21",pn:"900 910 022 02",qty:24,note:"M8 lock nut; washer #20 x24"},{ill:"101-10",pos:"5",pn:"999 062 115 02",qty:13,note:"Stud M8x32 (plus longer studs) in the right half"}],description:"Lock nuts around the split flange (16 along the top, 8 along the bottom clear of the sump), on studs from the right half, nuts on the left half lugs."},{id:"flywheel-bolts",name:"Flywheel bolts",count:9,step:"flywheel",follows:"flywheel",size:"M10 flywheel bolt",catalog:[{ill:"102-00",pos:"6",pn:"930 102 206 00",qty:9}],description:"Nine bolts through the flywheel hub into the crankshaft flange."},{id:"clutch-bolts",name:"Pressure-plate bolts",count:9,step:"clutch",follows:"pressure-plate",size:"M8 pan-head screw + lock ring",catalog:[{ill:"301-00",pos:"4",pn:"900 067 090 02",qty:9,note:"Lock rings #3 900 027 015 02 x9"}],description:"Nine screws through the pressure-plate cover flange into the flywheel; back off evenly."},{id:"pulley-bolt",name:"Crankshaft pulley bolt",count:1,step:"pulley",follows:"crank-pulley",size:"M12x1.5x22 + washer",catalog:[{ill:"102-00",pos:"15",pn:"999 093 005 02",qty:1,note:"Washer #14 900 028 014 02"}],description:"Central bolt clamping the pulley to the crank nose."},{id:"fan-pulley-nut",name:"Fan pulley nut",count:1,step:"belt",follows:"fan-pulley",size:"M16x1 nut",catalog:[{ill:"105-00",pos:"11",pn:"901 603 905 01",qty:1}],description:"Nut on the alternator shaft clamping the pulley halves and tension shims."},{id:"oil-pump-nuts",name:"Oil pump cover nuts",count:3,step:"int-shaft",follows:"oil-pump",size:"M8 nut + tab washer",catalog:[{ill:"104-00",pos:"5",pn:"900 076 025 02",qty:7,note:"Hex nut M8 (7 listed: 3 here with tab washers #4, 4 on the oil cooler)"}],description:"Nuts holding the pump cover plate and body together on their studs."},{id:"sump-nuts",name:"Sump plate nuts",count:8,step:"externals",follows:"sump-plate",size:"M6 nut + spring washer",catalog:[{ill:"101-05",pos:"35",pn:"900 076 010 02",qty:8,note:"8 of the 12 nuts #35; spring washers #34. The other 4 are the breather lid."}],description:"Eight M6 nuts and spring washers on the sump-cover studs. The catalogue line is twelve; four of them hold the breather lid."},{id:"thermostat-nuts",name:"Oil thermostat nuts",count:2,step:"externals",follows:"oil-thermostat",size:"M6 nut + spring washer",catalog:[{ill:"101-10",pos:"36",pn:"900 076 010 02",qty:2,note:"Spring washers #35 N 012 226 5 x2"}],description:"Two M6 nuts and spring washers holding the thermostat flange to the pad on top of the right case half at the pulley end."},{id:"ishaft-cover-nuts",name:"Intermediate-shaft cover nuts",count:3,step:"externals",follows:"ishaft-cover",size:"M6 lock nut + washer",catalog:[{ill:"101-10",pos:"41",pn:"900 910 012 02",qty:3,note:"Washers #42 x3. Cover 911 105 162 00 applies up to engine 63D 4069."}],description:"Three M6 lock nuts and washers on the intermediate-shaft cover. These are the three lock nuts the thermostat flange used to be given."},{id:"breather-nuts",name:"Breather cover nuts",count:4,step:"externals",follows:"breather-lid",size:"M6 nut + spring washer",catalog:[{ill:"101-05",pos:"35",pn:"900 076 010 02",qty:4,note:"4 of the 12 nuts #35; spring washers #34"}],description:"Four M6 nuts and spring washers on the breather-lid studs (101-05 #34/#35, the four that are not on the sump plate)."},...wt(i=>({id:`rocker-shaft-screws-${i}`,name:`Rocker-shaft screws, ${i}`,count:6,step:"rockers",follows:`rockers-${i}`,size:"M6 pan-head screw",catalog:[{ill:"103-10",pos:"45",pn:"999 067 008 00",qty:12,note:"Pan-head screw; the left sheet lists 12 for the engine"}],description:"Pan-head screw (999.067.008.00, Kat 502 illustration 103-10 position 45) on the +Z spot face of each rocker shaft. Tightening it with the nut on the other end expands the slotted shaft in the housing bore."})),...wt(i=>({id:`rocker-shaft-nuts-${i}`,name:`Rocker-shaft nuts, ${i}`,count:6,step:"rockers",follows:`rockers-${i}`,size:"Conical nut",catalog:[{ill:"103-10",pos:"47",pn:"901 105 376 02",qty:12,note:"Nut; the left sheet lists 12 for the engine"}],description:"Nut (901.105.376.02, Kat 502 illustration 103-10 position 47) on the −Z spot face. The cone enters the shaft bore; the flange bears on the spot face."})),...wt(i=>({id:`cam-nut-${i}`,name:`Camshaft sprocket nut, ${i}`,count:1,step:"cam-nuts",follows:`cam-sprocket-${i}`,size:"M22x1.5 nut + spring washer",catalog:[{ill:i==="left"?"103-10":"103-15",pos:"40/41",pn:"900 024 007 02 / 930 105 236 00",qty:1,note:"Spring washer / nut"}],description:"Large nut on the threaded cam nose with a spring washer under it, bearing on the sprocket hub. Hold the sprocket with the holding tool (P202) to undo it; the sprocket, then the flange and the Woodruff key, come off after it."})),...wt(i=>({id:`chain-end-nuts-${i}`,name:`Cam-housing end stud nuts, ${i}`,count:2,step:"chain-housings",follows:`chain-housing-${i}`,size:"M8 nut + washer",catalog:[{ill:"103-05",pos:"22",pn:"900 084 004 03",qty:40,note:"2 per side of the 16 chain-housing nuts"}],description:"Two nuts per side on studs from the cam-housing end face, through ears on the chain housing just above the chain box (E: the model has no room inside the box behind the sprocket)."})),...wt(i=>({id:`valve-cover-special-${i}`,name:`Valve-cover special nuts, ${i}`,count:3,step:"valve-covers",follows:`valve-cover-lower-${i}`,size:"M8 special cap nut + spring washer",catalog:[{ill:"103-05",pos:"24",pn:"901 111 271 00",qty:6,note:"On a stud through the drilled lug. Spring washer #23. The stud is the BM 8×35 family (position 15); the qty-22 line is the hex studs only"}],description:"Three cap nuts on studs through the drilled lugs of each lower valve cover. The stud is threaded into a boss on the cam housing; the lug and that boss meet as a seated joint. Spring washer N 012 241 8 (103-05 #23, B 8×15) under the nut."})),...wt(i=>({id:`chain-lid-nuts-${i}`,name:`Chain-housing lid centre nuts, ${i}`,count:i==="right"?2:1,step:"chain-covers",follows:`chain-housing-lid-${i}`,size:"M8 nut + spring washer",catalog:[{ill:"103-05",pos:"-",pn:"900 076 025 02",qty:3,note:"Hex nuts with spring washers N 012 241 8 on the long lid studs"}],description:"Nuts on long studs through the middle of the lid, clear of the chain and tensioner."})),...wt(i=>({id:`rail-bolts-${i}`,name:`Guide-rail bolts, ${i}`,count:4,step:"tensioners",follows:`chain-tensioner-${i}`,size:"M6 bolt + sealing ring (#4)",catalog:[{ill:i==="left"?"103-10":"103-15",pos:"3",pn:"901 105 226 03",qty:4,note:"Two through the idler-to-cam rail, one through each of the other two."}],description:"Four bolts, matching Kat 502 #3. Two pass through the idler-to-cam rail and one through each of the other rails, into bosses on the chain-housing back wall. Sealing rings 900 123 066 30 sit under the heads."})),...wt(i=>({id:`cam-flange-cover-screws-${i}`,name:`Cam-flange cover screws, ${i}`,count:3,step:"cam-keys",follows:`cam-flange-cover-${i}`,size:"M6×25 combination screw + spring washer",catalog:[{ill:i==="left"?"103-10":"103-15",pos:"32",pn:"N 012 226 5",qty:3,note:"Spring washer"},{ill:i==="left"?"103-10":"103-15",pos:"33",pn:"900 075 341 02",qty:3,note:"M6×25 combination screw"}],description:"Three M6×25 combination screws with spring washers through the cover lugs into the three-screw seat on the cam housing (Kat 502 p.70 / p.74, #32/#33)."})),{id:"oil-cooler-nuts",name:"Oil-cooler nuts",count:4,step:"oil-cooler",follows:"oil-cooler",size:"M8 nut + spring washer",catalog:[{ill:"104-00",pos:"5/9",pn:"900 076 025 02",qty:7,note:"4 of the 7 #5 nuts; spring washers #9 N 012 241 8 x4"}],description:"Four M8 nuts and spring washers on the cooler flange studs. The studs stand in the right-case pad."},{id:"distributor-nut",name:"Distributor hold-down nut",count:1,step:"distributor",follows:"distributor",size:"M8 nut + washer + spring washer",catalog:[{ill:"901-00",pos:"5-7",pn:"—",qty:1}],description:"Washer, spring washer and nut (901-00 #5–#7) on the case stud through the cast hold-down lug."},{id:"fan-nuts",name:"Fan to hub nuts",count:6,step:"fan",follows:"fan-impeller",size:"M6 nut + spring washer",catalog:[{ill:"105-00",pos:"4/5",pn:"—",qty:6}],description:"Six nuts holding the fan wheel on the hub extension."},{id:"shroud-screws",name:"Shroud lip screws",count:10,step:"shroud",follows:"upper-air-guide",size:"M6 combination screw",catalog:[{ill:"105-05",pos:"10",pn:"—",qty:10}],description:"Five screws per side along the shroud skirt lips."},{id:"shroud-end-screws",name:"Shroud end-plate screws",count:8,step:"shroud",follows:"upper-air-guide",size:"M6 combination screw + washer",catalog:[{ill:"105-05",pos:"11",pn:"—",qty:8}],description:"Screws along the flywheel-end plate of the shroud."},{id:"shroud-socket-screws",name:"Hot-air socket tapping screws",count:4,step:"shroud",follows:"upper-air-guide",size:"Hex tapping screw",catalog:[{ill:"105-05",pos:"12",pn:"—",qty:4}],description:"Four tapping screws holding the hot-air socket."},{id:"shroud-collar-bolts-a",name:"Shroud collar bolts (inner)",count:2,step:"fan",follows:"fan-housing",size:"M6 bolt + washer",catalog:[{ill:"105-05",pos:"-",pn:"900 075 057 02",qty:2}],description:"Bolts through the shroud collar tabs into the fan-housing front lip."},{id:"shroud-collar-bolts-b",name:"Shroud collar bolts (outer)",count:2,step:"fan",follows:"fan-housing",size:"M6 bolt + washer",catalog:[{ill:"105-05",pos:"-",pn:"900 075 014 02",qty:2}],description:"Outer pair of collar bolts."},{id:"airbox-strut-nuts",name:"Air-cleaner strut nuts",count:4,step:"air-cleaner",follows:"air-cleaner-lid",size:"M8 nut + spring washer",catalog:[{ill:"106-00",pos:"23/24",pn:"—",qty:4}],description:"Nuts holding the air-cleaner struts on the air distributor."},{id:"wur-screws",name:"Warm-up regulator screws",count:2,step:"cis",follows:"warm-up-regulator",size:"M6 pan-head screw + spring washer",catalog:[{ill:"107-10",pos:"55/56",pn:"—",qty:2}],description:"Two screws holding the warm-up regulator on the left case half."},{id:"case-right-bolt",name:"Crankcase hex bolt (right)",count:1,step:"bearings",follows:"main-bearings",size:"M8 hex bolt",catalog:[{ill:"101-10",pos:"11",pn:"—",qty:1}],description:"Single hex bolt in the right half top (position E)."},{id:"case-right-nut",name:"Crankcase lock nut (right)",count:1,step:"bearings",follows:"main-bearings",size:"M8 lock nut + washer",catalog:[{ill:"101-10",pos:"20/21",pn:"—",qty:1}],description:"Lock nut and washer on a right-half stud (position E)."},{id:"case-m10-nut",name:"Crankcase M10 nut (left)",count:1,step:"externals",follows:"sump-plate",size:"M10 nut + spring washer",catalog:[{ill:"101-05",pos:"22/23",pn:"—",qty:1}],description:"M10 nut and spring washer on the left-half M10 stud under the case (position E)."}];Object.fromEntries(Lo.map(i=>[i.id,i]));const B=(i,e,t,n,s,r,a,o,l)=>({id:i,name:e,count:t,step:n,follows:s,hosts:r,size:a,description:o,catalog:l}),jn="catalytic-converter",yt=i=>[i("right","R"),i("left","L")],Do=[...yt(i=>B(`cam-key-${i}`,`Camshaft Woodruff key (half-moon), ${i}`,1,"cam-keys",`camshaft-${i}`,[`camshaft-${i}`,`cam-flange-${i}`],"4 x 5 x 10 mm Woodruff","Half-moon key sitting in the keyway milled into the cam nose; it locates the sprocket flange. It can only come out once the nut, sprocket and flange are off.")),...yt(i=>B(`cam-pin-${i}`,`Sprocket dowel pin, ${i}`,1,"cam-sprockets",`cam-sprocket-${i}`,[`cam-flange-${i}`,`cam-sprocket-${i}`],"Ø6 × 14 straight pin","Straight pin (#39, 900 243 001 00) through the one sprocket hole that lines up with a flange-rim scallop. The tail sits in that scallop and the head stands 2 mm proud of the sprocket web. It comes off with the sprocket.")),...yt(i=>B(`cam-shim-${i}`,`Sprocket alignment shim, ${i}`,1,"cam-keys",`cam-flange-${i}`,[`camshaft-${i}`,`cam-flange-${i}`,`cam-thrust-washer-${i}`],"0.6 mm shim","Alignment shim (#35, as required) between the thrust washer and the flange. The 0.6 mm sheet inverts under the 1 mm collision erosion, so those three neighbours are hosts.")),...yt(i=>B(`cam-thrust-washer-${i}`,`Camshaft thrust washer, ${i}`,1,"cam-keys",`camshaft-${i}`,[`camshaft-${i}`],"Thrust washer","Thrust washer (#34) on the cam nose, inboard of the shim and outboard of the chain-end cover.")),...yt(i=>B(`idler-circlip-${i}`,`Idler-arm circlip, ${i}`,1,"tensioners",`chain-tensioner-${i}`,[`chain-tensioner-${i}`,`chain-housing-${i}`],"15 x 1 circlip","Circlip (#9) retaining the idler arm on its shaft.")),...yt(i=>B(`idler-sleeve-${i}`,`Idler-arm tensioning sleeve, ${i}`,1,"tensioners",`chain-tensioner-${i}`,[`chain-tensioner-${i}`],"3 x 22 roll pin","Tensioning sleeve (#8) locating the idler-arm shaft in the chain housing.")),...yt(i=>B(`chain-housing-gasket-${i}`,`Chain-housing gasket, ${i}`,1,"chain-housings",`chain-housing-${i}`,[`chain-housing-${i}`,"crankcase-right","crankcase-left",`cam-housing-${i}`,`chain-housing-nuts-${i}`,`chain-end-nuts-${i}`],"0.5 mm gasket","Gasket (#5) between the chain housing and the crankcase face.")),...yt(i=>B(`chain-lid-gasket-${i}`,`Chain-housing lid gasket, ${i}`,1,"tensioners",`chain-housing-lid-${i}`,[`chain-housing-${i}`,`chain-housing-lid-${i}`,`chain-cover-nuts-${i}`,`chain-lid-nuts-${i}`],"paper gasket","Timing-cover gasket (#8 left / #9 right). Stays seated on the flange when the cover comes off, then lifts with the tensioners.")),...yt(i=>B(`chain-lid-plug-${i}`,`Chain-housing lid screw plug, ${i}`,1,"chain-covers",`chain-housing-lid-${i}`,[`chain-housing-lid-${i}`],"M16 screw plug + sealing ring","Inspection screw plug with sealing ring in the lid.")),...yt(i=>B(`chain-lid-plug2-${i}`,`Chain-housing lid screw plug (small), ${i}`,1,"chain-covers",`chain-housing-lid-${i}`,[`chain-housing-lid-${i}`],"Screw plug",'Second, smaller screw plug in the chain-housing lid (103-05 "-" N 016 155 4).')),...yt(i=>B(`cam-housing-plug-${i}`,`Cam-housing screw plug, ${i}`,1,"camshafts",`camshaft-${i}`,[`cam-housing-${i}`],"Screw plug + sealing ring","Oil-gallery screw plug (103-05 #26) in the outer flank of the cam housing (E position).")),...yt(i=>B(`chain-case-plug-${i}`,`Chain-housing expansion plug, ${i}`,1,"chain-housings",`chain-housing-${i}`,[`chain-housing-${i}`],"Ø15 expansion plug","Expansion plug (#10) in the chain-housing casting.")),...["upper","lower"].flatMap(i=>yt(e=>B(`valve-cover-gasket-${i}-${e}`,`Valve-cover gasket, ${i} ${e}`,1,"valve-covers",`valve-cover-${i}-${e}`,[`valve-cover-${i}-${e}`,`cam-housing-${e}`,`valve-cover-nuts-${i}-${e}`,...i==="lower"?[`valve-cover-special-${e}`]:[]],"Cork/rubber gasket",`Gasket under the ${i} valve cover (#${i==="upper"?18:20}).`))),...yt(i=>B(`cam-end-cover-${i}`,`Cam-housing end cover, ${i}`,1,"camshafts",`camshaft-${i}`,[`cam-housing-${i}`],"Pressed lid","Lid (#16) closing the flywheel end of the cam bore.")),...yt(i=>B(`cam-splash-tube-${i}`,`Oil splash tube, ${i}`,1,"camshafts",`camshaft-${i}`,[`cam-housing-${i}`],"Perforated tube","Oil splash tube spraying the cam lobes and rockers. Clear of the rockers, the cam and the valves; mounted in the housing.")),...yt(i=>B(`cam-housing-stoppers-${i}`,`Cam-housing stoppers, ${i}`,2,"camshafts",`camshaft-${i}`,[`cam-housing-${i}`],"Press-in plug","Gallery stoppers in the cam-housing end face.")),...yt(i=>B(`cam-oil-banjo-${i}`,`Cam-housing oil feed (banjo bolt, intermediate piece, plug), ${i}`,1,"camshafts",`camshaft-${i}`,[`cam-housing-${i}`],"Banjo bolt + 4 sealing rings","Oil feed into the cam housing: banjo bolt (#29), intermediate piece (#27), screw plug (#26) and four sealing rings (#28).")),B("cam-temp-switch","Temperature switch (left cam housing)",1,"camshafts","camshaft-left",["cam-housing-left"],"Switch + sealing ring","Temperature switch (#30) with sealing ring (#31)."),B("ishaft-bearings","Intermediate-shaft bearings",2,"int-shaft","intermediate-shaft",["intermediate-shaft","crankcase-right","crankcase-left"],"Plain bearing","Plain bearings (#47) at the two intermediate-shaft journals, in the case saddles."),B("ishaft-thrust","Intermediate-shaft thrust bearings",2,"int-shaft","intermediate-shaft",["intermediate-shaft","crankcase-right","crankcase-left","ishaft-bearings"],"Thrust washer","Thrust bearings (#46) either side of the pulley-end journal."),B("ishaft-circlips","Intermediate-shaft circlips",4,"int-shaft","intermediate-shaft",["intermediate-shaft","ishaft-bearings","ishaft-thrust","crankcase-right","crankcase-left"],"Circlip","Circlips (#44 x2, #45, #49) locating the bearings and thrust washers on the shaft (E positions)."),B("ishaft-stopper","Intermediate-shaft stopper",1,"int-shaft","intermediate-shaft",["crankcase-right","crankcase-left","ishaft-thrust"],"Pin","Stopper (#48) locating the thrust bearing in the case (E position)."),B("crank-key","Crankshaft Woodruff key",1,"crank-key","crankshaft",["crankshaft","crankcase-right","crankcase-left"],"5 x 7.5 x 19 Woodruff","Half-moon key (#7) in the crank-nose keyway. The hub slot stops at the hub rim. The 35 T ring is notched through on the key, which clears the tooth-gap root. crank-gears is not a host, so that pair is not an allowlisted joint."),B("crank-gear-ring","Intermediate ring",1,"crank-nose","crankshaft",["crankshaft","crank-gears","crank-key","crankcase-right","crankcase-left"],"Spacer ring","Intermediate ring (#9) between the timing gear and the distributor drive wheel."),B("crank-circlip","Crank-nose circlip",1,"crank-nose","crankshaft",["crankshaft"],"Circlip","Circlip (#11) in the groove ahead of the distributor drive wheel. It comes off first."),B("pulley-pin","Pulley locating pin",1,"pulley","crank-pulley",["crankshaft","crank-pulley"],"Straight pin","Straight pin (#25) locating the pulley on the crank nose."),B("crank-pilot-bush","Pilot bush",1,"crank","crankshaft",["crankshaft","crankcase-right","crankcase-left"],"Bronze bush","Gearbox input-shaft pilot bush (#3) in the crank flange."),B("flywheel-seal","Flywheel radial seal",1,"flywheel","flywheel",["flywheel"],"30 x 50 x 10","Radial sealing ring (#27) in the flywheel centre bore."),B("flywheel-oring","Flywheel O-ring",1,"flywheel","flywheel",["flywheel","crankshaft"],"51 x 4.5 O-ring","O-ring (#26) between the crank flange spigot and the flywheel."),B("crank-seal-rear","Crankshaft seal, flywheel end",1,"crank","crankshaft",["crankcase-right","crankcase-left","crankshaft","main-bearings"],"Radial seal","Radial sealing ring (101-10 #17) in the case at the flywheel end."),B("case-dowels","Crankcase dowel sleeves",4,"split","crankcase-left",["crankcase-right","crankcase-left"],"Dowel sleeve","Dowel sleeves (101-05 #15, 101-10 #19) locating the case halves."),B("case-roll-pin","Crankcase roll pin",1,"split","crankcase-left",["crankcase-right","crankcase-left"],"8 x 16 roll pin","Roll pin (101-10 #18)."),B("spray-jets","Piston-cooling spray jets",6,"bearings","main-bearings",["crankcase-right","crankcase-left"],"Spray jet","Oil spray jets (3 per half) aimed at the piston crowns."),B("relief-plugs","Pressure-relief valve screw plugs",2,"externals","sump-plate",["crankcase-right","crankcase-left"],"Screw plug + sealing ring","Screw plugs with sealing rings closing the pressure-relief and safety valve bores (L #29/#30, R #31/#32)."),B("relief-pistons","Pressure-relief valve pistons and springs",2,"externals","sump-plate",["crankcase-right","crankcase-left","relief-plugs"],"Piston + spring","Valve pistons and compression springs (L #27/#28, R #29/#30), inside their bores."),B("case-oil-fittings","Oil-line fittings on the case",2,"externals","sump-plate",["crankcase-right","crankcase-left"],"Screw socket / cutting ring / union nut","Oil-line connections on the case (L #31-#33, R #33/#34)."),B("case-connection-left","Connection piece, left case",1,"externals","sump-plate",["crankcase-left"],"Connection + sealing ring","Connection piece with sealing ring (101-05 #18/#19)."),B("oil-temp-sensor","Oil temperature sender",1,"externals","sump-plate",["crankcase-right"],"M14 sender + ring","Remote temperature sensor (101-10 #28) with sealing ring (#22)."),B("oil-pressure-sender","Oil pressure transmitter",1,"externals","breather-lid",["crankcase-right"],"Transmitter + reducing socket","Pressure transmitter (#45) on its reducing socket (#44) with sealing rings (#43, #46)."),B("oil-pressure-switch","Oil pressure switch",1,"externals","breather-lid",["crankcase-right"],"Switch","Oil pressure warning switch (#47)."),B("oil-pressure-fitting","Oil connection piece and screw socket",1,"externals","breather-lid",["crankcase-right"],"Connection + 2 rings","Connection piece (#48), sealing rings (#49) and screw socket (#50)."),B("thermostat-oring","Oil thermostat O-ring",1,"externals","oil-thermostat",["oil-thermostat","crankcase-right"],"O-ring","O-ring (101-10 #38) under the thermostat."),B("sump-drain-ring","Drain plug sealing ring",1,"externals","sump-plate",["sump-plate"],"A14 ring","Sealing ring (101-05 #42) under the drain plug."),B("case-through-orings","Through-bolt O-rings",24,"split","crankcase-left",["crankcase-right","crankcase-left","case-through-bolts","case-through-nuts","case-through-stud-nut"],"O-ring","O-rings under the through-bolt washers (101-05 #24, 101-10 #26)."),B("oil-return-tubes","Oil return tubes with O-rings",4,"cylinders","cylinder-2",["crankcase-right","crankcase-left","cylinder-1","cylinder-2","cylinder-3","cylinder-4","cylinder-5","cylinder-6","head-1","head-2","head-3","head-4","head-5","head-6","cam-housing-right","cam-housing-left"],"Tube + 2 O-rings","Oil return tubes (101-05 #16) from the cam housings to the case, each with two round seals (#17)."),B("oil-pump-seals","Oil-pump sealing rings",4,"int-shaft","oil-pump",["oil-pump","crankcase-right","crankcase-left","intermediate-shaft"],"O-rings","Pump sealing rings: 104-00 #2 ×1 (999 704 173 50) and #3 ×2 (999 704 172 50), plus the 101-10 #24 ring. The other three 104-00 rings sit on the cooler."),B("oil-cooler-seals","Oil-cooler upper seals",2,"externals","crankcase-right",["oil-cooler","crankcase-right"],"17 × 22 mm","Two 999 704 172 50 sealing rings (104-00 #3, OD 22, ID 17) on the upper flange ports."),B("oil-cooler-seal-riser","Oil-cooler lower-port seal",1,"externals","crankcase-right",["oil-cooler","crankcase-right"],"19 × 26 mm","One 999 704 173 50 sealing ring (104-00 #2, OD 26, ID 19) on the lower flange port."),B("cyl-base-gaskets","Cylinder base gaskets",6,"cylinders","cylinder-2",["crankcase-right","crankcase-left","cylinder-1","cylinder-2","cylinder-3","cylinder-4","cylinder-5","cylinder-6"],"0.25 mm","Base gaskets (102-05 #5)."),B("head-seals","Head sealing rings (Ce-seal)",6,"cylinders","cylinder-2",["cylinder-1","cylinder-2","cylinder-3","cylinder-4","cylinder-5","cylinder-6","head-1","head-2","head-3","head-4","head-5","head-6"],"Ce-seal","Sealing ring (102-05 #6) on the cylinder top spigot; no head gasket."),B("head-dowels","Head to cam-housing dowel pins",12,"heads","cam-housing-right",["head-1","head-2","head-3","head-4","head-5","head-6","cam-housing-right","cam-housing-left"],"Straight pin","Straight pins (103-00 #8) locating each head on the cam housing."),B("exhaust-gaskets","Exhaust port gaskets",6,"heat-exchangers","heat-exchanger-right",["head-1","head-2","head-3","head-4","head-5","head-6","heat-exchanger-right","heat-exchanger-left"],"Port gasket","Gaskets (202-00 #31) at each exhaust port."),B("intake-gaskets","Intake flange gaskets",6,"intake","plenum",[],"Flange gasket","Gaskets (106-00 #7) under the intake pipes. Seated between the head face and the runner flange; coincident faces only."),B("intake-boots","Intake rubber sleeves",6,"intake","plenum",[],"Rubber sleeve","Rubber sleeves (106-00 #10) joining the intake pipes to the air distributor. The bore is the stub diameter; the rubber is stretched on."),B("intake-boot-clamps","Intake sleeve hose clamps",12,"intake","plenum",[],"Hose clamp","Hose clamps (106-00 #11), two per sleeve. Band stands 0.2 mm off the rubber."),...["a","b","c"].map(i=>B(`injector-orings-${i}`,`Injector O-rings (${i==="a"?"106-00 #29":i==="b"?"106-00 #30":"107-10 #22"})`,6,"cis","injector-1",[],"O-ring","Injector sealing O-rings, one per injector. The ring sits on the Ø12 body.")),B("distributor-oring","Distributor O-ring",1,"distributor","distributor",["distributor","crankcase-left"],"O-ring","O-ring (901-00 #4) on the distributor shank."),B("ignition-lead-holders","Ignition cable holders",4,"distributor","distributor",["upper-air-guide"],"Cable holder","Cable holders (901-00 #22) for the ignition leads on the shroud."),B("shroud-speed-nuts","Shroud speed nuts",5,"shroud","upper-air-guide",["upper-air-guide","shroud-screws"],"Speed nut","Speed nuts (105-05 #2) under the right-hand shroud lip screws."),B("shroud-cover-plate","Shroud cover plate",1,"shroud","upper-air-guide",["upper-air-guide"],"Cover plate","Cover plate (105-05 #6) over the shroud roof opening."),B("shroud-stopper","Shroud stopper",1,"shroud","upper-air-guide",["upper-air-guide"],"Rubber stopper","Rubber stopper (105-05 #9) plugging a spare hole in the shroud roof."),B("alternator-strap","Alternator ground strap",1,"fan","alternator",["alternator","fan-housing"],"Braided strap","Ground strap from the alternator to the fan housing (902-05)."),B("cold-start-valve","Cold-start valve",1,"intake","plenum",[],"Start valve + intermediate piece + 2 O-rings + 2 screws","Cold-start valve (107-10 #30-#35) on the flywheel end of the air distributor. The intermediate piece 911 110 264 00 (#32) is the machined collar between the flange and the valve body."),B("aux-air-valve","Auxiliary air regulator",1,"intake","plenum",[],"911 606 102 04","US auxiliary air regulator 911 606 102 04 (107-10 #36, Kat 502 p110; not the RoW 911 606 102 01) with screws #37/#38, on the flywheel end face. Rectangular Bosch body, barbs about Ø18."),B("additional-air-valve","Additional air valve",1,"intake","plenum",[],"911 110 273 00","Additional air valve 911 110 273 00 (107-10 #39, tags -80) with support #40 and spring washers #41. The later 911 110 273 01 (81-) is not used."),B("aux-air-plumbing","Auxiliary air hoses and pipes",1,"intake","plenum",[],"Hose line, pipeline, connecting pipe, clamps","Hose line (#43) from the air-flow meter is about Ø25 (clamps S 25/9). The lower pipe into the manifold is Ø16, because the shroud gap will not take Ø25. Pipeline (#46), connecting pipe (#47) and the seven clamps."),B("vacuum-limiter","Vacuum limiter",1,"intake","plenum",[],"Limiter + sleeve + bolt","Vacuum limiter (107-10 #7-#10) on the distributor top. Base coincident with the box."),B("vacuum-fittings","Vacuum T-piece and clamps",1,"intake","plenum",[],"T-piece, reducing socket, clamps","T-piece 999 137 004 40 (#14) is a plain moulded three-port fitting, 22 mm across: manifold, limiter, and the barb up to thermo valve 17A. All three barbs are the full barb OD. No fourth branch. The thermo hose is 107-10 #13, 245 mm (N 020 353 5, 3.5×2), a direct run from 17A to that T through the meter waist. #13A is 30 mm, #13B is 370 mm and #16 is 40 mm of 8×14; none of those is this cut. The manifold hose is one run from the plenum nipple to this T. There is no splice. Reducing socket 930 110 273 02 (#17), thermo valve (illustration 17A, not a text line) and the hose pieces in three sizes. Clamps #12 and #15 sit on the hose, over the barb."),B("airbox-clamps","Air-guide hose clamps",2,"air-cleaner","air-cleaner-lid",[],"S 131/9 and S 85/9","Hose clamps (107-10 #19 S 131/9 on the meter mouth, #20 S 85/9 on the throttle mouth) of the air guide 930 110 358 05."),B("afm-screws","Air-flow meter flange screws",6,"cis","mixture-control-unit",[],"M6×25 + spring + washer","Six spring-loaded pan-head screws (107-10 #1–#3, 900 067 089 02, spring 911 110 364 00, washer 6.4) around the air-flow-meter flange."),B("throttle-housing","Throttle housing (flap nozzle)",1,"intake","plenum",[],"930 110 248 02 + O-ring 67.5×4","Separate flap housing (107-10 #4, 930 110 248 02 for 930.04) on the pulley face of the air distributor, with return spring #5, O-ring #6 67.5×4 and four M6×35 screws. Two nipples are cast into one boss on the left of the barrel, the pair drawn side by side on Kat 502 p.177 (202-05): parallel, 11 mm apart, both axis −Y. One is the EGR #15 source Bottom End already hoses. The other is TEE_AIR_INJ, the inferred seat for 108-00 #31. Page 141 does not draw that far end. Neither nipple is a separate catalogue part."),B("air-guide","Air guide boot",1,"intake","plenum",[],"930 110 358 05","Corrugated boot (107-10 #18) from the air-flow meter (mouth Ø131, E from S 131/9) to the throttle inlet (Ø85, E from S 85/9)."),B("injection-banjos","Injection-line banjo bolts",6,"cis","mixture-control-unit",[],"Banjo bolt","Banjo bolts (107-10 #25) on the fuel-distributor outlet towers. The towers stand in a ring (Ø76, E). Stubs leave radially."),B("injection-line-rings","Injection-line sealing rings",8,"cis","mixture-control-unit",[],"A 8×11.5","Sealing rings (107-10 #24, A 8×11.5), both sides of the eyes for cylinders 2, 3, 5 and 6. The text lists eight; the drawing shows twelve. Cylinders 1 and 4 carry the same rings on the distributor."),B("injection-line-bracket","Injection-line bracket and clamp",1,"cis","mixture-control-unit",[],"Bracket, clamp, nut, spring washer","Angle bracket (#26), U-clamp (#27), nut (#28) and spring washer (#29) on the plenum lid. The 108-10 blower clamps are parked beside it; the blower is not modelled."),B("wur-lines","Warm-up regulator line and banjos",1,"cis","warm-up-regulator",[],"Line #51, 3 banjos, 6 rings","Union-nut line #51 from the distributor screw socket to the warm-up connection piece, and the three banjo bolts #59 (distributor cold-start, cold-start valve, warm-up return) with six A 8×11.5 rings #60."),B("throttle-linkage","Throttle linkage",1,"intake","plenum",[],"Bracket, levers, pull rod, spring","Bracket (#64), bearing sleeves (#65), levers, pull rod (#72) and return spring (#73) on the throttle-housing lever. Plate coincident with the lever top."),B("airbox-straps","Air-cleaner restraining straps",2,"air-cleaner","air-cleaner-lid",[],"Strap + support + screw","Restraining straps (106-00 #15), supports (#16), tapping screws (#17)."),B("airbox-fittings","Air-cleaner gasket, plug and hose fittings",1,"air-cleaner","air-cleaner-lid",[],"Gasket, stopper, plug, union, hose connection","Gasket (106-00 #26), stopper (#28), screw plug and sealing ring (#31/#32), union (#33), hose connection (#34), hose clamps (#36), spring washer (#23)."),B("muffler-hardware","Silencer gasket, screws and clamps",1,"muffler","muffler",["muffler"],"Gasket, 3 screws + lock nuts, 2 clamps","Gasket (202-00 #2), screws and lock nuts (#3/#4), clamps (#5) on the muffler inlet stubs."),B("heater-adapters","Heat-exchanger heater adapters",2,"heat-exchangers","heat-exchanger-right",["heat-exchanger-right","heat-exchanger-left","heater-hose"],"Adapter + clamp + bolt","Adapters (202-00 #27) with clamps (#28) and bolts."),B("heater-hose","Heater flexible pipe",1,"heat-exchangers","heat-exchanger-left",["heater-adapters","heat-exchanger-left",jn],"Flexible pipe + 2 hose clamps","Flexible pipe (#29) with hose clamps (#30)."),B("muffler-bracket","Silencer bracket",1,"muffler","muffler",["muffler",jn],"Bracket, 2 bolts, nuts, washers","Bracket (202-00 #34) with bolts (#38), nuts (#35), spring washers (#36) and washers (#37)."),B(jn,"Catalytic converter",1,"muffler","muffler",["muffler","muffler-bracket","heat-exchanger-right","heat-exchanger-left"],"Cylindrical catalytic converter","Catalytic converter 930 113 228 01 (202-00 #6 on 930/04). Cylindrical can with conical ends, in the front-muffler pocket. Exhaust line (#17), compensating socket (#18), gaskets (#13, #14, #23), screws and lock nuts (#15/#16), clamps (#19) and support washer (#22) are drawn on the can.",[{ill:"202-00",pos:"6",pn:"930 113 228 01",qty:1}]),...qb()];Object.fromEntries(Do.map(i=>[i.id,i]));const ai=i=>i==="left"?"103-10":"103-15";function xc(i){var r;const e=i.endsWith("-left")?"left":"right",t=i.replace(/-(left|right)$/,"").replace(/-(upper|lower)$/,""),n={"cam-key":[ai(e),"37"],"cam-pin":[ai(e),"39"],"cam-shim":[ai(e),"35"],"cam-thrust-washer":[ai(e),"34"],"rail-bolt-seals":[ai(e),"4"],"idler-circlip":[ai(e),"9"],"chain-lid-plug2":["103-05","-"],"cam-housing-plug":["103-05","26"],"ishaft-bearings":["103-15","47"],"ishaft-thrust":["103-15","46"],"ishaft-circlips":["103-15","44"],"ishaft-stopper":["103-15","48"],"idler-sleeve":[ai(e),"8"],"chain-housing-gasket":["103-05","5"],"chain-lid-gasket":["103-05",e==="left"?"8":"9"],"chain-lid-plug":["103-05","-"],"chain-case-plug":["103-05","10"],"valve-cover-gasket":["103-05",i.includes("upper")?"18":"20"],"cam-end-cover":["103-05","16"],"cam-splash-tube":["103-05","-"],"cam-housing-stoppers":["103-05","-"],"cam-oil-banjo":["103-05","29"],"cam-temp-switch":["103-05","30"],"crank-key":["102-00","7"],"crank-gear-ring":["102-00","9"],"crank-circlip":["102-00","11"],"pulley-pin":["102-00","25"],"crank-pilot-bush":["102-00","3"],"flywheel-seal":["102-00","27"],"flywheel-oring":["102-00","26"],"crank-seal-rear":["101-10","17"],"case-dowels":["101-05","15"],"case-roll-pin":["101-10","18"],"spray-jets":["101-05","-"],"relief-plugs":["101-05","30"],"relief-pistons":["101-05","27"],"case-oil-fittings":["101-05","31"],"case-connection":["101-05","18"],"oil-temp-sensor":["101-10","28"],"oil-pressure-sender":["101-10","45"],"oil-pressure-switch":["101-10","47"],"oil-pressure-fitting":["101-10","48"],"thermostat-oring":["101-10","38"],"sump-drain-ring":["101-05","42"],"case-through-orings":["101-05","24"],"oil-return-tubes":["101-05","16"],"oil-pump-seals":["104-00","2"],"oil-cooler-seals":["104-00","3"],"oil-cooler-seal-riser":["104-00","2"],"cyl-base-gaskets":["102-05","5"],"head-seals":["102-05","6"],"head-dowels":["103-00","8"],"exhaust-gaskets":["202-00","31"],"intake-gaskets":["106-00","7"],"intake-boots":["106-00","10"],"intake-boot-clamps":["106-00","11"],"injector-orings-a":["106-00","29"],"injector-orings-b":["106-00","30"],"injector-orings-c":["107-10","22"],"distributor-oring":["901-00","4"],"ignition-lead-holders":["901-00","22"],"shroud-speed-nuts":["105-05","2"],"shroud-cover-plate":["105-05","6"],"shroud-stopper":["105-05","9"],"alternator-strap":["902-05","-"],"cold-start-valve":["107-10","30"],"aux-air-valve":["107-10","36"],"additional-air-valve":["107-10","39"],"aux-air-plumbing":["107-10","43"],"vacuum-limiter":["107-10","7"],"afm-screws":["107-10","1"],"throttle-housing":["107-10","4"],"air-guide":["107-10","18"],"vacuum-fittings":["107-10","14"],"airbox-clamps":["107-10","19"],"injection-banjos":["107-10","25"],"injection-line-rings":["107-10","24"],"injection-line-bracket":["107-10","26"],"wur-lines":["107-10","59"],"throttle-linkage":["107-10","64"],"airbox-straps":["106-00","15"],"airbox-fittings":["106-00","26"],"muffler-hardware":["202-00","2"],"heater-adapters":["202-00","27"],"heater-hose":["202-00","29"],"muffler-bracket":["202-00","34"],"pre-muffler":["202-00","6"],"catalytic-converter":["202-00","6"]},s=(r=n[t])!=null?r:n[t.replace(/-left$|-right$/,"")];if(!s)throw new Error(`smallRef: ${i}`);return s}function qb(){const i=(t,n,s,r,a)=>[{ill:t,pos:n,pn:s,qty:r,note:a}],e=[B("breather-gasket","Breather cover gasket",1,"externals","breather-lid",["breather-lid","crankcase-left"],"Gasket","Gasket 930 107 791 00 (101-05 #36) seated between the breather lid and the left case top.",i("101-05","36","930 107 791 00",1)),B("ishaft-cover-gasket","Intermediate-shaft cover gasket",1,"externals","ishaft-cover",["ishaft-cover","crankcase-right","ishaft-cover-nuts"],"Gasket","Gasket 930 105 198 01 (101-10 #40) seated on the pulley-end face under the intermediate-shaft cover. Applies up to engine 63D 4069.",i("101-10","40","930 105 198 01",1)),B("cyl-baffle-14","Cylinder baffle plate",4,"cylinders","cylinder-1",[],"Baffle plate","Baffle plates 930 106 023 00 (105-10 #14), one in each gap between barrels, under the fin square.",i("105-10","14","930 106 023 00",4)),B("cyl-baffle-15","Cylinder baffle plate, pulley end",2,"cylinders","cylinder-1",[],"Baffle plate","Baffle plates 930 106 221 00 (105-10 #15) at the pulley end of cylinders 1 and 4.",i("105-10","15","930 106 221 00",2)),B("cyl-baffle-16","Cylinder baffle plate, flywheel end",2,"cylinders","cylinder-1",[],"Baffle plate","Baffle plates 930 106 222 00 (105-10 #16) at the flywheel end of cylinders 3 and 6.",i("105-10","16","930 106 222 00",2)),B("cyl-baffle-spring","Cylinder baffle leaf spring",6,"cylinders","cylinder-1",[],"Leaf spring","Leaf springs 930 106 228 00 (105-10 #17), one per cylinder, outboard of the lower fin.",i("105-10","17","930 106 228 00",6)),B("cyl-cover-plate","Cylinder cover plate",2,"cylinders","cylinder-1",[],"Cover plate","Cover plates 930 106 301 00 (105-10 #18), one under each bank.",i("105-10","18","930 106 301 00",2)),B("heater-dist-piece","Heater distributing piece",1,"shroud","upper-air-guide",["heater-blower"],"Distributing piece","Distributing piece 911 211 135 02 (108-10 #4) seated on the heater blower outlet.",i("108-10","4","911 211 135 02",1)),B("heater-socket","Hot-air socket",1,"shroud","upper-air-guide",[],"Socket","Hot-air socket 930 106 326 01 (108-10 #14) on the right of the fan housing.",i("108-10","14","930 106 326 01",1)),B("heater-hose-link","Heater blower hose",1,"shroud","upper-air-guide",["heater-blower","heater-socket"],"Hose","Hose 911 211 272 02 (108-10 #8) seated on the hot-air socket and the blower inlet.",i("108-10","8","911 211 272 02",1)),B("heater-hose-left","Heater hose to left exchanger",1,"shroud","upper-air-guide",["heater-dist-piece","heat-exchanger-left"],"Heater hose","Heater hose 901 211 195 00 (108-10 #10) clamped on the distributing piece and on the left exchanger fresh-air spigot.",i("108-10","10","901 211 195 00",1)),B("heater-hose-right","Heater hose to right exchanger",1,"shroud","upper-air-guide",["heater-dist-piece","heat-exchanger-right"],"Heater hose","Heater hose 911 211 522 00 (108-10 #13) clamped on the distributing piece and on the right exchanger fresh-air spigot.",i("108-10","13","911 211 522 00",1)),B("heater-hose-supports","Heater hose supports",2,"shroud","upper-air-guide",["heater-hose-left","heater-hose-right"],"Support","Hose supports 911 211 277 00 (108-10 #11) clipped around the two heater hoses.",i("108-10","11","911 211 277 00",2)),B("heater-clamp-sp","Heater blower clamp",1,"shroud","upper-air-guide",["heater-hose-link"],"Clamp","Worm-drive clamp (108-10 #3) on the blower hose.",i("108-10","3","999 512 244 02",1)),B("heater-clamp-band","Heater hose clamps",2,"shroud","upper-air-guide",["heater-hose-link"],"Hose clamp","Worm-drive clamps (108-10 #9) on the blower hose.",i("108-10","9","—",2)),B("heater-clamps","Heater hose clamps",6,"shroud","upper-air-guide",["heater-hose-left","heater-hose-right","heat-exchanger-left","heat-exchanger-right","heater-dist-piece"],"Hose clamp","Hose clamps (108-10 #12). Two clamp the hoses onto the exchanger spigots, two onto the distributing piece, two along the runs.",i("108-10","12","—",6)),B("heater-blower-hardware","Heater blower fasteners",1,"shroud","upper-air-guide",["heater-blower","heater-blower-support","heater-socket"],"Screws, nuts, washers","Tapping screws (108-10 #5) through the support arm and the blower foot where the arm laps the foot, plus hex nuts (#16) seated on the socket tab.",i("108-10","5","—",2,"Also #6/#7/#15/#16"))];return e.push(B("air-rubber","Air-pump rubber mounting",2,"belt","fan-pulley",["air-pump-bracket"],"Rubber mounting","Rubber mountings 911 113 121 00 (108-00 #2) pressed in the pump bracket feet.",i("108-00","2","911 113 121 00",2)),B("air-sleeve","Air-pump spacer sleeve",2,"belt","fan-pulley",["air-pump-bracket"],"Spacer sleeve","Spacer sleeves 911 113 122 00 (108-00 #3) pressed through the bracket feet, inside the rubber mountings.",i("108-00","3","911 113 122 00",2)),B("air-buffer","Air-pump bonded rubber buffer",2,"belt","fan-pulley",["air-retainer","air-pump-strap"],"Bonded rubber buffer","Bonded rubber buffers 930 110 194 00 (108-00 #13) pressed on the retaining clip, under the strap tab.",i("108-00","13","930 110 194 00",2)),B("air-hose-pump","Air-pump hose",1,"belt","fan-pulley",["air-pump","air-diverter"],"Hose","Hose 930 113 138 03 (108-00 #28) seated on the pump outlet and the diverter inlet.",i("108-00","28","930 113 138 03",1)),B("air-hose-valve","Air-pump hose to check valve",1,"belt","fan-pulley",["air-diverter","air-check-valve"],"Hose","Hose 930 113 137 01 (108-00 #29) seated on the diverter outlet and the check-valve inlet.",i("108-00","29","930 113 137 01",1)),B("air-hose-dump","Air-pump dump hose",1,"belt","fan-pulley",["air-diverter"],"Hose","Hose 930 113 139 02 (Kat 502 p.141, illustration 108-00 item 30). Short straight open sleeve, about 65 mm, OD 16, seated on the diverter dump nipple. No clamp on this hose.",i("108-00","30","930 113 139 02",1)),B("air-hose-vacuum","Air-pump vacuum hose",1,"belt","fan-pulley",[],"Hose 3.2 × 7","Vacuum hose 999 239 003 40 (Kat 502 p.141, 108-00 #31) is drawn as an L off the diverter upper nipple. The far end leaves the sheet and no T is listed. The seat is inferred from the second nipple of the pair on p.177 (202-05), cast into the throttle housing as TEE_AIR_INJ. The run in bottomAnc.ts is still the previous hardcoded path and does not end there.",i("108-00","31","999 239 003 40",1)),B("air-clamp-pump","Air-pump hose clamp",1,"belt","fan-pulley",["air-hose-pump","air-pump"],"Hose clamp","Worm-drive clamp 999 512 038 02 (108-00 #32) on the pump-hose spigot.",i("108-00","32","999 512 038 02",1)),B("air-clamp-valve","Air-pump hose clamp",1,"belt","fan-pulley",["air-hose-valve"],"Hose clamp","Worm-drive clamp PCG 512 237 02 (108-00 #32A) on the check-valve hose.",i("108-00","32A","PCG 512 237 02",1)),B("air-clamp-dump","Air-pump hose clamps",2,"belt","fan-pulley",["air-hose-pump","air-hose-valve","air-diverter"],"Hose clamp","Worm-drive clamps 999 512 296 02 (Kat 502 p.141, illustration 108-00 item 33, qty 2). Both are drawn on items 28 and 29: one on the pump hose at the diverter inlet, one on the check-valve hose at the diverter outlet.",i("108-00","33","999 512 296 02",2)),B("air-sealing-ring","Check-valve sealing ring",1,"belt","fan-pulley",["air-check-valve"],"A24 × 29","Sealing ring 900 123 060 30 (108-00 #21, A24×29) seated on the check-valve outlet face. Top End’s air tube screws up through it.",i("108-00","21","900 123 060 30",1)),B("air-check-gasket","Check-valve gasket",1,"belt","fan-pulley",["air-check-valve"],"Gasket","Gasket 911 113 146 00 (108-00 #27) seated between the check-valve hex and the body.",i("108-00","27","911 113 146 00",1)),B("air-pulley-screws","Air-pump pulley screws",4,"belt","fan-pulley",["air-pump-pulley"],"Pan-head screw","Pan-head screws 900 067 008 02 (108-00 #9) threaded into the pump pulley.",i("108-00","9","900 067 008 02",4)),B("air-pulley-washers","Air-pump pulley spring washers",4,"belt","fan-pulley",["air-pump-pulley","air-pulley-screws"],"Spring washer","Spring washers N 012 226 5 (108-00 #10) seated under the pulley screws.",i("108-00","10","N 012 226 5",4)),B("air-bracket-nuts","Air-pump bracket nuts",1,"belt","fan-pulley",["air-pump-bracket","air-sleeve"],"2 nuts, spring washers, washers","Two of the six hex nuts 900 076 025 02 (108-00 #5) and spring washers N 012 241 8 (#6), plus washers 900 151 008 02 and 911 113 162 00 (#4), threaded on the bracket feet.",i("108-00","4","900 151 008 02",1,"Pair with 911 113 162 00")),B("air-pump-fasteners","Air-pump pivot and strap fasteners",1,"belt","fan-pulley",["air-pump","air-pump-strap","air-retainer","air-buffer","air-pump-bracket","air-sleeve"],"Nuts, M8×120 pivot, strap bolt","Hex nuts (108-00 #5) threaded on the rubber buffers, the pivot screw 900 249 006 02 (#11) threaded through the bracket eye and sleeve, the strap bolt 900 075 085 02 (#15) threaded through the strap and the clip.",i("108-00","11","900 249 006 02",1)),B("air-diverter-nuts","Diverter-valve nuts",1,"belt","fan-pulley",["air-diverter-support","air-diverter"],"2 nuts + spring washers","Hex nuts 999 072 005 09 (108-00 #24) and spring washers N 012 226 5 (#25) threaded on the diverter support.",i("108-00","24","999 072 005 09",2))),e.push(B("air-inj-vac-cap","Air-injection vacuum cap",1,"intake","plenum",[],"Cap on TEE_AIR_INJ","Rubber cap on the TEE_AIR_INJ nipple cast into the throttle housing, fitted when the air-injection vacuum hose is off. One cup: a continuous outer cylinder closed by an end disc, with the bore on the 10-sided barb. That barb is bare: hose #31 is not drawn onto it here, so there is no clamp. The cup covers 5 mm of the 8 mm barb. Not a catalogue line.",[{ill:"107-10",pos:"—",pn:"—",note:"Closes TEE_AIR_INJ when emissions equipment is off"}])),e.push(B("egr-gasket","EGR gasket",1,"muffler","muffler",[],"Gasket","Gasket (202-05 #2) seated under the EGR valve. The catalogue row has no part number in the audit transcription.",i("202-05","2","—",1)),B("egr-seal","EGR sealing rubber",1,"muffler","muffler",["egr-valve"],"Sealing rubber","Sealing rubber (202-05 #12) seated on the EGR valve side port.",i("202-05","12","—",1)),B("egr-buffer","EGR buffer",1,"muffler","muffler",[],"Buffer","Buffer (202-05 #19) under the EGR bracket.",i("202-05","19","—",1)),B("egr-tee","EGR vacuum T-piece",1,"muffler","muffler",["egr-valve"],"T-piece","T-piece 999 137 004 40 (202-05 #18, qty 1) seated on the EGR vacuum nipple. This is the only one of that part number. The manifold hose has no splice. Hoses are not tied into the CIS harness.",i("202-05","18","999 137 004 40",1)),B("egr-hose-short","EGR vacuum hose",1,"muffler","muffler",["egr-valve","egr-tee"],"Hose 40 mm","Hose 999 239 003 40 (202-05 #15), the short piece seated between the valve nipple and the T-piece. Same 3.2×7 hose as 108-00 #31.",i("202-05","15","999 239 003 40",1,"40 mm")),B("egr-hose-long","EGR vacuum hose",1,"muffler","muffler",["egr-tee"],"Hose 770 mm","Hose 999 239 003 40 (202-05 #16, 770 mm) seated on the T-piece. The throttle end follows THROTTLE_PORTED_VAC, now straight down off the paired boss, and slides 4 mm onto that nipple. Bottom End will re-end the run.",i("202-05","16","999 239 003 40",1,"770 mm")),B("egr-hose-return","EGR vacuum hose",1,"muffler","muffler",["egr-tee","egr-valve"],"Hose","One hose 999 239 003 40 (202-05 #17). Short arc from the tee's upper port back to the valve barb. The 465 mm note is the other piece.",i("202-05","17","999 239 003 40",1,"465 mm")),B("egr-hose-diverter","EGR vacuum hose",1,"muffler","muffler",["egr-tee","air-diverter"],"Hose 465 mm","One hose 999 239 003 40 (202-05 #17, 465 mm) from the tee's outboard port to the diverter vacuum nipple. Hidden with the air-injection group. The clear route is longer than 465 mm; the straight chord already meets the left case.",i("202-05","17","999 239 003 40",1,"465 mm")),B("egr-fasteners","EGR fasteners",1,"muffler","muffler",["egr-valve","egr-bracket"],"Bolts, nuts, washers, pressure screw","Nuts (202-05 #10) threaded on the valve flange and bolts (#4) threaded through the bracket.",i("202-05","4","—",2)),B("egr-tee-cap","EGR tee port cap",1,"muffler","muffler",[],"Rubber cap","Rubber cap on the tee's outboard port when the diverter hose is off. 202-05 lists no plug for that port. One cup: a continuous outer cylinder closed by an end disc. The bore follows the 10-sided barrel and sits about 5 mm on the tip.",[{ill:"202-05",pos:"—",pn:"—",note:"Not a catalogue line; closes the outboard tee port when emissions equipment is off"}])),e.push(B("cat-cover","Catalytic-converter heat shield",1,"muffler","muffler",[jn],"Heat shield","Heat shield 930 113 233 01 (202-00 #7) seated under the catalytic converter.",i("202-00","7","930 113 233 01",1)),B("cat-cap","Catalytic-converter cap",1,"muffler","muffler",[jn],"Cap","Cap 930 113 153 00 (202-00 #8) threaded on the test-port boss.",i("202-00","8","930 113 153 00",1)),B("cat-plug","Catalytic-converter test-port plug",1,"muffler","muffler",[jn,"cat-cap"],"Plug + sealing ring","Screw plug (202-00 #8B) and sealing ring (#8A). The audit does not give part numbers; both are drawn on the cap.",i("202-00","8B","—",1)),B("cat-bracket","Catalytic-converter bracket",1,"muffler","muffler",[jn],"Retaining bracket","Retaining bracket 930 113 196 00 (202-00 #12) seated under the converter.",i("202-00","12","930 113 196 00",1)),B("cat-cover-fasteners","Catalytic-converter cover fasteners",1,"muffler","muffler",["cat-cover",jn],"8 nuts, bolts, washers","Eight hex bolts (202-00 #10) through the heat shield into the converter, with nuts (#9) and washers (#11). Part numbers are not in the audit transcription.",i("202-00","9","—",8))),e}const xh="air-injection",Ms="emissions",fa=(i,e)=>Array.from({length:e},(t,n)=>`${i}${n+1}`),yh=[{id:xh,label:"Emissions equipment",defaultOn:!1,members:["air-pump","air-pump-pulley","air-pump-belt","air-pump-bracket","air-pump-strap","air-retainer","air-check-valve","air-diverter","air-diverter-support","air-pump-cleaner","air-rubber","air-sleeve","air-buffer","air-hose-pump","air-hose-valve","air-hose-dump","air-hose-vacuum","egr-hose-diverter","air-clamp-pump","air-clamp-valve","air-clamp-dump","air-sealing-ring","air-check-gasket","air-pulley-screws","air-pulley-washers","air-bracket-nuts","air-pump-fasteners","air-diverter-nuts",...fa("air-union-",6),...fa("air-union-ring-",6),"air-tube-left","air-tube-right","air-tube-seal"],inverse:[...fa("air-port-plug-",6),"air-inj-vac-cap","egr-tee-cap"]}];function Xb(i){for(const e of yh){if(e.inverse.includes(i.id))return;if(i.group===e.id||e.members.includes(i.id))return e.id}return i.group}function Kb(i,e){const t=new Set(i.map(s=>s.id)),n=new Set;for(const s of yh)if(e.has(s.id))for(const a of s.inverse)t.has(a)&&n.add(a);else for(const a of i)s.inverse.includes(a.id)||(a.group===s.id||s.members.includes(a.id))&&n.add(a.id);return n}function Yb(i){return i?new Set([xh]):new Set}const Mh=Math.PI,ps=i=>Po(i)===1?[0,0,0]:[0,Mh,0],$b=[1,2,3,4,5,6],yc={1:"911 110 420 06",2:"911 110 470 06",3:"911 110 480 06",4:"911 110 440 06",5:"911 110 450 06",6:"911 110 490 06"};function Zb(){const i=[];for(const e of $b){const t=Po(e),n=Bb[e],{pinX:s,throwXY:r,rodAngle:a}=Hb(e,0);i.push({id:`conrod-${e}`,name:`Connecting rod, cyl. ${e}`,system:"crank",asset:"conrod",position:[r[0],r[1],n],rotation:[0,0,a],explode:[t*70,0,0],catalog:[{ill:"102-00",pos:"16",pn:"930 103 015 5x",qty:6,note:"Weight group 1-9 (633-714 g); last digit = group"},{ill:"102-00",pos:"18/19",pn:"914 103 171 00 / 901 103 173 00",qty:12,note:"Rod bolt / nut"},{ill:"102-00",pos:"20",pn:"930 103 148 00",qty:12,note:"Rod bearing shell, std."}],description:"Forged steel H-section rod with a split big end (bolted cap) and pressed-in bronze small-end bush. Rods are matched by weight group across the engine.",specs:{"Centre distance":"127 mm (est.; 127.8 often cited)","Big-end journal":"Ø53 mm","Small-end bush":"Ø22 mm pin",Material:"Forged steel"}}),i.push({id:`piston-${e}`,name:`Piston, cyl. ${e}`,system:"pistons",asset:"piston",position:[s,0,n],rotation:ps(e),explode:[t*170,0,0],catalog:[{ill:"102-05",pos:"1",pn:"930 103 962 03",qty:6,note:"Supplied as cylinder + piston set (Mahle, -80); Schmidt alt. 930 103 966 04"},{ill:"102-05",pos:"2",pn:"930 103 963 00",note:"Piston ring set"},{ill:"102-05",pos:"3/4",pn:"930 103 375 00 / N 012 278 1",note:"Pin / circlip C22"}],description:"Forged/cast light-alloy domed piston for 8.5:1 compression, three rings (two compression, one oil) and a floating wrist pin retained by circlips. Valve reliefs are machined into the dome.",specs:{Bore:"95.0 mm",Stroke:"70.4 mm",Compression:"8.5 : 1",Rings:"3",Pin:"Ø22 mm floating"}}),i.push({id:`cylinder-${e}`,name:`Cylinder ${e} (Nikasil)`,system:"pistons",asset:"cylinder",position:[Ob*t,0,n],rotation:ps(e),explode:[t*290,0,0],catalog:[{ill:"102-05",pos:"1",pn:"930 103 962 03",qty:6,note:"Matched to piston (size group)"},{ill:"102-05",pos:"5/6",pn:"930 104 194 02 / 930 104 317 00",note:"Base gasket 0.25 mm / head sealing ring"}],description:"Individual finned aluminium barrel with a Nikasil (nickel-silicon carbide) bore coating — new for the 3.0 engines. Each cylinder is clamped between crankcase and head by long head studs; no head gasket, just a sealing ring.",specs:{Bore:"95.0 mm",Material:"Al alloy, Nikasil bore",Fins:"Radial, ~15","Swept volume":"499 cc"}}),i.push({id:`head-${e}`,name:`Cylinder head ${e}`,system:"heads",asset:"cylinder-head",position:[_s*t,0,n],rotation:ps(e),explode:[t*400,0,0],catalog:[{ill:"103-00",pos:"1",pn:"930 104 019 05",qty:6,note:"Remark 78, model SC, with valves, ready for installation (1978 USA 930/04). No 1978 bare-head number; 029 08 is remark 79."}],description:"Individual single-cylinder cast aluminium head with a hemispherical chamber, two valves in a V, intake port on top and exhaust port below. The spark plug is threaded in an M14 bore from the chamber up to the cam-housing face, coaxial with the upper valve-cover hole. The exhaust flange is the port plate only.",specs:{Valves:"2 (1 in / 1 ex)","Intake valve":"Ø49 mm, 110.1 mm","Exhaust valve":"Ø41.5 mm, 108.4 mm","Valve angle":"25.5° in / 30.25° ex"}}),i.push({id:`valves-${e}`,name:`Valves & springs, cyl. ${e}`,system:"valvetrain",asset:`valve-set-${e}`,position:[_s*t,0,n],rotation:ps(e),explode:[t*470,0,0],catalog:[{ill:"103-00",pos:"9",pn:"930 105 409 13",note:"Intake valve. Model SC, blank remark (1978 USA 930/04). 409 01 is the other SC line."},{ill:"103-00",pos:"10",pn:"930 105 419 08",note:"Exhaust valve (sodium filled). Model SC, blank remark. 419 51 is the other SC line."},{ill:"103-00",pos:"13-15",pn:"901 105 901 50 / 901 105 421 03 / 901 105 417 00",note:"Spring set / retainer / collets"}],description:"Intake (Ø49 mm) and exhaust (Ø41.5 mm) valves with a directional outer spring, inner spring, stepped retainer and two three-bead keeper halves. The stem seal and keepers are the existing catalogue parts, reshaped. Clearance is the 0.10 mm gap at the rocker screw, cold. The mesh is built at the assembled crank, so a cylinder on overlap is off its seat.",specs:{"Valve clearance":"0.10 mm cold",Springs:"Dual, outer damper coils at the head","Stem Ø":"9 mm","Installed height":"34.5 mm (Bentley SC, not Dempsey)","Keeper grooves":"3"}});const[o,l,c]=Vb(),h=new R(t*o,l,t*c),u=new $t().setFromUnitVectors(new R(0,-1,0),h);u.multiply(new $t().setFromAxisAngle(new R(0,1,0),Wb(t)));const d=new ln().setFromQuaternion(u,"XYZ"),p=[d.x,d.y,d.z];i.push({id:`spark-plug-${e}`,name:`Spark plug, cyl. ${e}`,system:"ignition",asset:"spark-plug",position:[(_s+hr.x)*t,hr.y,n+_c*t],rotation:p,explode:[t*380,-220,0],catalog:[{ill:"901-00",pos:"16",pn:"999 170 170 90",qty:6,note:"Remark -79, model SC. Heat range 145 EA 0,8. 136 90 is the other -79 line; 055 90 and 165 90 are remark 80-."}],description:"Bosch plug 999 170 170 90, catalogue type line 145 EA 0,8, one per cylinder, entered through the upper valve cover. M14×1.25 thread, 19 mm reach, gasket seat, 20.8 mm hex, ribbed ceramic. The part origin is 0.75 mm piston-side of the centre electrode; the ground strap outer face is 0.75 mm past the origin. The mesh gap is 0.80 mm. Local −Y runs toward the terminal. The axis is SPARK_AXIS: 35.95° above horizontal, 36.79° off the cylinder axis.",specs:{Thread:"M14 x 1.25",Reach:"19 mm",Hex:"20.8 mm","Heat range":"145 EA 0,8",Gap:"0.8 mm","Terminal (plug-local)":`(0, ${jb}, 0)`}}),i.push({id:`spark-plug-connector-${e}`,name:`Spark plug connector, cyl. ${e}`,system:"ignition",asset:"spark-plug-connector",position:[(_s+hr.x)*t,hr.y,n+_c*t],rotation:p,explode:[t*440,-300,0],catalog:[{ill:"901-00",pos:"21",pn:"911 602 315 00",qty:6,note:"Blank remark and model (1978 USA 930/04). Straight tube, seal flange, 90° elbow."}],description:"Connector 911 602 315 00, one per cylinder, on the same datum and axis as the plug. A straight tube grips the terminal nut, a round seal flange seats in the upper-cover hole, and a 90° elbow leaves along plug-local +X. The elbow outlet is where the ignition lead enters.",specs:{Form:"Straight tube, seal flange, 90° elbow","Outlet (plug-local)":"+X"}}),i.push({id:`intake-runner-${e}`,name:`Intake pipe, cyl. ${e}`,system:"induction",asset:`intake-runner-${e}`,position:[ur.x*t,ur.y,n],rotation:ps(e),explode:[t*240,420,0],catalog:[{ill:"106-00",pos:String(e),pn:yc[e],note:e===6?"Cylinder 6, 930.04 US not California (Kat 502 p97, fig 106-00 #6, 911 110 490 06). California/Japan 911 110 420 06 is not used.":`Intake pipe, cylinder ${e}`},{ill:"106-00",pos:"10",pn:"928 110 158 01",note:"Rubber sleeve"}],description:`Cast aluminium intake pipe (Kat 502 p97, fig 106-00 #${e}, ${yc[e]}). Each cylinder has its own web.${e===3?" Two M8×20 studs stand on the side of this riser (drawn; no 3A line in the text extract).":""} A 32 mm rubber sleeve and two worm-drive clamps join the spigot to the distributor. The injector sits in a bored boss with a rubber seat sleeve.`,specs:{Material:"Cast Al","Port end":"Ø44 mm spigot",Sealing:"Rubber sleeve, 2 clamps"}});const g=[0,0,(t===1?-57:57)*(Mh/180)];i.push({id:`injector-${e}`,name:`Injection valve, cyl. ${e}`,system:"induction",asset:"injector",position:[(ur.x+vc.dx)*t,ur.y+vc.dy,n],rotation:g,explode:[t*300,480,0],catalog:[{ill:"107-10",pos:"21",pn:"911 110 225 01",qty:6}],description:"Bosch K-Jetronic continuous injection valve: opens at ~3.3 bar and sprays continuously into the intake port; quantity is metered by the fuel distributor, not by the nozzle.",specs:{Type:"Bosch CIS (mechanical)","Opening pressure":"~3.3 bar (typ.)"}})}return i}const Jb=i=>i===1?"right":"left";function Qb(){const i=[];for(const e of[1,-1]){const t=Jb(e),n=e===1?"103-15":"103-10",s=e===1?"1-3":"4-6";i.push({id:`cam-housing-${t}`,name:`Camshaft housing, ${t} (cyl. ${s})`,system:"heads",asset:`cam-housing-${t}`,explode:[e*520,0,0],catalog:[{ill:"103-05",pos:"13",pn:"930 105 021 00",qty:2,note:"Blank remark and model. Illustration model life 1978>>1983, covers 1978 USA 930/04."}],description:"Cast aluminium cam tower bolted across the three heads of one bank. One body, line-bored for the cam through four webs, with a rocker-shaft bore and spot face each side of every cylinder. Closed by upper and lower valve covers. The left housing is the mirror of the right.",specs:{Material:"Cast Al","Cam bore":"Ø47.1 mm, 4 webs (unverified)","Rocker bores":"Ø18 mm × 6 (unverified)","Rocker shafts":"6"}});for(const r of[!0,!1])i.push({id:`valve-cover-${r?"upper":"lower"}-${t}`,name:`Valve cover, ${r?"upper":"lower"} ${t}`,system:"heads",asset:`valve-cover-${r?"upper":"lower"}-${t}`,explode:[e*560,r?160:-160,0],catalog:[r?{ill:"103-05",pos:"17",pn:"901 105 115 03",qty:2,note:"Blank remark and model (1978 USA 930/04). Gasket #18 930 105 194 00, same."}:{ill:"103-05",pos:"19",pn:"930 105 116 00",qty:2,note:"Blank remark and model (1978 USA 930/04). 116 05 is the other line. Gasket #20 930 105 195 01, same."}],description:r?"Upper (intake-side) valve cover. Cylinders 2 and 3 use two round plug holes one cylinder pitch apart; cylinder 1 uses the half-round end scallop. The left cover is this casting turned about Y, so cylinders 5 and 4 use the holes and cylinder 6 uses the scallop. The lower cover has no plug holes.":"Lower (exhaust-side) ribbed valve cover sealing the rocker gallery. No plug holes.",specs:{Material:"Cast alloy",Fasteners:"Nuts on studs"}});i.push({id:`camshaft-${t}`,name:`Camshaft, ${t}`,system:"camdrive",asset:`camshaft-${t}`,explode:[e*640,60,0],catalog:[{ill:n,pos:"42",pn:e===1?"930 105 148 08":"930 105 147 08",qty:1,note:"SC grind, -81"}],description:"Chilled cast-iron camshaft with one intake and one exhaust lobe per cylinder, ground journals in the four housing webs, and a keyed nose for the existing Woodruff key, flange, thrust washer and M22 nut. Every lobe peak is under the journal radius so the cam slides in from the chain end. Driven at half crank speed.",specs:{Speed:"½ crank",Lobes:"6 (base circle + flank + nose)",Journals:"4 × Ø46.7 mm (unverified)","Lobe peak":"Ø45.4 mm, under the journal (unverified)"}}),i.push({id:`rockers-${t}`,name:`Rocker arms & shafts, ${t}`,system:"valvetrain",asset:`rockers-${t}`,explode:[e*600,30,60],catalog:[{ill:"103-10",pos:"48",pn:"930 105 043 00",qty:12,note:"Rocker arm. Blank remark and model (1978 USA 930/04). 043 02 is the other line."},{ill:"103-10",pos:"44",pn:"901 105 342 04",qty:12,note:"Rocker shaft (expanding). Blank remark and model."},{ill:"103-10",pos:"49/50",pn:"901 105 370 02 / 999 034 005 00",note:"Adjusting screw / nut. Blank remark and model."}],description:"Forged rocker arms on hollow slotted expanding shafts. The slipper face sits on the cam base circle with no gap; cold clearance is the 0.10 mm gap between the adjuster ball and the valve stem. Intake and exhaust arms each have their own shaft station. The adjuster is a screw, a ball and a locknut, one solid.",specs:{Count:"6 per bank",Shaft:"Ø18 mm hollow, 2 grooves (unverified)",Ratio:"~1.1 at this layout (unverified)",Lash:"0.10 mm cold at the screw"}}),i.push({id:`timing-chain-${t}`,name:`Timing chain, ${t}`,system:"camdrive",asset:`timing-chain-${t}`,explode:[e*380,-40,240],catalog:[{ill:n,pos:"1",pn:"901 105 529 00",qty:1,note:"Duplex roller chain; can only be removed after splitting the case"}],description:"Duplex roller chain from the 24 T intermediate-shaft sprocket (inside the case chain well) out through the open inner edge of the chain box to the 28 T cam sprocket; the slack lower run passes over the idler sprocket.",specs:{Pitch:'9.525 mm (3/8")',Type:"Duplex",Links:"92 (model)",Plane:e===1?"z 258 mm":"z 235 mm"}}),i.push({id:`cam-sprocket-${t}`,name:`Camshaft sprocket, ${t}`,system:"camdrive",asset:`cam-sprocket-${t}`,explode:[e*520,40,320],catalog:[{ill:n,pos:"38",pn:"901 105 546 02",qty:1},{ill:n,pos:"39",pn:"—",note:"Driven through the dowel pin from the keyed flange (cam-flange)"}],description:"Duplex cam sprocket, held on the cam nose by the M22 nut and spring washer; a dowel pin through one of 17 vernier holes couples it to the keyed flange behind it.",specs:{Adjustment:"Dowel-pin vernier",Teeth:"28 (pitch Ø85)",Speed:"½ crank"}}),i.push({id:`cam-flange-${t}`,name:`Camshaft sprocket flange, ${t}`,system:"camdrive",asset:`cam-flange-${t}`,explode:[e*580,50,240],catalog:[{ill:n,pos:"36",pn:"901 105 583 01",qty:1}],description:"Tall bright keyed hub on the cam nose. The Woodruff key drives it, and 16 round scallops on the short sprocket-face rim take the dowel that drives the sprocket. The lands between the scallops are wider than the scallops, and the bore is open. Choosing which scallop lines up with which of the sprocket’s 17 holes gives the vernier.",specs:{Location:"Woodruff key in the cam-nose keyway",Scallops:"16 on the sprocket-face rim, lands wider than the notches"}}),i.push({id:`cam-flange-cover-${t}`,name:`Cam-flange cover, ${t}`,system:"camdrive",asset:`cam-flange-cover-${t}`,explode:[e*40,0,160],catalog:[{ill:n,pos:"31",pn:"930 105 196 00",qty:1,note:"Kat 502 p.70 Bild 103-10 / p.74 Bild 103-15"},{ill:n,pos:"29",pn:"930 105 197 05",qty:1,note:"Triangular 3-hole gasket"},{ill:n,pos:"30",pn:"999 701 468 40",qty:1,note:"Round seal 67.5 × 75.4 × 4"}],description:"One round cast cover, the same on both banks, on the cam axis at the chain end of the cam housing. Centre bore, an O-ring groove sized to the 67.5 × 75.4 × 4 seal with lands either side, a raised rim, and three screw lugs at 0/120/240° notched into that rim. The triangular gasket sits on the cam-housing seat.",specs:{Screws:"3 × M6×25 combination (#33) + spring washers (#32)",Stack:"housing, gasket #29, seal #30, cover #31, thrust washer #34, shim #35, flange #36"}}),i.push({id:`chain-tensioner-${t}`,name:`Chain tensioner & guides, ${t}`,system:"camdrive",asset:`chain-tensioner-${t}`,explode:[e*360,-120,320],catalog:[{ill:n,pos:"10",pn:"930 105 049 00",note:"Chain adjuster: straight cylinder, long flat strap from the foot eye past the top to the stud"},{ill:n,pos:"10A",pn:"930 105 513 00",note:"Spacer sleeve on the stud under the strap eye (p.76)"},{ill:n,pos:"5/6",pn:e===1?"901 105 506 02 / 901 105 055 00":"901 105 505 02 / 901 105 055 00",note:"Idler arm / idler sprocket"},{ill:n,pos:"2",pn:e===1?"911 105 222 05 / 911 105 222 06":"911 105 222 06",note:e===1?"1 brown + 2 black guide rails":"3 black guide rails"}],description:"Heavy forged idler arm with a wide bushed boss. The 19 T idler has a solid web and rounded roller-chain teeth and presses 38 mm into the slack run from outside the loop. The chain adjuster is a straight cylinder. Its flat strap has an eye at the cylinder foot, runs outside the body but inside the chain box, and continues past the top to an eye on the housing stud, with spacer sleeve 930 105 513 00 (#10A) on that stud. A side bleeder carries sealing ring #26 (A 6.5×9.5), and a nut plus spring washer close the stud. The plunger dome bears on the arm-tail pad. Three ribbed guide-rail blocks sit on the chain runs. Kat 502 #3 is four bolts per bank: two through the idler-to-cam rail and one through each of the other two, into bosses on the housing.",specs:{Type:"Sealed hydraulic adjuster 930 105 049 00",Idler:"19 T, solid web, roller-chain teeth",Rails:e===1?"1 × 911 105 222 05 + 2 × 911 105 222 06":"3 × 911 105 222 06",Plunger:"in contact with the arm pad"}}),i.push({id:`chain-housing-${t}`,name:`Chain housing, ${t}`,system:"camdrive",asset:`chain-housing-${t}`,explode:[e*340,-20,170],catalog:[{ill:"103-05",pos:e===1?"2":"1",pn:e===1?"930 105 062 01":"930 105 061 02",qty:1}],description:"Deep cast chain box bolted to the crankcase face at the pulley end, outboard of the case chain well; the cam-housing end is gasketed into its outer end. Curved outer wall with draft ribs, straight inner edge, rounded cam end, floor rising from the tensioner corner so it sits well above the heat exchanger.",specs:{Material:"Cast Al",Gasket:"930 105 193 00","End view":"≈229 × 200 mm (est.)",Depth:"70 mm to cover face (est.)"}}),i.push({id:`chain-housing-lid-${t}`,name:`Chain housing cover, ${t}`,system:"camdrive",asset:`chain-housing-lid-${t}`,explode:[e*380,-20,380],catalog:[{ill:"103-05",pos:e===1?"7":"6",pn:e===1?"930 105 064 10":"930 105 063 01",qty:1,note:e===1?"064 01 is the Turbo lid; Kat 502 p.66 Bild 103-05":"Kat 502 p.66 Bild 103-05"}],description:"Cast pan: sealing face on the gasket, raised perimeter rim with stud bosses, a deep field with a cross step along the upper part, centre stud pads, round bosses for the screw plugs, and a stout diagonal tube with a domed end on the outer face.",specs:{Gasket:e===1?"930 105 192 01":"930 105 191 03",Part:e===1?"930 105 064 10":"930 105 063 01"}}),i.push({id:`heat-exchanger-${t}`,name:`Heat exchanger, ${t} (cyl. ${s})`,system:"exhaust",asset:`heat-exchanger-${t}`,explode:[e*330,-320,0],catalog:[{ill:"202-00",pos:"26",pn:"930 211 025 01",qty:2},{ill:"202-00",pos:"31",pn:"930 111 191 13",note:"Port gasket x6"}],description:"Combined exhaust manifold and cabin heater: three primary pipes pass through a finned inner box inside a steel shell; fresh air blown through the shell is heated and ducted to the cabin.",specs:{Material:"Steel, aluminised",Primaries:"3 per side"}})}return i}const e_=[{id:"crankcase-right",name:"Crankcase, right half (cyl. 1-3)",system:"crankcase",asset:"crankcase-right",explode:[70,0,0],catalog:[{ill:"101-10",pos:"1",pn:"930 101 915 00",qty:1,note:"Case halves supplied as a matched pair with studs"}],description:"Right half of the vertically split, pressure-cast aluminium crankcase (the 3.0 SC returned to aluminium from the 2.7’s magnesium). Hollow crank bay with seven line-bored main saddles plus the nose saddle in the pulley-end chain well; each saddle has a machined half-bore and two stud pads. Cylinders 1-3 register on spigot bores in the deck.",specs:{Material:"Pressure-cast aluminium","Main bearings":"8 (7 + nose)",Fasteners:"Through-bolts + M8 perimeter",Lubrication:"Dry sump"}},{id:"crankcase-left",name:"Crankcase, left half (cyl. 4-6)",system:"crankcase",asset:"crankcase-left",explode:[-180,0,0],catalog:[{ill:"101-05",pos:"1",pn:"930 101 915 00",qty:1,note:"Matched pair"},{ill:"101-05",pos:"3",pn:"911 101 172 00",qty:12,note:"Upper head studs"},{ill:"101-05",pos:"3",pn:"930 101 170 00",qty:12,note:"Lower head studs (Dilavar), a separate line from the upper studs"}],description:"Left half of the two-piece aluminium crankcase, carrying cylinders 4-6. Same hollow bay and saddle webs as the right half, joined on the machined split flange with sealant, through-bolts and perimeter studs.",specs:{Material:"Pressure-cast aluminium","Head studs":"Steel upper / Dilavar lower","Case bolt torque":"3.5 mkg (25 ft-lb) M8"}},{id:"main-bearings",name:"Main bearing shells (1-8)",system:"crank",asset:"main-bearings",explode:[0,-60,0],catalog:[{ill:"102-00",pos:"21-24",pn:"930 101 901 00",qty:1,note:"Set: shells I, II-VII, bearing sleeve VIII 964 101 138 01"}],description:"Steel-backed split main shells for bearings 1-7, each half with a locating tab, plus the one-piece nose bushing (bearing 8) at the pulley end. Bearing 1 (flywheel end) is the thrust bearing.",specs:{Count:"7 split + 1 bushing","Thrust bearing":"No. 1"}},{id:"crankshaft",name:"Crankshaft",system:"crank",asset:"crankshaft",explode:[0,-30,0],catalog:[{ill:"102-00",pos:"1",pn:"930 102 015 01",qty:1,note:"SC -79"}],description:"Forged, counterweighted crank with six individual throws and eight main bearings (SC: Ø60 mains 1–7, enlarged nose bearing 8). Thick cheeks, some near-round and some pear-shaped opposite the crankpin. Only the 66 mm 2.0/2.2 T cranks were uncounterweighted.",specs:{Stroke:"70.4 mm","Main journals":"Ø60 mm","Rod journals":"Ø53 mm",Throws:"6 @ 120°","Firing order":"1-6-2-4-3-5"}},{id:"crank-gears",name:"Crank timing gear & distributor drive gear",system:"crank",asset:"crank-gears",explode:[0,-30,90],catalog:[{ill:"102-00",pos:"8",pn:"901 102 111 00",note:"Timing gear (drives intermediate shaft)"},{ill:"102-00",pos:"10",pn:kh.driveWheel,note:"Distributor drive wheel for this engine variant"}],description:"Gear on the crank nose driving the intermediate shaft, plus the helical gear that drives the distributor shaft.",specs:{Drive:"Crank → intermediate shaft (gear)","Tooth counts":"35 : 60 (module 168/95, 84 mm centres)"}},{id:"intermediate-shaft",name:"Intermediate shaft",system:"camdrive",asset:"intermediate-shaft",explode:[0,-180,60],catalog:[{ill:"103-15",pos:"43",pn:"930 105 013 01",qty:1,note:"Size 0 (gear code matched to case)"}],description:"Lay shaft below the crank, gear-driven from the crankshaft (60 T helical gear, 35:60). Two 24 T duplex sprockets drive the cam chains so the cams turn at half crank speed. The flywheel end drives the oil pump through a separate splined connecting shaft.",specs:{Bearings:"2 plain",Drives:"Cam chains + oil pump",Sprockets:"2 × 24 T duplex",Gear:"60 T helical, module 168/95"}},{id:"oil-pump",name:"Oil pump (pressure + scavenge)",system:"lubrication",asset:"oil-pump",explode:[0,-200,-140],catalog:[{ill:"104-00",pos:"1",pn:"911 107 008 01",qty:1},{ill:"104-00",pos:"6",pn:"901 107 121 00",note:"Connecting shaft"}],description:"Cast two-section pump in the flywheel-end bay, long axis across the case: larger scavenge section, smaller pressure section, four top ribs, three mounting ears on the cover, and a pickup that leaves the pressure end and rises about 90° in a bend as long as the body. The three M8 nuts sit on those ears. A splined stub on the intermediate-shaft axis drives it through the dark connecting shaft.",specs:{Type:"Gear, 2-stage, 4-rib",System:"Dry sump, ~13 L total (typ.)"}},{id:"sump-plate",name:"Sump cover plate & oil strainer",system:"lubrication",asset:"sump-plate",explode:[0,-300,0],catalog:[{ill:"101-05",pos:"38",pn:"930 107 314 00",qty:1,note:"Oil strainer"},{ill:"101-05",pos:"39",pn:"930 101 391 01",qty:2,note:"Gaskets"},{ill:"101-05",pos:"41",pn:"911 107 176 03",note:"Drain plug"}],description:"Pressed-steel sump cover: flat field, raised outer rim, and a wide horseshoe channel (about 5.5 mm deep, 18 mm wall) with the hex drain plug in the notch at the top of the U. The coarse strainer and its two gaskets sit inboard of the plate. Eight M6 nuts (101-05 #35); the other four of that line hold the breather lid.",specs:{Fasteners:"8 × M6",Drain:"911 107 176 03"}},{id:"oil-thermostat",name:"Oil thermostat",system:"lubrication",asset:"oil-thermostat",explode:[40,180,40],catalog:[{ill:"101-10",pos:"37",pn:"930 107 765 00",qty:1}],description:"Wax-element cartridge (930 107 765 00) in the top of the right case half at the pulley end, beside the oil-pressure switch. Flange, O-ring land, rectangular windows onto the brass element, a yellow band and a dark cup; the body sits down in the case. Two M6 nuts and two spring washers (101-10 #36/#35). The three lock nuts belong to the intermediate-shaft cover.",specs:{Location:"Top of the right case half, pulley end"}},{id:"oil-cooler",name:"Engine oil cooler",system:"lubrication",asset:"oil-cooler",explode:[220,-60,-40],catalog:[{ill:"104-00",pos:"8",pn:"911 107 041 00",qty:1}],description:"Behr plate-and-fin crankcase cooler (911 107 041 00) on the right case deck at the flywheel end, in the pocket between cylinder 3 and the ring gear. Mount face x = 103, normal +X. The core runs outboard, parallel to the cylinders: long axis +X, height along Y, depth along Z. Fins are X-Y plates stacked along Z so fan air drops through them top to bottom; the ±Z faces are smooth side panels. The BEHR stamp is on the outboard end plate, readable from the outboard side. A Ø14 return runs along the bottom face and ends in a spigot pointing +X. Real core 195 × 140 × 80 mm. This model uses 137 × 140 × 60 because the cyl-3-to-ring gap here is about 65 mm against about 100 mm on the car; the real depth hits the flywheel and the cam housing. Seals: two 999 704 172 50 (104-00 #3) side by side on the upper ports and one 999 704 173 50 (104-00 #2) on the lower port. With the shroud on, only the cap (911 106 406 00) shows.",specs:{Location:"Right case deck, flywheel end, between cyl 3 and the ring gear",Type:"Plate-and-fin, air top to bottom",Fasteners:"4 × M8 stud, nut and spring washer, normal +X",Core:"model-fit 137 × 140 × 60 mm (real 195 × 140 × 80)",Seals:"2 × 999 704 172 50 (#3), 1 × 999 704 173 50 (#2)"}},{id:"breather-lid",name:"Crankcase breather cover",system:"lubrication",asset:"breather-lid",explode:[0,260,60],catalog:[{ill:"101-05",pos:"37",pn:"901 107 073 02",qty:1,note:"1978 SC lid. 930 107 073 00 is tagged 83-/turbo in this catalogue; Stoddard’s cast 930 107 073 02 is the later supersession."}],description:"Cast aluminium breather tower on top of the left case half at the pulley end: ribbed body, angled hose neck to the oil tank, and a small switch boss. The 1978 catalogue line is 901 107 073 02 (101-05 #37, USA). Four M6 nuts (101-05 #35).",specs:{Fasteners:"4 × M6 (101-05 #35)"}},{id:"fan-housing",name:"Fan housing",system:"cooling",asset:"fan-housing",explode:[0,80,640],catalog:[{ill:"105-00",pos:"1",pn:"930 106 005 00",qty:1,note:"-79 up to engine 639 9201"},{ill:"105-00",pos:"2",pn:"—",note:"Alternator strap"}],description:"Unpainted dull-grey magnesium drum: grooved barrel, rolled intake bell, five broad stator vanes and a solid alternator cradle. A yellow-zinc band clamp sits on the barrel where the red upper air guide wraps it. Fan and alternator come out as one unit, sliding out through the shroud collar.",specs:{Material:"Cast magnesium, unpainted",Mount:"Strap-clamped alternator",Throat:"~234 mm"}},{id:"fan-impeller",name:"Cooling fan (11 blades)",system:"cooling",asset:"fan-impeller",explode:[0,100,700],catalog:[{ill:"105-00",pos:"6",pn:"930 106 011 01",qty:1,note:"-79"},{ill:"105-00",pos:"7",pn:"930 106 564 00",note:"Shims (belt tension)"}],description:"Eleven broad twisted blades on a large cast hub dish (1978–79, Ø226). The yellow-zinc face plate is riveted to the dish and carries the inner pulley half.",specs:{Blades:"11",Ratio:"~1.67 : 1 (belt pitch 60 / 36)",Diameter:"226 mm"}},{id:"alternator",name:"Alternator",system:"cooling",asset:"alternator",explode:[0,70,560],catalog:[{ill:"902-05",pos:"1",pn:"911 603 120 02",qty:1,note:"Generator -81"}],description:"Bosch 14 V alternator in the fan-housing cradle. Cast end shields, a darker laminated stator with copper windings in the windows, and a slip-ring end with two diode plates, a brush block and terminal studs. The fan is on its shaft; the belt drives it from the crank pulley. External regulator on the 1978 car.",specs:{Output:"14 V, ~70 A",Regulator:"External (1978)"}},{id:"fan-pulley",name:"Fan / alternator pulley",system:"cooling",asset:"fan-pulley",explode:[0,80,760],catalog:[{ill:"105-00",pos:"8",pn:"911 106 208 00",qty:1},{ill:"105-00",pos:"10",pn:"911 106 033 03",note:"Hub extension"}],description:"Removable outer half of the split 82 mm pulley (911 106 208 00). Two V-grooves: the inner one takes the alternator belt, the outer one the air-injection belt. Six 0.5 mm shims (five between the halves, one outside) and the cupped cap under the M16 nut. The inner half is the face plate on the fan hub. 108-00 #35 is this same pulley.",specs:{Adjustment:"6 × 0.5 mm shims","Outside diameter":"~82 mm",Grooves:"2"}},{id:"fan-belt",name:"V-belt",system:"cooling",asset:"fan-belt",explode:[0,150,560],catalog:[{ill:"105-00",pos:"12",pn:"999 192 097 50",qty:1,note:"9.5 x 725, -79"}],description:"Narrow V-belt from crank pulley to the fan/alternator pulley. Losing it means no cooling.",specs:{Size:"9.5 x 725 mm"}},{id:"crank-pulley",name:"Crankshaft pulley",system:"crank",asset:"crank-pulley",explode:[0,0,420],catalog:[{ill:"102-00",pos:"12",pn:"930 102 028 09",qty:1,note:"-78, Ø134. 930 102 028 01 is also tagged -78/SC."}],description:"Single-groove pressed-steel pulley, about Ø134, with concentric pressed rings and a Z1/TDC notch. The belt pitch sits in that groove. The twin-groove crank pulley was the air-conditioning option.",specs:{Grooves:"1","Outside diameter":"~134 mm",Marks:"Z1 (TDC cyl 1)",Finish:"Yellow zinc"}},{id:"upper-air-guide",name:"Upper air guide (shroud)",system:"cooling",asset:"upper-air-guide",explode:[0,300,0],catalog:[{ill:"105-05",pos:"1",pn:"930 106 041 00",qty:1,note:"Catalogue lists this -78 part as red; later replacement PCG 106 041 04 is black"}],description:"1978 orange-red moulded shell. The fan-end collar wraps the front of the grey fan housing; each wing has three stadium injector windows. The right flywheel-end corner is open over the oil cooler so air from the tunnel can drop through the fins. The later black PCG 106 041 04 is the replacement, not what this car wears.",specs:{Material:"GRP, orange-red",Colour:"1978 red (930 106 041 00)"}},{id:"oil-cooler-cap",name:"Oil-cooler cap",system:"cooling",asset:"oil-cooler-cap",explode:[280,80,-180],catalog:[{ill:"105-05",pos:"3",pn:"911 106 406 00",qty:1}],description:"Small cap (911 106 406 00, 105-05 #3) over the oil-cooler pocket on the right flywheel end. With the shroud fitted, this is the only part of the cooler visible. The skirt screw at z −185 and the four right end-plate screws seat on it.",specs:{Location:"Over the right flywheel-end cooler pocket","Part number":"911 106 406 00"}},{id:"plenum",name:"Air distributor & air-cleaner housing",system:"induction",asset:"plenum",explode:[0,520,0],catalog:[{ill:"106-00",pos:"9",pn:"911 110 106 13",qty:1,note:"930.04 US, not California (Kat 502 p97, fig 106-00 #9). California housing 911 110 106 15 is not used."}],description:"1978 US (930/04) air distributor 911 110 106 13: a tray-lipped box with six horizontal 38 mm ports and a round opening for the separate throttle housing. Cold-start boss on the flywheel end. The lower half of the oval air-cleaner canister sits on an outlet neck. The intake snout is on the lid. No cold-start spider.",specs:{"Port ID":"38 mm",Box:"155 × 190 × 78 mm",Throttle:"separate, 930 110 248 02"}},{id:"air-filter",name:"Air filter element",system:"induction",asset:"air-filter",explode:[0,640,0],catalog:[{ill:"106-00",pos:"13",pn:"911 110 185 02",qty:1}],description:"Rectangular panel element (Mahle LX 261): orange urethane frame, pleated paper. 402 × 181 × 41.4 mm.",specs:{Length:"402 mm",Width:"181 mm",Height:"41.4 mm"}},{id:"air-cleaner-lid",name:"Air cleaner lid",system:"induction",asset:"air-cleaner-lid",explode:[0,760,0],catalog:[{ill:"106-00",pos:"14",pn:"930 110 184 00",qty:1},{ill:"106-00",pos:"15",pn:"930 110 365 00",note:"Restraining strap"}],description:"Lid 930 110 184 00 (106-00 #14): the upper half of the oval air cleaner, with the intake snout on the left end above the equator, four wire clips and the yellow label.",specs:{}},{id:"mixture-control-unit",name:"Mixture control unit (air-flow meter + fuel distributor)",system:"induction",asset:"mixture-control-unit",explode:[-320,600,0],catalog:[{ill:"107-00",pos:"1",pn:"911 110 967 00",note:"Fuel distributor, 930.04 (Kat 502 p106, fig 107-00 #1)"},{ill:"107-00",pos:"2",pn:"911 110 965 00",note:"Air flow meter"},{ill:"107-00",pos:"9",pn:"911 110 943 00",note:"Sensor plate"}],description:"Bosch K-Jetronic mixture unit for the 1978 US engine (930/04). The air-flow meter sits on the plenum venturi, with a barbed takeoff for the auxiliary-air hose and an outlet bell Ø131 (E, from clamp S 131/9). The fuel distributor (Kat 502 p106) keeps the 80 × 40 × 88 mm footprint: waisted ribbed lower housing, upper housing jointed at mid-height, hex outlet towers 15 mm proud on the Ø76 circle (E). Screw socket #49 for control-pressure line #51 stands on a raised hub at the top centre, with a union nut rather than a fourth banjo. Cold-start banjo and two M12 connection pieces. No M14 return union.",specs:{System:"Bosch CIS K-Jetronic","System pressure":"~4.5-5.2 bar (typ.)"}},{id:"fuel-lines",name:"Injection lines & warm-up regulator",system:"induction",asset:"fuel-lines",explode:[-160,560,0],catalog:[{ill:"107-10",pos:"23",pn:"911 110 093 11 / 12",note:"Injection lines cyl 1-3 / 4-6"},{ill:"107-10",pos:"54",pn:"911 606 105 09",note:"Warm-up valve (control pressure regulator)"}],description:"Steel CIS lines for 930/04 (Kat 502 p110–113, fig 107-10). Six injector lines (911 110 093 11 for cylinders 1–3, 911 110 093 12 for 4–6) each end in a union nut on the injector thread. Line #61 (930 110 513 00) runs from the warm-up banjo to the return-side M12. Line #62 (930 110 514 00) leaves the other M12. Line #63 (930 110 570 00) joins the distributor banjo to the cold-start banjo. The warm-up line #51 lives in wur-lines.",specs:{Lines:"6 injector + #61 + #62 + #63"}},{id:"ignition-leads",name:"Ignition lead set",system:"ignition",asset:"ignition-leads",explode:[-60,460,60],catalog:[{ill:"901-00",pos:"17",pn:"911 609 011 07",qty:1,note:"Left set, braided"},{ill:"901-00",pos:"17A",pn:"911 609 010 07",qty:1,note:"Right set, braided"},{ill:"901-00",pos:"9",pn:"—",note:"Primary lead, CD box is body-mounted"},{ill:"901-00",pos:"18",pn:"911 609 061 07",note:"Coil lead"}],description:"Two braided three-lead sets, left 911 609 011 07 and right 911 609 010 07, each gathered by a band. The right set has ring-terminal ground pigtails. Leads leave the suppression connectors on a bend of at least 25 mm. Plug-end runs stay on the current plug pose. The coil lead and the primary end in the clip on the shroud’s pulley-end bay edge.",specs:{Leads:"6 plug + coil + primary",Shield:"Braided, left and right sets"}},{id:"fan-hub",name:"Fan hub extension",system:"cooling",asset:"fan-hub",explode:[0,100,680],catalog:[{ill:"105-00",pos:"10",pn:"—",qty:1}],description:"Yellow-zinc face plate riveted to the fan, carrying the inner pulley half, a ring of 16 holes and the keyed boss. Six studs hold it to the hub dish.",specs:{Studs:"6"}},{id:"airbox-struts",name:"Air-cleaner struts",system:"induction",asset:"airbox-struts",explode:[0,640,0],catalog:[{ill:"106-00",pos:"18",pn:"911 110 133 02",note:"Straight strut"},{ill:"106-00",pos:"19",pn:"911 110 269 00",note:"Angled strut, tags -80"},{ill:"106-00",pos:"20",pn:"911 110 154 00",note:"Bonded rubber buffer ×2"}],description:"Two struts (911 110 133 02 straight, 911 110 269 00 angled) with one bonded rubber buffer each, on four M8 studs at the flywheel side of the distributor lid.",specs:{}},{id:"warm-up-regulator",name:"Warm-up regulator",system:"induction",asset:"warm-up-regulator",explode:[-200,300,-200],catalog:[{ill:"107-10",pos:"54",pn:"—",qty:1}],description:"Bosch warm-up (control-pressure) regulator bolted to the left case half so it feels engine temperature.",specs:{Fastening:"2 screws"}},{id:"distributor",name:"Ignition distributor",system:"ignition",asset:"distributor",explode:[-160,420,100],catalog:[{ill:"901-00",pos:"1",pn:"930 602 021 02",qty:1,note:"930/04, -79"},{ill:"901-00",pos:"2",pn:"930 602 910 00",note:"Vacuum unit"},{ill:"901-00",pos:"8",pn:"930 602 904 00",note:"Cap"},{ill:"901-00",pos:"3",pn:"930 602 902 00",note:"Rotor"},{ill:"901-00",pos:"23",pn:"122 035 281",qty:7,note:"Suppression connectors on the six towers and the centre tower"},{ill:"901-00",pos:"35",pn:"930 602 922 00",note:"Pinion pin"},{ill:"901-00",pos:"36",pn:"930 602 422 03",note:"Pinion, counterclockwise (930/04). 422 02 is the 930/03 pinion"}],description:"Bosch breakerless CD distributor 930 602 021 02 in the left-case bore at the pulley end. Cast housing with a hold-down lug on the case stud. Black cylindrical cap, about Ø70, with a shoulder ring and two 1.5 mm spring-steel bails. Six towers with straight suppression connectors 122 035 281, plus one on the centre tower. Shallow zinc vacuum can on a curved saddle under the cap rim; the nipple is on the rim and points toward the cap. The hose seat is DIST_VAC_NIPPLE.",specs:{"Firing order":"1-6-2-4-3-5",Ignition:"CD, breakerless",Location:"Left case, pulley end",Cap:"Ø70 Bosch, black","Vacuum can":"Ø52 × 22 on a saddle, nipple toward the cap",Rotation:"CCW (looking down the cap)"}},{id:"muffler",name:"Exhaust silencer",system:"exhaust",asset:"muffler",explode:[0,-260,520],catalog:[{ill:"202-00",pos:"1",pn:"930 111 022 00",qty:1},{ill:"202-00",pos:"2",pn:"911 111 191 01",note:"Gasket"}],description:"Transverse rear silencer fed by both heat exchangers, single tailpipe on the left.",specs:{}},{id:"flywheel",name:"Flywheel with starter ring gear",system:"clutch",asset:"flywheel",explode:[0,0,-320],catalog:[{ill:"102-00",pos:"2",pn:"930 102 204 00",qty:1,note:"-79; 9 bolts #6 930 102 206 00"},{ill:"301-00",pos:"5",pn:"911 116 239 00",note:"Starter ring gear"}],description:"Steel flywheel bolted to the crank flange with nine bolts, carrying the shrunk-on starter ring gear and the clutch friction face.",specs:{Bolts:"9"}},{id:"clutch-disc",name:"Clutch disc",system:"clutch",asset:"clutch-disc",explode:[0,0,-440],catalog:[{ill:"301-00",pos:"2",pn:"915 116 011 19",qty:1}],description:"Sprung-hub clutch disc splined to the 915 gearbox input shaft.",specs:{Diameter:"225 mm"}},{id:"pressure-plate",name:"Clutch pressure plate",system:"clutch",asset:"pressure-plate",explode:[0,0,-560],catalog:[{ill:"301-00",pos:"1",pn:"915 116 001 27",qty:1},{ill:"301-00",pos:"3",pn:"900 027 015 02",note:"Lock rings x9"}],description:"Diaphragm-spring pressure plate bolted to the flywheel.",specs:{Diameter:"225 mm"}}];function t_(){const i=[{id:"ishaft-cover",name:"Intermediate-shaft cover",system:"crankcase",asset:"ishaft-cover",explode:[40,-40,220],catalog:[{ill:"101-10",pos:"39",pn:"911 105 162 00",qty:1,note:"Up to engine 63D 4069"}],description:"Oval cover on the pulley-end face of the right crankcase half, closing the intermediate shaft. Three M6 lock nuts (101-10 #41) and a gasket. These are the three lock nuts that used to be counted on the oil thermostat.",specs:{Fasteners:"3 × M6 lock nut",Applies:"up to 63D 4069"}}];return i.push({id:"air-pump",name:"Air-injection pump",system:"exhaust",asset:"air-pump",explode:[-220,-80,80],catalog:[{ill:"108-00",pos:"7",pn:"911 113 111 03",qty:1}],description:"Air-injection pump 911 113 111 03, low on the left (distributor side) at the pulley end. It swings on the M8×120 pivot screw. The outlet faces the diverter valve.",specs:{"Centre distance":"~316 mm from the fan axis",Belt:"9.5 × 950"}},{id:"air-pump-pulley",name:"Air-injection pump pulley",system:"exhaust",asset:"air-pump-pulley",explode:[-220,-40,160],catalog:[{ill:"108-00",pos:"8",pn:"911 113 158 01",qty:1}],description:"Pressed-steel pulley 911 113 158 01 on the pump shaft, one V-groove in line with the outer groove of the fan pulley.",specs:{"Pitch radius":"65 mm"}},{id:"air-pump-belt",name:"Air-injection V-belt",system:"exhaust",asset:"air-pump-belt",explode:[-80,40,160],catalog:[{ill:"108-00",pos:"34",pn:"900 192 021 50",qty:1,note:"9.5 × 950"}],description:"V-belt 900 192 021 50 (9.5 × 950) from the outer groove of the fan pulley to the pump pulley, behind the alternator belt.",specs:{Size:"9.5 × 950 mm"}},{id:"air-pump-bracket",name:"Air-injection pump bracket",system:"exhaust",asset:"air-pump-bracket",explode:[-160,40,40],catalog:[{ill:"108-00",pos:"1",pn:"911 113 113 02",qty:1}],description:"Bracket 911 113 113 02 carrying the pump pivot. Two feet take M8 nuts; the arm reaches the pump without meeting the case skin.",specs:{}},{id:"air-pump-strap",name:"Air-injection tension strap",system:"exhaust",asset:"air-pump-strap",explode:[-180,80,80],catalog:[{ill:"108-00",pos:"14",pn:"911 113 125 02",qty:1}],description:"Slotted tension strap 911 113 125 02 from the top of the pump up to the retaining bracket on the fan housing. It sits inboard of the belt.",specs:{}},{id:"air-retainer",name:"Air-injection retaining bracket",system:"exhaust",asset:"air-retainer",explode:[-80,120,80],catalog:[{ill:"108-00",pos:"12",pn:"911 113 126 02",qty:1}],description:"Retaining bracket 911 113 126 02 on the left of the fan housing, with two bonded rubber buffers.",specs:{Buffers:"2 × 930 110 194 00"}},{id:"air-check-valve",name:"Air-injection check valve",system:"exhaust",asset:"air-check-valve",explode:[-80,80,40],catalog:[{ill:"108-00",pos:"26",pn:"911 113 115 01",qty:1}],description:"Check valve 911 113 115 01, vertical. The outlet points down: AIR_CHECK_VALVE_OUTLET.direction is (0, −1, 0) and the point is the hex face. Top End’s air tube starts there; its spigot points the other way, up into the hex. Sealing ring #21 sits on the face. The tube itself is not modelled here.",specs:{Outlet:"M24 hex, A24×29 ring"}},{id:"air-diverter",name:"Air-injection diverter valve",system:"exhaust",asset:"air-diverter",explode:[-200,-40,20],catalog:[{ill:"108-00",pos:"22",pn:"930 113 147 01",qty:1}],description:"Diverter valve 930 113 147 01 beside the pump, sending pump air to the check valve or dumping it.",specs:{}},{id:"air-diverter-support",name:"Diverter-valve support",system:"exhaust",asset:"air-diverter-support",explode:[-200,-80,20],catalog:[{ill:"108-00",pos:"23",pn:"930 113 146 01",qty:1}],description:"Support 930 113 146 01 under the diverter valve, held by two hex nuts and spring washers.",specs:{}},{id:"air-pump-cleaner",name:"Air-injection pump air cleaner",system:"exhaust",asset:"air-pump-cleaner",explode:[-160,20,40],catalog:[{ill:"108-00",pos:"17",pn:"911 113 117 02",qty:1}],description:"Small air cleaner 911 113 117 02 on the inboard side of the air pump.",specs:{}}),i.push({id:"heater-blower",name:"Heater blower",system:"cooling",asset:"heater-blower",explode:[180,40,200],catalog:[{ill:"108-10",pos:"1",pn:"911 624 151 02",qty:1}],description:"Heater blower 911 624 151 02 (108-10) on the right of the fan housing, feeding the two heat-exchanger hoses.",specs:{}},{id:"heater-blower-support",name:"Heater blower support",system:"cooling",asset:"heater-blower-support",explode:[140,40,160],catalog:[{ill:"108-10",pos:"2",pn:"911 211 139 02",qty:1}],description:"Support 911 211 139 02 carrying the heater blower off the fan-housing side.",specs:{}}),i.push({id:"egr-valve",name:"EGR valve",system:"exhaust",asset:"egr-valve",explode:[-40,-180,0],catalog:[{ill:"202-05",pos:"7",pn:"911 113 183 01",qty:1}],description:"EGR valve 911 113 183 01 (202-05 #7) under the catalytic converter, between the two pipelines.",specs:{}},{id:"egr-pipe-feed",name:"EGR feed pipeline",system:"exhaust",asset:"egr-pipe-feed",explode:[-80,-160,-40],catalog:[{ill:"202-05",pos:"1",pn:"930 113 190 01",qty:1}],description:"Pipeline 930 113 190 01 (202-05 #1) from the EGR valve inlet nipple to the flanged takeoff on the left heat exchanger.",specs:{}},{id:"egr-pipe-return",name:"EGR return pipeline",system:"exhaust",asset:"egr-pipe-return",explode:[80,-160,40],catalog:[{ill:"202-05",pos:"11",pn:"911 113 177 03",qty:1}],description:"Pipeline 911 113 177 03 (202-05 #11) from the EGR valve outlet nipple to the boss on the catalytic converter.",specs:{}},{id:"egr-bracket",name:"EGR retaining bracket",system:"exhaust",asset:"egr-bracket",explode:[-40,-200,0],catalog:[{ill:"202-05",pos:"3",pn:"—",qty:1}],description:"Retaining bracket (202-05 #3) under the EGR valve. The audit transcription does not give a part number.",specs:{}}),i}const Sh=[...e_,...Qb(),...Zb(),...t_()];function n_(){const i=n=>Sh.find(s=>s.id===n).explode,e=Lo.map(n=>{const s=i(n.follows),r=Math.hypot(...s)||1;return{id:n.id,name:n.name,system:"hardware",asset:n.id,explode:s.map(a=>a*(1+60/r)),catalog:n.catalog,description:n.description,specs:{Quantity:String(n.count),Size:n.size,"Removed at step":n.step}}}),t=Do.map(n=>{var a;const s=i(n.follows),r=Math.hypot(...s)||1;return{id:n.id,name:n.name,system:"hardware",asset:n.id,explode:s.map(o=>o*(1+40/r)),catalog:(a=n.catalog)!=null&&a.length?n.catalog:[{ill:xc(n.id)[0],pos:xc(n.id)[1],pn:"—",qty:n.count}],description:n.description,specs:{Quantity:String(n.count),Size:n.size,"Removed at step":n.step},group:n.group}});return[...e,...t]}const Cs=[...Sh,...n_()].map(i=>{var t;const e=(t=i.group)!=null?t:Xb(i);return e?{...i,group:e}:i}),i_=Object.fromEntries(Cs.map(i=>[i.id,i])),Ht=(i,e=[1,2,3,4,5,6])=>e.map(t=>`${i}-${t}`),Xt=i=>[`${i}-right`,`${i}-left`],Rt=(...i)=>i.flatMap(e=>e.endsWith("-*")?Xt(e.slice(0,-2)):[e]),$i=[{id:"clutch",title:"Clutch pressure plate & disc",note:"Lock the flywheel, back the nine pressure-plate bolts off evenly.",parts:[...Rt("clutch-bolts"),"pressure-plate","clutch-disc"]},{id:"flywheel",title:"Flywheel",note:"Nine flywheel bolts; mark position for balance.",parts:[...Rt("flywheel-bolts"),"flywheel"]},{id:"muffler",title:"Exhaust silencer",note:"Clamps at both heat-exchanger outlets. The catalytic converter and, on 930/04, the EGR valve come off with this end of the exhaust.",parts:["muffler","egr-valve","egr-pipe-feed","egr-pipe-return","egr-bracket"]},{id:"heat-exchangers",title:"Heat exchangers",note:"Six port nuts per side — soak them first; they seize.",parts:[...Rt("exhaust-nuts-*"),...Xt("heat-exchanger")]},{id:"air-cleaner",title:"Air cleaner lid & filter",note:"Release the spring straps.",parts:["air-cleaner-lid","air-filter","airbox-struts"]},{id:"cis",title:"Mixture control unit, injection lines & injectors",note:"Depressurise the fuel system; cap all lines.",parts:["mixture-control-unit","fuel-lines","warm-up-regulator",...Ht("injector")]},{id:"intake",title:"Air distributor & intake pipes",note:"Plug the intake ports with rags.",parts:[...Rt("intake-nuts-*"),"plenum",...Ht("intake-runner")]},{id:"belt",title:"V-belt",note:"Remove shims from the fan pulley to slacken the belt. The air-injection belt is the outer groove.",parts:[...Rt("fan-pulley-nut"),"fan-belt","fan-pulley","air-pump-belt","air-pump-pulley","air-pump","air-pump-bracket","air-pump-strap","air-retainer","air-check-valve","air-diverter","air-diverter-support","air-pump-cleaner"]},{id:"fan",title:"Fan housing with fan & alternator",note:"Loosen the strap clamp; fan housing, fan and alternator lift out together.",parts:["fan-impeller","fan-hub","alternator","fan-housing"]},{id:"distributor",title:"Distributor & spark plugs",note:"Mark rotor position before removal. The hold-down is a cast lug on the housing; slacken its nut to turn the body. The connectors come off with the leads.",parts:["ignition-leads",...Ht("spark-plug-connector"),"distributor",...Ht("spark-plug")]},{id:"shroud",title:"Upper air guide",note:"The shroud comes off once the fan housing is out. The oil-cooler cap (911 106 406 00) comes with it — with the shroud on, that cap is all of the cooler you see. The heater blower is on the right of the fan housing.",parts:["upper-air-guide","oil-cooler-cap","heater-blower","heater-blower-support"]},{id:"oil-cooler",title:"Engine oil cooler",note:"Factory manual: the cooler comes off after the right heat exchanger and the shrouds. Four M8 nuts and spring washers, then the flange lifts off the right-case deck studs. The three port seals stay on the case face.",parts:["oil-cooler"]},{id:"pulley",title:"Crankshaft pulley",note:"Central bolt, hold the crank from the flywheel flange.",parts:[...Rt("pulley-bolt"),"crank-pulley"]},{id:"valve-covers",title:"Valve covers",note:"Upper and lower covers on both cam housings.",parts:[...Rt("valve-cover-nuts-upper-*","valve-cover-nuts-lower-*"),"valve-cover-upper-right","valve-cover-lower-right","valve-cover-upper-left","valve-cover-lower-left"]},{id:"chain-covers",title:"Chain housing covers",note:"Undo the perimeter lock nuts (10 right / 9 left) and lift the covers. The timing-cover gasket stays on the flange. The idler sprocket now visibly presses into the slack run of each chain.",parts:[...Rt("chain-cover-nuts-*"),...Xt("chain-housing-lid")]},{id:"tensioners",title:"Chain tensioners & idler arms",note:"The timing-cover gasket lifts off the flange with this step. Release the adjuster (ear nut), pull it, then slide the idler arms off their shafts.",parts:Xt("chain-tensioner")},{id:"cam-nuts",title:"Camshaft sprocket nuts",note:"Hold each sprocket with the holding tool and undo the M22 nut on the cam nose; take off the spring washer.",parts:[]},{id:"cam-sprockets",title:"Camshaft sprockets & timing chains",note:"Pull the sprocket off the cam nose (the dowel pin comes with it) and lift the chains off. The alignment shim stays on the nose, between the thrust washer and the flange. On the real engine the chains then hang slack round the intermediate shaft until the case is split; the viewer takes them away here.",parts:[...Xt("cam-sprocket"),...Xt("timing-chain")]},{id:"cam-flanges",title:"Sprocket flanges & Woodruff keys",note:"Slide the keyed flange off the cam nose. The shim, thrust washer and Woodruff key stay on the nose.",parts:[...Xt("cam-flange")]},{id:"cam-keys",title:"Cam-nose stack",note:"The shim sits between the thrust washer and the flange. Take the shim and the thrust washer off, undo the three cover screws, and lift the chain-end cover (gasket and round seal come with it). Then tap the half-moon key out of the keyway.",parts:[...Xt("cam-flange-cover")]},{id:"rockers",title:"Rocker arms & shafts",note:"Label each rocker with its shaft (e.g. “#3 intake”).",parts:[...Rt("rocker-shaft-screws-*","rocker-shaft-nuts-*"),...Xt("rockers")]},{id:"camshafts",title:"Camshafts",note:"Slide out toward the chain end without scoring the housing.",parts:Xt("camshaft")},{id:"chain-housings",title:"Chain housings",note:"Now the chain cases can be unbolted.",parts:[...Rt("chain-housing-nuts-*"),...Xt("chain-housing")]},{id:"cam-housings",title:"Cam housings with heads",note:"Remove the 12 barrel nuts per bank (long hex socket through the cam housing); lift cam housing + 3 heads (valves still in them) off the studs as one unit.",parts:[...Rt("head-nuts-*"),...Xt("cam-housing")],carries:{"cam-housing-right":[...Ht("head",[1,2,3]),...Ht("valves",[1,2,3]),"cam-housing-nuts-right","head-dowels"],"cam-housing-left":[...Ht("head",[4,5,6]),...Ht("valves",[4,5,6]),"cam-housing-nuts-left"]}},{id:"valves",title:"Valves & springs (bench)",note:"On the bench: spring compressor; keep valves in order.",parts:Ht("valves")},{id:"heads",title:"Cylinder heads (bench)",note:"Undo the 24 cam-housing nuts and separate the heads from the cam housing on the bench.",parts:[...Rt("cam-housing-nuts-*"),...Ht("head")]},{id:"cylinders",title:"Cylinders",note:"Rock each off the studs; keep matched to its piston.",parts:Ht("cylinder")},{id:"pistons",title:"Pistons",note:"Circlips out, push pins; mark cylinder number and direction.",parts:Ht("piston")},{id:"externals",title:"Breather, oil thermostat, intermediate-shaft cover & sump plate",note:"Last external items before splitting the case.",parts:[...Rt("breather-nuts","thermostat-nuts","sump-nuts","ishaft-cover-nuts"),"breather-lid","oil-thermostat","ishaft-cover","sump-plate"]},{id:"split",title:"Split the crankcase",note:"Remove through-bolts and perimeter nuts; lift the left half off.",parts:[...Rt("case-through-bolts","case-through-nuts","case-perimeter-nuts"),"crankcase-left"]},{id:"crank",title:"Crankshaft with connecting rods",note:"Lift the crank out; then unbolt the rods (keep caps matched).",parts:["crankshaft",...Ht("conrod")],carries:{crankshaft:["crank-gears","crank-circlip","crank-gear-ring","crank-key"]}},{id:"crank-nose",title:"Crank-nose gears & key (bench)",note:"On the bench: circlip off, then pull the distributor drive wheel, intermediate ring and timing gear (puller).",parts:["crank-gears"]},{id:"crank-key",title:"Crankshaft Woodruff key",note:"Lift the half-moon key out of the crank-nose keyway.",parts:[]},{id:"int-shaft",title:"Intermediate shaft & oil pump",note:"Lift the intermediate shaft out with the oil pump on its connecting shaft (the chains come out with it on the real engine).",parts:[...Rt("oil-pump-nuts"),"intermediate-shaft","oil-pump"]},{id:"bearings",title:"Main bearing shells",note:"Only the right case half remains.",parts:["main-bearings"]}];{const i=new Set($i.flatMap(e=>e.parts));for(const e of[...Lo,...Do].slice().reverse()){if(i.has(e.id))continue;const t=$i.find(n=>n.id===e.step);if(!t)throw new Error(`teardown: no step ${e.step} for ${e.id}`);t.parts.unshift(e.id)}}function oo(i){return Kb(Cs,Yb(i))}function Eh(i){const e=oo(i);return $i.map(t=>{const n=t.carries&&Object.fromEntries(Object.entries(t.carries).map(([s,r])=>[s,r.filter(a=>!e.has(a))]).filter(([,s])=>s.length>0));return{...t,parts:t.parts.filter(s=>!e.has(s)),carries:n&&Object.keys(n).length?n:void 0}}).filter(t=>t.parts.length>0)}function s_(i,e=$i){return e.findIndex(t=>t.parts.includes(i))}function Th(i,e=$i){const t=new Set;return e.slice(0,i).forEach(n=>n.parts.forEach(s=>t.add(s))),t}function r_(i,e=$i){const t=Th(i,e),n=new Map;return e.slice(0,i).forEach(s=>{var r;return Object.entries((r=s.carries)!=null?r:{}).forEach(([a,o])=>o.forEach(l=>{t.has(l)||n.set(l,a)}))}),n}const a_=new R(.62,.42,.66).normalize(),lo=new R(0,40,40),o_=560;function Mc(i,e=1,t){const n=i.fov*Math.PI/180,s=2*Math.atan(Math.tan(n/2)*i.aspect),r=e*o_/Math.sin(Math.min(n,s)/2),a=lo.clone();return{pos:a.clone().add(a_.clone().multiplyScalar(r)),target:a}}const l_=new Ae(16731438),Sc=.85;class c_{constructor(e){ut(this,"renderer");ut(this,"scene",new lh);ut(this,"camera");ut(this,"controls");ut(this,"nodes",new Map);ut(this,"engine",new Cn);ut(this,"explode",0);ut(this,"step",0);ut(this,"emissions",!1);ut(this,"hidden",new Set);ut(this,"isolated",null);ut(this,"selected",null);ut(this,"onPick",()=>{});ut(this,"suppressed",oo(!1));ut(this,"removed",new Set);ut(this,"carried",new Map);ut(this,"userMoved",!1);ut(this,"camGoal",null);ut(this,"urlPose",null);ut(this,"clock",new C0);ut(this,"ray",new B0);ut(this,"needsFrames",90);this.canvas=e,this.renderer=new Jg({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=gt,this.renderer.toneMapping=Lc,this.renderer.toneMappingExposure=1.05,this.camera=new Lt(34,1,10,2e4),this.controls=new G0(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.09,this.controls.minDistance=250,this.controls.maxDistance=9e3,this.controls.addEventListener("change",()=>this.kick()),this.controls.addEventListener("start",()=>{this.camGoal=null,this.userMoved=!0,this.urlPose=null});const t=new Qa(this.renderer);this.scene.environment=t.fromScene(new Fb,.04).texture,this.scene.environmentIntensity=.9;const n=new io(16774374,1.6);n.position.set(600,1200,900),this.scene.add(n);const s=new io(12375295,.8);s.position.set(-900,400,-1e3),this.scene.add(s),this.scene.add(new S0(14673648,2105376,.35)),this.scene.add(this.engine),this.addFloor(),this.bindPicking(),window.addEventListener("resize",()=>this.resize()),this.resize();const r=Mc(this.camera);this.camera.position.copy(r.pos),this.controls.target.copy(r.target)}addFloor(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d"),n=t.createRadialGradient(128,128,10,128,128,128);n.addColorStop(0,"rgba(0,0,0,0.55)"),n.addColorStop(.6,"rgba(0,0,0,0.22)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,256,256);const s=new l0(e);s.colorSpace=gt;const r=new it(new Ds(1800,1500),new Rn({map:s,transparent:!0,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=-262,r.renderOrder=-1,this.scene.add(r)}async load(e,t){const n=new tb().setMeshoptDecoder(Nb),s=[...new Set(Cs.map(o=>o.asset))],r=new Map;let a=0;await Promise.all(s.map(async o=>{const l=await n.loadAsync(`${e}parts/${o}.glb`);r.set(o,l.scene),t(++a/s.length)}));for(const o of Cs){const c=r.get(o.asset).clone(!0),h=new Cn;h.name=o.id,o.rotation&&c.rotation.set(...o.rotation),o.position&&c.position.set(...o.position),h.add(c);const u=[],d=[];c.traverse(b=>{const m=b;if(!m.isMesh)return;const f=m.material.clone();f.side=nn,m.updateWorldMatrix(!0,!1),d_(f,m.matrixWorld),m.material=f,m.userData.partId=o.id,u.push(m),d.push(f)}),this.engine.add(h),h.updateMatrixWorld(!0);const p=new Vt().setFromObject(h),g=p.getCenter(new R);this.nodes.set(o.id,{def:o,root:h,meshes:u,mats:d,base:new R,box:p,explodeDir:new R(...o.explode),opacity:1,center:g})}this.kick()}resize(){const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.fov=e/t<.7?44:34;const n=e<900?Math.min(170,t*.2):0;n>0?this.camera.setViewOffset(e,t+n,0,n,e,t):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix(),this.kick()}kick(e=90){this.needsFrames=Math.max(this.needsFrames,e)}steps(){return Eh(this.emissions)}setEmissions(e){this.emissions=e,this.suppressed=oo(e);const t=this.steps().length;this.step>t&&(this.step=t),this.setStep(this.step)}setStep(e){const t=this.steps();this.step=Math.max(0,Math.min(e,t.length)),this.removed=Th(this.step,t),this.carried=r_(this.step,t),this.kick(160)}setExplode(e){this.explode=e,!this.userMoved&&!this.urlPose&&(this.camGoal=this.explodedHome(e)),this.kick(120)}lockQueryCamera(e,t){this.userMoved=!0,this.camGoal=null,this.urlPose={pos:new R(...e),target:new R(...t)},this.applyUrlPose(),this.controls.update(),this.applyUrlPose(),this.kick()}applyUrlPose(){this.urlPose&&(this.camera.position.copy(this.urlPose.pos),this.controls.target.copy(this.urlPose.target),this.camera.lookAt(this.urlPose.target),this.camGoal=null)}snap(){if(this.update(10),this.urlPose){this.applyUrlPose(),this.kick();return}this.camGoal&&(this.camera.position.copy(this.camGoal.pos),this.controls.target.copy(this.camGoal.target),this.camGoal=null),this.kick()}toggleHidden(e){this.hidden.has(e)?this.hidden.delete(e):this.hidden.add(e),this.kick()}isolate(e){this.isolated=e,this.kick()}select(e){this.selected=e;for(const t of this.nodes.values()){const n=t.def.id===e;for(const s of t.mats)s.emissive.copy(n?l_:new Ae(0)),s.emissiveIntensity=n?.45:0}this.kick()}resetView(){this.userMoved=!1,this.camGoal=this.explodedHome(this.explode),this.kick(120)}explodedHome(e){const t=Mc(this.camera,1+.55*e);if(e<=0||!this.nodes.size)return t;const n=new Vt,s=new Vt,r=[];for(const c of this.nodes.values()){const h=c.box.clone().translate(c.explodeDir.clone().multiplyScalar(e*Sc));n.union(c.box),s.union(h),r.push(h)}const a=s.getCenter(new R).sub(n.getCenter(new R));t.target.add(a),t.pos.add(a);const o=this.camera.clone(),l=new R;for(let c=0;c<2;c++){o.position.copy(t.pos),o.lookAt(t.target),o.updateMatrixWorld(!0);let h=0;for(const u of r)for(let d=0;d<8;d++)l.set(d&1?u.max.x:u.min.x,d&2?u.max.y:u.min.y,d&4?u.max.z:u.min.z).project(o),h=Math.max(h,Math.abs(l.x),Math.abs(l.y));if(h<=.95)break;t.pos.sub(t.target).multiplyScalar(h/.95).add(t.target)}return t}focus(e){if(this.urlPose){this.kick();return}this.userMoved=!0;const t=this.nodes.get(e);if(!t)return;const n=new Vt().setFromObject(t.root);if(n.isEmpty())return;const s=n.getCenter(new R),r=Math.max(n.getSize(new R).length()*.5,120),a=Math.min(Math.max(r/Math.sin(this.camera.fov*Math.PI/360)*1.1,400),2600);let o=this.camera.position.clone().sub(this.controls.target).normalize();if(this.occluded(e,s,o,a)){const l=s.clone().sub(lo).setY(0);l.lengthSq()>1&&(l.normalize().add(new R(0,s.y<lo.y?-.35:.35,0)).normalize(),this.occluded(e,s,l,a)||(o=l))}this.camGoal={pos:s.clone().add(o.multiplyScalar(a)),target:s},this.kick(120)}occluded(e,t,n,s){const r=[];for(const o of this.nodes.values())this.visibleFlag(o.def.id)&&r.push(...o.meshes);this.ray.set(t.clone().add(n.clone().multiplyScalar(s)),n.clone().negate()),this.ray.far=s;const a=this.ray.intersectObjects(r,!1)[0];return this.ray.far=1/0,!!a&&a.object.userData.partId!==e}isRemoved(e){return this.removed.has(e)}isGroupHidden(e){return this.suppressed.has(e)}visibleFlag(e){return this.suppressed.has(e)||this.hidden.has(e)||this.isolated&&this.isolated!==e?!1:this.isolated===e?!0:!this.removed.has(e)}bindPicking(){let e=null;this.canvas.addEventListener("pointerdown",t=>{e={x:t.clientX,y:t.clientY,t:performance.now()}}),this.canvas.addEventListener("pointerup",t=>{if(!e)return;const n=Math.hypot(t.clientX-e.x,t.clientY-e.y),s=performance.now()-e.t<450;if(e=null,n>7||!s)return;const r=this.canvas.getBoundingClientRect(),a=new we((t.clientX-r.left)/r.width*2-1,-((t.clientY-r.top)/r.height)*2+1);this.ray.setFromCamera(a,this.camera);const o=[];for(const c of this.nodes.values())c.root.visible&&c.opacity>.5&&o.push(...c.meshes);const l=this.ray.intersectObjects(o,!1)[0];this.onPick(l?l.object.userData.partId:null)})}start(){const e=()=>{requestAnimationFrame(e);const t=Math.min(this.clock.getDelta(),.05);this.needsFrames<=0||(this.needsFrames--,this.update(t),this.controls.update(),this.urlPose&&this.applyUrlPose(),this.renderer.render(this.scene,this.camera))};e()}update(e){const t=1-Math.exp(-e*7);let n=!1;for(const s of this.nodes.values()){const r=s.def.id,a=this.visibleFlag(r),o=this.isolated===r,l=s.explodeDir.clone().multiplyScalar(o?0:this.explode*Sc),c=d=>(d.lengthSq()>0?d.clone().normalize():new R(0,1,0)).multiplyScalar(700);if(this.removed.has(r)&&!o)l.add(c(s.explodeDir));else if(this.carried.has(r)&&!o){const d=this.nodes.get(this.carried.get(r));d&&l.add(c(d.explodeDir))}s.root.position.lerp(l,t),s.root.position.distanceToSquared(l)>.5&&(n=!0);const h=a?1:0;s.opacity+=(h-s.opacity)*Math.min(1,t*1.4),Math.abs(h-s.opacity)<.01?s.opacity=h:n=!0,s.root.visible=s.opacity>.01;const u=s.opacity<.999;for(const d of s.mats)d.transparent!==u&&(d.transparent=u,d.depthWrite=!u,d.needsUpdate=!0),d.opacity=s.opacity}this.urlPose?this.camGoal=null:this.camGoal&&(this.camera.position.lerp(this.camGoal.pos,t),this.controls.target.lerp(this.camGoal.target,t),this.camera.position.distanceTo(this.camGoal.pos)<1?this.camGoal=null:n=!0),n&&(this.needsFrames=Math.max(this.needsFrames,2))}}const Ec={castAlu:.34,sandCast:.78,magnesium:.34,finBlack:.22,forgedDark:.26,aluminized:.3,heatSteel:.3,blackPaint:.12,satinBlack:.12},h_=`
uniform float uCastAmt; varying vec3 vRestPos;
float h3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vn(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
`;function u_(i,e,t){const n={value:e.clone()},s={value:t};i.onBeforeCompile=r=>{r.uniforms.uRest=n,r.uniforms.uCastAmt=s,r.vertexShader=`uniform mat4 uRest; varying vec3 vRestPos;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vRestPos = (uRest * vec4(transformed, 1.0)).xyz;`),r.fragmentShader=h_+r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 float castN = vn(vRestPos * 0.3) * 0.4 + vn(vRestPos * 0.08) * 0.4 + vn(vRestPos * 0.02) * 0.2;
 diffuseColor.rgb *= 1.0 + (castN - 0.5) * uCastAmt * 0.55;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor = clamp(roughnessFactor + (castN - 0.5) * uCastAmt, 0.04, 1.0);`)},i.customProgramCacheKey=()=>"cast"}function d_(i,e){switch(e&&Ec[i.name]!==void 0&&u_(i,e,Ec[i.name]),i.name){case"chrome":i.envMapIntensity=1.4;break;case"satinBlack":case"blackPlastic":i.envMapIntensity=.6;break;case"castAlu":case"magnesium":case"aluminized":i.envMapIntensity=.9;break;case"magCast":i.envMapIntensity=.12;break;case"shroudRed":i.envMapIntensity=.55;break;case"sandCast":i.envMapIntensity=.48;break;case"polishedSteel":i.envMapIntensity=1.25;break;case"finBlack":case"blackPaint":i.envMapIntensity=.7;break;default:i.envMapIntensity=1}}function Tc(i){if(i==null||i.trim()==="")return null;const e=i.split(",").map(Number);return e.length!==3||e.some(t=>!Number.isFinite(t))?null:[e[0],e[1],e[2]]}const f_={"cover-gasket":{step:15,pos:[250,40,560],target:[250,-25,270]}};function p_(i){var e;return i&&(e=f_[i])!=null?e:null}function m_(i,e){var s;const t=Tc(i.cam);if(!t)return e;const n=(s=Tc(i.target))!=null?s:e.target;return{pos:t,target:n}}const wh={crankcase:{label:"Crankcase",catalogGroup:"101"},crank:{label:"Crankshaft & conrods",catalogGroup:"102"},pistons:{label:"Pistons & cylinders",catalogGroup:"102"},heads:{label:"Cylinder heads & cam housings",catalogGroup:"103"},camdrive:{label:"Camshaft & chain drive",catalogGroup:"103"},valvetrain:{label:"Valve train",catalogGroup:"103"},lubrication:{label:"Oil pump & oil system",catalogGroup:"104"},cooling:{label:"Fan, shroud & alternator",catalogGroup:"105"},induction:{label:"Fuel injection (CIS)",catalogGroup:"106/107"},ignition:{label:"Ignition",catalogGroup:"901"},exhaust:{label:"Exhaust & heat exchangers",catalogGroup:"202"},clutch:{label:"Clutch & flywheel",catalogGroup:"102/301"},hardware:{label:"Fasteners & hardware",catalogGroup:"101-301"}},Ah={"101-05":{ill:"101-05",title:"Crankcase, left",system:"crankcase",design911:39152},"101-10":{ill:"101-10",title:"Crankcase, right",system:"crankcase",design911:39158},"102-00":{ill:"102-00",title:"Crankshaft / flywheel / connecting rod / pulley",system:"crank",design911:39154},"102-05":{ill:"102-05",title:"Cylinder with piston",system:"pistons",design911:39155},"103-00":{ill:"103-00",title:"Cylinder head",system:"heads",design911:39156},"103-05":{ill:"103-05",title:"Camshaft housing / chain case",system:"heads",design911:39157},"103-10":{ill:"103-10",title:"Valve control, left",system:"camdrive",design911:39159},"103-15":{ill:"103-15",title:"Valve control, right",system:"camdrive",design911:39160},"104-00":{ill:"104-00",title:"Engine lubrication / oil pump",system:"lubrication",design911:39161},"105-00":{ill:"105-00",title:"Air cooling",system:"cooling",design911:39165},"105-05":{ill:"105-05",title:"Air guide",system:"cooling",design911:39166},"105-10":{ill:"105-10",title:"Engine covers / cylinder baffles",system:"cooling"},"108-00":{ill:"108-00",title:"Air injection",system:"cooling"},"108-10":{ill:"108-10",title:"Heater blower",system:"cooling"},"109-00":{ill:"109-00",title:"Engine carrier",system:"crankcase"},"106-00":{ill:"106-00",title:"Air cleaner 911 SC",system:"induction",design911:39168},"107-00":{ill:"107-00",title:"Mixture control unit 911 SC",system:"induction",design911:39171},"107-10":{ill:"107-10",title:"K-Jetronic 911 SC",system:"induction",design911:39174},"202-00":{ill:"202-00",title:"Exhaust system 911 SC",system:"exhaust",design911:39189},"202-05":{ill:"202-05",title:"Exhaust gas recirculation",system:"exhaust"},"202-20":{ill:"202-20",title:"Exhaust system, catalytic converter lines",system:"exhaust"},"301-00":{ill:"301-00",title:"Clutch",system:"clutch",design911:39186},"901-00":{ill:"901-00",title:"Engine electrics (ignition)",system:"ignition"},"902-05":{ill:"902-05",title:"Generator / starter",system:"cooling"}};function g_(i){var t;const e=(t=Ah[i])==null?void 0:t.design911;return e?`https://www.design911.com/diagrams/d/${e}/0`:void 0}const $e=i=>document.getElementById(i),Io=`Type ${Rc}`;document.title=`911 SC 3.0 Engine — ${Io} teardown`;const wc=document.getElementById("variant-label");wc&&(wc.textContent=`${Io} · 2994 cc flat-six`);var Ac;(Ac=document.querySelector('meta[name="description"]'))==null||Ac.setAttribute("content",`Interactive, disassemblable 3D model of the 1978 Porsche 911 SC 3.0 air-cooled flat-six (${Io}, US).`);const xe=new c_($e("view"));window.viewer=xe;const Pt=i=>i.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Ar=()=>Eh(xe.emissions);function hi(){const i=Ar(),e=i.length,t=xe.step;$e("step-title").textContent=t===0?"Assembled engine":`${t}/${e} · ${i[t-1].title}`,$e("step-note").textContent=t===0?`Next: ${i[0].title}. Tap › to disassemble in factory order.`:t===e?"Teardown complete — right case half on the stand.":`${i[t-1].note}  Next: ${i[t].title}.`,$e("btn-back").disabled=t===0,$e("btn-next").disabled=t===e,$e("step-bar").style.width=`${t/e*100}%`,Ps()}$e("btn-next").onclick=()=>{xe.step<Ar().length&&(xe.setStep(xe.step+1),hi())};$e("btn-back").onclick=()=>{xe.step>0&&(xe.setStep(xe.step-1),hi())};function b_(){const i=new URLSearchParams(location.search).get(Ms);if(i==="1"||i==="0")return i==="1";try{return localStorage.getItem(Ms)==="1"}catch{return!1}}function __(i){try{localStorage.setItem(Ms,i?"1":"0")}catch{}const e=new URL(location.href);i?e.searchParams.set(Ms,"1"):e.searchParams.delete(Ms),history.replaceState(null,"",`${e.pathname}${e.search}${e.hash}`)}const Ss=$e("emissions");Ss.checked=b_();xe.setEmissions(Ss.checked);Ss.onchange=()=>{__(Ss.checked),xe.setEmissions(Ss.checked),hi()};const Oi=$e("explode");Oi.oninput=()=>{xe.setExplode(+Oi.value/100),$e("explode-val").textContent=`${Oi.value}%`};function Kn(i){xe.select(i);const e=$e("info");if(!i){e.classList.add("hidden"),Ps();return}const t=i_[i],n=t.catalog.map(l=>`<tr><td class="mono">${Pt(l.ill)} · #${Pt(l.pos)}</td><td class="mono pn">${Pt(l.pn)}</td></tr>${l.note?`<tr class="note"><td colspan="2">${Pt(l.note)}</td></tr>`:""}`).join(""),s=Object.entries(t.specs).map(([l,c])=>`<div class="spec"><span>${Pt(l)}</span><b>${Pt(c)}</b></div>`).join(""),r=g_(t.catalog[0].ill),a=Ar(),o=s_(i,a);e.innerHTML=`
    <div class="info-head">
      <div><div class="kicker">${Pt(wh[t.system].label)} · Ill. ${Pt(t.catalog[0].ill)}</div><h2>${Pt(t.name)}</h2></div>
      <button class="icon-btn small" id="info-close" aria-label="Close">✕</button>
    </div>
    <div class="info-body">
      <p>${Pt(t.description)}</p>
      ${s?`<div class="specs">${s}</div>`:""}
      <table class="cat"><tbody>${n}</tbody></table>
      <div class="meta">${xe.isGroupHidden(i)?`Hidden while emissions equipment is ${xe.emissions?"on":"off"}`:o>=0?`Removed at step ${o+1}: ${Pt(a[o].title)}`:"Stays on the engine stand"}${r?` · <a href="${r}" target="_blank" rel="noopener">Catalogue ill. ${Pt(t.catalog[0].ill)} ↗</a>`:""}</div>
    </div>
    <div class="info-actions">
      <button id="act-hide">${xe.hidden.has(i)?"Show":"Hide"}</button>
      <button id="act-iso">${xe.isolated===i?"Show all":"Isolate"}</button>
      <button id="act-focus">Focus</button>
    </div>`,e.classList.remove("hidden"),$e("info-close").onclick=()=>Kn(null),$e("act-hide").onclick=()=>{xe.toggleHidden(i),xe.hidden.has(i)?Kn(null):Kn(i)},$e("act-iso").onclick=()=>{xe.isolate(xe.isolated===i?null:i),xe.isolated?xe.focus(i):xe.resetView(),Kn(i)},$e("act-focus").onclick=()=>xe.focus(i),Ps()}xe.onPick=i=>Kn(i&&i===xe.selected?null:i);const v_=["crankcase","crank","pistons","heads","valvetrain","camdrive","lubrication","cooling","induction","ignition","exhaust","clutch","hardware"];function Ps(){const i=$e("parts-list");if($e("parts").classList.contains("hidden"))return;const e=Cs.filter(t=>!xe.isGroupHidden(t.id));$e("parts-count").textContent=`${e.length}`,i.innerHTML=v_.map(t=>{const n=e.filter(r=>r.system===t);if(!n.length)return"";const s=[...new Set(n.map(r=>r.catalog[0].ill))].map(r=>{var a,o;return(o=(a=Ah[r])==null?void 0:a.ill)!=null?o:r}).join(", ");return`<div class="grp"><div class="grp-head"><span>${Pt(wh[t].label)}</span><small>Ill. ${Pt(s)}</small></div>${n.map(r=>{const a=xe.hidden.has(r.id)||xe.isRemoved(r.id);return`<div class="item ${xe.selected===r.id?"sel":""} ${a?"off":""}" data-id="${r.id}">
        <span class="nm">${Pt(r.name)}</span>
        <button class="eye" data-eye="${r.id}" aria-label="Toggle visibility">${xe.hidden.has(r.id)?"◌":"●"}</button></div>`}).join("")}</div>`}).join("")}$e("parts-list").addEventListener("click",i=>{const e=i.target,t=e.closest("[data-eye]");if(t){xe.toggleHidden(t.dataset.eye),Ps();return}const n=e.closest("[data-id]");if(n){const s=n.dataset.id;Kn(s),!xe.isRemoved(s)&&!xe.hidden.has(s)&&xe.focus(s),window.innerWidth<700&&$e("parts").classList.add("hidden")}});$e("btn-parts").onclick=()=>{$e("parts").classList.toggle("hidden"),Ps()};$e("parts-close").onclick=()=>$e("parts").classList.add("hidden");$e("btn-reset").onclick=()=>{xe.setStep(0),xe.setExplode(0),Oi.value="0",$e("explode-val").textContent="0%",xe.hidden.clear(),xe.isolate(null),Kn(null),xe.resetView(),hi()};xe.start();xe.load("/porsche-911sc-engine/",i=>{$e("load-text").textContent=`Loading parts… ${Math.round(i*100)}%`}).then(()=>{$e("loader").classList.add("done"),hi();const i=new URLSearchParams(location.search);if(i.has("explode")){const s=Math.max(0,Math.min(100,+i.get("explode")));Oi.value=String(s),Oi.dispatchEvent(new Event("input"))}i.has("step")&&(xe.setStep(Math.max(0,Math.min(Ar().length,+i.get("step")))),hi());const e=p_(i.get("view"));if(e&&(xe.setStep(e.step),hi()),i.has("part")&&Kn(i.get("part")),i.has("isolate")&&(xe.isolate(i.get("isolate")),xe.focus(i.get("isolate"))),i.has("only")){const s=new Set(i.get("only").split(",").map(r=>r.trim()).filter(Boolean));for(const r of xe.nodes.keys())s.has(r)||xe.hidden.add(r)}xe.snap();const t={pos:xe.camera.position.toArray(),target:xe.controls.target.toArray()},n=m_({cam:i.get("cam"),target:i.get("target")},t);i.has("cam")&&n!==t?xe.lockQueryCamera(n.pos,n.target):e&&xe.lockQueryCamera(e.pos,e.target),window.__ready=!0}).catch(i=>{$e("load-text").textContent=`Failed to load: ${i}`,console.error(i)});
