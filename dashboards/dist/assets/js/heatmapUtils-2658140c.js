import{ak as v,al as x,am as D,I as b}from"./uuid-854440a9.js";import{n as E}from"./vec4f64-3c9d0901.js";const p=2.4;function L(t){return v(t*p)}function R(t){return x(t)/p}function G(t,o,n,a){let{color:f,ratio:e}=o,{color:c,ratio:r}=n;r===e&&(r===1?e-=1e-6:r+=1e-6);const i=b((a-e)/(r-e),0,1);D(t,f.toArray(),c.toArray(),i)}function S(t){const n=new Uint8ClampedArray(2048);if(t=t.filter(({ratio:r})=>r>=0&&r<=1).sort((r,i)=>r.ratio-i.ratio).map(({color:r,ratio:i})=>({color:r,ratio:Math.max(i,.001)})),t.length<1)return n;let a=t[0],f=t[0],e=1;const c=E();for(let r=0;r<512;r++){const i=(r+.5)/512;for(;i>f.ratio&&e<t.length;)a=f,f=t[e++];G(c,a,f,i),n.set(c,4*r)}return n}function V(t,o,n,a){const{radius:f,fieldOffset:e,field:c}=o,r=Math.round(x(f)),i=new Float64Array(n*a);let s,l=Number.NEGATIVE_INFINITY;const g=T(c,e),A=new Set;for(const w of t){const h=w.getCursor();for(;h.next();){const M=h.getObjectId();if(A.has(M))continue;A.add(M);const u=h.readLegacyPointGeometry(),y=128;if(u.x<-y||u.x>=n+y||u.y<-y||u.y>a+y)continue;const I=+g(h),U=Math.max(0,Math.round(u.x)-r),N=Math.max(0,Math.round(u.y)-r),C=Math.min(a,Math.round(u.y)+r),F=Math.min(n,Math.round(u.x)+r);for(let d=N;d<C;d++)for(let m=U;m<F;m++){const $=d*n+m,j=P(u.x-m,u.y-d,r);s=i[$]+=j*I,s>l&&(l=s)}}}return{matrix:i.buffer,max:l}}function Y(t,o,n,a,f,e){t.canvas.width=t.canvas.height=o,t.clearRect(0,0,o,o);const c=t.getImageData(0,0,o,o);n&&a&&c.data.set(new Uint8ClampedArray(O(o,n,a,f,e))),t.putImageData(c,0,0)}function O(t,o,n,a,f){const e=new Uint32Array(t*t),c="buffer"in o?o:new Float64Array(o),r="buffer"in n?new Uint32Array(n.buffer):new Uint32Array(new Uint8Array(n).buffer),i=r.length/(f-a);for(let s=0;s<c.length;s++){const l=c[s],g=Math.floor((l-a)*i);e[s]=r[b(g,0,r.length-1)]}return e.buffer}function P(t,o,n){const a=Math.sqrt(t**2+o**2)/n;return a>1?0:3/(Math.PI*n**2)*(1-a**2)**2}function _(t,o){return typeof t=="function"?t:t?typeof o=="string"?n=>-1*+n[t]:n=>+n[t]+o:()=>1}function T(t,o){return t!=null?typeof o=="string"?n=>-1*+n.readAttribute(t):n=>+n.readAttribute(t)+o:n=>1}export{p as a,R as c,L as i,Y as l,P as m,V as s,S as u,_ as y};