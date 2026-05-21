import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { posts, getPostBySlug } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import PostContent from "./PostContent";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero banner */}
      <div className="pt-28 pb-12 relative overflow-hidden" style={{ minHeight: 280 }}>
        {/* Background: SVG cover image or gradient fallback */}
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover object-left-top"
            priority
            sizes="100vw"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${post.coverColor}`} />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        <div className="section-container relative z-10 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold mb-6 transition-all hover:gap-3"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                style={{
                  background: "rgba(0,0,0,0.25)",
                  color: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-5 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="py-16">
        <div className="section-container max-w-3xl">
          <PostContent content={post.content} />

          {/* Footer nav */}
          <div
            className="mt-16 pt-8 flex items-center justify-between"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
              style={{ color: "var(--brand)" }}
            >
              <ArrowLeft size={15} /> All Posts
            </Link>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Thanks for reading!
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
