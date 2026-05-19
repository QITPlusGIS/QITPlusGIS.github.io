import{i as e,n as t}from"./Emissions.glsl-CLujNuKd.js";import{n,t as r}from"./glsl-DR5qAdui.js";import{t as i}from"./ShaderBuilder-DZEqsQYk.js";import{H as a,I as o,M as s,W as c,an as l,kt as u,n as d}from"./VertexColor.glsl-ewiTSNA6.js";var f=class extends l{};function p(l){let f=new i,{vertex:p,fragment:m,varyings:h}=f,{output:g,perspectiveInterpolation:_}=l;return c(p,l),f.include(d),f.include(o,l),f.fragment.include(u,l),f.fragment.code.add(n`void outputObjectAndLayerIdColor() {
    ${r(g===9,`fragColor = vec4(0, 0, 0, 1);`)}
    }`),f.include(s,l),f.attributes.add(`position`,`vec3`),f.attributes.add(`uv0`,`vec2`),_&&f.attributes.add(`perspectiveDivide`,`float`),p.main.add(n`
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${r(_,`gl_Position *= perspectiveDivide;`)}`),h.add(`vpos`,`vec3`,{invariant:!0}),h.add(`vTexCoord`,`vec2`),m.include(a),m.uniforms.add(new e(`opacity`,e=>e.opacity),new t(`tex`,e=>e.texture)).main.add(n`discardBySlice(vpos);
discardByTerrainDepth();
vec4 finalColor = texture(tex, vTexCoord) * opacity;
outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),f}var m=Object.freeze(Object.defineProperty({__proto__:null,ImageMaterialPassParameters:f,build:p},Symbol.toStringTag,{value:`Module`}));export{m as n,f as r,p as t};