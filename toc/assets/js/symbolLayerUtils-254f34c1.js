import{bA as v,s as n,ay as y,_ as b,bB as c,bg as p,bC as w,bD as l}from"./index-95bf5a29.js";let s=f();function f(){return new v(50)}function B(){s=f()}async function T(r,o){var i,t;if((i=r.resource)!=null&&i.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return o!=null?[o,o]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(o=>o.data)}async function x(r,o=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await b(()=>import("./objectResourceUtils-c60de8e5.js").then(d=>d.o),["./objectResourceUtils-c60de8e5.js","./index-95bf5a29.js","..\\index-add6cbc1.css","./FloatArray-46ebcdae.js","./requestImageUtils-7af19df5.js","./basicInterfaces-bb952591.js","./enums-b14466b3.js","./Texture-bbec4966.js","./Indices-1b8b69f9.js","./triangle-2a16a8b5.js","./doublePrecisionUtils-e3c3d0d8.js","./BufferView-41ba25a0.js","./VertexElementDescriptor-2925c6af.js","./VertexArrayObject-b3a7c307.js","./OrderIndependentTransparency-b8ef1857.js","./vec32-ee2bae08.js","./DefaultMaterial_COLOR_GAMMA-1847746b.js","./resourceUtils-ebdc7923.js","./byteSizeEstimations-7cf1c05d.js","./NestedMap-1b5db22e.js","./InterleavedLayout-e7643592.js","./types-1305598a.js","./VertexColor.glsl-f6556d53.js","./symbolColorUtils-fe36dbea.js"],import.meta.url),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const i=p(w(r.resource.primitive));if(o!=null)for(let e=0;e<i.length;e++)i[e]*=o;return c(i,l())}export{B as clearBoundingBoxCache,T as computeIconLayerResourceSize,x as computeObjectLayerResourceSize};