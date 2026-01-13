"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { MotionSection } from "../components/Motion";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { useCreateContact } from "@/service";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });

const SUBJECT_OPTIONS = [
  'General Enquiry',
  'Product Information',
  'Dealer Enquiry',
  'Support',
];

export default function ContactPage() {
  const { submitContact, isLoading, error } = useCreateContact();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  });

  type FieldErrors = Partial<Record<
    'firstName' | 'email' | 'phone' | 'subject' | 'message',
    string
  >>;

  const [errors, setErrors] = useState<FieldErrors>({});
  const [success, setSuccess] = useState<string | null>(null);

  const validateForm = (): FieldErrors => {
    const newErrors: FieldErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!form.subject.trim()) {
      newErrors.subject = 'Please select a subject';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    }

    // Email is optional
    if (form.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccess(null);

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await submitContact({
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim() || undefined,
        email: form.email.trim() || undefined,
        phone: form.phone.trim(),
        subject: form.subject,
        message: form.message.trim(),
      });

      setSuccess(res.message || 'Message sent successfully');

      // Reset form
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'General Enquiry',
        message: '',
      });
    } catch (err: any) {
      setErrors({ message: err?.message || 'Submission failed' });
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <Header />
      <div className="mt-20 md:mt-16">
        <MotionSection id="contact" className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-20 scroll-mt-28 md:scroll-mt-36">
          <div className="max-w-7xl mx-auto lg:mt-10">
            <h2 className={`${poppins.className} font-semibold text-[32px] md:text-[40px] text-[#AECB06] `}>
              Contact <span className='text-[#008AD2]'>Us</span>
            </h2>
          </div>

          <div className="mt-10 md:mt-12">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-[0_6px_28px_rgba(0,0,0,0.15)] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="relative md:col-span-2 bg-[#011C2B] text-white p-7 sm:p-8 md:p-9 lg:p-10 pb-24 md:pb-10">
                  <div className={`${poppins.className}`}>
                    <div className="text-white text-[20px] md:text-[22px] font-semibold">We're Here to Help You Sleep Better</div>
                    <div className="mt-2 text-[#D1D5DB] text-[14px]">Your comfort is just a message away.</div>
                    <div className="mt-8 space-y-5 text-[14px]">
                      <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2 5.5C2 4.12 3.12 3 4.5 3h2A2.5 2.5 0 0 1 9 5.5v.75c0 .6-.24 1.17-.66 1.59l-.92.92a.75.75 0 0 0-.09.96 12.52 12.52 0 0 0 7.95 4.95.75.75 0 0 0 .77-.31l.74-1.05c.35-.5.93-.81 1.54-.81h.73A2.5 2.5 0 0 1 22 15.5v2A2.5 2.5 0 0 1 19.5 20H19c-8.28 0-15-6.72-15-15v.5Z" /></svg>
                        <span>+012 3456 789</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5A2.25 2.25 0 0 1 22.5 6.75v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75Zm2.4-.75 7.53 5.02c.34.23.8.23 1.14 0L20.1 6h-16.2Z" /></svg>
                        <span>demo@gmail.com</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 21s7-6.273 7-12A7 7 0 1 0 5 9c0 5.727 7 12 7 12Zm0-9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" clipRule="evenodd" /></svg>
                        <span className="text-[#D1D5DB]">Imported & marketed by Universal agencies<br />Poothimbarai building  kuttippala (po)<br />Malappuram (dt) Pin 676501 Kerala india</span>
                      </div>
                    </div>
                    <div className="mt-8 flex items-center gap-4">
                      <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 aspect-square items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" /></svg>
                      </a>
                      <a href="#" aria-label="Twitter" className="inline-flex h-10 w-10 aspect-square items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M22 5.92c-.73.33-1.52.55-2.35.65a4.12 4.12 0 0 0 1.8-2.28 8.26 8.26 0 0 1-2.61 1 4.11 4.11 0 0 0-7 3.75 11.64 11.64 0 0 1-8.45-4.28 4.11 4.11 0 0 0 1.27 5.48c-.63-.02-1.22-.19-1.73-.47v.05a4.11 4.11 0 0 0 3.3 4.03c-.29.08-.59.12-.9.12-.22 0-.43-.02-.63-.06a4.12 4.12 0 0 0 3.84 2.85A8.25 8.25 0 0 1 2 18.58 11.65 11.65 0 0 0 8.29 20.5c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.35 8.35 0 0 0 22 5.92Z" /></svg>
                      </a>
                      <a href="#" aria-label="Facebook" className="inline-flex h-10 w-10 aspect-square items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M13.5 10H16l.5-3h-3V5.5a1 1 0 0 1 1-1H16V2h-2.5A3.5 3.5 0 0 0 10 5.5V7H8v3h2v9h3v-9Z" /></svg>
                      </a>
                      {/* WhatsApp */}
                      <a href="https://wa.me/919876543210" target="_blank" aria-label="WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                          <path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.44 0 .12 5.3.12 11.84c0 2.08.54 4.11 1.57 5.9L0 24l6.39-1.67a11.8 11.8 0 0 0 5.65 1.44h.01c6.6 0 11.92-5.3 11.92-11.84a11.83 11.83 0 0 0-3.45-8.45ZM12.05 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.8 9.8 0 0 1-1.5-5.29c0-5.42 4.44-9.84 9.9-9.84a9.83 9.83 0 0 1 9.9 9.82c0 5.42-4.44 9.98-9.89 9.98Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.57-.48-.49-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.07 4.48.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                        </svg>
                      </a>

                      {/* YouTube */}
                      <a href="#" aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                          <path d="M23.5 6.19a2.99 2.99 0 0 0-2.1-2.12C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.4.57a2.99 2.99 0 0 0-2.1 2.12A31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.81 2.99 2.99 0 0 0 2.1 2.12c1.88.57 9.4.57 9.4.57s7.52 0 9.4-.57a2.99 2.99 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.81ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
                        </svg>
                      </a>
                    </div>

                    {/* Map */}
                    <div className="mt-8 w-full overflow-hidden rounded-xl border border-white/10">
                      <iframe
                        title="Company Location"
                        src="https://www.google.com/maps?q=Panikkarpadi Bus Stop, SH 71, Perumanna Klari Gramapanchayat, Kerala 676501&output=embed"
                        className="w-full h-[180px] md:h-[200px] rounded-xl"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                  </div>
                </div>

                <div className="md:col-span-3 p-7 sm:p-8 md:p-9 lg:p-10">
                  <form
                    onSubmit={handleSubmit}
                    className={`${poppins.className} grid grid-cols-1 gap-6`}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-[#667085]">First Name</label>
                        <input
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          type="text"
                          className="mt-2 w-full bg-transparent border-0 border-b border-[#D0D5DD] focus:border-[#008AD2] focus:outline-none py-2 text-[#101828]"
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="text-red-600 text-xs mt-1">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-[#667085]">Last Name</label>
                        <input
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          type="text"
                          className="mt-2 w-full bg-transparent border-0 border-b border-[#D0D5DD] focus:border-[#008AD2] focus:outline-none py-2 text-[#101828]"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-[#667085]">Email</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          className="mt-2 w-full bg-transparent border-0 border-b border-[#D0D5DD] focus:border-[#008AD2] focus:outline-none py-2 text-[#101828]"
                          placeholder="you@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm text-[#667085]">Phone Number</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          type="tel"
                          className="mt-2 w-full bg-transparent border-0 border-b border-[#D0D5DD] focus:border-[#008AD2] focus:outline-none py-2 text-[#101828]"
                          placeholder="+1 012 3456 789"
                        />
                        {errors.phone && (
                          <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-[#667085]">Select Subject?</div>
                      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-[#101828]">
                        {SUBJECT_OPTIONS.map((option) => (
                          <label
                            key={option}
                            className="inline-flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="subject"
                              value={option}
                              checked={form.subject === option}
                              onChange={handleChange}
                              className="accent-[#008AD2]"
                            />
                            {option}
                          </label>
                        ))}
                        {errors.subject && (
                          <p className="text-red-600 text-xs mt-2">{errors.subject}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-[#667085]">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        className="mt-2 w-full bg-transparent border-0 border-b border-[#D0D5DD] focus:border-[#008AD2] focus:outline-none py-2 text-[#101828] resize-none"
                        placeholder="Write your message..."
                      />
                      {errors.message && (
                        <p className="text-red-600 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>

                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    
                    {success && (
                      <p className="text-green-600 text-sm">{success}</p>
                    )}

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex items-center gap-2 rounded-full bg-[#0A4A6A] hover:bg-[#083C55] text-white px-6 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <path d="M13.19 3.14a1 1 0 0 1 1.32-.45l6.3 3.15a1 1 0 0 1 .02 1.8l-6.3 3.26a1 1 0 0 1-1.38-.53l-.52-1.31-4.39 2.94 4.27 2.16.56-1.4a1 1 0 0 1 1.38-.56l6.38 3.23a1 1 0 0 1-.02 1.8l-6.38 3.3a1 1 0 0 1-1.36-.47l-1.04-2.02-4.8-2.43-3.7 2.48a1 1 0 0 1-1.52-.84V8.47a1 1 0 0 1 .47-.85l4.31-2.77a1 1 0 0 1 1.03-.02l4.17 2.08 1.06 2.12-3.1-1.55L6 9.28v7.89l2.26-1.52 5.08 2.57 1.85 3.6" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
      <Footer />
    </main>
  );
}