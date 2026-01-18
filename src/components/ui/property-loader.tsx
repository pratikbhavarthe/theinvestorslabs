"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export function PropertyLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-8 text-center bg-white rounded-3xl border border-dust-grey/20">
      <div className="relative mb-8">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <div className="rounded-full bg-indigo-velvet/5 p-8 border border-indigo-velvet/10 backdrop-blur-sm">
            <Loader2 className="h-12 w-12 text-indigo-velvet animate-spin-slow" />
          </div>
        </motion.div>

        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-indigo-velvet/5 rounded-full animate-ping" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-indigo-velvet/5 rounded-full animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-3"
      >
        <h3 className="text-2xl font-bold text-dark-amethyst tracking-tight">
          Curating Your Selection
        </h3>
        <p className="text-dark-amethyst/50 font-medium max-w-xs mx-auto leading-relaxed">
          Be patient, your properties are loading...
        </p>
      </motion.div>

      {/* Subtle brand indicator */}
      <div className="mt-12 flex items-center gap-2">
        <div className="h-1 w-12 bg-linear-to-r from-transparent to-indigo-velvet/20 rounded-full" />
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-indigo-velvet/40">
          The Investor Labs
        </span>
        <div className="h-1 w-12 bg-linear-to-r from-indigo-velvet/20 to-transparent rounded-full" />
      </div>
    </div>
  );
}
