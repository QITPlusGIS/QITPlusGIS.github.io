import{V as l,x as m,f as u,R as p,l as g,a as n,b as d,c as _}from"./index-4457faad.js";import{m as w,c as y,C as f,T as k,j as M,S as v,O as V}from"./Stop-c8aa12aa.js";import{f as G}from"./LayerView2D-522bcafb.js";import{i as I}from"./GraphicContainer-058b5740.js";import{o as F}from"./GraphicsView2D-a37ef211.js";import{d as H}from"./LayerView-cb6664de.js";import"./Container-c785d024.js";import"./definitions-ddefb4f0.js";import"./enums-b14466b3.js";import"./Texture-53149a07.js";import"./color-0434b404.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-57dbf7ee.js";import"./FeatureContainer-0dba7b93.js";import"./AttributeStoreView-8c84857c.js";import"./TiledDisplayObject-1cc51756.js";import"./WGLContainer-cbb3e5cc.js";import"./VertexArrayObject-79e51137.js";import"./vec4f32-0d1b2306.js";import"./ProgramTemplate-b283cc3e.js";import"./GeometryUtils-be295dad.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-938ec344.js";import"./featureConversionUtils-2e02ef6b.js";import"./OptimizedFeature-4701473b.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-4c2dc4c5.js";import"./cimAnalyzer-f0fc8a72.js";import"./fontUtils-dfffd734.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-f022391e.js";import"./quantizationUtils-8fe14565.js";import"./floatRGBA-45eb4edf.js";import"./ExpandedCIM-21067a4d.js";import"./util-c12b286b.js";import"./TileContainer-c686606a.js";import"./normalizeUtilsSync-b59b32fa.js";import"./projectionSupport-3407ae7b.js";import"./json-48e3ea08.js";import"./Matcher-be8d055d.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-53f38557.js";import"./ComputedAttributeStorage-3f0f2d40.js";import"./arcadeTimeUtils-72345b60.js";import"./executionError-c92d3b85.js";import"./centroid-8e8cfa47.js";const C=Object.freeze({remove(){},pause(){},resume(){}}),b=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],a={graphic:null,property:null,oldValue:null,newValue:null};function c(t){return t instanceof w||t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof v||t instanceof V}function U(t){return l.isCollection(t)&&t.length&&c(t.at(0))}function O(t){return Array.isArray(t)&&t.length>0&&c(t[0])}let o=class extends G(H){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new m({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this.updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),u)}destroy(){var t;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter(e=>!!e.popupTemplate)}highlight(t){let e;e=c(t)?[this._getNetworkFeatureUid(t)]:O(t)?t.map(r=>this._getNetworkFeatureUid(r)):U(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(p);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):C}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(p).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new I(t.featuresTilingScheme);this._graphicsView=new F({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return b.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.removeHandles(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return i.symbol==null?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(p));for(const e of t.added)this.addHandles([g(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),g(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const h=this._createGraphic(t);return this._networkFeatureMap.set(t,h),this._networkGraphicMap.set(h,t),void this._graphics.add(h)}const s=this._networkFeatureMap.get(t);s[e]=i,a.graphic=s,a.property=e,a.oldValue=r,a.newValue=i,this._graphicsView.graphicUpdateHandler(a)}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t)}};n([d()],o.prototype,"_graphics",void 0),n([d()],o.prototype,"_routeItems",null),o=n([_("esri.views.2d.layers.RouteLayerView2D")],o);const Ot=o;export{Ot as default};