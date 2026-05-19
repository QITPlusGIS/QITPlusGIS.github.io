const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RibbonLine.glsl-BqTEM9AD.js","assets/VertexColor.glsl-CCcyNZUz.js","assets/index-g2z7tZmX.js","assets/index-DUL7j1AV.css","assets/ray-9rkDSEmB.js","assets/vectorStacks-Ba-8F7i-.js","assets/quatf64-ByLuWSDU.js","assets/vec4f64-g2eiNsN7.js","assets/vec4-EhV_YZ1t.js","assets/sphere-gSPj9acU.js","assets/plane-sTZZww-S.js","assets/mathUtils-Bsq_rj3t.js","assets/computeTranslationToOriginAndRotation-CWNrUyob.js","assets/projectPointToVector-UrZJYNxR.js","assets/projectVectorToVector-CtbASgNp.js","assets/Indices-BMbW8etP.js","assets/BufferView-BoOpt1TT.js","assets/frustum-CAemu3cn.js","assets/triangle-CAeHNt4l.js","assets/videoUtils-BTcclN2P.js","assets/lengthUtils-5R1_fp8g.js","assets/image-BHWSYGVB.js","assets/orientedBoundingBox-CjreB6IT.js","assets/quat-DNvrrj48.js","assets/Emissions.glsl-Cq6CJOc7.js","assets/glsl-DR5qAdui.js","assets/HUDIntersectorResult-Dtl1ZQNk.js","assets/VertexAttributeLocations-BBFJvNg3.js","assets/VertexElementDescriptor-D9CjjSfc.js","assets/renderState-BzV-x6zp.js","assets/ShaderBuilder-DFzFcxY_.js","assets/HUDMaterial.glsl-Bq18p1JB.js"])))=>i.map(i=>d[i]);
import{$n as e,AS as t,Al as n,Am as r,Do as i,Ey as a,Gl as o,Gt as s,Hn as c,Ht as l,Hu as u,Id as d,If as f,In as p,Ku as m,Ln as h,Mx as g,Nf as _,P_ as v,Qn as y,Qt as b,Rn as x,So as S,Un as C,Vn as w,Wl as T,Wn as E,Yb as ee,Yd as D,Yl as te,_f as O,ax as ne,er as k,fd as re,fi as ie,fp as A,fr as j,fu as ae,fv as oe,fy as se,hS as ce,ir as le,jm as ue,ko as de,lr as M,md as fe,mi as pe,mr as N,nm as me,nr as P,ny as he,ry as ge,t_ as _e,tc as ve,ud as F,ur as ye,vf as be,vx as xe,zl as Se,zv as Ce}from"./index-g2z7tZmX.js";import{n as we,r as Te}from"./ElevationInfo-Do0nDaa_.js";import{l as Ee}from"./vec4-EhV_YZ1t.js";import{a as De,c as Oe,i as ke,n as Ae,o as je,t as Me}from"./vec4f64-g2eiNsN7.js";import{i as Ne,n as Pe}from"./Indices-BMbW8etP.js";import{a as Fe,g as Ie,m as Le,w as Re,x as ze,y as Be}from"./plane-sTZZww-S.js";import{r as Ve}from"./mathUtils-Bsq_rj3t.js";import{t as He}from"./computeTranslationToOriginAndRotation-CWNrUyob.js";import{G as Ue,H as We,K as Ge,Z as Ke}from"./BufferView-BoOpt1TT.js";import{i as I}from"./orientedBoundingBox-CjreB6IT.js";import{a as qe,b as Je,d as Ye,g as Xe,h as Ze,i as L,m as Qe,n as $e,y as et}from"./Emissions.glsl-Cq6CJOc7.js";import{n as R,t as z}from"./glsl-DR5qAdui.js";import{a as tt}from"./ray-9rkDSEmB.js";import{c as nt,d as rt,l as it,m as at,n as ot}from"./sphere-gSPj9acU.js";import{i as st}from"./hydratedFeatures-DMjYf6Rs.js";import{t as ct}from"./ShaderBuilder-DFzFcxY_.js";import{n as B,r as lt,t as ut}from"./vec3f32-Ciri_8KN.js";import{a as dt,l as ft,r as pt,u as mt}from"./renderState-BzV-x6zp.js";import{$ as ht,$t as gt,A as _t,At as vt,D as yt,E as bt,En as xt,Et as St,G as Ct,Gt as wt,H as Tt,Ht as Et,I as Dt,J as Ot,Jt as kt,K as At,L as jt,Lt as Mt,M as Nt,Mt as Pt,N as Ft,Nt as It,O as Lt,Ot as Rt,P as zt,R as Bt,Rt as Vt,T as Ht,Tn as Ut,Tt as Wt,U as Gt,V as Kt,W as qt,X as Jt,Xt as Yt,Y as Xt,Z as Zt,Zt as Qt,_ as $t,_n as en,_t as tn,at as nn,bn as rn,ct as an,dt as on,en as sn,fn as cn,ft as ln,g as un,gt as dn,h as fn,hn as pn,in as mn,j as hn,jt as gn,k as _n,kt as vn,lt as yn,mt as bn,nn as xn,pn as Sn,q as Cn,qt as V,st as wn,tn as Tn,ut as En,vt as Dn,w as On,wn as kn,xn as An,y as jn,yn as Mn,zt as Nn}from"./VertexColor.glsl-CCcyNZUz.js";import{t as Pn}from"./Octree-YCOZEQtR.js";import{a as Fn,n as In,r as Ln,s as Rn}from"./FloatArray-LsPhKegW.js";function zn(e){return e===`position`}function Bn(e,t){return e??=[],e.push(t),e}function Vn(e,t){if(e==null)return null;let n=e.filter(e=>e!==t);return n.length===0?null:n}function Hn(e,t,n,r,i){Un[0]=e.get(t,0),Un[1]=e.get(t,1),Un[2]=e.get(t,2),kn(Un,Wn,3),n.set(i,0,Wn[0]),r.set(i,0,Wn[1]),n.set(i,1,Wn[2]),r.set(i,1,Wn[3]),n.set(i,2,Wn[4]),r.set(i,2,Wn[5])}var Un=F(),Wn=new Float32Array(6),Gn=class{constructor(e={}){this.id=Ce(),this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerViewUid=e.layerViewUid,e.isElevationSource&&(this.lastValidElevationBB=new Kn),this._geometries=e.geometries?Array.from(e.geometries):[]}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(e){Ue(this._layer==null||e==null,`Object3D can only be added to a single Layer`),this._layer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e);for(let t of this._highlightIds)e.addHighlight(t);this._emit(`geometryAdded`,{object:this,geometry:e}),this._highlightIds.size&&this._emit(`highlightChanged`,this),this._invalidateBoundingVolume()}removeGeometry(e){let t=this._geometries.splice(e,1)[0];if(t){for(let e of this._highlightIds)t.removeHighlight(e);this._emit(`geometryRemoved`,{object:this,geometry:t}),this._highlightIds.size&&this._emit(`highlightChanged`,this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t,n=!1){this._emit(`attributesChanged`,{object:this,geometry:e,attribute:t,sync:n}),zn(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(let e of this._geometries)e.visible=this._visible;this._emit(`visibilityChanged`,this)}}maskOccludee(){let e=new xt;for(let t of this._geometries)t.occludees=Bn(t.occludees,e);return this._emit(`occlusionChanged`,this),e}removeOcclude(e){for(let t of this._geometries)t.occludees=Vn(t.occludees,e);this._emit(`occlusionChanged`,this)}highlight(e){let t=new Ut(e);for(let e of this._geometries)e.addHighlight(t);return this._emit(`highlightChanged`,this),this._highlightIds.add(t),t}removeHighlight(e){this._highlightIds.delete(e);for(let t of this._geometries)t.removeHighlight(e);this._emit(`highlightChanged`,this)}removeStateID(e){e.channel===0?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return Se(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=i()){return Se(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=new qn,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=new qn,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(e,t){let n=t===1;for(let t of this._geometries){let r=t.boundingInfo;r&&Jn(r,e,n?t.transformation:this.getCombinedShaderTransformation(t))}c(e.bounds.center,e.min,e.max,.5);for(let t of this._geometries){let r=t.boundingInfo;if(r==null)continue;let i=n?t.transformation:this.getCombinedShaderTransformation(t),a=Ve(i);x(Qn,r.center,i);let o=ye(Qn,e.bounds.center),s=r.radius*a;e.bounds.radius=Math.max(e.bounds.radius,o+s)}}_invalidateBoundingVolume(){let e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&e&&this.layer.notifyObjectBBChanged(this,e)}_emit(e,t){this.layer?.events.emit(e,t)}get geometries(){return this._geometries}get transformation(){return this._transformation??de}set transformation(e){this._transformation=te(this._transformation??i(),e),this._invalidateBoundingVolume(),this._emit(`transformationChanged`,this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?te(this._shaderTransformation??i(),e):null,this._invalidateBoundingVolume(),this._emit(`shaderTransformationChanged`,this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}},Kn=class{constructor(){this._data=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE]}get min(){return re(this._data[0],this._data[1],this._data[2])}get max(){return re(this._data[3],this._data[4],this._data[5])}minWith(e){let{_data:t}=this;t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2])}maxWith(e){let{_data:t}=this;t[3]=Math.max(t[3],e[0]),t[4]=Math.max(t[4],e[1]),t[5]=Math.max(t[5],e[2])}assignMinMax(e,t){for(let n=0;n<3;++n)this._data[0+n]=e[n],this._data[3+n]=t[n]}isEmpty(){return this._data[3]<this._data[0]&&this._data[4]<this._data[1]&&this._data[5]<this._data[2]}},qn=class extends Kn{constructor(){super(...arguments),this.bounds=new ot}};function Jn(e,t,r){let i=e.bbMin,a=e.bbMax;if(n(r)){let e=j(Yn,r[12],r[13],r[14]);k(Xn,i,e),k(Zn,a,e),t.minWith(Xn),t.maxWith(Zn);return}if(x(Xn,i,r),h(i,a))return t.minWith(Xn),void t.maxWith(Xn);x(Zn,a,r),t.minWith(Xn),t.minWith(Zn),t.maxWith(Xn),t.maxWith(Zn);for(let e=0;e<3;++e)M(Xn,i),M(Zn,a),Xn[e]=a[e],Zn[e]=i[e],x(Xn,Xn,r),x(Zn,Zn,r),t.minWith(Xn),t.minWith(Zn),t.maxWith(Xn),t.maxWith(Zn)}var Yn=F(),Xn=F(),Zn=F(),Qn=F(),$n=[`layerObjectAdded`,`layerObjectRemoved`,`layerObjectsAdded`,`layerObjectsRemoved`,`transformationChanged`,`shaderTransformationChanged`,`visibilityChanged`,`occlusionChanged`,`highlightChanged`,`geometryAdded`,`geometryRemoved`,`attributesChanged`],er=class{constructor(e,t,n=``){this.stage=e,this.apiLayerViewUid=n,this.id=Ce(),this.events=new oe,this.visible=!0,this.sliceable=!1,this._objectsAdded=[],this._handles=new se,this._objects=new Map,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??0,e.addLayer(this);for(let t of $n)this._handles.add(this.events.on(t,n=>e.handleEvent(t,n)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return t(this._objects.get(e))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit(`layerObjectAdded`,e),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.delete(e.id)&&(this.events.emit(`layerObjectRemoved`,e),e.layer=null,this._octree!=null&&(ce(this._objectsAdded,e)||this._octree.remove([e])))}addMany(e){for(let t of e)this._objects.set(t.id,t),t.layer=this;this.events.emit(`layerObjectsAdded`,e),this._octree!=null&&this._objectsAdded.push(...e)}removeMany(e){let t=[];for(let n of e)this._objects.delete(n.id)&&t.push(n);if(t.length!==0&&(this.events.emit(`layerObjectsRemoved`,t),t.forEach(e=>e.layer=null),this._octree!=null)){for(let e=0;e<t.length;)ce(this._objectsAdded,t[e])?(t[e]=t[t.length-1],--t.length):++e;this._octree.remove(t)}}commit(){this.stage.commitLayer(this)}sync(){this.updatePolicy!==1&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new Pn(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=ne(this._octree),this._objectsAdded.length=0}get test(){}},tr=class{constructor(e,t){this.vec3=e,this.id=t}};function nr(e,t,n,r){return new tr(re(e,t,n),r)}var rr={stableRendering:!1},ir={rootOrigin:null},H={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},ar={dash:H.dash,"dash-dot":[...H.dash,...H.dot],dot:H.dot,"long-dash":H[`long-dash`],"long-dash-dot":[...H[`long-dash`],...H.dot],"long-dash-dot-dot":[...H[`long-dash`],...H.dot,...H.dot],none:null,"short-dash":H[`short-dash`],"short-dash-dot":[...H[`short-dash`],...H[`short-dot`]],"short-dash-dot-dot":[...H[`short-dash`],...H[`short-dot`],...H[`short-dot`]],"short-dot":H[`short-dot`],solid:null},or=8,sr=class{constructor(e,t,n){this.image=e,this.width=t,this.length=n,this.uuid=me()}};function cr(e){return e!=null&&`image`in e}function lr(e,t){return e==null?e:{pattern:e.slice(),pixelRatio:t}}function ur(e){return{pattern:[e,e],pixelRatio:2}}function dr(e){switch(e?.type){case`style`:return fr(e.style);case`image`:return new sr(e.image,e.width,e.length);case void 0:case null:return null}return null}function fr(e){return e==null?null:lr(ar[e],or)}var pr=8;function mr(e,t){let{vertex:n,attributes:r}=e;n.uniforms.add(new L(`intrinsicWidth`,e=>e.width));let{hasScreenSizePerspective:i,spherical:a}=t;i?(e.include(Xt,t),Jt(n),Gt(n,t),n.uniforms.add(new Cn(`inverseViewMatrix`,(e,t)=>T(hr,o(hr,t.camera.viewMatrix,e.origin)))),n.code.add(R`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${a?R`normalize(worldPos + localOrigin)`:R`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):n.code.add(R`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),t.hasVVSize?(r.add(`sizeFeatureAttribute`,`float`),n.uniforms.add(new qe(`vvSizeMinSize`,e=>e.vvSize.minSize),new qe(`vvSizeMaxSize`,e=>e.vvSize.maxSize),new qe(`vvSizeOffset`,e=>e.vvSize.offset),new qe(`vvSizeFactor`,e=>e.vvSize.factor),new qe(`vvSizeFallback`,e=>e.vvSize.fallback)),n.code.add(R`
    float getSize(${z(i,`vec3 pos`)}) {
      float size = isnan(sizeFeatureAttribute)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${z(i,`applyLineSizeScreenSizePerspective(size, pos)`,`size`)};
    }
    `)):(r.add(`size`,`float`),n.code.add(R`
    float getSize(${z(i,`vec3 pos`)}) {
      float fullSize = intrinsicWidth * size;
      return ${z(i,`applyLineSizeScreenSizePerspective(fullSize, pos)`,`fullSize`)};
    }
    `)),t.hasVVOpacity?(r.add(`opacityFeatureAttribute`,`float`),n.constants.add(`vvOpacityNumber`,`int`,8),n.uniforms.add(new ht(`vvOpacityValues`,pr,e=>e.vvOpacity.values),new ht(`vvOpacityOpacities`,pr,e=>e.vvOpacity.opacityValues),new L(`vvOpacityFallback`,e=>e.vvOpacity.fallback,{supportsNaN:!0})),n.code.add(R`
    float interpolateOpacity(float value) {
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity(vec4 color) {
      if (isnan(opacityFeatureAttribute)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${z(t.hasVVColor,`color`,`vec4(color.rgb, vvOpacityFallback)`)};
      }

      return vec4(color.rgb, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):n.code.add(R`vec4 applyOpacity(vec4 color) {
return color;
}`),t.hasVVColor?(e.include(Zt,t),r.add(`colorFeatureAttribute`,`float`),n.code.add(R`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(r.add(`color`,`vec4`),n.code.add(R`vec4 getColor() {
return applyOpacity(color);
}`))}var hr=i();function gr(e){e.vertex.code.add(`#define noPerspectiveWrite(x, w) (x * w)`)}function _r(e){e.fragment.code.add(`#define noPerspectiveRead(x) (x * gl_FragCoord.w)`)}function vr(e){return e.pattern.map(t=>Math.round(t*e.pixelRatio))}function yr(e){if(e==null)return 1;let t=vr(e);return Math.floor(t.reduce((e,t)=>e+t))}function br(e){return e==null?Me:e.length===4?e:Ee(xr,e[0],e[1],e[2],1)}var xr=ke();function Sr(e,t){if(!t.stippleEnabled)return void e.fragment.code.add(R`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);let n=!(t.draped&&t.stipplePreferContinuous),{vertex:r,fragment:i}=e;t.draped||(Gt(r,t),r.uniforms.add(new cn(`worldToScreenPerDistanceRatio`,({camera:e})=>1/e.perScreenPixelRatio)).code.add(R`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add(`vStippleDistance`,`float`),e.varyings.add(`vStippleDistanceLimits`,`vec2`),e.varyings.add(`vStipplePatternStretch`,`float`),r.code.add(R`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${R.float(wr)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),At(r),r.code.add(R`
    vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {

      // First check if the segment is long enough to support fully screen space patterns.
      // Force sparse mode for segments that are very large in screen space even if it is not allowed,
      // to avoid imprecision from calculating with large floats.
      if (segmentLengthPseudoScreen >= ${n?`patternLength`:`1e4`}) {
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        float stretch = repetitions / flooredRepetitions;

        // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
        // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
        vStipplePatternStretch = max(0.75, stretch);

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),i.uniforms.add(new $e(`stipplePatternTexture`,e=>e.stippleTexture),new L(`stipplePatternPixelSizeInv`,e=>1/Cr(e))),t.stippleOffColorEnabled&&i.uniforms.add(new Sn(`stippleOffColor`,e=>br(e.stippleOffColor))),e.include(_r),t.worldSizedImagePattern?(e.varyings.add(`vStippleV`,`float`),e.fragment.include(Kt),i.code.add(R`vec4 getStippleColor(out bool isClamped) {
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = vStippleDistance * stipplePatternPixelSizeInv;
float v = vStippleV == -1.0 ? 0.5 : vStippleV;
return texture(stipplePatternTexture, vec2(u, v));
}
vec4 getStippleColor() {
bool ignored;
return getStippleColor(ignored);
}
float getStippleSDF() {
vec4 color = getStippleColor();
return color.a == 0.0 ? -0.5 : 0.5;
}
float getStippleAlpha(float lineWidth) {
return getStippleColor().a;
}
vec4 blendStipple(vec4 color, float stippleAlpha) {
vec4 stippleColor = getStippleColor();
int mixMode  = 1;
vec3 col = mixExternalColor(color.rgb, vec3(1.0), stippleColor.rgb, mixMode);
float opacity = mixExternalOpacity(color.a, 1.0, stippleColor.a, mixMode);
return vec4(col, opacity);
}`)):i.code.add(R`
    float getStippleSDF(out bool isClamped) {
      float stippleDistanceClamped = noPerspectiveRead(clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y));
      float lineSizeInv = noPerspectiveRead(vLineSizeInv);

      vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
      isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;

      float u = stippleDistanceClamped * stipplePatternPixelSizeInv * lineSizeInv;
      u = fract(u);

      float sdf = texture(stipplePatternTexture, vec2(u, 0.5)).r;

      return (sdf - 0.5) * vStipplePatternStretch + 0.5;
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha(float lineWidth) {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);
      float antiAliasedResult = clamp(stippleSDF * lineWidth + 0.5, 0.0, 1.0);
      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${t.stippleOffColorEnabled?`mix(color, stippleOffColor, stippleAlpha)`:`vec4(color.rgb, color.a * stippleAlpha)`};
    }
  `),i.code.add(R`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${z(!t.stippleOffColorEnabled,`if (stippleAlpha < threshold) { discard; }`)}
    }
  `)}function Cr(e){let t=e.stipplePattern;return cr(t)?t.length:t?yr(t)/t.pixelRatio:1}var wr=.4,Tr=.5,Er=Ae(Tr/2,Tr/2,1-Tr/2,1-Tr/2);function Dr(e){return e===`cross`||e===`x`}function Or(e,t=128,n=t*Tr,r=0){let{data:i,parameters:a}=kr(e,t,n,r);return new Bt(i,a)}function kr(e,t=128,n=t*Tr,r=0){return{data:Ar(e,t,n,r),parameters:{mipmap:!1,wrap:{s:33071,t:33071},width:t,height:t,noUnpackFlip:!0,dataType:s.FLOAT,pixelFormat:6403,internalFormat:l.R16F,reloadable:!0}}}function Ar(e,t=128,n=t*Tr,r=0){switch(e){case`circle`:default:return jr(t,n);case`square`:return Mr(t,n);case`cross`:return Pr(t,n,r);case`x`:return Fr(t,n,r);case`kite`:return Nr(t,n);case`triangle`:return Ir(t,n);case`arrow`:return Lr(t,n)}}function jr(e,t){let n=e/2-.5;return Hr(e,Br(n,n,t/2))}function Mr(e,t){return Rr(e,t,!1)}function Nr(e,t){return Rr(e,t,!0)}function Pr(e,t,n=0){return zr(e,t,!1,n)}function Fr(e,t,n=0){return zr(e,t,!0,n)}function Ir(e,t){return Hr(e,Vr(e/2,t,t/2))}function Lr(e,t){let n=t,r=t/2,i=e/2,a=.8*n,o=Br(i,(e-t)/2-a,Math.sqrt(a*a+r*r)),s=Vr(i,n,r);return Hr(e,(e,t)=>Math.max(s(e,t),-o(e,t)))}function Rr(e,t,n){return n&&(t/=Math.SQRT2),Hr(e,(r,i)=>{let a=r-.5*e+.25,o=.5*e-i-.75;if(n){let e=(a+o)/Math.SQRT2;o=(o-a)/Math.SQRT2,a=e}return Math.max(Math.abs(a),Math.abs(o))-.5*t})}function zr(e,t,n,r=0){t-=r,n&&(t*=Math.SQRT2);let i=.5*t;return Hr(e,(t,a)=>{let o,s=t-.5*e,c=.5*e-a-1;if(n){let e=(s+c)/Math.SQRT2;c=(c-s)/Math.SQRT2,s=e}return s=Math.abs(s),c=Math.abs(c),o=s>c?s>i?Math.sqrt((s-i)*(s-i)+c*c):c:c>i?Math.sqrt(s*s+(c-i)*(c-i)):s,o-=r/2,o})}function Br(e,t,n){return(r,i)=>{let a=r-e,o=i-t;return Math.sqrt(a*a+o*o)-n}}function Vr(e,t,n){let r=Math.sqrt(t*t+n*n);return(i,a)=>{let o=Math.abs(i-e)-n,s=a-e+t/2+.75,c=(t*o+n*s)/r,l=-s;return Math.max(c,l)}}function Hr(e,t){let n=new Float32Array(e*e);for(let r=0;r<e;r++)for(let i=0;i<e;i++)n[i+e*r]=t(i,r)/e;return n}var Ur=.25;function Wr(e,t){let n=e.vertex,r=t.hasScreenSizePerspective;At(n),n.uniforms.get(`markerScale`)??n.constants.add(`markerScale`,`float`,1),n.constants.add(`markerSizePerLineWidth`,`float`,10).code.add(R`
  float getLineWidth(${z(r,`vec3 pos`)}) {
     return max(getSize(${z(r,`pos`)}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),t.space===2&&(n.constants.add(`maxSegmentLengthFraction`,`float`,.45),n.uniforms.add(new cn(`perRenderPixelRatio`,e=>e.camera.perRenderPixelRatio)),n.code.add(R`
  bool areWorldMarkersHidden(vec3 pos, vec3 other) {
    vec3 midPoint = mix(pos, other, 0.5);
    float distanceToCamera = length(midPoint);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    float worldMarkerSize = getScreenMarkerSize(getLineWidth(${z(r,`pos`)})) * screenToWorldRatio;
    float segmentLen = length(pos - other);
    return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
  }

  float getWorldMarkerSize(vec3 pos) {
    float distanceToCamera = length(pos);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    return getScreenMarkerSize(getLineWidth(${z(r,`pos`)})) * screenToWorldRatio;
  }
  `))}var Gr=R`vec4(0.0, 0.0, 2.0, 1.0)`,Kr=he(1),qr=he(1);function Jr(e,t){let{hasAnimation:n,animation:r}=t;if(!n)return;let{attributes:i,varyings:a,vertex:o,fragment:s}=e;i.add(`timeStamps`,`vec4`),a.add(`vTimeStamp`,`float`),a.add(`vFirstTime`,`float`),a.add(`vLastTime`,`float`),a.add(`vTransitionType`,`float`),o.main.add(R`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`),r===3&&s.constants.add(`decayRate`,`float`,2.3),s.code.add(R`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${Yr(r)}
    }`),s.uniforms.add(new L(`timeElapsed`,e=>e.timeElapsed),new L(`trailLength`,e=>e.trailLength),new L(`speed`,e=>e.animationSpeed),new pn(`startEndTime`,e=>_(Xr,e.startTime,e.endTime))),s.constants.add(`fadeInTime`,`float`,qr),s.constants.add(`fadeOutTime`,`float`,Kr),s.constants.add(`incomingTransition`,`int`,0),s.constants.add(`outgoingTransition`,`int`,2),s.code.add(R`float fadeIn(float x) {
return smoothstep(0.0, fadeInTime, x);
}
float fadeOut(float x) {
return isinf(fadeOutTime) ? 1.0 : smoothstep(fadeOutTime, 0.0, x);
}
void updateAlphaIf(inout float alpha, bool condition, float newAlpha) {
alpha = condition ? min(alpha, newAlpha) : alpha;
}
vec4 animate(vec4 color) {
float startTime = startEndTime[0];
float endTime = startEndTime[1];
float totalTime = vLastTime - vFirstTime;
float actualFadeOutTime = min(fadeOutTime * speed, trailLength);
float longStreamlineThreshold = (fadeInTime + 1.0) * speed + actualFadeOutTime;
bool longStreamline = totalTime > longStreamlineThreshold;
float totalTimeWithFadeOut = longStreamline && actualFadeOutTime != trailLength ? totalTime : totalTime + actualFadeOutTime;
float fadeOutStartTime = longStreamline ? totalTime - actualFadeOutTime : totalTime;
float originTime =  -vFirstTime;
float actualEndTime = int(vTransitionType) == outgoingTransition ? min(endTime, startTime + vLastTime / speed) : endTime;
vec4 animatedColor = color;
if (speed == 0.0) {
float alpha = getTrailOpacity((totalTimeWithFadeOut - (vTimeStamp - vFirstTime)) / trailLength);
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
animatedColor.a *= alpha;
return animatedColor;
}
float relativeStartTime = mod(startTime, totalTimeWithFadeOut);
float shiftedTimeElapsed = timeElapsed - relativeStartTime + originTime;
float headRelativeToFirst = mod(shiftedTimeElapsed * speed, totalTimeWithFadeOut);
float vRelativeToHead = headRelativeToFirst - originTime - vTimeStamp;
float vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
if (startTime > timeElapsed) {
return vec4(0.0);
}
float alpha = getTrailOpacity(vRelativeToHead / trailLength);
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, int(vTransitionType) != incomingTransition, step(startTime, vAbsoluteTime));
updateAlphaIf(alpha, headRelativeToFirst > fadeOutStartTime, fadeOut((headRelativeToFirst - fadeOutStartTime) / speed));
alpha *= fadeIn(vTimeStamp - vFirstTime);
animatedColor.a *= alpha;
return animatedColor;
}`)}function Yr(e){switch(e){case 2:return`return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;`;case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return`return 1.0;`}}var Xr=ie(),Zr=1;function Qr(e){let t=new ct,{attributes:n,varyings:r,vertex:i,fragment:a}=t,{applyMarkerOffset:o,draped:s,output:c,capType:l,stippleEnabled:u,falloffEnabled:d,roundJoins:f,wireframe:p,innerColorEnabled:m,hasAnimation:h,hasScreenSizePerspective:g,worldSizedImagePattern:_}=e;a.include(jt),t.include(mr,e),t.include(Sr,e),t.include(nn,e),t.include(Dt,e),t.include(Jr,e);let v=o&&!s;v&&(i.uniforms.add(new L(`markerScale`,e=>e.markerScale)),t.include(Wr,{space:2,hasScreenSizePerspective:g})),qt(i,e),i.uniforms.add(new wt(`inverseProjectionMatrix`,e=>e.camera.inverseProjectionMatrix),new An(`nearFar`,e=>e.camera.nearFar),new L(`miterLimit`,e=>e.join===`miter`?e.miterLimit:0),new Mn(`viewport`,e=>e.camera.fullViewport)),i.constants.add(`LARGE_HALF_FLOAT`,`float`,65500),n.add(`position`,`vec3`),n.add(`previousDelta`,`vec4`),n.add(`nextDelta`,`vec4`),n.add(`lineParameters`,`vec2`),n.add(`u0`,`float`),r.add(`vColor`,`vec4`),r.add(`vpos`,`vec3`,{invariant:!0}),r.add(`vLineDistance`,`float`),r.add(`vLineWidth`,`float`);let y=u;y&&r.add(`vLineSizeInv`,`float`);let b=l===2,x=u&&b,S=d||x;S&&r.add(`vLineDistanceNorm`,`float`),b&&(r.add(`vSegmentSDF`,`float`),r.add(`vReverseSegmentSDF`,`float`)),i.code.add(R`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),i.code.add(R`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),i.code.add(R`void clip(
inout vec4 pos,
inout vec4 prev,
inout vec4 next,
bool isStartVertex
) {
float vnp = nearFar[0] * 0.99;
if (pos.z > -nearFar[0]) {
if (!isStartVertex) {
if (prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if (next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
}`),At(i),i.constants.add(`aaWidth`,`float`,+!u).main.add(R`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y) - 3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${Gr};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = abs(lineParameters.y) < 3.0;
  `),v&&i.main.add(R`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),t.include(gr),i.main.add(R`
      clip(pos, prev, next, isStartVertex);

      vec3 clippedPos = pos.xyz;
      vec3 clippedCenter = mix(pos.xyz, isStartVertex ? next.xyz : prev.xyz, 0.5);

      forwardViewPosDepth(pos.xyz);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);

      float lineSize = getSize(${z(g,`clippedPos`)});
      ${z(u&&g,`float patternLineSize = getSize(clippedCenter);`)}
      ${z(u&&!g,`float patternLineSize = lineSize;`)}

      ${z(_,R`
          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio * worldToScreenRatio;
          if (lineWidth < 1.0) {
            coverage = lineWidth;
            lineWidth = 1.0;
          }
        `,R`
          if (lineSize < 1.0) {
            coverage = lineSize; // convert sub-pixel coverage to alpha
            lineSize = 1.0;
          }

          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${y?R`vLineSizeInv = noPerspectiveWrite(1.0 / lineSize, pos.w);`:``}
  `),(u||b)&&i.main.add(R`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${b?R`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:``}
    `),i.main.add(R`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * lineParameters.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
float subdivisionFactor = lineParameters.x;
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),f?i.main.add(R`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${u?R`min(1.0, subdivisionFactor * ${R.float(3/2)})`:R`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):i.main.add(R`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);let C=l!==0;return i.main.add(R`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${C?R`capDisplacementDir = isStartVertex ? -right : left;`:``}
    }
  `),i.main.add(R`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(lineParameters.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = noPerspectiveWrite(sign(lineParameters.y), pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${S?R`vLineDistanceNorm = lineDistNorm;`:``}

    pos.xy += dpos;
  `),b&&i.main.add(R`vec2 segmentDir = normalize(segment);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir)), pos.w);`),u&&(s?i.uniforms.add(new cn(`worldToScreenRatio`,e=>1/e.screenToPCSRatio)):i.main.add(R`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),i.main.add(R`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),s?i.main.add(R`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):i.main.add(R`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),i.uniforms.add(new L(`stipplePatternPixelSize`,e=>Cr(e))),i.main.add(R`
      float patternLength = patternLineSize * stipplePatternPixelSize;

      ${z(_,R`
          float uu = mix(u0, u0 - segmentLengthRender, isEndVertex);
          vStippleDistanceLimits = vec2(uu, uu + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          // The v-coordinate used in case of an image pattern.
          bool isLeft = sign(lineParameters.y) < 0.0;
          vStippleV = isLeft ? 0.0 : 1.0;
        `,R`
          // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the
          // fragment shader
          vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
        `)}

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of
      // joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1]
        // at the original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen
      // distance
      vStippleDistanceLimits = noPerspectiveWrite(vStippleDistanceLimits, pos.w);
      vStippleDistance = noPerspectiveWrite(vStippleDistance, pos.w);

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e34, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e34);
    `)),i.main.add(R`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a * coverage, pos.w);

      ${p&&!s?`pos.z -= 0.001 * pos.w;`:``}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),t.fragment.include(vn,e),t.include(Nt,e),a.include(Tt),a.main.add(R`discardBySlice(vpos);
discardByTerrainDepth();`),t.include(_r),a.main.add(R`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${z(S,R`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),p?a.main.add(R`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(b&&a.main.add(R`
        float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
        vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${R.float(.003913894324853229)}) {
          discard;
        }
      `),x?a.main.add(R`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        lineDistanceNorm
      );
      float stippleRadius = length(stipplePosition * lineWidth);
      float stippleCapSDF = (stippleRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${R.float(Ft)}, stippleCoverage);
      `):a.main.add(R`float stippleAlpha = getStippleAlpha(lineWidth);`),c!==9&&a.main.add(R`discardByStippleAlpha(stippleAlpha, ${R.float(.003913894324853229)});`),t.include(_r),a.uniforms.add(new Sn(`intrinsicColor`,e=>e.color)).main.add(R`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),m&&a.uniforms.add(new Sn(`innerColor`,e=>e.innerColor??e.color),new L(`innerWidth`,(e,t)=>e.innerWidth*t.camera.pixelRatio)).main.add(R`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),a.main.add(R`vec4 finalColor = blendStipple(color, stippleAlpha);`),d&&(a.uniforms.add(new L(`falloff`,e=>e.falloff)),a.main.add(R`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),u||a.main.add(R`float featherStartDistance = max(lineWidth - 2.0, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),h&&a.main.add(R`
        finalColor = animate(finalColor);

        ${z(c!==9,R`
            if (finalColor.a <= ${R.float(.003913894324853229)}) {
              discard;
            }`)}
      `)),a.main.add(R`outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),t}var $r=Object.freeze(Object.defineProperty({__proto__:null,build:Qr,ribbonlineNumRoundJoinSubdivisions:1},Symbol.toStringTag,{value:`Module`})),ei=class extends xn{constructor(e,t){super(e,t,Rn(ni(t))),this.shader=new mn($r,()=>a(()=>import(`./RibbonLine.glsl-BqTEM9AD.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))),this.primitiveType=t.wireframe?b.LINES:b.TRIANGLE_STRIP}_makePipelineState(e,t){let{oitPass:n,output:r,hasEmission:i,hasOccludees:a,hasPolygonOffset:o}=e,s=n===0,c=n===2;return mt({blending:Ze(r)?Yt(n):null,depthTest:sn(n),depthWrite:gt(e),drawBuffers:Tn(r,Qt(n,i)),colorWrite:ft,stencilWrite:a?yt:null,stencilTest:a?t?_t:Ht:null,polygonOffset:s||c?o?ti:null:kt})}initializePipeline(e){if(e.occluder){let t=e.hasPolygonOffset?ti:null,{output:n,hasOccludees:r}=e;this._occluderPipelineTransparent=mt({blending:pt,polygonOffset:t,depthTest:_n,depthWrite:null,colorWrite:ft,stencilWrite:null,stencilTest:r?bt:null,drawBuffers:Tn(n)}),this._occluderPipelineOpaque=mt({blending:pt,polygonOffset:t,depthTest:r?_n:On,depthWrite:null,colorWrite:ft,stencilWrite:r?Lt:null,stencilTest:r?hn:null,drawBuffers:Tn(n)}),this._occluderPipelineMaskWrite=mt({blending:null,polygonOffset:t,depthTest:On,depthWrite:null,colorWrite:null,stencilWrite:r?yt:null,stencilTest:r?_t:null,drawBuffers:Tn(n)})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(t)return this._occludeePipeline;switch(e.occluder){case 12:return this._occluderPipelineTransparent??super.getPipeline(e);case 11:return this._occluderPipelineOpaque??super.getPipeline(e);default:e.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(e)}}};ei=g([v(`esri.views.3d.webgl-engine.shaders.RibbonLineTechnique`)],ei);var ti={factor:0,units:-4};function ni(e){let t=Fn().vec3f(`position`).vec4f16(`previousDelta`).vec4f16(`nextDelta`).f32(`u0`).vec2f16(`lineParameters`);return e.hasVVColor?t.f32(`colorFeatureAttribute`):t.vec4u8(`color`,{glNormalized:!0}),e.hasVVSize?t.f32(`sizeFeatureAttribute`):t.f32(`size`),e.hasVVOpacity&&t.f32(`opacityFeatureAttribute`),Mt()&&t.vec4u8(`olidColor`),e.hasAnimation&&t.vec4f16(`timeStamps`),t}var U=class extends Rt{constructor(e){super(),this.spherical=e,this.capType=0,this.emissionSource=0,this.animation=2,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.hasScreenSizePerspective=!1,this.worldSizedImagePattern=!1,this.textureCoordinateType=0,this.occlusionPass=!1,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1}get hasAnimation(){return this.animation!==0}};g([V({count:3})],U.prototype,`capType`,void 0),g([V({count:8})],U.prototype,`emissionSource`,void 0),g([V({count:4})],U.prototype,`animation`,void 0),g([V()],U.prototype,`hasPolygonOffset`,void 0),g([V()],U.prototype,`writeDepth`,void 0),g([V()],U.prototype,`draped`,void 0),g([V()],U.prototype,`stippleEnabled`,void 0),g([V()],U.prototype,`stippleOffColorEnabled`,void 0),g([V()],U.prototype,`stipplePreferContinuous`,void 0),g([V()],U.prototype,`roundJoins`,void 0),g([V()],U.prototype,`applyMarkerOffset`,void 0),g([V()],U.prototype,`hasVVSize`,void 0),g([V()],U.prototype,`hasVVColor`,void 0),g([V()],U.prototype,`hasVVOpacity`,void 0),g([V()],U.prototype,`falloffEnabled`,void 0),g([V()],U.prototype,`innerColorEnabled`,void 0),g([V()],U.prototype,`hasOccludees`,void 0),g([V()],U.prototype,`occluder`,void 0),g([V()],U.prototype,`terrainDepthTest`,void 0),g([V()],U.prototype,`cullAboveTerrain`,void 0),g([V()],U.prototype,`wireframe`,void 0),g([V()],U.prototype,`discardInvisibleFragments`,void 0),g([V()],U.prototype,`hasScreenSizePerspective`,void 0),g([V()],U.prototype,`worldSizedImagePattern`,void 0);var ri=class extends St{constructor(e,t){super(e,ai),this.produces=new Map([[2,e=>et(e)||Ze(e)&&this.parameters.renderOccluded===8],[3,e=>Ye(e)],[11,e=>Je(e)&&this.parameters.renderOccluded===8],[12,e=>Je(e)&&this.parameters.renderOccluded===8],[4,e=>Ze(e)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[9,e=>Ze(e)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[20,e=>Qe(e)]]),this._configuration=new U(t)}getConfiguration(e,t){super.getConfiguration(e,t,this._configuration);let n=t.slot===20,r=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&e!==8,i=r&&n&&this.parameters.isImagePattern();return this._configuration.draped=n,this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join===`round`,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&li(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=t.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,this._configuration.terrainDepthTest=t.terrainDepthTest&&Ze(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=+!!this.hasEmissions,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!i,this._configuration.worldSizedImagePattern=i,this._configuration}get visible(){return this.parameters.color[3]>=.003913894324853229||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>.003913894324853229}setParameters(e,t){e.animation=this.parameters.animation,super.setParameters(e,t)}intersectDraped({attributes:e,screenToWorldRatio:t},n,i,a,o){if(!n.options.selectionMode)return;let s=e.get(`size`),c=this.parameters.width;if(this.parameters.vvSize){let t=e.get(`sizeFeatureAttribute`).data[0];Number.isNaN(t)?c*=this.parameters.vvSize.fallback[0]:c*=r(this.parameters.vvSize.offset[0]+t*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else s&&(c*=s.data[0]);let l=i[0],u=i[1],d=(c/2+4)*t,f=Number.MAX_VALUE,p=0,m=e.get(`position`).data,h=ci(this.parameters,e)?m.length-2:m.length-5;for(let e=0;e<h;e+=3){let t=m[e],n=m[e+1],i=(e+3)%m.length,a=l-t,o=u-n,s=m[i]-t,c=m[i+1]-n,d=r((s*a+c*o)/(s*s+c*c),0,1),h=s*d-a,g=c*d-o,_=h*h+g*g;_<f&&(f=_,p=e/3)}f<d*d&&a(o.distance,o.normal,p)}intersect(t,n,i,a,o,s){let{options:c,camera:l,rayBegin:u,rayEnd:d}=i;if(!c.selectionMode||!t.visible||!l)return;if(!Ge(n))return void xe.getLogger(`esri.views.3d.webgl-engine.materials.RibbonLineMaterial`).error(`intersection assumes a translation-only matrix`);let m=t.attributes,h=m.get(`position`).data,g=this.parameters.width;if(this.parameters.vvSize){let e=m.get(`sizeFeatureAttribute`).data[0];Number.isNaN(e)||(g*=r(this.parameters.vvSize.offset[0]+e*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]))}else m.has(`size`)&&(g*=m.get(`size`).data[0]);let _=fi;f(_,i.point);let v=g*l.pixelRatio/2+4*l.pixelRatio;j(yi[0],_[0]-v,_[1]+v,0),j(yi[1],_[0]+v,_[1]+v,0),j(yi[2],_[0]+v,_[1]-v,0),j(yi[3],_[0]-v,_[1]-v,0);for(let e=0;e<4;e++)if(!l.unprojectFromRenderScreen(yi[e],bi[e]))return;Be(l.eye,bi[0],bi[1],xi),Be(l.eye,bi[1],bi[2],Si),Be(l.eye,bi[2],bi[3],Ci),Be(l.eye,bi[3],bi[0],wi);let y=Number.MAX_VALUE,b=0,x=ci(this.parameters,m)?h.length-2:h.length-5;for(let e=0;e<x;e+=3){W[0]=h[e]+n[12],W[1]=h[e+1]+n[13],W[2]=h[e+2]+n[14];let t=(e+3)%h.length;if(G[0]=h[t]+n[12],G[1]=h[t+1]+n[13],G[2]=h[t+2]+n[14],Ie(xi,W)<0&&Ie(xi,G)<0||Ie(Si,W)<0&&Ie(Si,G)<0||Ie(Ci,W)<0&&Ie(Ci,G)<0||Ie(wi,W)<0&&Ie(wi,G)<0)continue;let r=l.projectToRenderScreen(W,pi),i=l.projectToRenderScreen(G,mi);if(r==null||i==null)continue;if(r[2]<0&&i[2]>0){P(ui,W,G);let e=l.frustum;if(N(ui,ui,-Ie(e[4],W)/p(ui,Re(e[4]))),k(W,W,ui),!l.projectToRenderScreen(W,r))continue}else if(r[2]>0&&i[2]<0){P(ui,G,W);let e=l.frustum;if(N(ui,ui,-Ie(e[4],G)/p(ui,Re(e[4]))),k(G,G,ui),!l.projectToRenderScreen(G,i))continue}else if(r[2]<0&&i[2]<0)continue;r[2]=0,i[2]=0;let a=rt(it(r,i,_i),_);a<y&&(y=a,M(hi,W),M(gi,G),b=e/3)}if(y<v*v){let t=Number.MAX_VALUE;if(nt(it(hi,gi,_i),it(u,d,vi),di)){P(di,di,u);let n=e(di);N(di,di,1/n),t=n/ye(u,d)}s(t,di,b)}}get hasEmissions(){return this.parameters.emissiveStrength>0}createBufferWriter(){return new oi(ni(this.parameters),this.parameters)}createGLMaterial(e){return new ii(e)}validateParameters(e){e.join!==`miter`&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){return!!this.parameters.hasAnimation&&(this.setParameters({timeElapsed:ge(e.time)},!1),e.dt!==0)}},ii=class extends gn{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){let{stipplePattern:t}=this._material.parameters;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(ei,e)}},ai=class extends Dn{constructor(){super(...arguments),this._width=0,this.color=je,this.join=`miter`,this.cap=0,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=he(0),this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=he(0),this.endTime=he(1/0),this.emissiveStrength=0}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(e){this._width=e}get transparent(){return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return this.animation!==0}isImagePattern(){return cr(this.stipplePattern)&&this.stippleTexture!=null}},oi=class{constructor(e,t){this.layout=e,this._parameters=t;let n=+!!t.stipplePattern;switch(this._parameters.join){case`miter`:case`bevel`:this.numJoinSubdivisions=n;break;case`round`:this.numJoinSubdivisions=1+n}}_isClosed(e){return ci(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCount(e){let t=e.get(`position`).indices.length/2+1,n=this._isClosed(e),r=n?2:4;return r+=((n?t:t-1)-+!n)*(2*this.numJoinSubdivisions+4),r+=2,this._parameters.wireframe&&(r=2+4*(r-2)),r}write(e,t,n,r,i,a){let o=this.layout,s=n.get(`position`),c=s.indices,l=s.data.length/3,u=n.get(`distanceToStart`)?.data;c&&c.length!==2*(l-1)&&console.warn(`RibbonLineMaterial does not support indices`);let d=o.fields.has(`sizeFeatureAttribute`),f=1,p=null;if(d){let e=n.get(`sizeFeatureAttribute`);e.data.length===1?f=e.data[0]:p=e.data}else f=n.get(`size`)?.data[0]??1;let m=[1,1,1,1],h=0,g=null,_=o.fields.has(`colorFeatureAttribute`);if(_){let e=n.get(`colorFeatureAttribute`);e.data.length===1?h=e.data[0]:g=e.data}else m=n.get(`color`)?.data??m;let v=n.get(`timeStamps`)?.data,y=v&&o.fields.has(`timeStamps`),b=o.fields.has(`opacityFeatureAttribute`),S=0,C=null;if(b){let e=n.get(`opacityFeatureAttribute`);e.data.length===1?S=e.data[0]:C=e.data}let w=new Float32Array(i.buffer),T=Ke(i.buffer),E=new Uint8Array(i.buffer),ee=o.stride/4,D=a*ee,te=D,O=0,ne=u?(e,t,n)=>O=u[n]:(e,t,n)=>O+=ye(e,t),k=w.BYTES_PER_ELEMENT/T.BYTES_PER_ELEMENT,re=4/k,ie=Mt(),A=(e,t,n,i,a,o,s,c)=>{w[D++]=t[0],w[D++]=t[1],w[D++]=t[2],dn(e,t,T,D*k),D+=re,dn(n,t,T,D*k),D+=re,w[D++]=c;let l=D*k;if(T[l++]=a,T[l++]=o,D=Math.ceil(l/k),_)w[D]=g?.[s]??h;else{let e=Math.min(4*s,m.length-4),t=4*D;E[t]=255*m[e],E[t+1]=255*m[e+1],E[t+2]=255*m[e+2],E[t+3]=255*m[e+3]}if(D++,w[D++]=p?.[s]??f,b&&(w[D++]=C?.[s]??S),ie){let e=4*D;r?(E[e++]=r[0],E[e++]=r[1],E[e++]=r[2],E[e++]=r[3]):(E[e++]=0,E[e++]=0,E[e++]=0,E[e++]=0),D=Math.ceil(.25*e)}y&&(l=D*k,T[l++]=i[0],T[l++]=i[1],T[l++]=i[2],T[l++]=i[3],D=Math.ceil(l/k))};D+=ee,j(q,s.data[0],s.data[1],s.data[2]),y&&Ee(Y,v[0],v[1],v[2],v[3]),e&&x(q,q,e);let ae=this._isClosed(n);if(ae){let t=s.data.length-3;j(K,s.data[t],s.data[t+1],s.data[t+2]),e&&x(K,K,e)}else j(J,s.data[3],s.data[4],s.data[5]),e&&x(J,J,e),A(q,q,J,Y,1,-4,0,0),A(q,q,J,Y,1,4,0,0),M(K,q),M(q,J),y&&Ee(Y,v[4],v[5],v[6],v[7]);let oe=+!ae,se=ae?l:l-1;for(let t=oe;t<se;t++){let n=(t+1)%l*3;j(J,s.data[n],s.data[n+1],s.data[n+2]),e&&x(J,J,e),ne(K,q,t),A(K,q,J,Y,0,-1,t,O),A(K,q,J,Y,0,1,t,O);let r=this.numJoinSubdivisions;for(let e=0;e<r;++e){let n=(e+1)/(r+1);A(K,q,J,Y,n,-1,t,O),A(K,q,J,Y,n,1,t,O)}if(A(K,q,J,Y,1,-2,t,O),A(K,q,J,Y,1,2,t,O),M(K,q),M(q,J),y){let e=(t+1)%l*4;Ee(Y,v[e],v[e+1],v[e+2],v[e+3])}}return ae?(j(J,s.data[3],s.data[4],s.data[5]),e&&x(J,J,e),O=ne(K,q,se),A(K,q,J,Y,0,-1,oe,O),A(K,q,J,Y,0,1,oe,O)):(O=ne(K,q,se),A(K,q,q,Y,0,-5,se,O),A(K,q,q,Y,0,5,se,O)),si(w,te+ee,w,te,ee),D=si(w,D-ee,w,D,ee),this._parameters.wireframe&&this._addWireframeVertices(i,te,D,ee),null}_addWireframeVertices(e,t,n,r){let i=new Float32Array(e.buffer,n*Float32Array.BYTES_PER_ELEMENT),a=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,n-t),o=0,s=e=>o=si(a,e,i,o,r);for(let e=0;e<a.length-1;e+=2*r)s(e),s(e+2*r),s(e+1*r),s(e+2*r),s(e+1*r),s(e+3*r)}};function si(e,t,n,r,i){for(let a=0;a<i;a++)n[r++]=e[t++];return r}function ci(e,t){return e.isClosed?t.get(`position`).indices.length>2:!1}function li(e){return e.anchor===1&&e.hideOnShortSegments&&e.placement===`begin-end`&&e.worldSpace}var W=F(),G=F(),ui=F(),di=F(),fi=F(),pi=ae(),mi=ae(),hi=F(),gi=F(),_i=at(),vi=at(),K=F(),q=F(),J=F(),Y=ke(),yi=[ae(),ae(),ae(),ae()],bi=[F(),F(),F(),F()],xi=ze(),Si=ze(),Ci=ze(),wi=ze(),Ti=class{constructor(e){this._originSR=e,this._rootOriginId=`root/`+Ce(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5,this._baselineDistance=.5*this._gridSize;let t=this._baselineDistance*Ei;this._baselineObjectSize=t/Di}getOrigin(e){let t=this._origins.get(this._rootOriginId);if(t==null){let t=ir.rootOrigin;if(t!=null)return this._origins.set(this._rootOriginId,nr(t[0],t[1],t[2],this._rootOriginId)),this.getOrigin(e);let n=nr(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,n),n}let n=this._gridSize,r=Math.round(e[0]/n),i=Math.round(e[1]/n),a=Math.round(e[2]/n),o=`${r}/${i}/${a}`,s=this._origins.get(o),c=.5*n;if(P(X,e,t.vec3),X[0]=Math.abs(X[0]),X[1]=Math.abs(X[1]),X[2]=Math.abs(X[2]),X[0]<c&&X[1]<c&&X[2]<c){if(s){let t=Math.max(...X);if(P(X,e,s.vec3),X[0]=Math.abs(X[0]),X[1]=Math.abs(X[1]),X[2]=Math.abs(X[2]),Math.max(...X)<t)return s}return t}return s||(s=nr(r*n,i*n,a*n,o),this._origins.set(o,s)),s}needsOriginUpdate(e,t,n){let r=ye(e.vec3,t),i=Math.max(1,n/this._baselineObjectSize);return r>this._baselineDistance*i}_drawOriginBox(e,t=De(1,1,0,1)){let n=window.view,r=n.stage,i=t.toString();if(!this._objects.has(i)){this._material=new ri({width:2,color:t},!1);let e=new er(r,{pickable:!1}),n=new Gn({castShadow:!1});e.add(n),this._objects.set(i,n)}let a=this._objects.get(i),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],s=o.length,c=Array(3*s),l=[],d=.5*this._gridSize;for(let t=0;t<s;t++)c[3*t]=e[0]+(1&o[t]?d:-d),c[3*t+1]=e[1]+(2&o[t]?d:-d),c[3*t+2]=e[2]+(4&o[t]?d:-d),t>0&&l.push(t-1,t);u(c,this._originSR,0,c,n.renderSpatialReference,0,s);let f=new Pt(this._material,[[`position`,new I(c,l,3,!0)]],null,2);a.addGeometry(f)}get test(){}},X=F(),Ei=2**-23,Di=.05;function Oi(e,t=!1){return e<=1024?t?Array(e).fill(0):Array(e):Ke(e)}function ki(e,t,n=null){let r=[],i=t.mapPositions,a=Ai(t,r),o=a.data,s=a.indices.length,c=Pe(s);return ji(t,r,c),Pi(t,r,c),Mi(t,r,c),Ni(t,r,a.indices,c),Fi(t,r,a.indices,c),Ii(t,r),Li(t,r,a.indices,c),Ri(t,r,o),new Pt(e,r,i,2,n)}function Ai(e,t){let{attributeData:{position:n},removeDuplicateStartEnd:r}=e,i=zi(n)&&r,a=n.length/3-!!i,o=Array(2*(a-1)),s=i?n.slice(0,-3):n,c=0;for(let e=0;e<a-1;e++)o[c++]=e,o[c++]=e+1;let l=new I(s,o,3,i);return t.push([`position`,l]),l}function ji(e,t,n){if(e.attributeData.colorFeature!=null)return;let r=e.attributeData.color;t.push([`color`,new I(r??je,n,4)])}function Mi(e,t,n){e.attributeData.normal&&t.push([`normal`,new I(e.attributeData.normal,n,3)])}function Ni(e,t,n,r){let i=e.attributeData.colorFeature;i!=null&&(typeof i==`number`?t.push([`colorFeatureAttribute`,new I([i],r,1,!0)]):t.push([`colorFeatureAttribute`,new I(i,n,1,!0)]))}function Pi(e,t,n){e.attributeData.sizeFeature??t.push([`size`,new I([e.attributeData.size??1],n,1,!0)])}function Fi(e,t,n,r){let i=e.attributeData.sizeFeature;i!=null&&(typeof i==`number`?t.push([`sizeFeatureAttribute`,new I([i],r,1,!0)]):t.push([`sizeFeatureAttribute`,new I(i,n,1,!0)]))}function Ii(e,t){let{attributeData:{position:n,timeStamps:r}}=e;if(!r)return;let i=n.length/3,a=Array(2*(i-1)),o=0;for(let e=0;e<i-1;e++)a[o++]=e,a[o++]=e+1;t.push([`timeStamps`,new I(r,a,4,!0)])}function Li(e,t,n,r){let i=e.attributeData.opacityFeature;i!=null&&(typeof i==`number`?t.push([`opacityFeatureAttribute`,new I([i],r,1,!0)]):t.push([`opacityFeatureAttribute`,new I(i,n,1,!0)]))}function Ri(e,t,n){if(e.overlayInfo==null||e.overlayInfo.renderCoordsHelper.viewingMode!==1||!e.overlayInfo.spatialReference.isGeographic)return;let r=S(n.length),i=_e(e.overlayInfo.spatialReference);for(let e=0;e<r.length;e+=3)m(n,e,r,e,i);let a=n.length/3,o=Ln(a+1),s=Bi,c=Vi,l=0,u=0;_(s,r[u++],r[u++]),u++,o[0]=0;for(let e=1;e<a+1;++e)e===a&&(u=0),_(c,r[u++],r[u++]),u++,l+=O(s,c),o[e]=l,[s,c]=[c,s];t.push([`distanceToStart`,new I(o,t[0][1].indices,1,!0)])}function zi(e){let t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}var Bi=ie(),Vi=ie();function Hi(e,t){let n=Oi(e.length*4),r=e[0],i=e[e.length-1];for(let a=0;a<e.length;a++)n[a*4]=e[a],n[a*4+1]=r,n[a*4+2]=i,n[a*4+3]=t+.5;return n}function Ui(e,t){let n=e[t],r=e[t+1],i=e[t+2];return Math.sqrt(n*n+r*r+i*i)}function Wi(e,t){let n=e[t],r=e[t+1],i=e[t+2],a=1/Math.sqrt(n*n+r*r+i*i);e[t]*=a,e[t+1]*=a,e[t+2]*=a}function Gi(e,t,n){e[t]*=n,e[t+1]*=n,e[t+2]*=n}function Ki(e,t,n,r,i,a=t){(i||=e)[a]=e[t]+n[r],i[a+1]=e[t+1]+n[r+1],i[a+2]=e[t+2]+n[r+2]}function qi(){return Yi??=Ji(),Yi}function Ji(){return new It([[`uv0`,new I([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0)]])}var Yi=null,Xi=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Zi=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Qi=[0,0,1,0,1,1,0,1],$i=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],ea=Array(36);for(let e=0;e<6;e++)for(let t=0;t<6;t++)ea[6*e+t]=e;var ta=Array(36);for(let e=0;e<6;e++)ta[6*e]=0,ta[6*e+1]=1,ta[6*e+2]=2,ta[6*e+3]=2,ta[6*e+4]=3,ta[6*e+5]=0;function na(e,t){Array.isArray(t)||(t=[t,t,t]);let n=Array(24);for(let e=0;e<8;e++)n[3*e]=Xi[e][0]*t[0],n[3*e+1]=Xi[e][1]*t[1],n[3*e+2]=Xi[e][2]*t[2];return new Pt(e,[[`position`,new I(n,$i,3,!0)],[`normal`,new I(Zi,ea,3)],[`uv0`,new I(Qi,ta,2)]])}var ra=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],ia=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],aa=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],oa=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function sa(e,t){Array.isArray(t)||(t=[t,t,t]);let n=Array(18);for(let e=0;e<6;e++)n[3*e]=ra[e][0]*t[0],n[3*e+1]=ra[e][1]*t[1],n[3*e+2]=ra[e][2]*t[2];return new Pt(e,[[`position`,new I(n,aa,3,!0)],[`normal`,new I(ia,oa,3)]])}var ca=B(-.5,0,-.5),la=B(.5,0,-.5),ua=B(0,0,.5),da=B(0,.5,0),fa=ut(),pa=ut(),ma=ut(),ha=ut(),ga=ut();P(fa,ca,da),P(pa,ca,la),E(ma,fa,pa),y(ma,ma),P(fa,la,da),P(pa,la,ua),E(ha,fa,pa),y(ha,ha),P(fa,ua,da),P(pa,ua,ca),E(ga,fa,pa),y(ga,ga);var _a=[ca,la,ua,da],va=[0,-1,0,ma[0],ma[1],ma[2],ha[0],ha[1],ha[2],ga[0],ga[1],ga[2]],ya=[0,1,2,3,1,0,3,2,1,3,0,2],ba=[0,0,0,1,1,1,2,2,2,3,3,3];function xa(e,t){Array.isArray(t)||(t=[t,t,t]);let n=Array(12);for(let e=0;e<4;e++)n[3*e]=_a[e][0]*t[0],n[3*e+1]=_a[e][1]*t[1],n[3*e+2]=_a[e][2]*t[2];return new Pt(e,[[`position`,new I(n,ya,3,!0)],[`normal`,new I(va,ba,3)]])}function Sa(e,t,n,r,i={uv:!0}){let a=-Math.PI,o=2*Math.PI,s=-Math.PI/2,c=Math.PI,l=Math.max(3,Math.floor(n)),u=Math.max(2,Math.floor(r)),d=(l+1)*(u+1),f=Ln(3*d),p=Ln(3*d),m=Ln(2*d),h=[],g=0;for(let e=0;e<=u;e++){let n=[],r=e/u,i=s+r*c,d=Math.cos(i);for(let e=0;e<=l;e++){let s=e/l,c=a+s*o,u=Math.cos(c)*d,h=Math.sin(i),_=-Math.sin(c)*d;f[3*g]=u*t,f[3*g+1]=h*t,f[3*g+2]=_*t,p[3*g]=u,p[3*g+1]=h,p[3*g+2]=_,m[2*g]=s,m[2*g+1]=r,n.push(g),++g}h.push(n)}let _=[];for(let e=0;e<u;e++)for(let t=0;t<l;t++){let n=h[e][t],r=h[e][t+1],i=h[e+1][t+1],a=h[e+1][t];e===0?(_.push(n),_.push(i),_.push(a)):e===u-1?(_.push(n),_.push(r),_.push(i)):(_.push(n),_.push(r),_.push(i),_.push(i),_.push(a),_.push(n))}let v=[[`position`,new I(f,_,3,!0)],[`normal`,new I(p,_,3,!0)]];return i.uv&&v.push([`uv0`,new I(m,_,2,!0)]),i.offset&&(v[0][0]=`offset`,v.push([`position`,new I(Float64Array.from(i.offset),Pe(_.length),3,!0)])),new Pt(e,v)}function Ca(e,t,n,r){return new Pt(e,wa(t,n,r))}function wa(e,t,n){let r=e,i,a;if(n)i=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{let e=r*(1+Math.sqrt(5))/2;i=[-r,e,0,r,e,0,-r,-e,0,r,-e,0,0,-r,e,0,r,e,0,-r,-e,0,r,-e,e,0,-r,e,0,r,-e,0,-r,-e,0,r],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let t=0;t<i.length;t+=3)Gi(i,t,e/Ui(i,t));let o={};function s(t,n){t>n&&([t,n]=[n,t]);let r=t.toString()+`.`+n.toString();if(o[r])return o[r];let a=i.length;return i.length+=3,Ki(i,3*t,i,3*n,i,a),Gi(i,a,e/Ui(i,a)),a/=3,o[r]=a,a}for(let e=0;e<t;e++){let e=a.length,t=Array(4*e);for(let n=0;n<e;n+=3){let e=a[n],r=a[n+1],i=a[n+2],o=s(e,r),c=s(r,i),l=s(i,e),u=4*n;t[u]=e,t[u+1]=o,t[u+2]=l,t[u+3]=r,t[u+4]=c,t[u+5]=o,t[u+6]=i,t[u+7]=l,t[u+8]=c,t[u+9]=o,t[u+10]=c,t[u+11]=l}a=t,o={}}let c=In(i);for(let e=0;e<c.length;e+=3)Wi(c,e);return[[`position`,new I(In(i),a,3,!0)],[`normal`,new I(c,a,3,!0)]]}function Ta(e,{normal:t,position:n,color:r,rotation:i,size:a,centerOffsetAndDistance:o,uvi:s,featureAttribute:c,olidColor:l=null}={}){let u=n?fe(n):F(),d=t?fe(t):re(0,0,1),f=r?[r[0],r[1],r[2],r.length>3?r[3]:255]:[255,255,255,255],p=a!=null&&a.length===2?a:[1,1],m=i==null?[0]:[i],h=Pe(1),g=[[`position`,new I(u,h,3,!0)],[`normal`,new I(d,h,3,!0)],[`color`,new I(f,h,4,!0)],[`size`,new I(p,h,2)],[`rotation`,new I(m,h,1,!0)]];if(s&&g.push([`uvi`,new I(s,h,s.length)]),o!=null){let e=[o[0],o[1],o[2],o[3]];g.push([`centerOffsetAndDistance`,new I(e,h,4)])}if(c){let e=[c[0],c[1],c[2],c[3]];g.push([`featureAttribute`,new I(e,h,4)])}return new Pt(e,g,null,1,l,void 0,qi())}function Ea(e,t,n,r,i=!0,a=!0){let o=0,s=t,c=e,l=B(0,o,0),u=B(0,o+c,0),d=B(0,-1,0),f=B(0,1,0);r&&(o=c,u=B(0,0,0),l=B(0,o,0),d=B(0,1,0),f=B(0,-1,0));let p=[u,l],m=[d,f],h=n+2,g=Math.sqrt(c*c+s*s);if(r)for(let e=n-1;e>=0;e--){let t=e*(2*Math.PI/n),r=B(Math.cos(t)*s,o,Math.sin(t)*s);p.push(r);let i=B(c*Math.cos(t)/g,-s/g,c*Math.sin(t)/g);m.push(i)}else for(let e=0;e<n;e++){let t=e*(2*Math.PI/n),r=B(Math.cos(t)*s,o,Math.sin(t)*s);p.push(r);let i=B(c*Math.cos(t)/g,s/g,c*Math.sin(t)/g);m.push(i)}let _=[],v=[];if(i){for(let e=3;e<p.length;e++)_.push(1),_.push(e-1),_.push(e),v.push(0),v.push(0),v.push(0);_.push(p.length-1),_.push(2),_.push(1),v.push(0),v.push(0),v.push(0)}if(a){for(let e=3;e<p.length;e++)_.push(e),_.push(e-1),_.push(0),v.push(e),v.push(e-1),v.push(1);_.push(0),_.push(2),_.push(p.length-1),v.push(1),v.push(2),v.push(m.length-1)}let y=Ln(3*h);for(let e=0;e<h;e++)y[3*e]=p[e][0],y[3*e+1]=p[e][1],y[3*e+2]=p[e][2];let b=Ln(3*h);for(let e=0;e<h;e++)b[3*e]=m[e][0],b[3*e+1]=m[e][1],b[3*e+2]=m[e][2];return[[`position`,new I(y,_,3,!0)],[`normal`,new I(b,v,3,!0)]]}function Da(e,t,n,r,i,a=!0,o=!0){return new Pt(e,Ea(t,n,r,i,a,o))}function Oa(e,t,n,r,i,a,o){let s=i?lt(i):B(1,0,0),c=a?lt(a):B(0,0,0);o??=!0;let l=ut();y(l,s);let u=ut();N(u,l,Math.abs(t));let d=ut();N(d,u,-.5),k(d,d,c);let f=B(0,1,0);Math.abs(1-p(l,f))<.2&&j(f,0,0,1);let m=ut();E(m,l,f),y(m,m),E(f,m,l);let h=2*r+(o?2:0),g=r+(o?2:0),_=Ln(3*h),v=Ln(3*g),b=Ln(2*h),x=Array(3*r*(o?4:2)),S=Array(3*r*(o?4:2));o&&(_[3*(h-2)]=d[0],_[3*(h-2)+1]=d[1],_[3*(h-2)+2]=d[2],b[2*(h-2)]=0,b[2*(h-2)+1]=0,_[3*(h-1)]=_[3*(h-2)]+u[0],_[3*(h-1)+1]=_[3*(h-2)+1]+u[1],_[3*(h-1)+2]=_[3*(h-2)+2]+u[2],b[2*(h-1)]=1,b[2*(h-1)+1]=1,v[3*(g-2)]=-l[0],v[3*(g-2)+1]=-l[1],v[3*(g-2)+2]=-l[2],v[3*(g-1)]=l[0],v[3*(g-1)+1]=l[1],v[3*(g-1)+2]=l[2]);let C=(e,t,n)=>{x[e]=t,S[e]=n},w=0,T=ut(),ee=ut();for(let e=0;e<r;e++){let t=e*(2*Math.PI/r);N(T,f,Math.sin(t)),N(ee,m,Math.cos(t)),k(T,T,ee),v[3*e]=T[0],v[3*e+1]=T[1],v[3*e+2]=T[2],N(T,T,n),k(T,T,d),_[3*e]=T[0],_[3*e+1]=T[1],_[3*e+2]=T[2],b[2*e]=e/r,b[2*e+1]=0,_[3*(e+r)]=_[3*e]+u[0],_[3*(e+r)+1]=_[3*e+1]+u[1],_[3*(e+r)+2]=_[3*e+2]+u[2],b[2*(e+r)]=e/r,b[2*e+1]=1;let i=(e+1)%r;C(w++,e,e),C(w++,e+r,e),C(w++,i,i),C(w++,i,i),C(w++,e+r,e),C(w++,i+r,i)}if(o){for(let e=0;e<r;e++){let t=(e+1)%r;C(w++,h-2,g-2),C(w++,e,g-2),C(w++,t,g-2)}for(let e=0;e<r;e++){let t=(e+1)%r;C(w++,e+r,g-1),C(w++,h-1,g-1),C(w++,t+r,g-1)}}return new Pt(e,[[`position`,new I(_,x,3,!0)],[`normal`,new I(v,S,3,!0)],[`uv0`,new I(b,x,2,!0)]])}function ka(e,t,n,r,i,a){r||=10,i=i==null||i,Ue(t.length>1);let o=[[0,0,0]],s=[],c=[];for(let e=0;e<r;e++){s.push([0,-e-1,-(e+1)%r-1]);let t=e/r*2*Math.PI;c.push([Math.cos(t)*n,Math.sin(t)*n])}return Aa(e,c,t,o,s,i,a)}function Aa(e,t,n,r,i,a,o=B(0,0,0)){let s=t.length,c=Ln(n.length*s*3+(6*r.length||0)),l=Ln(n.length*s*3+(r?6:0)),u=[],d=[],f=0,p=0,m=F(),h=F(),g=F(),_=F(),v=F(),b=F(),x=F(),S=F(),C=F(),w=F(),T=F(),ee=F(),D=F(),te=ze();j(C,0,1,0),P(h,n[1],n[0]),y(h,h),a?(k(S,n[0],o),y(g,S)):j(g,0,0,1),Ia(h,g,C,C,v,g,La),M(_,g),M(ee,v);for(let e=0;e<r.length;e++)N(b,v,r[e][0]),N(S,g,r[e][2]),k(b,b,S),k(b,b,n[0]),c[f++]=b[0],c[f++]=b[1],c[f++]=b[2];l[p++]=-h[0],l[p++]=-h[1],l[p++]=-h[2];for(let e=0;e<i.length;e++)u.push(i[e][0]>0?i[e][0]:-i[e][0]-1+r.length),u.push(i[e][1]>0?i[e][1]:-i[e][1]-1+r.length),u.push(i[e][2]>0?i[e][2]:-i[e][2]-1+r.length),d.push(0),d.push(0),d.push(0);let O=r.length,ne=r.length-1;for(let e=0;e<n.length;e++){let r=!1;e>0&&(M(m,h),e<n.length-1?(P(h,n[e+1],n[e]),y(h,h)):r=!0,k(w,m,h),y(w,w),k(T,n[e-1],_),Le(n[e],w,te),Fe(te,tt(T,m),S)?(P(S,S,n[e]),y(g,S),E(v,w,g),y(v,v)):Ia(w,_,ee,C,v,g,La),M(_,g),M(ee,v)),a&&(k(S,n[e],o),y(D,S));for(let i=0;i<s;i++)if(N(b,v,t[i][0]),N(S,g,t[i][1]),k(b,b,S),y(x,b),l[p++]=x[0],l[p++]=x[1],l[p++]=x[2],k(b,b,n[e]),c[f++]=b[0],c[f++]=b[1],c[f++]=b[2],!r){let e=(i+1)%s;u.push(O+i),u.push(O+s+i),u.push(O+e),u.push(O+e),u.push(O+s+i),u.push(O+s+e);for(let e=0;e<6;e++){let t=u.length-6;d.push(u[t+e]-ne)}}O+=s}let re=n[n.length-1];for(let e=0;e<r.length;e++)N(b,v,r[e][0]),N(S,g,r[e][1]),k(b,b,S),k(b,b,re),c[f++]=b[0],c[f++]=b[1],c[f++]=b[2];let ie=p/3;l[p++]=h[0],l[p++]=h[1],l[p++]=h[2];let A=O-s;for(let e=0;e<i.length;e++)u.push(i[e][0]>=0?O+i[e][0]:-i[e][0]-1+A),u.push(i[e][2]>=0?O+i[e][2]:-i[e][2]-1+A),u.push(i[e][1]>=0?O+i[e][1]:-i[e][1]-1+A),d.push(ie),d.push(ie),d.push(ie);return new Pt(e,[[`position`,new I(c,u,3,!0)],[`normal`,new I(l,d,3,!0)]])}function ja(e,t,n,r,i){let a=S(3*t.length),o=Array(2*(t.length-1)),s=0,c=0;for(let e=0;e<t.length;e++){for(let n=0;n<3;n++)a[s++]=t[e][n];e>0&&(o[c++]=e-1,o[c++]=e)}let l=[[`position`,new I(a,o,3,!0)]];if(n?.length===t.length&&n[0].length===3){let e=Ln(3*n.length),r=0;for(let i=0;i<t.length;i++)for(let t=0;t<3;t++)e[r++]=n[i][t];l.push([`normal`,new I(e,o,3,!0)])}if(r&&l.push([`color`,new I(r,Ne(r.length/4),4)]),i?.length===t.length){let e=Hi(i,1);l.push([`timeStamps`,new I(e,o,4,!0)])}return new Pt(e,l,null,2)}function Ma(e,t,n,r,i,a=0){let o=Array(18),s=[[-n,a,i/2],[r,a,i/2],[0,t+a,i/2],[-n,a,-i/2],[r,a,-i/2],[0,t+a,-i/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let e=0;e<6;e++)o[3*e]=s[e][0],o[3*e+1]=s[e][1],o[3*e+2]=s[e][2];return new Pt(e,[[`position`,new I(o,c,3,!0)]])}function Na(e,t){let n=e.getMutableAttribute(`position`).data;for(let e=0;e<n.length;e+=3){let r=n[e],i=n[e+1],a=n[e+2];j(Ra,r,i,a),x(Ra,Ra,t),n[e]=Ra[0],n[e+1]=Ra[1],n[e+2]=Ra[2]}}function Pa(e,t=e){let n=e.attributes,r=n.get(`position`).data,i=n.get(`normal`).data;if(i){let e=t.getMutableAttribute(`normal`).data;for(let t=0;t<i.length;t+=3){let n=i[t+1];e[t+1]=-i[t+2],e[t+2]=n}}if(r){let e=t.getMutableAttribute(`position`).data;for(let t=0;t<r.length;t+=3){let n=r[t+1];e[t+1]=-r[t+2],e[t+2]=n}}}function Fa(e,t,n,r,i){return!(Math.abs(p(t,e))>i)&&(E(n,e,t),y(n,n),E(r,n,e),y(r,r),!0)}function Ia(e,t,n,r,i,a,o){return Fa(e,t,i,a,o)||Fa(e,n,i,a,o)||Fa(e,r,i,a,o)}var La=.99619469809,Ra=F();function za(e){return e.type===`point`}var Ba=class{constructor(e,t=null,n=0){this.array=e,this.spatialReference=t,this.offset=n}};function Va(e){return`array`in e}function Ha(e,t,n=`ground`){if(za(t))return e.getElevation(t.x,t.y,t.z||0,t.spatialReference,n);if(Va(t)){let r=t.offset;return e.getElevation(t.array[r++],t.array[r++],t.array[r]||0,t.spatialReference??e.spatialReference,n)}return e.getElevation(t[0],t[1],t[2]||0,e.spatialReference,n)}function Ua(e,t,n,r,i,a,o,s,c,l,d){let f=ro[d.mode],p,m,h=0;if(u(e,t,n,r,c.spatialReference,i,s))return f?.requiresAlignment(d)?(h=f.applyElevationAlignmentBuffer(r,i,a,o,s,c,l,d),p=a,m=o):(p=r,m=i),u(p,c.spatialReference,m,a,l.spatialReference,o,s)?h:void 0}function Wa(e,t,n,r,i){let a=(za(e)?e.z:Va(e)?e.array[e.offset+2]:e[2])||0;switch(n.mode){case`on-the-ground`:{let n=Ha(t,e,`ground`)??0;i.verticalDistanceToGround=0,i.sampledElevation=n,i.z=n;return}case`relative-to-ground`:{let o=Ha(t,e,`ground`)??0,s=n.geometryZWithOffset(a,r);i.verticalDistanceToGround=s,i.sampledElevation=o,i.z=s+o;return}case`relative-to-scene`:{let o=Ha(t,e,`scene`)??0,s=n.geometryZWithOffset(a,r);i.verticalDistanceToGround=s,i.sampledElevation=o,i.z=s+o;return}case`absolute-height`:{let o=n.geometryZWithOffset(a,r),s=Ha(t,e,`ground`)??0;i.verticalDistanceToGround=o-s,i.sampledElevation=s,i.z=o;return}default:i.z=0;return}}function Ga(e,t,n,r){return Wa(e,t,n,r,ao),ao.z}function Ka(e,t,n){return t===`on-the-ground`&&n===`on-the-ground`?e.staysOnTheGround:t===n||t!==`on-the-ground`&&n!==`on-the-ground`?t==null||n==null?e.definedChanged:1:e.onTheGroundChanged}function qa(e){return e===`relative-to-ground`||e===`relative-to-scene`}function Ja(e){return e!==`absolute-height`}function Ya(e,t,n,r,i){Wa(t,n,i,r,ao),Xa(e,ao.verticalDistanceToGround);let a=ao.sampledElevation,o=te(io,e.transformation);return oo[0]=t.x,oo[1]=t.y,oo[2]=ao.z,He(t.spatialReference,oo,o,r.spatialReference)?e.transformation=o:console.warn(`Could not locate symbol object properly, it might be misplaced`),a}function Xa(e,t){for(let n=0;n<e.geometries.length;++n){let r=e.geometries[n].getMutableAttribute(`centerOffsetAndDistance`);r&&r.data[3]!==t&&(r.data[3]=t,e.geometryVertexAttributeUpdated(e.geometries[n],`centerOffsetAndDistance`))}}function Za(e,t,n,r,i,a){let o=0,s=a.spatialReference;t*=3,r*=3;for(let c=0;c<i;++c){let i=e[t],c=e[t+1],l=e[t+2],u=a.getElevation(i,c,l,s,`ground`)??0;o+=u,n[r]=i,n[r+1]=c,n[r+2]=u,t+=3,r+=3}return o/i}function Qa(e,t,n,r,i,a,o,s){let c=0,l=s.calculateOffsetRenderUnits(o),u=s.featureExpressionInfoContext,d=a.spatialReference;t*=3,r*=3;for(let o=0;o<i;++o){let i=e[t],o=e[t+1],s=e[t+2],f=a.getElevation(i,o,s,d,`ground`)??0;c+=f,n[r]=i,n[r+1]=o,n[r+2]=u==null?s+f+l:f+l,t+=3,r+=3}return c/i}function $a(e,t,n,r,i,a,o,s){let c=0,l=s.calculateOffsetRenderUnits(o),u=s.featureExpressionInfoContext,d=a.spatialReference;t*=3,r*=3;for(let o=0;o<i;++o){let i=e[t],o=e[t+1],s=e[t+2],f=a.getElevation(i,o,s,d,`scene`)??0;c+=f,n[r]=i,n[r+1]=o,n[r+2]=u==null?s+f+l:f+l,t+=3,r+=3}return c/i}function eo(e){let t=e.meterUnitOffset,n=e.featureExpressionInfoContext;return t!==0||n!=null}function to(e,t,n,r,i,a,o,s){let c=s.calculateOffsetRenderUnits(o),l=s.featureExpressionInfoContext;t*=3,r*=3;for(let a=0;a<i;++a){let i=e[t],a=e[t+1],o=e[t+2];n[r]=i,n[r+1]=a,n[r+2]=l==null?o+c:c,t+=3,r+=3}return 0}var no=class{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}},ro={"absolute-height":{applyElevationAlignmentBuffer:to,requiresAlignment:eo},"on-the-ground":{applyElevationAlignmentBuffer:Za,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Qa,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:$a,requiresAlignment:()=>!0}},io=i(),ao=new no,oo=F(),so=()=>xe.getLogger(`esri.views.3d.layers.graphics.featureExpressionInfoUtils`);function co(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}async function lo(e,t,n,r){let i=e?.expression;if(typeof i!=`string`)return null;let a=_o(i);if(a!=null)return{cachedResult:a};let o=await ve();ee(n);let s=o.arcadeUtils,c=s.createSyntaxTree(i);return s.dependsOnView(c)?(r?.error(`Expressions containing '$view' are not supported on ElevationInfo`),{cachedResult:0}):{arcade:{func:s.createFunction(c),context:s.createExecContext(null,{sr:t}),modules:o}}}function uo(e,t,n){return e.arcadeUtils.createFeature(t.attributes,t.geometry,n)}function fo(e,t){if(e!=null&&!go(e)){if(!t||!e.arcade)return void so().errorOncePerTick(`Arcade support required but not provided`);let n=t;n._geometry&&=st(n._geometry),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function po(e){if(e!=null){if(go(e))return e.cachedResult;let t=e.arcade,n=t?.modules.arcadeUtils.executeFunction(t.func,t.context);return typeof n!=`number`&&(e.cachedResult=0,n=0),n}return 0}function mo(e,t=!1){let n=e?.featureExpressionInfo,r=n?.expression;return t||r===`0`||(n=null),n??null}var ho={cachedResult:0};function go(e){return e.cachedResult!=null}function _o(e){return e===`0`?0:null}var vo=class e{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit=`meters`,this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=Te(e)}get requiresSampledElevationInfo(){return this.mode!==`absolute-height`}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit=`meters`}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){let n=this.calculateOffsetRenderUnits(t);return this.featureExpressionInfoContext==null?e+n:n}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset,n=this.featureExpressionInfoContext;return n!=null&&(t+=po(n)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=we(e.unit)?e.unit:`meters`,this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,t,n){e.arcade?(this._featureExpressionInfoContext=co(e),this.updateFeatureExpressionFeature(t,n)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,t){let n=this.featureExpressionInfoContext;n?.arcade&&(n.cachedResult=void 0,fo(this._featureExpressionInfoContext,e.geometry?uo(n.arcade.modules,e,t):null))}static fromElevationInfo(t){let n=new e;return t!=null&&n.setFromElevationInfo(t),n}},yo=.5;function bo(e,t){e.include(Xt),e.attributes.add(`position`,`vec3`),e.attributes.add(`normal`,`vec3`),e.attributes.add(`centerOffsetAndDistance`,`vec4`);let n=e.vertex;qt(n,t),Gt(n,t),n.uniforms.add(new Mn(`viewport`,e=>e.camera.fullViewport),new L(`polygonOffset`,e=>e.shaderPolygonOffset),new cn(`aboveGround`,e=>e.camera.aboveGround?1:-1)),t.hasVerticalOffset&&jn(n),n.code.add(R`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),n.code.add(R`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${t.terrainDepthTest?R.float(0):R`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = aboveGround;
      }

      // aboveGround is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = aboveGround * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),t.draped&&!t.hasVerticalOffset||Ct(n),t.draped||(n.uniforms.add(new cn(`perDistancePixelRatio`,e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2))),n.code.add(R`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * perDistancePixelRatio * ${R.float(.5)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),t.screenCenterOffsetUnitsEnabled&&At(n),t.hasScreenSizePerspective&&Ot(n),n.code.add(R`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.draped?``:`applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);`}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled)?`vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);`:``}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?`float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);`:`float verticalOffsetScreenHeight = verticalOffset.x;`:``}

      ${t.hasVerticalOffset?R`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:``}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled?``:R`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled?t.hasScreenSizePerspective?`float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);`:`float centerOffsetY = centerOffset.y;`:``}

      ${t.screenCenterOffsetUnitsEnabled?`posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;`:``}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function xo(e){e.uniforms.add(new fn(`alignPixelEnabled`,e=>e.alignPixelEnabled)),e.code.add(R`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(R`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function So(e,t){let{vertex:n,fragment:r}=e;e.include(Dt,t),n.include(xo),n.main.add(R`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),r.main.add(R`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function Co(e){e.vertex.uniforms.add(new cn(`renderTransparentlyOccludedHUD`,e=>e.hudRenderStyle===0?1:e.hudRenderStyle===1?0:.75),new Mn(`viewport`,e=>e.camera.fullViewport),new en(`hudVisibilityTexture`,e=>e.hudVisibility?.getTexture())),e.vertex.include(xo),e.vertex.code.add(R`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function wo(e){let t=new ct;if(t.include(bo,e),t.vertex.include(vt,e),e.occlusionPass)return t.include(So,e),t;let{output:n,oitPass:r,hasOcclusionTexture:i,signedDistanceFieldEnabled:a,useVisibilityPixel:o,pixelSnappingEnabled:s,hasEmission:c,hasScreenSizePerspective:l,debugDrawLabelBorder:u,hasVVSize:d,hasVVColor:f,hasRotation:p,occludedFragmentFade:m,sampleSignedDistanceFieldTexelCenter:h}=e;t.include(Xt),t.include(Zt,e),t.include(nn,e),o&&t.include(Co);let{vertex:g,fragment:v}=t;v.include(Tt),t.varyings.add(`vcolor`,`vec4`),t.varyings.add(`vtc`,`vec2`),t.varyings.add(`vsize`,`vec2`);let y=n===8,b=y&&o;b&&t.varyings.add(`voccluded`,`float`),g.uniforms.add(new Mn(`viewport`,e=>e.camera.fullViewport),new pn(`screenOffset`,(e,t)=>_(Do,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio)),new pn(`anchorPosition`,e=>Eo(e)),new Sn(`materialColor`,({color:e})=>e),new L(`materialRotation`,e=>e.rotation),new $e(`tex`,e=>e.texture)),At(g),a&&(g.uniforms.add(new Sn(`outlineColor`,e=>e.outlineColor)),v.uniforms.add(new Sn(`outlineColor`,e=>To(e)?e.outlineColor:Me),new L(`outlineSize`,e=>To(e)?e.outlineSize:0))),s&&g.include(xo),l&&(Jt(g),Ot(g)),u&&t.varyings.add(`debugBorderCoords`,`vec4`),t.attributes.add(`uv0`,`vec2`),t.attributes.add(`uvi`,`vec4`),t.attributes.add(`color`,`vec4`),t.attributes.add(`size`,`vec2`),t.attributes.add(`rotation`,`float`),(d||f)&&t.attributes.add(`featureAttribute`,`vec4`),g.main.add(R`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${Gr};
      return;
    }

    vec2 inputSize;
    ${z(l,R`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,R`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${z(d,R`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${z(o,R`
        bool visible = testHUDVisibility(posProj);
        if (!visible) {
          vtc = vec2(0.0);
          ${z(u,`debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);`)}
          return;
        }
      `)}
    ${z(b,R`voccluded = visible ? 0.0 : 1.0;`)}
  `);let x=R`
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
    vec2 texSize = vec2(textureSize(tex, 0));
    uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${jo})));
    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${z(p,R`
        float angle = radians(materialRotation + rotation);
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,S=s?a?R`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:R`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:R`posProj += quadOffset;`;g.main.add(R`
    ${x}
    ${f?`vcolor = interpolateVVColor(featureAttribute.y) * materialColor;`:`vcolor = color * materialColor;`}

    ${z(n===9,R`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${R.float(Ft)};
    ${z(a,`alphaDiscard = alphaDiscard && outlineColor.a < ${R.float(Ft)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${S}
      gl_Position = posProj;
    }

    vtc = uv;

    ${z(u,R`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),v.uniforms.add(new $e(`tex`,e=>e.texture)),m&&!y&&(v.include(rn),v.uniforms.add(new en(`depthMap`,e=>e.mainDepth),new L(`occludedOpacity`,e=>e.occludedFragmentOpacity?.value??1))),i&&v.uniforms.add(new en(`texOcclusion`,e=>e.hudOcclusion?.attachment));let C=u?R`(isBorder > 0.0 ? 0.0 : ${R.float(Ft)})`:R.float(Ft),w=R`
    ${z(u,R`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${z(h,R`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${a?R`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${C} ||
          fillPixelColor.a + outlinePixelColor.a < ${R.float(Ft)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${z(!y,R`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${C}) {
          discard;
        }

        ${z(!y,R`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:R`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${C}) {
            discard;
          }
          ${z(!y,R`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${z(m&&!y,R`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${R.float(1-ko)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `)}
    ${z(i,R`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`)}

    ${z(!y&&u,R`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}

    ${z(r===2,R`
    if (fragColor.a < ${R.float(Ft)}) {
      discard;
    }`)}
  `;switch(n){case 0:t.outputs.add(`fragColor`,`vec4`,0),c&&t.outputs.add(`fragEmission`,`vec4`,1),r===1&&t.outputs.add(`fragAlpha`,`float`,c?2:1),v.main.add(R`
        ${w}
        // Unlike other materials, the fragment shader outputs premultiplied colors.
        // Disable this for front face rendering for correct OIT compositing.
        ${z(r===2,R`fragColor.rgb /= fragColor.a;`)}
        ${z(c,R`fragEmission = vec4(0.0);`)}
        ${z(r===1,R`fragAlpha = fragColor.a;`)}`);break;case 9:v.main.add(R`
        ${w}
        outputObjectAndLayerIdColor();`);break;case 8:t.include(zt,e),v.main.add(R`
        ${w}
        outputHighlight(${z(b,R`voccluded == 1.0`,R`false`)});`)}return t}function To(e){return e.outlineColor[3]>0&&e.outlineSize>0}function Eo(e){return e.textureIsSignedDistanceField?Oo(e.anchorPosition,e.distanceFieldBoundingBox,Do):f(Do,e.anchorPosition),Do}var Do=ie();function Oo(e,t,n){_(n,e[0]*(t[2]-t[0])+t[0],e[1]*(t[3]-t[1])+t[1])}var ko=.08,Ao=32e3,jo=R.float(Ao),Mo=Object.freeze(Object.defineProperty({__proto__:null,build:wo,calculateAnchorPosition:Eo,fullUV:Ao},Symbol.toStringTag,{value:`Module`})),No=class extends xn{constructor(e,t){super(e,t,Rn(Fo).concat(Rn(Ro()))),this.shader=new mn(Mo,()=>a(()=>import(`./HUDMaterial.glsl-Bq18p1JB.js`),__vite__mapDeps([31,2,3,1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))),this.primitiveType=t.occlusionPass?b.POINTS:b.TRIANGLE_STRIP}initializePipeline(e){let{oitPass:t,hasEmission:n,hasPolygonOffset:r,draped:i,output:a,depthTestEnabled:o,occlusionPass:s}=e,c=o&&!i&&t!==1&&!s&&a!==8;return mt({blending:Ze(a)?Yt(t,!0):null,depthTest:o&&!i?{func:515}:null,depthWrite:c?dt:null,drawBuffers:Qt(t,n),colorWrite:ft,polygonOffset:r?Po:null})}};No=g([v(`esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique`)],No);var Po={factor:0,units:-4},Fo=Fn().vec2u8(`uv0`,{glNormalized:!0}),Io=Fn().vec3f(`position`).vec3f(`normal`).vec4i16(`uvi`).vec4u8(`color`,{glNormalized:!0}).vec2f(`size`).f32(`rotation`).vec4f(`centerOffsetAndDistance`).vec4f(`featureAttribute`),Lo=Io.clone().vec4u8(`olidColor`);function Ro(){return Mt()?Lo:Io}var Z=class extends Rt{constructor(e,t){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.useVisibilityPixel=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.isFocused=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1,this.transparentOccluded=t}};g([V()],Z.prototype,`transparentOccluded`,void 0),g([V()],Z.prototype,`screenCenterOffsetUnitsEnabled`,void 0),g([V()],Z.prototype,`useVisibilityPixel`,void 0),g([V()],Z.prototype,`signedDistanceFieldEnabled`,void 0),g([V()],Z.prototype,`sampleSignedDistanceFieldTexelCenter`,void 0),g([V()],Z.prototype,`hasVVSize`,void 0),g([V()],Z.prototype,`hasVVColor`,void 0),g([V()],Z.prototype,`hasVerticalOffset`,void 0),g([V()],Z.prototype,`hasScreenSizePerspective`,void 0),g([V()],Z.prototype,`hasRotation`,void 0),g([V()],Z.prototype,`debugDrawLabelBorder`,void 0),g([V()],Z.prototype,`hasPolygonOffset`,void 0),g([V()],Z.prototype,`depthTestEnabled`,void 0),g([V()],Z.prototype,`pixelSnappingEnabled`,void 0),g([V()],Z.prototype,`draped`,void 0),g([V()],Z.prototype,`terrainDepthTest`,void 0),g([V()],Z.prototype,`cullAboveTerrain`,void 0),g([V()],Z.prototype,`occlusionPass`,void 0),g([V()],Z.prototype,`occludedFragmentFade`,void 0),g([V()],Z.prototype,`hasOcclusionTexture`,void 0),g([V()],Z.prototype,`isFocused`,void 0);var zo=class extends St{constructor(e,t,n=!1){super(e,os),this.produces=new Map([[14,e=>Xe(e)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[15,e=>Xe(e)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[16,e=>Xe(e)&&this.parameters.drawAsLabel],[13,()=>this.parameters.useVisibilityPixel],[20,e=>this.parameters.draped&&Xe(e)]]),this._visible=!0,this._configuration=new Z(t,n)}getConfiguration(e,t){let n=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits===`screen`,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=n,this._configuration.useVisibilityPixel=this.parameters.useVisibilityPixel,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.hasVVSize=!!this.parameters.vvSize,this._configuration.hasVVColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===13,this._configuration.occludedFragmentFade=!n&&!!this.parameters.occludedFragmentOpacity,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===13,Ze(e)&&(this._configuration.debugDrawLabelBorder=!!Vt.LABELS_SHOW_BORDER),this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasOcclusionTexture=this._configuration.transparentOccluded&&t.oitPass!==0,this._configuration}intersect(t,n,r,i,a,o){let{options:{selectionMode:s,hud:c,excludeLabels:l},point:u,camera:d}=r,{parameters:f}=this;if(!s||!c||l&&f.isLabel||!t.visible||!u||!d)return;let p=t.attributes.get(`featureAttribute`),{scaleX:m,scaleY:h}=cs(p==null?null:Oe(p.data,es),f,d.pixelRatio),g=t.attributes.get(`position`),_=t.attributes.get(`size`),v=t.attributes.get(`normal`),b=t.attributes.get(`rotation`),S=t.attributes.get(`centerOffsetAndDistance`);Ue(g.size>=3);let w=Eo(f),E=this.parameters.centerOffsetUnits===`screen`;for(let t=0;t<g.data.length/g.size;t++){let i=t*g.size;j(Q,g.data[i],g.data[i+1],g.data[i+2]),x(Q,Q,n),x(Q,Q,d.viewMatrix);let a=t*S.size;if(j(Qo,S.data[a],S.data[a+1],S.data[a+2]),!E&&(Q[0]+=Qo[0],Q[1]+=Qo[1],Qo[2]!==0)){let e=Qo[2];y(Qo,Q),P(Q,Q,N(Qo,Qo,e))}let s=t*v.size;j(Go,v.data[s],v.data[s+1],v.data[s+2]),C(Go,Go,D(Xo,n));let{normal:c,cosAngle:l}=Ho(Go,d,ts);if(le(Q,Q,c,us(this.parameters,Q,l,d,Wo)),d.applyProjection(Q,$),$[0]>-1){E&&(Qo[0]||Qo[1])&&($[0]+=Qo[0]*d.pixelRatio,Qo[1]!==0&&($[1]+=Wo.alignmentEvaluator.apply(Qo[1])*d.pixelRatio),d.unapplyProjection($,Q)),$[0]+=this.parameters.screenOffset[0]*d.pixelRatio,$[1]+=this.parameters.screenOffset[1]*d.pixelRatio,$[0]=Math.floor($[0]),$[1]=Math.floor($[1]);let n=t*_.size;is[0]=_.data[n],is[1]=_.data[n+1],Wo.evaluator.applyVec2(is,is);let i=ns*d.pixelRatio,a=0;f.textureIsSignedDistanceField&&(a=Math.min(f.outlineSize,.5*is[0])*d.pixelRatio/2),is[0]*=m,is[1]*=h;let s=t*b.size,c=f.rotation+b.data[s];if(Uo(u,$[0],$[1],is,i,a,c,f,w)){let t=r.ray;if(x(qo,Q,T(Zo,d.viewMatrix)),$[0]=u[0],$[1]=u[1],d.unprojectFromRenderScreen($,Q)){let n=F();M(n,t.direction);let r=1/e(n);N(n,n,r),o(ye(t.origin,Q)*r,n,-1,qo)}}}}}intersectDraped(e,t,n,r,i){let a=e.attributes.get(`position`),o=e.attributes.get(`size`),s=e.attributes.get(`rotation`),c=this.parameters,l=Eo(c),u=e.attributes.get(`featureAttribute`),{scaleX:d,scaleY:f}=cs(u==null?null:Oe(u.data,es),c,e.screenToWorldRatio),p=rs*e.screenToWorldRatio;for(let t=0;t<a.data.length/a.size;t++){let u=t*a.size,m=a.data[u],h=a.data[u+1],g=t*o.size;is[0]=o.data[g],is[1]=o.data[g+1];let _=0;c.textureIsSignedDistanceField&&(_=Math.min(c.outlineSize,.5*is[0])*e.screenToWorldRatio/2),is[0]*=d,is[1]*=f;let v=t*s.size,y=c.rotation+s.data[v];Uo(n,m,h,is,p,_,y,c,l)&&r(i.distance,i.normal,-1)}}createBufferWriter(){return new ss}applyShaderOffsets(t,n,r,i,a,o,s){C(Ko,r,D(Xo,i));let c=Ho(Ko,o,ts),l=ls(e(n),o),u=us(this.parameters,n,c.cosAngle,o,s);le(n,n,c.normal,u+l),le(t,t,Ko,u+l);let d=a[3]+u;this._applyPolygonOffsetView(n,c,d,o,n),this._applyCenterOffsetView(n,a,n)}applyShaderOffsetsNDC(e,t,n,r,i){return this._applyCenterOffsetNDC(e,t,n,r),i!=null&&M(i,r),this._applyPolygonOffsetNDC(r,t,n,r),r}_applyPolygonOffsetView(e,t,n,i,a){let o=i.aboveGround?1:-1,s=Math.sign(n);s===0&&(s=o);let c=o*s;if(this.parameters.shaderPolygonOffset<=0)return M(a,e);let l=r(Math.abs(t.cosAngle),.01,1),u=1-Math.sqrt(1-l*l)/l/i.viewport[2];return N(a,e,c>0?u:1/u),a}_applyCenterOffsetView(e,t,n){let r=this.parameters.centerOffsetUnits!==`screen`;return n!==e&&M(n,e),r&&(n[0]+=t[0],n[1]+=t[1],t[2]&&(y(Go,n),w(n,n,N(Go,Go,t[2])))),n}_applyCenterOffsetNDC(e,t,n,r){let i=this.parameters.centerOffsetUnits!==`screen`;return r!==e&&M(r,e),i||(r[0]+=t[0]/n.fullWidth*2,r[1]+=t[1]/n.fullHeight*2),r}_applyPolygonOffsetNDC(e,t,n,r){let i=this.parameters.shaderPolygonOffset;if(e!==r&&M(r,e),i){let e=n.aboveGround?1:-1,a=e*Math.sign(t[3]);r[2]-=(a||e)*i}return r}set visible(e){this._visible=e}get visible(){let{color:e,outlineSize:t,outlineColor:n}=this.parameters,r=e[3]>=.003913894324853229||t>=.003913894324853229&&n[3]>=.003913894324853229;return this._visible&&r}createGLMaterial(e){return new Bo(e)}calculateRelativeScreenBounds(e,t,n=A()){return Vo(this.parameters,e,t,n),n[2]=n[0]+e[0],n[3]=n[1]+e[1],n}},Bo=class extends $t{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(No,e)}};function Vo(e,t,n,r){r[0]=e.anchorPosition[0]*-t[0]+e.screenOffset[0]*n,r[1]=e.anchorPosition[1]*-t[1]+e.screenOffset[1]*n}function Ho(e,t,n){return x(n.normal,e,t.viewInverseTransposeMatrix),n.cosAngle=p(n.normal,as),n}function Uo(e,t,n,r,i,a,o,s,c){let l=t-i-r[0]*c[0],u=l+r[0]+2*i,d=n-i-r[1]*c[1],f=d+r[1]+2*i,p=s.distanceFieldBoundingBox;return s.textureIsSignedDistanceField&&p!=null&&(l+=r[0]*p[0],d+=r[1]*p[1],u-=r[0]*(1-p[2]),f-=r[1]*(1-p[3]),l-=a,u+=a,d-=a,f+=a),_(Yo,t,n),be(Jo,e,Yo,ue(o)),Jo[0]>l&&Jo[0]<u&&Jo[1]>d&&Jo[1]<f}var Wo=new Et,Q=F(),Go=F(),$=ke(),Ko=F(),qo=F(),Jo=ie(),Yo=ie(),Xo=d(),Zo=i(),Qo=F(),$o=F(),es=ke(),ts={normal:F(),cosAngle:0},ns=1,rs=2,is=pe(0,0),as=re(0,0,1),os=class extends un{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=Ae(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=pe(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=Ae(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=ke(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.useVisibilityPixel=!0,this.occludedVisibilityMode=`hidden`,this.centerOffsetUnits=`world`,this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}},ss=class{constructor(){this.layout=Ro(),this.baseInstanceLayout=Fo}elementCount(e){return e.get(`position`).indices.length}elementCountBaseInstance(e){return e.get(`uv0`).indices.length}write(e,t,n,r,i,a){let{position:o,normal:s,color:c,size:l,rotation:u,centerOffsetAndDistance:d,featureAttribute:f,uvi:p}=i;tn(n.get(`position`),e,o,a),En(n.get(`normal`),t,s,a);let m=n.get(`position`).indices.length,h=0,g=0,_=Ao,v=Ao,y=n.get(`uvi`)?.data;y&&y.length>=4&&(h=y[0],g=y[1],_=y[2],v=y[3]);for(let e=0;e<m;++e){let t=a+e;p.setValues(t,h,g,_,v)}if(yn(n.get(`color`),4,c,a),on(n.get(`size`),l,a),bn(n.get(`rotation`),u,a),n.get(`centerOffsetAndDistance`)?ln(n.get(`centerOffsetAndDistance`),d,a):wn(d,a,m),n.get(`featureAttribute`)?ln(n.get(`featureAttribute`),f,a):wn(f,a,m),r!=null){let e=n.get(`position`)?.indices;if(e){let t=e.length;an(r,i.getField(`olidColor`,We),t,a)}}return{numVerticesPerItem:1,numItems:m}}writeBaseInstance(e,t){let{uv0:n}=t;on(e.get(`uv0`),n,0)}};function cs(e,t,n){return e==null||t.vvSize==null?{scaleX:n,scaleY:n}:(Wt($o,t,e),{scaleX:$o[0]*n,scaleY:$o[1]*n})}function ls(e,t){let n=t.computeRenderPixelSizeAtDist(e)*yo;return(t.aboveGround?1:-1)*n}function us(t,n,r,i,a){if(!t.verticalOffset?.screenLength){let i=e(n);return a.update(r,i,t.screenSizePerspective,t.screenSizePerspectiveMinPixelReferenceSize,t.screenSizePerspectiveAlignment,null),0}let o=e(n),s=t.screenSizePerspectiveAlignment??t.screenSizePerspective,c=Nn(i,o,t.verticalOffset,r,s,t.screenSizePerspectiveMinPixelReferenceSize);return a.update(r,o,t.screenSizePerspective,t.screenSizePerspectiveMinPixelReferenceSize,t.screenSizePerspectiveAlignment,null),c}export{mr as $,Da as A,Ti as B,Ma as C,Ta as D,sa as E,xa as F,Wr as G,Zr as H,Oa as I,Tr as J,Ur as K,Na as L,Ca as M,Sa as N,Pa as O,Aa as P,gr as Q,ki as R,Ba as S,ja as T,Qr as U,ri as V,Gr as W,Er as X,Or as Y,_r as Z,Ja as _,Co as a,Gn as at,no as b,vo as c,ho as d,dr as et,Wa as f,Ua as g,Ya as h,Ao as i,er as it,ka as j,Ia as k,lo as l,Ka as m,Eo as n,rr as nt,xo as o,Hn as ot,qa as p,Dr as q,wo as r,nr as rt,bo as s,zn as st,zo as t,ur as tt,mo as u,Xa as v,na as w,Ha as x,Ga as y,Oi as z};