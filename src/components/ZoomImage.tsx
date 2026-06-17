"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn, X } from "lucide-react";

export default function ZoomImage({
  src,
  alt,
  aspect = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  aspect?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge ${alt}`}
        className={`relative ${aspect} w-full cursor-zoom-in overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          quality={90}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-dark/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          <ZoomIn size={14} />
          Click to enlarge
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <X size={22} />
          </button>
          <div className="relative h-full w-full max-w-6xl">
            <Image
              src={src}
              alt={alt}
              fill
              unoptimized
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
