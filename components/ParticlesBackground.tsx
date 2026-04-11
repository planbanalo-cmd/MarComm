"use client";

import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: { value: "#000000" },
        },
        particles: {
          number: { value: 80 },
          color: { value: "#00ffcc" },
          links: {
            enable: true,
            color: "#00ffcc",
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
      }}
    />
  );
}