import{e as It}from"./deduplicate-a0d8b170.js";import{H as R}from"./InterleavedLayout-3036b497.js";import{hb as u,fL as et,jj as dt,f_ as At,fo as W,fD as nt,jk as B,jl as ht,jm as Ot,c_ as lt,cY as ot,bO as ft,bj as $,f$ as St,jn as wt}from"./index-58dffe5f.js";import{r as q}from"./glUtil-0b7ee6ea.js";const vt=R().vec3f(u.POSITION).u16(u.COMPONENTINDEX).u16(u.U16PADDING),$t=R().vec2u8(u.SIDENESS);q($t);const ut=R().vec3f(u.POSITION0).vec3f(u.POSITION1).u16(u.COMPONENTINDEX).u8(u.VARIANTOFFSET,{glNormalized:!0}).u8(u.VARIANTSTROKE).u8(u.VARIANTEXTENSION,{glNormalized:!0}).u8(u.U8PADDING,{glPadding:!0}).u16(u.U16PADDING,{glPadding:!0}),X=ut.clone().vec3f(u.NORMAL),G=ut.clone().vec3f(u.NORMALA).vec3f(u.NORMALB);u.POSITION0,u.POSITION1,u.COMPONENTINDEX,u.VARIANTOFFSET,u.VARIANTSTROKE,u.VARIANTEXTENSION,u.NORMAL,u.NORMALA,u.NORMALB,u.SIDENESS;const D=-1;var rt;function Et(t,e,o,r=Lt){const s=t.vertices.position,i=t.vertices.componentIndex,N=et(r.anglePlanar),a=et(r.angleSignificantEdge),p=Math.cos(a),l=Math.cos(N),f=K.edge,d=f.position0,A=f.position1,I=f.faceNormal0,E=f.faceNormal1,h=Vt(t),T=Dt(t),n=T.length/4,c=e.allocate(n);let g=0;const m=n,O=o.allocate(m);let v=0,P=0,S=0;const J=dt(0,n),_=new Float32Array(n);_.forEach((V,w,x)=>{s.getVec(T[4*w],d),s.getVec(T[4*w+1],A),x[w]=At(d,A)}),J.sort((V,w)=>_[w]-_[V]);const Q=new Array,Z=new Array;for(let V=0;V<n;V++){const w=J[V],x=_[w],C=T[4*w],pt=T[4*w+1],L=T[4*w+2],F=T[4*w+3],tt=F===D;if(s.getVec(C,d),s.getVec(pt,A),tt)W(I,h[3*L],h[3*L+1],h[3*L+2]),nt(E,I),f.componentIndex=i.get(C),f.cosAngle=B(I,E);else{if(W(I,h[3*L],h[3*L+1],h[3*L+2]),W(E,h[3*F],h[3*F+1],h[3*F+2]),f.componentIndex=i.get(C),f.cosAngle=B(I,E),Pt(f,l))continue;f.cosAngle<-.9999&&nt(E,I)}P+=x,S++,tt||Tt(f,p)?(e.write(c,g++,f),Q.push(x)):yt(f,N)&&(o.write(O,v++,f),Z.push(x))}const mt=new Float32Array(Q.reverse()),Nt=new Float32Array(Z.reverse());return{regular:{instancesData:e.trim(c,g),lodInfo:{lengths:mt}},silhouette:{instancesData:o.trim(O,v),lodInfo:{lengths:Nt}},averageEdgeLength:P/S}}function Tt(t,e){return t.cosAngle<e}function Pt(t,e){return t.cosAngle>e}function yt(t,e){const o=ht(t.cosAngle),r=K.fwd,s=K.ortho;return Ot(r,t.position1,t.position0),o*(B(lt(s,t.faceNormal0,t.faceNormal1),r)>0?-1:1)>e}function Dt(t){const e=t.faces.length/3,o=t.faces,r=t.neighbors;let s=0;for(let a=0;a<e;a++){const p=r[3*a],l=r[3*a+1],f=r[3*a+2],d=o[3*a],A=o[3*a+1],I=o[3*a+2];s+=p===D||d<A?1:0,s+=l===D||A<I?1:0,s+=f===D||I<d?1:0}const i=new Int32Array(4*s);let N=0;for(let a=0;a<e;a++){const p=r[3*a],l=r[3*a+1],f=r[3*a+2],d=o[3*a],A=o[3*a+1],I=o[3*a+2];(p===D||d<A)&&(i[N++]=d,i[N++]=A,i[N++]=a,i[N++]=p),(l===D||A<I)&&(i[N++]=A,i[N++]=I,i[N++]=a,i[N++]=l),(f===D||I<d)&&(i[N++]=I,i[N++]=d,i[N++]=a,i[N++]=f)}return i}function Vt(t){const e=t.faces.length/3,o=t.vertices.position,r=t.faces,s=H.v0,i=H.v1,N=H.v2,a=new Float32Array(3*e);for(let p=0;p<e;p++){const l=r[3*p],f=r[3*p+1],d=r[3*p+2];o.getVec(l,s),o.getVec(f,i),o.getVec(d,N),ot(i,i,s),ot(N,N,s),lt(s,i,N),ft(s,s),a[3*p]=s[0],a[3*p+1]=s[1],a[3*p+2]=s[2]}return a}(function(t){t[t.SOLID=0]="SOLID",t[t.SKETCH=1]="SKETCH"})(rt||(rt={}));const K={edge:{position0:$(),position1:$(),faceNormal0:$(),faceNormal1:$(),componentIndex:0,cosAngle:0},ortho:$(),fwd:$()},H={v0:$(),v1:$(),v2:$()},Lt={anglePlanar:4,angleSignificantEdge:35};function st(t,e,o){const r=e/3,s=new Uint32Array(o+1),i=new Uint32Array(o+1),N=(n,c)=>{n<c?s[n+1]++:i[c+1]++};for(let n=0;n<r;n++){const c=t[3*n],g=t[3*n+1],m=t[3*n+2];N(c,g),N(g,m),N(m,c)}let a=0,p=0;for(let n=0;n<o;n++){const c=s[n+1],g=i[n+1];s[n+1]=a,i[n+1]=p,a+=c,p+=g}const l=new Uint32Array(6*r),f=s[o],d=(n,c,g)=>{if(n<c){const m=s[n+1]++;l[2*m]=c,l[2*m+1]=g}else{const m=i[c+1]++;l[2*f+2*m]=n,l[2*f+2*m+1]=g}};for(let n=0;n<r;n++){const c=t[3*n],g=t[3*n+1],m=t[3*n+2];d(c,g,n),d(g,m,n),d(m,c,n)}const A=(n,c)=>{const g=2*n,m=c-n;for(let O=1;O<m;O++){const v=l[g+2*O],P=l[g+2*O+1];let S=O-1;for(;S>=0&&l[g+2*S]>v;S--)l[g+2*S+2]=l[g+2*S],l[g+2*S+3]=l[g+2*S+1];l[g+2*S+2]=v,l[g+2*S+3]=P}};for(let n=0;n<o;n++)A(s[n],s[n+1]),A(f+i[n],f+i[n+1]);const I=new Int32Array(3*r),E=(n,c)=>n===t[3*c]?0:n===t[3*c+1]?1:n===t[3*c+2]?2:-1,h=(n,c)=>{const g=E(n,c);I[3*c+g]=-1},T=(n,c,g,m)=>{const O=E(n,c);I[3*c+O]=m;const v=E(g,m);I[3*m+v]=c};for(let n=0;n<o;n++){let c=s[n];const g=s[n+1];let m=i[n];const O=i[n+1];for(;c<g&&m<O;){const v=l[2*c],P=l[2*f+2*m];v===P?(T(n,l[2*c+1],P,l[2*f+2*m+1]),c++,m++):v<P?(h(n,l[2*c+1]),c++):(h(P,l[2*f+2*m+1]),m++)}for(;c<g;)h(n,l[2*c+1]),c++;for(;m<O;)h(l[2*f+2*m],l[2*f+2*m+1]),m++}return I}let gt=class{updateSettings(e){this.settings=e,this._edgeHashFunction=e.reducedPrecision?xt:Mt}write(e,o,r){const s=this._edgeHashFunction(r);U.seed=s;const i=U.getIntRange(0,255),N=U.getIntRange(0,this.settings.variants-1),a=.7,p=U.getFloat(),l=255*(.5*Rt(-(1-Math.min(p/a,1))+Math.max(0,p-a)/(1-a),1.2)+.5);e.position0.setVec(o,r.position0),e.position1.setVec(o,r.position1),e.componentIndex.set(o,r.componentIndex),e.variantOffset.set(o,i),e.variantStroke.set(o,N),e.variantExtension.set(o,l)}trim(e,o){return e.slice(0,o)}};const Y=new Float32Array(6),j=new Uint32Array(Y.buffer),y=new Uint32Array(1);function Mt(t){const e=Y;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],y[0]=5381;for(let o=0;o<j.length;o++)y[0]=31*y[0]+j[o];return y[0]}function xt(t){const e=Y;e[0]=M(t.position0[0]),e[1]=M(t.position0[1]),e[2]=M(t.position0[2]),e[3]=M(t.position1[0]),e[4]=M(t.position1[1]),e[5]=M(t.position1[2]),y[0]=5381;for(let o=0;o<j.length;o++)y[0]=31*y[0]+j[o];return y[0]}const ct=1e4;function M(t){return Math.round(t*ct)/ct}function Rt(t,e){const o=t<0?-1:1;return Math.abs(t)**e*o}let k=class{constructor(){this._commonWriter=new gt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return X.createBuffer(e)}write(e,o,r){this._commonWriter.write(e,o,r),St(b,r.faceNormal0,r.faceNormal1),ft(b,b),e.normal.setVec(o,b)}trim(e,o){return this._commonWriter.trim(e,o)}};k.Layout=X,k.glLayout=q(X,1);class z{constructor(){this._commonWriter=new gt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return G.createBuffer(e)}write(e,o,r){this._commonWriter.write(e,o,r),e.normalA.setVec(o,r.faceNormal0),e.normalB.setVec(o,r.faceNormal1)}trim(e,o){return this._commonWriter.trim(e,o)}}z.Layout=G,z.glLayout=q(G,1);const b=$(),U=new wt;function Bt(t){const e=_t(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return it.updateSettings(t.writerSettings),at.updateSettings(t.writerSettings),Et(e,it,at)}function _t(t,e,o,r){if(e){const N=st(o,r,t.count);return new Ft(o,r,N,t)}const s=It(t.buffer,t.stride/4,{originalIndices:o,originalIndicesLength:r}),i=st(s.indices,r,s.uniqueCount);return{faces:s.indices,facesLength:s.indices.length,neighbors:i,vertices:vt.createView(s.buffer)}}class Ft{constructor(e,o,r,s){this.faces=e,this.facesLength=o,this.neighbors=r,this.vertices=s}}const it=new k,at=new z,Xt=R().vec3f(u.POSITION0).vec3f(u.POSITION1),Gt=R().vec3f(u.POSITION0).vec3f(u.POSITION1).u16(u.COMPONENTINDEX).u16(u.U16PADDING,{glPadding:!0});export{vt as A,Xt as a,Bt as f,Gt as m,Et as p,_t as u};