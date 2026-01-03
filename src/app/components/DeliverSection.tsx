import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Poppins } from "next/font/google";
import { MotionSection } from "./Motion";


const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});

export default function DeliverSection() {
  return (
    <MotionSection id="deliver" className="w-full bg-gradient-to-br from-[#008AD2] via-[#0099e6] to-[#008AD2] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl">
          {/* Title */}
          <h2 className={`${poppins.className} text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-8 md:mb-12 leading-tight`}>
            Delivering Reliable Quality and Service
            <br className="hidden sm:block" />
            <span className="text-[#AECB06]"> Across the Region</span>
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 border border-white/20 shadow-xl">
                <p className={`${poppins.className} text-white text-base sm:text-lg md:text-xl leading-relaxed`}>
                  <span className="font-semibold text-[#AECB06]">High Life Medicated Mattresses</span>, manufactured and marketed by{" "}
                  <span className="font-medium">Universal Agencies since 2008</span>, deliver advanced medicated support and premium comfort.
                </p>
                <p className={`${poppins.className} text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mt-4`}>
                  With our head office in <span className="font-medium text-white">Malappuram</span> and a branch in{" "}
                  <span className="font-medium text-white">Chennai</span>, we serve customers across South India through a strong distribution network committed to quality, durability, and healthier sleep for every family.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className={`${poppins.className} text-2xl md:text-3xl font-bold text-white`}>15+</div>
                    <div className={`${poppins.className} text-xs md:text-sm text-white/80 mt-1`}>Years Trust</div>
                  </div>
                  <div className="text-center">
                    <div className={`${poppins.className} text-2xl md:text-3xl font-bold text-white`}>150+</div>
                    <div className={`${poppins.className} text-xs md:text-sm text-white/80 mt-1`}>Dealers</div>
                  </div>
                  <div className="text-center">
                    <div className={`${poppins.className} text-2xl md:text-3xl font-bold text-white`}>10K+</div>
                    <div className={`${poppins.className} text-xs md:text-sm text-white/80 mt-1`}>Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <Image
                  src="/assets/partner/land.png"
                  alt="High Life distribution across the region"
                  width={600}
                  height={480}
                  className="relative h-auto w-full object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-10 md:mt-12">
            <Link
              href="/dealers"
              className={`${poppins.className} inline-flex items-center gap-3 bg-white text-[#008AD2] hover:bg-gray-50 px-6 py-3.5 rounded-full text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M12 2.25a6.75 6.75 0 0 0-6.75 6.75c0 4.636 5.524 10.57 6.21 11.27a.75.75 0 0 0 1.08 0c.686-.7 6.21-6.634 6.21-11.27A6.75 6.75 0 0 0 12 2.25Zm0 9a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" />
              </svg>
              <span>Locate Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
