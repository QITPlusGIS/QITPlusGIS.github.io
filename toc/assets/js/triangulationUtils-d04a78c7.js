import{i as E}from"./earcut-42d4ceed.js";import{ca as O}from"./index-285b86bc.js";import{a as $,e as H,t as L}from"./DoubleArray-002a0af8.js";import{t as x}from"./Indices-6bebb175.js";import{e as _}from"./deduplicate-e9648d89.js";function k(n){const f=S(n.rings,n.hasZ,I.CCW_IS_HOLE),p=new Array;let e=0,r=0;for(const o of f.polygons){const a=o.count,l=o.index,y=$(f.position,3*l,3*a),u=o.holeIndices.map(c=>c-l),s=x(E(y,u,3));p.push({position:y,faces:s}),e+=y.length,r+=s.length}const t=N(p,e,r),h=Array.isArray(t.position)?_(t.position,3,{originalIndices:t.faces}):_(t.position.buffer,6,{originalIndices:t.faces});return t.position=H(new Float64Array(h.buffer)),t.faces=h.indices,t}function N(n,f,p){if(n.length===1)return n[0];const e=L(f),r=new Array(p);let t=0,h=0,o=0;for(const a of n){for(let l=0;l<a.position.length;l++)e[t++]=a.position[l];for(const l of a.faces)r[h++]=l+o;o=t/3}return{position:e,faces:x(r)}}function S(n,f,p){const e=n.length,r=new Array(e),t=new Array(e),h=new Array(e);let o=0,a=0,l=0,y=0;for(let c=0;c<e;++c)y+=n[c].length;const u=L(3*y);let s=0;for(let c=e-1;c>=0;c--){const i=n[c],w=p===I.CCW_IS_HOLE&&W(i);if(w&&e!==1)r[o++]=i;else{let C=i.length;for(let g=0;g<o;++g)C+=r[g].length;const d={index:s,pathLengths:new Array(o+1),count:C,holeIndices:new Array(o)};d.pathLengths[0]=i.length,i.length>0&&(h[l++]={index:s,count:i.length}),s=w?A(i,i.length-1,-1,u,s,i.length,f):A(i,0,1,u,s,i.length,f);for(let g=0;g<o;++g){const m=r[g];d.holeIndices[g]=s,d.pathLengths[g+1]=m.length,m.length>0&&(h[l++]={index:s,count:m.length}),s=A(m,0,1,u,s,m.length,f)}o=0,d.count>0&&(t[a++]=d)}}for(let c=0;c<o;++c){const i=r[c];i.length>0&&(h[l++]={index:s,count:i.length}),s=A(i,0,1,u,s,i.length,f)}return t.length=a,h.length=l,{position:u,polygons:t,outlines:h}}function A(n,f,p,e,r,t,h){r*=3;for(let o=0;o<t;++o){const a=n[f];e[r++]=a[0],e[r++]=a[1],e[r++]=h?a[2]:0,f+=p}return r/3}function W(n){return!O(n,!1,!1)}var I;(function(n){n[n.NONE=0]="NONE",n[n.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(I||(I={}));export{I as a,S as f,k as l};
