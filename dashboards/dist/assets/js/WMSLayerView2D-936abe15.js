import{a as p,y as n,c as b,u as S,o as l,b as C,s as E,f as R,S as $}from"./uuid-854440a9.js";import{a as I}from"./BitmapContainer-902c6655.js";import{m as q,u as U}from"./LayerView-80524fa4.js";import{v as V}from"./ExportStrategy-ba03e6d6.js";import{a as W}from"./RefreshableLayerView-81a56f3c.js";import{j as L}from"./commonProperties-c4c17d77.js";import{o as j}from"./ExportWMSImageParameters-9846d174.js";import"./index-2eca610e.js";import"./WGLContainer-c3fd9b8d.js";import"./definitions-8d472612.js";import"./FramebufferObject-aafd1353.js";import"./Texture-6ea577e5.js";import"./capabilities-b7174812.js";import"./enums-bdecffa2.js";import"./ProgramTemplate-34b1be08.js";import"./commonjsHelpers-2f3e7994.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-e7463257.js";import"./enums-f1a6a48a.js";import"./GeometryUtils-78cf27b3.js";import"./heatmapUtils-2658140c.js";import"./vec4f64-3c9d0901.js";import"./mat3f32-6c416b1c.js";import"./StyleDefinition-29c49b98.js";import"./vec2f32-eaf29605.js";import"./config-1337d16e.js";import"./Container-79c4018f.js";import"./parser-575e2c11.js";import"./mat4f32-60a2394b.js";import"./mat4-8067289c.js";import"./earcut-b84353bc.js";import"./vec2-525139f9.js";import"./vec2f64-95bf678d.js";import"./featureConversionUtils-fdf2c775.js";import"./OptimizedFeature-ded94d90.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./scaleUtils-54b03d24.js";import"./map-3b85b863.js";import"./Basemap-b930c2b7.js";import"./loadAll-c963e2dd.js";import"./PortalItem-eaf53090.js";import"./writeUtils-afcbee82.js";import"./layerUtils-53516847.js";import"./compilerUtils-29e4db8f.js";import"./CollectionFlattener-0ef23bca.js";import"./infoFor3D-24efd44a.js";import"./basemapUtils-144ebf6f.js";import"./TablesMixin-cecb199e.js";import"./arcgisLayerUrl-db50ff50.js";import"./Cyclical-69deeef6.js";import"./workers-bc069650.js";import"./TileInfo-9470b42d.js";import"./jsxFactory-93a8ddd6.js";import"./UpdatingHandles-0afdfd5b.js";import"./signal-9aac29bc.js";import"./GraphicsCollection-1f93c1d2.js";import"./ViewingMode-fb6259a5.js";import"./unitBezier-881ac1eb.js";import"./mat2df32-196efb0a.js";import"./TileStore-5e70d226.js";import"./quickselect-149a6b43.js";import"./QuantizationParameters-0cb320a2.js";import"./TileInfoView-c4c10e27.js";import"./normalizeUtils-c97c170d.js";import"./normalizeUtilsCommon-092672b3.js";import"./mat3-5955b3db.js";import"./GoTo-548e14ed.js";import"./Bitmap-42146cc6.js";import"./ElevationInfo-cefb6d5f.js";import"./lengthUtils-b6ebb268.js";const H=e=>{let t=class extends e{initialize(){this.exportImageParameters=new j({layer:this.layer})}destroy(){this.exportImageParameters=S(this.exportImageParameters)}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(r){const{layer:o}=this;if(!r)return Promise.reject(new l("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o}));const{popupEnabled:m}=o;if(!m)return Promise.reject(new l("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:m}));const u=this.createFetchPopupFeaturesQuery(r);if(!u)return Promise.resolve([]);const{extent:i,width:a,height:s,x:d,y:c}=u;if(!(i&&a&&s))throw new l("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:a,height:s});return o.fetchFeatureInfo(i,a,s,d,c)}};return p([n()],t.prototype,"exportImageParameters",void 0),p([n({readOnly:!0})],t.prototype,"exportImageVersion",null),p([n()],t.prototype,"layer",void 0),p([n(L)],t.prototype,"timeExtent",void 0),t=p([b("esri.layers.mixins.WMSLayerView")],t),t};let h=class extends H(W(q(U))){constructor(){super(...arguments),this.bitmapContainer=new I}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{C(t)||E.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new I,this.container.addChild(this.bitmapContainer),this.strategy=new V({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=S(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:o,y:m}=e,{spatialReference:u}=t;let i,a=0,s=0;if(r.children.some(F=>{const{width:x,height:f,resolution:w,x:y,y:g}=F,v=y+w*x,P=g-w*f;return o>=y&&o<=v&&m<=g&&m>=P&&(i=new $({xmin:y,ymin:P,xmax:v,ymax:g,spatialReference:u}),a=x,s=f,!0)}),!i)return null;const d=i.width/a,c=Math.round((o-i.xmin)/d),M=Math.round((i.ymax-m)/d);return{extent:i,width:a,height:s,x:c,y:M}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,o){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...o})}};p([n()],h.prototype,"strategy",void 0),p([n()],h.prototype,"updating",void 0),h=p([b("esri.views.2d.layers.WMSLayerView2D")],h);const te=h;export{te as default};