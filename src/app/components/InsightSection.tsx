'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { MotionSection } from './Motion'
import { useLatestBlogs } from '@/service'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function InsightSection() {
  const { data: insights, isLoading } = useLatestBlogs()

  if (isLoading) return null

  return (
    <MotionSection className="w-full px-6 py-10 md:py-12">
      <div className="max-w-7xl mx-auto text-center">
        <span
          className={`${poppins.className} font-bold text-3xl lg:text-4xl text-[#008AD2]`}
        >
          Insights to Elevate Your{' '}
          <span className="text-[#AECB06]">Sleep</span>
        </span>
      </div>

      <div className="mt-8 md:mt-12">
        <div className="max-w-7xl mx-auto">

          {/* Mobile */}
          <div className="md:hidden -mx-6 overflow-x-hidden">
            <div className="px-6 flex gap-6 overflow-x-auto snap-x snap-mandatory">
              {insights.map((item) => (
                <article
                  key={item.id}
                  className="snap-center shrink-0 w-[85%] max-w-[340px] bg-white rounded-[20px] overflow-hidden flex flex-col"
                  style={{
                    boxShadow:
                      '0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814',
                  }}
                >
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src={item.imageUrl || '/assets/placeholder.jpg'}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5 flex flex-col h-full">
                    <div className="flex justify-between gap-3">
                      <h3
                        className={`${poppins.className} font-semibold text-[18px]`}
                      >
                        {item.title}
                      </h3>
                      ↗
                    </div>

                    <p className="mt-2 text-[14px] text-[#475467]">
                      {item.subtitle || item.content.slice(0, 80) + '...'}
                    </p>

                    <div className="mt-auto pt-3 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                        <Image
                          src={item.imageUrl || '/assets/avatar.png'}
                          alt={item.author}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <div className="text-[13px] font-medium">
                          {item.author}
                        </div>
                        <div className="text-[12px] text-[#667085]">
                          {new Date(item.createdAt).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-x-6 gap-y-16">
            {insights.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-[20px] overflow-hidden flex flex-col"
                style={{
                  boxShadow:
                    '0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814',
                }}
              >
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={item.imageUrl || '/assets/placeholder.jpg'}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between gap-3">
                    <h3
                      className={`${poppins.className} font-semibold text-[20px]`}
                    >
                      {item.title}
                    </h3>
                    ↗
                  </div>

                  <p className="mt-2 text-[15px] text-[#475467]">
                    {item.subtitle || item.content.slice(0, 100) + '...'}
                  </p>

                  <div className="mt-auto pt-3 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src={item.imageUrl || '/assets/avatar.png'}
                        alt={item.author}
                        width={36}
                        height={36}
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <div className="text-[14px] font-medium">
                        {item.author}
                      </div>
                      <div className="text-[12px] text-[#667085]">
                        {new Date(item.createdAt).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>

      {/* Read More */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/blog"
          className={`${poppins.className} inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(90deg,#006397_56.5%,#002031_100%)] text-white px-6 py-3`}
        >
          Read More →
        </Link>
      </div>
    </MotionSection>
  )
}
