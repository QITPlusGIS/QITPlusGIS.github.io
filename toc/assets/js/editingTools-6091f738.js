import{bG as bt,bE as K,A as w,Z as k,O as st,aR as $t,D as h,E as d,bb as H,F as J,bM as Lt,cN as St,ao as Dt,ee as X,kY as _t,cM as nt,a$ as V,an as wt,kZ as Pt,f$ as Ht,g4 as Vt,cH as Tt,bD as v,fY as D,kt as q,bL as Et,k_ as Z,a8 as Ut,gw as j,b_ as O,fW as It,k$ as Gt,b$ as I,jR as ut,bJ as zt,ap as Ft,f8 as mt,ii as at,aP as Nt,cB as Bt,gy as C,iy as W,ev as jt,iA as Wt,l0 as Yt,l1 as Zt,v as Kt}from"./index-95bf5a29.js";import{u as Xt}from"./SnappingVisualizer2D-5f72830a.js";import{E as qt,I as Jt,H as Qt,c as te,d as lt,v as ht,l as Rt,U as kt,F as Mt,a as ee}from"./editPlaneUtils-5766f250.js";import{i as U,u as gt}from"./analysisThemeUtils-ca1845e3.js";import{b as ie,S as ct,m as se}from"./GraphicManipulator-498a7cc4.js";import{E,_ as At,a as pt,p as ae}from"./SnappingContext-34209d09.js";import"./enums-f1a6a48a.js";import"./settings-30b0fbc8.js";import"./automaticLengthMeasurementUtils-a697e2bd.js";import"./spatialReferenceEllipsoidUtils-b74d3035.js";import"./geometryEngine-7da23368.js";import"./geometryEngineBase-7ffd6d27.js";import"./hydrated-4c17db61.js";import"./hydratedFeatures-46e4e86d.js";import"./interfaces-1a80c8eb.js";import"./colorUtils-eebbe84c.js";import"./PointSnappingHint-a93971b4.js";import"./earcut-01cee920.js";import"./triangle-2a16a8b5.js";const oe=new bt({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),re=new K({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),ne=new K({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}});let L=class extends qt{constructor(t){super(t),this._visualElementGraphics={outline:null,regularVertices:null,activeVertex:null},this.activeFillSymbol=null,this.type="draw-2d",this._visualElementSymbols={outline:t.activeLineSymbol??oe,regularVertices:t.regularVerticesSymbol??re,activeVertex:t.activeVertexSymbol??ne,fill:t.activeFillSymbol}}normalizeCtorArgs(t){const s={...t};return delete s.activeFillSymbol,delete s.activeVertexSymbol,delete s.regularVerticesSymbol,delete s.activeLineSymbol,s}initializeGraphic(t){return this._visualElementSymbols.fill!=null&&(t.symbol=this._visualElementSymbols.fill),null}makeDrawOperation(){const{defaultZ:t,hasZ:s,view:i}=this;return new Jt({view:i,manipulators:this.manipulators,geometryType:Qt(this.geometryType),drawingMode:this.mode,hasZ:s,defaultZ:t,snapToSceneEnabled:this.snapToScene,drawSurface:new te(i,s,t),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new Xt(this.internalGraphicsLayer),tooltipOptions:this.tooltipOptions})}onActiveVertexChanged(t){if(this.geometryType==="point")return null;const[s,i]=t,a=new w({x:s,y:i,spatialReference:this.view.spatialReference});return this._visualElementGraphics.activeVertex!=null?(this._visualElementGraphics.activeVertex.geometry=a,null):(this._visualElementGraphics.activeVertex=new k({geometry:a,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(ot),st(()=>{this._visualElementGraphics.activeVertex!=null&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=H(this._visualElementGraphics.activeVertex))}))}onOutlineChanged(t){const s=t.clone();if(s.type==="polyline"){const i=s.paths[s.paths.length-1];i.splice(0,i.length-2)}return this._visualElementGraphics.outline!=null?(this._visualElementGraphics.outline.geometry=s,null):(this._visualElementGraphics.outline=new k({geometry:s,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.outline),this.internalGraphicsLayer.graphics.sort(ot),st(()=>{this._visualElementGraphics.outline!=null&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.outline),this._visualElementGraphics.outline=H(this._visualElementGraphics.outline))}))}onRegularVerticesChanged(t){const s=new $t({points:t,spatialReference:this.view.spatialReference});return this._visualElementGraphics.regularVertices!=null?(this._visualElementGraphics.regularVertices.geometry=s,null):(this._visualElementGraphics.regularVertices=new k({geometry:s,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(ot),st(()=>{this._visualElementGraphics.regularVertices!=null&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=H(this._visualElementGraphics.regularVertices))}))}};function ot(e,t){var s,i;return(((s=e.attributes)==null?void 0:s.displayOrder)??-1/0)-(((i=t.attributes)==null?void 0:i.displayOrder)??-1/0)}h([d()],L.prototype,"activeFillSymbol",void 0),h([d({readOnly:!0})],L.prototype,"type",void 0),h([d({constructOnly:!0,nonNullable:!0})],L.prototype,"view",void 0),L=h([J("esri.views.2d.interactive.draw.DrawGraphicTool2D")],L);let dt=class{get hovering(){return this.someManipulator(t=>t.hovering)}get grabbing(){return this.someManipulator(t=>t.grabbing)}get dragging(){return this.someManipulator(t=>t.dragging)}hasManipulator(t){return this.someManipulator(s=>s===t)}someManipulator(t){let s=!1;return this.forEachManipulator(i=>{!s&&t(i)&&(s=!0)}),s}};var z;(function(e){e[e.TRANSLATE_XY=0]="TRANSLATE_XY",e[e.SCALE=1]="SCALE",e[e.ROTATE=2]="ROTATE"})(z||(z={}));let xt=class extends dt{constructor(t){super(),this._view=t.view,this._tool=t.tool,this._graphic=t.graphic,this._manipulator=this._createManipulator(),this.forEachManipulator(s=>this._tool.manipulators.add(s))}destroy(){this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._manipulator=null,this._graphic=null}forEachManipulator(t){t(this._manipulator,z.TRANSLATE_XY)}createDragPipeline(t,s){let i=null,a=null,r=0,n=0,o=0;const{offsetX:c,offsetY:p,size:u}=ie(this._graphic.symbol);return lt(this._manipulator,(m,P)=>{P.next(g=>{if(g.action==="start"){const l=t();i=l.editGeometryOperations,a=l.constraints}return g}).next(ht(this._view)).next(g=>{const{x:l,y:_,z:y}=g.mapEnd;if(a&&(l+c<a.xmin||_+p-u<a.ymin||l+c>a.xmax||_+p-u>a.ymax))return g;g.action==="start"&&(r=g.mapStart.x,n=g.mapStart.y,o=g.mapStart.z);const f=l-r,$=_-n,M=y-o;r=l,n=_,o=y;const x=[];for(const tt of i.data.components)x.push(...tt.vertices);const F=g.action==="start"?E.NEW_STEP:E.ACCUMULATE_STEPS,Q=i.moveVertices(x,f,$,M,F);return s(g,Q),g})})}_createManipulator(){const t=this._view,s=this._graphic;return new ct({view:t,graphic:s,selectable:!0,cursor:"move"})}};const T={up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",toggleOpacity:"t",shift:"Shift",primaryKey:Pt},le=1,he=10,yt=new Lt("#009AF2");let R=class extends Rt{constructor(e){super(e),this._isOpacityToggled=!1,this._isModifierActive=!1,this._factor=1,this._initialControlPoints=null,this._graphicsLayer=new St({internal:!0,listMode:"hide",visible:!1,effect:"drop-shadow(0px, 0px, 3px)"}),this._undoStack=[],this._redoStack=[],this._sharedUndoStack=[],this._sharedRedoStack=[],this._highlightHandle=null,this.activeHandle=0}initialize(){this._initialize()}destroy(){const{map:e}=this.view;this._controlPointManipulations.forEach(t=>t.destroy()),this._controlPointEditGeometryOperations.forEach(t=>t.destroy()),e.removeMany([this._graphicsLayer]),this._graphicsLayer.removeAll(),this._graphicsLayer=H(this._graphicsLayer),this._georeference=null,this._controlPointGraphics=null,this._controlPointManipulations=null,this._graphicsLayer=null,this._controlPointEditGeometryOperations=null,this._undoStack=null,this._redoStack=null,this._initialControlPoints=null,this._sharedUndoStack=null,this._sharedRedoStack=null}get _hasValidSpatialReference(){return Dt(this.view.spatialReference)}onActivate(){this.visible=!0}onDeactivate(){this.visible=!1}onShow(){this._graphicsLayer.visible=!0}onHide(){this._graphicsLayer.visible=!1}canUndo(){const e=this._undoStack[this._undoStack.length-1];return e!=null&&this._controlPointEditGeometryOperations[e].canUndo}canRedo(){const e=this._redoStack[this._redoStack.length-1];return e!=null&&this._controlPointEditGeometryOperations[e].canRedo}undo(){if(this._undoStack.length>0){const e=this._undoStack.pop();this._controlPointEditGeometryOperations[e].undo(),this.updateGraphics(),this._redoStack.push(e)}}redo(){if(this._redoStack.length>0){const e=this._redoStack.pop();this._controlPointEditGeometryOperations[e].redo(),this.updateGraphics(),this._undoStack.push(e)}}refresh(){const{mediaElement:e}=this;if(e.georeference==null)return;const t=e.georeference;t.type==="control-points"&&t.coords!=null&&(this._georeference=t,this._georeference.controlPoints.forEach(({mapPoint:s},i)=>{const a=this._controlPointEditGeometryOperations[i],r=a.data.components[0].vertices[0];a.setVertexPosition(r,a.data.coordinateHelper.pointToVector(s))}),this.updateGraphics())}reset(){this._georeference.controlPoints=this._initialControlPoints,this.refresh(),this._sharedUndoStack.length=0,this._sharedRedoStack.length=0}updateGraphics(){const e=this._georeference,t=e.controlPoints,s=t[0].mapPoint.spatialReference,i=this._hasValidSpatialReference;this._georeference.controlPoints=this._controlPointEditGeometryOperations.map((a,r)=>{const n=a.data.geometry;return this._controlPointGraphics[r].geometry=n,{mapPoint:X(n,s),sourcePoint:i?t[r].sourcePoint:e.toSource(n)}})}updateActiveHandle(e){if(this.activeHandle===e)return;const t=this._controlPointGraphics[this.activeHandle].symbol.clone();_t(t,U()),this._controlPointGraphics[this.activeHandle].symbol=t;const s=this._controlPointGraphics[e].symbol.clone();_t(s,yt),this._controlPointGraphics[e].symbol=s,this.activeHandle=e,this.view.surface===document.activeElement&&this.highlightActiveHandle()}async highlightActiveHandle(){this.removeHighlightActiveHandle();const e=await this.view.whenLayerView(this._graphicsLayer);this._highlightHandle=e.highlight(this._controlPointGraphics[this.activeHandle])}removeHighlightActiveHandle(){this._highlightHandle&&this._highlightHandle.remove()}setSharedUndoStack(e){this._sharedUndoStack=e}setSharedRedoStack(e){this._sharedRedoStack=e}async _initialize(){const{view:e,mediaElement:t}=this;if(t.georeference==null)return;const s=t.georeference;s.type==="control-points"&&s.coords!=null&&(this._georeference=s,this._initialControlPoints=this._georeference.controlPoints,e.map.addMany([this._graphicsLayer]),e.focus(),this.visible=!1,this.finishToolCreation(),await this._loadProjectionEngine(),this._controlPointEditGeometryOperations=this._georeference.controlPoints.map(({mapPoint:i})=>At.fromGeometry(X(i,e.spatialReference),nt.Local)),this._controlPointGraphics=this._controlPointEditGeometryOperations.map((i,a)=>new k({symbol:new bt({data:{type:"CIMSymbolReference",symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,colorLocked:!0,anchorPoint:{x:0,y:-15.75},anchorPointUnits:"Absolute",dominantSizeAxis3D:"Y",size:9,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:84.3,ymax:84.3},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[83.2,32.5],[84.3,40.7],[83.8,48.9],[81.7,56.9],[78.1,64.3],[73,70.9],[66.9,76.4],[59.7,80.5],[51.9,83.2],[43.7,84.3],[35.4,83.8],[27.4,81.7],[20,78],[13.4,73],[7.9,66.8],[3.8,59.7],[1.1,51.9],[0,43.7],[.5,35.4],[2.6,27.4],[6.3,20],[11.3,13.4],[17.5,7.9],[24.7,3.8],[32.5,1.1],[39.8,.1],[47.1,.3],[54.3,1.8],[61.1,4.5],[67.4,8.4],[72.9,13.3],[77.4,19.1],[80.9,25.5],[83.2,32.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:[255,255,255,255]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0,clippingPath:{type:"CIMClippingPath",clippingType:"Intersect",path:{rings:[[[0,0],[84.3,0],[84.3,84.3],[0,84.3],[0,0]]]}},rotation:0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-11.25},anchorPointUnits:"Absolute",dominantSizeAxis3D:"Y",size:22.5,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:197.7,ymax:294.7},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[98.9,0],[119.4,23.2],[139.4,49.3],[156.8,75.2],[171.2,100.8],[182.4,125.3],[190.6,148.8],[195.7,171.4],[197.7,192.9],[197.7,195.8],[197.7,200.3],[197.6,202.5],[197.5,204.8],[197.3,207.1],[197,209.4],[196.7,211.7],[196.4,214.1],[196,216.4],[195.5,218.7],[195,221.1],[194.4,223.4],[193.7,225.8],[193,228.1],[192.2,230.5],[191.4,232.8],[190.5,235.1],[189.5,237.5],[188.5,239.7],[187.4,242],[186.2,244.3],[185,246.5],[183.7,248.7],[182.4,250.9],[181,253.1],[179.5,255.2],[178,257.3],[176.4,259.4],[174.7,261.4],[173.1,263.3],[171.3,265.3],[169.5,267.2],[167.7,269],[165.8,270.8],[163.9,272.5],[161.9,274.2],[159.9,275.8],[157.8,277.4],[155.7,278.9],[153.6,280.4],[151.4,281.7],[149.2,283.1],[147,284.4],[144.8,285.6],[142.5,286.7],[140.3,287.8],[138,288.8],[135.7,289.8],[133.4,290.7],[131,291.5],[128.7,292.3],[126.4,293],[124,293.6],[121.7,294.2],[119.4,294.7],[117,295.2],[114.7,295.6],[112.4,296],[110.1,296.3],[107.8,296.5],[105.5,296.7],[103.3,296.8],[101.1,296.9],[98.8,296.9],[83.1,295.7],[67.8,292],[53.3,285.9],[39.9,277.5],[28.1,267.2],[18,255.1],[10,241.5],[4.2,226.9],[.9,211.5],[0,195.8],[.1,192.9],[2.1,171.4],[7.2,148.8],[15.4,125.3],[26.6,100.8],[41,75.2],[58.4,49.3],[78.4,23.2],[98.9,0]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:a===this.activeHandle?yt.toArray():U().toArray()}]}}],scaleSymbolsProportionally:!0,respectFrame:!0,clippingPath:{type:"CIMClippingPath",clippingType:"Intersect",path:{rings:[[[0,0],[197.7,0],[197.7,294.7],[0,294.7],[0,0]]]}},rotation:0}],haloSize:1,scaleX:1,angleAlignment:"Display",angle:0}}}),geometry:i.data.geometry})),this._graphicsLayer.graphics.addMany([...this._controlPointGraphics]),this._controlPointManipulations=this._controlPointGraphics.map(i=>new xt({tool:this,view:e,graphic:i})),this.addHandles([...this._controlPointManipulations.map((i,a)=>i.createDragPipeline(this._getInfo.bind(this,a),(r,n)=>{r.action==="start"&&(this._undoStack.push(a),this._redoStack=[],this._sharedUndoStack.push({tool:this,operation:n}),this._sharedRedoStack.length=0),this.updateGraphics()})),V(()=>this.view.scale,()=>this.active?this.updateGraphics():null)]),this._controlPointManipulations.forEach((i,a)=>{const r=n=>{this.addHandles([n.events.on(["click","grab-changed"],o=>this.updateActiveHandle(a))])};i.forEachManipulator(r)}),this.addHandles([e.on("key-down",i=>{e.activeTool===this&&(i.key!==T.shift||i.repeat||(this._isModifierActive=!0,i.stopPropagation()),i.key!==T.toggleOpacity||i.repeat||(t.opacity*=this._isOpacityToggled?2:.5,this._isOpacityToggled=!this._isOpacityToggled,i.stopPropagation()),i.key!==T.primaryKey||i.repeat||(this._factor=he,i.stopPropagation()),this._isModifierActive&&(i.key===T.up&&(this._move(0,this._factor),i.stopPropagation()),i.key===T.down&&(this._move(0,-this._factor),i.stopPropagation()),i.key===T.left&&(this._move(-this._factor,0),i.stopPropagation()),i.key===T.right&&(this._move(this._factor,0),i.stopPropagation())))}),e.on("key-up",i=>{e.activeTool===this&&(i.key===T.shift&&(this._isModifierActive=!1,i.stopPropagation()),i.key===T.primaryKey&&(this._factor=le,i.stopPropagation()))})]))}async _loadProjectionEngine(){const e=this._georeference.controlPoints[0].mapPoint;return wt(e.spatialReference,this.view.spatialReference)}_getInfo(e){return{editGeometryOperations:this._controlPointEditGeometryOperations[e],constraints:this._hasValidSpatialReference?null:{xmin:0,ymin:0,xmax:this._georeference.width,ymax:this._georeference.height}}}_move(e,t){const s=this._controlPointEditGeometryOperations[this.activeHandle],i=[];for(const r of s.data.components)i.push(...r.vertices);const a=s.moveVertices(i,e*this.view.resolution,t*this.view.resolution,0,E.NEW_STEP);this._sharedUndoStack.push({tool:this,operation:a}),this._sharedRedoStack.length=0,this.updateGraphics()}};h([d()],R.prototype,"_hasValidSpatialReference",null),h([d()],R.prototype,"activeHandle",void 0),h([d({constructOnly:!0,nonNullable:!0})],R.prototype,"mediaElement",void 0),h([d({constructOnly:!0})],R.prototype,"view",void 0),R=h([J("esri.views.2d.interactive.editingTools.ControlPointsTransformTool")],R);function Ct(e,t){e.action==="start"?t.cursor="grabbing":t.cursor="grab"}class ce{constructor(){this._lastDragEvent=null,this.next=new kt,this._enabled=!1}get enabled(){return this._enabled}set enabled(t){if(this._enabled!==t&&this._lastDragEvent!=null){const s={...this._lastDragEvent,action:"update"};t&&this._adjustScaleFactors(s),this.next.execute(s)}this._enabled=t}createDragEventPipelineStep(){return this._lastDragEvent=null,t=>(this._lastDragEvent=t.action!=="end"?{...t}:null,this._enabled&&this._adjustScaleFactors(t),t)}_adjustScaleFactors(t){const s=t.direction[0]!==0&&t.direction[1]!==0?Math.max(Math.abs(t.factor1),Math.abs(t.factor2)):t.direction[0]===0?Math.abs(t.factor2):Math.abs(t.factor1);t.factor1=t.factor1<0?-s:s,t.factor2=t.factor2<0?-s:s}}class pe{constructor(){this._lastDragEvent=null,this.next=new kt,this._enabled=!1}get enabled(){return this._enabled}set enabled(t){if(this._enabled!==t&&this._lastDragEvent!=null){const s={...this._lastDragEvent,action:"update"};t&&this._adjustRotateAngle(s),this.next.execute(s)}this._enabled=t}createDragEventPipelineStep(){return this._lastDragEvent=null,t=>(this._lastDragEvent=t.action!=="end"?{...t}:null,this._enabled&&this._adjustRotateAngle(t),t)}_adjustRotateAngle(t){const s=Ht(t.rotateAngle);t.rotateAngle=Vt(5*Math.round(s/5))}}class de extends dt{constructor(t){super(),this._handles=new Tt,this._originCache=v(),this._view=t.view,this._tool=t.tool,this._graphic=t.graphic,this._snapRotation=t.snapRotation,this._manipulator=this._createManipulator(),this._handles.add([this._manipulator.events.on("grab-changed",s=>Ct(s,this._manipulator))]),this.forEachManipulator(s=>this._tool.manipulators.add(s))}destroy(){this._handles.destroy(),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._manipulator=null,this._snapRotation=null,this._graphic=null,this._handles=null,this._originCache=null}forEachManipulator(t){t(this._manipulator,z.ROTATE)}createDragPipeline(t,s){let i=null,a=null;return lt(this._manipulator,(r,n)=>{n.next(o=>{if(o.action==="start"){r.cursor="grabbing";const c=t();i=c.plane,a=c.editGeometryOperations}return o}).next(ht(this._view)).next(o=>({...o,rotateAngle:se(o.mapStart,o.mapEnd,{x:i.origin[0],y:i.origin[1]},!0)})).next(this._snapRotation.createDragEventPipelineStep(),this._snapRotation.next).next(o=>{const c=D(this._originCache,i.origin),p=[];for(const P of a.data.components)p.push(...P.vertices);const u=o.action==="start"?E.NEW_STEP:E.ACCUMULATE_STEPS,m=a.rotateVertices(p,c,o.rotateAngle,u,pt.REPLACE);return Mt(m,i),s(o,m),o}).next(o=>(o.action==="end"&&(r.cursor="grab"),o))})}_createManipulator(){const t=this._view,s=this._graphic;return new ct({view:t,graphic:s,selectable:!0,cursor:"grab"})}}const rt=10,vt=1e-6,_e=.3;function ft(e){const t=I(e.basis1),s=I(e.basis2);return _e*Math.min(t,s)}class ue extends dt{constructor(t){super(),this._handles=new Tt,this._planeStart=q(),this._displayPlaneStart=q(),this._originCache=v(),this._axisCache=Et(),this._renderStartCache=v(),this._renderEndCache=v(),this._resizeOriginCache=v(),this._view=t.view,this._tool=t.tool,this._graphic=t.graphic,this._direction=t.direction,this._preserveAspectRatio=t.preserveAspectRatio,this._manipulator=this._createManipulator(),this._handles.add([this._manipulator.events.on("grab-changed",s=>Ct(s,this._manipulator))]),this.forEachManipulator(s=>this._tool.manipulators.add(s))}destroy(){this._handles.destroy(),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._graphic=null,this._manipulator=null,this._direction=null,this._handles=null,this._planeStart=null,this._displayPlaneStart=null,this._originCache=null,this._axisCache=null,this._renderStartCache=null,this._renderEndCache=null,this._resizeOriginCache=null,this._preserveAspectRatio=null}forEachManipulator(t){t(this._manipulator,z.SCALE)}createDragPipeline(t,s){let i=null,a=null,r=null,n=0,o=null,c=null;const p=this._planeStart,u=this._displayPlaneStart,m=this._direction;return lt(this._manipulator,(P,g)=>{g.next(l=>{if(l.action==="start"){P.cursor="grabbing";const _=t();i=_.plane,a=_.displayPlane,r=_.editGeometryOperations,n=rt*this._view.resolution,Z(i,p),Z(a,u);const y=Ut(r.data.spatialReference);o=y?y.valid[1]-y.valid[0]-3*rt*this._view.resolution:null}return l}).next(ht(this._view)).next(l=>{const _=D(this._renderStartCache,[l.mapStart.x,l.mapStart.y,0]),y=D(this._renderEndCache,[l.mapEnd.x,l.mapEnd.y,0]),f=D(this._resizeOriginCache,u.origin);j(f,f,u.basis1,-m[0]),j(f,f,u.basis2,-m[1]),O(y,y,f),O(_,_,f);const $=m[0]!==0&&m[1]!==0,M=ft(u),x=ft(a)/M,F=(et,it)=>{if(et===0)return 1;let A=I(it),N=.5*et*ut(it,y)/A;const B=N<0?-1:1;$&&(N+=(A-.5*et*ut(it,_)/A)*B*x);const Ot=A<1.5*n?1:vt;return A=Math.max(A-n,vt),B>0&&(N-=rt*this._view.resolution),B*Math.max(B*(N/A),Ot)},Q=F(m[0],u.basis1),tt=F(m[1],u.basis2);return{...l,direction:m,factor1:Q,factor2:tt}}).next(this._preserveAspectRatio.createDragEventPipelineStep(),this._preserveAspectRatio.next).next(l=>{const _=D(this._originCache,p.origin);j(_,_,p.basis1,-m[0]),j(_,_,p.basis2,-m[1]);const y=It(this._axisCache,p.basis1[0],p.basis1[1]);Gt(y,y);const f=[];for(const x of r.data.components)f.push(...x.vertices);const $=l.action==="start"?E.NEW_STEP:E.ACCUMULATE_STEPS,M=r.scaleVertices(f,_,y,l.factor1,l.factor2,$,pt.REPLACE);return o&&o<r.data.geometry.extent.width&&c?r.updateVertices(f,c):(Z(p,i),Mt(M,i),c=M.operation,s(l,M)),l}).next(l=>(l.action==="end"&&(P.cursor="grab"),l))})}_createManipulator(){return new ct({view:this._view,graphic:this._graphic,selectable:!0,cursor:"grab"})}}const b={up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",plus:"+",minus:"-",toggleOpacity:"t",shift:"Shift",primaryKey:Pt},me=80,ge=10,ye=30,ve=[[1,1],[1,-1],[-1,-1],[-1,1],[1,0],[0,-1],[-1,0],[0,1]],fe=1,be=10;let S=class extends Rt{constructor(e){super(e),this._initialControlPoints=null,this._initialGeometry=null,this._graphic=null,this._planeCache=q(),this._displayPlaneCache=q(),this._mainAxisCache=Et(),this._rotationHandleCache=v(),this._cornerA=v(),this._cornerB=v(),this._cornerC=v(),this._cornerD=v(),this._avgAB=v(),this._avgBC=v(),this._avgCD=v(),this._avgDA=v(),this._preserveAspectRatio=new ce,this._snapRotation=new pe,this._graphicsLayer=new St({internal:!0,listMode:"hide",visible:!1}),this._sharedUndoStack=[],this._sharedRedoStack=[],this._isOpacityToggled=!1,this._isModifierActive=!1,this._factor=1,this.preserveAspectRatio=null,this.snapRotation=null}initialize(){this._initialize()}destroy(){const{map:e}=this.view;this._dragManipulation.destroy(),this._rotateManipulation.destroy(),this._scaleManipulations.forEach(t=>t.destroy()),this._editGeometryOperations.destroy(),e.removeMany([this._graphicsLayer]),this._graphicsLayer.removeAll(),this._graphicsLayer=H(this._graphicsLayer),this._initialControlPoints=null,this._initialGeometry=null,this._graphic=null,this._preserveAspectRatio=null,this._snapRotation=null,this._planeCache=null,this._displayPlaneCache=null,this._rotationHandleCache=null,this._mainAxisCache=null,this._cornerA=null,this._cornerB=null,this._cornerC=null,this._cornerD=null,this._avgAB=null,this._avgBC=null,this._avgCD=null,this._avgDA=null,this._sharedUndoStack=null,this._sharedRedoStack=null}get _plane(){const e=this._graphic.geometry;if(e==null)return null;const t=this._editGeometryOperations.data,s=t.components[0].edges[0],i=zt(this._mainAxisCache,s.leftVertex.pos,s.rightVertex.pos);Gt(i,i);let a=me*this.view.resolution;const r=this.view.spatialReference;return Ft(r,e.spatialReference)&&(a*=mt(r)/mt(e.spatialReference)),ee(i,t,a,this._planeCache)}get _displayPlane(){const e=this._plane;if(!e)return null;const t=this._displayPlaneCache;Z(e,t);const s=ge*this.view.resolution;return at(t.basis1,t.basis1,1+s/I(t.basis1)),at(t.basis2,t.basis2,1+s/I(t.basis2)),t}get _backgroundGraphicGeometry(){const e=this._displayPlane;if(!e)return null;const t=this.view.spatialReference;return this._updateDisplayPlaneConrers(e),new Nt({spatialReference:t,rings:[[this._cornerA,this._cornerB,this._cornerC,this._cornerD,this._cornerA]]})}get _rotateGraphicGeometry(){const e=this._plane;if(!e)return null;const t=this._rotationHandleCache;return Bt(t,e.basis1),at(t,t,ye*this.view.resolution),C(t,t,e.origin),C(t,t,e.basis1),new w({x:t[0],y:t[1],spatialReference:this.view.spatialReference})}get _scaleGraphicGeometries(){const e=this._displayPlane;if(!e)return[];const t=this.view.spatialReference;this._updateDisplayPlaneConrers(e);const{_cornerA:s,_cornerB:i,_cornerC:a,_cornerD:r}=this,n=W(this._avgAB,s,i,.5),o=W(this._avgBC,i,a,.5),c=W(this._avgCD,a,r,.5),p=W(this._avgDA,r,s,.5);return[new w({x:s[0],y:s[1],spatialReference:t}),new w({x:i[0],y:i[1],spatialReference:t}),new w({x:a[0],y:a[1],spatialReference:t}),new w({x:r[0],y:r[1],spatialReference:t}),new w({x:n[0],y:n[1],spatialReference:t}),new w({x:o[0],y:o[1],spatialReference:t}),new w({x:c[0],y:c[1],spatialReference:t}),new w({x:p[0],y:p[1],spatialReference:t})]}onActivate(){this.visible=!0}onDeactivate(){this.visible=!1}onShow(){this._graphicsLayer.visible=!0}onHide(){this._graphicsLayer.visible=!1}canUndo(){return this._editGeometryOperations.canUndo}canRedo(){return this._editGeometryOperations.canRedo}undo(){this._editGeometryOperations.undo(),this.updateGraphics()}redo(){this._editGeometryOperations.redo(),this.updateGraphics()}refresh(){const{view:e,target:t}=this,s="georeference"in t?t.georeference.coords:t.geometry,i=this._editGeometryOperations,a=i.data.components[0].vertices,r=ae.fromGeometry(X(s,e.spatialReference),nt.Local).components[0].vertices;a.forEach((n,o)=>{i.setVertexPosition(n,r[o].pos)}),this.updateGraphics()}reset(){const{target:e}=this;if("georeference"in e){const t=e.georeference;t.type==="control-points"&&(t.controlPoints=this._initialControlPoints)}else e.geometry=this._initialGeometry;this.refresh(),this._sharedUndoStack.length=0,this._sharedRedoStack.length=0}updateGraphics(){const e=this._editGeometryOperations.data.geometry;"georeference"in this.target&&(this.target.georeference.coords=e),this._graphic.geometry=e,this._backgroundGraphic.geometry=this._backgroundGraphicGeometry,this._rotateGraphic.geometry=this._rotateGraphicGeometry,this._scaleGraphicGeometries.forEach((t,s)=>{this._scaleGraphics[s].geometry=t})}setSharedUndoStack(e){this._sharedUndoStack=e}setSharedRedoStack(e){this._sharedRedoStack=e}async _initialize(){const{view:e,target:t}=this;if("georeference"in t){const i=t.georeference;this._graphic=new k({geometry:i.coords}),this._initialControlPoints=i.type==="control-points"?i.controlPoints:null}else this._graphic=t,this._initialGeometry=t.geometry;e.map.addMany([this._graphicsLayer]),e.focus(),this.visible=!1,this.finishToolCreation(),await this._loadProjectionEngine(),this._editGeometryOperations=At.fromGeometry(X(this._graphic.geometry,e.spatialReference),nt.Local),this._backgroundGraphic=new k({symbol:new jt({color:"transparent",outline:{type:"simple-line",color:U(),width:2}}),geometry:this._backgroundGraphicGeometry}),this._rotateGraphic=new k({symbol:new K({color:gt(),outline:{type:"simple-line",color:U(),width:1}}),geometry:this._rotateGraphicGeometry}),this._scaleGraphics=this._scaleGraphicGeometries.map(i=>new k({symbol:new K({size:6,style:"square",color:gt(),outline:{type:"simple-line",color:U(),width:1}}),geometry:i})),this._graphicsLayer.graphics.addMany([this._backgroundGraphic,this._rotateGraphic,...this._scaleGraphics]),this._dragManipulation=new xt({tool:this,view:e,graphic:this._graphic}),this._rotateManipulation=new de({tool:this,view:e,graphic:this._rotateGraphic,snapRotation:this._snapRotation}),this._scaleManipulations=this._scaleGraphics.map((i,a)=>new ue({tool:this,view:e,graphic:i,direction:ve[a],preserveAspectRatio:this._preserveAspectRatio})),this.addHandles([this._dragManipulation.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)),this._rotateManipulation.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)),...this._scaleManipulations.map(i=>i.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this))),V(()=>this.view.scale,()=>this.active?this.updateGraphics():null),e.on("click",async i=>{if(e.activeTool!=null&&e.activeTool!==this)return;const a=Wt(i),r=[];e.map.allLayers.forEach(c=>{c.type!=="vector-tile"&&c.type!=="imagery"||r.push(c)});const n=await this.view.hitTest(a,{exclude:r}),o=n.results;if(o.length===0)e.activeTool=null;else{const c=Yt(n.results),p="georeference"in t,u=o.map(P=>P.type==="media"?P.element:null).filter(Boolean),m=[...this._graphicsLayer.graphics,p?null:t].filter(Boolean);p&&u.includes(t)||c!=null&&m.includes(c.graphic)?e.activeTool==null&&(e.activeTool=this):e.activeTool=null}})]);const s=i=>{this.addHandles(i.events.on("grab-changed",a=>{"georeference"in t&&(a.action==="start"?t.opacity*=.5:a.action==="end"&&(t.opacity*=2))}))};this._dragManipulation.forEachManipulator(s),this._rotateManipulation.forEachManipulator(s),this._scaleManipulations.forEach(i=>i.forEachManipulator(s)),this.addHandles([e.on("key-down",i=>{e.activeTool===this&&(i.key!==b.shift||i.repeat||(this.preserveAspectRatio==null&&(this._preserveAspectRatio.enabled=!this._preserveAspectRatio.enabled),this.snapRotation==null&&(this._snapRotation.enabled=!this._snapRotation.enabled),this._isModifierActive=!0,i.stopPropagation()),i.key!==b.toggleOpacity||i.repeat||("georeference"in t&&(t.opacity*=this._isOpacityToggled?2:.5,this._isOpacityToggled=!this._isOpacityToggled),i.stopPropagation()),i.key!==b.primaryKey||i.repeat||(this._factor=be,i.stopPropagation()),this._isModifierActive&&(i.key===b.plus&&(this._scale(this._factor),i.stopPropagation()),i.key===b.minus&&(this._scale(-this._factor),i.stopPropagation()),i.key===b.up&&(this._move(0,this._factor),i.stopPropagation()),i.key===b.down&&(this._move(0,-this._factor),i.stopPropagation()),i.key===b.left&&(this._move(-this._factor,0),i.stopPropagation()),i.key===b.right&&(this._move(this._factor,0),i.stopPropagation())))}),e.on("key-up",i=>{e.activeTool===this&&(i.key===b.shift&&(this.preserveAspectRatio==null&&(this._preserveAspectRatio.enabled=!this._preserveAspectRatio.enabled),this.snapRotation==null&&(this._snapRotation.enabled=!this._snapRotation.enabled),this._isModifierActive=!1,i.stopPropagation()),i.key===b.primaryKey&&(this._factor=fe,i.stopPropagation()))})])}async _loadProjectionEngine(){const e=this._graphic.geometry;return wt(e.spatialReference,this.view.spatialReference)}_updateDisplayPlaneConrers(e){const{basis1:t,basis2:s,origin:i}=e,a=this._cornerA;C(a,i,t),C(a,a,s);const r=this._cornerB;C(r,i,t),O(r,r,s);const n=this._cornerC;O(n,i,t),O(n,n,s);const o=this._cornerD;O(o,i,t),C(o,o,s)}_getInfo(){return{editGeometryOperations:this._editGeometryOperations,plane:this._plane,displayPlane:this._displayPlane}}_updateGraphics(e,t){e.action==="start"&&(this._sharedUndoStack.push({tool:this,operation:t}),this._sharedRedoStack.length=0),this.updateGraphics()}_scale(e){var n;const t=this._editGeometryOperations,s=[];for(const o of t.data.components)s.push(...o.vertices);const i=(n=t.data.geometry.extent)==null?void 0:n.width,a=(i+e*this.view.resolution)/i,r=t.scaleVertices(s,this._plane.origin,Zt,a,a,E.NEW_STEP,pt.REPLACE);this._sharedUndoStack.push({tool:this,operation:r}),this._sharedRedoStack.length=0,this.updateGraphics()}_move(e,t){const s=this._editGeometryOperations,i=[];for(const r of s.data.components)i.push(...r.vertices);const a=s.moveVertices(i,e*this.view.resolution,t*this.view.resolution,0,E.NEW_STEP);this._sharedUndoStack.push({tool:this,operation:a}),this._sharedRedoStack.length=0,this.updateGraphics()}};h([d()],S.prototype,"_plane",null),h([d()],S.prototype,"_backgroundGraphicGeometry",null),h([d()],S.prototype,"_rotateGraphicGeometry",null),h([d()],S.prototype,"_scaleGraphicGeometries",null),h([d()],S.prototype,"preserveAspectRatio",void 0),h([d()],S.prototype,"snapRotation",void 0),h([d({constructOnly:!0,nonNullable:!0})],S.prototype,"target",void 0),h([d({constructOnly:!0})],S.prototype,"view",void 0),S=h([J("esri.views.2d.interactive.editingTools.TransformTool")],S);const Y={redo:"r",undo:"z"};let G=class extends Kt{constructor(e){super(e),this._transformTool=null,this._controlPointsTransformTool=null,this._advancedModeTransformTool=null,this._activeTool=null,this._sharedUndoStack=[],this._sharedRedoStack=[],this._originalOpacity=null,this.activeHandle=0}initialize(){const{view:e,mediaElement:t,preserveAspectRatio:s,snapRotation:i,advancedMode:a}=this;this._originalOpacity=t.opacity,this._transformTool=new S({target:t,view:e,preserveAspectRatio:s,snapRotation:i}),this._controlPointsTransformTool=new R({mediaElement:t,view:e}),this._advancedModeTransformTool=new R({mediaElement:a.mediaElement,view:a.view}),this._transformTool.setSharedUndoStack(this._sharedUndoStack),this._transformTool.setSharedRedoStack(this._sharedRedoStack),this._controlPointsTransformTool.setSharedUndoStack(this._sharedUndoStack),this._controlPointsTransformTool.setSharedRedoStack(this._sharedRedoStack),this._advancedModeTransformTool.setSharedUndoStack(this._sharedUndoStack),this._advancedModeTransformTool.setSharedRedoStack(this._sharedRedoStack);const r=t.georeference,n=a.mediaElement.georeference;a.view.tools.addMany([this._advancedModeTransformTool]),"controlPoints"in n&&"controlPoints"in r&&this.addHandles([a.view.on("key-down",o=>{o.key===Y.undo&&this.canUndo()&&(this.undo(),o.stopPropagation()),o.key===Y.redo&&this.canRedo()&&(this.redo(),o.stopPropagation())}),a.view.on("focus",async o=>{this._controlPointsTransformTool.removeHighlightActiveHandle(),this._advancedModeTransformTool.highlightActiveHandle()}),V(()=>n.controlPoints,o=>{var c;r.controlPoints=o.map(({sourcePoint:p},u)=>({sourcePoint:p,mapPoint:r.controlPoints[u].mapPoint})),(c=this._activeTool)==null||c.refresh()}),V(()=>this._controlPointsTransformTool.activeHandle,o=>{this._advancedModeTransformTool.updateActiveHandle(o),this.activeHandle=o}),V(()=>this._advancedModeTransformTool.activeHandle,o=>{this._controlPointsTransformTool.updateActiveHandle(o),this.activeHandle=o})]),this.addHandles([e.on("key-down",o=>{o.key===Y.undo&&this.canUndo()&&(this.undo(),o.stopPropagation()),o.key===Y.redo&&this.canRedo()&&(this.redo(),o.stopPropagation())}),e.on("focus",async o=>{this._advancedModeTransformTool.removeHighlightActiveHandle(),this._controlPointsTransformTool.highlightActiveHandle()})]),e.tools.addMany([this._transformTool,this._controlPointsTransformTool]),e.activeTool=this._transformTool,this._activeTool=this._transformTool,e.focus()}destroy(){var e,t;(e=this._transformTool)==null||e.destroy(),(t=this._controlPointsTransformTool)==null||t.destroy(),this._transformTool=null,this._controlPointsTransformTool=null,this._advancedModeTransformTool=null,this._activeTool=null,this._sharedUndoStack=null,this._sharedRedoStack=null}canUndo(){return this._sharedUndoStack.length>0}canRedo(){return this._sharedRedoStack.length>0}undo(){var e;if(this._sharedUndoStack.length>0){const{tool:t,operation:s}=this._sharedUndoStack.pop();t!==this._activeTool&&t.refresh(),s.undo(),t.updateGraphics(),this._sharedRedoStack.push({tool:t,operation:s}),this._activeTool!==t&&((e=this._activeTool)==null||e.refresh())}}redo(){var e;if(this._sharedRedoStack.length>0){const{tool:t,operation:s}=this._sharedRedoStack.pop();t!==this._activeTool&&t.refresh(),s.apply(),t.updateGraphics(),this._sharedUndoStack.push({tool:t,operation:s}),this._activeTool!==t&&((e=this._activeTool)==null||e.refresh())}}refresh(){this._activeTool.refresh()}reset(){this._activeTool.reset(),this._advancedModeTransformTool.reset()}async enableAdvancedMode(){this.view.activeTool=this._controlPointsTransformTool,this._activeTool=this._controlPointsTransformTool,this._activeTool.refresh(),await this.advancedMode.view.when(),this.advancedMode.view.activeTool=this._advancedModeTransformTool,this._originalOpacity=this._controlPointsTransformTool.mediaElement.opacity,this._controlPointsTransformTool.mediaElement.opacity=.25*this._originalOpacity}disableAdvancedMode(){this.view.activeTool=this._transformTool,this._activeTool=this._transformTool,this._activeTool.refresh(),this.advancedMode.view.activeTool=null,this._controlPointsTransformTool.mediaElement.opacity=this._originalOpacity}};h([d()],G.prototype,"activeHandle",void 0),h([d({constructOnly:!0})],G.prototype,"advancedMode",void 0),h([d()],G.prototype,"preserveAspectRatio",void 0),h([d()],G.prototype,"snapRotation",void 0),h([d({constructOnly:!0,nonNullable:!0})],G.prototype,"mediaElement",void 0),h([d({constructOnly:!0})],G.prototype,"view",void 0),G=h([J("esri.views.2d.interactive.editingTools.MediaTransformToolsWrapper")],G);export{R as ControlPointsTransformTool,L as DrawGraphicTool2D,G as MediaTransformToolsWrapper,S as TransformTool};