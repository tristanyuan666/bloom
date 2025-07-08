"use client";

import { useEffect, useState } from "react";

interface FloatingParticlesProps {
  isMounted: boolean;
}

export default function FloatingParticles({ isMounted }: FloatingParticlesProps) {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: number;
      delay: number;
      size: number;
      color: string;
    }>
  >([]);

  useEffect(() => {
    if (
      !isMounted ||
      typeof window === "undefined" ||
      typeof Math === "undefined"
    ) {
      return;
    }

    try {
      const colors = ["#56D08D", "#4CAF50", "#45A049", "#388E3C", "#2E7D32"];
      setParticles(
        Array.from({ length: 35 }, (_, i) => ({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 20,
          size: 3 + Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)],
        })),
      );
    } catch (error) {
      console.warn("Particles initialization error:", error);
    }
  }, [isMounted]);

  if (!isMounted || particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-60 animate-float"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `linear-gradient(45deg, ${particle.color}, ${particle.color}80)`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`,
            animation: `float-up ${15 + Math.random() * 10}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
} 