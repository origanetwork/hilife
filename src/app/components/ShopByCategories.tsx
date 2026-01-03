"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { MotionSection } from "./Motion";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const categories = [
  { title: "Mattress", src: "/assets/category/M.jpg", href: "/products?category=Mattresses" },
  { title: "Comforts", src: "/assets/category/C.png", href: "/products?category=Comforts" },
  { title: "Pillows", src: "/assets/category/P.jpg", href: "/products?category=Pillows" },
  { title: "Foldable Mattress", src: "/assets/category/F.png", href: "/products?category=Foldable%20Mattresses" },
  { title: "Accessories", src: "/assets/category/A.png", href: "/products?category=Accessories" },
];

export default function ShopByCategories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    const slideWidth = constraintsRef.current?.offsetWidth || 0;
    controls.start({
      x: -index * slideWidth,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    });
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      const slideWidth = constraintsRef.current?.offsetWidth || 0;
      controls.start({
        x: -newIndex * slideWidth,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < categories.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      const slideWidth = constraintsRef.current?.offsetWidth || 0;
      controls.start({
        x: -newIndex * slideWidth,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      });
    }
  };

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const slideWidth = constraintsRef.current?.offsetWidth || 0;
    const swipeThreshold = slideWidth / 4;

    if (offset.x < -swipeThreshold && currentIndex < categories.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      controls.start({
        x: -newIndex * slideWidth,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      });
    } else if (offset.x > swipeThreshold && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      controls.start({
        x: -newIndex * slideWidth,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      });
    } else {
      controls.start({
        x: -currentIndex * slideWidth,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      });
    }
  };

  return (
    <MotionSection className="w-full px-6 py-12 md:py-16">
      <div className="max-w-5xl mx-auto text-center">
        <span
          className={`${poppins.className} text-3xl md:text-3xl lg:text-4xl font-bold text-[#008AD2] bg-clip-text`}
        >
          Shop By <span className="text-3xl md:text-3xl lg:text-4xl text-[#AECB06]">Categories</span>
        </span>
        <p
          className={`${poppins.className} mt-4 text-[#6E6E6E] text-md md:text-lg leading-tight font-medium `}
        >
          Explore our curated mattress categories to find your perfect comfort match today.
        </p>
      </div>

      {/* Desktop Grid View (lg and above) */}
      <div className="mx-auto mt-8 max-w-none hidden lg:block">
        <div className="grid grid-cols-5 gap-6 md:gap-8 xl:gap-5">
          {categories.map((c) => (
            <Link key={c.title} href={c.href} className="group block">
              <div className="relative aspect-3/3 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5">
                {c.src ? (
                  <Image src={c.src} alt={c.title} fill sizes="(min-width:1280px) 18vw, (min-width:768px) 25vw, 45vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                ) : (
                  <div className="absolute inset-0 bg-gray-200" />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className={`${poppins.className} w-full text-center rounded-xl bg-white/80 text-gray-900 hover:text-[#008AD2] px-3 py-2 text-sm sm:text-base font-semibold shadow-sm`}>{c.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile & Tablet Slider View */}
      <div className="mx-auto mt-8 max-w-none lg:hidden">
        <div className="overflow-hidden" ref={constraintsRef}>
          <motion.div
            className="flex"
            drag="x"
            // eslint-disable-next-line react-hooks/refs
            dragConstraints={{ left: -(categories.length - 1) * (constraintsRef.current?.offsetWidth || 0), right: 0 }}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            animate={controls}
            onDragEnd={handleDragEnd}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {categories.map((c) => (
              <motion.div
                key={c.title}
                className="min-w-full flex-shrink-0 px-4"
              >
                <Link href={c.href} className="group block">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 max-w-md mx-auto">
                    {c.src ? (
                      <Image src={c.src} alt={c.title} fill sizes="(max-width: 1024px) 90vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                    ) : (
                      <div className="absolute inset-0 bg-gray-200" />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className={`${poppins.className} w-full text-center rounded-xl bg-white/80 text-gray-900 hover:text-[#008AD2] px-3 py-2 text-sm sm:text-base font-semibold shadow-sm`}>{c.title}</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots and Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mt-6">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full shadow-md transition-all duration-200 ${
              currentIndex === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50"
                : "bg-[#008AD2] text-white hover:bg-[#0077b8] active:scale-95"
            }`}
            aria-label="Previous slide"
          >
            <FiChevronLeft size={20} />
          </button>

          {/* Pagination Dots */}
          <div className="flex gap-2">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#008AD2]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex === categories.length - 1}
            className={`p-2 rounded-full shadow-md transition-all duration-200 ${
              currentIndex === categories.length - 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50"
                : "bg-[#008AD2] text-white hover:bg-[#0077b8] active:scale-95"
            }`}
            aria-label="Next slide"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </MotionSection>
  );
}
