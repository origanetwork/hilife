"use client";
import Image from "next/image";
import { Playfair_Display, Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInProps } from "./Animate";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function About() {
  return (
    <motion.section {...fadeInProps} id="about" className="w-full px-6 pt-0 pb-0 md:pb-2 scroll-mt-28 md:scroll-mt-36">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr] lg:grid-cols-[1.8fr_1fr] gap-2 md:gap-10 lg:gap-16 items-start">
        {/* Left: Image */}
        <div className="relative w-full lg:w-full mx-auto md:mx-0 h-[200px] sm:h-[260px] md:h-[380px] lg:h-[440px] xl:h-[500px] max-h-[500px] rounded-t-[220px] md:rounded-t-[320px] overflow-hidden">
          <Image
            src="/assets/about/ab-left.png"
            alt="About HiLife"
            fill
            sizes="(min-width: 1024px) 60vw, (min-width: 640px) 65vw, 100vw"
            className="object-contain object-center md:object-contain md:object-center"
            priority={false}
          />
        </div>

        {/* Right: Content */}
        <div className="lg:mt-20">
          <h2
            className={`${playfair.className} font-normal text-[52px] leading-[100%] bg-[linear-gradient(180deg,#AECB06_57.48%,#576503_69.82%)] bg-clip-text text-transparent`}
          >
            About us
          </h2>

          <p
            className={`${poppins.className} mt-3 md:mt-6 text-[16px] leading-[27px] text-[#514B81]`}
          >
            At HiLife, we believe sleep is more than rest it’s renewal. For over a decade, we have dedicated ourselves to crafting mattresses that blend modern sleep technology with superior comfort, helping thousands wake up refreshed, pain-free, and ready for life.
          </p>

          <button
            type="button"
            className="mt-3 md:mt-6 inline-flex items-center justify-center rounded-[14px] p-[12px] text-white bg-[linear-gradient(90deg,#006397_56.5%,#002031_100%)] shadow-sm hover:brightness-110"
          >
            Know More <span aria-hidden> →</span>
          </button>
        </div>
      </div>
    </motion.section>
  );
}
