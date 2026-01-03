"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import Header from "./Header";
import { motion } from "framer-motion";
import { fadeInProps } from "./Animate";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function Hero() {
  const images = ["/assets/Hero/banner-1.png","/assets/Hero/banner-2.jpg","/assets/Hero/banner-3.jpg", "/assets/Hero/banner-4.png"]; 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <motion.section {...fadeInProps} className="relative w-full bg-white md:bg-[linear-gradient(to_right,white_0%,white_48%,#008AD2_48%,#008AD2_100%)] pt-24 md:pt-0">
      <Header />
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-stretch">
        {/* Blue layer to fill the rounded top-right cutout of the left image */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-[62%] bg-[#008AD2] hidden md:block" />
        {/* Left: Photo with large bottom-left radius */}
        <div className="relative z-10 h-[420px] sm:h-[500px] md:h-[640px] overflow-hidden md:rounded-bl-[144px] rounded-tr-[72px] md:rounded-tr-[128px]">
          {images.map((src, i) => (
            <motion.div
              key={`${src}-${i}`}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === i ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={src}
                alt="Floating bed on clouds"
                fill
                sizes="(min-width: 768px) 70vw, 100vw"
                className="object-cover"
                priority={i === 0}
              />
            </motion.div>
          ))}
          {images.length > 1 && (
            <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
              <button
                aria-label="Previous"
                onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
                className="hidden md:inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white"
              >
                ‹
              </button>
              {images.map((_, i) => (
                <button
                  key={`dot-${i}`}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={index === i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full ${index === i ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
              <button
                aria-label="Next"
                onClick={() => setIndex((i) => (i + 1) % images.length)}
                className="hidden md:inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white"
              >
                ›
              </button>
            </div>
          )}
        </div>

        {/* Right: Blue panel with headline + CTA */}
        <motion.div {...fadeInProps} className="relative z-10 flex flex-col justify-center gap-6 bg-[#008AD2] px-6 md:px-10 pt-10 md:pt-36 lg:pt-40 pb-10 rounded-bl-[50px] ">
          <motion.h1 {...fadeInProps} className={`${poppins.className} uppercase text-white text-[34px] sm:text-[40px] md:text-[52px] leading-[111%] font-semibold`}>
            Sleep Like <br /> You’re Floating <br /> on Clouds
          </motion.h1>

          <div>
            <motion.div {...fadeInProps}>
              <Link href="/products" className="inline-flex items-center gap-2 rounded-[14px] bg-[linear-gradient(84.62deg,#000000_84.16%,#5A5A5A_95.12%)] text-white px-[12px] py-[12px] text-sm md:text-[15px] font-medium shadow">
                Explore Products
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </div>

          {/* Decorative vector */}
          <div className="pointer-events-none absolute right-4 bottom-4 md:right-6 md:bottom-6 opacity-80">
            <Image
              src="/assets/Hero/Vector.png"
              alt="Decoration"
              width={120}
              height={220}
              className="w-auto h-40 md:h-80"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
