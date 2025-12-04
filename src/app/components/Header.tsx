"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart, FiPhone, FiUser, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <div className="mx-auto flex items-center justify-between md:justify-around gap-6 px-6 py-3 md:py-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/logo/logo-hilife.png"
            alt="Hi Life"
            width={200}
            height={100}
            className="h-16 md:h-24 lg:h-28 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/30 bg-white/20 backdrop-blur-md px-3 py-3 shadow-sm">
          <Link
            href="/"
            className="px-4 py-2 rounded-full bg-white text-[#000000] font-medium shadow-sm"
          >
            Home
          </Link>
          <Link href="/#about" className="px-4 py-2 rounded-full  text-[#000000]   hover:text-white">
            About us
          </Link>
          <Link href="/#products" className="px-4 py-2 rounded-full  text-[#000000]   hover:text-white">
            Products
          </Link>
          <Link href="/#contact" className="px-4 py-2 rounded-full  text-[#000000]   hover:text-white">
            Brochure
          </Link>
          <Link href="/#contact" className="px-4 py-2 rounded-full  text-[#000000]   hover:text-white">
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:flex">
          <div className="glass-toolbar grid grid-cols-3 items-center justify-items-center w-56 rounded-full px-3 py-2 text-white">
            <button aria-label="Cart" className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-transparent hover:bg-transparent border-0 appearance-none ring-0 focus:ring-0 focus-visible:ring-0 outline-none focus:outline-none focus-visible:outline-none shadow-none">
              <FiShoppingCart className="h-6 w-6" />
            </button>
            <button aria-label="Phone" className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-transparent hover:bg-transparent border-0 appearance-none ring-0 focus:ring-0 focus-visible:ring-0 outline-none focus:outline-none focus-visible:outline-none shadow-none">
              <FiPhone className="h-6 w-6" />
            </button>
            <button aria-label="User" className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-transparent hover:bg-transparent border-0 appearance-none ring-0 focus:ring-0 focus-visible:ring-0 outline-none focus:outline-none focus-visible:outline-none shadow-none">
              <FiUser className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="md:hidden">
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/70 text-black backdrop-blur-md shadow-sm"
          >
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-60 bg-white/90 backdrop-blur-md px-6 pt-24 pb-10">
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 inline-flex items-center justify-center h-11 w-11 rounded-full bg-black/80 text-white shadow-sm"
          >
            <FiX className="h-6 w-6" />
          </button>
          <div className="flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl bg-white text-[#000000] font-medium shadow">Home</Link>
            <Link href="/#about" onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl text-[#000000] hover:bg-white/60">About us</Link>
            <Link href="/#products" onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl text-[#000000] hover:bg-white/60">Products</Link>
            <Link href="/#contact" onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl text-[#000000] hover:bg-white/60">Brochure</Link>
            <Link href="/#contact" onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl text-[#000000] hover:bg-white/60">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
}
