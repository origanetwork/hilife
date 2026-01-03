import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { MotionSection } from "./Motion";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});

const insights = [
  {
    src: "/assets/insight/1.jpg",
    title: "Lorem ipsum dolor sit am",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum, felis ac tincidunt congue, nibh odio vehicula augue, nec hendrerit nisl sapien ut nunc.",
    author: {
      name: "Olivia Rhye",
      date: "20 Jan 2022",
      avatar: "/assets/insight/1.jpg",
    },
  },
  {
    src: "/assets/insight/2.jpg",
    title: "Lorem ipsum dolor sit am",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum, felis ac tincidunt congue, nibh odio vehicula augue, nec hendrerit nisl sapien ut nunc.",
    author: {
      name: "Phoenix Baker",
      date: "19 Jan 2022",
      avatar: "/assets/insight/2.jpg",
    },
  },
  {
    src: "/assets/insight/3.jpg",
    title: "Lorem ipsum dolor sit am",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum, felis ac tincidunt congue, nibh odio vehicula augue, nec hendrerit nisl sapien ut nunc.",
    author: {
      name: "Lana Steiner",
      date: "18 Jan 2022",
      avatar: "/assets/insight/3.jpg",
    },
  },
];

export default function InsightSection() {
  return (
    <MotionSection className="w-full px-6 py-10 md:py-12">
      <div className="max-w-7xl mx-auto text-center">
        <span
          className={`${poppins.className} font-bold text-3xl md:text-3xl lg:text-4xl text-[#008AD2] inline-block`}
        >
          Insights to Elevate Your <span className="text-[#AECB06] text-3xl md:text-3xl lg:text-4xl">Sleep</span>
        </span>
      </div>

      {/* Mobile: swipeable, Desktop: 3-column grid */}
      <div className="mt-8 md:mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="md:hidden -mx-6 overflow-x-hidden">
            <div
              className="px-6 flex gap-6 overflow-x-auto snap-x snap-mandatory"
              style={{ scrollSnapType: "x mandatory", scrollPaddingLeft: "24px", scrollPaddingRight: "24px" }}
            >
          {insights.map((item) => (
            <article
              key={item.title}
              className="snap-center shrink-0 w-[85%] max-w-[340px] sm:w-[360px] bg-white rounded-[20px] overflow-hidden flex flex-col"
              style={{
                boxShadow:
                  "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
              }}
            >
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="p-5 text-left flex flex-col h-full">
                <div className="flex items-start justify-between gap-3">
                  <h3 className={`${poppins.className} font-semibold text-[18px] sm:text-[20px] text-[#101828]`}>
                    {item.title}
                  </h3>
                  <span aria-hidden className="text-[#101828]/70">
                    ↗
                  </span>
                </div>
                <p className={`${poppins.className} mt-2 text-[14px] sm:text-[15px] leading-[22px] text-[#475467]`}>
                  {item.excerpt}
                </p>
                <div className="mt-auto pt-2 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={item.author.avatar}
                      alt={item.author.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-cover"
                    />
                  </div>
                  <div>
                    <div className={`${poppins.className} text-[13px] font-medium text-[#101828]`}>
                      {item.author.name}
                    </div>
                    <div className={`${poppins.className} text-[12px] text-[#667085]`}>
                      {item.author.date}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
            </div>
          </div>
        </div>

        <div className="hidden md:grid max-w-7xl mx-auto grid-cols-3 gap-x-6 gap-y-16">
          {insights.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-[20px] overflow-hidden flex flex-col"
              style={{
                boxShadow:
                  "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
              }}
            >
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 28vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left flex flex-col h-full">
                <div className="flex items-start justify-between gap-3">
                  <h3 className={`${poppins.className} font-semibold text-[20px] text-[#101828]`}>
                    {item.title}
                  </h3>
                  <span aria-hidden className="text-[#101828]/70">↗</span>
                </div>
                <p className={`${poppins.className} mt-2 text-[15px] leading-[24px] text-[#475467]`}>
                  {item.excerpt}
                </p>
                <div className="mt-auto pt-2 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={item.author.avatar}
                      alt={item.author.name}
                      width={36}
                      height={36}
                      className="h-9 w-9 object-cover"
                    />
                  </div>
                  <div>
                    <div className={`${poppins.className} text-[14px] font-medium text-[#101828]`}>
                      {item.author.name}
                    </div>
                    <div className={`${poppins.className} text-[12px] text-[#667085]`}>
                      {item.author.date}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Read More Button */}
      <div className="mt-10 md:mt-12 flex justify-center">
        <Link
          href="/blog"
          className={`${poppins.className} inline-flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,#006397_56.5%,#002031_100%)] text-white px-6 py-3 text-sm md:text-base font-medium shadow-md hover:brightness-110 transition-all`}
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </MotionSection>
  );
}
