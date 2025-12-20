export type Product = {
  id: string;
  title: string;
  category: string;
  image: string;
  tags?: string[];
  rating?: number;
  price: number; // in INR
  createdAt: string; // ISO date string
};

export const products: Product[] = [
  { id: "p1", title: "TurboFlow Pro 500", category: "Mattresses", image: "/assets/products/1.jpg", tags: ["Orthopedic Support", "Motion Isolation", "Breathable"], rating: 4.8, price: 25999, createdAt: "2025-01-10" },
  { id: "p2", title: "AquaShine Basin Mixture", category: "Pillows", image: "/assets/products/2.jpg", tags: ["Neck Support", "Hypoallergenic"], rating: 4.6, price: 1999, createdAt: "2024-11-18" },
  { id: "p3", title: "ElegantFlush WC Suite", category: "Mattresses", image: "/assets/products/3.avif", tags: ["Pressure Relief", "Spinal Alignment"], rating: 4.9, price: 32999, createdAt: "2025-02-02" },
  { id: "p4", title: "SafeGuard MCB Panel", category: "Comforts", image: "/assets/products/4.jpg", tags: ["Ultra Soft", "Machine Washable"], rating: 4.7, price: 3499, createdAt: "2024-12-05" },
  { id: "p5", title: "LumiGlow LED Panel", category: "Comforts", image: "/assets/products/5.jpg", tags: ["Lightweight", "Breathable"], rating: 4.8, price: 2799, createdAt: "2024-10-25" },
  { id: "p6", title: "TurboFlow Pro 300", category: "Mattresses", image: "/assets/products/6.jpg", tags: ["Cooling Gel", "Durable", "Motion Isolation"], rating: 4.5, price: 21999, createdAt: "2024-09-12" },
  { id: "p7", title: "AquaShine Shower Set", category: "Pillows", image: "/assets/products/7.jpg", tags: ["Memory Foam"], rating: 4.4, price: 2499, createdAt: "2025-01-28" },
  { id: "p8", title: "GlowStrip LED Reel", category: "Comforts", image: "/assets/products/8.webp", tags: ["Warmth Retention"], rating: 4.6, price: 3199, createdAt: "2024-08-20" },
  { id: "p9", title: "ProFlush Tank", category: "Mattresses", image: "/assets/products/9.png", tags: ["Firm Support"], rating: 4.3, price: 18999, createdAt: "2024-07-11" },
  { id: "p10", title: "EcoSwitch Series", category: "Foldable Mattresses", image: "/assets/products/10.webp", tags: ["Portable", "Space Saving"], rating: 4.2, price: 7999, createdAt: "2025-02-15" },
  { id: "p11", title: "Premium M Mattress", category: "Mattresses", image: "/assets/products/M.png", tags: ["Orthopedic Support", "Breathable", "Durable"], rating: 4.7, price: 28999, createdAt: "2024-12-22" },
  { id: "p12", title: "Premium F Mattress", category: "Mattresses", image: "/assets/products/F.png", tags: ["Memory Foam", "Pressure Relief", "Cooling"], rating: 4.6, price: 30999, createdAt: "2025-02-20" },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

