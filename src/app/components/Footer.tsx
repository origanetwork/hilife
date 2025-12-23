import Image from "next/image";
import { 
  // Playfair_Display,
   Poppins } from "next/font/google";
import { MotionSection } from "./Motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

// const playfair = Playfair_Display({ weight: ["600"], subsets: ["latin"], display: "swap" });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"], display: "swap" });

const columns = [
  {
    title: "Mattresses",
    links: [
      "OrthoSupreme",
      "HybridLuxe Pro",
      "Original mattress",
      "Hybrid Mattress",
      "CloudComfort Memory",
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

const socialMedia = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    color: "hover:bg-[#1877F2] hover:text-white",
    label: "Follow us on Facebook"
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    color: "hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045] hover:text-white",
    label: "Follow us on Instagram"
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    color: "hover:bg-[#25D366] hover:text-white",
    label: "Chat with us on WhatsApp"
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    color: "hover:bg-[#1DA1F2] hover:text-white",
    label: "Follow us on Twitter"
  },
  // {
  //   name: "YouTube",
  //   icon: FaYoutube,
  //   color: "hover:bg-[#FF0000] hover:text-white",
  //   label: "Subscribe to our YouTube channel"
  // },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    color: "hover:bg-[#0077B5] hover:text-white",
    label: "Follow us on LinkedIn"
  },
];


export default function Footer() {
  return (
    <MotionSection
      className="mt-16 text-white rounded-tl-[40px] md:rounded-tl-[96px] overflow-hidden"
      style={{ background: "linear-gradient(136.02deg, #000000 42.64%, #A0A0A0 81.82%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-3 text-left justify-start">
            <Image
              src="/assets/logo/logo-hilife.png"
              alt="Hi Life logo"
              width={260}
              height={72}
              className="mx-auto lg:mx-0 h-28 md:h-28 w-auto"
            />

            <p className={`${poppins.className} mt-4 text-sm text-white/80`}>
              Premium medicated mattresses for healthier sleep and better living.
            </p>

            {/* Social */}
            <div className="mt-6">
              <div className={`${poppins.className} text-lg font-semibold mb-4`}>
                Social
              </div>

              <div className="flex flex-wrap justify-start gap-2">
                {socialMedia.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href="#"
                      aria-label={social.label}
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      title={social.name}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>

              {/* Certifications */}
              <div className="mt-6 flex :justify-start gap-6">
                <div className="flex items-center gap-2">
                  <Image src="/assets/footer/c1.png" alt="ISO 9001" width={96} height={48} className="h-8 w-auto" />
                  <span className={`${poppins.className} text-xs text-white/70`}>
                    ISO 9001
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/assets/footer/c2.png" alt="BIS Certified" width={86} height={48} className="h-7 w-auto" />
                  <span className={`${poppins.className} text-xs text-white/70`}>
                    BIS Certified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {columns.map((col) => (
                <div key={col.title}>
                  <div className={`${poppins.className} text-lg font-semibold mb-4`}>
                    {col.title}
                  </div>
                  <ul className={`${poppins.className} space-y-3 text-sm text-white/80`}>
                    {col.links.map((l) => (
                      <li key={l}>
                        <a href="#" className="hover:text-white transition whitespace-nowrap">
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/20 pt-5 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Hilife Mattress | All Rights Reserved
        </div>
      </div>
    </MotionSection>
  );
}
