import{d as Lt,ft as yt,C as O,a3 as Bt,R as mt,a as $,bK as It,c as $t,fT as Vt,fU as jt,fV as Wt,c9 as Gt,f8 as qt,y as M,fW as zt,bJ as ht,c8 as b,fM as rt,s as At,dN as et,fX as Ht,bY as Ut,fY as Yt,bH as Dt,bI as Kt,fZ as nt,ce as kt,eM as Jt,aL as Xt}from"./uuid-854440a9.js";import{e as Pt}from"./mat3f64-221ce671.js";import{o as Zt,q as Qt,r as tr,P as rr,h as Ft,B as er,C as nr,c as or,f as ar}from"./mat4-8067289c.js";import{e as E,o as j}from"./mat4f64-1413b4a7.js";import{a as ot,o as at,g as H,B as Tt}from"./mat3-5955b3db.js";import{k as it,l as ir,A as sr,q as f,t as N,n as q,D as lr}from"./arcgisLayerUrl-db50ff50.js";import{c as w}from"./spatialReferenceEllipsoidUtils-58036814.js";import{m as cr,t as st,o as ur}from"./MeshLocalVertexSpace-a09ecc4a.js";import{m as fr}from"./MeshGeoreferencedRelativeVertexSpace-e8f55994.js";import{v as K,y as pr,x as gr}from"./quat-2a735b6f.js";import{e as Z}from"./quatf64-3363c48e.js";import{n as C,s as Mt,r as v}from"./vec32-f66df3e3.js";import{i as F,T}from"./BufferView-86b5a532.js";function Rt(t,r,e){const n=Math.sin(t),o=Math.cos(t),a=Math.sin(r),s=Math.cos(r),i=e;return i[0]=-n,i[4]=-a*o,i[8]=s*o,i[12]=0,i[1]=o,i[5]=-a*n,i[9]=s*n,i[13]=0,i[2]=0,i[6]=s,i[10]=a,i[14]=0,i[3]=0,i[7]=0,i[11]=0,i[15]=1,i}function yr(t,r,e){return Rt(t,r,e),Zt(e,e),e}function z(t,r,e,n){if(t==null||n==null)return!1;const o=it(t,ir),a=it(n,sr);if(o===a&&!lt(a)&&(o!==f.UNKNOWN||Lt(t,n)))return Qt(e,r),!0;if(lt(a)){const s=N[o][f.LON_LAT],i=N[f.LON_LAT][a];return s!=null&&i!=null&&(s(r,0,A,0),i(A,0,P,0),Rt(S*A[0],S*A[1],e),e[12]=P[0],e[13]=P[1],e[14]=P[2],!0)}if((a===f.WEB_MERCATOR||a===f.PLATE_CARREE)&&(o===f.WGS84||o===f.CGCS2000&&a===f.PLATE_CARREE||o===f.SPHERICAL_ECEF||o===f.WEB_MERCATOR)){const s=N[o][f.LON_LAT],i=N[f.LON_LAT][a];return s!=null&&i!=null&&(s(r,0,A,0),i(A,0,P,0),o===f.SPHERICAL_ECEF?yr(S*A[0],S*A[1],e):tr(e),e[12]=P[0],e[13]=P[1],e[14]=P[2],!0)}return!1}function lt(t){return t===f.SPHERICAL_ECEF||t===f.SPHERICAL_MARS_PCPF||t===f.SPHERICAL_MOON_PCPF}const S=yt(1),A=O(),P=O();let W=class extends Bt(mt){constructor(){super({}),this.type="georeferenced",this.isRelative=!1,this.isGeoreferenced=!0}};$([It({georeferenced:"georeferenced"},{readOnly:!0})],W.prototype,"type",void 0),W=$([$t("esri.geometry.support.MeshGeoreferencedVertexSpace")],W);const mr=W;function d(t=dt){return[t[0],t[1],t[2],t[3]]}function G(t,r,e=d()){return Gt(e,t),e[3]=r,e}function ct(t,r,e=d()){return K(L,t,k(t)),K(ut,r,k(r)),pr(L,ut,L),hr(e,qt(gr(e,L)))}function te(t,r,e,n=d()){return G(Vt,t,B),G(jt,r,ft),G(Wt,e,pt),ct(B,ft,B),ct(B,pt,n),n}function re(t){return t}function $r(t){return t[3]}function k(t){return yt(t[3])}function hr(t,r){return t[3]=r,t}const dt=[0,0,1,0],L=Z(),ut=Z();d();const B=d(),ft=d(),pt=d();var J;let m=J=class extends mt{constructor(t){super(t),this.translation=O(),this.rotationAxis=zt(dt),this.rotationAngle=0,this.scale=ht(1,1,1)}get rotation(){return G(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=b(t),this.rotationAngle=$r(t)}get localMatrix(){const t=E();return K(gt,this.rotation,k(this.rotation)),rr(t,gt,this.translation,this.scale),t}get localMatrixInverse(){return Ft(E(),this.localMatrix)}applyLocal(t,r){return rt(r,t,this.localMatrix)}applyLocalInverse(t,r){return rt(r,t,this.localMatrixInverse)}equals(t){return this===t||t!=null&&er(this.localMatrix,t.localMatrix)}clone(){const t={translation:b(this.translation),rotationAxis:b(this.rotationAxis),rotationAngle:this.rotationAngle,scale:b(this.scale)};return new J(t)}};$([M({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"translation",void 0),$([M({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"rotationAxis",void 0),$([M({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"rotationAngle",void 0),$([M({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"scale",void 0),$([M()],m.prototype,"rotation",null),$([M()],m.prototype,"localMatrix",null),$([M()],m.prototype,"localMatrixInverse",null),m=J=$([$t("esri.geometry.support.MeshTransform")],m);const gt=Z(),Ar=m;function Ct(t,r){return t.isGeographic||t.isWebMercator&&((r==null?void 0:r.geographic)??!0)}function ee(t,r,e){const n=!t.isGeoreferenced;(e==null?void 0:e.geographic)!=null&&e.geographic!==n&&At.getLogger(r).warnOnce(`Specifying the 'geographic' parameter (${e.geographic}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}const U=At.getLogger("esri.geometry.support.meshUtils.normalProjection");function Pr(t,r,e,n,o){return D(n)?(Y(h.TO_PCPF,F.fromTypedArray(t),T.fromTypedArray(r),T.fromTypedArray(e),n,F.fromTypedArray(o)),o):(U.error("Cannot convert spatial reference to PCPF"),o)}function Fr(t,r,e,n,o){return D(n)?(Y(h.FROM_PCPF,F.fromTypedArray(t),T.fromTypedArray(r),T.fromTypedArray(e),n,F.fromTypedArray(o)),o):(U.error("Cannot convert to spatial reference from PCPF"),o)}function Tr(t,r,e){return q(t,r,0,e,w(r),0,t.length/3),e}function Mr(t,r,e){return q(t,w(e),0,r,e,0,t.length/3),r}function Rr(t,r,e){return H(u,e),C(r,t,u),Tt(u)||Mt(r,r),r}function dr(t,r,e){if(H(u,e),C(r,t,u,4),Tt(u)||Mt(r,r,4),t!==r)for(let n=3;n<t.length;n+=4)r[n]=t[n];return r}function Cr(t,r,e,n,o){if(!D(n))return U.error("Cannot convert spatial reference to PCPF"),o;Y(h.TO_PCPF,F.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),T.fromTypedArray(r),T.fromTypedArray(e),n,F.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function _r(t,r,e,n,o){if(!D(n))return U.error("Cannot convert to spatial reference from PCPF"),o;Y(h.FROM_PCPF,F.fromTypedArray(t,16),T.fromTypedArray(r),T.fromTypedArray(e),n,F.fromTypedArray(o,16));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function Y(t,r,e,n,o,a){if(!r)return;const s=e.count,i=w(o);if(_t(o))for(let c=0;c<s;c++)n.getVec(c,I),r.getVec(c,y),z(i,I,V,i),ot(u,V),t===h.FROM_PCPF&&at(u,u),et(y,y,u),a.setVec(c,y);else for(let c=0;c<s;c++){n.getVec(c,I),r.getVec(c,y),z(i,I,V,i),ot(u,V);const l=Ht(e.get(c,1));let p=Math.cos(l);t===h.TO_PCPF&&(p=1/p),u[0]*=p,u[1]*=p,u[2]*=p,u[3]*=p,u[4]*=p,u[5]*=p,t===h.FROM_PCPF&&at(u,u),et(y,y,u),Ut(y,y),a.setVec(c,y)}return a}function D(t){return _t(t)||xr(t)}function _t(t){return t.isWGS84||Yt(t)||Dt(t)||Kt(t)}function xr(t){return t.isWebMercator}var h;(function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"})(h||(h={}));const I=O(),y=O(),V=E(),u=Pt();function Q(t,r,e){return Ct(r.spatialReference,e)?br(t,r,e):wr(t,r,e)}function xt(t,r=j){const{position:e,normal:n,tangent:o}=t;return{position:v(new Float64Array(e.length),e,r),normal:n!=null?Rr(n,new Float32Array(n.length),r):null,tangent:o!=null?dr(o,new Float32Array(o.length),r):null}}function Et(t,r,e,n){const{position:o,normal:a,tangent:s}=t;return r.isRelative?Q(xt(t,e==null?void 0:e.localMatrix),r.getOriginPoint(n),{geographic:!r.isGeoreferenced}):{position:o,normal:a,tangent:s}}function Er(t,r,e){if(e!=null&&e.useTransform){const{position:n,normal:o,tangent:a}=t,{x:s,y:i,z:c}=r,l=ht(s,i,c??0);return{vertexAttributes:{position:n,normal:o,tangent:a},vertexSpace:e.geographic??1?new cr({origin:l}):new fr({origin:l}),transform:new Ar}}return{vertexAttributes:Q(t,r,e),vertexSpace:new mr,transform:null}}function X(t,r,e){return Ct(r.spatialReference,e)?Br(t,r,e):vt(t,r,e)}function vr(t,r,e,n,o){if(!r.isRelative)return X(t,n,o);const{spatialReference:a}=n,s=Et(t,r,e,a);return n.equals(r.getOriginPoint(a))?vt(s,n,o):X(s,n,o)}function Or({positions:t,transform:r,vertexSpace:e,inSpatialReference:n,outSpatialReference:o,outPositions:a,localMode:s}){const i=e.isRelative?e.origin:nt,c=e.isRelative?(r==null?void 0:r.localMatrix)??j:j;if(e.isGeoreferenced){const g=a??st(t.length);if(nr(c,j)?ur(g,t):v(g,t,c),!kt(i,nt)){const[bt,Nt,St]=i;for(let x=0;x<g.length;x+=3)g[x]+=bt,g[x+1]+=Nt,g[x+2]+=St}return q(g,n,0,g,o,0,g.length/3),g}let l=n;const p=w(n);l=o.isWebMercator&&s||!lr(n,p)?l:p,z(n,i,R,l),or(R,R,c);const _=a??st(t.length);return v(_,t,R),q(_,l,0,_,o,0,_.length/3),_}function wr(t,r,e){const n=new Float64Array(t.position.length),o=t.position,a=r.x,s=r.y,i=r.z??0,c=tt(e?e.unit:null,r.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=o[l]*c+a,n[l+1]=o[l+1]*c+s,n[l+2]=o[l+2]*c+i;return{position:n,normal:t.normal,tangent:t.tangent}}function br(t,r,e){const n=r.spatialReference,o=Ot(r,e,R),a=new Float64Array(t.position.length),s=Nr(t.position,o,n,a),i=H(wt,o);return{position:s,normal:Sr(s,a,t.normal,i,n),tangent:Lr(s,a,t.tangent,i,n)}}function Nr(t,r,e,n){v(n,t,r);const o=new Float64Array(t.length);return Mr(n,o,e)}function Sr(t,r,e,n,o){if(e==null)return null;const a=new Float32Array(e.length);return C(a,e,n),Fr(a,t,r,o,a),a}function Lr(t,r,e,n,o){if(e==null)return null;const a=new Float32Array(e.length);C(a,e,n,4);for(let s=3;s<a.length;s+=4)a[s]=e[s];return _r(a,t,r,o,a),a}function vt(t,r,e){const n=new Float64Array(t.position.length),o=t.position,a=r.x,s=r.y,i=r.z??0,c=tt(e?e.unit:null,r.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=(o[l]-a)/c,n[l+1]=(o[l+1]-s)/c,n[l+2]=(o[l+2]-i)/c;return{position:n,normal:t.normal,tangent:t.tangent}}function Br(t,r,e){const n=r.spatialReference;Ot(r,e,R);const o=Ft(Wr,R),a=new Float64Array(t.position.length),s=Ir(t.position,n,o,a),i=H(wt,o);return{position:s,normal:Vr(t.normal,t.position,a,n,i),tangent:jr(t.tangent,t.position,a,n,i)}}function Ot(t,r,e){z(t.spatialReference,[t.x,t.y,t.z??0],e,w(t.spatialReference));const n=tt(r?r.unit:null,t.spatialReference);return ar(e,e,[n,n,n]),e}function Ir(t,r,e,n){const o=Tr(t,r,n),a=new Float64Array(o.length);return v(a,o,e),a}function Vr(t,r,e,n,o){if(t==null)return null;const a=Pr(t,r,e,n,new Float32Array(t.length));return C(a,a,o),a}function jr(t,r,e,n,o){if(t==null)return null;const a=Cr(t,r,e,n,new Float32Array(t.length));return C(a,a,o,4),a}function tt(t,r){if(t==null)return 1;const e=Jt(r);return 1/Xt(e,"meters",t)}const R=E(),Wr=E(),wt=Pt(),ne=Object.freeze(Object.defineProperty({__proto__:null,applyTransform:xt,georeference:Q,georeferenceApplyTransform:Et,georeferenceByTransform:Er,project:Or,ungeoreference:X,ungeoreferenceByTransform:vr},Symbol.toStringTag,{value:"Module"}));export{Er as B,X as D,vr as E,Or as I,z as L,Ar as N,Mr as O,Cr as R,Q as U,xt as V,Fr as _,d as a,ct as b,ne as c,te as g,Tr as h,Pr as j,re as l,ee as o,mr as p,Et as q,Ct as r,_r as v,k as w};