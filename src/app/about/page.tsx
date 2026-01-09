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
      <motion.section {...fadeInProps} id="about" className="w-full mt-25 pt-6 lg:pt-12 pb-12 px-4 sm:px-6 lg:px-8 scroll-mt-24 md:scroll-mt-28">
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
          <div className="order-1 md:order-2 relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[400px] xl:h-[480px] rounded-t-3xl md:rounded-t-[200px] lg:rounded-t-[250px] overflow-hidden bg-gray-50">
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
                    src="/assets/about/bavutty.jpeg"
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

      {/* Statistics Section */}
      <motion.section
        {...fadeInProps}
        className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#008AD2] via-[#0099E6] to-[#00A8E8] relative overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#AECB06] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`${poppins.className} text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3`}>
                Our <span className="text-[#AECB06] drop-shadow-lg">Journey</span>
              </h2>
              <div className="mt-2 h-1 w-24 bg-gradient-to-r from-transparent via-[#AECB06] to-transparent mx-auto rounded-full"></div>
              <p className={`${poppins.className} mt-4 text-white/90 text-sm sm:text-base max-w-2xl mx-auto`}>
                Building trust and delivering excellence across South India
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Dealers Count */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20 shadow-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-1">
                <div className="mb-2">
                  <svg className="w-8 h-8 md:w-10 md:h-10 mx-auto text-[#AECB06]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1.5 tracking-tight">
                  100+
                </div>
                <div className={`${poppins.className} text-xs md:text-sm text-white/90 font-semibold uppercase tracking-wide`}>
                  Dealers
                </div>
                <div className="mt-2 h-0.5 w-12 bg-[#AECB06] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* Happy Customers Count */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20 shadow-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-1">
                <div className="mb-2">
                  <svg className="w-8 h-8 md:w-10 md:h-10 mx-auto text-[#AECB06]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1.5 tracking-tight">
                  10K+
                </div>
                <div className={`${poppins.className} text-xs md:text-sm text-white/90 font-semibold uppercase tracking-wide`}>
                  Happy Customers
                </div>
                <div className="mt-2 h-0.5 w-12 bg-[#AECB06] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* Products Count */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20 shadow-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-1">
                <div className="mb-2">
                  <svg className="w-8 h-8 md:w-10 md:h-10 mx-auto text-[#AECB06]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1.5 tracking-tight">
                  50+
                </div>
                <div className={`${poppins.className} text-xs md:text-sm text-white/90 font-semibold uppercase tracking-wide`}>
                  Products
                </div>
                <div className="mt-2 h-0.5 w-12 bg-[#AECB06] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* Years Count */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center border border-white/20 shadow-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-1">
                <div className="mb-2">
                  <svg className="w-8 h-8 md:w-10 md:h-10 mx-auto text-[#AECB06]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1.5 tracking-tight">
                  16+
                </div>
                <div className={`${poppins.className} text-xs md:text-sm text-white/90 font-semibold uppercase tracking-wide`}>
                  Years of Excellence
                </div>
                <div className="mt-2 h-0.5 w-12 bg-[#AECB06] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Delivering Better Sleep Section */}
      <motion.section {...fadeInProps} className="w-full pt-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`${poppins.className} text-3xl sm:text-4xl md:text-5xl font-bold text-[#008AD2]`}>
              Delivering Better <span className="text-[#AECB06]">Sleep</span> to Everyone
            </h2>
            <div className="mt-3 h-1 w-32 bg-gradient-to-r from-[#008AD2] to-[#AECB06] mx-auto rounded-full"></div>
            <p className={`${poppins.className} mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto`}>
              Our mission is simple yet powerful: to make quality sleep accessible to every home across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Innovation & Technology */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#008AD2]/5 to-[#0099E6]/10 rounded-2xl p-6 md:p-8 h-full border border-[#008AD2]/10 hover:border-[#008AD2]/30 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-[#008AD2] to-[#0099E6] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
                  </svg>
                </div>
                <h3 className={`${poppins.className} text-xl md:text-2xl font-bold text-[#008AD2] mb-3`}>
                  Innovation & Technology
                </h3>
                <p className={`${poppins.className} text-sm sm:text-base text-gray-600 leading-relaxed`}>
                  We integrate cutting-edge sleep technology with medicated mattress innovations to provide scientifically-backed comfort that adapts to your body's needs.
                </p>
              </div>
            </motion.div>

            {/* Quality Assurance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#AECB06]/5 to-[#AECB06]/10 rounded-2xl p-6 md:p-8 h-full border border-[#AECB06]/10 hover:border-[#AECB06]/30 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-[#AECB06] to-[#99B305] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                  </svg>
                </div>
                <h3 className={`${poppins.className} text-xl md:text-2xl font-bold text-[#008AD2] mb-3`}>
                  Quality Assurance
                </h3>
                <p className={`${poppins.className} text-sm sm:text-base text-gray-600 leading-relaxed`}>
                  Every mattress undergoes rigorous quality checks and testing to ensure it meets our high standards for durability, comfort, and health benefits.
                </p>
              </div>
            </motion.div>

            {/* Customer-Centric Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#008AD2]/5 to-[#0099E6]/10 rounded-2xl p-6 md:p-8 h-full border border-[#008AD2]/10 hover:border-[#008AD2]/30 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-[#008AD2] to-[#0099E6] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h3 className={`${poppins.className} text-xl md:text-2xl font-bold text-[#008AD2] mb-3`}>
                  Customer-Centric Approach
                </h3>
                <p className={`${poppins.className} text-sm sm:text-base text-gray-600 leading-relaxed`}>
                  We listen to our customers and continuously improve our products based on real feedback, ensuring every purchase brings lasting satisfaction.
                </p>
              </div>
            </motion.div>

            {/* Sustainable Practices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#AECB06]/5 to-[#AECB06]/10 rounded-2xl p-6 md:p-8 h-full border border-[#AECB06]/10 hover:border-[#AECB06]/30 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-[#AECB06] to-[#99B305] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.66-1.89L9 18.11l3 3 2-2-3-3 3.18-3.18c1.46 1.46 3.93 1.46 5.39 0l2.12-2.12c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-2.12 2.12c-.57.57-1.54.57-2.12 0L13 9.5l3.18-3.18C17.93 9.25 21.24 12 23 12V9c-1.76 0-5.07-2.75-6.82-5.68L15 2.25 13.25 4l.93.93-.93.93L12 4.61 9.39 7.21l2.12 2.12-3.18 3.18-3 3-3 3L0 21.34"/>
                  </svg>
                </div>
                <h3 className={`${poppins.className} text-xl md:text-2xl font-bold text-[#008AD2] mb-3`}>
                  Sustainable Practices
                </h3>
                <p className={`${poppins.className} text-sm sm:text-base text-gray-600 leading-relaxed`}>
                  We're committed to eco-friendly manufacturing processes and sustainable materials, ensuring a healthier planet for future generations.
                </p>
              </div>
            </motion.div>

            {/* Affordable Luxury */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#008AD2]/5 to-[#0099E6]/10 rounded-2xl p-6 md:p-8 h-full border border-[#008AD2]/10 hover:border-[#008AD2]/30 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-[#008AD2] to-[#0099E6] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                  </svg>
                </div>
                <h3 className={`${poppins.className} text-xl md:text-2xl font-bold text-[#008AD2] mb-3`}>
                  Affordable Luxury
                </h3>
                <p className={`${poppins.className} text-sm sm:text-base text-gray-600 leading-relaxed`}>
                  Premium sleep solutions shouldn't break the bank. We offer competitive pricing without compromising on quality or comfort.
                </p>
              </div>
            </motion.div>

            {/* Health & Wellness Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#AECB06]/5 to-[#AECB06]/10 rounded-2xl p-6 md:p-8 h-full border border-[#AECB06]/10 hover:border-[#AECB06]/30 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-[#AECB06] to-[#99B305] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13zM12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12 6 2.12v4.78z"/>
                  </svg>
                </div>
                <h3 className={`${poppins.className} text-xl md:text-2xl font-bold text-[#008AD2] mb-3`}>
                  Health & Wellness Focus
                </h3>
                <p className={`${poppins.className} text-sm sm:text-base text-gray-600 leading-relaxed`}>
                  Our medicated mattresses are designed to support spinal alignment, reduce pressure points, and promote overall physical well-being.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-[#008AD2] to-[#0099E6] rounded-3xl p-8 md:p-12 shadow-2xl">
              <h3 className={`${poppins.className} text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4`}>
                Experience the HiLife Difference
              </h3>
              <p className={`${poppins.className} text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto`}>
                Join thousands of satisfied customers who have transformed their sleep quality with HiLife mattresses
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-6 h-6 text-[#AECB06]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className={`${poppins.className} text-sm sm:text-base font-medium`}>16+ Years Trusted</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-6 h-6 text-[#AECB06]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className={`${poppins.className} text-sm sm:text-base font-medium`}>10,000+ Happy Customers</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-6 h-6 text-[#AECB06]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className={`${poppins.className} text-sm sm:text-base font-medium`}>100+ Dealer Network</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
