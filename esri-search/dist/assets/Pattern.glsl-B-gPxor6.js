import{Mx as e,zv as t}from"./index-CdfIpVZ2.js";import{G as n,X as r}from"./BufferView-OnDRsybZ.js";import{s as i}from"./Emissions.glsl-CLujNuKd.js";import{n as a,t as o}from"./glsl-DR5qAdui.js";import{t as s}from"./ShaderBuilder-DZEqsQYk.js";import{H as c,I as l,Kt as u,Lt as d,M as f,Ot as p,U as m,W as h,Z as g,at as _,fn as v,kt as ee,n as y,pn as b,qt as x,t as S}from"./VertexColor.glsl-ewiTSNA6.js";import{a as C}from"./FloatArray-DbN2HezN.js";import{t as w}from"./TextureBackedBufferLayout-Dhxgw4b0.js";var T=class extends p{constructor(){super(...arguments),this.cullFace=0,this.style=0,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasOccludees=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.hasVVColor=!1,this.draped=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.writeDepth=!0,this.occlusionPass=!1,this.hasVVInstancing=!1,this.hasVVSize=!1,this.hasVVOpacity=!1,this.overlayEnabled=!1,this.snowCover=!1}};function E(e,t,n,r){return e.draped?null:e.hasVVColor?r:e.hasVertexColors?n:t}e([x({count:3})],T.prototype,`cullFace`,void 0),e([x({count:6})],T.prototype,`style`,void 0),e([x()],T.prototype,`hasVertexColors`,void 0),e([x()],T.prototype,`polygonOffset`,void 0),e([x()],T.prototype,`hasOccludees`,void 0),e([x()],T.prototype,`enableOffset`,void 0),e([x()],T.prototype,`terrainDepthTest`,void 0),e([x()],T.prototype,`cullAboveTerrain`,void 0),e([x()],T.prototype,`hasVVColor`,void 0),e([x()],T.prototype,`draped`,void 0);function te(e){let t=C().vec3f(`position`).vec4f(`uvMapSpace`);return e.draped?e.hasVVColor?t.f32(`colorFeatureAttribute`):e.hasVertexColors&&t.vec4u8(`color`,{glNormalized:!0}):t.u32(`textureElementIndex`,{integer:!0}),d()&&t.vec4u8(`olidColor`),t.freeze()}var D=[{type:`mat3f32`,name:`boundingRect`}],O=new w(D),k=new w([...D,{type:`vec4unorm8`,name:`color`}]),A=new w([...D,{type:`f32`,name:`colorFeatureAttribute`}]);function j(e){return E(e,O,k,A)}function ne(e){switch(e.elementType){case`float`:switch(e.elementCount){case 1:return a`float`;case 2:return a`vec2`;case 3:return a`vec3`;case 4:return a`vec4`;case 9:return a`mat3`;default:e.elementCount}break;case`int`:switch(e.elementCount){case 1:return a`int`;case 2:return a`ivec2`;case 3:return a`ivec3`;case 4:return a`ivec4`;case 9:throw Error(`Invalid element count 9 for type int`);default:e.elementCount}break;case`uint`:switch(e.elementCount){case 1:return a`uint`;case 2:return a`uvec2`;case 3:return a`uvec3`;case 4:return a`uvec4`;case 9:throw Error(`Invalid element count 9 for type uint`);default:e.elementCount}break;default:e.elementType}throw Error(`unsupported field`)}var M=new v(`const_NaN`,()=>NaN,{supportsNaN:!0}),N=class extends u{constructor(e){super(),this.supportNaN=e}};function re(e,t){let n=t?.supportNaN;n&&(e.uniforms.add(M),e.code.add(a`bool bitsEncodeFloat16NaN(highp uint bits) {
const highp uint nanExponent = 0x00007c00u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x000003ffu;
return exponent == nanExponent && mantissa != 0u;
}`)),e.code.add(a`
    mediump float unpackHalf2x8(highp uint bits0, highp uint bits1) {
      highp uint halfBits = (bits1 << 8u) | bits0;
      ${o(n,a`
        if (bitsEncodeFloat16NaN(halfBits)) {
          return const_NaN;
        }`)}
      return unpackHalf2x16(halfBits).x;
    }`)}function P(e,t){let n=t?.supportNaN;n&&(e.uniforms.add(M),e.code.add(a`bool bitsEncodeFloat32NaN(highp uint bits) {
const highp uint nanExponent = 0x7f800000u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x007fffffu;
return exponent == nanExponent && mantissa != 0u;
}`)),e.code.add(a`
    highp float unpackFloat4x8(highp uint bits0, highp uint bits1, highp uint bits2, highp uint bits3) {
      highp uint floatBits = (bits3 << 24u) |(bits2 << 16u) | (bits1 << 8u) | bits0;
      ${o(n,a`
        if (bitsEncodeFloat32NaN(floatBits)) {
          return const_NaN;
        }`)}
      return uintBitsToFloat(floatBits);
    }`)}function F(e){let{fieldType:t}=e;return`${(0,I[t])(L(e))}`}e([x()],N.prototype,`supportNaN`,void 0);var I={u8:e=>a`${e[0]}`,unorm8:e=>a`float(${e[0]})/255.0`,vec4unorm8:e=>a`vec4(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})/255.0`,f16:r?e=>a`unpackHalf2x8(${`${e[0]}, ${e[1]}`})`:e=>a`unpackFloat4x8(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`,f32:e=>a`unpackFloat4x8(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`,vec4u8:e=>a`uvec4(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`,mat3f32:e=>a`mat3(${e.reduce((e,t)=>{let n=e.at(-1);return n==null||n.length>=4?e.push([t]):n.push(t),e},[]).map(e=>a`unpackFloat4x8(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`).join(`,
`)})`};function L(e){let{startTexel:t,byteOffset:n,texelByteStride:r,byteSize:i}=e,o=t,s=n%r,c=[];for(let e=0;e<i;++e){let e=a`texel${a.int(o)}.${R[s]}`;c.push(e),++s,s>=r&&(s=0,++o)}return c}var R=[`x`,`y`,`z`,`w`],z=new N(!0),B=new N(!1),V=class{constructor(e){this.moduleId=t(),this.namespace=`_tbb_${this.moduleId}_`;let{itemIndexAttribute:n,bufferUniform:r,layout:i}=e,a=e.fieldFilter??(()=>!0),o=e.enableNaNSupport?z:B;this.TextureBackedBufferModule=(e,t)=>H(this.namespace,e,t,n,r,i,a,o),this.getTextureAttribute=U(this.namespace)}};function H(e,t,r,i,o,s,c,l){let{vertex:u}=t;u.include(P,l),u.include(re,l);let d=`${e}tbbStride`,f=`${e}TextureBackedBufferItemData`,p=`${e}fetchTextureBackedBufferItemData`,m=W(e);for(let e of[d,f,p,m])n(e.length<1024,`Identifiers do not have a valid length`);u.constants.add(d,`uint`,s.texelStride),u.uniforms.add(o);let h=[];for(let e of s.fields.values())c(e.name,r)&&h.push(e);if(h.length===0)return;let g=[];for(let e=0;e<s.texelStride;++e)g.push(!1);for(let e of h)for(let t=0;t<e.numTexels;++t)g[e.startTexel+t]=!0;u.code.add(a`
  struct ${f} {`);for(let e of h)u.code.add(a`\t${ne(e)} ${e.name};`);u.code.add(a`};`),u.code.add(a`
  ${f} ${p}(highp uint itemIndex) {
    ${f} itemData;
    highp uint index = itemIndex * ${d};
    highp uint rowWidth = uint(textureSize(${o.name}, 0).x);
    int coordX = int(index % rowWidth);
    int coordY = int(index / rowWidth);
  `);for(let e=0;e<g.length;++e)!1!==g[e]&&u.code.add(a`lowp uvec4 texel${a.int(e)} = texelFetch(${o.name}, ivec2(coordX + ${a.int(e)}, coordY), 0);`);for(let e of h)u.code.add(a`itemData.${e.name} = ${F(e)};`);u.code.add(a`return itemData;
}`),u.code.add(a`${f} ${m};`),u.main.add(a`${m} = ${p}(${i});`)}function U(e){let t=W(e);return e=>a`${t}.${e}`}function W(e){return`${e}ItemData`}var G=new class extends i{constructor(e,t){super(e,`usampler2D`,2,(n,r,i)=>n.bindTexture(e,t(r,i)))}}(`componentTextureBuffer`,e=>e.textureBuffer),K=new V({layout:O,itemIndexAttribute:`textureElementIndex`,bufferUniform:G}),q=new V({layout:k,itemIndexAttribute:`textureElementIndex`,bufferUniform:G}),J=new V({layout:A,itemIndexAttribute:`textureElementIndex`,bufferUniform:G,enableNaNSupport:!0});function Y(e){return E(e,K,q,J)}var X=.70710678118,Z=X,ie=.08715574274,Q=10,ae=1;function $(e){let t=Y(e),n=t!=null,r=new s;n&&r.include(t.TextureBackedBufferModule,e);let{vertex:i,fragment:u,attributes:d,varyings:p}=r,x=e.output===8;h(i,e),r.include(y);let C=``;n?(e.hasVVColor&&(C=t.getTextureAttribute(`colorFeatureAttribute`)),e.hasVertexColors?(r.varyings.add(`vColor`,`vec4`),r.vertex.code.add(a`void forwardVertexColor() { vColor = ${t.getTextureAttribute(`color`)}; }`)):r.vertex.code.add(a`void forwardVertexColor() {}`),d.add(`textureElementIndex`,`uint`)):(r.include(S,e),e.hasVVColor&&(d.add(`colorFeatureAttribute`,`float`),C=`colorFeatureAttribute`)),r.include(g,e),r.include(_,e),r.fragment.include(ee,e),r.include(f,e),r.include(l,e),e.draped&&i.uniforms.add(new v(`worldToScreenRatio`,e=>1/e.screenToPCSRatio)),d.add(`position`,`vec3`),d.add(`uvMapSpace`,`vec4`),e.hasVertexColors||p.add(`vColor`,`vec4`),p.add(`vpos`,`vec3`,{invariant:!0}),p.add(`vuv`,`vec2`),i.uniforms.add(new b(`uColor`,e=>e.color));let w=e.style===3||e.style===4||e.style===5;return w&&i.code.add(a`
      const mat2 rotate45 = mat2(${a.float(X)}, ${a.float(-Z)},
                                 ${a.float(Z)}, ${a.float(X)});
    `),!e.draped&&n&&(m(i,e),i.uniforms.add(new v(`worldToScreenPerDistanceRatio`,e=>1/e.camera.perScreenPixelRatio)),i.code.add(a`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),i.code.add(a`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),i.code.add(a`
      float boundingRectDistanceToCamera() {
        vec3 center = ${t.getTextureAttribute(`boundingRect`)}[0];
        vec3 halfU = ${t.getTextureAttribute(`boundingRect`)}[1];
        vec3 halfV = ${t.getTextureAttribute(`boundingRect`)}[2];
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${a.float(ie)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)),i.code.add(a`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${o(w,` * rotate45`)};
      vec2 uvCellOrigin = uvMapSpace.zw ${o(w,` * rotate45`)};

      ${o(!e.draped,a`float distanceToCamera = boundingRectDistanceToCamera();
               float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;`)}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${a.float(Q)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `),i.main.add(a`
    vuv = scaledUV();
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardVertexColor();
    forwardObjectAndLayerIdColor();
    ${e.hasVertexColors?`vColor *= uColor;`:e.hasVVColor?a`vColor = uColor * interpolateVVColor(${C});`:`vColor = uColor;`}
    gl_Position = transformPosition(proj, view, vpos);
  `),u.include(c),e.draped&&u.uniforms.add(new v(`texelSize`,e=>1/e.camera.pixelRatio)),x||(u.code.add(a`
      const float lineWidth = ${a.float(ae)};
      const float spacing = ${a.float(Q)};
      const float spacingINV = ${a.float(1/Q)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),e.draped||u.code.add(a`const int maxSamples = 5;
float sampleAA(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)),u.main.add(a`
    discardBySlice(vpos);
    discardByTerrainDepth();
    vec4 color = vColor;
    ${o(!x,a`color.a *= ${oe(e)};`)}
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `),r}function oe(e){function t(t){return e.draped?a`coverage(vuv.${t}, texelSize)`:a`sampleAA(vuv.${t})`}switch(e.style){case 3:case 0:return t(`y`);case 4:case 1:return t(`x`);case 5:case 2:return a`1.0 - (1.0 - ${t(`x`)}) * (1.0 - ${t(`y`)})`;default:return`0.0`}}var se=Object.freeze(Object.defineProperty({__proto__:null,build:$},Symbol.toStringTag,{value:`Module`}));export{T as a,te as i,$ as n,j as r,se as t};