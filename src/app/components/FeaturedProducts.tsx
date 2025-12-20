"use client";
import Image from "next/image";
import { Playfair_Display, Poppins } from "next/font/google";
import { MotionSection } from "./Motion";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "./Animate";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const products = [
  {
    title: "ORTHOPEDIC",
    image: "/assets/products/O.jpg",
    rating: 4.7,
    desc: "Firm support mattresses engineered to relieve back and provide restful sleep.",
    price: "₹ 21,332",
    mrp: "₹ 21,332",
  },
  {
    title: "FOLDABLE",
    image: "/assets/products/F.png",
    rating: 4.6,
    desc: "Convenient foldable design for easy storage and versatile comfort anywhere.",
    price: "₹ 15,499",
    mrp: "₹ 18,999",
  },
  {
    title: "FOLDABLE PRO",
    image: "/assets/products/F (2).png",
    rating: 4.8,
    desc: "Premium foldable mattress with enhanced cushioning and durable build.",
    price: "₹ 19,999",
    mrp: "₹ 23,499",
  },
  {
    title: "MATTRESS",
    image: "/assets/products/M.png",
    rating: 4.7,
    desc: "Balanced comfort and support tailored for everyday rejuvenating sleep.",
    price: "₹ 24,990",
    mrp: "₹ 29,990",
  },
];

export default function FeaturedProducts() {
  return (
    <MotionSection id="products" className="w-full px-6 pt-6 md:pt-8 pb-12 md:pb-16 scroll-mt-28 md:scroll-mt-36">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className={`${poppins.className} font-bold text-[40px] leading-[100%]  bg-clip-text text-[#008AD2]`}
        >
          Featured <span className="text-[#AECB06]">Products</span>
        </h2>
        <p
          className={`${poppins.className} mt-4 text-[#6E6E6E] text-[20px] leading-[100%] font-medium`}
        >
          Upgrade your sleep instantly with our best-selling, highly recommended featured products.
        </p>
      </div>
      <div className="w-full mt-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 lg:gap-8 sm:overflow-visible"
        >
          {products.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className="flex-none snap-center w-[85%] sm:w-auto rounded-2xl border border-black/10 bg-white shadow-md overflow-hidden mx-0 sm:mx-auto lg:max-w-[330px]"
            >
              <div className="relative aspect-4/3">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className={`${poppins.className} uppercase text-[12px] sm:text-[13px] font-semibold text-gray-700`}>
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[13px] font-semibold text-gray-800">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
                      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.21l8.2-1.192z" />
                    </svg>
                    <span>{p.rating}</span>
                  </div>
                </div>
                <p className="mt-2 text-[13px] text-gray-600">
                  {p.desc}
                </p>
                <div className="mt-4 flex items-baseline gap-3">
                  <div className="text-[18px] font-semibold text-gray-900">{p.price}</div>
                  <div className="text-[14px] text-gray-400 line-through">{p.mrp}</div>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,#006397_83.62%,#044668_100%)] text-white text-[14px] font-semibold py-3 shadow-sm hover:brightness-110"
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
      </div>
    </MotionSection>
  );
}
