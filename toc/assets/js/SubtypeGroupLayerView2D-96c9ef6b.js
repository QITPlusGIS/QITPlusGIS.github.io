import{a as m,c as d,l as u,f as y,z as h,A as c}from"./index-4457faad.js";import b from"./FeatureLayerView2D-18d4f1b8.js";import"./definitions-ddefb4f0.js";import"./LayerView2D-522bcafb.js";import"./Container-c785d024.js";import"./enums-b14466b3.js";import"./Texture-53149a07.js";import"./AttributeStoreView-8c84857c.js";import"./TiledDisplayObject-1cc51756.js";import"./color-0434b404.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-cbb3e5cc.js";import"./VertexArrayObject-79e51137.js";import"./vec4f32-0d1b2306.js";import"./ProgramTemplate-b283cc3e.js";import"./GeometryUtils-be295dad.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-938ec344.js";import"./featureConversionUtils-2e02ef6b.js";import"./OptimizedFeature-4701473b.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-4c2dc4c5.js";import"./cimAnalyzer-f0fc8a72.js";import"./fontUtils-dfffd734.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-f022391e.js";import"./quantizationUtils-8fe14565.js";import"./floatRGBA-45eb4edf.js";import"./ExpandedCIM-21067a4d.js";import"./util-c12b286b.js";import"./BitmapTileContainer-ff60a2c7.js";import"./Bitmap-117ac34b.js";import"./TileContainer-c686606a.js";import"./CircularArray-ef508845.js";import"./BufferPool-699459f2.js";import"./FeatureContainer-0dba7b93.js";import"./popupUtils-2eb1e890.js";import"./LayerView-cb6664de.js";import"./RefreshableLayerView-3436ce5d.js";function g(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let p=class extends b{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var a;const i=this.layer.sublayers.some(l=>l.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,o=this.tileRenderer==null||((a=this.tileRenderer)==null?void 0:a.updating),n=i&&(e||s||t||r||o);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${n}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${o}
`),n}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(o=>g(o,s)).map(o=>o.subtypeCode);if(!t.length)return e;e=e??new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};p=m([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],p);const me=p;export{me as default};