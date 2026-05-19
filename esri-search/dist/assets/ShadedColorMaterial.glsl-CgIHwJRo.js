import{i as e}from"./vec4f64-g2eiNsN7.js";import{a as t,i as n}from"./Emissions.glsl-CLujNuKd.js";import{n as r,t as i}from"./glsl-DR5qAdui.js";import{t as a}from"./ShaderBuilder-DZEqsQYk.js";import{G as o,H as s,I as c,M as l,U as u,W as d,fn as f,kt as p,n as m,pn as h}from"./VertexColor.glsl-ewiTSNA6.js";function g(e,t){if(!t.screenSizeEnabled)return;let i=e.vertex;u(i,t),i.uniforms.add(new f(`perScreenPixelRatio`,e=>e.camera.perScreenPixelRatio),new n(`screenSizeScale`,e=>e.screenSizeScale)).code.add(r`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function _(e){let n=new a;n.include(m),n.include(g,e),n.fragment.include(p,e),n.include(l,e),n.include(c,e);let{vertex:u,fragment:f}=n;return f.include(s),d(u,e),f.uniforms.add(new h(`uColor`,e=>e.color)),n.attributes.add(`position`,`vec3`),n.varyings.add(`vWorldPosition`,`vec3`),e.screenSizeEnabled&&n.attributes.add(`offset`,`vec3`),e.shadingEnabled&&(o(u),n.attributes.add(`normal`,`vec3`),n.varyings.add(`vViewNormal`,`vec3`),f.uniforms.add(new t(`shadingDirection`,e=>e.shadingDirection)),f.uniforms.add(new h(`shadedColor`,e=>v(e.shadingTint,e.color)))),u.main.add(r`
    vWorldPosition = ${e.screenSizeEnabled?r`screenSizeScaling(offset, position)`:r`position`};
    ${i(e.shadingEnabled,r`vec3 worldNormal = normal;
           vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`)}
    forwardViewPosDepth((view * vec4(vWorldPosition, 1.0)).xyz);
    gl_Position = transformPosition(proj, view, vWorldPosition);
  `),f.main.add(r`
      discardBySlice(vWorldPosition);
      discardByTerrainDepth();
      ${e.shadingEnabled?r`vec3 viewNormalNorm = normalize(vViewNormal);
             float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
             vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`:r`vec4 finalColor = uColor;`}
      outputColorHighlightOLID(applySlice(finalColor, vWorldPosition), finalColor.rgb);`),n}function v(e,t){let n=1-e[3],r=e[3]+t[3]*n;return r===0?(y[3]=r,y):(y[0]=(e[0]*e[3]+t[0]*t[3]*n)/r,y[1]=(e[1]*e[3]+t[1]*t[3]*n)/r,y[2]=(e[2]*e[3]+t[2]*t[3]*n)/r,y[3]=t[3],y)}var y=e(),b=Object.freeze(Object.defineProperty({__proto__:null,build:_},Symbol.toStringTag,{value:`Module`}));export{_ as n,b as t};