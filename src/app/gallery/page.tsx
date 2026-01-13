"use client";

import { Poppins } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MotionSection } from "../components/Motion";
import GalleryLightbox from "../components/GalleryLightbox";
import { useGetGalleryImages } from "@/service";


const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });

export default function GalleryPage() {

  const { data, isLoading, error } = useGetGalleryImages({
    page: 1,
    limit: 20,
  });

  const images =
    data?.data
      ?.filter((img) => img.imageUrl)
      .map((img) => img.imageUrl as string) || [];

  return (
    <main className="bg-white min-h-screen">
      <Header />
      <div className="pt-28 md:pt-40" />

      <MotionSection className="px-6">
        <div className="max-w-7xl lg:mt-10 mx-auto">
          <h1
            className={`${poppins.className} text-[32px] md:text-[42px] font-bold text-[#AECB06]`}
          >
            Gallery
          </h1>

          <p
            className={`${poppins.className} mt-2 text-[#6E6E6E] text-[16px]`}
          >
            Explore our work and inspiration.
          </p>

          {/* ================= STATES ================= */}
          {isLoading && (
            <div className="mt-12 flex justify-center text-gray-500">
              Loading gallery...
            </div>
          )}

          {!isLoading && images.length === 0 && (
            <div className="mt-12 flex justify-center text-gray-500">
              No gallery images available
            </div>
          )}

          {error && (
            <div className="mt-12 flex justify-center text-red-500">
              Failed to load gallery images.
            </div>
          )}

          {!isLoading && images.length > 0 && (
            <div className="mt-8">
              <GalleryLightbox images={images} />
            </div>
          )}
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
