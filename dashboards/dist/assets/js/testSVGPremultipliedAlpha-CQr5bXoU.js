import{d as w,m as A}from"./WGLContainer-CCreaUuQ.js";import{E as v,h as X}from"./FramebufferObject-BKEPrhyG.js";import{D as m,L as p,F as I,_ as Q,E as R,G as S,U}from"./enums-BFYfP9qy.js";import{e as g,T as M}from"./Texture-BUpON3bN.js";import{f as P}from"./ProgramTemplate-CzjMKiq1.js";import{dH as x}from"./uuid-De2V3pkO.js";let d=class{constructor(s,e,t,n,u,E,o,_,l){this.createQuery=s,this.deleteQuery=e,this.resultAvailable=t,this.getResult=n,this.disjoint=u,this.beginTimeElapsed=E,this.endTimeElapsed=o,this.createTimestamp=_,this.timestampBits=l}},i=!1;function j(r,s){if(s.disjointTimerQuery)return null;let e=r.getExtension("EXT_disjoint_timer_query_webgl2");return e&&w(r)?new d((()=>r.createQuery()),(t=>{r.deleteQuery(t),i=!1}),(t=>r.getQueryParameter(t,r.QUERY_RESULT_AVAILABLE)),(t=>r.getQueryParameter(t,r.QUERY_RESULT)),(()=>r.getParameter(e.GPU_DISJOINT_EXT)),(t=>{i||(i=!0,r.beginQuery(e.TIME_ELAPSED_EXT,t))}),(()=>{r.endQuery(e.TIME_ELAPSED_EXT),i=!1}),(t=>e.queryCounterEXT(t,e.TIMESTAMP_EXT)),(()=>r.getQuery(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT))):(e=r.getExtension("EXT_disjoint_timer_query"),e?new d((()=>e.createQueryEXT()),(t=>{e.deleteQueryEXT(t),i=!1}),(t=>e.getQueryObjectEXT(t,e.QUERY_RESULT_AVAILABLE_EXT)),(t=>e.getQueryObjectEXT(t,e.QUERY_RESULT_EXT)),(()=>r.getParameter(e.GPU_DISJOINT_EXT)),(t=>{i||(i=!0,e.beginQueryEXT(e.TIME_ELAPSED_EXT,t))}),(()=>{e.endQueryEXT(e.TIME_ELAPSED_EXT),i=!1}),(t=>e.queryCounterEXT(t,e.TIMESTAMP_EXT)),(()=>e.getQueryEXT(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT))):null)}class b{constructor(){this._result=!1}dispose(){this._program=x(this._program)}get result(){return this._program!=null&&(this._result=this._test(this._program),this.dispose()),this._result}}class G extends b{constructor(s){super(),this._rctx=s;const e=`
    precision highp float;

    attribute vec2 a_pos;
    varying vec2 v_uv;

    void main() {
      v_uv = a_pos;
      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
    }
    `,t=`
    precision highp float;

    varying vec2 v_uv;

    uniform sampler2D u_texture;

    void main() {
      gl_FragColor = texture2D(u_texture, v_uv);
    }
    `;this._program=s.programCache.acquire(e,t,new Map([["a_pos",0]]))}dispose(){super.dispose()}_test(s){const e=this._rctx;if(!e.gl)return s.dispose(),!0;const t=new g(1);t.wrapMode=m.CLAMP_TO_EDGE,t.samplingMode=p.NEAREST;const n=new v(e,t),u=X.createVertex(e,I.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),E=new P(e,new Map([["a_pos",0]]),A,{geometry:u}),o=new g;o.samplingMode=p.LINEAR,o.wrapMode=m.CLAMP_TO_EDGE;const _=new M(e,o,a);e.useProgram(s),e.bindTexture(_,0),s.setUniform1i("u_texture",0);const l=e.getBoundFramebufferObject(),{x:c,y:h,width:f,height:y}=e.getViewport();e.bindFramebuffer(n),e.setViewport(0,0,1,1),e.setClearColor(0,0,0,0),e.setBlendingEnabled(!1),e.clearSafe(Q.COLOR_BUFFER_BIT),e.bindVAO(E),e.drawArrays(R.TRIANGLE_STRIP,0,4);const T=new Uint8Array(4);return n.readPixels(0,0,1,1,S.RGBA,U.UNSIGNED_BYTE,T),E.dispose(),n.dispose(),_.dispose(),e.setViewport(c,h,f,y),e.bindFramebuffer(l),T[0]!==255}}const a=new Image;a.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",a.width=5,a.height=5,a.decode();export{j as T,G as f,b as t};
