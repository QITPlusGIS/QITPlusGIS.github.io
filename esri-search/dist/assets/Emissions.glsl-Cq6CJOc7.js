import{zm as e}from"./index-g2z7tZmX.js";import{n as t,t as n}from"./glsl-DR5qAdui.js";function r(e){return e===3||e===4||e===5}function i(e){return r(e)||e===6||e===7}function a(e){return d(e)||e===2}function o(e){return e===8||e===9}function s(e){return c(e)||o(e)}function c(e){return e===0}function l(e){return c(e)||e===9}function u(e){return c(e)||o(e)}function d(e){return u(e)||f(e)}function f(e){return e===1}function p(e){return f(e)||i(e)}function m(e,n){switch(n.textureCoordinateType){case 1:e.attributes.add(`uv0`,`vec2`),e.varyings.add(`vuv0`,`vec2`),e.vertex.code.add(t`void forwardTextureCoordinates() { vuv0 = uv0; }`);return;case 2:e.attributes.add(`uv0`,`vec2`),e.attributes.add(`uvRegion`,`vec4`),e.varyings.add(`vuv0`,`vec2`),e.varyings.add(`vuvRegion`,`vec4`),e.vertex.code.add(t`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);return;default:n.textureCoordinateType;case 0:e.vertex.code.add(t`void forwardTextureCoordinates() {}`);return;case 3:return}}function h(e){e.fragment.code.add(t`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function g(e,n){let{textureCoordinateType:r}=n;if(r===0||r===3)return;e.include(m,n);let i=r===2;i&&e.include(h),e.fragment.code.add(t`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?`textureAtlasLookup(tex, uv, vuvRegion)`:`texture(tex, uv)`};
    }
  `)}function _(n){n.constants.add(`GAMMA`,`float`,e).constants.add(`INV_GAMMA`,`float`,1/e).code.add(t`vec3 delinearizeGamma(vec3 color) {
return pow(color, vec3(INV_GAMMA));
}
vec4 delinearizeGamma(vec4 color) {
return vec4(delinearizeGamma(color.rgb), color.a);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}var v=class{constructor(e,t,n,r,i=null){if(this.name=e,this.type=t,this.arraySize=i,this.bind={0:null,1:null,2:null},r)switch(n){case void 0:break;case 0:this.bind[0]=r;break;case 1:this.bind[1]=r;break;case 2:this.bind[2]=r}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},y=class extends v{constructor(e,t,n){super(e,`vec3`,2,(r,i,a,o)=>r.setUniform3fv(e,t(i,a,o),n))}},b=class extends v{constructor(e,t,n){super(e,`vec3`,1,(r,i,a)=>r.setUniform3fv(e,t(i,a),n))}},x=class extends v{constructor(e,t,n){super(e,`float`,2,(r,i,a)=>r.setUniform1f(e,t(i,a),n))}},S=class extends v{constructor(e,t,n){super(e,`float`,1,(r,i,a)=>r.setUniform1f(e,t(i,a),n))}},C=class extends v{constructor(e,t){super(e,`sampler2D`,2,(n,r,i)=>n.bindTexture(e,t(r,i)))}},w=class extends v{constructor(e,t){super(e,`sampler2D`,1,(n,r,i)=>n.bindTexture(e,t(r,i)))}};function T(e,r){if(!c(r.output))return;e.fragment.include(_);let{emissionSource:i,hasEmissiveTextureTransform:a,bindType:o}=r,s=i===3||i===4||i===5;s&&(e.include(g,r),e.fragment.uniforms.add(o===1?new w(`texEmission`,e=>e.textureEmissive):new C(`texEmission`,e=>e.textureEmissive)));let l=i===2||s;l&&e.fragment.uniforms.add(o===1?new b(`emissiveBaseColor`,e=>e.emissiveBaseColor):new y(`emissiveBaseColor`,e=>e.emissiveBaseColor));let u=i!==0;u&&!(i===7||i===6||i===4||i===5)&&e.fragment.uniforms.add(o===1?new S(`emissiveStrength`,e=>e.emissiveStrength??0):new x(`emissiveStrength`,e=>e.emissiveStrength??0));let d=i===7,f=i===5,p=i===1||i===6||d;e.fragment.code.add(t`
    vec4 getEmissions(vec3 symbolColor) {
      vec4 emissions = ${l?f?`emissiveSource == 0 ? vec4(emissiveBaseColor, 1.0): vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(emissiveBaseColor, 1.0)`:p?d?`emissiveSource == 0 ? vec4(0.0): vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(0.0)`};
      ${n(s,`${n(f,`if(emissiveSource == 0) {\n              vec4 emissiveFromTex = textureLookup(texEmission, ${a?`emissiveUV`:`vuv0`});\n              emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);\n           }`,`vec4 emissiveFromTex = textureLookup(texEmission, ${a?`emissiveUV`:`vuv0`});\n           emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);`)}\n        emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)}
      ${n(u,`emissions.rgb *= emissiveStrength * ${t.float(1)};`)}
      return emissions;
    }
  `)}export{i as _,b as a,d as b,_ as c,f as d,p as f,u as g,c as h,S as i,g as l,s as m,w as n,y as o,l as p,C as r,v as s,T as t,m as u,a as v,o as y};