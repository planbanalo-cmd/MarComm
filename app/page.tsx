"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground"; 
import Tilt from "react-parallax-tilt";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black text-white px-4 overflow-hidden">

      {/* Particles */}
      <ParticlesBackground />

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-green-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* 3D Tilt Card */}
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.05} 
        transitionSpeed={2000}
        className="w-full max-w-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 text-center shadow-2xl"
        >

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image src="/TheMarComlogo.PNG" alt="Markcom Logo" width={220} height={80} />
          </div>

          {/* 🌈 Animated Gradient Text */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
            Something Big is Coming
          </h1>

          <p className="text-gray-400 text-lg mb-6">
            We’re building a powerful marketing experience.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto rounded mb-6"></div>

          <p className="text-xl font-semibold">
            🚀 Launching Soon
          </p>

          <p className="text-sm text-gray-500 mt-6">
            © 2026 Markcom
          </p>

        </motion.div>
      </Tilt>
    </main>
  );
}