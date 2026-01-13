"use client";

import { useState, useEffect, useCallback } from "react";
import { Poppins } from "next/font/google";
import { useCreateDealer } from "../../service";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"], display: "swap" });

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function DealerEnquiryModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const { createDealer, isLoading, error } = useCreateDealer();

  const close = useCallback(() => {
    if (!isLoading) {
      // Reset form
      setName("");
      setEmail("");
      setAddress("");
      setPhone("");
      setLocation("");
      onClose();
    }
  }, [isLoading, onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createDealer({
        name,
        email: email || undefined,
        phone: phone || undefined,
        address,
        location,
      });

      // Show success message
      if (typeof window !== "undefined") {
        alert("Dealer request submitted successfully! We will review and get back to you soon.");
      }

      // Close modal and reset form
      close();
    } catch (err) {
      // Error is already set in the hook
      console.error("Failed to submit dealer request:", err);
      if (typeof window !== "undefined") {
        alert("Failed to submit dealer request. Please try again.");
      }
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60" onClick={close}>
      <div className="relative w-full max-w-lg mx-4 rounded-2xl bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
        <button
          aria-label="Close"
          onClick={close}
          disabled={isLoading}
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ✕
        </button>

        <div className="p-6 md:p-7">
          <h3 className={`${poppins.className} text-[20px] md:text-[22px] font-semibold text-[#101828]`}>Become a Dealer</h3>
          <p className={`${poppins.className} mt-1 text-sm text-[#475467]`}>Fill in your details and our team will contact you.</p>

          <form onSubmit={submit} className="mt-4 space-y-4">
            {/* Error message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-600">{error.message}</p>
              </div>
            )}

            <div>
              <label className="block text-sm text-[#667085]">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
                className="mt-1 w-full rounded-lg border border-[#D0D5DD] px-3 py-2 outline-none focus:ring-2 focus:ring-[#008AD2] disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm text-[#667085]">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="mt-1 w-full rounded-lg border border-[#D0D5DD] px-3 py-2 outline-none focus:ring-2 focus:ring-[#008AD2] disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-[#667085]">Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                disabled={isLoading}
                className="mt-1 w-full rounded-lg border border-[#D0D5DD] px-3 py-2 outline-none focus:ring-2 focus:ring-[#008AD2] resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Store address"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[#667085]">Phone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={isLoading}
                  className="mt-1 w-full rounded-lg border border-[#D0D5DD] px-3 py-2 outline-none focus:ring-2 focus:ring-[#008AD2] disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Contact number"
                />
              </div>
              <div>
                <label className="block text-sm text-[#667085]">Location</label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  disabled={isLoading}
                  className="mt-1 w-full rounded-lg border border-[#D0D5DD] px-3 py-2 outline-none focus:ring-2 focus:ring-[#008AD2] disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="City / State"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={close}
                disabled={isLoading}
                className={`${poppins.className} px-4 py-2 rounded-full border border-black/10 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className={`${poppins.className} px-4 py-2 rounded-full bg-[#008AD2] text-white hover:bg-[#0095e6] disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
