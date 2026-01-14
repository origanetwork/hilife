'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Poppins } from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { MotionSection } from '../../components/Motion'
import { useBlog } from '@/service'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

export default function BlogDetailPage() {
  const params = useParams()
  const id = params?.id as string

  const { data: post, isLoading, error } = useBlog(id)

  return (
    <main className="bg-white min-h-screen">
      <Header />
      <div className="pt-28 md:pt-40" />

      <MotionSection className="px-6">
        <article className="max-w-4xl mx-auto">

          {/* Loading */}
          {isLoading && (
            <p className="text-center text-gray-500">Loading blog...</p>
          )}

          {/* Error */}
          {error && (
            <div className="text-center">
              <p className="text-red-600 mb-4">Blog not found</p>
              <Link
                href="/blog"
                className="text-[#008AD2] hover:underline"
              >
                ← Back to Blog
              </Link>
            </div>
          )}

          {/* Content */}
          {!isLoading && !error && post && (
            <>
              {/* Back */}
              <div className="mb-6">
                <Link
                  href="/blog"
                  className={`${poppins.className} inline-flex items-center gap-2 text-[#008AD2] hover:underline`}
                >
                  ← Back to Blog
                </Link>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 text-sm">
                {post.subtitle && (
                  <span className="inline-flex items-center rounded-full bg-[#F4F3FF] text-[#6941C6] px-3 py-1 font-semibold uppercase tracking-wide">
                    {post.subtitle}
                  </span>
                )}
                <span className="h-3 w-px bg-black/10" />
                <span className={`${poppins.className} text-[#6E6E6E]`}>
                  {formatDate(post.createdAt)}
                </span>
              </div>

              {/* Title */}
              <h1
                className={`${poppins.className} mt-3 md:mt-4 text-[30px] md:text-[44px] leading-tight font-bold text-black`}
              >
                {post.title}
              </h1>

              {/* Tags */}
              {post.tags && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.split(',').map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-[#F4F3FF] text-[#6941C6] px-3 py-1 text-[12px] font-semibold"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}

              {/* Image */}
              {post.imageUrl && (
                <div className="mt-6 md:mt-8 overflow-hidden rounded-3xl border border-black/10 shadow-[0_4px_12px_-4px_rgba(16,24,40,0.12),0_24px_32px_-8px_rgba(16,24,40,0.12)]">
                  <div className="relative aspect-video">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="mt-8 md:mt-10 rounded-3xl bg-white border border-black/10 shadow-[0_6px_16px_-6px_rgba(16,24,40,0.12),0_28px_40px_-14px_rgba(16,24,40,0.14)] p-6 md:p-10">
                <div
                  className={`${poppins.className} text-[16px] md:text-[18px] leading-[1.85] text-[#475467]`}
                >
                  <p>{post.content}</p>
                </div>
              </div>
            </>
          )}
        </article>
      </MotionSection>

      <Footer />
    </main>
  )
}
