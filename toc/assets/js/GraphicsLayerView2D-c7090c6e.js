import{j as p,m as o,V as a,R as m,a as s,b as g,c as l}from"./index-4457faad.js";import{f as c}from"./LayerView2D-522bcafb.js";import{i as n}from"./GraphicContainer-058b5740.js";import{o as d}from"./GraphicsView2D-a37ef211.js";import{d as u}from"./LayerView-cb6664de.js";import"./Container-c785d024.js";import"./definitions-ddefb4f0.js";import"./enums-b14466b3.js";import"./Texture-53149a07.js";import"./color-0434b404.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-57dbf7ee.js";import"./FeatureContainer-0dba7b93.js";import"./AttributeStoreView-8c84857c.js";import"./TiledDisplayObject-1cc51756.js";import"./WGLContainer-cbb3e5cc.js";import"./VertexArrayObject-79e51137.js";import"./vec4f32-0d1b2306.js";import"./ProgramTemplate-b283cc3e.js";import"./GeometryUtils-be295dad.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-938ec344.js";import"./featureConversionUtils-2e02ef6b.js";import"./OptimizedFeature-4701473b.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-4c2dc4c5.js";import"./cimAnalyzer-f0fc8a72.js";import"./fontUtils-dfffd734.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-f022391e.js";import"./quantizationUtils-8fe14565.js";import"./floatRGBA-45eb4edf.js";import"./ExpandedCIM-21067a4d.js";import"./util-c12b286b.js";import"./TileContainer-c686606a.js";import"./normalizeUtilsSync-b59b32fa.js";import"./projectionSupport-3407ae7b.js";import"./json-48e3ea08.js";import"./Matcher-be8d055d.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-53f38557.js";import"./ComputedAttributeStorage-3f0f2d40.js";import"./arcadeTimeUtils-72345b60.js";import"./executionError-c92d3b85.js";import"./centroid-8e8cfa47.js";const w={remove(){},pause(){},resume(){}};let e=class extends c(u){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new d({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new n(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof o?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):a.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t==null?void 0:t.filter(m);return r!=null&&r.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};s([g()],e.prototype,"graphicsView",void 0),e=s([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const ui=e;export{ui as default};