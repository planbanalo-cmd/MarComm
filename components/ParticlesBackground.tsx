"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // 👈 mouse interaction
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          number: { value: 70 },
          color: { value: ["#3b82f6", "#22c55e"] },
          links: {
            enable: true,
            color: "#3b82f6",
            opacity: 0.3,
          },
          move: { enable: true, speed: 1 },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.5 },
        },
      }}
    />
  );
}