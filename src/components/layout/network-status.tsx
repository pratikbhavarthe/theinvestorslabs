/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "framer-motion";

export function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Initial check
    if (typeof window !== "undefined") {
      setIsOnline(navigator.onLine);
    }

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isOnline && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6 text-center"
        >
          <div
            className="w-full max-w-md md:max-w-lg mb-8 select-none pointer-events-none"
            onContextMenu={(e) => e.preventDefault()}
          >
            <DotLottieReact
              src="/animations/no-connection.json"
              loop
              autoplay
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-4 tracking-tight">
            No Internet Connection
          </h2>
          <p className="text-dark-amethyst/60 text-lg md:text-xl max-w-md leading-relaxed">
            Please check your network settings and try again. We&apos;ll
            auto-reconnect when you&apos;re back online.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
