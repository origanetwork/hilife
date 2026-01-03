"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { fadeInProps } from "../components/Animate";
import Header from "../components/Header";
import Footer from "../components/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function About() {
  return (
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

      {/* Chairman's Message Section */}
      <motion.section {...fadeInProps} className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`${poppins.className} text-3xl sm:text-4xl md:text-5xl font-bold text-[#008AD2]`}>
              Chairman's <span className="text-[#AECB06]">Message</span>
            </h2>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-[#008AD2] to-[#AECB06] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-center">
            {/* Chairman Image */}
            <div className="relative">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#008AD2] to-[#AECB06] rounded-3xl transform rotate-6"></div>
                <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/about/chairman.jpg"
                    alt="Chairman"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className={`${poppins.className} text-xl md:text-2xl font-semibold text-[#008AD2]`}>
                  Mr. Bavutty
                </h3>
                <p className={`${poppins.className} text-sm md:text-base text-gray-600 mt-1`}>
                  Chairman & Managing Director
                </p>
              </div>
            </div>

            {/* Message Content */}
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100 relative">
              <div className="absolute top-6 left-6 text-[#008AD2] opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="relative space-y-4">
                <p className={`${poppins.className} text-base sm:text-lg leading-relaxed text-gray-700`}>
                  Founded in 2008, HiLife was created with a clear purpose—to improve sleep quality and support better health through thoughtfully designed mattresses.
                </p>

                <p className={`${poppins.className} text-base sm:text-lg leading-relaxed text-gray-700`}>
                  Trusted by families across South India, our medicated mattresses blend innovation and craftsmanship to deliver lasting comfort, support, and durability.
                </p>

                <p className={`${poppins.className} text-base sm:text-lg leading-relaxed text-gray-700`}>
                  Guided by our commitment to quality and customer satisfaction, we continue to enhance sleep wellness for every home we serve.
                </p>

                <div className="pt-6 border-t border-gray-200">
                  <p className={`${poppins.className} text-sm text-gray-500 italic`}>
                    "Quality sleep creates quality life — the HiLife promise."
                  </p>
                </div>
              </div>


              <div className="absolute bottom-6 right-6 text-[#AECB06] opacity-20 transform rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
