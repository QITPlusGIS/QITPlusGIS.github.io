import{D as a,E as o,V as g,k as m,e as s,t as p,v as c,w as l}from"./index-7211d811.js";import{m as n,u as d}from"./LayerView-6f653f91.js";import{i as u}from"./GraphicContainer-44e1156d.js";import{r as w}from"./GraphicsView2D-e56403cb.js";import"./scaleUtils-6f53eafc.js";import"./Container-d43c5e18.js";import"./Texture-8977e2c7.js";import"./color-59c4e3eb.js";import"./BaseGraphicContainer-dd4c9642.js";import"./FeatureContainer-a119acd6.js";import"./AttributeStoreView-c1b5df35.js";import"./TiledDisplayObject-e3310e87.js";import"./WGLContainer-a1237a72.js";import"./FramebufferObject-8e2c7ff7.js";import"./ProgramTemplate-d525368d.js";import"./GeometryUtils-40aada46.js";import"./config-1337d16e.js";import"./earcut-fa517ba8.js";import"./featureConversionUtils-7dacf99d.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-60e1228c.js";import"./ExpandedCIM-8f4619ac.js";import"./BidiEngine-9a40f2f4.js";import"./utils-859f11ff.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-d7291828.js";import"./floatRGBA-d7257b49.js";import"./util-66772d31.js";import"./TileContainer-4b2862fb.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-54a1e768.js";import"./projectionSupport-26da4a4e.js";import"./json-48e3ea08.js";import"./Matcher-3eec7674.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-6a95ed40.js";import"./ComputedAttributeStorage-dbd00f5a.js";import"./TimeOnly-52b98de5.js";let e=class extends n(d){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new w({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new u(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=a(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof o?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(r=>r&&r.uid):g.isCollection(i)&&i.length>0&&(t=i.map(r=>r&&r.uid).toArray());const h=t==null?void 0:t.filter(m);return h!=null&&h.length?(this._addHighlight(h),s(()=>this._removeHighlight(h))):s()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const h=this._highlightIds.get(t);this._highlightIds.set(t,h+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const h=this._highlightIds.get(t)-1;h===0?this._highlightIds.delete(t):this._highlightIds.set(t,h)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};p([c()],e.prototype,"graphicsView",void 0),e=p([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const hi=e;export{hi as default};