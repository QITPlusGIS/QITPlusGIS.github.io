import{aK as y,aL as _,aG as T,a as s,b as c,gp as S,c as A,aS as w,aB as Q,z as P,g as L,dF as p,ar as n,ah as f,ai as h,_ as j}from"./index-797c09f0.js";import{n as q,s as z}from"./executeForIds-bd565c84.js";import{S as J}from"./query-d707c0a5.js";import{a as N}from"./executeQueryJSON-00fd007d.js";import{n as U}from"./executeQueryPBF-eae129ab.js";async function $(e,t,r){const o=y(e);return J(o,_.from(t),{...r}).then(i=>({count:i.data.count,extent:T.fromJSON(i.data.extent)}))}let a=class extends w{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Q(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var u;const r=this._normalizeQuery(e),o=((u=e.outStatistics)==null?void 0:u[0])!=null,i=P("featurelayer-pbf-statistics"),l=!o||i;let m;if(this.pbfSupported&&l)try{m=await U(this.url,r,t)}catch(d){if(d.name!=="query:parsing-pbf")throw d;this.pbfSupported=!1}return this.pbfSupported&&l||(m=await N(this.url,r,t)),this._normalizeFields(m.fields),m}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return L.fromJSON(t);const{meshFeatureSetFromJSON:o}=await p(n(()=>import("./meshFeatureSet-15edfbf0.js"),["./meshFeatureSet-15edfbf0.js","./index-797c09f0.js","./index-ff40e58c.css","./MeshTransform-86944072.js","./MeshComponent-89daf4bd.js","./imageUtils-c2d0d1ae.js","./MeshGeoreferencedRelativeVertexSpace-f40214e0.js","./MeshLocalVertexSpace-42b42dee.js","./triangulationUtils-00809067.js","./earcut-b7ad7453.js","./DoubleArray-d8438b2c.js","./Indices-ee76e634.js","./deduplicate-c994028e.js","./georeference-348a36c9.js","./spatialReferenceEllipsoidUtils-088ffef8.js","./vec32-8668bab3.js","./projection-1ffbe9dd.js","./BufferView-3be96e15.js","./External-54c4bb50.js"],import.meta.url),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return q(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return $(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return z(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await p(Promise.all([n(()=>import("./index-797c09f0.js").then(i=>i.sU),["./index-797c09f0.js","./index-ff40e58c.css"],import.meta.url),n(()=>import("./executeRelationshipQuery-8dc0d381.js"),["./executeRelationshipQuery-8dc0d381.js","./index-797c09f0.js","./index-ff40e58c.css","./query-d707c0a5.js","./pbfQueryUtils-380cf68a.js","./pbf-984c4807.js","./OptimizedGeometry-196224d4.js","./OptimizedFeature-4701473b.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-e903e101.js"],import.meta.url)]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await p(Promise.all([n(()=>import("./index-797c09f0.js").then(i=>i.sU),["./index-797c09f0.js","./index-ff40e58c.css"],import.meta.url),n(()=>import("./executeRelationshipQuery-8dc0d381.js"),["./executeRelationshipQuery-8dc0d381.js","./index-797c09f0.js","./index-ff40e58c.css","./query-d707c0a5.js","./pbfQueryUtils-380cf68a.js","./pbf-984c4807.js","./OptimizedGeometry-196224d4.js","./OptimizedFeature-4701473b.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-e903e101.js"],import.meta.url)]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:i}=await p(n(()=>import("./queryAttachments-6d87dca6.js"),["./queryAttachments-6d87dca6.js","./index-797c09f0.js","./index-ff40e58c.css","./query-d707c0a5.js","./pbfQueryUtils-380cf68a.js","./pbf-984c4807.js","./OptimizedGeometry-196224d4.js","./OptimizedFeature-4701473b.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-e903e101.js","./AttachmentInfo-732bf5d8.js"],import.meta.url),t),l=y(this.url);return i(l,await(this.queryAttachmentsSupported?r(l,e,t):o(l,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await p(n(()=>import("./executeTopFeaturesQuery-9a5f6607.js"),["./executeTopFeaturesQuery-9a5f6607.js","./index-797c09f0.js","./index-ff40e58c.css","./queryTopFeatures-83f40882.js","./query-d707c0a5.js","./pbfQueryUtils-380cf68a.js","./pbf-984c4807.js","./OptimizedGeometry-196224d4.js","./OptimizedFeature-4701473b.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-e903e101.js","./TopFeaturesQuery-029fcf8a.js"],import.meta.url),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await p(n(()=>import("./executeForTopIds-e7b66ecc.js"),["./executeForTopIds-e7b66ecc.js","./index-797c09f0.js","./index-ff40e58c.css","./queryTopFeatures-83f40882.js","./query-d707c0a5.js","./pbfQueryUtils-380cf68a.js","./pbf-984c4807.js","./OptimizedGeometry-196224d4.js","./OptimizedFeature-4701473b.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-e903e101.js","./TopFeaturesQuery-029fcf8a.js"],import.meta.url),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await p(n(()=>import("./executeForTopExtents-952ea595.js"),["./executeForTopExtents-952ea595.js","./index-797c09f0.js","./index-ff40e58c.css","./queryTopFeatures-83f40882.js","./query-d707c0a5.js","./pbfQueryUtils-380cf68a.js","./pbf-984c4807.js","./OptimizedGeometry-196224d4.js","./OptimizedFeature-4701473b.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-e903e101.js","./TopFeaturesQuery-029fcf8a.js"],import.meta.url),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await p(n(()=>import("./executeForTopCount-1a8a91b2.js"),["./executeForTopCount-1a8a91b2.js","./index-797c09f0.js","./index-ff40e58c.css","./queryTopFeatures-83f40882.js","./query-d707c0a5.js","./pbfQueryUtils-380cf68a.js","./pbf-984c4807.js","./OptimizedGeometry-196224d4.js","./OptimizedFeature-4701473b.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-e903e101.js","./TopFeaturesQuery-029fcf8a.js"],import.meta.url),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?S.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:i}=r,l=f("model/gltf-binary",o)??h("glb",o),m=f("model/gltf+json",o)??h("gtlf",o);for(const u of i){if(u===l){t.formatOf3DObjects=u;break}u!==m||t.formatOf3DObjects||(t.formatOf3DObjects=u)}if(!t.formatOf3DObjects)throw new j("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:u,originY:d,originZ:D,translationX:F,translationY:b,translationZ:O,scaleX:x,scaleY:g,scaleZ:V,rotationX:E,rotationY:R,rotationZ:I,rotationDeg:v}=r.transformFieldRoles;t.outFields.push(u,d,D,F,b,O,x,g,V,E,R,I,v)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};s([c({type:S})],a.prototype,"dynamicDataSource",void 0),s([c()],a.prototype,"fieldsIndex",void 0),s([c()],a.prototype,"gdbVersion",void 0),s([c()],a.prototype,"infoFor3D",void 0),s([c({readOnly:!0})],a.prototype,"parsedUrl",null),s([c()],a.prototype,"pbfSupported",void 0),s([c()],a.prototype,"queryAttachmentsSupported",void 0),s([c()],a.prototype,"sourceSpatialReference",void 0),s([c({type:String})],a.prototype,"url",void 0),a=s([A("esri.tasks.QueryTask")],a);const G=a;export{G as x};