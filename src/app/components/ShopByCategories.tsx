"use client";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Poppins } from "next/font/google";
import { MotionSection } from "./Motion";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const categories = [
  { title: "Mattress", src: "/assets/category/M.jpg", href: "#" },
  { title: "Comforts", src: "/assets/category/C.png", href: "#" },
  { title: "Pillows", src: "/assets/category/P.jpg", href: "#" },
  { title: "Foldable Mattress", src: "/assets/category/F.png", href: "#" },
  { title: "Accessories", src: "/assets/category/A.png", href: "#" },
];

export default function ShopByCategories() {
  return (
    <MotionSection className="w-full px-6 py-12 md:py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className={`${playfair.className} font-semibold text-[40px] leading-[100%] bg-[linear-gradient(180deg,#AECB06_57.48%,#576503_69.82%)] bg-clip-text text-transparent`}
        >
          Shop By Categories
        </h2>
        <p
          className={`${poppins.className} mt-4 text-[#6E6E6E] text-[20px] leading-[100%] font-medium`}
        >
          Explore our curated mattress categories to find your perfect comfort match today.
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-none">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 xl:gap-10">
          {categories.map((c) => (
            <Link key={c.title} href={c.href} className="group block">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5">
                {c.src ? (
                  <Image src={c.src} alt={c.title} fill sizes="(min-width:1280px) 18vw, (min-width:768px) 25vw, 45vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                ) : (
                  <div className="absolute inset-0 bg-gray-200" />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className={`${poppins.className} w-full text-center rounded-xl bg-white/80 text-gray-900 px-3 py-2 text-sm sm:text-base font-semibold shadow-sm`}>{c.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}


