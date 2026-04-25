"use client";

import { useEffect, useRef } from "react";

export default function FlowField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    const N = 240;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      life: Math.random() * 200,
    }));

    let raf = 0;
    let t = 0;

    const noise = (x: number, y: number, z: number) =>
      Math.sin(x * 0.004 + z) * Math.cos(y * 0.004 + z * 0.8) +
      Math.sin((x + y) * 0.0025 + z * 1.4) * 0.6;

    const loop = () => {
      ctx.fillStyle = "rgba(2, 6, 23, 0.04)";
      ctx.fillRect(0, 0, w, h);
      t += 0.005;

      for (const p of particles) {
        const angle = noise(p.x, p.y, t) * Math.PI * 2;
        const speed = 1.6;
        const nx = p.x + Math.cos(angle) * speed;
        const ny = p.y + Math.sin(angle) * speed;

        ctx.strokeStyle = "rgba(203, 213, 225, 0.32)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        p.x = nx;
        p.y = ny;
        p.life -= 1;
        if (p.x < 0 || p.x > w || p.y < 0 || p.y > h || p.life <= 0) {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
          p.life = 150 + Math.random() * 150;
        }
      }
      if (!reduce) raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      style={{
        maskImage:
          "radial-gradient(ellipse 75% 85% at 50% 50%, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 75%, black 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 75% 85% at 50% 50%, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 75%, black 100%)",
      }}
    />
  );
}
