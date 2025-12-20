import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MotionSection } from "../components/Motion";
import GalleryLightbox from "../components/GalleryLightbox";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });

const images = [
  "/assets/insight/1.jpg",
  "/assets/insight/2.jpg",
  "/assets/insight/3.jpg",
  "/assets/products/O.jpg",
  "/assets/products/F.png",
  "/assets/products/F (2).png",
  "/assets/products/M.png",
  "/assets/Hero/Left.png",
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
} as const;

const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 20, mass: 0.7 },
  },
} as const;

export default function GalleryPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <div className="pt-28 md:pt-40" />

      <MotionSection className="px-6">
        <div className="max-w-7xl lg:mt-10 mx-auto">
          <h1 className={`${poppins.className} text-[32px] md:text-[42px] font-bold text-[#AECB06]`}>Gallery</h1>
          <p className={`${poppins.className} mt-2 text-[#6E6E6E] text-[16px]`}>Explore our work and inspiration.</p>

          <div className="mt-8">
            <GalleryLightbox images={images} />
          </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
