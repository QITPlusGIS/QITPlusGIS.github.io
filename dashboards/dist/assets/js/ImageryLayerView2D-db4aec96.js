import{a as s,y as o,c as v,D as R,b,s as _,g as P,dm as F,S as D,f,e2 as z,A as I,cX as C,o as V,b4 as E,G as $,V as S,e as T}from"./uuid-854440a9.js";import{i as U}from"./GraphicsCollection-1f93c1d2.js";import{d as M,f as j,h as O}from"./RasterVFDisplayObject-40cb0a13.js";import{m as H,u as L}from"./LayerView-80524fa4.js";import{r as N}from"./GraphicsView2D-541ac563.js";import{a as G}from"./HighlightGraphicContainer-c68ba8a8.js";import{M as J,m as W,f as X}from"./dataUtils-019865af.js";import{a as K}from"./BitmapContainer-902c6655.js";import{h as Q}from"./Container-79c4018f.js";import{l as Y}from"./Bitmap-42146cc6.js";import{v as Z}from"./ExportStrategy-ba03e6d6.js";import{J as tt}from"./rasterProjectionHelper-5b41044f.js";import{T as q}from"./color-e7463257.js";import{n as et}from"./WGLContainer-c3fd9b8d.js";import{j as it}from"./commonProperties-c4c17d77.js";import{b as rt}from"./Query-84dc14af.js";import{p as at}from"./popupUtils-ce21ae10.js";import{a as st}from"./RefreshableLayerView-81a56f3c.js";import"./index-2eca610e.js";import"./FramebufferObject-aafd1353.js";import"./Texture-6ea577e5.js";import"./capabilities-b7174812.js";import"./enums-bdecffa2.js";import"./ProgramTemplate-34b1be08.js";import"./commonjsHelpers-2f3e7994.js";import"./VertexElementDescriptor-2925c6af.js";import"./mat3f32-6c416b1c.js";import"./mat3-5955b3db.js";import"./vec2f32-eaf29605.js";import"./scaleUtils-54b03d24.js";import"./map-3b85b863.js";import"./Basemap-b930c2b7.js";import"./loadAll-c963e2dd.js";import"./PortalItem-eaf53090.js";import"./writeUtils-afcbee82.js";import"./layerUtils-53516847.js";import"./compilerUtils-29e4db8f.js";import"./CollectionFlattener-0ef23bca.js";import"./infoFor3D-24efd44a.js";import"./basemapUtils-144ebf6f.js";import"./mat4f32-60a2394b.js";import"./mat4-8067289c.js";import"./TablesMixin-cecb199e.js";import"./arcgisLayerUrl-db50ff50.js";import"./Cyclical-69deeef6.js";import"./workers-bc069650.js";import"./TileInfo-9470b42d.js";import"./jsxFactory-93a8ddd6.js";import"./UpdatingHandles-0afdfd5b.js";import"./signal-9aac29bc.js";import"./ViewingMode-fb6259a5.js";import"./unitBezier-881ac1eb.js";import"./mat2df32-196efb0a.js";import"./vec2-525139f9.js";import"./TileStore-5e70d226.js";import"./quickselect-149a6b43.js";import"./QuantizationParameters-0cb320a2.js";import"./TileInfoView-c4c10e27.js";import"./vec2f64-95bf678d.js";import"./normalizeUtils-c97c170d.js";import"./normalizeUtilsCommon-092672b3.js";import"./GoTo-548e14ed.js";import"./ExpandedCIM-ed43baeb.js";import"./BidiEngine-9a40f2f4.js";import"./visualVariablesUtils-927e7922.js";import"./OptimizedFeature-ded94d90.js";import"./definitions-8d472612.js";import"./GeometryUtils-984e8446.js";import"./enums-f1a6a48a.js";import"./utils-a7ae7610.js";import"./GeometryUtils-78cf27b3.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-8fbc92ac.js";import"./floatRGBA-f2d0b76d.js";import"./normalizeUtilsSync-1a7964bc.js";import"./projectionSupport-8495a885.js";import"./json-48e3ea08.js";import"./LabelClass-360f8a0a.js";import"./labelUtils-38642a07.js";import"./defaultsJSON-b087dd4d.js";import"./jsonUtils-1956249c.js";import"./AttributeStoreView-db69522e.js";import"./TiledDisplayObject-8907be27.js";import"./diffUtils-2fda0782.js";import"./labelingInfo-f046f80c.js";import"./clusterUtils-3da19a70.js";import"./MD5-715f37cd.js";import"./SizeVariable-bf59d78c.js";import"./colorRamps-2b21b939.js";import"./LegendOptions-82a1d9d3.js";import"./lengthUtils-b6ebb268.js";import"./util-6c29cc30.js";import"./Matcher-4d5d9536.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-dff48d62.js";import"./earcut-b84353bc.js";import"./LRUCache-f623b6a8.js";import"./ComputedAttributeStorage-684df5c3.js";import"./featureConversionUtils-fdf2c775.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./FieldsIndex-babfd5a5.js";import"./TimeOnly-c0fc7892.js";import"./BaseGraphicContainer-7d1d86a0.js";import"./FeatureContainer-2a82270f.js";import"./TileContainer-3c52930c.js";import"./vec3f32-2da9db36.js";import"./parser-575e2c11.js";import"./heatmapUtils-2658140c.js";import"./vec4f64-3c9d0901.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./ElevationInfo-cefb6d5f.js";import"./Field-3600efd2.js";import"./fieldType-67bcc5fb.js";import"./FullTextSearch-a21aa00d.js";let p=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new Q,this.updateRequested=!1,this.type="imagery",this._bitmapView=new K}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch(e=>{b(e)||_.getLogger(this).error(e)})}hitTest(t){return new P({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,e=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new Z({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:e,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async t=>{const{source:e}=t;if(!e||e instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:e.extent,pixelBlock:e.originalPixelBlock??e.pixelBlock});e.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...i,extent:e.extent}}).catch(t=>{b(t)||_.getLogger(this).error(t)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(t.length===1&&t[0].source)return{extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const e=this.view.extent,i=t.map(a=>a.source).filter(a=>a.extent&&a.extent.intersects(e)).map(a=>({extent:a.extent,pixelBlock:a.originalPixelBlock})),r=J(i,e);return r!=null?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(t,e,i,r){var c;(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const a=await this.layer.fetchImage(t,e,i,r);if(a.imageBitmap)return a.imageBitmap;const n=await this.layer.applyRenderer(a.pixelData,{signal:r.signal}),l=new Y(n.pixelBlock,(c=n.extent)==null?void 0:c.clone(),a.pixelData.pixelBlock);return l.filter=h=>this.layer.applyFilter(h),l}};s([o()],p.prototype,"attached",void 0),s([o()],p.prototype,"container",void 0),s([o()],p.prototype,"layer",void 0),s([o()],p.prototype,"strategy",void 0),s([o()],p.prototype,"timeExtent",void 0),s([o()],p.prototype,"view",void 0),s([o()],p.prototype,"updateRequested",void 0),s([o()],p.prototype,"updating",null),s([o()],p.prototype,"type",void 0),p=s([v("esri.views.2d.layers.imagery.ImageryView2D")],p);const ot=p;class nt extends et{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(e){const i=e.registerRenderPass({name:"imagery (vf)",brushes:[M],target:()=>this.children,drawPhase:q.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===q.MAP&&this.symbolTypes.forEach(i=>{e.renderPass=i,super.doRender(e)})}}let y=class extends R{constructor(t){super(t),this._loading=null,this.update=F((e,i)=>this._update(e,i).catch(r=>{b(r)||_.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(t){if(!this.container.children.length)return;const e=this.container.children[0];e.symbolizerParameters=t,e.invalidateVAO(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(t,e,i){if(!t.stationary)return;const{extent:r,spatialReference:a}=t.state,n=new D({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:a}),[l,c]=t.state.size;this._loading=this.fetchPixels(n,l,c,i);const h=await this._loading;this._addToDisplay(h,e,t.state),this._loading=null}_addToDisplay(t,e,i){if(t.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:a}=t,n=new j(a);n.offset=[0,0],n.symbolizerParameters=e,n.rawPixelData=t,n.invalidateVAO(),n.x=r.xmin,n.y=r.ymax,n.pixelRatio=i.pixelRatio,n.rotation=i.rotation,n.resolution=i.resolution,n.width=a.width*e.symbolTileSize,n.height=a.height*e.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(n)}};s([o()],y.prototype,"fetchPixels",void 0),s([o()],y.prototype,"container",void 0),s([o()],y.prototype,"_loading",void 0),s([o()],y.prototype,"updating",null),y=s([v("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const lt=y;let m=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new nt,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,i,r)=>{const a=await this._projectFullExtentPromise,{symbolTileSize:n}=this.layer.renderer,{extent:l,width:c,height:h}=W(t,e,i,n,a);if(a!=null&&!a.intersects(t))return{extent:l,pixelBlock:null};const d={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:n,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(d)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===d.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(l,c,h,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=d;const x=g==null?void 0:g.pixelBlock;return x==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?X(x,"vector-uv"):x}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new lt({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(f(()=>this.layer.renderer,t=>this._updateSymbolizerParams(t),z),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(t=>t.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const t=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:i}=t;return{extent:e,pixelBlock:i}}hitTest(t){return new P({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams).catch(e=>{b(e)||_.getLogger(this).error(e)})}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,i=this._dataParameters.time===t.time,r=this._dataParameters.symbolTileSize===t.symbolTileSize,a=this._dataParameters.bbox===t.bbox;return e&&i&&r&&a}async _getProjectedFullExtent(t){try{return tt(this.layer.fullExtent,t)}catch{try{const i=(await I(this.layer.url,{query:{option:"footprints",outSR:C(t),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?D.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(t){t.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};s([o()],m.prototype,"attached",void 0),s([o()],m.prototype,"container",void 0),s([o()],m.prototype,"layer",void 0),s([o()],m.prototype,"timeExtent",void 0),s([o()],m.prototype,"type",void 0),s([o()],m.prototype,"view",void 0),s([o()],m.prototype,"updating",null),m=s([v("esri.views.2d.layers.imagery.VectorFieldView2D")],m);const pt=m,ht=t=>{let e=class extends t{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(i,r){const{layer:a}=this;if(!i)throw new V("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:n}=a,l=at(a,r);if(!n||l==null)throw new V("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:l});const c=await l.getRequiredFields(),h=new rt;h.timeExtent=this.timeExtent,h.geometry=i,h.outFields=c,h.outSpatialReference=i.spatialReference;const{resolution:d,spatialReference:g}=this.view,x=this.view.type==="2d"?new E(d,d,g):new E(.5*d,.5*d,g),{returnTopmostRaster:u,showNoDataRecords:B}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},k={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:x,showNoDataRecords:B,signal:r!=null?r.signal:null};return a.queryVisibleRasters(h,k).then(A=>A)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return s([o()],e.prototype,"layer",void 0),s([o()],e.prototype,"suspended",void 0),s([o(it)],e.prototype,"timeExtent",void 0),s([o()],e.prototype,"view",void 0),e=s([v("esri.views.layers.ImageryLayerView")],e),e};let w=class extends ht(st(H(L))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new U,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:t}=this;return this.updating||!t?null:"getPixelData"in t?t.getPixelData():null}async hitTest(t,e){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(t),layer:this.layer,mapPoint:t}]:null}update(t){var e;(e=this.subview)==null||e.update(t)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new N({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new G(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([f(()=>this.layer.exportImageServiceParameters.version,t=>{t&&this._exportImageVersion!==t&&(this._exportImageVersion=t,this.requestUpdate())},$),f(()=>this.timeExtent,t=>{const{subview:e}=this;e&&(e.timeExtent=t,"redraw"in e?this.requestUpdate():e.redrawOrRefetch())},$),this.layer.on("redraw",()=>{const{subview:t}=this;t&&("redraw"in t?t.redraw():t.redrawOrRefetch())}),f(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var t,e;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(t=this.subview)==null||t.destroy(),this.subview=null,(e=this._highlightView)==null||e.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,e){if(!((Array.isArray(t)?t[0]:S.isCollection(t)?t.at(0):t)instanceof P))return T();let i=[];return Array.isArray(t)||S.isCollection(t)?i=t.map(r=>r.clone()):t instanceof P&&(i=[t.clone()]),this._highlightGraphics.addMany(i),T(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){var i,r;if(!this.view)return;const t=(i=this.layer.renderer)==null?void 0:i.type;let e="imagery";if(t==="vector-field"?e="imageryVF":t==="flow"&&(e="flow"),this.subview){const{type:a}=this.subview;if(a===e)return this._attachSubview(this.subview),void(a==="flow"?this.subview.redrawOrRefetch():a==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=e==="imagery"?new ot({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):e==="imageryVF"?new pt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new O({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(t){t&&!t.attached&&(t.attach(),t.attached=!0,this.container.addChildAt(t.container,0))}_detachSubview(t){t!=null&&t.attached&&(this.container.removeChild(t.container),t.detach(),t.attached=!1)}};s([o()],w.prototype,"pixelData",null),s([o()],w.prototype,"subview",void 0),w=s([v("esri.views.2d.layers.ImageryLayerView2D")],w);const wi=w;export{wi as default};