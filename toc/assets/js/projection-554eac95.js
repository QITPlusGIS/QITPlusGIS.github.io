import{V as L,cv as M,cw as g,cx as _,cy as E,cz as O,cA as b,cB as z,cC as N,c5 as j,c6 as w,bD as R,cD as x,cE as D,cF as h,cG as V}from"./index-95bf5a29.js";import{c as A}from"./spatialReferenceEllipsoidUtils-b74d3035.js";import{i as m,T as u}from"./BufferView-41ba25a0.js";import{n as v,s as $}from"./vec32-ee2bae08.js";const F=L.getLogger("esri.geometry.support.meshUtils.normalProjection");function q(r,e,t,a,o){return C(a)?(l(s.TO_PCPF,m.fromTypedArray(r),u.fromTypedArray(e),u.fromTypedArray(t),a,m.fromTypedArray(o)),o):(F.error("Cannot convert spatial reference to PCPF"),o)}function H(r,e,t,a,o){return C(a)?(l(s.FROM_PCPF,m.fromTypedArray(r),u.fromTypedArray(e),u.fromTypedArray(t),a,m.fromTypedArray(o)),o):(F.error("Cannot convert to spatial reference from PCPF"),o)}function I(r,e,t){return M(r,e,0,t,A(e),0,r.length/3),t}function J(r,e,t){return M(r,A(t),0,e,t,0,r.length/3),e}function K(r,e,t){return h(n,t),v(e,r,n),V(n)||$(e,e),e}function Q(r,e,t){if(h(n,t),v(e,r,n,4),V(n)||$(e,e,4),r!==e)for(let a=3;a<r.length;a+=4)e[a]=r[a];return e}function X(r,e,t,a,o){if(!C(a))return F.error("Cannot convert spatial reference to PCPF"),o;l(s.TO_PCPF,m.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),u.fromTypedArray(e),u.fromTypedArray(t),a,m.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let c=3;c<r.length;c+=4)o[c]=r[c];return o}function Z(r,e,t,a,o){if(!C(a))return F.error("Cannot convert to spatial reference from PCPF"),o;l(s.FROM_PCPF,m.fromTypedArray(r,16),u.fromTypedArray(e),u.fromTypedArray(t),a,m.fromTypedArray(o,16));for(let c=3;c<r.length;c+=4)o[c]=r[c];return o}function l(r,e,t,a,o,c){if(!e)return;const d=t.count,i=A(o);if(B(o))for(let f=0;f<d;f++)a.getVec(f,p),e.getVec(f,y),g(i,p,T,i),_(n,T),r===s.FROM_PCPF&&E(n,n),O(y,y,n),c.setVec(f,y);else for(let f=0;f<d;f++){a.getVec(f,p),e.getVec(f,y),g(i,p,T,i),_(n,T);const S=b(t.get(f,1));let P=Math.cos(S);r===s.TO_PCPF&&(P=1/P),n[0]*=P,n[1]*=P,n[2]*=P,n[3]*=P,n[4]*=P,n[5]*=P,r===s.FROM_PCPF&&E(n,n),O(y,y,n),z(y,y),c.setVec(f,y)}return c}function C(r){return B(r)||G(r)}function B(r){return r.isWGS84||N(r)||j(r)||w(r)}function G(r){return r.isWebMercator}var s;(function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"})(s||(s={}));const p=R(),y=R(),T=x(),n=D();export{J as E,K as M,Q as O,X as R,q as _,I as h,H as j,Z as v};