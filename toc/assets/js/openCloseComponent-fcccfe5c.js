import{_ as Ht,b as Vt}from"./index-95bf5a29.js";import{g as $t,a as _t}from"./browser-14ab28bd.js";import{d as Ut}from"./debounce-9700caea.js";function M(t){return t.split("-")[1]}function ft(t){return t==="y"?"height":"width"}function k(t){return t.split("-")[0]}function G(t){return["top","bottom"].includes(k(t))?"x":"y"}function gt(t,e,n){let{reference:o,floating:i}=t;const r=o.x+o.width/2-i.width/2,s=o.y+o.height/2-i.height/2,c=G(e),l=ft(c),a=o[l]/2-i[l]/2,g=k(e),u=c==="x";let f;switch(g){case"top":f={x:r,y:o.y-i.height};break;case"bottom":f={x:r,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:s};break;case"left":f={x:o.x-i.width,y:s};break;default:f={x:o.x,y:o.y}}switch(M(e)){case"start":f[c]-=a*(n&&u?-1:1);break;case"end":f[c]+=a*(n&&u?-1:1);break}return f}const jt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,c=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:g,y:u}=gt(a,o,l),f=o,m={},d=0;for(let h=0;h<c.length;h++){const{name:p,fn:x}=c[h],{x:w,y:v,data:O,reset:y}=await x({x:g,y:u,initialPlacement:o,placement:f,strategy:i,middlewareData:m,rects:a,platform:s,elements:{reference:t,floating:e}});if(g=w??g,u=v??u,m={...m,[p]:{...m[p],...O}},y&&d<=50){d++,typeof y=="object"&&(y.placement&&(f=y.placement),y.rects&&(a=y.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):y.rects),{x:g,y:u}=gt(a,f,l)),h=-1;continue}}return{x:g,y:u,placement:f,strategy:i,middlewareData:m}};function U(t,e){return typeof t=="function"?t(e):t}function zt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Et(t){return typeof t!="number"?zt(t):{top:t,right:t,bottom:t,left:t}}function Q(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function Y(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:g="viewport",elementContext:u="floating",altBoundary:f=!1,padding:m=0}=U(e,t),d=Et(m),p=c[f?u==="floating"?"reference":"floating":u],x=Q(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(p)))==null||n?p:p.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:a,rootBoundary:g,strategy:l})),w=u==="floating"?{...s.floating,x:o,y:i}:s.reference,v=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),O=await(r.isElement==null?void 0:r.isElement(v))?await(r.getScale==null?void 0:r.getScale(v))||{x:1,y:1}:{x:1,y:1},y=Q(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:v,strategy:l}):w);return{top:(x.top-y.top+d.top)/O.y,bottom:(y.bottom-x.bottom+d.bottom)/O.y,left:(x.left-y.left+d.left)/O.x,right:(y.right-x.right+d.right)/O.x}}const rt=Math.min,Xt=Math.max;function ct(t,e,n){return Xt(t,rt(e,n))}const Yt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:c}=e,{element:l,padding:a=0}=U(t,e)||{};if(l==null)return{};const g=Et(a),u={x:n,y:o},f=G(i),m=ft(f),d=await s.getDimensions(l),h=f==="y",p=h?"top":"left",x=h?"bottom":"right",w=h?"clientHeight":"clientWidth",v=r.reference[m]+r.reference[f]-u[f]-r.floating[m],O=u[f]-r.reference[f],y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let C=y?y[w]:0;(!C||!await(s.isElement==null?void 0:s.isElement(y)))&&(C=c.floating[w]||r.floating[m]);const A=v/2-O/2,S=C/2-d[m]/2-1,W=rt(g[p],S),D=rt(g[x],S),b=W,R=C-d[m]-D,P=C/2-d[m]/2+A,T=ct(b,P,R),I=M(i)!=null&&P!=T&&r.reference[m]/2-(P<b?W:D)-d[m]/2<0?P<b?b-P:R-P:0;return{[f]:u[f]-I,data:{[f]:T,centerOffset:P-T+I}}}}),St=["top","right","bottom","left"],pt=St.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]),Gt={left:"right",right:"left",bottom:"top",top:"bottom"};function Z(t){return t.replace(/left|right|bottom|top/g,e=>Gt[e])}function Lt(t,e,n){n===void 0&&(n=!1);const o=M(t),i=G(t),r=ft(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Z(s)),{main:s,cross:Z(s)}}const qt={start:"end",end:"start"};function tt(t){return t.replace(/start|end/g,e=>qt[e])}function Jt(t,e,n){return(t?[...n.filter(i=>M(i)===t),...n.filter(i=>M(i)!==t)]:n.filter(i=>k(i)===i)).filter(i=>t?M(i)===t||(e?tt(i)!==i:!1):!0)}const Kt=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:r,middlewareData:s,placement:c,platform:l,elements:a}=e,{crossAxis:g=!1,alignment:u,allowedPlacements:f=pt,autoAlignment:m=!0,...d}=U(t,e),h=u!==void 0||f===pt?Jt(u||null,m,f):f,p=await Y(e,d),x=((n=s.autoPlacement)==null?void 0:n.index)||0,w=h[x];if(w==null)return{};const{main:v,cross:O}=Lt(w,r,await(l.isRTL==null?void 0:l.isRTL(a.floating)));if(c!==w)return{reset:{placement:h[0]}};const y=[p[k(w)],p[v],p[O]],C=[...((o=s.autoPlacement)==null?void 0:o.overflows)||[],{placement:w,overflows:y}],A=h[x+1];if(A)return{data:{index:x+1,overflows:C},reset:{placement:A}};const S=C.map(b=>{const R=M(b.placement);return[b.placement,R&&g?b.overflows.slice(0,2).reduce((P,T)=>P+T,0):b.overflows[0],b.overflows]}).sort((b,R)=>b[1]-R[1]),D=((i=S.filter(b=>b[2].slice(0,M(b[0])?2:3).every(R=>R<=0))[0])==null?void 0:i[0])||S[0][0];return D!==c?{data:{index:x+1,overflows:C},reset:{placement:D}}:{}}}};function Qt(t){const e=Z(t);return[tt(t),e,tt(e)]}function Zt(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function te(t,e,n,o){const i=M(t);let r=Zt(k(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(tt)))),r}const ht=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:r,initialPlacement:s,platform:c,elements:l}=e,{mainAxis:a=!0,crossAxis:g=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:d=!0,...h}=U(t,e),p=k(o),x=k(s)===s,w=await(c.isRTL==null?void 0:c.isRTL(l.floating)),v=u||(x||!d?[Z(s)]:Qt(s));!u&&m!=="none"&&v.push(...te(s,d,m,w));const O=[s,...v],y=await Y(e,h),C=[];let A=((n=i.flip)==null?void 0:n.overflows)||[];if(a&&C.push(y[p]),g){const{main:b,cross:R}=Lt(o,r,w);C.push(y[b],y[R])}if(A=[...A,{placement:o,overflows:C}],!C.every(b=>b<=0)){var S,W;const b=(((S=i.flip)==null?void 0:S.index)||0)+1,R=O[b];if(R)return{data:{index:b,overflows:A},reset:{placement:R}};let P=(W=A.filter(T=>T.overflows[0]<=0).sort((T,V)=>T.overflows[1]-V.overflows[1])[0])==null?void 0:W.placement;if(!P)switch(f){case"bestFit":{var D;const T=(D=A.map(V=>[V.placement,V.overflows.filter(I=>I>0).reduce((I,It)=>I+It,0)]).sort((V,I)=>V[1]-I[1])[0])==null?void 0:D[0];T&&(P=T);break}case"initialPlacement":P=s;break}if(o!==P)return{reset:{placement:P}}}return{}}}};function wt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function xt(t){return St.some(e=>t[e]>=0)}const ee=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=U(t,e);switch(o){case"referenceHidden":{const r=await Y(e,{...i,elementContext:"reference"}),s=wt(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:xt(s)}}}case"escaped":{const r=await Y(e,{...i,altBoundary:!0}),s=wt(r,n.floating);return{data:{escapedOffsets:s,escaped:xt(s)}}}default:return{}}}}};async function ne(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=k(n),c=M(n),l=G(n)==="x",a=["left","top"].includes(s)?-1:1,g=r&&l?-1:1,u=U(e,t);let{mainAxis:f,crossAxis:m,alignmentAxis:d}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof d=="number"&&(m=c==="end"?d*-1:d),l?{x:m*g,y:f*a}:{x:f*a,y:m*g}}const oe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await ne(e,t);return{x:n+i.x,y:o+i.y,data:i}}}};function ie(t){return t==="x"?"y":"x"}const se=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:p=>{let{x,y:w}=p;return{x,y:w}}},...l}=U(t,e),a={x:n,y:o},g=await Y(e,l),u=G(k(i)),f=ie(u);let m=a[u],d=a[f];if(r){const p=u==="y"?"top":"left",x=u==="y"?"bottom":"right",w=m+g[p],v=m-g[x];m=ct(w,m,v)}if(s){const p=f==="y"?"top":"left",x=f==="y"?"bottom":"right",w=d+g[p],v=d-g[x];d=ct(w,d,v)}const h=c.fn({...e,[u]:m,[f]:d});return{...h,data:{x:h.x-n,y:h.y-o}}}}};function E(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function L(t){return E(t).getComputedStyle(t)}function Ft(t){return t instanceof E(t).Node}function H(t){return Ft(t)?(t.nodeName||"").toLowerCase():"#document"}function F(t){return t instanceof E(t).HTMLElement}function B(t){return t instanceof E(t).Element}function yt(t){return typeof ShadowRoot>"u"?!1:t instanceof E(t).ShadowRoot||t instanceof ShadowRoot}function q(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function re(t){return["table","td","th"].includes(H(t))}function ut(t){const e=dt(),n=L(t);return n.transform!=="none"||n.perspective!=="none"||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function dt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function it(t){return["html","body","#document"].includes(H(t))}const vt=Math.min,X=Math.max,et=Math.round,J=Math.floor,$=t=>({x:t,y:t});function Dt(t){const e=L(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=F(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=et(n)!==r||et(o)!==s;return c&&(n=r,o=s),{width:n,height:o,$:c}}function mt(t){return B(t)?t:t.contextElement}function j(t){const e=mt(t);if(!F(e))return $(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Dt(e);let s=(r?et(n.width):n.width)/o,c=(r?et(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const bt=$(0);function Mt(t,e,n){var o,i;if(e===void 0&&(e=!0),!dt())return bt;const r=t?E(t):window;return!n||e&&n!==r?bt:{x:((o=r.visualViewport)==null?void 0:o.offsetLeft)||0,y:((i=r.visualViewport)==null?void 0:i.offsetTop)||0}}function _(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=mt(t);let s=$(1);e&&(o?B(o)&&(s=j(o)):s=j(t));const c=Mt(r,n,o);let l=(i.left+c.x)/s.x,a=(i.top+c.y)/s.y,g=i.width/s.x,u=i.height/s.y;if(r){const f=E(r),m=o&&B(o)?E(o):o;let d=f.frameElement;for(;d&&o&&m!==f;){const h=j(d),p=d.getBoundingClientRect(),x=getComputedStyle(d),w=p.left+(d.clientLeft+parseFloat(x.paddingLeft))*h.x,v=p.top+(d.clientTop+parseFloat(x.paddingTop))*h.y;l*=h.x,a*=h.y,g*=h.x,u*=h.y,l+=w,a+=v,d=E(d).frameElement}}return Q({width:g,height:u,x:l,y:a})}function N(t){return((Ft(t)?t.ownerDocument:t.document)||window.document).documentElement}function st(t){return B(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ce(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=F(n),r=N(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},c=$(1);const l=$(0);if((i||!i&&o!=="fixed")&&((H(n)!=="body"||q(r))&&(s=st(n)),F(n))){const a=_(n);c=j(n),l.x=a.x+n.clientLeft,l.y=a.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-s.scrollLeft*c.x+l.x,y:e.y*c.y-s.scrollTop*c.y+l.y}}function kt(t){return _(N(t)).left+st(t).scrollLeft}function le(t){const e=N(t),n=st(t),o=t.ownerDocument.body,i=X(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=X(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+kt(t);const c=-n.scrollTop;return L(o).direction==="rtl"&&(s+=X(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:c}}function z(t){if(H(t)==="html")return t;const e=t.assignedSlot||t.parentNode||yt(t)&&t.host||N(t);return yt(e)?e.host:e}function Bt(t){const e=z(t);return it(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&q(e)?e:Bt(e)}function nt(t,e){var n;e===void 0&&(e=[]);const o=Bt(t),i=o===((n=t.ownerDocument)==null?void 0:n.body),r=E(o);return i?e.concat(r,r.visualViewport||[],q(o)?o:[]):e.concat(o,nt(o))}function ae(t,e){const n=E(t),o=N(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,c=0,l=0;if(i){r=i.width,s=i.height;const a=dt();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:c,y:l}}function fe(t,e){const n=_(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=F(t)?j(t):$(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,l=i*r.x,a=o*r.y;return{width:s,height:c,x:l,y:a}}function Ot(t,e,n){let o;if(e==="viewport")o=ae(t,n);else if(e==="document")o=le(N(t));else if(B(e))o=fe(e,n);else{const i=Mt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return Q(o)}function Nt(t,e){const n=z(t);return n===e||!B(n)||it(n)?!1:L(n).position==="fixed"||Nt(n,e)}function ue(t,e){const n=e.get(t);if(n)return n;let o=nt(t).filter(c=>B(c)&&H(c)!=="body"),i=null;const r=L(t).position==="fixed";let s=r?z(t):t;for(;B(s)&&!it(s);){const c=L(s),l=ut(s);!l&&c.position==="fixed"&&(i=null),(r?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||q(s)&&!l&&Nt(t,s))?o=o.filter(g=>g!==s):i=c,s=z(s)}return e.set(t,o),o}function de(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?ue(e,this._c):[].concat(n),o],c=s[0],l=s.reduce((a,g)=>{const u=Ot(e,g,i);return a.top=X(u.top,a.top),a.right=vt(u.right,a.right),a.bottom=vt(u.bottom,a.bottom),a.left=X(u.left,a.left),a},Ot(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function me(t){return Dt(t)}function Ct(t,e){return!F(t)||L(t).position==="fixed"?null:e?e(t):t.offsetParent}function ge(t){let e=z(t);for(;F(e)&&!it(e);){if(ut(e))return e;e=z(e)}return null}function At(t,e){const n=E(t);if(!F(t))return n;let o=Ct(t,e);for(;o&&re(o)&&L(o).position==="static";)o=Ct(o,e);return o&&(H(o)==="html"||H(o)==="body"&&L(o).position==="static"&&!ut(o))?n:o||ge(t)||n}function pe(t,e,n){const o=F(e),i=N(e),r=n==="fixed",s=_(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=$(0);if(o||!o&&!r)if((H(e)!=="body"||q(i))&&(c=st(e)),F(e)){const a=_(e,!0,r,e);l.x=a.x+e.clientLeft,l.y=a.y+e.clientTop}else i&&(l.x=kt(i));return{x:s.left+c.scrollLeft-l.x,y:s.top+c.scrollTop-l.y,width:s.width,height:s.height}}const lt={getClippingRect:de,convertOffsetParentRelativeRectToViewportRelativeRect:ce,isElement:B,getDimensions:me,getOffsetParent:At,getDocumentElement:N,getScale:j,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||At,r=this.getDimensions;return{reference:pe(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>L(t).direction==="rtl"};function he(t,e){let n=null,o;const i=N(t);function r(){clearTimeout(o),n&&n.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const{left:a,top:g,width:u,height:f}=t.getBoundingClientRect();if(c||e(),!u||!f)return;const m=J(g),d=J(i.clientWidth-(a+u)),h=J(i.clientHeight-(g+f)),p=J(a),x=-m+"px "+-d+"px "+-h+"px "+-p+"px";let w=!0;n=new IntersectionObserver(v=>{const O=v[0].intersectionRatio;if(O!==l){if(!w)return s();O===0?o=setTimeout(()=>{s(!1,1e-7)},100):s(!1,O)}w=!1},{rootMargin:x,threshold:l}),n.observe(t)}return s(!0),r}function we(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=!0,layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=mt(t),g=i||r?[...a?nt(a):[],...nt(e)]:[];g.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),r&&p.addEventListener("resize",n)});const u=a&&c?he(a,n):null;let f=null;s&&(f=new ResizeObserver(n),a&&!l&&f.observe(a),f.observe(e));let m,d=l?_(t):null;l&&h();function h(){const p=_(t);d&&(p.x!==d.x||p.y!==d.y||p.width!==d.width||p.height!==d.height)&&n(),d=p,m=requestAnimationFrame(h)}return n(),()=>{g.forEach(p=>{i&&p.removeEventListener("scroll",n),r&&p.removeEventListener("resize",n)}),u&&u(),f&&f.disconnect(),f=null,l&&cancelAnimationFrame(m)}}const xe=(t,e,n)=>{const o=new Map,i={platform:lt,...n},r={...i.platform,_c:o};return jt(t,e,{...i,platform:r})},ye=globalThis.calciteComponentsConfig,ve={floatingUINonChromiumPositioningFix:!0,...ye},be=Ce();function Oe(){const t=_t();return t!=null&&t.brands?!!t.brands.find(({brand:e,version:n})=>(e==="Google Chrome"||e==="Chromium")&&Number(n)>=109):!!navigator.userAgent.split(" ").find(e=>{const[n,o]=e.split("/");return n==="Chrome"&&parseInt(o)>=109})}async function Ce(){if(ve.floatingUINonChromiumPositioningFix&&(/firefox|safari/i.test($t())||Oe())){const{offsetParent:t}=await Ht(()=>import("./composed-offset-position.esm-09633c10.js"),[],import.meta.url),e=lt.getOffsetParent;lt.getOffsetParent=n=>e(n,t)}}const Wt=async(t,{referenceEl:e,floatingEl:n,overlayPositioning:o="absolute",placement:i,flipDisabled:r,flipPlacements:s,offsetDistance:c,offsetSkidding:l,arrowEl:a,type:g})=>{var O;if(!e||!n)return null;await be;const{x:u,y:f,placement:m,strategy:d,middlewareData:h}=await xe(e,n,{strategy:o,placement:i==="auto"||i==="auto-start"||i==="auto-end"?void 0:Re(n,i),middleware:Pe({placement:i,flipDisabled:r,flipPlacements:s,offsetDistance:c,offsetSkidding:l,arrowEl:a,type:g})});if(a&&h.arrow){const{x:y,y:C}=h.arrow,A=m.split("-")[0],S=y!=null?"left":"top",W=Ee[A],D={left:"",top:"",bottom:"",right:""};"floatingLayout"in t&&(t.floatingLayout=A==="left"||A==="right"?"horizontal":"vertical"),Object.assign(a.style,{...D,[S]:`${S=="left"?y:C}px`,[A]:"100%",transform:W})}const x=((O=h.hide)==null?void 0:O.referenceHidden)?"hidden":null,w=x?"none":null;n.setAttribute(Ae,m);const v=`translate(${Math.round(u)}px,${Math.round(f)}px)`;Object.assign(n.style,{visibility:x,pointerEvents:w,position:d,top:"0",left:"0",transform:v})},Ae="data-placement",Pt=100,Rt=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],Ne="bottom-start",We={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function Pe({placement:t,flipDisabled:e,flipPlacements:n,offsetDistance:o,offsetSkidding:i,arrowEl:r,type:s}){const c=[se(),ee()];if(s==="menu")return[...c,ht({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if(s==="popover"||s==="tooltip"){const l=[...c,oe({mainAxis:typeof o=="number"?o:0,crossAxis:typeof i=="number"?i:0})];return t==="auto"||t==="auto-start"||t==="auto-end"?l.push(Kt({alignment:t==="auto-start"?"start":t==="auto-end"?"end":null})):e||l.push(ht(n?{fallbackPlacements:n}:{})),r&&l.push(Yt({element:r})),l}return[]}function Ie(t,e){const n=t.filter(o=>Rt.includes(o));return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${Rt.map(o=>`"${o}"`).join(", ").trim()}`,{el:e}),n}function Re(t,e){const n=["left","right"];return Vt(t)==="rtl"&&n.reverse(),e.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function He(t,e,n=!1){return t.open?(n?Te(t):Wt)(t,e):void 0}function Te(t){let e=ot.get(t);return e||(e=Ut(Wt,Pt,{leading:!0,maxWait:Pt}),ot.set(t,e),e)}const Ee={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"},at=new WeakMap,ot=new WeakMap;function Ve(t,e,n){if(!n||!e)return;Se(t,e,n),Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:t.overlayPositioning,top:"0",left:"0"});const o=we;at.set(t,o(e,n,()=>t.reposition()))}function Se(t,e,n){var o,i;!n||!e||((o=at.get(t))==null||o(),at.delete(t),(i=ot.get(t))==null||i.cancel(),ot.delete(t))}const Tt=4,$e=Math.ceil(Math.hypot(Tt,Tt));/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const K=new WeakMap;function Le(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onBeforeOpen():this.onBeforeClose())}function Fe(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onOpen():this.onClose())}function _e(t){if(De(t),t.transitionEl){const e=Le.bind(t),n=Fe.bind(t);K.set(t,[t.transitionEl,e,n]),t.transitionEl.addEventListener("transitionstart",e),t.transitionEl.addEventListener("transitionend",n)}}function De(t){if(!K.has(t))return;const[e,n,o]=K.get(t);e.removeEventListener("transitionstart",n),e.removeEventListener("transitionend",o),K.delete(t)}export{We as F,Ve as a,Se as b,_e as c,$e as d,De as e,Ie as f,Ne as g,He as r};