/* Aurora field — WebGL background for the title slide.
 *
 * - Flowing FBM-noise aurora bands in QIT deep navy.
 * - Mouse tracking: soft cool glow follows the cursor.
 * - Click + drag: emits warm "spark" trail that lights orange→white,
 *   intensifying the longer you hold/drag.
 *
 * Coordinates are read from the canvas's getBoundingClientRect(), so the
 * tracking stays accurate even though deck-stage applies a transform: scale
 * to fit the slide to the viewport.
 *
 * Usage:
 *   <canvas data-aurora-bg></canvas>
 *   <script src="aurora-bg.js"></script>
 * The script auto-initialises any <canvas data-aurora-bg> on DOMContentLoaded.
 */
(function () {
  const VERT = `
    attribute vec2 aPos;
    void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
  `;

  const FRAG = `
    precision highp float;
    uniform vec2  uRes;
    uniform float uTime;
    uniform vec2  uMouse;          // 0..1, y-flipped to GL
    uniform float uMouseGlow;      // 0..1
    uniform vec2  uTrail[16];      // trail positions, 0..1
    uniform float uTrailAge[16];   // 0..1, 0 = fresh, 1 = fully decayed

    // --- Hash + value noise ---
    float hash(vec2 p){
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }
    float noise(vec2 p){
      vec2 i = floor(p), f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i),                hash(i + vec2(1.0, 0.0)), u.x),
                 mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
    }
    float fbm(vec2 p){
      float s = 0.0;
      float a = 0.5;
      mat2 R = mat2(0.85, -0.53, 0.53, 0.85); // rotate each octave for organic feel
      for (int i = 0; i < 6; i++) {
        s += a * noise(p);
        p = R * p * 2.02;
        a *= 0.5;
      }
      return s;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / uRes;
      vec2 asp = vec2(uRes.x / uRes.y, 1.0);
      vec2 p = uv * asp;

      // ---- Aurora field: big billowing blobs via heavy domain warp ----
      // Center the coord space around 0 so the noise hash distributes evenly
      // (large positive coords introduce a slight bias toward stronger noise
      // in that quadrant). Slow time scale.
      vec2 q = (p - asp * 0.5) * 0.9;
      float t = uTime * 0.10;

      // Two passes of domain warp — produces the soft, voluminous "cloud" feel
      vec2 w1 = vec2(
        fbm(q + vec2( t,      0.0)),
        fbm(q + vec2( 0.0,    t * 1.1))
      );
      vec2 w2 = vec2(
        fbm(q + 2.4 * w1 + vec2(-t*0.7, t*0.5)),
        fbm(q + 2.4 * w1 + vec2( t*0.6, -t*0.4))
      );
      float aurora = fbm(q + 2.0 * w2);
      // Soft contrast — keep aurora pattern visible everywhere (subtle), not
      // gated to only the brightest blobs. Lower floor + higher ceiling = the
      // whole slide reads as aurora, not islands of it.
      aurora = smoothstep(0.20, 0.88, aurora);

      // ---- Influence fields (mouse + click trail) ----
      // These MULTIPLY the aurora pattern — they intensify the existing blobs
      // in place rather than painting circles on top.
      vec2 mp = uMouse * asp;
      float md = distance(p, mp);
      float mouseField = smoothstep(0.60, 0.0, md) * uMouseGlow;
      mouseField = pow(mouseField, 1.3);

      float clickField = 0.0;
      for (int i = 0; i < 16; i++) {
        float age = uTrailAge[i];
        if (age >= 1.0) continue;
        vec2  tp = uTrail[i] * asp;
        float td = distance(p, tp);
        float radius = mix(0.06, 0.45, age);
        float life   = 1.0 - age;
        float halo   = smoothstep(radius, 0.0, td);
        clickField += pow(halo, 1.5) * life;
      }
      clickField = clamp(clickField, 0.0, 2.5);

      // Modulate the aurora pattern's intensity, in-place
      float intensified = aurora * (1.0 + mouseField * 2.2 + clickField * 2.6);
      intensified = clamp(intensified, 0.0, 2.0);

      // ---- Colors ----
      vec3 deep   = vec3(0.020, 0.039, 0.122);
      vec3 mid    = vec3(0.039, 0.082, 0.207);
      // Subtle radial bias toward mid — keeps base from looking corner-dark
      vec3 base   = mix(deep, mid, smoothstep(0.0, 1.4, length(p - asp * 0.5)) * 0.5 + 0.35);

      // Subtle blue aurora ramp — desaturated at low intensity so the ambient
      // pattern stays calm, brighter where intensified
      vec3 blueLo = vec3(0.05, 0.13, 0.32);
      vec3 blueHi = vec3(0.20, 0.68, 1.10);
      vec3 auroraCol = mix(blueLo, blueHi, clamp(intensified * 0.85, 0.0, 1.0));

      vec3 col = mix(base, auroraCol, clamp(intensified, 0.0, 1.0));
      // Hot core where the pattern peaks — pale cyan/white highlights
      col += pow(clamp(intensified, 0.0, 1.6), 3.2) * vec3(0.55, 0.85, 1.10) * 0.50;

      // ---- Warm tint near cursor + on click ----
      // The cursor itself warms the lit aurora toward orange. Where the click
      // trail lives, push further toward white-hot. Both are scaled by the
      // *aurora pattern* so the effect follows the blob shapes, not a circle.
      float warmStrength = (mouseField * 0.85 + clickField * 1.4) * aurora;
      vec3 orange   = vec3(0.98, 0.52, 0.14);
      vec3 hotWhite = vec3(1.00, 0.96, 0.82);
      // closer to cursor / fresher click → hotter, whiter
      float whiteShift = smoothstep(0.0, 1.2, mouseField + clickField);
      vec3 warmCol = mix(orange, hotWhite, whiteShift);
      col = mix(col, warmCol * (0.6 + intensified * 0.7), clamp(warmStrength, 0.0, 0.92));

      // Soft-clamp so highlights don't clip ugly
      col = col / (1.0 + col * 0.10);

      // Very mild vignette — keep corners alive instead of crushed to navy
      float vig = smoothstep(1.60, 0.55, length(uv - 0.5));
      col *= mix(0.92, 1.04, vig);
      col += (hash(gl_FragCoord.xy + uTime) - 0.5) * 0.012;

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  function compile(gl, type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      console.error('shader error', gl.getShaderInfoLog(sh), src);
      return null;
    }
    return sh;
  }

  function initAurora(canvas) {
    const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false });
    if (!gl) { console.warn('WebGL unavailable'); return; }

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error('link error', gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,   1, -1,  -1, 1,
      -1,  1,   1, -1,   1, 1
    ]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes       = gl.getUniformLocation(prog, 'uRes');
    const uTime      = gl.getUniformLocation(prog, 'uTime');
    const uMouse     = gl.getUniformLocation(prog, 'uMouse');
    const uMouseGlow = gl.getUniformLocation(prog, 'uMouseGlow');
    const uTrail     = gl.getUniformLocation(prog, 'uTrail');
    const uTrailAge  = gl.getUniformLocation(prog, 'uTrailAge');

    // State
    const TRAIL_N = 16;
    const trailPos  = new Float32Array(TRAIL_N * 2);
    const trailAge  = new Float32Array(TRAIL_N).fill(1.0);
    const trailLife = new Float32Array(TRAIL_N).fill(2.5); // seconds to fully decay
    let trailHead = 0;

    let mouseX = 0.5, mouseY = 0.5;        // smoothed
    let targetX = 0.5, targetY = 0.5;
    let mouseGlow = 0.0, mouseGlowTarget = 0.0;
    let isDown = false;
    let lastEmit = 0;
    let lastEmitPos = [0.5, 0.5];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth | 0;
      const h = canvas.clientHeight | 0;
      const W = Math.max(1, (w * dpr) | 0);
      const H = Math.max(1, (h * dpr) | 0);
      if (canvas.width !== W || canvas.height !== H) {
        canvas.width = W;
        canvas.height = H;
        gl.viewport(0, 0, W, H);
      }
    }
    resize();
    new ResizeObserver(resize).observe(canvas);

    function posFromEvent(e) {
      const r = canvas.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = 1.0 - (e.clientY - r.top) / r.height; // GL origin = bottom-left
      return [Math.max(0, Math.min(1, x)), Math.max(0, Math.min(1, y))];
    }

    function emitSpark(x, y) {
      trailPos[trailHead * 2]     = x;
      trailPos[trailHead * 2 + 1] = y;
      trailAge[trailHead] = 0.0;
      // Held drags get longer-lived sparks the longer you hold
      trailLife[trailHead] = isDown ? 1.6 : 2.4;
      trailHead = (trailHead + 1) % TRAIL_N;
    }

    canvas.addEventListener('pointermove', (e) => {
      const [x, y] = posFromEvent(e);
      targetX = x; targetY = y;
      mouseGlowTarget = 1.0;
      if (isDown) {
        // Throttle drag emission
        const dx = x - lastEmitPos[0], dy = y - lastEmitPos[1];
        const dist = Math.hypot(dx, dy);
        const now = performance.now();
        if (dist > 0.015 || now - lastEmit > 55) {
          emitSpark(x, y);
          lastEmit = now;
          lastEmitPos = [x, y];
        }
        e.preventDefault();
      }
    });
    canvas.addEventListener('pointerleave', () => { mouseGlowTarget = 0.0; });
    canvas.addEventListener('pointerenter', () => { mouseGlowTarget = 1.0; });

    canvas.addEventListener('pointerdown', (e) => {
      isDown = true;
      canvas.setPointerCapture(e.pointerId);
      const [x, y] = posFromEvent(e);
      targetX = x; targetY = y;
      // Initial burst
      emitSpark(x, y);
      emitSpark(x, y);
      lastEmit = performance.now();
      lastEmitPos = [x, y];
      e.preventDefault();
      e.stopPropagation();
    });
    // Swallow clicks so they don't bubble out to deck-stage navigation
    canvas.addEventListener('click', (e) => { e.stopPropagation(); });
    canvas.addEventListener('mousedown', (e) => { e.stopPropagation(); });
    canvas.addEventListener('touchstart', (e) => { e.stopPropagation(); }, { passive: false });
    function release(e) {
      if (!isDown) return;
      isDown = false;
      try { canvas.releasePointerCapture(e.pointerId); } catch (_) {}
    }
    canvas.addEventListener('pointerup', release);
    canvas.addEventListener('pointercancel', release);

    // Animate
    let last = performance.now() / 1000;
    const t0 = last;
    function frame() {
      const now = performance.now() / 1000;
      const dt = Math.min(0.05, now - last);
      last = now;

      // Smooth mouse position + glow
      const easeP = 1 - Math.pow(0.001, dt);
      mouseX += (targetX - mouseX) * easeP;
      mouseY += (targetY - mouseY) * easeP;
      mouseGlow += (mouseGlowTarget - mouseGlow) * (1 - Math.pow(0.005, dt));

      // Continuous emission while held still
      if (isDown) {
        const tnow = performance.now();
        if (tnow - lastEmit > 80) {
          emitSpark(targetX, targetY);
          lastEmit = tnow;
        }
      }

      // Age trail
      for (let i = 0; i < TRAIL_N; i++) {
        if (trailAge[i] < 1.0) {
          trailAge[i] = Math.min(1.0, trailAge[i] + dt / trailLife[i]);
        }
      }

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, now - t0);
      gl.uniform2f(uMouse, mouseX, mouseY);
      gl.uniform1f(uMouseGlow, mouseGlow);
      gl.uniform2fv(uTrail, trailPos);
      gl.uniform1fv(uTrailAge, trailAge);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function boot() {
    document.querySelectorAll('canvas[data-aurora-bg]').forEach(initAurora);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
