"use client";

import { useState } from "react";
import { TbScale, TbUserCheck, TbWind, TbAirConditioning, TbSnowflake, TbGripVertical } from "react-icons/tb";
import { Poppins } from "next/font/google";
import EnquiryModal from "../components/EnquiryModal";
import { Product } from "@/types";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });

type Props = {
  product: Product;
};

export default function ProductDetailClient({ product }: Props) {
  const [open, setOpen] = useState(false);

  // Get image URLs from product.images array
  const imageUrls = product.images
    ?.filter((img) => img.imageUrl)
    .map((img) => img.imageUrl as string) || [];

  const [activeIdx, setActiveIdx] = useState(0);
  const activeImage = imageUrls[Math.min(activeIdx, imageUrls.length - 1)] || "/assets/products/placeholder.jpg";

  const addToCart = () => {
    if (typeof window !== "undefined") {
      alert(`${product.name} added to cart (demo).`);
    }
  };

  // Get tags, sizes, colors, material types from product
  const tags = product.productTags?.map((pt) => pt.tag.name) || [];
  const sizes = product.productSizes?.map((ps) => ps.size.name) || [];
  const colors = product.productColors?.map((pc) => pc.color.name) || [];
  const materialTypes = product.productMaterialTypes?.map((pm) => pm.materialType.name) || [];

  return (
    <div className="lg:mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div>
        <div className="relative aspect-4/3 rounded-3xl overflow-hidden border border-black/10 shadow-[0_4px_12px_-4px_rgba(16,24,40,0.12),0_24px_32px_-8px_rgba(16,24,40,0.12)] bg-gray-100">
          {activeImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>

        {/* Product Attributes - Modern Card Style */}
        {(sizes.length > 0 || colors.length > 0 || materialTypes.length > 0) && (
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-blue-50/50 to-gray-50/50 border border-blue-100/50 shadow-sm">
            <h3 className={`${poppins.className} text-lg font-semibold text-[#0B2C3D] mb-4 flex items-center`}>
              <span className="w-1.5 h-5 bg-[#008AD2] rounded-full mr-3"></span>
              Product Specifications
            </h3>

            <div className="space-y-5">
              {sizes.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-[#008AD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                    </div>
                    <span className={`${poppins.className} text-sm font-medium text-[#344054]`}> Sizes</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <span
                        key={size}
                        className={`${poppins.className} inline-flex items-center justify-center px-4 py-2 rounded-full bg-white border border-blue-200 text-[#0B2C3D] text-sm font-medium shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200`}
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {colors.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <span className={`${poppins.className} text-sm font-medium text-[#344054]`}> Colors</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <span
                        key={color}
                        className={`${poppins.className} inline-flex items-center justify-center px-4 py-2 rounded-full bg-white border border-green-200 text-[#0B2C3D] text-sm font-medium shadow-xs hover:shadow-md hover:border-green-300 transition-all duration-200`}
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {materialTypes.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <span className={`${poppins.className} text-sm font-medium text-[#344054]`}>Material Types</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {materialTypes.map((material) => (
                      <span
                        key={material}
                        className={`${poppins.className} inline-flex items-center justify-center px-4 py-2 rounded-full bg-white border border-purple-200 text-[#0B2C3D] text-sm font-medium shadow-xs hover:shadow-md hover:border-purple-300 transition-all duration-200`}
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div>
        <h1 className={`${poppins.className} mt-1 text-[26px] md:text-[32px] font-semibold text-[#101828]`}>{product.name}</h1>
        {product.description && (
          <p className={`${poppins.className} mt-5 text-[#475467]`}>{product.description}</p>
        )}

        {/* Tags under description */}
        {tags.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-full bg-[#F2F7FB] text-[#0B2C3D] border border-[#E6EEF7] px-3 py-1 text-xs font-medium">{tag}</span>
              ))}
            </div>
          </div>
        )}

        {imageUrls.length > 0 && (
          <div className="mt-5 grid grid-cols-4 gap-3 md:max-w-md">
            {imageUrls.slice(0, 4).map((img, idx) => (
              <button
                key={img + idx}
                type="button"
                aria-label={`View image ${idx + 1}`}
                aria-current={activeIdx === idx}
                onClick={() => setActiveIdx(idx)}
                className={`relative aspect-square rounded-2xl overflow-hidden border-2 ${activeIdx === idx ? 'border-[#008AD2] ring-2 ring-[#008AD2]/20' : 'border-transparent hover:border-gray-300'} transition-all duration-200 bg-gray-100`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 ${activeIdx === idx ? 'bg-[#008AD2]/10' : 'bg-transparent'}`}></div>
              </button>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={addToCart}
            className={`${poppins.className} inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#101828] to-[#1a2a3f] text-white hover:from-[#0b1526] hover:to-[#162238] transition-all duration-200 shadow-md hover:shadow-lg`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add to Cart
          </button>
          <button
            onClick={() => setOpen(true)}
            className={`${poppins.className} inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#008AD2] text-[#008AD2] hover:bg-[#008AD2]/5 transition-all duration-200`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Enquire Now
          </button>
        </div>
      </div>

      <div className="md:col-span-2 mt-12">
        <div className="w-full rounded-2xl bg-[#F7FAFE] border border-[#E6EEF7] px-6 md:px-12 py-8">
          <p className={`${poppins.className} text-center text-[15px] md:text-[18px] text-[#0B2C3D]/80`}>Industry's purest natural latex. Offers you uncompromised pressure‑relieving comfort.</p>
          <div className="mt-5 border-t border-[#E4E7EC] pt-8">
            <div className="flex flex-col md:flex-row md:items-start md:gap-12">
              <div className={`${poppins.className} shrink-0 w-full md:w-44 mb-5 md:mb-0 text-[#0B2C3D] font-semibold`}>Features</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 text-[#0B2C3D]">
                {/* 1 */}
                <div className="flex items-start gap-8">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D0D5DD] bg-white/90 text-[#0B2C3D]">
                    <TbScale size={18} />
                  </span>
                  <span className={`${poppins.className} text-[15px] leading-6`}>Medium firm feel</span>
                </div>
                {/* 2 */}
                <div className="flex items-start gap-8">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D0D5DD] bg-white/90 text-[#0B2C3D]">
                    <TbUserCheck size={18} />
                  </span>
                  <span className={`${poppins.className} text-[15px] leading-6`}>Enhanced body support</span>
                </div>
                {/* 3 */}
                <div className="flex items-start gap-8">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D0D5DD] bg-white/90 text-[#0B2C3D]">
                    <TbWind size={18} />
                  </span>
                  <span className={`${poppins.className} text-[15px] leading-6`}>Healthy breathability</span>
                </div>
                {/* 4 */}
                <div className="flex items-start gap-8">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D0D5DD] bg-white/90 text-[#0B2C3D]">
                    <TbAirConditioning size={18} />
                  </span>
                  <span className={`${poppins.className} text-[15px] leading-6`}>Enhanced air circulation</span>
                </div>
                {/* 5 */}
                <div className="flex items-start gap-8">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D0D5DD] bg-white/90 text-[#0B2C3D]">
                    <TbSnowflake size={18} />
                  </span>
                  <span className={`${poppins.className} text-[15px] leading-6`}>Cool gel infused foam</span>
                </div>
                {/* 6 */}
                <div className="flex items-start gap-8">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D0D5DD] bg-white/90 text-[#0B2C3D]">
                    <TbGripVertical size={18} />
                  </span>
                  <span className={`${poppins.className} text-[15px] leading-6`}>Anti-skid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal product={{ id: product.id, title: product.title }} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}