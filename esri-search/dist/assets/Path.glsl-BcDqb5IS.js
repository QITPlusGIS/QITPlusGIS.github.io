import{mi as e}from"./index-g2z7tZmX.js";import{a as t,h as n,i as r}from"./Emissions.glsl-Cq6CJOc7.js";import{n as i,t as a}from"./glsl-DR5qAdui.js";import{t as o}from"./ShaderBuilder-DFzFcxY_.js";import{$ as s,G as c,H as l,I as u,M as d,P as f,U as p,W as m,at as h,et as g,hn as _,kt as v,n as y,pn as b,r as x,vt as S}from"./VertexColor.glsl-CCcyNZUz.js";import{C,_ as w,a as T,c as E,d as D,l as O,m as k,o as A,s as j,u as M}from"./DefaultMaterial-Dz_g_XRg.js";import{t as N}from"./NormalUtils.glsl-FQ1jzPL2.js";var P=8;function F(e,n){let{attributes:o,vertex:c}=e;o.add(`position`,`vec3`),o.add(`profileVertexAndNormal`,`vec4`),o.add(`profileAuxData`,`vec3`),o.add(`profileRight`,`vec2`),o.add(`profileUp`,`vec2`),c.code.add(i`bool isCapVertex() {
return profileAuxData.z == 1.0;
}`),c.uniforms.add(new _(`size`,e=>e.size));let{hasVVSize:l,hasVVColor:u,hasVVOpacity:d}=n;l?(o.add(`sizeFeatureAttribute`,`float`),c.uniforms.add(new t(`vvSizeMinSize`,e=>e.vvSize.minSize),new t(`vvSizeMaxSize`,e=>e.vvSize.maxSize),new t(`vvSizeOffset`,e=>e.vvSize.offset),new t(`vvSizeFactor`,e=>e.vvSize.factor),new t(`vvSizeFallback`,e=>e.vvSize.fallback)),c.code.add(i`vec2 getSize() {
float value = sizeFeatureAttribute;
if (isnan(value)) {
return vvSizeFallback.xz;
}
return size * clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
}`)):c.code.add(i`vec2 getSize(){
return size;
}`),d?(o.add(`opacityFeatureAttribute`,`float`),c.constants.add(`vvOpacityNumber`,`int`,P),c.uniforms.add(new s(`vvOpacityValues`,P,e=>e.vvOpacity.values),new s(`vvOpacityOpacities`,P,e=>e.vvOpacity.opacityValues),new r(`vvOpacityFallback`,e=>e.vvOpacity.fallback,{supportsNaN:!0})),c.code.add(i`
    vec4 applyOpacity(vec4 color) {
      // if we encounter NaN in the color it means the color is in the fallback case where the symbol color
      // is not defined and there is no valid color visual variable override. In this case just return a fully
      // transparent color
      if (isnan(color.r)) {
        return vec4(0);
      }

      float value = opacityFeatureAttribute;

      if (isnan(value)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${a(u,`color`,`vec4(color.rgb, vvOpacityFallback)`)};
      }

      if (value <= vvOpacityValues[0]) {
        return vec4(color.rgb, vvOpacityOpacities[0]);
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return vec4(color.rgb, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
        }
      }

      return vec4( color.rgb, vvOpacityOpacities[vvOpacityNumber - 1]);
    }
    `)):c.code.add(i`vec4 applyOpacity(vec4 color){
return color;
}`),u?(o.add(`colorFeatureAttribute`,`float`),c.constants.add(`vvColorNumber`,`int`,8),c.uniforms.add(new s(`vvColorValues`,8,e=>e.vvColor.values),new g(`vvColorColors`,8,e=>e.vvColor.colors),new b(`vvColorFallback`,e=>e.vvColor.fallback)),c.code.add(i`vec4 getColor() {
float value = colorFeatureAttribute;
if (isnan(value)) {
return applyOpacity(vvColorFallback);
}
if (value <= vvColorValues[0]) {
return applyOpacity(vvColorColors[0]);
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
}
}
return applyOpacity(vvColorColors[vvColorNumber - 1]);
}`)):c.code.add(i`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`),c.code.add(i`vec3 decompressAxis(vec2 axis) {
float z = 1.0 - abs(axis.x) - abs(axis.y);
return normalize(vec3(axis + sign(axis) * min(z, 0.0), z));
}
vec3 calculateVPos() {
vec2 size = getSize();
vec3 origin = position;
vec3 right = decompressAxis(profileRight);
vec3 up = decompressAxis(profileUp);
vec2 profileVertex = profileVertexAndNormal.xy * size;`),c.code.add(i`if(isCapVertex()) {
float positionOffsetAlongProfilePlaneNormal = profileAuxData.x * size[0];
vec3 forward = cross(up, right);
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}
vec2 rotationRight = vec2(profileAuxData.x, profileAuxData.y);
float maxDistance = length(rotationRight);`),c.code.add(i`rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y;
return origin + offset;
}`),c.code.add(i`vec3 localNormal() {
vec3 right = decompressAxis(profileRight);
vec3 up = decompressAxis(profileUp);
vec3 normal = right * profileVertexAndNormal.z + up * profileVertexAndNormal.w;
if(isCapVertex()) {
vec3 forward = cross(up, right);
normal += forward * profileAuxData.y;
}
return normal;
}`)}var I=class extends S{constructor(){super(...arguments),this.size=e(1,1)}};function L(e){let s=new o,{vertex:g,fragment:_,varyings:b}=s;m(g,e),b.add(`vpos`,`vec3`,{invariant:!0}),s.include(F,e);let{output:S,spherical:P,pbrMode:I,snowCover:L}=e;switch((n(S)||S===9)&&(s.include(y),s.include(A,e),s.include(h,e),s.include(u,e),b.add(`vnormal`,`vec3`),b.add(`vcolor`,`vec4`),g.main.add(i`vpos = calculateVPos();
vnormal = normalize(localNormal());
forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);
forwardObjectAndLayerIdColor();
vcolor = getColor();
forwardLinearDepthToReadShadowMap();`)),S){case 0:s.include(j,e),_.include(D,e),_.include(w,e),s.include(E,e),_.include(v,e),s.include(d,e),p(_,e),M(_),O(_),_.uniforms.add(g.uniforms.get(`localOrigin`),new t(`ambient`,e=>e.ambient),new t(`diffuse`,e=>e.diffuse),new r(`opacity`,e=>e.opacity)),_.include(l),_.include(T,e),k(_),_.main.add(i`
        discardBySlice(vpos);
        discardByTerrainDepth();

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        vec3 posWorld = vpos + localOrigin;
        vec3 normalGround = ${P?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;

        ${a(L,i`float snow = getSnow(normal, normalGround);
                 albedo = mix(albedo, vec3(1), snow);
                 ssao = mix(ssao, 1.0, snow);`)}

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        float shadow = readShadow(additionalAmbientScale, vpos);

        ${a(I===2,`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];\n           ${a(L,`mrr = applySnowToMRR(mrr, snow);`)}`)}

        vec3 shadedColor = ${I===2?`evaluateSceneLightingPBR(normal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:`evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        vec4 finalColor = vec4(shadedColor, combinedOpacity);
        outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${a(L,`, snow`)});`);break;case 1:s.include(y),g.main.add(i`vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);`),s.fragment.include(v,e),_.main.add(i`discardBySlice(vpos);`);break;case 3:case 4:case 5:case 6:s.include(y),x(s),b.add(`depth`,`float`),g.main.add(i`vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);`),s.fragment.include(v,e),s.include(C,e),_.main.add(i`discardBySlice(vpos);
outputDepth(depth);`);break;case 9:s.fragment.include(v,e),_.main.add(i`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);break;case 2:s.include(y),s.include(N,e),c(g),b.add(`vnormal`,`vec3`),g.main.add(i`vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);`),s.fragment.include(v,e),_.main.add(i`discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);`);break;case 8:s.include(y),s.include(N,e),b.add(`vnormal`,`vec3`),g.main.add(i`vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);`),s.fragment.include(v,e),s.include(f,e),_.main.add(i`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`)}return s}var R=Object.freeze(Object.defineProperty({__proto__:null,build:L},Symbol.toStringTag,{value:`Module`}));export{R as n,I as r,L as t};