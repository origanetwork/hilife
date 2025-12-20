import Image from "next/image";
import { Playfair_Display, Poppins } from "next/font/google";
import { MotionSection } from "./Motion";


const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});

export default function DeliverSection() {
  return (
    <MotionSection id="deliver" className="w-full bg-[#008AD2]">
      <div className="w-full px-4 sm:px-6 pt-8 pb-10 md:pt-4 md:pb-6 lg:pt-2 lg:pb-4 min-h-[500px] md:min-h-[360px] lg:min-h-[280px] flex flex-col justify-center">
        <div className="mx-auto w-full max-w-5xl">
        <h2
          className={`${poppins.className} text-white lg:mt-5 text-[36px]  text-center`}
        >
          Delivering Reliable Quality and Service Across the Region
        </h2>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-[auto_auto] items-center justify-center gap-4 md:gap-6 mt-2 lg:mt-1 max-w-[1000px]">
          <div className="flex  justify-center">
            <p
              className={`${poppins.className} text-white  text-[20px] leading-[20px] text-center md:text-left max-w-[540px] lg:max-w-[680px]`}
              style={{ letterSpacing: "4px", lineHeight: "100%" }}
            >
              High Life Medicated Mattresses, manufactured and marketed by Universal Agencies since 2008, deliver advanced medicated support and premium comfort. With our head office in Malappuram and a branch in Chennai, we serve customers across South India through a strong distribution network committed to quality, durability, and healthier sleep for every family.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/assets/partner/land.png"
              alt="High Life distribution across the region"
              width={480}
              height={380}
              className="h-auto object-contain max-w-[240px] md:max-w-[360px] lg:max-w-[360px] drop-shadow-lg"
              priority
            />
          </div>
        </div>
        <div className="flex justify-center mt-3 md:mt-4 lg:mt-1">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-white/40 rounded-[14px] p-[10px]"
            style={{ background: "linear-gradient(79.29deg, #000000 46.47%, #5A5A5A 85.23%)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M12 2.25a6.75 6.75 0 0 0-6.75 6.75c0 4.636 5.524 10.57 6.21 11.27a.75.75 0 0 0 1.08 0c.686-.7 6.21-6.634 6.21-11.27A6.75 6.75 0 0 0 12 2.25Zm0 9a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" />
            </svg>
            <span>Locate us</span>
          </button>
        </div>
        </div>
      </div>
    </MotionSection>
  );
}
