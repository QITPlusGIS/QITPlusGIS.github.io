import{or as D,fC as Lt,a as l,b as g,c as h,aS as xt,os as Wt,ot as Zt,ou as jt,ov as At,ow as Ft,ox as Bt,oy as Gt,oz as It,oA as Xt,oB as qt,oC as Yt,oD as Jt,oE as Qt,oF as Kt,jW as dt,jX as ut,oG as te,eQ as P,jY as a,oH as ee,l as U,cP as W,j as _t,oI as ne,dJ as se,je as ie,oJ as ae,F as oe,S as pt,oK as le,oL as zt,mI as Z,f_ as j,fo as re,bj as y,oM as ht,oN as bt,oO as ce,oP as ue,oQ as pe}from"./index-797c09f0.js";import{c as he,f as fe,a as ve}from"./spatialReferenceEllipsoidUtils-088ffef8.js";import{geodesicLength as Ct}from"./geometryEngine-4cf0d37c.js";function ge(e,t){return{type:D(t),value:e,unit:t}}function d(e,t){return{type:D(t),value:e,unit:t}}function me(e,t){return{type:D(t),value:e,unit:t}}function $e(e,t,n="arithmetic"){return{type:D(t),value:e,unit:t,rotationType:n}}function kt(e,t){return ge(Lt(e.value,e.unit,t),t)}function mn(e,t){return e==null?t:t==null||e.value>Lt(t.value,t.unit,e.unit)?e:t}function $n(e,t){return e==null?null:{...e,value:e.value*t}}const dn=d(0,"meters"),_n=me(0,"square-meters");$e(0,"radians");let H=class extends xt{constructor(t){super(t),this.helpMessage=void 0}};l([g()],H.prototype,"tooltipOptions",void 0),l([g()],H.prototype,"helpMessage",void 0),H=l([h("esri.views.interactive.tooltip.SketchTooltipInfo")],H);const z="esri-tooltip",c=`${z}-content`,de=`${z}-table`,_e=`${z}-help-message`;function ft(e,t,n,s=2,i="abbr"){return jt(e,kt(t,n).value,n,s,i)}function Rt(e,t,n,s=2,i="abbr"){return At(e,kt(t,n).value,n,s,i)}function be(e,t,n=2,s="abbr"){return Ft(e,t.value,t.unit,n,s)}function ye(e,t,n=2,s="abbr"){return Bt(e,t.value,t.unit,n,s)}function we(e,t,n=2,s="abbr"){return Gt(e,t.value,t.unit,n,s)}function Te(e,t,n=2,s="abbr"){return It(e,t.value,t.unit,n,s)}function Me(e,t,n=2,s="abbr"){return Xt(e,t.value,t.unit,n,s)}function Le(e,t,n=2,s="abbr"){return qt(e,t.value,t.unit,n,s)}function xe(e,t,n=2,s="abbr"){return Yt(e,t.value,t.unit,n,s)}function ze(e,t,n=2,s="abbr"){return Jt(e,t.value,t.unit,n,s)}function Ce(e,t,n=2,s="abbr"){return Qt(e,t.value,t.unit,n,s)}function ke(e,t,n=2,s="abbr"){return Kt(e,t.value,t.unit,n,s)}function Ht(e,t,n){return Wt(e.value,e.unit,e.rotationType,t,n)}function Re(e,t,n){return Zt(e.value,e.unit,e.rotationType,t,n)}function yt(e,t,n,s,i="abbr"){switch(s=s??2,n){case"imperial":return Le(e,t,s,i);case"metric":return be(e,t,s,i);default:return ft(e,t,n,s,i)}}function He(e,t,n,s=2,i="abbr"){switch(n){case"imperial":return xe(e,t,s,i);case"metric":return ye(e,t,s,i);default:return Rt(e,t,n,s,i)}}function Ee(e,t,n,s=2,i="abbr"){switch(n){case"imperial":return ze(e,t,s,i);case"metric":return we(e,t,s,i);default:return ft(e,t,n,s,i)}}function Oe(e,t,n,s=2,i="abbr"){switch(n){case"imperial":return Ce(e,t,s,i);case"metric":return Te(e,t,s,i);default:return Rt(e,t,n,s,i)}}function Se(e,t,n,s=2,i="abbr"){switch(n){case"imperial":return ke(e,t,s,i);case"metric":return Me(e,t,s,i);default:return ft(e,t,n,s,i)}}let p=class extends ut{get _units(){const t=te(this.tooltip.view);return{length:t,verticalLength:t,area:t}}_getHelpMessage(t){var R,w,L,x;const{info:n}=this,{tooltipOptions:s,helpMessage:i,viewType:o}=n,u=(R=s==null?void 0:s.visibleElements)==null?void 0:R.helpMessage,f=t??i,M=o==="3d"?"helpMessages3d":"helpMessages2d";return u&&f?(x=(L=(w=this._messagesTooltip)==null?void 0:w.sketch)==null?void 0:L[M])==null?void 0:x[f]:void 0}_formatScale(t){return P(t,{style:"percent",maximumFractionDigits:0})}_formatRelativeOrientation(t){return P(t,{maximumFractionDigits:2,minimumFractionDigits:2,signDisplay:"exceptZero"})}_formatLength(t,n,s){return yt(this._messagesUnits,t,n??this._units.length,s)}_formatRelativeLength(t){return He(this._messagesUnits,t,this._units.length)}_formatVerticalLength(t){return Ee(this._messagesUnits,t,this._units.verticalLength)}_formatRelativeVerticalLength(t){return Oe(this._messagesUnits,t,this._units.verticalLength)}_formatTotalLength(t){return yt(this._messagesUnits,t,this._units.length)}_formatArea(t){return Se(this._messagesUnits,t,this._units.area)}_formatPercentage(t){return P(t.value,{style:"percent"})}};l([g()],p.prototype,"info",void 0),l([g()],p.prototype,"tooltip",void 0),l([g()],p.prototype,"_units",null),l([dt("esri/core/t9n/Units"),g()],p.prototype,"_messagesUnits",void 0),l([dt("esri/views/interactive/tooltip/t9n/Tooltip"),g()],p.prototype,"_messagesTooltip",void 0),p=l([h("esri.views.interactive.tooltip.content.TooltipContent")],p);function v({className:e,helpMessage:t},...n){const s=n.filter(i=>!!i);return a("div",{class:ee(e,c)},s.length>0?a("div",{class:de},...s):null,t?a("div",{key:"help-message",class:_e},t):null)}const A=`${z}-field`,F={base:A,title:`${A}__title`,value:`${A}__value`};let r=class extends ut{render(){return a("div",{class:F.base},a("div",{class:F.title},this.title),a("div",{class:F.value},this.value))}};l([g()],r.prototype,"title",void 0),l([g()],r.prototype,"value",void 0),r=l([h("esri.views.interactive.tooltip.support.TooltipField")],r);const Ve={base:`${z}-value-by-value`};let b=class extends ut{constructor(){super(...arguments),this.divider="×"}render(){return a("div",{class:Ve.base},a("span",null,this.left),a("span",null,this.divider),a("span",null,this.right))}};l([g()],b.prototype,"left",void 0),l([g()],b.prototype,"divider",void 0),l([g()],b.prototype,"right",void 0),b=l([h("esri.views.interactive.tooltip.support.ValueByValue")],b);const Ne={base:`${c} ${`${c}--draw-rectangle`}`};let G=class extends p{render(){const{area:t,radius:n,xSize:s,ySize:i,tooltipOptions:o}=this.info,{visibleElements:u}=o,f=this._messagesTooltip.sketch;return a(v,{className:Ne.base,helpMessage:this._getHelpMessage()},u.radius&&n!=null&&a(r,{title:f.radius,value:this._formatLength(n)}),u.size&&s!=null&&i!=null&&a(r,{title:f.size,value:a(b,{left:this._formatLength(s),right:this._formatLength(i)})}),u.area&&a(r,{title:f.area,value:this._formatArea(t)}))}};G=l([h("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")],G);const De={base:`${c}--draw-mesh`};let I=class extends p{render(){const{elevation:t,tooltipOptions:n}=this.info,{visibleElements:s}=n,i=this._messagesTooltip.sketch;return a(v,{className:De.base,helpMessage:this._getHelpMessage()},s.elevation&&a(r,{title:i.elevation,value:this._formatVerticalLength(t)}))}};I=l([h("esri.views.interactive.tooltip.content.TooltipContentDrawMesh")],I);const Pe={base:`${c}--draw-point`};let X=class extends p{render(){const{elevation:t,tooltipOptions:n}=this.info,{visibleElements:s}=n,i=this._messagesTooltip.sketch;return a(v,{className:Pe.base,helpMessage:this._getHelpMessage()},s.elevation&&a(r,{title:i.elevation,value:this._formatVerticalLength(t)}))}};X=l([h("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],X);const Ue={base:`${c} ${`${c}--draw-polygon`}`};let q=class extends p{render(){const{area:t,elevation:n,tooltipOptions:s,viewType:i}=this.info,{visibleElements:o}=s,u=this._messagesTooltip.sketch;return a(v,{className:Ue.base,helpMessage:this._getHelpMessage()},o.elevation&&i!=="2d"&&a(r,{title:u.elevation,value:this._formatVerticalLength(n)}),o.area&&a(r,{title:u.area,value:this._formatArea(t)}))}};q=l([h("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")],q);const We={base:`${c} ${`${c}--draw-polyline`}`};let Y=class extends p{render(){const{elevation:t,totalLength:n,tooltipOptions:s,viewType:i}=this.info,{visibleElements:o}=s,u=this._messagesTooltip.sketch;return a(v,{className:We.base,helpMessage:this._getHelpMessage()},o.elevation&&i!=="2d"&&a(r,{title:u.elevation,value:this._formatVerticalLength(t)}),o.totalLength&&a(r,{title:u.totalLength,value:this._formatLength(n)}))}};Y=l([h("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")],Y);const Ze={base:`${c} ${`${c}--draw-rectangle`}`};let J=class extends p{render(){const{area:t,xSize:n,ySize:s,tooltipOptions:i}=this.info,{visibleElements:o}=i,u=this._messagesTooltip.sketch;return a(v,{className:Ze.base,helpMessage:this._getHelpMessage()},o.size&&n!=null&&s!=null&&a(r,{title:u.size,value:a(b,{left:this._formatLength(n),right:this._formatLength(s)})}),o.area&&a(r,{title:u.area,value:this._formatArea(t)}))}};J=l([h("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")],J);const je={base:`${c} ${`${c}--extent-rotate`}`};let Q=class extends p{render(){const{angle:e,tooltipOptions:t}=this.info,{visibleElements:n}=t,s=this._messagesTooltip.sketch;return a(v,{className:je.base,helpMessage:this._getHelpMessage()},n.rotation&&a(r,{title:s.rotation,value:this._formatRelativeOrientation(e)}))}};Q=l([h("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],Q);const Ae={base:`${c} ${`${c}--extent-scale`}`};let K=class extends p{render(){const t=this.info,{visibleElements:n}=t.tooltipOptions,s=this._messagesTooltip.sketch;return a(v,{className:Ae.base,helpMessage:this._getHelpMessage()},n.size&&a(r,{title:s.size,value:a(b,{left:this._formatLength(t.xSize),right:this._formatLength(t.ySize)})}),n.scale&&a(r,{title:s.scale,value:a(b,{left:this._formatScale(t.xScale),right:this._formatScale(t.yScale)})}))}};K=l([h("esri.views.interactive.tooltip.content.TooltipContentExtentScale")],K);const Fe={base:`${c} ${`${c}--reshape-edge-offset`}`};let tt=class extends p{render(){const{area:t,distance:n,totalLength:s,tooltipOptions:i}=this.info,{visibleElements:o}=i,u=this._messagesTooltip.sketch;return a(v,{className:Fe.base,helpMessage:this._getHelpMessage()},o.distance&&a(r,{title:u.distance,value:this._formatRelativeLength(n)}),o.area&&t!=null&&a(r,{title:u.area,value:this._formatArea(t)}),o.totalLength&&s!=null&&a(r,{title:u.totalLength,value:this._formatLength(s)}))}};tt=l([h("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")],tt);const Be={base:`${c} ${`${c}--transform-absolute`}`};let et=class extends p{render(){const{info:t}=this,{visibleElements:n}=t.tooltipOptions,s=this._messagesTooltip.sketch;return a(v,{className:Be.base,helpMessage:this._getHelpMessage()},n.orientation&&t.orientation!=null&&a(r,{key:"orientation",title:s.orientation,value:Ht(t.orientation,t.rotationType,t.orientationPrecision)}),n.size&&t.size!=null&&a(r,{key:"size",title:s.size,value:this._formatLength(t.size,t.sizeUnit,t.sizePrecision)}))}};et=l([h("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")],et);const Ge={base:`${c} ${`${c}--transform-rotate`}`};let nt=class extends p{render(){const{info:t}=this,{visibleElements:n}=t.tooltipOptions,s=this._messagesTooltip.sketch;return a(v,{className:Ge.base,helpMessage:this._getHelpMessage()},n.rotation&&t.rotation!=null&&a(r,{key:"rotation",title:s.rotation,value:Re(t.rotation,t.rotationType,t.rotationPrecision)}),n.orientation&&t.orientation!=null&&a(r,{key:"orientation",title:s.orientation,value:Ht(t.orientation,t.rotationType,t.orientationPrecision)}))}};nt=l([h("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")],nt);const Ie={base:`${c} ${`${c}--transform-scale`}`};let st=class extends p{render(){const{info:t}=this,{visibleElements:n}=t.tooltipOptions,s=this._messagesTooltip.sketch;return a(v,{className:Ie.base,helpMessage:this._getHelpMessage()},n.scale&&t.scale!=null&&a(r,{key:"scale",title:s.scale,value:this._formatPercentage(t.scale)}),n.size&&t.size!=null&&a(r,{key:"size",title:s.size,value:this._formatLength(t.size,t.sizeUnit,t.sizePrecision)}))}};st=l([h("esri.views.interactive.tooltip.content.TooltipContentTransformScale")],st);const Xe={base:`${c} ${`${c}--translate-graphic`}`};let it=class extends p{render(){const{info:t}=this,{visibleElements:n}=t.tooltipOptions,s=this._messagesTooltip.sketch;return a(v,{className:Xe.base,helpMessage:this._getHelpMessage()},n.distance&&a(r,{title:s.distance,value:this._formatLength(t.distance)}))}};it=l([h("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphic")],it);const qe={base:`${c} ${`${c}--translate-graphic-xy`}`};let at=class extends p{render(){const{info:t}=this,{visibleElements:n}=t.tooltipOptions,s=this._messagesTooltip.sketch;return a(v,{className:qe.base,helpMessage:this._getHelpMessage()},n.distance&&a(r,{title:s.distance,value:this._formatRelativeLength(t.distance)}))}};at=l([h("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicXY")],at);const Ye={base:`${c} ${`${c}--translate-graphic-z`}`};let ot=class extends p{render(){const{info:e}=this,{visibleElements:t}=e.tooltipOptions,n=this._messagesTooltip.sketch;return a(v,{className:Ye.base,helpMessage:this._getHelpMessage()},t.distance&&a(r,{title:n.distance,value:this._formatRelativeVerticalLength(e.distance)}))}};ot=l([h("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicZ")],ot);const Je={base:`${c} ${`${c}--translate-vertex`}`};let lt=class extends p{render(){const{distance:t,elevation:n,area:s,totalLength:i,tooltipOptions:o}=this.info,{visibleElements:u}=o,f=this._messagesTooltip.sketch;return a(v,{className:Je.base,helpMessage:this._getHelpMessage()},u.distance&&a(r,{title:f.distance,value:this._formatLength(t)}),u.elevation&&n!=null&&a(r,{title:f.elevation,value:this._formatVerticalLength(n)}),u.area&&s!=null&&a(r,{title:f.area,value:this._formatArea(s)}),u.totalLength&&i!=null&&a(r,{title:f.totalLength,value:this._formatLength(i)}))}};lt=l([h("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],lt);const Qe={base:`${c} ${`${c}--translate-vertex`}`};let rt=class extends p{render(){const{area:t,distance:n,elevation:s,totalLength:i,tooltipOptions:o}=this.info,{visibleElements:u}=o,f=this._messagesTooltip.sketch;return a(v,{className:Qe.base,helpMessage:this._getHelpMessage()},u.distance&&a(r,{title:f.distance,value:this._formatRelativeLength(n)}),u.elevation&&s!=null&&a(r,{title:f.elevation,value:this._formatVerticalLength(s)}),u.area&&t!=null&&a(r,{title:f.area,value:this._formatArea(t)}),u.totalLength&&i!=null&&a(r,{title:f.totalLength,value:this._formatLength(i)}))}};rt=l([h("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexXY")],rt);const Ke={base:`${c} ${`${c}--translate-vertex`}`};let ct=class extends p{render(){const{distance:t,elevation:n,tooltipOptions:s}=this.info,{visibleElements:i}=s,o=this._messagesTooltip.sketch;return a(v,{className:Ke.base,helpMessage:this._getHelpMessage()},i.distance&&a(r,{title:o.distance,value:this._formatRelativeVerticalLength(t)}),i.elevation&&n!=null&&a(r,{title:o.elevation,value:this._formatVerticalLength(n)}))}};ct=l([h("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexZ")],ct);function tn(e,t){if(t==null)return null;const n=document.createElement("div");switch(t.type){case"draw-point":return new X({tooltip:e,info:t,container:n});case"draw-polygon":return new q({tooltip:e,info:t,container:n});case"draw-polyline":return new Y({tooltip:e,info:t,container:n});case"draw-mesh":return new I({tooltip:e,info:t,container:n});case"draw-rectangle":return new J({tooltip:e,info:t,container:n});case"draw-circle":return new G({tooltip:e,info:t,container:n});case"extent-rotate":return new Q({tooltip:e,info:t,container:n});case"extent-scale":return new K({tooltip:e,info:t,container:n});case"transform-absolute":return new et({tooltip:e,info:t,container:n});case"transform-rotate":return new nt({tooltip:e,info:t,container:n});case"transform-scale":return new st({tooltip:e,info:t,container:n});case"translate-graphic":return new it({tooltip:e,info:t,container:n});case"translate-graphic-z":return new ot({tooltip:e,info:t,container:n});case"translate-graphic-xy":return new at({tooltip:e,info:t,container:n});case"translate-vertex":return new lt({tooltip:e,info:t,container:n});case"translate-vertex-z":return new ct({tooltip:e,info:t,container:n});case"translate-vertex-xy":return new rt({tooltip:e,info:t,container:n});case"reshape-edge-offset":return new tt({tooltip:e,info:t,container:n})}}const en={base:`${z}`};let T=class extends xt{constructor(t){super(t),this.info=null,this._contentContainer=(()=>{const n=document.createElement("div");return n.classList.add(en.base),n})(),this._contentWidget=null}initialize(){const t=this._contentContainer;this.addHandles([U(()=>{var n;return(n=this.view.overlay)==null?void 0:n.surface},n=>{t.remove(),n==null||n.appendChild(t)},W),U(()=>this.info,(n,s)=>{if(this._contentWidget!=null&&n!=null&&s!=null&&n.type===s.type)this._contentWidget.info=n;else{this._contentWidget=_t(this._contentWidget);const i=tn(this,n);i&&(this._contentWidget=i,i.container&&t.appendChild(i.container))}},W),U(()=>({container:this._contentContainer,contentWidget:this._contentWidget,screenPoint:this._screenPoint}),nn,W)])}destroy(){this._contentWidget=_t(this._contentWidget),this._contentContainer.remove()}clear(){this.info=null}get _screenPoint(){const t=this.view.inputManager;return t!=null&&t.multiTouchActive?null:t==null?void 0:t.latestPointerLocation}get test(){var t;return{contentContainer:this._contentContainer,visible:((t=this._contentContainer)==null?void 0:t.style.display)!=="none"}}};function nn({container:e,contentWidget:t,screenPoint:n}){const{style:s}=e;if(n!=null&&t!=null){s.display="block";const i=ne(e),o=`translate(${Math.round(n.x)+wt[0]*(i?-1:1)}px, ${Math.round(n.y)+wt[1]}px)`;s.transform=i?`translate(-100%, 0) ${o}`:o}else s.display="none"}l([g({nonNullable:!0})],T.prototype,"view",void 0),l([g()],T.prototype,"info",void 0),l([g()],T.prototype,"_contentContainer",void 0),l([g()],T.prototype,"_contentWidget",void 0),l([g()],T.prototype,"_screenPoint",null),T=l([h("esri.views.interactive.tooltip.Tooltip")],T);const wt=[20,20];function Et(e){const t=he(e),n=t===fe?ve:t;return se(e,n)?n:e}function Ot(e,t,n,s,...i){return ie(e)&&ae(e)?t.apply(void 0,i):oe(e)?n.apply(void 0,i):s.apply(void 0,i)}var _;function St(e){return Nt(e,_.Direct)}function Vt(e){return Nt(e,_.Horizontal)}function Nt(e,t){const{hasZ:n,spatialReference:s}=e,i=Et(s);let o=0;const u=zt(i);if(u==null)return null;const f=t===_.Direct?Dt:k;for(const M of e.paths){if(M.length<2)continue;const R=M.length-1;for(let w=0;w<R;++w){const L=M[w];m[0]=L[0],m[1]=L[1],m[2]=n?L[2]:0;const x=M[w+1];$[0]=x[0],$[1]=x[1],$[2]=n?x[2]:0;const $t=f(m,$,s);if($t==null)return null;o+=$t.value}}return d(o,u)}function N(e,t){const{spatialReference:n}=e;return pt(n,t.spatialReference)?(m[0]=e.x,m[1]=e.y,m[2]=e.hasZ?e.z:0,$[0]=t.x,$[1]=t.y,$[2]=t.hasZ?t.z:0,k(m,$,n)):null}function Zn(e,t){const{spatialReference:n}=e;return pt(n,t.spatialReference)?(m[0]=e.x,m[1]=e.y,m[2]=e.hasZ?e.z:0,$[0]=t.x,$[1]=t.y,$[2]=t.hasZ?t.z:0,sn(m,$,n)):null}function jn(e){return m[0]=e.x,m[1]=e.y,m[2]=e.hasZ?e.z:0,an(m,e.spatialReference)}function Dt(e,t,n){const s=vt(e,t,n,_.Direct);return s!=null?d(s.direct,s.unit):null}function k(e,t,n){const s=vt(e,t,n,_.Horizontal);return s!=null?d(s.horizontal,s.unit):null}function sn(e,t,n){const s=vt(e,t,n,_.Vertical);return s!=null?d(s.verticalSigned,s.unit):null}function an(e,t){const n=le(t);return n!=null?d(e[2],n):null}function vt(e,t,n,s){const i=Et(n),o=zt(i);if(o==null)return null;const u=t[2]-e[2];if(s===_.Vertical)return{verticalSigned:u,unit:o};if(!Z(e,n,B,i)||!Z(t,n,E,i))return null;if(s===_.Direct)return{direct:j(E,B),unit:o};if(re(O,e[0],e[1],t[2]),!Z(O,n,O,i))return null;const f=j(O,E);return s===_.Horizontal?{horizontal:f,unit:o}:{direct:j(E,B),horizontal:f,vertical:Math.abs(u),unit:o}}(function(e){e[e.Direct=0]="Direct",e[e.Horizontal=1]="Horizontal",e[e.Vertical=2]="Vertical"})(_||(_={}));const m=y(),$=y(),B=y(),E=y(),O=y();function Pt(e){const{spatialReference:t}=e;return Ot(t,cn,un,pn,e)}function Ut(e,t){if(!pt(e.spatialReference,t.spatialReference))return null;const{spatialReference:n}=e;return S[0]=e.x,S[1]=e.y,S[2]=e.hasZ?e.z:0,V[0]=t.x,V[1]=t.y,V[2]=t.hasZ?t.z:0,gt(S,V,n)}function gt(e,t,n){return Ot(n,on,ln,rn,e,t,n)}function on(e,t,n){return d(ht(mt,e,t,n).distance,"meters")}function ln(e,t,n){return d(Ct(hn(e,t,n),"meters"),"meters")}function rn(e,t,n){return bt(e,n,Tt)&&bt(t,n,Mt)?d(ht(mt,Tt,Mt).distance,"meters"):null}function cn(e){return d(ce([e],"meters")[0],"meters")}function un(e){return d(Ct(e,"meters"),"meters")}function pn(e){const t=[];if(!ue(e,t))return null;let n=0;for(const s of t){let i=0;for(let o=1;o<s.length;++o)i+=ht(mt,s[o-1],s[o]).distance;n+=i}return d(n,"meters")}function hn(e,t,n){return{type:"polyline",spatialReference:n,paths:[[[...e],[...t]]]}}const mt=new pe,S=y(),V=y(),Tt=y(),Mt=y();function An(e,t){return C(St,Pt,Vt,t,e)}function Fn(e,t,n,s){return C(Dt,gt,k,s,e,t,n)}function Bn(e,t,n){return C(N,Ut,N,n,e,t)}function Gn(e,t,n,s){return C(k,gt,k,s,e,t,n)}function In(e){return C(St,Pt,Vt,"on-the-ground",e)}function Xn(e,t){return C(N,Ut,N,"on-the-ground",e,t)}function C(e,t,n,s,...i){if(s==="on-the-ground"){const o=t.apply(void 0,i);return o??n.apply(void 0,i)}return e.apply(void 0,i)}export{jn as R,_n as U,Xn as a,mn as b,Gn as c,T as d,Ot as e,Fn as f,In as g,$n as h,Et as i,gt as j,sn as k,me as l,dn as m,$e as o,An as p,yt as q,d as r,Bn as s,H as t,Zn as y};