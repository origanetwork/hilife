"use client";

import { useState, useEffect, useCallback } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"], display: "swap" });

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function DealerEnquiryModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const close = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit: integrate API here
    if (typeof window !== "undefined") {
      alert("Dealer enquiry submitted. Thank you!");
    }
    close();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60" onClick={close}>
      <div className="relative w-full max-w-lg mx-4 rounded-2xl bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
        <button
          aria-label="Close"
          onClick={close}
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white"
        >
          ✕
        </button>

        <div className="p-6 md:p-7">
          <h3 className={`${poppins.className} text-[20px] md:text-[22px] font-semibold text-[#101828]`}>Become a Dealer</h3>
          <p className={`${poppins.className} mt-1 text-sm text-[#475467]`}>Fill in your details and our team will contact you.</p>

          <form onSubmit={submit} className="mt-4 space-y-4">
            <div>
              <label className="block text-sm text-[#667085]">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-lg border border-[#D0D5DD] px-3 py-2 outline-none focus:ring-2 focus:ring-[#008AD2]" placeholder="Your full name" />
            </div>
            <div>
              <label className="block text-sm text-[#667085]">Address</label>
              <input value={address} onChange={(e) => setAddress(e.target.value)} required className="mt-1 w-full rounded-lg border border-[#D0D5DD] px-3 py-2 outline-none focus:ring-2 focus:ring-[#008AD2]" placeholder="Store address" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[#667085]">Phone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} required className="mt-1 w-full rounded-lg border border-[#D0D5DD] px-3 py-2 outline-none focus:ring-2 focus:ring-[#008AD2]" placeholder="Contact number" />
              </div>
              <div>
                <label className="block text-sm text-[#667085]">Location</label>
                <input value={location} onChange={(e) => setLocation(e.target.value)} required className="mt-1 w-full rounded-lg border border-[#D0D5DD] px-3 py-2 outline-none focus:ring-2 focus:ring-[#008AD2]" placeholder="City / State" />
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button type="button" onClick={close} className={`${poppins.className} px-4 py-2 rounded-full border border-black/10 hover:bg-gray-50`}>Cancel</button>
              <button type="submit" className={`${poppins.className} px-4 py-2 rounded-full bg-[#008AD2] text-white`}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
