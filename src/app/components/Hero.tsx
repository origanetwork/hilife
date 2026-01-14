'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Poppins } from 'next/font/google'
import Header from './Header'
import { motion } from 'framer-motion'
import { fadeInProps } from './Animate'
import { useBanners } from '@/service'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600'],
})

export default function Hero() {
  const { data: banners, isLoading } = useBanners()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (banners.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % banners.length)
    }, 4000)
    return () => clearInterval(id)
  }, [banners.length])

  if (isLoading || banners.length === 0) return null

  const active = banners[index]

  return (
    <motion.section
      {...fadeInProps}
      className="relative w-full bg-white md:bg-[linear-gradient(to_right,white_0%,white_48%,#008AD2_48%,#008AD2_100%)] pt-24 md:pt-0"
    >
      <Header />

      <div className="relative grid grid-cols-1 md:grid-cols-2 items-stretch">
        {/* Blue background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-[62%] bg-[#008AD2] hidden md:block"
        />

        {/* LEFT IMAGE */}
        <div className="relative z-10 h-[420px] sm:h-[500px] md:h-[640px] overflow-hidden md:rounded-bl-[144px] rounded-tr-[72px] md:rounded-tr-[128px]">
          {banners.map((banner, i) => (
            <motion.div
              key={banner.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === i ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={banner.imageUrl}
                alt={banner.title}
                fill
                sizes="(min-width: 768px) 70vw, 100vw"
                className="object-cover"
                priority={i === 0}
              />
            </motion.div>
          ))}

          {/* Dots */}
          {banners.length > 1 && (
            <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
              {banners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full ${
                    index === i ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          {...fadeInProps}
          className="relative z-10 flex flex-col justify-center gap-6 bg-[#008AD2] px-6 md:px-10 pt-10 md:pt-36 lg:pt-40 pb-10 rounded-bl-[50px]"
        >
          <motion.h1
            {...fadeInProps}
            className={`${poppins.className} uppercase text-white text-[34px] sm:text-[40px] md:text-[52px] leading-[111%] font-semibold`}
          >
            {active.title}
          </motion.h1>

          <motion.div {...fadeInProps}>
            <Link
              href={active.link}
              className="inline-flex items-center gap-2 rounded-[14px] bg-[linear-gradient(84.62deg,#000000_84.16%,#5A5A5A_95.12%)] text-white px-[12px] py-[12px] text-sm md:text-[15px] font-medium shadow"
            >
              {active.buttonText}
              <span aria-hidden>→</span>
            </Link>
          </motion.div>

          {/* Decorative Vector */}
          <div className="pointer-events-none absolute right-4 bottom-4 md:right-6 md:bottom-6 opacity-80">
            <Image
              src="/assets/Hero/Vector.png"
              alt="Decoration"
              width={120}
              height={220}
              className="w-auto h-40 md:h-80"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
