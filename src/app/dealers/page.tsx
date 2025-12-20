"use client";

import { useState } from "react";
import { Poppins, Playfair_Display } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MotionSection } from "../components/Motion";
import DealerEnquiryModal from "../components/DealerEnquiryModal";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });
// Temporary data; replace with API or CMS later
const dealers = [
  {
    id: "d1",
    name: "HiLife Mattress Store - Central",
    address: "123 MG Road, Central Plaza, Bengaluru, KA 560001",
    phone: "+91 98765 43210",
    location: "Bengaluru, Karnataka",
  },
  {
    id: "d2",
    name: "HiLife Mattress Store - Andheri",
    address: "2nd Floor, Skyline Mall, Andheri West, Mumbai, MH 400053",
    phone: "+91 98111 22233",
    location: "Mumbai, Maharashtra",
  },
  {
    id: "d3",
    name: "HiLife Mattress Gallery - Anna Nagar",
    address: "No. 45, 2nd Ave, Anna Nagar, Chennai, TN 600040",
    phone: "+91 99555 66777",
    location: "Chennai, Tamil Nadu",
  },
  {
    id: "d4",
    name: "HiLife Mattress Studio - Banjara Hills",
    address: "Road No. 12, Banjara Hills, Hyderabad, TS 500034",
    phone: "+91 97979 80808",
    location: "Hyderabad, Telangana",
  },
];

function DealerCard({ name, address, phone, location }: { name: string; address: string; phone: string; location: string }) {
  return (
    <div className="rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_2px_10px_rgba(16,24,40,0.06)] p-5 md:p-6">
      <div className="flex items-start gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F1F7FB] text-[#0B2C3D]">
          {/* location pin */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
        </div>
        <div>
          <h3 className={`${poppins.className} text-[18px] md:text-[20px] text-[#0B2C3D]`}>{name}</h3>
          <div className="mt-2 space-y-1 text-[14px] text-[#475467]">
            <div className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mt-0.5 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 7l9-4 9 4v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
                <path d="M9 22V12h6v10" />
              </svg>
              <span className={`${poppins.className}`}>{address}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.7 19.7 0 0 1-8.58-3.07 19.5 19.5 0 0 1-6-6A19.7 19.7 0 0 1 2.09 4.18 2 2 0 0 1 4.11 2h2a2 2 0 0 1 2 1.72c.12.9.33 1.77.64 2.6a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.48-1.21a2 2 0 0 1 2.11-.45c.83.31 1.7.52 2.6.64A2 2 0 0 1 22 16.92Z" />
              </svg>
              <a href={`tel:${phone.replace(/\s/g, "")}`} className={`${poppins.className} text-[#0B2C3D] hover:underline`}>{phone}</a>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span className={`${poppins.className}`}>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DealersPage() {
  const [open, setOpen] = useState(false);
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <div className="lg:mt-10 pt-28 md:pt-40" />

      <MotionSection className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <h1 className={`${poppins.className} text-[28px] md:text-[36px] font-semibold text-[#008AD2]`}>Dealers</h1>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={`${poppins.className} inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#006397_56.5%,#002031_100%)] text-white px-5 py-2.5 shadow-sm hover:brightness-110`}
            >
              Become a Dealer
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <p className={`${poppins.className} mt-2 text-[#6E6E6E]`}>Find an authorized HiLife dealer near you.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealers.map((d) => (
              <DealerCard key={d.id} name={d.name} address={d.address} phone={d.phone} location={d.location} />
            ))}
          </div>

          {/* Become a dealer block */}
          <div id="become-dealer" className="mt-12">
            <div className="rounded-2xl bg-[#F7FAFE] border border-[#E6EEF7] px-6 md:px-10 py-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className={`${poppins.className} text-[22px] md:text-[26px] text-[#0B2C3D]`}>Become a HiLife Dealer</h2>
                  <p className={`${poppins.className} mt-1 text-[14px] text-[#475467]`}>Grow with a trusted mattress brand. Partner with us to bring superior sleep solutions to your city.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className={`${poppins.className} inline-flex items-center gap-2 rounded-full bg-[#008AD2] text-white px-5 py-2.5 shadow-sm hover:brightness-110`}
                >
                  Apply Now
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Modal */}
      <DealerEnquiryModal open={open} onClose={() => setOpen(false)} />

      <Footer />
    </main>
  );
}
