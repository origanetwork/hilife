"use client";
import Image from "next/image";
import { Playfair_Display, Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInProps } from "../components/Animate";
import Header from "../components/Header";
import Footer from "../components/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","600"],
});

export default function About() {
  return(
    <>
      <Header />
      <motion.section {...fadeInProps} id="about" className="w-full mt-25 pt-6 pb-12 px-4 sm:px-6 lg:px-8 scroll-mt-24 md:scroll-mt-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr] lg:grid-cols-[2fr_1.2fr] gap-8 md:gap-10 lg:gap-16 items-start md:items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 md:pr-6 lg:pr-10 max-w-2xl mx-auto md:mx-0">
            <h2 className={`${poppins.className} font-bold text-4xl sm:text-5xl md:text-[52px] text-[#008AD2]`}>
              About <span className="text-[#AECB06]">Us</span>
            </h2>

            <div className="mt-4 md:mt-6 space-y-4">
              <p className={`${poppins.className} text-[15px] sm:text-[16px] leading-7 text-[#514B81]`}>
                At HiLife, we believe sleep is more than rest it's renewal. For over a decade, we have dedicated ourselves to crafting mattresses that blend modern sleep technology with superior comfort, helping thousands wake up refreshed, pain-free, and ready for life.
              </p>

              <p className={`${poppins.className} text-[15px] sm:text-[16px] leading-7 text-[#514B81]`}>
                From premium materials to rigorous quality checks, every mattress is thoughtfully designed to support your body's natural alignment and elevate your everyday well-being.
              </p>

              <ul className={`${poppins.className} mt-4 space-y-2.5 text-sm sm:text-[15px] leading-7 text-[#3E386B]`}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Advanced pressure-relief foams for deeper sleep</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Breathable layers for cooler nights</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Durable build backed by reliable warranties</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              className={`${poppins.className} mt-6 md:mt-8 w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-medium rounded-xl bg-linear-to-r from-[#006397] to-[#002031] text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2`}
            >
              <span>Know More</span>
              <span className="inline-block transform transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
          
          {/* Image Container */}
          <div className="order-1 md:order-2 relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-t-3xl md:rounded-t-[200px] lg:rounded-t-[250px] overflow-hidden bg-gray-50">
            <Image
              src="/assets/about/ab-left.png"
              alt="About HiLife"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 40vw"
              className="object-contain object-center"
              priority
            />
          </div>

      
      </div>
    </motion.section>
    <Footer/>
    </>
  );
}
