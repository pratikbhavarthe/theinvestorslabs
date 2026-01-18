"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryProps {
  images: string[];
  title: string;
  videoUrl?: string;
}

export function PropertyGallery({ images, title, videoUrl }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [zoom, setZoom] = useState(100);
  const videoRef = useRef<HTMLVideoElement>(null);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);

  // Unified items list with video as the first item
  const galleryItems = videoUrl
    ? [
        { type: "video", url: videoUrl },
        ...images.map((img) => ({ type: "image", url: img })),
      ]
    : images.map((img) => ({ type: "image", url: img }));

  const nextItem = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevItem = () => {
    setActiveIndex(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length,
    );
  };

  const currentItem = galleryItems[activeIndex];

  // Auto-play/pause logic for main stage video
  useEffect(() => {
    if (currentItem?.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [activeIndex, currentItem]);

  return (
    <div className="grid grid-cols-12 gap-2 md:gap-4">
      {/* Main Stage */}
      <div className="col-span-12 lg:col-span-11 relative aspect-video md:aspect-[1.8/1] rounded-2xl md:rounded-[2.5rem] overflow-hidden group bg-dark-amethyst/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {currentItem.type === "video" ? (
              <video
                ref={videoRef}
                src={currentItem.url}
                className="w-full h-full object-cover"
                muted
                playsInline
                loop
                autoPlay
              />
            ) : (
              <Image
                src={currentItem.url || ""}
                alt={`${title} - View ${activeIndex + 1}`}
                fill
                className="object-cover transition-transform duration-2000 group-hover:scale-105"
                priority
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Expansion Trigger */}
        <button
          onClick={() => setIsExpanded(true)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/40 transition-all z-20 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={prevItem}
          className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-dark-amethyst hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-10 scale-90 group-hover:scale-100"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextItem}
          className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-dark-amethyst hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-10 scale-90 group-hover:scale-100"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Bottom Center Pill */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="px-6 py-2.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
            <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.25em]">
              Property Overview
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnails (Sidecards) */}
      <div className="col-span-12 lg:col-span-1 flex lg:flex-col gap-2 mt-4 lg:mt-0 max-h-[16/9] lg:max-h-none overflow-x-auto lg:overflow-y-auto scrollbar-hide pb-2 lg:pb-0">
        {galleryItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative aspect-video w-24 lg:w-full shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
              activeIndex === idx
                ? "opacity-100 scale-[0.95] ring-1 ring-indigo-velvet shadow-sm"
                : "opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-[0.98]"
            }`}
          >
            {item.type === "video" ? (
              <div className="relative w-full h-full bg-black flex items-center justify-center">
                <div className="absolute inset-0 bg-indigo-velvet/20 z-10" />
                <svg
                  className="w-6 h-6 text-white z-20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                {item.url && (
                  <video
                    src={item.url}
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    muted
                    playsInline
                  />
                )}
              </div>
            ) : (
              <Image
                src={item.url || ""}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            )}
          </button>
        ))}
      </div>

      {/* Expansion Modal (Match OpenHouse) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-dark-amethyst/95 backdrop-blur-2xl flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 text-white">
              <button
                onClick={() => setIsExpanded(false)}
                className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-indigo-velvet transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back
              </button>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
                {title} — {activeIndex + 1} of {galleryItems.length}
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Stage */}
            <div className="flex-1 relative flex items-center justify-center p-4 md:p-12 overflow-hidden">
              <button
                onClick={prevItem}
                className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-20"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: zoom / 100 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-dark-amethyst/10"
              >
                {currentItem.type === "video" ? (
                  <video
                    ref={expandedVideoRef}
                    src={currentItem.url}
                    className="w-full h-full object-contain bg-black"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <Image
                    src={currentItem.url || ""}
                    alt={`${title} Expanded`}
                    fill
                    className="object-cover"
                  />
                )}
              </motion.div>

              <button
                onClick={nextItem}
                className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-20"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Controls Bar */}
            <div className="p-8 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-full p-2 flex items-center gap-2 border border-white/10">
                <button
                  onClick={() => setZoom(Math.max(50, zoom - 10))}
                  className="p-3 hover:bg-white/10 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <span className="text-white text-[10px] font-bold w-16 text-center">
                  {zoom}%
                </span>
                <button
                  onClick={() => setZoom(Math.min(200, zoom + 10))}
                  className="p-3 hover:bg-white/10 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
                <div className="w-px h-6 bg-white/20 mx-2" />
                <button
                  onClick={() => setZoom(100)}
                  className="p-3 hover:bg-white/10 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
                {currentItem.type === "video" && (
                  <button
                    onClick={() => {
                      if (expandedVideoRef.current) {
                        if (expandedVideoRef.current.paused) {
                          expandedVideoRef.current.play();
                        } else {
                          expandedVideoRef.current.pause();
                        }
                      }
                    }}
                    className="p-3 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
