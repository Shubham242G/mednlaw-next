"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Blog {
  _id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  images?: string[];
  seoFocusKeyword?: string;
  seoTitle?: string;
  seoMetaDescription?: string;
}

const BlogPostPage = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        throw new Error("API URL not configured");
      }
      
      console.log('🌐 Fetching blog:', `${apiUrl}/api/blogs/${slug}`);
      
      const response = await fetch(`${apiUrl}/api/blogs/${slug}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Blog not found");
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setBlog(data);
    } catch (err) {
      console.error("❌ Failed to fetch blog:", err);
      setError(err instanceof Error ? err.message : "Failed to load blog");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black/80 to-[#17ADA1]/10">
        <span className="text-[#17ADA1] text-lg animate-pulse">
          Loading blog...
        </span>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-black/80 to-[#17ADA1]/10">
        <p className="text-[#17ADA1] text-xl">{error || "Blog not found"}</p>
        <Link href="/blogs" className="text-[#17ADA1] hover:underline">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black/90 to-[#17ADA1]/10 py-24">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/blogs"
          className="inline-block mb-8 text-[#17ADA1] hover:underline"
        >
          ← Back to Blogs
        </Link>

        {/* Featured image */}
        {blog.images?.[0] && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full h-[420px] rounded-3xl overflow-hidden mb-12 shadow-2xl relative"
          >
            <Image
              src={blog.images[0]}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}

        {/* Blog container */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-[#17ADA1]/20"
        >
          {/* Date */}
          <p className="text-sm text-[#11897F] mb-4">
            {new Date(blog.date).toLocaleDateString("en-IN", {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-light text-[#17ADA1] mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Summary */}
          <div className="text-lg text-[#11897F] mb-10 leading-relaxed border-l-4 border-[#17ADA1]/30 pl-6 italic">
            {blog.summary}
          </div>

          {/* Content (TipTap HTML) */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-[#17ADA1] prose-p:text-gray-700 prose-strong:text-[#17ADA1] prose-a:text-[#17ADA1] prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* SEO info (optional display) */}
          {(blog.seoFocusKeyword || blog.seoMetaDescription) && (
            <div className="mt-16 pt-8 border-t border-[#17ADA1]/20">
              {blog.seoFocusKeyword && (
                <p className="text-sm text-[#11897F]">
                  <span className="font-medium text-[#17ADA1]">
                    Focus Keyword:
                  </span>{" "}
                  {blog.seoFocusKeyword}
                </p>
              )}
              {blog.seoMetaDescription && (
                <p className="text-sm text-[#11897F] mt-2">
                  <span className="font-medium text-[#17ADA1]">
                    Meta Description:
                  </span>{" "}
                  {blog.seoMetaDescription}
                </p>
              )}
            </div>
          )}
        </motion.article>
      </div>
    </section>
  );
};

export default BlogPostPage;