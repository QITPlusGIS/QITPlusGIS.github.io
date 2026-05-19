const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SSAOBlur.glsl-DfywnRkC.js","assets/VertexColor.glsl-ewiTSNA6.js","assets/index-CdfIpVZ2.js","assets/index-C_nuO9iY.css","assets/ray-2rpMGBl_.js","assets/vectorStacks-DPWDS27b.js","assets/quatf64-ByLuWSDU.js","assets/vec4f64-g2eiNsN7.js","assets/vec4-ge6YUE0o.js","assets/sphere-CVBfzJMe.js","assets/plane-CPUdPpwM.js","assets/mathUtils-DU9dsgdI.js","assets/computeTranslationToOriginAndRotation-De0Gszym.js","assets/projectPointToVector-9_yCsqmX.js","assets/projectVectorToVector-C675Dfzs.js","assets/Indices-COH59WwY.js","assets/BufferView-OnDRsybZ.js","assets/frustum-Bs4Y8gND.js","assets/triangle-C4zvHTg-.js","assets/videoUtils-CPx6cp7x.js","assets/lengthUtils-C-soyk13.js","assets/image-CT3Gm-2A.js","assets/orientedBoundingBox-B0SGpa4r.js","assets/quat-BBzCnaaO.js","assets/Emissions.glsl-CLujNuKd.js","assets/glsl-DR5qAdui.js","assets/HUDIntersectorResult-BjWwl2gl.js","assets/VertexAttributeLocations-BcwAjgrf.js","assets/VertexElementDescriptor-D9CjjSfc.js","assets/renderState-7vOB8LFs.js","assets/ShaderBuilder-DZEqsQYk.js","assets/SSAO.glsl-C8J0fDVy.js","assets/DefaultMaterial.glsl-FDeIdGcn.js","assets/RealisticTree.glsl-B9aPhIEM.js"])))=>i.map(i=>d[i]);
import{$d as e,$n as t,$t as n,Am as r,Do as i,ES as a,Ey as o,Ft as s,Id as c,In as l,Kd as u,Ln as d,Mx as f,N_ as p,Nf as m,Nt as h,P_ as g,Qn as _,Rd as v,Uh as y,Un as b,Yd as x,bS as S,cd as C,ef as ee,ey as te,fd as ne,fi as re,fr as w,fv as ie,gv as ae,ko as oe,lr as se,mr as ce,nr as le,od as ue,rx as de,ud as T,ui as fe,zl as pe}from"./index-CdfIpVZ2.js";import{l as E}from"./vec4-ge6YUE0o.js";import{a as me,i as he}from"./vec4f64-g2eiNsN7.js";import{n as ge}from"./mathUtils-DU9dsgdI.js";import{G as D,H as _e,b as ve,s as ye}from"./BufferView-OnDRsybZ.js";import{_ as be,a as O,c as xe,h as k,i as A,l as Se,n as j,o as Ce,r as we,s as Te,u as M,v as Ee}from"./Emissions.glsl-CLujNuKd.js";import{n as N,t as P}from"./glsl-DR5qAdui.js";import{t as De}from"./ShaderBuilder-DZEqsQYk.js";import{t as Oe}from"./VertexBuffer-BRjy4jEp.js";import{i as ke,l as Ae,u as je}from"./renderState-7vOB8LFs.js";import{$t as Me,A as Ne,Bt as F,Cn as Pe,D as Fe,Et as Ie,F as Le,G as Re,I as ze,It as Be,L as Ve,Lt as He,M as Ue,N as I,Ot as We,P as Ge,Pt as Ke,Q as L,S as qe,Sn as Je,T as Ye,U as Xe,V as Ze,W as R,Wt as Qe,Xt as $e,Yt as et,Z as z,Zt as tt,_ as nt,_n as rt,a as it,an as at,at as ot,b as st,bn as ct,c as lt,en as ut,f as dt,fn as B,gn as ft,h as pt,hn as mt,i as ht,in as gt,it as _t,kt as V,m as vt,mn as H,n as U,nn as yt,nt as bt,o as xt,on as St,pn as Ct,qt as W,r as wt,rt as Tt,s as Et,sn as Dt,t as Ot,tn as kt,tt as At,un as jt,vn as Mt,xn as Nt,yn as G,zt as Pt}from"./VertexColor.glsl-ewiTSNA6.js";import{a as Ft,s as It}from"./FloatArray-DbN2HezN.js";function Lt(e,t){switch(e.fragment.code.add(N`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),t.normalType){case 1:e.attributes.add(`normalCompressed`,`vec2`),e.vertex.code.add(N`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:e.attributes.add(`normal`,`vec3`),e.vertex.code.add(N`vec3 normalModel() {
return normal;
}`);break;default:t.normalType;case 2:case 3:}}function Rt(e,t){let{vertex:n,varyings:r}=e;switch(t.normalType){case 0:case 1:{e.include(Lt,t),r.add(`vNormalWorld`,`vec3`),r.add(`vNormalView`,`vec3`),n.uniforms.add(new L(`transformNormalViewFromGlobal`,e=>e.transformNormalViewFromGlobal));let{hasModelRotationScale:i}=t;i&&n.uniforms.add(new xt(`transformNormalGlobalFromModel`,e=>e.transformNormalGlobalFromModel)),n.code.add(N`
        void forwardNormal() {
          vNormalWorld = ${P(i,N`transformNormalGlobalFromModel * `)} normalModel();
          vNormalView = transformNormalViewFromGlobal * vNormalWorld;
        }
      `);break}case 2:e.vertex.code.add(N`void forwardNormal() {}`);break;default:t.normalType;case 3:}}var zt=class extends it{constructor(){super(...arguments),this.transformNormalViewFromGlobal=c()}},Bt=class extends ht{constructor(){super(...arguments),this.transformNormalGlobalFromModel=c(),this.toMapSpace=he()}},Vt=class{constructor(e,t,n){this.elementSize=t.stride,this._buffer=new Oe(e,It(t,1)),this.resize(n)}destroy(){this._buffer.dispose()}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(e,t,n,r=0){let i=new Uint8Array(this.array,e*this.elementSize,(t-e)*this.elementSize);new Uint8Array(n.array,r*this.elementSize).set(i)}transferAll(){this._buffer.setData(this._array)}transferRange(e,t){let n=e*this.elementSize,r=t*this.elementSize;this._buffer.setSubData(new Uint8Array(this._array),n,n,r)}resize(e){let t=e*this.elementSize,n=new ArrayBuffer(t);this._array&&(e>=this._capacity?new Uint8Array(n).set(new Uint8Array(this._array)):new Uint8Array(n).set(new Uint8Array(this._array).subarray(0,e*this.elementSize))),this._array=n,this._buffer.setSize(t),this._capacity=e}},Ht=class{constructor(e){this.localTransform=e.localTransform,this.globalTransform=e.globalTransform,this.modelOrigin=e.modelOrigin,this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelScaleFactors=e.modelScaleFactors,this.boundingSphere=e.boundingSphere,this.featureAttribute=e.getField(`instanceFeatureAttribute`,ye),this.color=e.getField(`instanceColor`,_e),this.olidColor=e.getField(`instanceOlidColor`,_e),this.state=e.getField(`state`,ve),this.lodLevel=e.getField(`lodLevel`,ve)}},K=class extends ae{constructor(e,t){super(e),this.events=new ie,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=new Map,this._highlightOptionsMapPrev=new Map,this._layout=Gt(t),this._capacity=64,this._buffer=this._layout.createBuffer(this._capacity),this._view=new Ht(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();let e=this._findSlot();return this._view.state.set(e,1),this._size++,this.events.emit(`instances-changed`),e}removeInstance(e){let t=this._view.state;D(e>=0&&e<this._capacity&&!!(1&t.get(e)),`invalid instance handle`),this._getStateFlag(e,18)?this._setStateFlags(e,32):this.freeInstance(e),this.events.emit(`instances-changed`)}freeInstance(e){let t=this._view.state;D(e>=0&&e<this._capacity&&!!(1&t.get(e)),`invalid instance handle`),t.set(e,0),this._size--}setLocalTransform(e,t,n=!0){this._view.localTransform.setMat(e,t),n&&this.updateModelTransform(e)}getLocalTransform(e,t){this._view.localTransform.getMat(e,t)}setGlobalTransform(e,t,n=!0){this._view.globalTransform.setMat(e,t),n&&this.updateModelTransform(e)}getGlobalTransform(e,t){this._view.globalTransform.getMat(e,t)}updateModelTransform(t){let n=this._view,r=q,i=J;n.localTransform.getMat(t,qt),n.globalTransform.getMat(t,Jt);let a=pe(Jt,Jt,qt);w(r,a[12],a[13],a[14]),n.modelOrigin.setVec(t,r),x(i,a),n.model.setMat(t,i);let o=ge(q,a);o.sort(),n.modelScaleFactors.set(t,0,o[1]),n.modelScaleFactors.set(t,1,o[2]),e(i,i),ee(i,i),n.modelNormal.setMat(t,i),this._setStateFlags(t,64),this.events.emit(`instance-transform-changed`,{index:t})}getModelTransform(e,t){let n=this._view;n.model.getMat(e,J),n.modelOrigin.getVec(e,q),t[0]=J[0],t[1]=J[1],t[2]=J[2],t[3]=0,t[4]=J[3],t[5]=J[4],t[6]=J[5],t[7]=0,t[8]=J[6],t[9]=J[7],t[10]=J[8],t[11]=0,t[12]=q[0],t[13]=q[1],t[14]=q[2],t[15]=1}applyShaderTransformation(e,t){this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedModelTransform(e,t){return this.getModelTransform(e,t),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t),t}getCombinedLocalTransform(e,t){this._view.localTransform.getMat(e,t),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedMaxScaleFactor(e){let t=this._view.modelScaleFactors.get(e,1);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(q,this,e),t*=Math.max(q[0],q[1],q[2])),t}getCombinedMedianScaleFactor(e){let t=this._view.modelScaleFactors.get(e,0);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(q,this,e),t*=Ut(q[0],q[1],q[2])),t}getModel(e,t){this._view.model.getMat(e,t)}setFeatureAttribute(e,t){this._view.featureAttribute?.setVec(e,t)}getFeatureAttribute(e,t){this._view.featureAttribute?.getVec(e,t)}setColor(e,t){this._view.color?.setVec(e,t)}setObjectAndLayerIdColor(e,t){this._view.olidColor?.setVec(e,t)}setVisible(e,t){t!==this.getVisible(e)&&(this._setStateFlag(e,4,t),this.events.emit(`instance-visibility-changed`,{index:e}))}getVisible(e){return this._getStateFlag(e,4)}setHighlight(e,t){let{_highlightOptionsMap:n}=this,r=n.get(e);t?t!==r&&(n.set(e,t),this._setStateFlag(e,8,!0),this.events.emit(`instance-highlight-changed`)):r&&(n.delete(e),this._setStateFlag(e,8,!1),this.events.emit(`instance-highlight-changed`))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(e){return this._getStateFlag(e,8)}geHighlightOptionsPrev(e){let t=this._highlightOptionsMapPrev.get(e)??null;return this._highlightOptionsMapPrev.delete(e),t}getHighlightName(e){let t=this.highlightOptionsMap.get(e)??null;return t?this._highlightOptionsMapPrev.set(e,t):this._highlightOptionsMapPrev.delete(e),t}getState(e){return this._view.state.get(e)}getLodLevel(e){return this._view.lodLevel.get(e)}countFlags(e){let t=0;for(let n=0;n<this._capacity;++n)this.getState(n)&e&&++t;return t}_setStateFlags(e,t){let n=this._view.state;t=n.get(e)|t,n.set(e,t)}_clearStateFlags(e,t){let n=this._view.state;t=n.get(e)&~t,n.set(e,t)}_setStateFlag(e,t,n){n?this._setStateFlags(e,t):this._clearStateFlags(e,t)}_getStateFlag(e,t){return!!(this._view.state.get(e)&t)}_grow(){this._capacity=Math.max(64,Math.floor(this._capacity*S)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new Ht(this._buffer)}_findSlot(){let e=this._view.state,t=this._next;for(;1&e.get(t);)t=t+1===this._capacity?0:t+1;return this._next=t+1===this._capacity?0:t+1,t}};function Ut(e,t,n){return Math.max(Math.min(e,t),Math.min(Math.max(e,t),n))}f([p({constructOnly:!0})],K.prototype,`shaderTransformation`,void 0),f([p()],K.prototype,`_size`,void 0),f([p({readOnly:!0})],K.prototype,`size`,null),K=f([g(`esri.views.3d.webgl-engine.lib.lodRendering.InstanceData`)],K);var Wt=Ft().mat4f64(`localTransform`).mat4f64(`globalTransform`).vec4f64(`boundingSphere`).vec3f64(`modelOrigin`).mat3f(`instanceModel`).mat3f(`instanceModelNormal`).vec2f(`modelScaleFactors`);function Gt(e){return Kt(Wt.clone(),e).u8(`state`).u8(`lodLevel`)}function Kt(e,t){return t.instancedFeatureAttribute&&e.vec4f(`instanceFeatureAttribute`),t.instancedColor&&e.vec4u8(`instanceColor`),He()&&e.vec4u8(`instanceOlidColor`),e}var q=T(),J=c(),qt=i(),Jt=i(),Yt=class{constructor(e){this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelOriginHi=e.instanceModelOriginHi,this.modelOriginLo=e.instanceModelOriginLo,this.featureAttribute=e.getField(`instanceFeatureAttribute`,ye),this.color=e.getField(`instanceColor`,_e),this.olidColor=e.getField(`instanceOlidColor`,_e)}},Xt=class{constructor(e,t){this._rctx=e,this._layout=t,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){let e=this._headIndex,t=this._tailIndex;return e>=t?e-t:e+this._capacity-t}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){return this._buffer?.usedMemory??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){D(!this._updating,`already updating`),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){D(this._updating,`not updating`),this.size<.5*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){D(this._updating,`not updating`),this.isFull&&this._grow();let e=this.headIndex;return this._captureFirstIndex&&=(this._firstIndex=e,!1),this._incrementHead(),D(this._headIndex!==this._tailIndex,`invalid pointers`),e}freeTail(){D(this._updating,`not updating`),D(this.size>0,`invalid size`);let e=this._tailIndex===this._firstIndex;this._incrementTail(),e&&(this._firstIndex=this._tailIndex)}_grow(){let e=Math.max(64,Math.floor(this._capacity*S));this._resize(e)}_shrink(){let e=Math.max(64,Math.floor(this._capacity*a));this._resize(e)}_resize(e){if(D(this._updating,`not updating`),e===this._capacity)return;let t=new Vt(this._rctx,this._layout,e);if(this._buffer){this._firstIndex&&=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity;let e=this.size,n=this._compactInstances(t);D(n===e,`invalid compaction`),this._buffer.destroy(),this._tailIndex=0,this._headIndex=n,this._prevHeadIndex=0}this._resized=!0,this._capacity=e,this._buffer=t,this._view=new Yt(this._layout.createView(this._buffer.array))}_compactInstances(e){let t=this._headIndex,n=this._tailIndex;return n<t?(this._buffer.copyRange(n,t,e),t-n):n>t?(this._buffer.copyRange(n,this._capacity,e),t>0&&this._buffer.copyRange(0,t,e,this._capacity-n),t+(this._capacity-n)):0}_incrementHead(e=1){this._headIndex=(this._headIndex+e)%this._capacity}_incrementTail(e=1){this._tailIndex=(this._tailIndex+e)%this._capacity}_transferRange(e,t){e<t?this._buffer.transferRange(e,t):e>t&&(t>0&&this._buffer.transferRange(0,t),this._buffer.transferRange(e,this._capacity))}},Zt=Ft().vec3f(`instanceModelOriginHi`).vec3f(`instanceModelOriginLo`).mat3f(`instanceModel`).mat3f(`instanceModelNormal`);function Qt(e){return Kt(Zt.clone(),e)}function $t({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:n,roughnessFactor:r,emissiveTexture:i,emissiveFactor:a,occlusionTexture:o}){return e==null&&t==null&&i==null&&(a==null||d(a,ue))&&o==null&&(r==null||r===1)&&(n==null||n===1)}var en=C(1,1,.5),tn=C(0,.6,.2),nn=C(0,1,.2);function rn(e){e.vertex.code.add(N`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function an(e,t){t.instancedColor?(e.attributes.add(`instanceColor`,`vec4`),e.vertex.include(_t),e.vertex.include(bt),e.vertex.include(At),e.vertex.code.add(N`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${`instanceColor`}));
      }
    `)):e.vertex.code.add(N`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}var on=c();function sn(e,t){let{hasModelTransformation:n,instancedDoublePrecision:r,instanced:i,output:a,hasVertexTangents:o}=t;n&&(e.vertex.uniforms.add(new Qe(`model`,e=>e.modelTransformation??oe)),e.vertex.uniforms.add(new L(`normalLocalOriginFromModel`,e=>(u(on,e.modelTransformation??oe),on)))),i&&r&&(e.attributes.add(`instanceModelOriginHi`,`vec3`),e.attributes.add(`instanceModelOriginLo`,`vec3`),e.attributes.add(`instanceModel`,`mat3`),e.attributes.add(`instanceModelNormal`,`mat3`));let s=e.vertex;r&&(s.include(Et,t),s.uniforms.add(new H(`viewOriginHi`,e=>Je(w(cn,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),cn)),new H(`viewOriginLo`,e=>Pe(w(cn,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),cn)))),s.code.add(N`
    vec3 getVertexInLocalOriginSpace() {
      return ${n?r?`(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz`:`(model * localPosition()).xyz`:r?`instanceModel * localPosition().xyz`:`localPosition().xyz`};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${r?N`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:`return vpos;`}
    }
    `),s.code.add(N`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${n?r?`normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)`:`normalLocalOriginFromModel * _normal.xyz`:r?`instanceModelNormal * _normal.xyz`:`_normal.xyz`});
    }
    `),a===2&&(Re(s),s.code.add(N`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${n?r?`vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)`:`vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)`:r?`vec4(instanceModelNormal * _normal.xyz, 1.0)`:`_normal`}).xyz);
    }
    `)),o&&s.code.add(N`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${n?r?`return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);`:`return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);`:r?`return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);`:`return _tangent;`}
    }`)}var cn=T();function ln(e,t){e.varyings.add(`colorMixMode`,`int`),e.varyings.add(`opacityMixMode`,`int`),e.vertex.uniforms.add(new Be(`symbolColorMixMode`,e=>F[e.colorMixMode])),t.hasSymbolColors?(e.vertex.include(_t),e.vertex.include(bt),e.vertex.include(At),e.attributes.add(`symbolColor`,`vec4`),e.vertex.code.add(N`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${`symbolColor`}));
    }
  `)):e.vertex.code.add(N`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(N`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${N.int(F.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${N.int(F.ignore)} : symbolColorMixMode;
    }
  `)}function un(e,t){switch(t.output){case 3:case 4:case 5:case 6:e.fragment.code.add(N`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 7:e.fragment.code.add(N`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}function Y(e,t){dn(e,t,new A(`textureAlphaCutoff`,e=>e.textureAlphaCutoff))}function dn(e,t,n){let r=e.fragment,i=t.alphaDiscardMode,a=i===0;i!==2&&i!==3||r.uniforms.add(n),r.code.add(N`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${i===1?`color.a = 1.0;`:`if (color.a < ${a?N.float(I):`textureAlphaCutoff`}) {\n              discard;\n             } ${P(i===2,`else { color.a = 1.0; }`)}`}
    }
  `)}function fn(e,t){let{vertex:n,fragment:r,varyings:i}=e,{hasColorTexture:a,alphaDiscardMode:o}=t,s=a&&o!==1,{output:c,normalType:l,hasColorTextureTransform:u}=t;switch(c){case 1:R(n,t),e.include(U),r.include(V,t),e.include(M,t),s&&r.uniforms.add(new j(`tex`,e=>e.texture)),n.main.add(N`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(Y,t),r.main.add(N`
        discardBySlice(vpos);
        ${P(s,N`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}`);break;case 3:case 4:case 5:case 6:case 9:R(n,t),e.include(U),e.include(M,t),e.include(z,t),e.include(un,t),r.include(V,t),e.include(ot,t),wt(e),i.add(`depth`,`float`,{invariant:!0}),s&&r.uniforms.add(new j(`tex`,e=>e.texture)),n.main.add(N`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(Y,t),r.main.add(N`
        discardBySlice(vpos);
        ${P(s,N`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
               discardOrAdjustAlpha(texColor);`)}
        ${c===9?N`outputObjectAndLayerIdColor();`:N`outputDepth(depth);`}`);break;case 2:{R(n,t),e.include(U),e.include(Lt,t),e.include(Rt,t),e.include(M,t),e.include(z,t),s&&r.uniforms.add(new j(`tex`,e=>e.texture)),l===2&&i.add(`vPositionView`,`vec3`,{invariant:!0});let a=l===0||l===1;n.main.add(N`
        vpos = getVertexInLocalOriginSpace();
        ${a?N`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:N`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(V,t),e.include(Y,t),r.main.add(N`
        discardBySlice(vpos);
        ${P(s,N`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}

        ${l===2?N`vec3 normal = screenDerivativeNormal(vPositionView);`:N`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 8:R(n,t),e.include(U),e.include(M,t),e.include(z,t),s&&r.uniforms.add(new j(`tex`,e=>e.texture)),n.main.add(N`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(V,t),e.include(Y,t),e.include(Ge,t),r.main.add(N`
        discardBySlice(vpos);
        ${P(s,N`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function pn(e,t){return mn(e,t)}function mn(e,t){let n=e.fragment,{hasVertexTangents:r,doubleSidedMode:i,hasNormalTexture:a,textureCoordinateType:o,bindType:s,hasNormalTextureTransform:c}=t;r?(e.attributes.add(`tangent`,`vec4`),e.varyings.add(`vTangent`,`vec4`),i===2?n.code.add(N`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):n.code.add(N`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):n.code.add(N`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),a&&o!==0&&(e.include(Se,t),n.uniforms.add(s===1?new j(`normalTexture`,e=>e.textureNormal):new we(`normalTexture`,e=>e.textureNormal)),c&&(n.uniforms.add(s===1?new mt(`scale`,e=>e.scale??fe):new Ke(`scale`,e=>e.scale??fe)),n.uniforms.add(new L(`normalTextureTransformMatrix`,e=>e.normalTextureTransformMatrix??v))),n.code.add(N`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),c&&n.code.add(N`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),n.code.add(N`return tangentSpace * rawNormal;
}`))}var hn=3e5,gn=5e5,_n=16;function vn(){let e=new De,t=e.fragment;return e.include(ft),e.include(Mt),t.include(ct),t.include(xe),t.uniforms.add(new B(`radius`,e=>yn(e.camera))).code.add(N`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(N`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add(`fragOcclusion`,`float`),t.uniforms.add(new j(`normalMap`,e=>e.normalTexture),new j(`depthMap`,e=>e.depthTexture),new A(`projScale`,e=>e.projScale),new j(`rnm`,e=>e.noiseTexture),new mt(`rnmScale`,(e,t)=>m(bn,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height)),new A(`intensity`,e=>e.intensity),new Nt(`screenSize`,e=>m(bn,e.camera.fullWidth,e.camera.fullHeight))).main.add(N`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${N.int(_n)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${N.int(_n)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * pow(A, 4.0)) * INV_GAMMA;

    fragOcclusion = A;
  `),e}function yn(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}var bn=re(),xn=Object.freeze(Object.defineProperty({__proto__:null,build:vn,getRadius:yn},Symbol.toStringTag,{value:`Module`})),Sn=4;function Cn(){let e=new De,t=e.fragment;e.include(ft);let n=(Sn+1)/2,r=1/(2*n*n);return t.include(ct),t.uniforms.add(new j(`depthMap`,e=>e.depthTexture),new we(`tex`,e=>e.colorTexture),new Ke(`blurSize`,e=>e.blurSize),new A(`projScale`,(e,t)=>{let n=t.camera.distance;return n>5e4?Math.max(0,e.projScale-(n-5e4)):e.projScale})),t.code.add(N`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${N.float(r)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add(`fragBlur`,`float`),t.main.add(N`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${N.int(Sn)}; r <= ${N.int(Sn)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}var wn=Object.freeze(Object.defineProperty({__proto__:null,build:Cn},Symbol.toStringTag,{value:`Module`})),Tn=class extends yt{constructor(){super(...arguments),this.shader=new gt(wn,()=>o(()=>import(`./SSAOBlur.glsl-DfywnRkC.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])))}initializePipeline(){return je({colorWrite:Ae})}};Tn=f([g(`esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique`)],Tn);var En=`eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM`,Dn=class extends at{constructor(){super(...arguments),this.projScale=1}},On=class extends Dn{constructor(){super(...arguments),this.intensity=1}},kn=class extends at{},An=class extends kn{constructor(){super(...arguments),this.blurSize=re()}},jn=class extends yt{constructor(){super(...arguments),this.shader=new gt(xn,()=>o(()=>import(`./SSAO.glsl-C8J0fDVy.js`),__vite__mapDeps([31,2,3,1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])))}initializePipeline(){return je({colorWrite:Ae})}};jn=f([g(`esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique`)],jn);var Mn=class extends St{constructor(e){super(e),this.consumes={required:[`normals`]},this.produces=Dt.SSAO,this.isEnabled=()=>!1,this._enableTime=te(0),this._passParameters=new On,this._drawParameters=new An}initialize(){let e=Uint8Array.from(atob(En),e=>e.charCodeAt(0)),t=new s(32);t.wrapMode=33071,t.pixelFormat=6407,t.wrapMode=10497,t.hasMipmap=!0,this._passParameters.noiseTexture=new h(this.renderingContext,t,e),this.techniques.precompile(jn),this.techniques.precompile(Tn),this.addHandles(y(()=>this.isEnabled(),()=>this._enableTime=te(0)))}destroy(){this._passParameters.noiseTexture=de(this._passParameters.noiseTexture)}render(e){let t=e.find(({name:e})=>e===`normals`),i=t?.getTexture(),a=t?.getTexture(n);if(!i||!a)return;let o=this.techniques.get(jn),s=this.techniques.get(Tn);if(!o.compiled||!s.compiled)return this._enableTime=te(performance.now()),void this.requestRender(1);this._enableTime===0&&(this._enableTime=te(performance.now()));let c=this.renderingContext,l=this.view.qualitySettings.fadeDuration,u=this.bindParameters,d=u.camera,f=d.relativeElevation,p=r((gn-f)/(gn-hn),0,1),h=l>0?Math.min(l,performance.now()-this._enableTime)/l:1,g=h*p;this._passParameters.normalTexture=i,this._passParameters.depthTexture=a,this._passParameters.projScale=1/d.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Nn/yn(d)**6*g;let _=d.fullViewport[2],v=d.fullViewport[3],y=this.fboCache.acquire(_,v,`ssao input`,2);c.bindFramebuffer(y.fbo),c.setViewport(0,0,_,v),c.bindTechnique(o,u,this._passParameters,this._drawParameters),c.screen.draw();let b=Math.round(_/2),x=Math.round(v/2),S=this.fboCache.acquire(b,x,`ssao blur`,0);c.bindFramebuffer(S.fbo),this._drawParameters.colorTexture=y.getTexture(),m(this._drawParameters.blurSize,0,2/v),c.bindTechnique(s,u,this._passParameters,this._drawParameters),c.setViewport(0,0,b,x),c.screen.draw(),y.release();let C=this.fboCache.acquire(b,x,Dt.SSAO,0);return c.bindFramebuffer(C.fbo),c.setViewport(0,0,_,v),c.setClearColor(1,1,1,0),c.clear(16384),this._drawParameters.colorTexture=S.getTexture(),m(this._drawParameters.blurSize,2/_,0),c.bindTechnique(s,u,this._passParameters,this._drawParameters),c.setViewport(0,0,b,x),c.screen.draw(),c.setViewport4fv(d.fullViewport),S.release(),h<1&&this.requestRender(2),C}};f([p()],Mn.prototype,`consumes`,void 0),f([p()],Mn.prototype,`produces`,void 0),f([p({constructOnly:!0})],Mn.prototype,`isEnabled`,void 0),Mn=f([g(`esri.views.3d.webgl-engine.effects.ssao.SSAO`)],Mn);var Nn=.5;function Pn(e,t){t.receiveAmbientOcclusion?(e.uniforms.add(new rt(`ssaoTex`,e=>e.ssao?.getTexture())),e.constants.add(`blurSizePixelsInverse`,`float`,1/2),e.code.add(N`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(N`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Fn(e,t){let n=t.lightingSphericalHarmonicsOrder===void 0?2:t.lightingSphericalHarmonicsOrder;n===0?(e.uniforms.add(new H(`lightingAmbientSH0`,({lighting:e})=>w(In,e.sh.r[0],e.sh.g[0],e.sh.b[0]))),e.code.add(N`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):n===1?(e.uniforms.add(new G(`lightingAmbientSH_R`,({lighting:e})=>E(X,e.sh.r[0],e.sh.r[1],e.sh.r[2],e.sh.r[3])),new G(`lightingAmbientSH_G`,({lighting:e})=>E(X,e.sh.g[0],e.sh.g[1],e.sh.g[2],e.sh.g[3])),new G(`lightingAmbientSH_B`,({lighting:e})=>E(X,e.sh.b[0],e.sh.b[1],e.sh.b[2],e.sh.b[3]))),e.code.add(N`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):n===2&&(e.uniforms.add(new H(`lightingAmbientSH0`,({lighting:e})=>w(In,e.sh.r[0],e.sh.g[0],e.sh.b[0])),new G(`lightingAmbientSH_R1`,({lighting:e})=>E(X,e.sh.r[1],e.sh.r[2],e.sh.r[3],e.sh.r[4])),new G(`lightingAmbientSH_G1`,({lighting:e})=>E(X,e.sh.g[1],e.sh.g[2],e.sh.g[3],e.sh.g[4])),new G(`lightingAmbientSH_B1`,({lighting:e})=>E(X,e.sh.b[1],e.sh.b[2],e.sh.b[3],e.sh.b[4])),new G(`lightingAmbientSH_R2`,({lighting:e})=>E(X,e.sh.r[5],e.sh.r[6],e.sh.r[7],e.sh.r[8])),new G(`lightingAmbientSH_G2`,({lighting:e})=>E(X,e.sh.g[5],e.sh.g[6],e.sh.g[7],e.sh.g[8])),new G(`lightingAmbientSH_B2`,({lighting:e})=>E(X,e.sh.b[5],e.sh.b[6],e.sh.b[7],e.sh.b[8]))),e.code.add(N`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==1&&t.pbrMode!==2||e.code.add(N`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var In=T(),X=he();function Z(e){e.uniforms.add(new H(`mainLightDirection`,e=>e.lighting.mainLight.direction))}function Q(e){e.uniforms.add(new H(`mainLightIntensity`,e=>e.lighting.mainLight.intensity))}function Ln(e){Z(e),Q(e),e.code.add(N`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function Rn(e){e.code.add(N`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(N`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(N`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function zn(e,t){e.include(Ve),t.pbrMode!==1&&t.pbrMode!==2&&t.pbrMode!==5&&t.pbrMode!==6||(e.code.add(N`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(N`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==1&&t.pbrMode!==2||(e.include(Rn),e.code.add(N`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),e.code.add(N`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`))}function Bn(e,t){e.include(Ve),e.code.add(N`
    struct PBRShadingWater {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?`2.2`:`2.0`};
  `),e.code.add(N`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(N`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(N`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(N`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function Vn(e){e.code.add(N`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),e.code.add(N`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function Hn(e){e.code.add(N`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`),e.code.add(N`vec3 tonemapKhronosNeutral(vec3 color, float exposure) {
const float startCompression = 0.76;
const float desaturation = 0.15;
color *= exposure;
float x = min( color.r, min( color.g, color.b ) );
float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
color -= offset;
float peak = max( color.r, max( color.g, color.b ) );
if ( peak < startCompression ) {
return color;
}
float d = 1.0 - startCompression;
float newPeak = 1.0 - d * d / ( peak + d - startCompression );
color *= newPeak / peak;
float g = 1.0 - 1.0 / ( desaturation * ( peak - newPeak ) + 1.0 );
return mix( color, vec3( newPeak ), g );
}`)}function Un(e){e.constants.add(`ambientBoostFactor`,`float`,qe)}function Wn(e){e.uniforms.add(new B(`lightingGlobalFactor`,e=>e.lighting.globalFactor))}function Gn(e,t){let{pbrMode:n,spherical:r,hasColorTexture:i}=t;e.include(Pn,t),n!==0&&e.include(zn,t),e.include(Fn,t),e.include(Ve),e.include(Hn,t),e.include(xe);let a=!(n===2&&!i);switch(a&&e.include(Vn),e.code.add(N`
    ${P(n!==0,`const float GROUND_REFLECTANCE = 0.2;`)}
  `),Un(e),Wn(e),Z(e),e.code.add(N`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${r?N`normalize(vPosWorld)`:N`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),Q(e),e.code.add(N`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),n){case 0:case 4:case 3:e.include(Ln),e.code.add(N`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = linearizeGamma(albedo);
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return delinearizeGamma(outColor);
}`);break;case 1:case 2:e.code.add(N`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDir, vec3 groundNormal, vec3 mrr, float additionalAmbientIrradiance) {
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, groundNormal), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, groundNormal), -1.0, 1.0);
inputs.albedoLinear = linearizeGamma(albedo);
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),e.code.add(N`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?e.uniforms.add(new pt(`hasFillLights`,e=>e.enableFillLights)):e.constants.add(`hasFillLights`,`bool`,!1),e.code.add(N`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),e.uniforms.add(new B(`lightingSpecularStrength`,e=>e.lighting.mainLight.specularStrength),new B(`lightingEnvironmentStrength`,e=>e.lighting.mainLight.environmentStrength)).code.add(N`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),e.code.add(N`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;
        ${a?N`vec3 outColor = blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance);`:N`vec3 outColor = max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance);`}
        return delinearizeGamma(outColor);
      }
    `);break;case 5:case 6:Z(e),Q(e),e.code.add(N`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = linearizeGamma(c);
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = delinearizeGamma(outColorLinear);
return outColor;
}`)}}function Kn(e,t){let n=e.fragment;switch(n.code.add(N`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case 0:n.code.add(N`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:n.code.add(N`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:n.code.add(N`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:t.doubleSidedMode;case 3:}}function qn(e,t){let n=t.pbrMode,r=e.fragment;if(n!==2&&n!==0&&n!==1)return void r.code.add(N`void applyPBRFactors() {}`);if(n===0)return void r.code.add(N`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(n===2)return void r.code.add(N`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);let{hasMetallicRoughnessTexture:i,hasMetallicRoughnessTextureTransform:a,hasOcclusionTexture:o,hasOcclusionTextureTransform:s,bindType:c}=t;(i||o)&&e.include(Se,t),r.code.add(N`vec3 mrr;
float occlusion;`),i&&r.uniforms.add(c===1?new j(`texMetallicRoughness`,e=>e.textureMetallicRoughness):new we(`texMetallicRoughness`,e=>e.textureMetallicRoughness)),o&&r.uniforms.add(c===1?new j(`texOcclusion`,e=>e.textureOcclusion):new we(`texOcclusion`,e=>e.textureOcclusion)),r.uniforms.add(c===1?new O(`mrrFactors`,e=>e.mrrFactors):new Ce(`mrrFactors`,e=>e.mrrFactors)),r.code.add(N`
    ${P(i,N`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${P(o,`void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }`)}

    float getBakedOcclusion() {
      return ${o?`occlusion`:`1.0`};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${P(i,`applyMetallicRoughness(${a?`metallicRoughnessUV`:`vuv0`});`)}
      ${P(o,`applyOcclusion(${s?`occlusionUV`:`vuv0`});`)}
    }
  `)}function Jn(e,t){let n=k(t.output)&&t.receiveShadows;n&&lt(e,!0),e.vertex.code.add(N`
    void forwardLinearDepthToReadShadowMap() { ${P(n,`forwardLinearDepth(gl_Position.w);`)} }
  `)}var Yn=class extends Te{constructor(e,t,n,r){super(e,`mat4`,2,(n,i,a,o)=>n.setUniformMatrices4fv(e,t(i,a,o),r),n)}},Xn=class extends Te{constructor(e,t,n,r){super(e,`mat4`,1,(n,i,a)=>n.setUniformMatrices4fv(e,t(i,a),r),n)}};function Zn(e){e.fragment.uniforms.add(new Xn(`shadowMapMatrix`,(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),$n(e)}function Qn(e){e.fragment.uniforms.add(new Yn(`shadowMapMatrix`,(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),$n(e)}function $n(e){let{fragment:t}=e;t.uniforms.add(new G(`cascadeDistances`,e=>e.shadowMap.cascadeDistances),new Le(`numCascades`,e=>e.shadowMap.numCascades)),t.code.add(N`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`)}function er(e){e.fragment.code.add(N`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}var tr=class extends Te{constructor(e,t){super(e,`sampler2DShadow`,0,(n,r)=>n.bindTexture(e,t(r)))}};function nr(e,t){t.receiveShadows&&e.include(Zn),ir(e,t)}function rr(e,t){t.receiveShadows&&e.include(Qn),ir(e,t)}function ir(e,t){e.fragment.uniforms.add(new B(`lightingGlobalFactor`,e=>e.lighting.globalFactor));let{receiveShadows:n,spherical:r}=t;e.include(Jn,t),n&&ar(e),e.fragment.code.add(N`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${n?`max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))`:P(r,`lightingGlobalFactor * (1.0 - additionalAmbientScale)`,`0.0`)};
    }
  `)}function ar(e){e.include(er),e.fragment.uniforms.add(new tr(`shadowMap`,({shadowMap:e})=>e.depthTexture)).code.add(N`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}function or(e,t){t.hasColorTextureTransform?(e.varyings.add(`colorUV`,`vec2`),e.vertex.uniforms.add(new L(`colorTextureTransformMatrix`,e=>e.colorTextureTransformMatrix??v)).code.add(N`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(N`void forwardColorUV(){}`)}function sr(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`normalUV`,`vec2`),e.vertex.uniforms.add(new L(`normalTextureTransformMatrix`,e=>e.normalTextureTransformMatrix??v)).code.add(N`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(N`void forwardNormalUV(){}`)}function cr(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`emissiveUV`,`vec2`),e.vertex.uniforms.add(new L(`emissiveTextureTransformMatrix`,e=>e.emissiveTextureTransformMatrix??v)).code.add(N`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(N`void forwardEmissiveUV(){}`)}function lr(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`occlusionUV`,`vec2`),e.vertex.uniforms.add(new L(`occlusionTextureTransformMatrix`,e=>e.occlusionTextureTransformMatrix??v)).code.add(N`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(N`void forwardOcclusionUV(){}`)}function ur(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`metallicRoughnessUV`,`vec2`),e.vertex.uniforms.add(new L(`metallicRoughnessTextureTransformMatrix`,e=>e.metallicRoughnessTextureTransformMatrix??v)).code.add(N`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(N`void forwardMetallicRoughnessUV(){}`)}function dr(e,t){t.snowCover&&(e.uniforms.add(new B(`snowCover`,e=>e.snowCover)).code.add(N`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),e.code.add(N`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}function fr(e){let t=new De,{attributes:n,vertex:r,fragment:i,varyings:a}=t,{output:o,normalType:s,offsetBackfaces:c,spherical:l,snowCover:u,pbrMode:d,textureAlphaPremultiplied:f,instancedDoublePrecision:p,hasVertexColors:m,hasVertexTangents:h,hasColorTexture:g,hasNormalTexture:_,hasNormalTextureTransform:v,hasColorTextureTransform:y}=e;if(R(r,e),n.add(`position`,`vec3`),a.add(`vpos`,`vec3`,{invariant:!0}),t.include(z,e),t.include(sn,e),t.include(st,e),t.include(or,e),!k(o))return t.include(fn,e),t;t.include(sr,e),t.include(cr,e),t.include(lr,e),t.include(ur,e),Xe(r,e),t.include(Lt,e),t.include(U);let b=s===0||s===1;return b&&c&&t.include(rn),t.include(pn,e),t.include(Rt,e),t.include(an,e),a.add(`vPositionLocal`,`vec3`),t.include(M,e),t.include(ln,e),t.include(Ot,e),r.uniforms.add(new Ct(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),a.add(`vcolorExt`,`vec4`),t.include(ze,e),r.include(_t),r.include(Tt),t.include(p?nr:rr,e),r.main.add(N`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${P(b,`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`)}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${P(h,`vTangent = dpTransformVertexTangent(tangent);`)}
    gl_Position = transformPosition(proj, view, vpos);
    ${P(b&&c,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);`)}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${N.int(F.ignore)} && vcolorExt.a < ${N.float(I)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),i.include(Gn,e),i.include(Pn,e),t.include(Y,e),i.include(V,e),t.include(Ue,e),Xe(i,e),i.uniforms.add(r.uniforms.get(`localOrigin`),new O(`ambient`,e=>e.ambient),new O(`diffuse`,e=>e.diffuse),new A(`opacity`,e=>e.opacity),new A(`layerOpacity`,e=>e.layerOpacity)),g&&i.uniforms.add(new j(`tex`,e=>e.texture)),t.include(qn,e),i.include(zn,e),i.include(Ze),t.include(Kn,e),i.include(dr,e),Un(i),Wn(i),Q(i),i.main.add(N`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${g?N`
            vec4 texColor = texture(tex, ${y?`colorUV`:`vuv0`});
            ${P(f,`texColor.rgb /= texColor.a;`)}
            discardOrAdjustAlpha(texColor);`:N`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${s===2?N`vec3 normal = screenDerivativeNormal(vPositionLocal);`:N`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${P(m,`vColor.rgb *`)} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${P(m,`vColor.a * `)} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${_?`mat3 tangentSpace = computeTangentSpace(${h?`normal`:`normal, vpos, vuv0`});\n            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${v?`normalUV`:`vuv0`});`:`vec3 shadingNormal = normal;`}
    vec3 normalGround = ${l?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

    ${P(u,N`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${d===1||d===2?N`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${P(u,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:N`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${P(u,`, snow`)});
  `),t}var pr=Object.freeze(Object.defineProperty({__proto__:null,build:fr},Symbol.toStringTag,{value:`Module`})),mr=class extends zt{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=en,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType=`normal`,this.cullFace=2,this.instanced=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.instanceColorEncodesAlphaIgnore=!1,this.emissiveStrengthFromSymbol=0,this.emissiveStrengthKHR=1,this.emissiveSource=1,this.emissiveBaseColor=ue,this.instancedDoublePrecision=!1,this.normalType=0,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=C(.2,.2,.2),this.diffuse=C(.8,.8,.8),this.externalColor=me(1,1,1,1),this.colorMixMode=`multiply`,this.opacity=1,this.layerOpacity=1,this.origin=T(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=0,this.textureAlphaMode=0,this.textureAlphaCutoff=I,this.textureAlphaPremultiplied=!1,this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}},hr=class extends Bt{constructor(){super(...arguments),this.origin=T(),this.slicePlaneLocalOrigin=this.origin}},gr=class extends yt{constructor(e,t){let n=It(yr(t));t.instanced&&t.instancedDoublePrecision&&(n=n.concat(It(Qt(t)))),super(e,t,n),this.shader=new gt(pr,()=>o(()=>import(`./DefaultMaterial.glsl-FDeIdGcn.js`),__vite__mapDeps([32,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])))}_makePipeline(e,t){let{oitPass:n,output:r,hasEmission:i,transparent:a,cullFace:o,customDepthTest:s,hasOccludees:c}=e;return je({blending:k(r)&&a?$e(n):null,culling:vr(e)?ke(o):null,depthTest:ut(n,_r(s)),depthWrite:Me(e),drawBuffers:kt(r,tt(n,i)),colorWrite:Ae,stencilWrite:c?Fe:null,stencilTest:c?t?Ne:Ye:null,polygonOffset:et(e)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e,t){return t?this._occludeePipelineState:super.getPipeline(e)}};function _r(e){switch(e){case 1:return 515;case 0:case 3:return 513;case 2:return 516}}function vr(e){return e.cullFace!==0||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}function yr(e){let t=Ft().vec3f(`position`);return e.normalType===1?t.vec2i16(`normalCompressed`,{glNormalized:!0}):t.vec3f(`normal`),e.hasVertexTangents&&t.vec4f(`tangent`),e.hasTextures&&t.vec2f16(`uv0`),e.hasVertexColors&&t.vec4u8(`color`,{glNormalized:!0}),e.hasSymbolColors&&t.vec4u8(`symbolColor`),!e.instanced&&He()&&t.vec4u8(`olidColor`),t}gr=f([g(`esri.views.3d.webgl-engine.shaders.DefaultMaterialTechnique`)],gr);var $=class extends We{constructor(e){super(),this.spherical=e,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.pbrMode=0,this.cullFace=0,this.normalType=0,this.customDepthTest=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instanced=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return+!!this.hasTextures}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}get hasVVInstancing(){return this.instanced}get discardInvisibleFragments(){return this.transparent}};f([W({count:4})],$.prototype,`alphaDiscardMode`,void 0),f([W({count:3})],$.prototype,`doubleSidedMode`,void 0),f([W({count:7})],$.prototype,`pbrMode`,void 0),f([W({count:3})],$.prototype,`cullFace`,void 0),f([W({count:3})],$.prototype,`normalType`,void 0),f([W({count:3})],$.prototype,`customDepthTest`,void 0),f([W({count:8})],$.prototype,`emissionSource`,void 0),f([W()],$.prototype,`hasVertexColors`,void 0),f([W()],$.prototype,`hasSymbolColors`,void 0),f([W()],$.prototype,`hasVerticalOffset`,void 0),f([W()],$.prototype,`hasColorTexture`,void 0),f([W()],$.prototype,`hasMetallicRoughnessTexture`,void 0),f([W()],$.prototype,`hasOcclusionTexture`,void 0),f([W()],$.prototype,`hasNormalTexture`,void 0),f([W()],$.prototype,`hasScreenSizePerspective`,void 0),f([W()],$.prototype,`hasVertexTangents`,void 0),f([W()],$.prototype,`hasOccludees`,void 0),f([W()],$.prototype,`instanced`,void 0),f([W()],$.prototype,`instancedDoublePrecision`,void 0),f([W()],$.prototype,`hasModelTransformation`,void 0),f([W()],$.prototype,`offsetBackfaces`,void 0),f([W()],$.prototype,`hasVVSize`,void 0),f([W()],$.prototype,`hasVVColor`,void 0),f([W()],$.prototype,`receiveShadows`,void 0),f([W()],$.prototype,`receiveAmbientOcclusion`,void 0),f([W()],$.prototype,`textureAlphaPremultiplied`,void 0),f([W()],$.prototype,`instancedFeatureAttribute`,void 0),f([W()],$.prototype,`instancedColor`,void 0),f([W()],$.prototype,`writeDepth`,void 0),f([W()],$.prototype,`transparent`,void 0),f([W()],$.prototype,`enableOffset`,void 0),f([W()],$.prototype,`terrainDepthTest`,void 0),f([W()],$.prototype,`cullAboveTerrain`,void 0),f([W()],$.prototype,`snowCover`,void 0),f([W()],$.prototype,`hasColorTextureTransform`,void 0),f([W()],$.prototype,`hasEmissionTextureTransform`,void 0),f([W()],$.prototype,`hasNormalTextureTransform`,void 0),f([W()],$.prototype,`hasOcclusionTextureTransform`,void 0),f([W()],$.prototype,`hasMetallicRoughnessTextureTransform`,void 0);function br(e){let t=new De,{attributes:n,vertex:r,fragment:i,varyings:a}=t,{output:o,offsetBackfaces:s,pbrMode:c,snowCover:l,spherical:u}=e,d=c===1||c===2;if(R(r,e),n.add(`position`,`vec3`),a.add(`vpos`,`vec3`,{invariant:!0}),t.include(z,e),t.include(sn,e),t.include(st,e),t.include(ze,e),!k(o))return t.include(fn,e),t;Xe(t.vertex,e),t.include(Lt,e),t.include(U),s&&t.include(rn),a.add(`vNormalWorld`,`vec3`),a.add(`localvpos`,`vec3`,{invariant:!0}),t.include(M,e),t.include(ln,e),t.include(an,e),t.include(Ot,e),r.include(_t),r.include(Tt),r.uniforms.add(new Ct(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),a.add(`vcolorExt`,`vec4`),t.include(e.instancedDoublePrecision?nr:rr,e),r.main.add(N`
    forwardVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${N.int(F.ignore)} && vcolorExt.a < ${N.float(I)};
    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardLinearDepthToReadShadowMap();
    gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${P(s,`offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);`,`basePosition;`)}
  `);let{hasColorTexture:f,hasColorTextureTransform:p}=e;return i.include(Gn,e),i.include(Pn,e),t.include(Y,e),i.include(V,e),t.include(Ue,e),Xe(i,e),Z(i),Un(i),Wn(i),i.uniforms.add(r.uniforms.get(`localOrigin`),r.uniforms.get(`view`),new O(`ambient`,e=>e.ambient),new O(`diffuse`,e=>e.diffuse),new A(`opacity`,e=>e.opacity),new A(`layerOpacity`,e=>e.layerOpacity)),f&&i.uniforms.add(new j(`tex`,e=>e.texture)),t.include(qn,e),i.include(zn,e),i.include(Ze),i.include(dr,e),Q(i),i.main.add(N`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${f?`texture(tex, ${p?`colorUV`:`vuv0`})`:` vec4(1.0)`};
      ${P(f,`${P(e.textureAlphaPremultiplied,`texColor.rgb /= texColor.a;`)}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?N`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:N`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${u?`normalize(vpos + localOrigin)`:`vec3(0.0, 0.0, 1.0)`};

      ${P(l,`vec3 faceNormal = screenDerivativeNormal(vpos);
         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);
         albedo = mix(albedo, vec3(1), snow);`)}

      ${N`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${d?N`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${P(l,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:N`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${P(l,`, 1.0`)});`),t}var xr=Object.freeze(Object.defineProperty({__proto__:null,build:br},Symbol.toStringTag,{value:`Module`})),Sr=class extends gr{constructor(){super(...arguments),this.shader=new gt(xr,()=>o(()=>import(`./RealisticTree.glsl-B9aPhIEM.js`),__vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])))}};Sr=f([g(`esri.views.3d.webgl-engine.shaders.RealisticTreeTechnique`)],Sr);var Cr=class extends Ie{constructor(e,t){super(e,Tr),this.materialType=`default`,this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[2,e=>(Ee(e)||be(e))&&!this.transparent],[4,e=>(Ee(e)||be(e))&&this.transparent&&this.parameters.writeDepth],[9,e=>(Ee(e)||be(e))&&this.transparent&&!this.parameters.writeDepth]]),this._layout=yr(this.parameters),this._configuration=new $(t.spherical)}isVisibleForOutput(e){return e!==3&&e!==5&&e!==4||this.parameters.castShadows}get visible(){let{layerOpacity:e,colorMixMode:t,opacity:n,externalColor:r}=this.parameters;return e*(t===`replace`?1:n)*(t===`ignore`||isNaN(r[3])?1:r[3])>=I}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!d(this.parameters.emissiveBaseColor,ue)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===0&&this._hasEmissiveBase||this.parameters.emissiveSource===1)}getConfiguration(e,t){let{parameters:n,_configuration:r}=this,{treeRendering:i,doubleSided:a,doubleSidedType:o}=n;return super.getConfiguration(e,t,this._configuration),r.hasNormalTexture=n.hasNormalTexture,r.hasColorTexture=n.hasColorTexture,r.hasMetallicRoughnessTexture=n.hasMetallicRoughnessTexture,r.hasOcclusionTexture=n.hasOcclusionTexture,r.hasVertexTangents=!i&&n.hasVertexTangents,r.instanced=n.instanced,r.instancedDoublePrecision=n.instancedDoublePrecision,r.hasVVColor=!!n.vvColor,r.hasVVSize=!!n.vvSize,r.hasVerticalOffset=n.verticalOffset!=null,r.hasScreenSizePerspective=n.screenSizePerspective!=null,r.hasSlicePlane=n.hasSlicePlane,r.alphaDiscardMode=n.textureAlphaMode,r.normalType=i?0:n.normalType,r.transparent=this.transparent,r.writeDepth=n.writeDepth,r.customDepthTest=n.customDepthTest??0,r.hasOccludees=t.hasOccludees,r.cullFace=n.hasSlicePlane?0:n.cullFace,r.cullAboveTerrain=t.cullAboveTerrain,r.hasModelTransformation=!i&&n.modelTransformation!=null,r.hasVertexColors=n.hasVertexColors,r.hasSymbolColors=n.hasSymbolColors,r.doubleSidedMode=i?2:a&&o===`normal`?1:a&&o===`winding-order`?2:0,r.instancedFeatureAttribute=n.instancedFeatureAttribute,r.instancedColor=n.instancedColor,k(e)?(r.terrainDepthTest=t.terrainDepthTest,r.receiveShadows=n.receiveShadows,r.receiveAmbientOcclusion=n.receiveAmbientOcclusion&&t.ssao!=null):(r.terrainDepthTest=!1,r.receiveShadows=r.receiveAmbientOcclusion=!1),r.textureAlphaPremultiplied=!!n.textureAlphaPremultiplied,r.pbrMode=n.usePBR?n.isSchematic?2:1:0,r.emissionSource=n.emissionSource,r.offsetBackfaces=!(!this.transparent||!n.offsetTransparentBackfaces),r.enableOffset=t.enableOffset,r.snowCover=t.snowCover>0,r.hasColorTextureTransform=!!n.colorTextureTransformMatrix,r.hasNormalTextureTransform=!!n.normalTextureTransformMatrix,r.hasEmissionTextureTransform=!!n.emissiveTextureTransformMatrix,r.hasOcclusionTextureTransform=!!n.occlusionTextureTransformMatrix,r.hasMetallicRoughnessTextureTransform=!!n.metallicRoughnessTextureTransformMatrix,r}intersect(e,n,r,i,a,o){if(this.parameters.verticalOffset!=null){let e=r.camera;w(Mr,n[12],n[13],n[14]);let o=null;switch(r.viewingMode){case 1:o=_(Ar,Mr);break;case 2:o=se(Ar,kr)}let s=le(Nr,Mr,e.eye),c=t(s),u=ce(s,s,1/c),d=null;this.parameters.screenSizePerspective&&(d=l(o,u));let f=Pt(e,c,this.parameters.verticalOffset,d??0,this.parameters.screenSizePerspective,null);ce(o,o,f),b(jr,o,r.transform.inverseRotation),i=le(Dr,i,jr),a=le(Or,a,jr)}dt(e,r,i,a,jt(r.verticalOffset),o)}createGLMaterial(e){return new wr(e)}createBufferWriter(){return new vt(this._layout)}get transparent(){return Er(this.parameters)}},wr=class extends nt{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});let t=this._material.parameters;this.updateTexture(t.textureId);let n=e.camera.viewInverseTransposeMatrix;return w(t.origin,n[3],n[7],n[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(t.treeRendering?Sr:gr,e)}},Tr=class extends mr{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}get hasNormalTexture(){return!this.treeRendering&&!!this.normalTextureId}get hasColorTexture(){return!!this.textureId}get hasMetallicRoughnessTexture(){return!this.treeRendering&&!!this.metallicRoughnessTextureId}get hasOcclusionTexture(){return!this.treeRendering&&!!this.occlusionTextureId}get emissiveStrength(){return this.emissiveStrengthFromSymbol*this.emissiveStrengthKHR}get emissionSource(){return this.treeRendering?0:this.emissiveTextureId!=null&&this.emissiveSource===0?3:this.emissiveSource===0?2:1}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}};function Er(e){let{drivenOpacity:t,opacity:n,externalColor:r,layerOpacity:i,texture:a,textureId:o,textureAlphaMode:s,colorMixMode:c}=e,l=r[3];return t||n<1&&c!==`replace`||l<1&&c!==`ignore`||i<1||(a!=null||o!=null)&&s!==1&&s!==2&&c!==`replace`}var Dr=T(),Or=T(),kr=ne(0,0,1),Ar=T(),jr=T(),Mr=T(),Nr=T();export{K as A,un as C,tn as D,$t as E,Xt as O,gn as S,en as T,Pn as _,dr as a,vn as b,Kn as c,Gn as d,Hn as f,Fn as g,Z as h,fr as i,Qt as k,Wn as l,Q as m,br as n,rr as o,Bn as p,hr as r,qn as s,Cr as t,Un as u,Cn as v,nn as w,hn as x,yn as y};