"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import EnquiryModal from "../components/EnquiryModal";
import { MotionDiv } from "../components/Motion";
import { useGetProducts, useGetCategories } from "@/service";


const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Skeleton loader component
function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#E6EEF7] shadow-[0_4px_6px_-2px_rgba(16,24,40,0.08),0_12px_16px_-4px_rgba(16,24,40,0.10)]">
      {/* Image skeleton */}
      <div className="relative aspect-4/3 overflow-hidden bg-gray-200 animate-pulse" />

      <div className="p-5 md:p-6">
        {/* Category badge skeleton */}
        <div className="inline-flex rounded-full bg-gray-200 h-6 w-24 animate-pulse" />

        {/* Title skeleton */}
        <div className="mt-1 h-7 bg-gray-200 rounded animate-pulse w-3/4" />

        {/* Price section skeleton */}
        <div className="mt-5 border-t border-[#E6EEF7] pt-4">
          <div className="h-6 bg-gray-200 rounded animate-pulse w-24" />
        </div>

        {/* Buttons skeleton */}
        <div className="mt-4 flex items-center gap-3">
          <div className="h-10 bg-gray-200 rounded-full animate-pulse flex-1" />
          <div className="h-10 bg-gray-200 rounded-full animate-pulse flex-1" />
        </div>
      </div>
    </div>
  );
}

export default function ProductsClient() {
  const [enquiryFor, setEnquiryFor] = useState<{ id: string; title: string } | null>(null);
  const [open, setOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string | undefined>(undefined);
  const [sort, setSort] = useState<"price-asc" | "price-desc" | "newest">("newest");

  // Fetch categories
  const { data: categoriesData, isLoading: categoriesLoading } = useGetCategories({
    page: 1,
    limit: 100,
  });

  // Fetch products with filters
  const { data: productsData, isLoading: productsLoading, error: productsError } = useGetProducts({
    page: 1,
    limit: 100,
    categoryId: activeCategoryId,
    sortBy: sort,
  });

  // Set active category from URL parameter and scroll to grid
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryIdParam = params.get("categoryId");

    if (categoryIdParam) {
      setActiveCategoryId(categoryIdParam);
      setTimeout(() => {
        const gridSection = document.getElementById("grid");
        if (gridSection) {
          gridSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  const fmt = useMemo(
    () =>
      new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }),
    []
  );

  // Process categories - add "All" option
  const categories = useMemo(() => {
    if (!categoriesData?.data) return [];
    return categoriesData.data;
  }, [categoriesData]);

  // Get products from API
  const products = productsData?.data || [];
  const isLoading = productsLoading || categoriesLoading;

  return (
    <>
      {/* Controls */}
      <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
        <div className="flex items-center gap-2 overflow-x-auto -mx-1 px-1">
          {/* All products button */}
          <button
            onClick={() => setActiveCategoryId(undefined)}
            className={`${poppins.className} inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition border ${!activeCategoryId
              ? "bg-[#008AD2] text-white border-[#008AD2]"
              : "bg-white text-[#0B2C3D] border-[#E4E7EC] hover:border-[#008AD2] hover:text-[#008AD2]"
              }`}
          >
            All
          </button>

          {/* Category buttons */}
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategoryId(c.id)}
              className={`${poppins.className} inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition border ${activeCategoryId === c.id
                ? "bg-[#008AD2] text-white border-[#008AD2]"
                : "bg-white text-[#0B2C3D] border-[#E4E7EC] hover:border-[#008AD2] hover:text-[#008AD2]"
                }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="inline-flex items-center gap-3">
          <label className="text-sm font-medium text-[#344054]">
            Sort by
          </label>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as any)}
              className="
        h-10 w-[180px]
        rounded-full
        border border-[#E4E7EC]
        bg-white
        px-4 pr-9
        text-sm font-medium text-[#101828]
        shadow-sm
        focus:outline-none
        focus:ring-2 focus:ring-[#BFE9FF]
        appearance-none
      "
            >
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="newest">Newest</option>
            </select>

            {/* Custom arrow */}
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#667085]">
              ▼
            </span>
          </div>
        </div>


      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[...Array(6)].map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Error State */}
      {productsError && !isLoading && (
        <div className="mt-8 text-center">
          <p className={`${poppins.className} text-red-600 text-lg`}>
            Failed to load products. Please try again later.
          </p>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !productsError && products.length === 0 && (
        <div className="mt-8 text-center">
          <p className={`${poppins.className} text-gray-600 text-lg`}>
            No products found in this category.
          </p>
        </div>
      )}

      {/* Products Grid */}
      {!isLoading && !productsError && products.length > 0 && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p) => (
            <MotionDiv
              key={p.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E6EEF7] shadow-[0_4px_6px_-2px_rgba(16,24,40,0.08),0_12px_16px_-4px_rgba(16,24,40,0.10)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-6px_rgba(16,24,40,0.16)] hover:ring-1 hover:ring-[#008AD2]/30"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                {p.images && p.images.length > 0 && p.images[0].imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.images[0].imageUrl}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>

              <div className="p-5 md:p-6">
                <div className="inline-flex items-center rounded-full bg-[#F2F7FB] text-[#0B2C3D] border border-[#E6EEF7] px-3 py-1 text-xs">
                  {p.category.name}
                </div>

                <h3 className={`${poppins.className} mt-1 text-[18px] md:text-[20px] font-semibold text-[#101828]`}>
                  {p.name}
                </h3>

                <div className="mt-5 border-t border-[#E6EEF7] pt-4 flex items-center justify-between">
                  <div className={`${poppins.className} text-[18px] font-semibold text-[#0B2C3D]`}>
                    {fmt.format(p.price)}
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2">


                  <div className="flex items-center gap-2">

                    <button
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          const cart = JSON.parse(localStorage.getItem("cart") || "[]");

                          // Check if product already exists in cart
                          const existingIndex = cart.findIndex((item: any) => item.id === p.id);

                          if (existingIndex !== -1) {
                            // Increase quantity if already in cart
                            cart[existingIndex].quantity += 1;
                          } else {
                            // Add new item to cart
                            cart.push({
                              id: p.id,
                              title: p.name,
                              price: p.price,
                              image: p.images && p.images.length > 0 ? p.images[0].imageUrl : "/assets/products/placeholder.jpg",
                              category: p.category.name,
                              quantity: 1,
                            });
                          }

                          localStorage.setItem("cart", JSON.stringify(cart));
                          alert(`${p.name} added to cart!`);
                        }
                      }}
                      className={`${poppins.className} inline-flex justify-center items-center gap-2 w-full px-4 py-2.5 rounded-full bg-[#101828] text-white hover:bg-[#0b1526] transition-colors`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to Cart
                    </button>
                    <button
                      onClick={() => {
                        setEnquiryFor({ id: p.id, title: p.name });
                        setOpen(true);
                      }}
                      className={`${poppins.className} inline-flex justify-center w-full px-4 py-2.5 rounded-full border border-[#008AD2] text-[#008AD2] hover:bg-[#008AD2]/5 transition-all duration-200`}
                    >
                      Buy Now
                    </button>
                  </div>

                  <Link
                    href={`/products/${p.id}`}
                    className={`${poppins.className} inline-flex justify-center w-full px-4 py-2.5 rounded-full border border-[#E6EEF7] hover:bg-gray-50 transition-colors`}
                  >
                    View Details
                  </Link>

                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      )}

      <EnquiryModal product={enquiryFor} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
