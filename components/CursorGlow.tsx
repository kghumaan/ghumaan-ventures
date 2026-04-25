"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      aria-hidden="true"
      style={{
        background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
}
