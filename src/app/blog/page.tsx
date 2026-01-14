'use client'

import Image from "next/image"
import Link from "next/link"
import { Poppins } from "next/font/google"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { MotionSection, MotionDiv } from "../components/Motion"
import { useAllBlogs } from "@/service"

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" })

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
} as const

const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 20, mass: 0.7 },
  },
} as const

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

const getExcerpt = (content: string, maxLength = 160) =>
  content.length > maxLength
    ? content.slice(0, maxLength) + '...'
    : content

export default function BlogPage() {

  const { data: blogs, isLoading, error } = useAllBlogs(1, 12)

  return (
    <main className="bg-white min-h-screen">
      <Header />
      <div className="pt-28 lg:mt-10 md:pt-40" />

      <MotionSection className="px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className={`${poppins.className} text-[32px] md:text-[42px] font-bold text-[#AECB06]`}>
            Latest Articles
          </h1>
          <p className={`${poppins.className} mt-2 text-[#6E6E6E] text-[16px]`}>
            Insights and tips to elevate your spaces.
          </p>

          {isLoading && (
            <p className="mt-10 text-center text-gray-500">Loading blogs...</p>
          )}

          {error && (
            <p className="mt-10 text-center text-red-600">Failed to load blogs</p>
          )}

          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {blogs.map((p) => (
              <MotionDiv
                key={p.id}
                variants={staggerItem}
                className="bg-white rounded-3xl overflow-hidden border border-black/10 shadow-[0_4px_6px_-2px_rgba(16,24,40,0.08),0_12px_16px_-4px_rgba(16,24,40,0.10)]"
              >
                <div className="relative aspect-video">
                  <Image
                    src={p.imageUrl || '/placeholder.jpg'}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-5 md:p-6">

                  {/* ===== TAGS ===== */}
                  {p.tags && (
                    <div className="mb-2 flex flex-wrap gap-2">
                      {p.tags.split(',').map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-[#F4F3FF] text-[#6941C6] px-3 py-1 text-[12px] font-semibold"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  <h2 className={`${poppins.className} mt-3 text-[20px] md:text-[22px] font-semibold text-[#101828]`}>
                    {p.title}
                  </h2>

                  {/* ===== CONTENT (2 LINES) ===== */}
                  <p
                    className={`${poppins.className} mt-2 text-[14px] md:text-[15px] text-[#475467] line-clamp-2`}
                  >
                    {getExcerpt(p.content)}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      href={`/blog/${p.id}`}
                      className={`${poppins.className} text-[14px] font-semibold text-[#008AD2] hover:underline`}
                    >
                      Read More →
                    </Link>

                    <span className={`${poppins.className} text-[13px] text-[#6E6E6E]`}>
                      {formatDate(p.createdAt)}
                    </span>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </MotionSection>

      <Footer />
    </main>
  )
}
