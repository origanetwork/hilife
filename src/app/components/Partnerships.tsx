"use client";
import { useEffect, useRef } from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import { MotionSection } from "./Motion";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Partnerships() {
  const partners = Array.from({ length: 12 }, (_, i) => `/assets/partner/${i + 1}.png`);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = carouselRef.current;
    if (!el) return;
    if (window.matchMedia("(min-width: 1024px)").matches) return;
    const items = Array.from(el.children) as HTMLElement[];
    if (items.length === 0) return;
    let index = 0;
    const id = setInterval(() => {
      index = (index + 1) % items.length;
      const target = items[index] as HTMLElement;
      el.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    }, 2500);
    return () => clearInterval(id);
  }, []);
  return (
    <MotionSection className="w-full mt-6 md:mt-0 lg:mt-30 px-6 pt-0 md:pt-0 pb-10 md:pb-14">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`${playfair.className} font-semibold text-[40px] leading-[100%] bg-[linear-gradient(180deg,#AECB06_57.48%,#576503_69.82%)] bg-clip-text text-transparent lg:whitespace-nowrap`}
        >
          Trusted Partnerships That Strengthen Our Commitment to Quality
        </h2>
        <p
          className={`${poppins.className} mt-4 text-[#6E6E6E] text-[20px] leading-[100%] font-medium`}
        >
          Collaborating with leading brands to deliver unmatched comfort and reliable sleep solutions.
        </p>
      </div>
      <div className="w-full mt-14">
        <div className="block lg:hidden w-full">
          <div
            ref={carouselRef}
            className="flex gap-4 w-full overflow-x-auto snap-x snap-mandatory"
          >
            {partners.map((src, idx) => (
              <div
                key={idx}
                className="shrink-0 snap-center border border-[#E1E1E1] shadow-[0_4px_18px_0_rgba(0,0,0,0.25)] px-6 py-4"
              >
                <img src={src} alt={`Partner ${idx + 1}`} className="h-12 w-auto" />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-6 gap-6 w-full">
          {partners.map((src, idx) => (
            <div
              key={idx}
              className="border border-[#E1E1E1] shadow-[0_4px_18px_0_rgba(0,0,0,0.25)] flex items-center justify-center px-6 py-4"
            >
              <img src={src} alt={`Partner ${idx + 1}`} className="h-12 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}


