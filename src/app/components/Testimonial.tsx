'use client'

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const items = [
  {
    src: "/assets/testimonial/t1.jpg",
    name: "Hisham",
    rating: 4,
    quote:
      "After years of chronic back pain, the OrthoSupreme changed my life. I wake up pain‑free every single morning. It's truly a medical‑grade miracle.",
  },
  {
    src: "/assets/testimonial/t2.jpg",
    name: "Sabik K",
    rating: 4,
    quote:
      "Recovery is everything in my sport. This mattress helps me wake up refreshed and ready to perform. The pressure relief technology is incredible!",
  },
  {
    src: "/assets/testimonial/t3.jpg",
    name: "Anshid",
    rating: 4,
    quote:
      "As a nurse working long shifts, quality sleep is essential. The CloudComfort Memory has given me the best sleep of my life. Highly recommend!",
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center justify-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill={i < rating ? "#FF7A00" : "#C7C7C7"}
          aria-hidden="true"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonial() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const id = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % items.length;
        const child = el.children[next] as HTMLElement | undefined;
        if (child) {
          const childCenter = child.offsetLeft + child.offsetWidth / 2;
          const targetLeft = Math.max(
            0,
            Math.min(childCenter - el.clientWidth / 2, el.scrollWidth - el.clientWidth)
          );
          el.scrollTo({ left: targetLeft, behavior: "smooth" });
        }
        return next;
      });
    }, 3500);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-20">
      <div className="w-full text-center">
        <h2
          className={`${playfair.className} font-semibold text-[32px] md:text-[40px] leading-[100%] bg-[linear-gradient(180deg,#AECB06_57.48%,#576503_69.82%)] bg-clip-text text-transparent`}
        >
          What our clients say about us.
        </h2>
      </div>

      <div className="mt-10 md:mt-12">
        {/* Mobile carousel */}
        <div className="md:hidden -mx-6 overflow-x-hidden">
          <div className="px-6">
            <div
              ref={scrollerRef}
              className="flex gap-12 overflow-x-auto snap-x snap-mandatory"
              style={{ scrollSnapType: "x mandatory", scrollPaddingLeft: 24, scrollPaddingRight: 24, overscrollBehaviorX: 'contain' }}
            >
            {items.map((t) => (
              <article
                key={t.name}
                className="snap-center shrink-0 w-[88%] max-w-[360px] bg-white border-2 border-[#008AD2] rounded-[16px] p-8"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-200">
                    <Image src={t.src} alt={t.name} width={96} height={96} className="h-24 w-24 object-cover" />
                  </div>
                  <div className={`${poppins.className} mt-3 text-[16px] font-semibold text-[#101828]`}>{t.name}</div>
                  <div className="mt-2"><StarRow rating={t.rating} /></div>
                  <p className={`${poppins.className} mt-3 text-[14px] leading-[22px] text-[#475467]`}>
                    {t.quote}
                  </p>
                </div>
              </article>
            ))}
            </div>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {items.map((t) => (
            <article
              key={t.name}
              className="bg-white border-2 border-[#008AD2] rounded-[16px] p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-20 w-20 rounded-full overflow-hidden bg-gray-200">
                  <Image src={t.src} alt={t.name} width={80} height={80} className="h-20 w-20 object-cover" />
                </div>
                <div className={`${poppins.className} mt-2 text-[18px] font-semibold text-[#101828]`}>{t.name}</div>
                <div className="mt-1"><StarRow rating={t.rating} /></div>
                <p className={`${poppins.className} mt-2 text-[14px] leading-[22px] text-[#475467]`}>
                  {t.quote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
