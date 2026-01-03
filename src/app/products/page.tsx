"use client";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MotionSection } from "../components/Motion";
import ProductsClient from "./ProductsClient";
import { Poppins  } from "next/font/google";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });

export default function ProductsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <div className="pt-28 md:pt-40" />

      {/* Banner */}
      <section className="px-0">
        <div className="relative mx-3 sm:mx-6 md:mx-8 overflow-hidden rounded-2xl md:rounded-3xl">
          <div className="relative aspect-4/5 sm:aspect-21/9 md:aspect-16/6">
            <Image 
              src="/assets/products/b2.jpg" 
              alt="Products banner" 
              fill 
              sizes="100vw" 
              className="object-cover" 
              priority 
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.30)_60%,rgba(0,0,0,0.00)_90%)] md:bg-[linear-gradient(90deg,rgba(0,0,0,0.60)_0%,rgba(0,0,0,0.40)_40%,rgba(0,0,0,0.00)_75%)]" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-5 sm:px-8 md:px-12 py-8 w-full">
                <h1 className={`${poppins.className} text-white text-2xl sm:text-3xl md:text-[46px] leading-tight font-semibold max-w-xl`}>
                  Premium Mattresses & Bedding
                  <br className="hidden sm:block" />
                  <span className="text-[#00A6FF]"> Under One Roof</span>
                </h1>
                <p className={`${poppins.className} mt-2 sm:mt-3 max-w-2xl text-white/90 text-sm sm:text-[15px] md:text-[16px]`}>
                  Explore medicated mattresses, pillows, and foldable mattresses engineered for superior support and comfort.
                </p>
                <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row flex-wrap gap-3">
                  <a 
                    href="#grid" 
                    className={`${poppins.className} inline-flex items-center justify-center sm:justify-start gap-2 rounded-full bg-[#00A6FF] text-white px-5 py-2.5 text-sm sm:text-[15px] font-medium shadow hover:bg-[#0095e6] transition-colors`}
                  >
                    Explore Products
                  </a>
                  <a 
                    href="#enquiry" 
                    className={`${poppins.className} inline-flex items-center justify-center sm:justify-start gap-2 rounded-full bg-white text-[#101828] px-5 py-2.5 text-sm sm:text-[15px] font-medium shadow hover:bg-gray-100 transition-colors`}
                  >
                    Request a quote
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-4 sm:gap-6 text-white/90 text-center sm:text-left">
                  <div className="flex-1 min-w-[80px] sm:min-w-0">
                    <div className="text-white text-lg sm:text-[18px] font-semibold">500+</div>
                    <div className="text-xs sm:text-sm">Products</div>
                  </div>
                  <div className="flex-1 min-w-[80px] sm:min-w-0">
                    <div className="text-white text-lg sm:text-[18px] font-semibold">25+</div>
                    <div className="text-xs sm:text-sm">Years Trust</div>
                  </div>
                  <div className="flex-1 min-w-[80px] sm:min-w-0">
                    <div className="text-white text-lg sm:text-[18px] font-semibold">98%</div>
                    <div className="text-xs sm:text-sm">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 mt-10" id="grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className={`${poppins.className} inline-block mb-2 rounded-full bg-[#E6F6FF] text-[#008AD2] px-3 py-1 text-xs font-semibold`}>Featured Bedding</div>
            <h2 className={`${poppins.className} text-[28px] md:text-[36px] font-semibold text-[#AECB06]`}>Popular <span className="text-[#008AD2]">Mattresses & More</span></h2>
            <p className={`${poppins.className} mt-1 text-[#6E6E6E]`}>Discover our best-sellers trusted for comfortable, healthier sleep.</p>
          </div>

          <ProductsClient />
        </div>
      </section>

      {/* Help CTA Section */}
      <section className="mt-12 px-0">
        <div className="mx-0">
          <div className="relative">
            <div className="mx-6 md:mx-8 overflow-hidden rounded-3xl" id="enquiry">
              <div className="bg-[#008AD2] ">
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 text-center text-white">
                  <div className={`${poppins.className} inline-block mb-3 rounded-full bg-white/10 text-white px-3 py-1 text-xs font-semibold`}>Get Sleep Guidance</div>
                  <h3 className={`${poppins.className} text-[26px] md:text-[36px] font-semibold`}>Need Help Choosing the Right Mattress?</h3>
                  <p className={`${poppins.className} mt-2 max-w-3xl mx-auto text-white/90`}>Our sleep experts can recommend the ideal mattress, pillows, and comforts for your body type and preferences.</p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a href="/contact" className={`${poppins.className} inline-flex items-center gap-2 rounded-full bg-white text-[#0F4A53] px-4 py-2.5 text-sm md:text-[15px] shadow`}>
                      Contact Us
                    </a>
                    <a href="/contact" className={`${poppins.className} inline-flex items-center gap-2 rounded-full bg-transparent ring-1 ring-white/60 text-white px-4 py-2.5 text-sm md:text-[15px] hover:bg-white/10`}>
                      Request a quote →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
