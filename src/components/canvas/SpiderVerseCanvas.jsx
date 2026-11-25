import { useEffect, useRef } from "react";

/**
 * 3D Scroll-Choreographed Spider-Verse Background Canvas
 * Matches the Agentsar visual language (CMYK offset rings, floating comic panel
 * wireframes, Kirby dots, and subtle orbiting 3D sliced emblem) with toggleable
 * "On Twos" (12fps) vs "Smooth" (60fps) animation cadence.
 */
export default function SpiderVerseCanvas({ onTwos = true }) {
  const canvasRef = useRef(null);
  const onTwosRef = useRef(onTwos);

  useEffect(() => {
    onTwosRef.current = onTwos;
  }, [onTwos]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let scrollTarget = 0;
    let scrollCurrent = 0;
    let scrollVel = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMX = 0;
    let targetMY = 0;
    let timeSec = 0;
    let lastMs = 0;
    let rafId = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onScroll = () => {
      const maxS = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const next = Math.min(1, Math.max(0, window.scrollY / maxS));
      scrollVel = Math.min(1.5, Math.abs(next - scrollTarget) * 26 + scrollVel * 0.65);
      scrollTarget = next;
    };

    const onMove = (e) => {
      targetMX = (e.clientX / Math.max(1, width) - 0.5) * 2;
      targetMY = (e.clientY / Math.max(1, height) - 0.5) * 2;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });

    const rot3 = (p, rx, ry, rz) => {
      const y = p.y * Math.cos(rx) - p.z * Math.sin(rx);
      const z = p.y * Math.sin(rx) + p.z * Math.cos(rx);
      const x = p.x;
      const x2 = x * Math.cos(ry) + z * Math.sin(ry);
      const z2 = -x * Math.sin(ry) + z * Math.cos(ry);
      return {
        x: x2 * Math.cos(rz) - y * Math.sin(rz),
        y: x2 * Math.sin(rz) + y * Math.cos(rz),
        z: z2,
      };
    };

    const proj = (p, cx, cy, f) => {
      const sc = f / Math.max(140, f + p.z);
      return { x: cx + p.x * sc, y: cy + p.y * sc, scale: sc, z: p.z };
    };

    const frames = Array.from({ length: 10 }, (_, i) => ({
      angle: (i / 10) * Math.PI * 2 + 0.3,
      radius: 280 + (i % 3) * 115,
      yOff: ((i % 5) - 2) * 130,
      w: 72 + (i % 4) * 24,
      h: 94 + ((i + 1) % 3) * 30,
      zBase: -160 + (i % 4) * 130,
      accent: i % 3 === 0 ? "#08B6E8" : i % 3 === 1 ? "#E81C2E" : "#F26B9E",
      speed: 0.12 + (i % 3) * 0.04,
    }));

    const dots = Array.from({ length: 38 }, (_, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / 38);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 210 + (i % 4) * 44;
      return {
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        size: 2.2 + (i % 4) * 1.4,
        color: i % 6 === 0 ? "#E81C2E" : i % 4 === 0 ? "#08B6E8" : "#111318",
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const s = scrollCurrent;
      const mob = width < 820;
      const f = 780;
      const cx = mob ? width * 0.52 : width * (0.76 - s * 0.45);
      const cy = height * (0.48 + Math.sin(s * Math.PI * 2) * 0.08);
      const rx = Math.sin(timeSec * 0.5) * 0.16 + s * 1.2 + mouseY * 0.2;
      const ry = Math.cos(timeSec * 0.4) * 0.24 + s * Math.PI * 2 + mouseX * 0.28;
      const rz = -0.32 + Math.sin(s * Math.PI * 2.5) * 0.12;
      const shift = 3 + scrollVel * 10;

      // Floating 3D Comic Panels
      for (const fr of frames) {
        const a = fr.angle + timeSec * fr.speed + s * 2.8;
        const px = Math.cos(a) * fr.radius * (mob ? 0.65 : 1);
        const pz = Math.sin(a) * fr.radius + fr.zBase;
        const py = fr.yOff + Math.sin(a * 1.3 + s * 4) * 40;
        const cs = [
          { x: -fr.w / 2, y: -fr.h / 2, z: 0 },
          { x: fr.w / 2, y: -fr.h / 2, z: 0 },
          { x: fr.w / 2, y: fr.h / 2, z: 0 },
          { x: -fr.w / 2, y: fr.h / 2, z: 0 },
        ].map((c) => {
          const r = rot3(c, rx * 0.45, a + ry * 0.35, -0.18);
          return proj({ x: r.x + px, y: r.y + py, z: r.z + pz }, cx, cy, f);
        });
        const al = Math.max(0.06, Math.min(0.32, (1 - (pz + 320) / 920) * 0.32));
        ctx.save();
        ctx.beginPath();
        cs.forEach((p, idx) => (idx ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
        ctx.closePath();
        ctx.strokeStyle = `rgba(17, 19, 24, ${al})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cs[0].x, cs[0].y);
        ctx.lineTo(cs[1].x, cs[1].y);
        ctx.strokeStyle = fr.accent;
        ctx.globalAlpha = al * 1.3;
        ctx.lineWidth = 2.4;
        ctx.stroke();
        ctx.restore();
      }

      // CMYK Orbital Halftone Rings
      const rings = [
        { r: 210 + s * 80, tx: 1.05, ty: 0.38, c: "#08B6E8", d: [6, 9], w: 1.6, ox: shift },
        { r: 255 + s * 110, tx: 0.65, ty: -0.58, c: "#E81C2E", d: [14, 10], w: 1.5, ox: -shift },
        { r: 300 + s * 130, tx: -0.5, ty: 0.85, c: "rgba(17,19,24,0.22)", d: [3, 9], w: 1.2, ox: 0 },
      ];
      for (const rg of rings) {
        ctx.save();
        ctx.strokeStyle = rg.c;
        ctx.lineWidth = rg.w;
        ctx.setLineDash(rg.d);
        ctx.beginPath();
        for (let i = 0; i <= 60; i++) {
          const a = (i / 60) * Math.PI * 2;
          const p = proj(
            rot3({ x: Math.cos(a) * rg.r, y: Math.sin(a) * rg.r, z: 0 }, rg.tx + rx * 0.55, rg.ty + ry * 0.55, rz * 0.4),
            cx + rg.ox,
            cy,
            f
          );
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
        ctx.restore();
      }

      // Kirby-Crackle Ink Dots
      for (const d of dots) {
        const p = proj(
          rot3({ x: d.x, y: d.y, z: d.z }, rx * 0.75 + timeSec * 0.12, ry * 0.85 + timeSec * 0.16, rz * 0.35),
          cx,
          cy,
          f
        );
        if (p.scale <= 0.15) continue;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1.2, d.size * p.scale), 0, Math.PI * 2);
        ctx.fillStyle = d.color;
        ctx.globalAlpha = Math.min(0.65, Math.max(0.12, p.scale * 0.45));
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const tick = (now) => {
      rafId = requestAnimationFrame(tick);
      if (document.hidden) return;
      const minInt = onTwosRef.current ? 1000 / 13 : 1000 / 60;
      if (now - lastMs < minInt) return;
      const dt = Math.min(0.1, (now - lastMs) / 1000 || 0.016);
      lastMs = now;
      if (!reduceMotion) timeSec += dt;
      scrollCurrent += (scrollTarget - scrollCurrent) * (onTwosRef.current ? 0.28 : 0.14);
      scrollVel *= 0.84;
      mouseX += (targetMX - mouseX) * 0.12;
      mouseY += (targetMY - mouseY) * 0.12;
      render();
    };

    resize();
    onScroll();
    render();
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} id="portfolio-spiderverse-stage" aria-hidden="true" />;
}
