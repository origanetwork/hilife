"use client";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Header from "./Header";
import { motion } from "framer-motion";
import { fadeInProps } from "./Animate";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Hero() {
  return (
    <motion.section {...fadeInProps} className="relative w-full bg-white md:bg-[linear-gradient(to_right,white_0%,white_48%,#008AD2_48%,#008AD2_100%)] pt-24 md:pt-0">
      <Header />
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-stretch">
        {/* Blue layer to fill the rounded top-right cutout of the left image */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-[62%] bg-[#008AD2] hidden md:block" />
        {/* Left: Photo with large bottom-left radius */}
        <div className="relative z-10 h-[420px] sm:h-[500px] md:h-[640px] overflow-hidden rounded-bl-[96px] md:rounded-bl-[144px] rounded-tr-[72px] md:rounded-tr-[128px]">
          <Image
            src="/assets/Hero/Left.png"
            alt="Floating bed on clouds"
            fill
            sizes="(min-width: 768px) 70vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Blue panel with headline + CTA */}
        <motion.div {...fadeInProps} className="relative z-10 flex flex-col justify-center gap-6 bg-[#008AD2] px-6 md:px-10 pt-10 md:pt-36 lg:pt-40 pb-10 rounded-tr-[40px] md:rounded-tr-[56px]">
          <motion.h1 {...fadeInProps} className={`${playfair.className} uppercase text-white text-[34px] sm:text-[40px] md:text-[52px] leading-[111%] font-semibold`}>
            Sleep Like <br /> You’re Floating <br /> on Clouds
          </motion.h1>

          <div>
            <motion.button {...fadeInProps} className="inline-flex items-center gap-2 rounded-[14px] bg-[linear-gradient(84.62deg,#000000_84.16%,#5A5A5A_95.12%)] text-white px-[12px] py-[12px] text-sm md:text-[15px] font-medium shadow">
              Explore Products
              <span aria-hidden>→</span>
            </motion.button>
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
