"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div
        className="w-full max-w-md md:max-w-lg mb-8 select-none pointer-events-none"
        onContextMenu={(e) => e.preventDefault()}
      >
        <DotLottieReact
          src="https://lottie.host/cc357f49-2c1a-4d42-aa13-d57212709c41/5T4tZ30MVl.lottie"
          loop
          autoplay
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-dark-amethyst mb-4 tracking-tight">
        Page Not Found
      </h1>
      <p className="text-dark-amethyst/60 text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <Link href="/">
        <InteractiveHoverButton className="border border-indigo-velvet">
          Return Home
        </InteractiveHoverButton>
      </Link>
    </main>
  );
}
