import Image from "next/image";
import { Playfair_Display, Poppins } from "next/font/google";
import { MotionSection } from "./Motion";
import { FaWhatsapp } from "react-icons/fa";

const playfair = Playfair_Display({ weight: ["600"], subsets: ["latin"], display: "swap" });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"], display: "swap" });

const columns = [
  {
    title: "Mattresses",
    links: [
      "OrthoSupreme",
      "CloudComfort Memory",
      "HybridLuxe Pro",
      "Original mattress",
      "Hybrid Mattress",
      "Memory foam mattress",
      "All Mattresses",
    ],
  },
  {
    title: "Pillows",
    links: ["Softtouch memory", "Grid Pillow", "Cuddle Pillow", "Slim Pillow"],
  },
  {
    title: "Accessories",
    links: ["Bedding", "Bed sheets", "Bolster Pillow", "Prop"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Technology", "Warranty", "Contact"],
  },
  {
    title: "Support",
    links: ["FAQs", "About Us", "Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <MotionSection
      className="mt-16 text-white rounded-tl-[56px] md:rounded-tl-[96px] overflow-hidden"
      style={{ background: "linear-gradient(136.02deg, #000000 42.64%, #A0A0A0 81.82%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-4 py-12 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand and blurb */}
          <div className="md:col-span-3">
            <Image src="/assets/logo/logo-hilife.png" alt="Hi Life logo" width={260} height={72} className="h-16 md:h-36 w-auto " />
            <p className={`${poppins.className} mt-3 text-sm text-white/80`}>
              Premium medicated mattresses for healthier sleep and better living.
            </p>
            <div className="mt-6">
              <div className={`${poppins.className} text-white text-[18px] font-semibold mb-4`}>Social</div>
              <div className="flex items-center gap-8 text-white/90">
                <a aria-label="Facebook" href="#" className="inline-flex h-8 w-8 aspect-square items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M13.5 10H16l.5-3h-3V5.5a1 1 0 0 1 1-1H16V2h-2.5A3.5 3.5 0 0 0 10 5.5V7H8v3h2v9h3v-9Z"/></svg>
                </a>
                <a aria-label="Instagram" href="#" className="inline-flex h-8 w-8 aspect-square items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"/></svg>
                </a>
                <a aria-label="WhatsApp" href="#" className="inline-flex h-8 w-8 aspect-square items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                  <FaWhatsapp size={18} />
                </a>
                <a aria-label="Twitter" href="#" className="inline-flex h-8 w-8 aspect-square items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M22 5.92c-.73.33-1.52.55-2.35.65a4.12 4.12 0 0 0 1.8-2.28 8.26 8.26 0 0 1-2.61 1 4.11 4.11 0 0 0-7 3.75 11.64 11.64 0 0 1-8.45-4.28 4.11 4.11 0 0 0 1.27 5.48c-.63-.02-1.22-.19-1.73-.47v.05a4.11 4.11 0 0 0 3.3 4.03c-.29.08-.59.12-.9.12-.22 0-.43-.02-.63-.06a4.12 4.12 0 0 0 3.84 2.85A8.25 8.25 0 0 1 2 18.58 11.65 11.65 0 0 0 8.29 20.5c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.35 8.35 0 0 0 22 5.92Z"/></svg>
                </a>
                <a aria-label="YouTube" href="#" className="inline-flex h-8 w-8 aspect-square items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M2.5 6.5A3.5 3.5 0 0 1 6 3h12a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 18 17H6a3.5 3.5 0 0 1-3.5-3.5Z"/>
                    <path d="m10 8 6 4-6 4Z"/>
                  </svg>
                </a>
                

                <div className="hidden md:block mx-3 h-6 w-px bg-white/20" />
              </div>
                <div className="lg:mt-5 hidden md:flex items-center gap-6 whitespace-nowrap">
                  <div className="inline-flex items-center gap-2">
                    <Image src="/assets/footer/c1.png" alt="Certification 1" width={96} height={48} className="h-8 md:h-10 w-auto shrink-0" />
                    <span className={`${poppins.className} text-xs text-white/70 whitespace-nowrap`}>ISO 9001</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Image src="/assets/footer/c2.png" alt="Certification 2" width={86} height={48} className="h-6 md:h-8 w-auto shrink-0" />
                    <span className={`${poppins.className} text-xs text-white/70 whitespace-nowrap`}>BIS Certified</span>
                  </div>
                </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 lg:ml-20 lg:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-24">
            {columns.map((col) => (
              <div key={col.title}>
                <div className={`${poppins.className} text-white text-[18px] font-semibold mb-4`}>{col.title}</div>
                <ul className={`${poppins.className} space-y-3  md:space-y-4 text-sm leading-6 text-white/80`}>
                  {col.links.map((l) => (
                    <li key={l}>
                      {l === "CloudComfort Memory" ? (
                        <a href="#" className="hover:text-white">
                          <span className="md:hidden whitespace-nowrap">{l}</span>
                          <span className="hidden md:block leading-tight">
                            <span className="block">CloudComfort</span>
                            <span className="block font-extrabold text-black">Memory</span>
                          </span>
                        </a>
                      ) : (
                        <a href="#" className="hover:text-white whitespace-nowrap">
                          {l}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social moved below brand blurb */}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/20 pt-5 text-center text-sm text-white/80">
          © {new Date().getFullYear()} Hilife Mattress | All Rights Reserved
        </div>
      </div>
    </MotionSection>
  );
}
