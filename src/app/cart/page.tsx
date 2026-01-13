"use client";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { Poppins } from "next/font/google";
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag, FiArrowLeft, FiTag } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
  size?: string;
  color?: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart items from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        try {
          setCartItems(JSON.parse(savedCart));
        } catch (error) {
          console.error("Failed to parse cart data:", error);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Listen for cart clear event from modal
  useEffect(() => {
    const handleCartCleared = () => {
      setCartItems([]);
    };

    window.addEventListener("cartCleared", handleCartCleared);
    return () => {
      window.removeEventListener("cartCleared", handleCartCleared);
    };
  }, []);

  // Save cart to localStorage whenever it changes (but only after initial load)
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isLoaded]);

  const fmt = useMemo(
    () =>
      new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }),
    []
  );

  // Calculate totals
  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const tax = useMemo(() => subtotal * 0.18, [subtotal]); // 18% GST
  const shipping = subtotal > 50000 ? 0 : 500; // Free shipping over ₹50,000
  const discount = useMemo(() => (subtotal * promoDiscount) / 100, [subtotal, promoDiscount]);
  const total = subtotal + tax + shipping - discount;

  // Handle quantity updates
  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Handle item removal
  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Handle promo code
  const applyPromoCode = () => {
    // Simulate promo code validation
    if (promoCode.toUpperCase() === "SAVE10") {
      setAppliedPromo(promoCode);
      setPromoDiscount(10);
    } else if (promoCode.toUpperCase() === "SAVE20") {
      setAppliedPromo(promoCode);
      setPromoDiscount(20);
    } else {
      alert("Invalid promo code");
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoDiscount(0);
    setPromoCode("");
  };

  return (
    <main className="bg-[#F9FAFB] min-h-screen">
      <Header />
      <div className="pt-28 md:pt-40" />

      <section className="px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className={`${poppins.className} text-3xl md:text-4xl font-bold text-[#101828]`}>
                Shopping Cart
              </h1>
              <p className={`${poppins.className} mt-1 text-[#6E6E6E]`}>
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
              </p>
            </div>
            <Link
              href="/products"
              className={`${poppins.className} inline-flex items-center gap-2 text-[#008AD2] hover:text-[#0095e6] font-medium`}
            >
              <FiArrowLeft className="w-5 h-5" />
              Continue Shopping
            </Link>
          </div>

          {cartItems.length === 0 ? (
            // Empty cart state
            <div className="bg-white rounded-3xl border border-[#E6EEF7] p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F2F7FB] mb-4">
                <FiShoppingBag className="w-10 h-10 text-[#008AD2]" />
              </div>
              <h2 className={`${poppins.className} text-2xl font-semibold text-[#101828] mb-2`}>
                Your cart is empty
              </h2>
              <p className={`${poppins.className} text-[#6E6E6E] mb-6`}>
                Add some products to get started
              </p>
              <Link
                href="/products"
                className={`${poppins.className} inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#008AD2] text-white hover:bg-[#0095e6] font-medium transition-colors`}
              >
                Browse Products
              </Link>
            </div>
          ) : (
            // Cart with items
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-[#E6EEF7] p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-4 md:gap-6">
                      {/* Product Image */}
                      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-4">
                          <div className="flex-1">
                            <div className="inline-flex items-center rounded-full bg-[#F2F7FB] text-[#0B2C3D] border border-[#E6EEF7] px-2.5 py-1 text-xs mb-2">
                              {item.category}
                            </div>
                            <h3 className={`${poppins.className} text-lg md:text-xl font-semibold text-[#101828] mb-1`}>
                              {item.title}
                            </h3>
                            {item.size && (
                              <p className={`${poppins.className} text-sm text-[#6E6E6E]`}>
                                Size: {item.size}
                              </p>
                            )}
                            {item.color && (
                              <p className={`${poppins.className} text-sm text-[#6E6E6E]`}>
                                Color: {item.color}
                              </p>
                            )}
                          </div>

                          {/* Remove button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 p-2 h-fit"
                            aria-label="Remove item"
                          >
                            <FiTrash2 className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Price and Quantity */}
                        <div className="mt-4 flex items-center justify-between">
                          <div className={`${poppins.className} text-xl font-bold text-[#008AD2]`}>
                            {fmt.format(item.price * item.quantity)}
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 bg-[#F9FAFB] rounded-full p-1">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              disabled={item.quantity <= 1}
                              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-[#E6EEF7] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <FiMinus className="w-4 h-4" />
                            </button>
                            <span className={`${poppins.className} w-8 text-center font-medium`}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-[#E6EEF7] hover:bg-gray-50 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <FiPlus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-[#E6EEF7] p-6 shadow-sm sticky top-6">
                  <h2 className={`${poppins.className} text-xl font-semibold text-[#101828] mb-4`}>
                    Order Summary
                  </h2>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <label className={`${poppins.className} text-sm font-medium text-[#344054] mb-2 block`}>
                      Promo Code
                    </label>
                    {appliedPromo ? (
                      <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <FiTag className="w-4 h-4 text-green-600" />
                          <span className={`${poppins.className} text-sm font-medium text-green-700`}>
                            {appliedPromo} Applied
                          </span>
                        </div>
                        <button
                          onClick={removePromoCode}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Enter code"
                          className={`${poppins.className} flex-1 px-4 py-2.5 rounded-lg border border-[#E4E7EC] focus:outline-none focus:ring-2 focus:ring-[#BFE9FF]`}
                        />
                        <button
                          onClick={applyPromoCode}
                          disabled={!promoCode}
                          className={`${poppins.className} px-4 py-2.5 rounded-lg bg-[#008AD2] text-white hover:bg-[#0095e6] disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors`}
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 border-t border-[#E6EEF7] pt-4">
                    <div className="flex justify-between">
                      <span className={`${poppins.className} text-[#6E6E6E]`}>Subtotal</span>
                      <span className={`${poppins.className} font-medium text-[#101828]`}>
                        {fmt.format(subtotal)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${poppins.className} text-[#6E6E6E]`}>Tax (GST 18%)</span>
                      <span className={`${poppins.className} font-medium text-[#101828]`}>
                        {fmt.format(tax)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${poppins.className} text-[#6E6E6E]`}>Shipping</span>
                      <span className={`${poppins.className} font-medium ${shipping === 0 ? "text-green-600" : "text-[#101828]"}`}>
                        {shipping === 0 ? "FREE" : fmt.format(shipping)}
                      </span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span className={`${poppins.className}`}>Discount ({promoDiscount}%)</span>
                        <span className={`${poppins.className} font-medium`}>
                          -{fmt.format(discount)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center border-t-2 border-[#E6EEF7] mt-4 pt-4">
                    <span className={`${poppins.className} text-lg font-semibold text-[#101828]`}>
                      Total
                    </span>
                    <span className={`${poppins.className} text-2xl font-bold text-[#008AD2]`}>
                      {fmt.format(total)}
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className={`${poppins.className} w-full mt-6 px-6 py-3.5 rounded-full bg-[#008AD2] text-white hover:bg-[#0095e6] font-semibold shadow-md hover:shadow-lg transition-all`}
                  >
                    Proceed to Checkout
                  </button>

                  {/* Free shipping notice */}
                  {shipping > 0 && (
                    <p className={`${poppins.className} text-xs text-center text-[#6E6E6E] mt-3`}>
                      Add {fmt.format(50000 - subtotal)} more for FREE shipping
                    </p>
                  )}

                  {/* Security badges */}
                  <div className="mt-6 pt-6 border-t border-[#E6EEF7]">
                    <div className="flex items-center justify-center gap-4 text-[#6E6E6E] text-xs">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        Secure Checkout
                      </div>
                      <span>•</span>
                      <div>Free Returns</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* Enquiry Modal for checkout */}
      <EnquiryModal
        cartItems={cartItems}
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        onOrderSuccess={() => {
          // Redirect to products page after a short delay
          setTimeout(() => {
            window.location.href = "/products";
          }, 2500);
        }}
      />
    </main>
  );
}
