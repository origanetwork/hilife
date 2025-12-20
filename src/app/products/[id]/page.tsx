import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MotionSection } from "../../components/Motion";
import { Poppins, Playfair_Display } from "next/font/google";
import { getProduct } from "../data";
import ProductDetailClient from "../ProductDetailClient";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({ weight: ["600", "700"], subsets: ["latin"], display: "swap" });

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Params = { params: Promise<{ id: string }> };

export default async function ProductDetailPage({ params }: Params) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return notFound();

  return (
    <main className="bg-white min-h-screen">
      <Header />
      <div className="pt-28 md:pt-40" />

      <MotionSection className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <a href="/products" className={`${poppins.className} inline-flex items-center gap-2 text-[#008AD2] hover:underline`}>
              ← Back to Products
            </a>
          </div>
          <h1 className={`${playfair.className} text-[28px] md:text-[36px] font-semibold text-[#101828]`}>{product.title}</h1>
          <p className={`${poppins.className} mt-1 text-[#6E6E6E]`}>{product.category}</p>

          <div className="mt-6">
            <ProductDetailClient product={product} />
          </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}
