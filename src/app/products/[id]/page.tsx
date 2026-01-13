"use client";

import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MotionSection } from "../../components/Motion";
import { Poppins } from "next/font/google";
import ProductDetailClient from "../ProductDetailClient";
import { useGetProduct } from "@/service";
import { use } from "react";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });

type Params = { params: Promise<{ id: string }> };

export default function ProductDetailPage({ params }: Params) {
  const { id } = use(params);
  const { data: product, isLoading, error } = useGetProduct(id);

  if (isLoading) {
    return (
      <main className="bg-white min-h-screen">
        <Header />
        <div className="pt-28 md:pt-40" />
        <MotionSection className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-20 text-gray-500">Loading product...</div>
          </div>
        </MotionSection>
        <Footer />
      </main>
    );
  }

  if (error || !product) {
    return notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      <Header />
      <div className="pt-28 md:pt-40" />

      <MotionSection className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <a href="/products" className={`${poppins.className} inline-flex items-center gap-2 text-[#008AD2] hover:underline`}>
              ← Back to Products
            </a>
          </div>
          <h1 className={`${poppins.className} text-[28px] md:text-[36px] font-semibold text-[#101828]`}>{product.name}</h1>
          <p className={`${poppins.className} mt-1 text-[#6E6E6E]`}>{product.category.name}</p>

          <div className="mt-6">
            <ProductDetailClient product={product} />
          </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
