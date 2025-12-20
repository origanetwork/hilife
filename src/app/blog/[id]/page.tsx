import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Poppins } from "next/font/google";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MotionSection } from "../../components/Motion";
import { getPost } from "../data";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });

type Params = { params: Promise<{ id: string }> };

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BlogDetailPage({ params }: Params) {
  const { id } = await params;
  const post = getPost(id);
  if (!post) return notFound();

  return (
    <main className="bg-white min-h-screen">
      <Header />
      <div className="pt-28 md:pt-40" />

      <MotionSection className="px-6">
        <article className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/blog" className={`${poppins.className} inline-flex items-center gap-2 text-[#008AD2] hover:underline`}>
              ← Back to Blog
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center rounded-full bg-[#F4F3FF] text-[#6941C6] px-3 py-1 font-semibold uppercase tracking-wide">
              {post.category}
            </span>
            <span className={`${poppins.className} text-[#6E6E6E]`}>{post.minutes} min read</span>
            <span className="h-3 w-px bg-black/10" />
            <span className={`${poppins.className} text-[#6E6E6E]`}>{post.date}</span>
          </div>

          <h1 className={`${poppins.className} mt-3 md:mt-4 text-[30px] md:text-[44px] leading-tight font-bold text-black`}>
            {post.title}
          </h1>

          <div className="mt-6 md:mt-8 overflow-hidden rounded-3xl border border-black/10 shadow-[0_4px_12px_-4px_rgba(16,24,40,0.12),0_24px_32px_-8px_rgba(16,24,40,0.12)]">
            <div className="relative aspect-video">
              <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" />
            </div>
          </div>

          <div className="mt-8 md:mt-10 rounded-3xl bg-white border border-black/10 shadow-[0_6px_16px_-6px_rgba(16,24,40,0.12),0_28px_40px_-14px_rgba(16,24,40,0.14)] p-6 md:p-10">
            <div className={`${poppins.className} text-[16px] md:text-[18px] leading-[1.85] text-[#475467]`}> 
              <p>{post.content ?? post.excerpt}</p>
            </div>
          </div>
        </article>
      </MotionSection>

      <Footer />
    </main>
  );
}
