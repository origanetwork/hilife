"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { MotionSection } from "./Motion";
import { motion, useAnimation } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useGetCategories } from "@/service";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function ShopByCategories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const { data, isLoading } = useGetCategories({
    page: 1,
    limit: 10,
  });

  const categories = data?.data || [];

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

      {isLoading ? (
        <div className="text-center py-12 text-gray-500">
          Loading categories...
        </div>
      ) : (!isLoading && categories.length === 0) ? (
        <div className="text-center py-12 text-gray-500">
          No categories available
        </div>
      ) : (
        <>
          {/* Desktop Grid View (lg and above) */}
          <div className="mx-auto mt-8 max-w-none hidden lg:block">
            <div className="grid grid-cols-5 gap-6 md:gap-8 xl:gap-5">
              {categories.map((c) => (
                <Link
                  key={c.id}
                  href={`/products?categoryId=${c.id}`}
                  className="group block"
                >
                  <div className="relative aspect-3/3 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5">
                    {c.imageUrl ? (
                      <Image
                        src={c.imageUrl}
                        alt={c.name}
                        fill
                        sizes="(min-width:1280px) 18vw, (min-width:768px) 25vw, 45vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-200" />
                    )}

                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3">
                      <div className={`${poppins.className} w-full text-center rounded-xl bg-white/80 text-gray-900 hover:text-[#008AD2] px-3 py-2 text-sm sm:text-base font-semibold shadow-sm`}>
                        {c.name}
                      </div>
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
                dragConstraints={{
                  // eslint-disable-next-line react-hooks/refs
                  left: -(categories.length - 1) * (constraintsRef.current?.offsetWidth || 0),
                  right: 0,
                }}
                dragElastic={0.2}
                animate={controls}
                onDragEnd={handleDragEnd}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {categories.map((c) => (
                  <motion.div
                    key={c.id}
                    className="min-w-full flex-shrink-0 px-4"
                  >
                    <Link
                      href={`/products?categoryId=${c.id}`}
                      className="group block"
                    >
                      <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 max-w-md mx-auto">
                        {c.imageUrl ? (
                          <Image
                            src={c.imageUrl}
                            alt={c.name}
                            fill
                            sizes="(max-width:1024px) 90vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gray-200" />
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                        <div className="absolute bottom-3 left-3 right-3">
                          <div
                            className={`${poppins.className} w-full text-center rounded-xl bg-white/80 text-gray-900 px-3 py-2 text-sm font-semibold`}
                          >
                            {c.name}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-6 mt-6">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className={`p-2 rounded-full transition-all ${currentIndex === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-[#008AD2] text-white"
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
                    onClick={() => {
                      setCurrentIndex(index);
                      const slideWidth = constraintsRef.current?.offsetWidth || 0;
                      controls.start({ x: -index * slideWidth });
                    }}
                    className={`h-2 rounded-full transition-all ${index === currentIndex
                        ? "w-8 bg-[#008AD2]"
                        : "w-2 bg-gray-300"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentIndex === categories.length - 1}
                className={`p-2 rounded-full transition-all ${currentIndex === categories.length - 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-[#008AD2] text-white"
                  }`}
                aria-label="Next slide"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>

        </>
      )}
    </MotionSection>
  );
}
