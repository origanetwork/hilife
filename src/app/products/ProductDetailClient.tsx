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

        {/* Product Attributes - Dropdown Style */}
        <div className="mt-5 space-y-3">
          {sizes.length > 0 && (
            <div className="border border-[#E4E7EC] rounded-lg overflow-hidden bg-white">
              <div className={`${poppins.className} px-4 py-3 bg-[#F9FAFB] border-b border-[#E4E7EC] text-sm font-semibold text-[#344054]`}>
                Available Sizes
              </div>
              <div className="px-4 py-3 flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <span
                    key={size}
                    className={`${poppins.className} inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-[#F2F4F7] text-[#344054] text-sm font-medium`}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          {colors.length > 0 && (
            <div className="border border-[#E4E7EC] rounded-lg overflow-hidden bg-white">
              <div className={`${poppins.className} px-4 py-3 bg-[#F9FAFB] border-b border-[#E4E7EC] text-sm font-semibold text-[#344054]`}>
                Available Colors
              </div>
              <div className="px-4 py-3 flex flex-wrap gap-2">
                {colors.map((color) => (
                  <span
                    key={color}
                    className={`${poppins.className} inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-[#F2F4F7] text-[#344054] text-sm font-medium`}
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          )}

          {materialTypes.length > 0 && (
            <div className="border border-[#E4E7EC] rounded-lg overflow-hidden bg-white">
              <div className={`${poppins.className} px-4 py-3 bg-[#F9FAFB] border-b border-[#E4E7EC] text-sm font-semibold text-[#344054]`}>
                Material Types
              </div>
              <div className="px-4 py-3 flex flex-wrap gap-2">
                {materialTypes.map((material) => (
                  <span
                    key={material}
                    className={`${poppins.className} inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-[#F2F4F7] text-[#344054] text-sm font-medium`}
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
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
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button onClick={addToCart} className={`${poppins.className} inline-flex px-5 py-2.5 rounded-full bg-[#101828] text-white hover:bg-[#0b1526]`}>Add to Cart</button>
          <button onClick={() => setOpen(true)} className={`${poppins.className} inline-flex px-5 py-2.5 rounded-full border border-black/10 hover:bg-gray-50`}>Enquire Now</button>
        </div>
        {imageUrls.length > 0 && (
          <div className="mt-5 grid grid-cols-4 gap-3 md:max-w-md">
            {imageUrls.slice(0, 4).map((img, idx) => (
              <button
                key={img + idx}
                type="button"
                aria-label={`View image ${idx + 1}`}
                aria-current={activeIdx === idx}
                onClick={() => setActiveIdx(idx)}
                className={`relative aspect-square rounded-2xl overflow-hidden border ${activeIdx === idx ? 'ring-2 ring-[#008AD2] border-transparent' : 'border-black/10'} transition bg-gray-100`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="md:col-span-2 mt-12">
        <div className="w-full rounded-2xl bg-[#F7FAFE] border border-[#E6EEF7] px-6 md:px-12 py-8">
          <p className={`${poppins.className} text-center text-[15px] md:text-[18px] text-[#0B2C3D]/80`}>Industry’s purest natural latex. Offers you uncompromised pressure‑relieving comfort.</p>
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

      <EnquiryModal product={{ id: product.id, title: product.name }} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
