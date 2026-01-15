"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { MotionSection } from "./Motion";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "./Animate";
import { useGetProducts } from "@/service/hooks";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function FeaturedProducts() {
  const { data, isLoading, error } = useGetProducts({ productType: 'FEATURED', limit: 12 });
  const products = data?.data || [];

  return (
    <MotionSection id="products" className="w-full px-6 pt-2 md:pt-8 pb-12 md:pb-16 scroll-mt-28 md:scroll-mt-36">
      <div className="max-w-7xl mx-auto text-center">
        <span
          className={`${poppins.className} text-3xl md:text-3xl lg:text-4xl font-bold leading-[100%]  bg-clip-text text-[#008AD2]`}
        >
          Featured <span className="text-3xl md:text-3xl lg:text-4xl text-[#AECB06]">Products</span>
        </span>
        <p
          className={`${poppins.className} mt-4 text-[#6E6E6E] text-md md:text-lg leading-tight font-medium`}
        >
          Upgrade your sleep instantly with our best-selling, highly recommended featured products.
        </p>
      </div>
      <div className="w-full mt-8 mx-14">
        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#008AD2]"></div>
          </div>
        ) : error ? (
          <div className="text-center py-16 text-red-500">
            <p>Failed to load featured products. Please try again later.</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <p>No featured products available at the moment.</p>
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-10 md:gap-6 md:overflow-visible"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={staggerItem}
                className="flex flex-col flex-none snap-center w-[280px] md:w-auto rounded-2xl border border-black/10 bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[480px] md:h-[520px] lg:h-[540px]"
              >
                <div className="relative w-full h-[45%]">
                  <Image
                    src={product.images?.[0]?.imageUrl || "/assets/Hero/banner-1.png"}
                    alt={product.name}
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 280px"
                    className="object-cover"
                    priority={false}
                  />
                </div>
                <div className="p-5 flex flex-col h-[55%]">
                  <div className="flex-grow mb-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className={`${poppins.className} uppercase text-sm md:text-base font-semibold text-gray-700 line-clamp-2`}>
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs font-semibold text-gray-800 flex-shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
                          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.21l8.2-1.192z" />
                        </svg>
                        <span>4.7</span>
                      </div>
                    </div>

                    <p className={`${poppins.className} mt-2 text-xs md:text-sm font-light text-gray-400 line-clamp-2`}>
                      {product.description || ""}
                    </p>

                    <div className="mt-4 flex items-baseline gap-2">
                      <div className="text-lg md:text-xl font-semibold text-gray-900">
                        ₹ {product.offerPrice?.toLocaleString('en-IN') || product.price.toLocaleString('en-IN')}
                      </div>
                      {product.offerPrice && (
                        <div className="text-sm text-gray-400 line-through">
                          ₹ {product.price.toLocaleString('en-IN')}
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mt-auto w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,#006397_83.62%,#044668_100%)] text-white text-sm font-semibold py-3 shadow-sm hover:brightness-110 transition-all"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </MotionSection>
  );
}
