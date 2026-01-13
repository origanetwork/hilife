"use client";

import { useState, useEffect, useCallback } from "react";
import { Poppins } from "next/font/google";
import { createOrderApi } from "@/service/api";
import type { OrderItem } from "@/types";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"], display: "swap" });

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string;
};

type ProductData = {
  id: string;
  title: string;
  price?: number;
};

type Props = {
  product?: ProductData | null;
  open: boolean;
  onClose: () => void;
  cartItems?: CartItem[];
  onOrderSuccess?: () => void;
};

export default function EnquiryModal({ product, open, onClose, cartItems, onOrderSuccess }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const close = useCallback(() => {
    if (!isLoading) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setShippingAddress("");
      setNote("");
      setError(null);
      setSuccess(false);
      onClose();
    }
  }, [onClose, isLoading]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!firstName.trim()) {
      setError("First name is required");
      return;
    }

    if (!phone.trim()) {
      setError("Phone number is required");
      return;
    }

    // Determine items to order
    let items: OrderItem[] = [];

    if (cartItems && cartItems.length > 0) {
      // Use cart items for checkout
      items = cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        amount: item.price,
      }));
    } else if (product) {
      // Single product from Buy Now button
      if (!product.price) {
        setError("Product price is missing");
        return;
      }
      items = [{
        productId: product.id,
        quantity: 1,
        amount: product.price,
      }];
    } else {
      setError("No items to order");
      return;
    }

    try {
      setIsLoading(true);

      const orderData = {
        firstName: firstName.trim(),
        lastName: lastName.trim() || undefined,
        phone: phone.trim(),
        email: email.trim() || undefined,
        shippingAddress: shippingAddress.trim() || undefined,
        note: note.trim() || undefined,
        items,
      };

      await createOrderApi(orderData);

      setSuccess(true);

      // Clear cart from localStorage if this was a checkout
      if (cartItems && cartItems.length > 0) {
        localStorage.removeItem("cart");
        // Dispatch event to notify cart page
        window.dispatchEvent(new Event("cartCleared"));
      }

      // Call success callback
      if (onOrderSuccess) {
        onOrderSuccess();
      }

      // Close modal after a short delay
      setTimeout(() => {
        close();
      }, 2000);
    } catch (err: any) {
      console.error("Order creation error:", err);
      setError(err?.response?.data?.message || "Failed to create order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60" onClick={close}>
      <div className="relative w-full max-w-lg mx-4 rounded-2xl bg-white shadow-xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button
          aria-label="Close"
          onClick={close}
          disabled={isLoading}
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed z-10"
        >
          ✕
        </button>

        <div className="p-6 md:p-7">
          <h3 className={`${poppins.className} text-[20px] md:text-[22px] font-semibold text-[#101828]`}>
            {cartItems && cartItems.length > 0 ? "Checkout" : "Buy Now"}
          </h3>
          {product && (
            <p className={`${poppins.className} mt-1 text-sm text-[#475467]`}>Product: {product.title}</p>
          )}
          {cartItems && cartItems.length > 0 && (
            <p className={`${poppins.className} mt-1 text-sm text-[#475467]`}>
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in cart
            </p>
          )}

          {success ? (
            <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg text-center">
              <div className="text-4xl mb-3">✓</div>
              <h4 className={`${poppins.className} text-lg font-semibold text-green-800 mb-2`}>Order Placed Successfully!</h4>
              <p className={`${poppins.className} text-sm text-green-700`}>We will contact you shortly to confirm your order.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`${poppins.className} block text-sm text-[#667085] mb-1`}>
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    disabled={isLoading}
                    className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 outline-none focus:ring-2 focus:ring-[#008AD2] disabled:bg-gray-100"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className={`${poppins.className} block text-sm text-[#667085] mb-1`}>Last Name</label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    disabled={isLoading}
                    className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 outline-none focus:ring-2 focus:ring-[#008AD2] disabled:bg-gray-100"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className={`${poppins.className} block text-sm text-[#667085] mb-1`}>
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  disabled={isLoading}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 outline-none focus:ring-2 focus:ring-[#008AD2] disabled:bg-gray-100"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className={`${poppins.className} block text-sm text-[#667085] mb-1`}>Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  disabled={isLoading}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 outline-none focus:ring-2 focus:ring-[#008AD2] disabled:bg-gray-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className={`${poppins.className} block text-sm text-[#667085] mb-1`}>Shipping Address</label>
                <textarea
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  rows={3}
                  disabled={isLoading}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 outline-none focus:ring-2 focus:ring-[#008AD2] disabled:bg-gray-100"
                  placeholder="Enter your delivery address"
                />
              </div>

              <div>
                <label className={`${poppins.className} block text-sm text-[#667085] mb-1`}>Note (Optional)</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={2}
                  disabled={isLoading}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 outline-none focus:ring-2 focus:ring-[#008AD2] disabled:bg-gray-100"
                  placeholder="Any special requests or notes"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className={`${poppins.className} text-sm text-red-700`}>{error}</p>
                </div>
              )}

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
                  className={`${poppins.className} px-6 py-2 rounded-full bg-[#008AD2] text-white hover:bg-[#0095e6] disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isLoading ? "Placing Order..." : "Place Order"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
