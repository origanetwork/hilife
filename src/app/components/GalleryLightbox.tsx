"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { MotionDiv } from "./Motion";

type Props = {
  images: string[];
};

export default function GalleryLightbox({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const PAGE_SIZE = 8;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  return (
    <>
      <MotionDiv
        className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {images.slice(0, visibleCount).map((src, i) => {
          if (!src.startsWith('http') && !src.startsWith('/')) {
            return null // ⛔ skip invalid URLs
          }

          return (
            <MotionDiv
              key={`${src}-${i}`}
              className="relative rounded-2xl overflow-hidden bg-white border border-black/10 shadow aspect-square cursor-pointer"
              onClick={() => openAt(i)}
            >
              <Image
                src={src}
                alt="Gallery"
                fill
                sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                className="object-cover"
              />
            </MotionDiv>
          )
        })}
      </MotionDiv>

      {visibleCount < images.length && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => Math.min(c + PAGE_SIZE, images.length))}
            className="px-5 py-2.5 rounded-full border border-black/10 bg-white text-[#101828] shadow hover:bg-gray-50"
          >
            Load more
          </button>
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/70"
          onClick={close}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[85vh] px-4" onClick={(e) => e.stopPropagation()}>
            <button
              aria-label="Close"
              onClick={close}
              className="absolute top-4 right-4 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/90 text-black shadow"
            >
              ✕
            </button>

            <button
              aria-label="Previous"
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/90 text-black shadow"
            >
              ‹
            </button>

            <div className="relative mx-auto h-full flex items-center justify-center">
              <div className="relative w-full aspect-4/3 max-h-[85vh]">
                <Image
                  src={images[index]}
                  alt="Preview"
                  fill
                  sizes="(min-width:1024px) 70vw, 90vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/90 text-black shadow"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}
