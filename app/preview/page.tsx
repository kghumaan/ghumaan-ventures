"use client";

import { useEffect, useRef, useState } from "react";

type Option = "aurora" | "dotgrid" | "shader" | "flowfield";

export default function Preview() {
  const [option, setOption] = useState<Option>("aurora");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hasMouse, setHasMouse] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    setHasMouse(mq.matches);
    const h = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-300">
      {option === "aurora" && <Aurora />}
      {option === "dotgrid" && <DotGrid mouse={mouse} hasMouse={hasMouse} />}
      {option === "shader" && <ShaderSim />}
      {option === "flowfield" && <FlowField />}

      <div className="relative z-20 mx-auto max-w-3xl px-6 py-20">
        <div className="mb-10 flex flex-wrap gap-2">
          {([
            ["aurora", "1. Aurora + Grain"],
            ["dotgrid", "2. Dot-grid Spotlight"],
            ["shader", "3. Shader Mesh"],
            ["flowfield", "4. Flow Field"],
          ] as const).map(([k, label]) => (
            <button
              key={k}
              onClick={() => setOption(k)}
              className={`rounded-md border px-3 py-1.5 text-sm transition ${
                option === k
                  ? "border-teal-300 bg-teal-300/10 text-teal-300"
                  : "border-slate-700 text-slate-400 hover:border-slate-500"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <h1 className="mb-4 text-4xl font-bold text-slate-200">
          Background preview
        </h1>
        <p className="mb-6 text-lg leading-relaxed">
          Click buttons to cycle. Move mouse for interactive layers. On mobile
          all options auto-animate.
        </p>
        <p className="mb-4 leading-relaxed">
          Sample body text so you can see how it reads over each background.
          Portfolio content will sit on top exactly like this.
        </p>
        <div className="mt-10 space-y-3 rounded-xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-teal-300">Sample card</h2>
          <p className="text-slate-400">
            Cards use backdrop-blur to feel layered above background.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- 1. Aurora mesh + grain (amplified) ---------- */
function Aurora() {
  return (
    <>
      <div className="aurora-a pointer-events-none fixed inset-0 z-0" />
      <div className="aurora-b pointer-events-none fixed inset-0 z-0" />
      <div className="aurora-c pointer-events-none fixed inset-0 z-0" />
      <div className="grain pointer-events-none fixed inset-0 z-10" />
      <style jsx>{`
        .aurora-a,
        .aurora-b,
        .aurora-c {
          filter: blur(60px) saturate(1.3);
          will-change: transform, opacity;
        }
        .aurora-a {
          background: radial-gradient(
            40rem 30rem at 30% 30%,
            rgba(94, 234, 212, 0.55),
            transparent 60%
          );
          animation: a1 14s ease-in-out infinite alternate;
        }
        .aurora-b {
          background: radial-gradient(
            45rem 32rem at 70% 60%,
            rgba(56, 189, 248, 0.45),
            transparent 60%
          );
          animation: a2 18s ease-in-out infinite alternate;
        }
        .aurora-c {
          background: radial-gradient(
            38rem 28rem at 50% 90%,
            rgba(45, 212, 191, 0.5),
            transparent 65%
          );
          animation: a3 22s ease-in-out infinite alternate;
          mix-blend-mode: screen;
        }
        @keyframes a1 {
          0% {
            transform: translate(-10%, -5%) scale(1);
            opacity: 0.9;
          }
          100% {
            transform: translate(25%, 15%) scale(1.3);
            opacity: 1;
          }
        }
        @keyframes a2 {
          0% {
            transform: translate(15%, 10%) scale(1.1);
            opacity: 0.85;
          }
          100% {
            transform: translate(-20%, -10%) scale(0.95);
            opacity: 1;
          }
        }
        @keyframes a3 {
          0% {
            transform: translate(5%, -15%) scale(0.9);
            opacity: 0.7;
          }
          100% {
            transform: translate(-15%, 10%) scale(1.2);
            opacity: 1;
          }
        }
        .grain {
          opacity: 0.08;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.8'/></svg>");
        }
      `}</style>
    </>
  );
}

/* ---------- 2. Dot-grid spotlight (desktop: cursor, mobile: auto-drift) ---------- */
function DotGrid({
  mouse,
  hasMouse,
}: {
  mouse: { x: number; y: number };
  hasMouse: boolean;
}) {
  const [auto, setAuto] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (hasMouse) return;
    let raf = 0;
    let t = 0;
    const loop = () => {
      t += 0.008;
      const w = window.innerWidth;
      const h = window.innerHeight;
      setAuto({
        x: w / 2 + Math.sin(t) * w * 0.35,
        y: h / 2 + Math.cos(t * 0.7) * h * 0.3,
      });
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, [hasMouse]);

  const x = hasMouse ? mouse.x : auto.x;
  const y = hasMouse ? mouse.y : auto.y;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(94,234,212,0.4) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        maskImage: `radial-gradient(360px at ${x}px ${y}px, black 10%, transparent 70%)`,
        WebkitMaskImage: `radial-gradient(360px at ${x}px ${y}px, black 10%, transparent 70%)`,
      }}
    />
  );
}

/* ---------- 3. Shader mesh (multi-blob morph, amplified) ---------- */
function ShaderSim() {
  return (
    <>
      <div className="mesh pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="blob b4" />
      </div>
      <style jsx>{`
        .mesh {
          background: #020617;
        }
        .blob {
          position: absolute;
          width: 60vw;
          height: 60vw;
          border-radius: 50%;
          filter: blur(80px);
          mix-blend-mode: screen;
          will-change: transform;
        }
        .b1 {
          background: rgba(94, 234, 212, 0.7);
          top: -10%;
          left: -10%;
          animation: m1 12s ease-in-out infinite alternate;
        }
        .b2 {
          background: rgba(59, 130, 246, 0.55);
          top: 10%;
          right: -15%;
          animation: m2 16s ease-in-out infinite alternate;
        }
        .b3 {
          background: rgba(20, 184, 166, 0.6);
          bottom: -15%;
          left: 20%;
          animation: m3 14s ease-in-out infinite alternate;
        }
        .b4 {
          background: rgba(45, 212, 191, 0.5);
          bottom: 5%;
          right: 10%;
          animation: m4 18s ease-in-out infinite alternate;
        }
        @keyframes m1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(40%, 50%) scale(1.4);
          }
        }
        @keyframes m2 {
          0% {
            transform: translate(0, 0) scale(1.1);
          }
          100% {
            transform: translate(-50%, 40%) scale(0.9);
          }
        }
        @keyframes m3 {
          0% {
            transform: translate(0, 0) scale(0.9);
          }
          100% {
            transform: translate(30%, -40%) scale(1.3);
          }
        }
        @keyframes m4 {
          0% {
            transform: translate(0, 0) scale(1.2);
          }
          100% {
            transform: translate(-40%, -30%) scale(1);
          }
        }
      `}</style>
    </>
  );
}

/* ---------- 4. Canvas flow field (amplified) ---------- */
function FlowField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let w = 0;
    let h = 0;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
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

        const hue = 170 + Math.sin(t + p.x * 0.001) * 20;
        ctx.strokeStyle = `hsla(${hue}, 80%, 65%, 0.35)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        p.x = nx;
        p.y = ny;
        p.life -= 1;
        if (
          p.x < 0 ||
          p.x > w ||
          p.y < 0 ||
          p.y > h ||
          p.life <= 0
        ) {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
          p.life = 150 + Math.random() * 150;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0" />
  );
}
