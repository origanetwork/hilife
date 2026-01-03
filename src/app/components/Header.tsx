"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiShoppingCart, FiPhone, FiUser, FiMenu, FiX } from "react-icons/fi";
import { Poppins } from "next/font/google";

// Navigation links array
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Dealer", href: "/dealers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <div className={`${poppins.className} mx-auto flex items-center justify-between md:justify-around gap-6 px-6 py-3 md:py-8`}>
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/30 bg-white/20 backdrop-blur-md px-3 py-3 shadow-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#000000] font-medium shadow-sm"
                    : "text-[#000000] hover:bg-[#008AD2] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex">
          <div
            className={`glass-toolbar grid grid-cols-3 items-center justify-items-center w-56 rounded-full px-3 py-2 ${
              isHome ? "text-white" : "text-black"
            }`}
          >
            <button
              aria-label="Cart"
              className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-transparent hover:bg-transparent border-0 appearance-none ring-0 focus:ring-0 focus-visible:ring-0 outline-none focus:outline-none focus-visible:outline-none shadow-none hover:scale-110 transition-transform"
            >
              <FiShoppingCart className="h-6 w-6" />
            </button>
            <button
              aria-label="Phone"
              className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-transparent hover:bg-transparent border-0 appearance-none ring-0 focus:ring-0 focus-visible:ring-0 outline-none focus:outline-none focus-visible:outline-none shadow-none hover:scale-110 transition-transform"
            >
              <FiPhone className="h-6 w-6" />
            </button>
            <button
              aria-label="User"
              className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-transparent hover:bg-transparent border-0 appearance-none ring-0 focus:ring-0 focus-visible:ring-0 outline-none focus:outline-none focus-visible:outline-none shadow-none hover:scale-110 transition-transform"
            >
              <FiUser className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/70 text-black backdrop-blur-md shadow-sm hover:bg-white/90 transition-colors"
          >
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-60 bg-white/95 backdrop-blur-lg px-6 pt-24 pb-10">
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 inline-flex items-center justify-center h-11 w-11 rounded-full bg-black/80 text-white shadow-sm hover:bg-black"
          >
            <FiX className="h-6 w-6" />
          </button>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-[#008AD2] text-white font-medium shadow-sm"
                      : "text-[#000000] hover:bg-[#008AD2] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Icons */}
          <div className="mt-10 flex justify-center gap-6">
            <button
              aria-label="Cart"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <FiShoppingCart className="h-6 w-6 text-gray-700" />
            </button>
            <button
              aria-label="Phone"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <FiPhone className="h-6 w-6 text-gray-700" />
            </button>
            <button
              aria-label="User"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <FiUser className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}