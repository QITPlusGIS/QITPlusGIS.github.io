import{dq as E,ga as _,b$ as R,aw as D,gb as P,hu as b,hv as H,l as p,hw as L,f6 as k,a as c,b as v,c as S,aS as V,aH as y,hx as G,cP as d,cF as O,cB as T,aE as x,cQ as z,aJ as f,j as u,gc as w}from"./index-58dffe5f.js";import{p as I}from"./HoveredPoints-cc36cfd1.js";import{j as $,e as M,P as C}from"./GraphicState-2262af1d.js";import"./AnchorElementViewModel-d5f6d2e3.js";import"./analysisThemeUtils-c68f127f.js";import"./colorUtils-6bd1968e.js";import"./vec4f32-0d1b2306.js";import"./Octree-781b91f3.js";import"./line-0b3e9bc3.js";import"./DoubleArray-1786b5b4.js";import"./FloatArray-5e28d801.js";import"./requestImageUtils-40f5a86d.js";import"./basicInterfaces-bb952591.js";import"./enums-b14466b3.js";import"./Texture-231b4e79.js";import"./Indices-01290aab.js";import"./triangle-767eef4b.js";import"./doublePrecisionUtils-e3c3d0d8.js";import"./BufferView-149b2b53.js";import"./VertexElementDescriptor-2925c6af.js";import"./VertexArrayObject-abbfee00.js";import"./OrderIndependentTransparency-2a607a9a.js";import"./hydratedFeatures-faa1dc69.js";import"./triangulationUtils-c53cfe6f.js";import"./earcut-5c03ea14.js";import"./deduplicate-a0d8b170.js";import"./NestedMap-1b5db22e.js";import"./InterleavedLayout-3036b497.js";import"./types-1305598a.js";import"./floatRGBA-7b1ee351.js";import"./glUtil-0b7ee6ea.js";class j{constructor(e){this._params=e,this._highlightTask=null,this._highlightHandle=null,this._visualElementHandle=null}destroy(){this.remove()}remove(){this._highlightTask=E(this._highlightTask),this._highlightHandle=_(this._highlightHandle),this._visualElementHandle=_(this._visualElementHandle)}showHighlight(e){if(this.remove(),e==null||!g(e))return;const i=e.layer;this._highlightTask=R(async t=>{const o=await this._params.view.whenLayerView(i);D(t),P(o)&&(this._highlightHandle=o.highlight(e))})}showReshaping(e){if(this.remove(),e==null)return;const i=this._params.view,t=new $({view:i,geometry:g(e)?e.geometry:null,attached:!1,elevationInfo:b(e),renderOccluded:H.OccludeAndTransparentStencil}),o=new M({graphic:e}),s=[p(()=>o.isDraped,n=>{t.isDraped=n}),o.on("changed",()=>{t.geometry=g(e)?e.geometry:null}),i.trackGraphicState(o),i.maskOccludee(e),L(t)];C(i).visualElements.lineGraphics.outline.apply(t),t.attached=!0,this._visualElementHandle=k(s)}}function g(a){return a.geometry!=null&&a.geometry.type==="polyline"}const A=100;let m=class extends V{constructor(a){super(a),this._chartData=null,this._visualElements=[],this._handles=new y}initialize(){const a=G(e=>{this._update(e)},A);this._handles.add([p(()=>({spatialReference:this.view.spatialReference,chartData:this._chartData}),a,d),a])}destroy(){this._handles.destroy(),this._destroyVisualElements()}remove(){this._destroyVisualElements()}update(a){this._chartData=a}_update(a){const{chartData:e}=a;if(e==null)return this.remove();if(!e.refined)return;const i=this._visualElements,t=e.lines.filter(r=>r.viewVisualizationEnabled),o=t.length;for(;i.length>o;)i.pop().destroy();const s=z().profileLinesStyle3D;for(;i.length<o;){const r=new $({view:this.view,elevationInfo:{mode:"absolute-height",offset:0},innerWidth:s.width-s.outlineSize,width:s.width,falloff:s.falloff,color:s.outlineColor,renderOccluded:s.renderOccluded});i.push(r)}const n=a.spatialReference;for(let r=0;r<o;++r){const l=i[r],h=t[o-1-r];l.geometry=this._createLineGeometry(h,n),l.innerColor=O(T.toUnitRGBA(h.color))}}_createLineGeometry(a,e){const i=a.samples??[],t=i.length-1,o=[];let s=[];for(let n=0;n<=t;n++){const{x:r,y:l,z:h}=i[n];h!=null&&s.push([r,l,h]),n!==t&&h!=null||!s.length||(o.push(s),s=[])}return new x({paths:o,hasZ:!0,spatialReference:e})}_destroyVisualElements(){this._visualElements.forEach(a=>a.destroy()),this._visualElements.length=0}};c([v()],m.prototype,"view",void 0),c([v()],m.prototype,"_chartData",void 0),m=c([S("esri.widgets.ElevationProfile.support.ProfileLines3D")],m);class we{constructor(e,i){this._handles=new y,this._inputRepresentation=new j({view:e}),this._hoveredPoints=new I({view:e}),this._profileLines=new m({view:e}),this._handles.add([p(()=>i.viewModel.hoveredPoints,t=>this._hoveredPoints.update(t),d),p(()=>{const{state:t,editable:o,highlightEnabled:s,viewModel:n}=i,r=n.input;return f(r,l=>{l.commitProperty("geometry"),l.commitProperty("layer")}),{input:r,state:t,editable:o,highlightEnabled:s}},t=>this._updateInputRepresentation(t),d),p(()=>i.viewModel.chartData,t=>this._profileLines.update(t),d),p(()=>f(i.viewModel.input,t=>t.geometry),()=>{this._profileLines.remove()},d)])}destroy(){this._handles=u(this._handles),this._inputRepresentation=u(this._inputRepresentation),this._hoveredPoints=u(this._hoveredPoints),this._profileLines=u(this._profileLines)}_updateInputRepresentation({input:e,state:i,editable:t,highlightEnabled:o}){const s=this._inputRepresentation;if(!o)return s.remove();i===w.Selected?s.showHighlight(e):i!==w.Created||t?s.remove():s.showReshaping(e)}}export{we as ElevationProfileView3D};