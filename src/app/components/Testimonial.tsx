'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Poppins } from 'next/font/google'
import { MotionSection } from './Motion'
import { useTestimonials } from '@/service'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center justify-center gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill={i < rating ? '#FF7A00' : '#E5E7EB'}
          className="transition-colors duration-300"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonial() {
  const { data: items, isLoading } = useTestimonials(1, 10)
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const desktopScrollerRef = useRef<HTMLDivElement | null>(null)
  const [mobileIndex, setMobileIndex] = useState(0)
  const [desktopIndex, setDesktopIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const scrollToTestimonial = (targetIndex: number, isDesktop = false) => {
    const el = isDesktop ? desktopScrollerRef.current : scrollerRef.current
    if (!el) return
    
    if (isDesktop) {
      setDesktopIndex(targetIndex)
    } else {
      setMobileIndex(targetIndex)
    }
    
    const child = el.children[targetIndex] as HTMLElement | undefined
    if (child) {
      const childCenter = child.offsetLeft + child.offsetWidth / 2
      const targetLeft = Math.max(
        0,
        Math.min(
          childCenter - el.clientWidth / 2,
          el.scrollWidth - el.clientWidth
        )
      )
      el.scrollTo({ left: targetLeft, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (!items.length || isHovering) return

    const interval = setInterval(() => {
      // Mobile auto-scroll
      const nextMobileIndex = (mobileIndex + 1) % items.length
      scrollToTestimonial(nextMobileIndex, false)
      
      // Desktop auto-scroll
      const nextDesktopIndex = (desktopIndex + 1) % items.length
      scrollToTestimonial(nextDesktopIndex, true)
    }, 4000)

    return () => clearInterval(interval)
  }, [items, mobileIndex, desktopIndex, isHovering])

  if (isLoading) {
    return (
      <MotionSection className="w-full px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <div className="text-center">
          <div className="h-10 w-64 bg-gray-200 rounded-lg mx-auto animate-pulse"></div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg animate-pulse"
              >
                <div className="h-24 w-24 rounded-full bg-gray-200 mx-auto"></div>
                <div className="h-4 w-32 bg-gray-200 rounded mt-4 mx-auto"></div>
                <div className="h-4 w-48 bg-gray-200 rounded mt-3 mx-auto"></div>
                <div className="h-24 bg-gray-200 rounded mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
    )
  }

  return (
    <MotionSection
      className="w-full bg-gradient-to-b from-blue-50 to-white px-4 py-12 md:px-6 lg:px-8 lg:py-16"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="mx-auto">
        <div className="text-center mb-12">
          <span
            className={`${poppins.className} font-semibold text-3xl lg:text-4xl text-[#008AD2]`}
          >
            What our clients say{' '}
            <span className="text-[#AECB06]">about us</span>
          </span>
          {/* <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover why businesses trust us with their growth
          </p> */}
        </div>

        {/* Mobile & Tablet */}
        <div className="md:hidden relative">
          <div className="px-2">
            <div
              ref={scrollerRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {items.map((t) => (
                <article
                  key={t.id}
                  className="snap-center shrink-0 w-[85%] bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={t.imageUrl}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    <div className={`${poppins.className} mt-4 font-semibold text-lg text-gray-900`}>
                      {t.name}
                    </div>

                    <div className="mt-3">
                      <StarRow rating={t.rating} />
                    </div>

                    <div className="relative mt-4">
                      <svg
                        className="absolute -top-2 -left-2 h-6 w-6 text-[#008AD2] opacity-30"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8v8h-4v-8h4zm10 0v8h-4v-8h4zm-20 16h4v-8h-4v8zm10 0h4v-8h-4v8z" />
                      </svg>
                      <p className="text-gray-600 text-sm leading-relaxed italic">
                        "{t.content}"
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Navigation dots for mobile */}
          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToTestimonial(i, false)}
                className={`h-2 rounded-full transition-all duration-300 ${mobileIndex === i
                    ? 'w-8 bg-[#008AD2]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Slider (same as mobile but with larger cards) */}
        <div className="hidden md:block relative">
          <div className="px-2 lg:px-10">
            <div
              ref={desktopScrollerRef}
              className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {items.map((t) => (
                <article
                  key={t.id}
                  className="snap-center shrink-0 w-[45%] lg:w-[30%] xl:w-[25%] bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-[#AECB06] transition-colors duration-300">
                      <Image
                        src={t.imageUrl}
                        alt={t.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="96px"
                      />
                    </div>

                    <div className={`${poppins.className} mt-4 font-bold text-xl text-gray-900`}>
                      {t.name}
                    </div>

                    <div className="mt-3">
                      <StarRow rating={t.rating} />
                    </div>

                    <div className="relative mt-4">
                      <svg
                        className="absolute -top-3 -left-3 h-8 w-8 text-[#008AD2] opacity-20"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8v8h-4v-8h4zm10 0v8h-4v-8h4zm-20 16h4v-8h-4v8zm10 0h4v-8h-4v8z" />
                      </svg>
                      <p className="text-gray-700 leading-relaxed text-[15px] line-clamp-4 lg:line-clamp-5">
                        "{t.content}"
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Navigation dots for desktop */}
          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToTestimonial(i, true)}
                className={`h-2 rounded-full transition-all duration-300 ${desktopIndex === i
                    ? 'w-8 bg-[#008AD2]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  )
}