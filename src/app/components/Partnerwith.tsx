import Image from "next/image";
import { Risque, Roboto, Playfair_Display } from "next/font/google";
import { MotionSection } from "./Motion";

const risque = Risque({ weight: "400", subsets: ["latin"] });
const playfair = Playfair_Display({ 
  weight: ["600"], 
  subsets: ["latin"],
  style: ["normal"],
  display: "swap"
});
const robotoBold = Roboto({ weight: "700", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function PartnerWith() {
  return (
    <MotionSection
      id="partner"
      className="w-full lg:mt-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 items-start gap-8">
          <div className="md:col-start-1">
            <div className="text-left">
              <h2 className={`${playfair.className} text-[54px] leading-[48px]`} style={{
                fontWeight: 700,
                fontStyle: 'normal',
                letterSpacing: '0px',
                verticalAlign: 'middle',
                color: '#000000'
              }}>
                Partner with{" "}
                <span style={{ color: '#4B5563' }}>HiLife</span>
              </h2>
            </div>
            <p
              className={`${roboto.className} text-[20px] leading-[32.5px] tracking-[0] align-middle mt-12 text-left`}
              style={{ color: "#374151" }}
            >
                Join our expanding network and bring advanced medicated-support mattresses to your region. Experience the strength of a trusted sleep-wellness brand built on innovation, quality, and proven comfort.
            </p>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-[#008AD2] text-white flex items-center justify-center" style={{ boxShadow: "-1px 1px 3px 0px #000000AD, -6px 3px 6px 0px #00000096, -12px 7px 8px 0px #00000059, -22px 12px 10px 0px #0000001A, -34px 18px 11px 0px #00000003" }}>
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18" />
                    <path d="M12 3a15 15 0 0 1 0 18" />
                    <path d="M12 3a15 15 0 0 0 0 18" />
                  </svg>
                </div>
                <div>
                  <div className={`${robotoBold.className} text-[16px] leading-[24px]`} style={{ color: "#111827" }}> Strong Distribution Network</div>
                  <div className={`${roboto.className} text-[14px] leading-[22px]`} style={{ color: "#6B7280" }}>Access to a reliable supply chain with fast delivery across South India.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-[#008AD2] text-white flex items-center justify-center" style={{ boxShadow: "-1px 1px 3px 0px #000000AD, -6px 3px 6px 0px #00000096, -12px 7px 8px 0px #00000059, -22px 12px 10px 0px #0000001A, -34px 18px 11px 0px #00000003" }}>
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 2l2.39 4.84 5.34.78-3.86 3.76.91 5.31L12 14.9l-4.78 2.79.91-5.31L4.27 7.62l5.34-.78L12 2z" />
                  </svg>
                </div>
                <div>
                  <div className={`${robotoBold.className} text-[16px] leading-[24px]`} style={{ color: "#111827" }}>Premium Medicated Mattress Range</div>
                  <div className={`${roboto.className} text-[14px] leading-[22px]`} style={{ color: "#6B7280" }}>Scientifically crafted mattresses for posture, pressure relief, and healthy sleep.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-[#008AD2] text-white flex items-center justify-center" style={{ boxShadow: "-1px 1px 3px 0px #000000AD, -6px 3px 6px 0px #00000096, -12px 7px 8px 0px #00000059, -22px 12px 10px 0px #0000001A, -34px 18px 11px 0px #00000003" }}>
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M6 8v8a2 2 0 0 0 2 2h8" />
                    <path d="M18 14v-4a2 2 0 0 0-2-2H10" />
                    <path d="M8 6h2a2 2 0 0 1 2 2v2" />
                  </svg>
                </div>
                <div>
                  <div className={`${robotoBold.className} text-[16px] leading-[24px]`} style={{ color: "#111827" }}>Complete Business Support</div>
                  <div className={`${roboto.className} text-[14px] leading-[22px]`} style={{ color: "#6B7280" }}>Get onboarding, training, marketing materials, and continuous operational guidance.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-[#008AD2] text-white flex items-center justify-center" style={{ boxShadow: "-1px 1px 3px 0px #000000AD, -6px 3px 6px 0px #00000096, -12px 7px 8px 0px #00000059, -22px 12px 10px 0px #0000001A, -34px 18px 11px 0px #00000003" }}>
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M3 17l6-6 4 4 7-7" />
                    <path d="M14 4h7v7" />
                  </svg>
                </div>
                <div>
                  <div className={`${robotoBold.className} text-[16px] leading-[24px]`} style={{ color: "#111827" }}>High Growth Potential</div>
                  <div className={`${roboto.className} text-[14px] leading-[22px]`} style={{ color: "#6B7280" }}>Backed by strong brand reputation, repeat customer demand, and profitable product margins.</div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                className={`${robotoBold.className} text-white rounded-2xl py-4 px-8 border border-[#005480]`}
                style={{
                  background: 'linear-gradient(90deg, #006397 56.5%, #002031 100%)',
                }}
              >
                Become a Dealer
              </button>
              <button
                className={`${robotoBold.className} inline-flex items-center gap-2 rounded-2xl border border-black text-black py-[17px] px-[33px]`}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 3v12" />
                  <path d="M8 11l4 4 4-4" />
                  <path d="M5 21h14" />
                </svg>
                Download Brochure
              </button>
            </div>
          </div>
          <div className="md:col-start-2">
            <div className="relative h-64 sm:h-80 md:h-[320px]">
              <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <Image
                  src="/assets/partner/r.png"
                  alt="Partner success"
                  fill
                  priority={false}
                  className="object-cover"
                />
              </div>
              <div className="absolute z-10 left-3 top-3 md:left-0 md:top-6 md:-translate-x-1/2 rounded-xl bg-white/95 px-4 py-3 shadow-lg">
                <div className={`${robotoBold.className} text-[22px] leading-[28px]`} style={{ color: "#111827" }}>150+</div>
                <div className={`${roboto.className} text-[12px] leading-[16px]`} style={{ color: "#6B7280" }}>Active Dealers</div>
              </div>
              <div 
                className="absolute z-10 right-3 top-1/2 -translate-y-1/2 md:right-0 md:translate-x-1/2 rounded-xl text-white px-4 py-3 shadow-lg"
                style={{
                  background: 'linear-gradient(90deg, #006397 56.5%, #002031 100%)',
                }}
              >
                <div className={`${robotoBold.className} text-[22px] leading-[28px]`}>$2M+</div>
                <div className={`${roboto.className} text-[12px] leading-[16px] opacity-80`}>Dealer Revenue</div>
              </div>
              <div className="absolute z-10 left-3 bottom-3 md:left-0 md:bottom-6 md:-translate-x-1/2 rounded-xl bg-white/95 px-4 py-3 shadow-lg">
                <div className={`${robotoBold.className} text-[22px] leading-[28px]`} style={{ color: "#111827" }}>95%</div>
                <div className={`${roboto.className} text-[12px] leading-[16px]`} style={{ color: "#6B7280" }}>Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 
            className={`${playfair.className} text-center`} 
            style={{ 
              color: "#000000",
              fontWeight: 600,
              fontSize: "30px",
              lineHeight: "36px",
              letterSpacing: "0px",
              verticalAlign: "middle"
            }}
          >
            Simple Partnership Process
          </h3>
          <div className="relative mt-10">
            <div className="hidden md:block absolute left-0 right-0 top-6 h-px bg-gray-200" />
            <div className="hidden md:block absolute left-0 top-6 h-px w-24 bg-white" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="z-10 h-12 w-12 rounded-2xl bg-[#008AD2] text-white flex items-center justify-center" style={{ boxShadow: "-1px 1px 3px 0px #000000AD, -6px 3px 6px 0px #00000096, -12px 7px 8px 0px #00000059, -22px 12px 10px 0px #0000001A, -34px 18px 11px 0px #00000003" }}>
                  <span className={`${robotoBold.className}`}>01</span>
                </div>
                <div className={`${robotoBold.className} text-[16px] leading-[24px]`} style={{ color: "#111827" }}>Apply</div>
                <div className={`${roboto.className} text-[13px] leading-[20px] md:text-[14px] md:leading-[22px] max-w-[220px]`} style={{ color: "#6B7280" }}>Submit your partnership application online</div>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="z-10 h-12 w-12 rounded-2xl bg-[#008AD2] text-white flex items-center justify-center" style={{ boxShadow: "-1px 1px 3px 0px #000000AD, -6px 3px 6px 0px #00000096, -12px 7px 8px 0px #00000059, -22px 12px 10px 0px #0000001A, -34px 18px 11px 0px #00000003" }}>
                  <span className={`${robotoBold.className}`}>02</span>
                </div>
                <div className={`${robotoBold.className} text-[16px] leading-[24px]`} style={{ color: "#111827" }}>Review</div>
                <div className={`${roboto.className} text-[13px] leading-[20px] md:text-[14px] md:leading-[22px] max-w-[220px]`} style={{ color: "#6B7280" }}>Our team evaluates your market potential</div>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="z-10 h-12 w-12 rounded-2xl bg-[#008AD2] text-white flex items-center justify-center" style={{ boxShadow: "-1px 1px 3px 0px #000000AD, -6px 3px 6px 0px #00000096, -12px 7px 8px 0px #00000059, -22px 12px 10px 0px #0000001A, -34px 18px 11px 0px #00000003" }}>
                  <span className={`${robotoBold.className}`}>03</span>
                </div>
                <div className={`${robotoBold.className} text-[16px] leading-[24px]`} style={{ color: "#111827" }}>Training</div>
                <div className={`${roboto.className} text-[13px] leading-[20px] md:text-[14px] md:leading-[22px] max-w-[220px]`} style={{ color: "#6B7280" }}>Comprehensive onboarding and brand training</div>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="z-10 h-12 w-12 rounded-2xl bg-[#008AD2] text-white flex items-center justify-center" style={{ boxShadow: "-1px 1px 3px 0px #000000AD, -6px 3px 6px 0px #00000096, -12px 7px 8px 0px #00000059, -22px 12px 10px 0px #0000001A, -34px 18px 11px 0px #00000003" }}>
                  <span className={`${robotoBold.className}`}>04</span>
                </div>
                <div className={`${robotoBold.className} text-[16px] leading-[24px]`} style={{ color: "#111827" }}>Launch</div>
                <div className={`${roboto.className} text-[13px] leading-[20px] md:text-[14px] md:leading-[22px] max-w-[220px]`} style={{ color: "#6B7280" }}>Start selling with full support and resources</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="rounded-3xl bg-black text-white px-6 py-10 text-center">
            <div className={`${risque.className} text-[24px] md:text-[28px]`}>Ready to Grow With HiLife?</div>
            <div className={`${roboto.className} mt-2 text-[16px] leading-[24px] opacity-90`}>Join the HiLife family and become part of a mission to deliver healthier sleep across India. Start your journey with a brand trusted for quality, comfort, and medicated support technology.</div>
            <div className="mt-6">
              <button 
                className={`${robotoBold.className} inline-flex items-center gap-2 rounded-2xl text-white py-3 px-6 border border-[#005480]`} 
                style={{ 
                  background: 'linear-gradient(90deg, #006397 56.5%, #002031 100%)',
                  boxShadow: '0px 16px 32px 0px rgba(255,255,255,0.55)' 
                }}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Become a Dealer
              </button>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
