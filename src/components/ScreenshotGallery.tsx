"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Images, ZoomIn, X } from "lucide-react";

type Slide = { title: string; src: string };

export default function ScreenshotGallery({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const count = slides.length;
  const go = (delta: number) => setIndex((p) => (p + delta + count) % count);
  const current = slides[index];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-gray-200 bg-offwhite">
        {/* Slide (keyed so it re-fades on change) */}
        <div key={index} className="animate-fade-in absolute inset-0">
          {current.src ? (
            <button
              type="button"
              onClick={() => setZoomed(true)}
              aria-label={`Enlarge ${current.title}`}
              className="h-full w-full cursor-zoom-in"
            >
              <Image
                src={current.src}
                alt={current.title}
                fill
                quality={90}
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-contain"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-dark/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                <ZoomIn size={14} />
                Click to enlarge
              </span>
            </button>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center text-center">
              <Images size={30} className="text-sage" />
              <div className="mt-2 text-sm font-semibold text-dark">
                {current.title}
              </div>
              <div className="text-xs text-gray-500">Coming soon</div>
            </div>
          )}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-dark shadow-md transition-colors hover:bg-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-dark shadow-md transition-colors hover:bg-white"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      <div className="mt-4 text-center">
        <div className="text-sm font-semibold text-dark">{current.title}</div>
        <div className="mt-3 flex justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to ${s.title}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-sage" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox — full-screen, full-resolution view */}
      {zoomed && current.src && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setZoomed(false)}
        >
          <button
            type="button"
            onClick={() => setZoomed(false)}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <X size={22} />
          </button>
          <div className="relative h-full w-full max-w-6xl">
            <Image
              src={current.src}
              alt={current.title}
              fill
              unoptimized
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
