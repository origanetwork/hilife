"use client";

import Image from "next/image";
import { useState } from "react";
import { TbScale, TbUserCheck, TbWind, TbAirConditioning, TbSnowflake, TbGripVertical } from "react-icons/tb";
import { Poppins } from "next/font/google";
import EnquiryModal from "../components/EnquiryModal";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });

type Props = {
  product: {
    id: string;
    title: string;
    category: string;
    image: string;
    images?: string[];
    tags?: string[];
    rating?: number;
    description?: string;
  };
};

export default function ProductDetailClient({ product }: Props) {
  const [open, setOpen] = useState(false);
  const gallery = (product.images && product.images.length > 0)
    ? product.images
    : [product.image, product.image, product.image, product.image];
  const [activeIdx, setActiveIdx] = useState(0);
  const activeImage = gallery[Math.min(activeIdx, gallery.length - 1)];

  const addToCart = () => {
    if (typeof window !== "undefined") {
      alert(`${product.title} added to cart (demo).`);
    }
  };

  return (
    <div className="lg:mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div>
        <div className="relative aspect-4/3 rounded-3xl overflow-hidden border border-black/10 shadow-[0_4px_12px_-4px_rgba(16,24,40,0.12),0_24px_32px_-8px_rgba(16,24,40,0.12)]">
          <Image src={activeImage} alt={product.title} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </div>
      <div>
        <div className="text-sm text-[#667085]">{product.category}</div>
        <h1 className={`${poppins.className} mt-1 text-[26px] md:text-[32px] font-semibold text-[#101828]`}>{product.title}</h1>
        {product.rating && (
          <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#FFF7E6] text-[#B45309] px-2 py-1 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="#F59E0B"><path d="M12 2l2.9 6.2L22 9.3l-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.8L2 9.3l7.1-1.1L12 2z"/></svg>
            {product.rating.toFixed(1)} / 5
          </div>
        )}
        {product.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.map((t) => (
              <span key={t} className="inline-flex items-center rounded-full bg-[#F2F4F7] text-[#344054] px-3 py-1 text-xs">{t}</span>
            ))}
          </div>
        )}
        <p className={`${poppins.className} mt-5 text-[#475467]`}>High-quality product engineered for performance and reliability.</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button onClick={addToCart} className={`${poppins.className} inline-flex px-5 py-2.5 rounded-full bg-[#101828] text-white hover:bg-[#0b1526]`}>Add to Cart</button>
          <button onClick={() => setOpen(true)} className={`${poppins.className} inline-flex px-5 py-2.5 rounded-full border border-black/10 hover:bg-gray-50`}>Enquire Now</button>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-3 md:max-w-md">
          {gallery.slice(0,4).map((img, idx) => (
            <button
              key={img+idx}
              type="button"
              aria-label={`View image ${idx+1}`}
              aria-current={activeIdx === idx}
              onClick={() => setActiveIdx(idx)}
              className={`relative aspect-square rounded-2xl overflow-hidden border ${activeIdx === idx ? 'ring-2 ring-[#008AD2] border-transparent' : 'border-black/10'} transition`}
            >
              <Image src={img} alt={`${product.title} thumbnail ${idx+1}`} fill sizes="(min-width:1024px) 8vw, 25vw" className="object-cover" />
            </button>
          ))}
        </div>
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

      <EnquiryModal product={{ id: product.id, title: product.title }} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
