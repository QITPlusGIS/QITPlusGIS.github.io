import{bX as at,ig as Z,ih as ft,gy as C,ii as q,ij as p,ik as Tt,gj as Ot,il as mt,g8 as Rt,im as pt,io as At,fV as Et,ip as I,iq as bt,ir as g,bD as E,aG as Nt,cq as D,is as $,it as tt,iu as k,iv as et,gA as z,iw as nt,ix as ot,fY as it,gz as P,iy as Ft,de as T}from"./index-285b86bc.js";function X(o){return o?{ray:Z(o.ray),c0:o.c0,c1:o.c1}:{ray:Z(),c0:0,c1:Number.MAX_VALUE}}function Gt(o,t=X()){return ft(o,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function Dt(o,t){return dt(o,o.c0,t)}function yt(o,t){return dt(o,o.c1,t)}function dt(o,t,e){return C(e,o.ray.origin,q(e,o.ray.direction,t))}new at(()=>X());function vt(o){return o?[p(o[0]),p(o[1]),p(o[2]),p(o[3]),p(o[4]),p(o[5])]:[p(),p(),p(),p(),p(),p()]}function gt(){return[E(),E(),E(),E(),E(),E(),E(),E()]}function wt(o,t){for(let e=0;e<Y;e++)Tt(o[e],t[e])}function Ct(o,t,e,n=xt){const i=Ot(mt.get(),t,o);Rt(i,i);for(let s=0;s<St;++s){const r=pt(At.get(),Bt[s],i);Et(n[s],r[0]/r[3],r[1]/r[3],r[2]/r[3])}Mt(e,n)}function Mt(o,t){I(t[h.FAR_BOTTOM_LEFT],t[h.NEAR_BOTTOM_LEFT],t[h.NEAR_TOP_LEFT],o[M.LEFT]),I(t[h.NEAR_BOTTOM_RIGHT],t[h.FAR_BOTTOM_RIGHT],t[h.FAR_TOP_RIGHT],o[M.RIGHT]),I(t[h.FAR_BOTTOM_LEFT],t[h.FAR_BOTTOM_RIGHT],t[h.NEAR_BOTTOM_RIGHT],o[M.BOTTOM]),I(t[h.NEAR_TOP_LEFT],t[h.NEAR_TOP_RIGHT],t[h.FAR_TOP_RIGHT],o[M.TOP]),I(t[h.NEAR_BOTTOM_LEFT],t[h.NEAR_BOTTOM_RIGHT],t[h.NEAR_TOP_RIGHT],o[M.NEAR]),I(t[h.FAR_BOTTOM_RIGHT],t[h.FAR_BOTTOM_LEFT],t[h.FAR_TOP_LEFT],o[M.FAR])}function y(o,t){for(let e=0;e<Y;e++){const n=o[e];if(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]>=t[3])return!1}return!0}function qt(o,t){for(let e=0;e<Y;e++){const n=o[e];if(!bt(n,t))return!1}return!0}var M,h;(function(o){o[o.LEFT=0]="LEFT",o[o.RIGHT=1]="RIGHT",o[o.BOTTOM=2]="BOTTOM",o[o.TOP=3]="TOP",o[o.NEAR=4]="NEAR",o[o.FAR=5]="FAR"})(M||(M={})),function(o){o[o.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",o[o.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",o[o.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",o[o.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",o[o.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",o[o.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",o[o.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",o[o.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(h||(h={}));h.FAR_BOTTOM_RIGHT,h.NEAR_BOTTOM_RIGHT,h.NEAR_BOTTOM_LEFT,h.FAR_BOTTOM_LEFT,h.NEAR_BOTTOM_LEFT,h.NEAR_BOTTOM_RIGHT,h.NEAR_TOP_RIGHT,h.NEAR_TOP_LEFT,h.FAR_BOTTOM_RIGHT,h.FAR_BOTTOM_LEFT,h.FAR_TOP_LEFT,h.FAR_TOP_RIGHT,h.NEAR_BOTTOM_RIGHT,h.FAR_BOTTOM_RIGHT,h.FAR_TOP_RIGHT,h.NEAR_TOP_RIGHT,h.FAR_BOTTOM_LEFT,h.NEAR_BOTTOM_LEFT,h.NEAR_TOP_LEFT,h.FAR_TOP_LEFT,h.FAR_TOP_LEFT,h.NEAR_TOP_LEFT,h.NEAR_TOP_RIGHT,h.FAR_TOP_RIGHT;const Y=6,St=8,Bt=[g(-1,-1,-1,1),g(1,-1,-1,1),g(1,1,-1,1),g(-1,1,-1,1),g(-1,-1,1,1),g(1,-1,1,1),g(1,1,1,1),g(-1,1,1,1)];new at(X);const xt=gt();class j{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new l,this._objectCount=0,e&&(e.maximumObjectsPerNode!==void 0&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),e.maximumDepth!==void 0&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),l.clearPool(),U[0]=null,B.prune(),x.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=l.acquire();for(let i=0;i<e;i++){const s=t[i];this._isDegenerate(s)?this._degenerateObjects.add(s):(n.init(this._root),this._add(s,n))}l.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=l.acquire();for(const i of t){const s=e??$(this.objectToBoundingSphere(i),Ht);G(s[3])?(n.init(this._root),this._remove(i,s,n)):this._degenerateObjects.delete(i)}l.release(n),this._shrink()}update(t,e){if(!G(e[3])&&this._isDegenerate(t))return;const n=Lt(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const i=tt(t,e);this._forEachNode(this._root,s=>{if(!this._intersectsNode(i,s))return!1;const r=s.node;return r.terminals.forAll(d=>{this._intersectsObject(i,d)&&n(d)}),r.residents!==null&&r.residents.forAll(d=>{this._intersectsObject(i,d)&&n(d)}),!0})}forEachAlongRayWithVerticalOffset(t,e,n,i){const s=tt(t,e);this._forEachNode(this._root,r=>{if(!this._intersectsNodeWithOffset(s,r,i))return!1;const d=r.node;return d.terminals.forAll(a=>{this._intersectsObjectWithOffset(s,a,i)&&n(a)}),d.residents!==null&&d.residents.forAll(a=>{this._intersectsObjectWithOffset(s,a,i)&&n(a)}),!0})}forEach(t){this._forEachNode(this._root,e=>{const n=e.node;return n.terminals.forAll(t),n.residents!==null&&n.residents.forAll(t),!0}),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,i=()=>!0,s=1/0){let r=1/0,d=1/0,a=null;const c=K(t,e),f=u=>{if(--s,!i(u))return;const O=this.objectToBoundingSphere(u);if(!y(n,O))return;const b=S(t,e,z(O)),L=b-O[3],_=b+O[3];L<r&&(r=L,d=_,a=u)};return this._forEachNodeDepthOrdered(this._root,u=>{if(s<=0||!y(n,u.bounds)||(q(A,c,u.halfSize),C(A,A,u.bounds),S(t,e,A)>d))return!1;const O=u.node;return O.terminals.forAll(b=>f(b)),O.residents!==null&&O.residents.forAll(b=>f(b)),!0},t,e),a}forEachInDepthRange(t,e,n,i,s,r,d){let a=-1/0,c=1/0;const f={setRange:_=>{n===j.DepthOrder.FRONT_TO_BACK?(a=Math.max(a,_.near),c=Math.min(c,_.far)):(a=Math.max(a,-_.far),c=Math.min(c,-_.near))}};f.setRange(i);const u=S(e,n,t),O=K(e,n),b=K(e,-n),L=_=>{if(!d(_))return;const F=this.objectToBoundingSphere(_),H=z(F),Q=S(e,n,H)-u,ct=Q-F[3],_t=Q+F[3];ct>c||_t<a||!y(r,F)||s(_,f)};this._forEachNodeDepthOrdered(this._root,_=>{if(!y(r,_.bounds)||(q(A,O,_.halfSize),C(A,A,_.bounds),S(e,n,A)-u>c)||(q(A,b,_.halfSize),C(A,A,_.bounds),S(e,n,A)-u<a))return!1;const F=_.node;return F.terminals.forAll(H=>L(H)),F.residents!==null&&F.residents.forAll(H=>L(H)),!0},e,n)}forEachNode(t){this._forEachNode(this._root,e=>t(e.node,e.bounds,e.halfSize,e.depth))}forEachNeighbor(t,e){const n=k(e),i=z(e),s=a=>{const c=this.objectToBoundingSphere(a),f=k(c),u=n+f;return!(et(z(c),i)-u*u<=0)||t(a)};let r=!0;const d=a=>{r&&(r=s(a))};this._forEachNode(this._root,a=>{const c=k(a.bounds),f=n+c;if(et(z(a.bounds),i)-f*f>0)return!1;const u=a.node;return u.terminals.forAll(d),r&&u.residents!==null&&u.residents.forAll(d),r}),r&&this.forEachDegenerateObject(d)}_intersectsNode(t,e){return v(e.bounds,2*-e.halfSize,m),v(e.bounds,2*e.halfSize,R),nt(t.origin,t.direction,m,R)}_intersectsNodeWithOffset(t,e,n){return v(e.bounds,2*-e.halfSize,m),v(e.bounds,2*e.halfSize,R),n.applyToMinMax(m,R),nt(t.origin,t.direction,m,R)}_intersectsObject(t,e){const n=this.objectToBoundingSphere(e);return!(n[3]>0)||ot(n,t)}_intersectsObjectWithOffset(t,e,n){const i=this.objectToBoundingSphere(e);return!(i[3]>0)||ot(n.applyToBoundingSphere(i),t)}_forEachNode(t,e){let n=l.acquire().init(t);const i=[n];for(;i.length!==0;){if(n=i.pop(),e(n)&&!n.isLeaf())for(let s=0;s<n.node.children.length;s++)n.node.children[s]&&i.push(l.acquire().init(n).advance(s));l.release(n)}}_forEachNodeDepthOrdered(t,e,n,i=j.DepthOrder.FRONT_TO_BACK){let s=l.acquire().init(t);const r=[s];for(Pt(n,i,ht);r.length!==0;){if(s=r.pop(),e(s)&&!s.isLeaf())for(let d=7;d>=0;--d){const a=ht[d];s.node.children[a]&&r.push(l.acquire().init(s).advance(a))}l.release(s)}}_remove(t,e,n){B.clear();const i=n.advanceTo(e,(s,r)=>{B.push(s.node),B.push(r)})?n.node.terminals:n.node.residents;if(i.removeUnordered(t),i.length===0)for(let s=B.length-2;s>=0;s-=2){const r=B.data[s],d=B.data[s+1];if(!this._purge(r,d))break}}_nodeIsEmpty(t){if(t.terminals.length!==0)return!1;if(t.residents!==null)return t.residents.length===0;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(t.residents===null&&(t.residents=new D({shrink:!0})),!0)}_add(t,e){e.advanceTo(this.objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const i=l.acquire().init(t);this._add(e.at(n),i),l.release(i)}}_grow(t,e){if(e!==0&&(st(t,e,n=>this.objectToBoundingSphere(n),N),G(N[3])&&!this._fitsInsideTree(N)))if(this._nodeIsEmpty(this._root.node))$(N,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const n=this._rootBoundsForRootAsSubNode(N);this._placingRootViolatesMaxDepth(n)?this._rebuildTree(N,n):this._growRootAsSubNode(n),l.release(n)}}_rebuildTree(t,e){it(W,e.bounds),W[3]=e.halfSize,st([t,W],2,i=>i,J);const n=l.acquire().init(this._root);this._root.initFrom(null,J,J[3]),this._root.increaseHalfSize(1.25),this._forEachNode(n,i=>(this.add(i.node.terminals.data,i.node.terminals.length),i.node.residents!==null&&this.add(i.node.residents.data,i.node.residents.length),!0)),l.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,i=>(n=Math.max(n,i.depth),n+e<=this._maximumDepth)),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let i=-1/0;const s=this._root.bounds,r=this._root.halfSize;for(let a=0;a<3;a++){const c=s[a]-r-(n[a]-e),f=n[a]+e-(s[a]+r),u=Math.max(0,Math.ceil(c/(2*r))),O=Math.max(0,Math.ceil(f/(2*r)))+1,b=2**Math.ceil(Math.log(u+O)*Math.LOG2E);i=Math.max(i,b),w[a].min=u,w[a].max=O}for(let a=0;a<3;a++){let c=w[a].min,f=w[a].max;const u=(i-(c+f))/2;c+=Math.ceil(u),f+=Math.floor(u);const O=s[a]-r-c*r*2;V[a]=O+(f+c)*r}const d=i*r;return V[3]=d*ut,l.acquire().initFrom(null,V,d,0)}_growRootAsSubNode(t){const e=this._root.node;it(N,this._root.bounds),N[3]=this._root.halfSize,this._root.init(t),t.advanceTo(N,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(t===-1)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(this._root.node.terminals.length!==0||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,i=0;for(;i<e.length&&t==null;)n=i++,t=e[n];for(;i<e.length;)if(e[i++])return-1;return n}_isDegenerate(t){return!G(this.objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}toJSON(){const{maximumDepth:t,maximumObjectsPerNode:e,_objectCount:n}=this,i=this._nodeToJSON(this._root.node);return{maximumDepth:t,maximumObjectsPerNode:e,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:i}}}_nodeToJSON(t){var s,r;const e=t.children.map(d=>d?this._nodeToJSON(d):null),n=(s=t.residents)==null?void 0:s.map(d=>this.objectToBoundingSphere(d)),i=(r=t.terminals)==null?void 0:r.map(d=>this.objectToBoundingSphere(d));return{children:e,residents:n,terminals:i}}static fromJSON(t){const e=new j(n=>n,{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return e._objectCount=t.objectCount,e._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),e}}class l{constructor(){this.bounds=P(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,i=this.depth){return this.node=t??l.createEmptyNode(),e!=null&&$(e,this.bounds),this.halfSize=n,this.depth=i,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*ut}advance(t){let e=this.node.children[t];e||(e=l.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=lt[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const i=this._childIndex(t);e&&e(this,i),this.advance(i)}}isLeaf(){return this.node.residents!=null}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new D({shrink:!0}),residents:new D({shrink:!0})}}static acquire(){return l._pool.acquire()}static release(t){l._pool.release(t)}static clearPool(){l._pool.prune()}}function jt(o,t){o[0]=Math.min(o[0],t[0]-t[3]),o[1]=Math.min(o[1],t[1]-t[3]),o[2]=Math.min(o[2],t[2]-t[3])}function It(o,t){o[0]=Math.max(o[0],t[0]+t[3]),o[1]=Math.max(o[1],t[1]+t[3]),o[2]=Math.max(o[2],t[2]+t[3])}function v(o,t,e){e[0]=o[0]+t,e[1]=o[1]+t,e[2]=o[2]+t}function st(o,t,e,n){if(t===1){const i=e(o[0]);$(i,n)}else{m[0]=1/0,m[1]=1/0,m[2]=1/0,R[0]=-1/0,R[1]=-1/0,R[2]=-1/0;for(let i=0;i<t;i++){const s=e(o[i]);G(s[3])&&(jt(m,s),It(R,s))}Ft(n,m,R,.5),n[3]=Math.max(R[0]-m[0],R[1]-m[1],R[2]-m[2])/2}}function Pt(o,t,e){if(!x.length)for(let n=0;n<8;++n)x.push({index:0,distance:0});for(let n=0;n<8;++n){const i=lt[n];x.data[n].index=n,x.data[n].distance=S(o,t,i)}x.sort((n,i)=>n.distance-i.distance);for(let n=0;n<8;++n)e[n]=x.data[n].index}function K(o,t){let e,n=1/0;for(let i=0;i<8;++i){const s=S(o,t,rt[i]);s<n&&(n=s,e=rt[i])}return e}function S(o,t,e){return t*(o[0]*e[0]+o[1]*e[1]+o[2]*e[2])}function G(o){return!isNaN(o)&&o!==-1/0&&o!==1/0&&o>0}l._pool=new Nt(l),function(o){var t;(t=o.DepthOrder||(o.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(j||(j={}));const lt=[T(-1,-1,-1),T(1,-1,-1),T(-1,1,-1),T(1,1,-1),T(-1,-1,1),T(1,-1,1),T(-1,1,1),T(1,1,1)],rt=[T(-1,-1,-1),T(-1,-1,1),T(-1,1,-1),T(-1,1,1),T(1,-1,-1),T(1,-1,1),T(1,1,-1),T(1,1,1)],ut=Math.sqrt(3),U=[null];function Lt(o){return U[0]=o,U}const V=P(),A=E(),m=E(),R=E(),B=new D,Ht=P(),N=P(),W=P(),J=P(),w=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],x=new D,ht=[0,0,0,0,0,0,0,0],$t=j;export{vt as I,wt as L,$t as W,X as a,yt as g,M as l,qt as m,Dt as p,Ct as s,Gt as y};