"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { MotionSection } from "./Motion";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "./Animate";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const products = [
  {
    title: "ELEGENT (MEDICAL)",
    image: "/assets/products/1.jpg",
    rating: 4.7,
    desc: "Special mattresses designed to relieve back pain, made with high-density rebonded foam and super-soft foam, and covered in high-quality knitted fabric with protection against fungus, bacteria, and dust mites.",
    price: "₹ 17,730",
    mrp: "₹ 21,332",
  },
  {
    title: "DELUXE MEMORY",
    image: "/assets/hero/banner-2.jpg",
    rating: 4.6,
    desc: "These series mattresses are made with high-density rebonded foam, super-soft foam, and memory foam, featuring high-quality knitted fabric with protection against fungus, bacteria, and dust mites to help relieve persistent back pain.",
    price: "₹ 38,150",
    mrp: "₹ 45,990",
  },
  {
    title: "PREMIUM (MEDICAL)",
    image: "/assets/hero/banner-3.jpg",
    rating: 4.8,
    desc: "These series mattresses are made with high-density rebonded foam, super-soft foam, and memory foam, featuring high-quality knitted fabric with protection against fungus, bacteria, and dust mites to help relieve persistent back pain.",
    price: "₹ 16,850",
    mrp: "₹ 20,499",
  },
  {
    title: "LATEX",
    image: "/assets/hero/banner-4.png",
    rating: 4.7,
    desc: "These series mattresses are made from natural latex sourced from the rubber tree Hevea brasiliensis, free from harmful chemicals. They offer a soft initial feel, adaptive body support, and proper spinal alignment for excellent back support.",
    price: "₹ 62,350",
    mrp: "₹ 70,990",
  },
];

export default function FeaturedProducts() {
  return (
    <MotionSection id="products" className="w-full px-6 pt-2 md:pt-8 pb-12 md:pb-16 scroll-mt-28 md:scroll-mt-36">
      <div className="max-w-5xl mx-auto text-center">
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
      <div className="w-full mt-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 lg:gap-5 sm:overflow-visible"
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
                  <h3 className={`${poppins.className} uppercase text-2xl sm:text-[13px] font-semibold text-gray-700`}>
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[13px] font-semibold text-gray-800">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
                      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.21l8.2-1.192z" />
                    </svg>
                    <span>{p.rating}</span>
                  </div>
                </div>
                <p className={`${poppins.className} mt-2 text-[12px] font-light text-gray-400`}>
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
