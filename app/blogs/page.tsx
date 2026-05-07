"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Blog {
  _id: string;
  title: string;
  summary: string;
  date: string;
  images?: string[];
  slug?: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const BlogsPage = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        throw new Error("API URL not configured");
      }

      const url = `${apiUrl}/api/blogs?page=${page}&limit=9`;
      console.log('🌐 Fetching:', url);

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();

      console.log('✅ Blogs loaded:', data.blogs?.length || 0);
      setBlogs(data.blogs || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error("❌ Failed to fetch blogs:", err);
      setError(err instanceof Error ? err.message : "Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black/80 to-[#17ADA1]/10">
        <div className="text-[#17ADA1] text-xl animate-pulse">Loading blog posts...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="relative w-full min-h-screen bg-gradient-to-br from-black/80 to-[#17ADA1]/10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/90 to-transparent pointer-events-none z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-[#17ADA1]/20" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-light text-[#17ADA1] mb-6 leading-tight">
              Unable to Load Blogs
            </h2>
            <p className="text-[#11897F] max-w-md mb-12 text-lg leading-relaxed">
              {error}
            </p>
            <button 
              onClick={() => fetchBlogs()} 
              className="px-8 py-4 bg-[#17ADA1] text-white rounded-2xl font-medium hover:bg-[#11897F] transition-all duration-300 shadow-lg hover:scale-[1.02]"
            >
              Try Again
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  // Empty state
  if (!loading && blogs.length === 0) {
    return (
      <section className="relative w-full min-h-screen bg-gradient-to-br from-black/80 to-[#17ADA1]/10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/90 to-transparent pointer-events-none z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-[#17ADA1]/20" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-light text-[#17ADA1] mb-6 leading-tight">
              No Blog Posts Yet
            </h2>
            <p className="text-[#11897F] max-w-md mb-12 text-lg leading-relaxed">
              Our latest medical law insights will appear here soon.
            </p>
            <Link href="/contact-us" className="px-8 py-4 bg-[#17ADA1] text-white rounded-2xl font-medium hover:bg-[#11897F] transition-all duration-300 shadow-lg hover:scale-[1.02]">
              Contact Our Experts
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full min-h-screen bg-cover bg-center overflow-hidden text-[#17ADA1]" style={{ backgroundImage: "url('/assets/blog-bg.jpg')" }}>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-[#17ADA1]/40" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24">
        {/* HEADING */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-[#3FC6B9] text-sm md:text-base font-light tracking-[0.3em] uppercase mb-4">MedNLaw Insights</p>
          <h2 className="text-[#17ADA1] text-4xl md:text-6xl font-light mb-8">Latest medical law updates & case studies</h2>
          <p className="text-[#11897F] max-w-2xl mx-auto text-lg mb-12 leading-relaxed">Stay informed with expert analysis on medical negligence, patient rights, healthcare regulations, and landmark judgments.</p>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative w-fit mx-auto mb-10">
            <div className="absolute -inset-2 bg-[#17ADA1] rounded-lg blur-xl opacity-40 animate-pulse" />
            <Link href="/contact-us">
              <button className="relative bg-transparent border-2 border-[#17ADA1] text-white px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg backdrop-blur-sm hover:bg-[#17ADA1]/20 transition-all duration-300 shadow-lg hover:scale-[1.02] whitespace-nowrap">
                Consult Our Experts
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* BLOG CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogs.map((blog, i) => (
            <motion.div
  key={blog._id}
  custom={i}
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(23, 173, 161, 0.3)" }}
  viewport={{ once: true }}
  onClick={() => router.push(`/blogs/${blog.slug || blog._id}`)} // CHANGED: use slug if exists, fallback to ID
  className="cursor-pointer bg-white/90 backdrop-blur-md border border-[#17ADA1]/20 rounded-2xl p-8 hover:bg-white hover:border-[#17ADA1]/60 group overflow-hidden relative transition-all duration-300"
>
              {blog.images && blog.images[0] && (
                <div className="w-full h-48 rounded-xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-500 relative">
                  <Image 
                    src={blog.images[0]} 
                    alt={blog.title} 
                    fill
                    className="object-cover transition-all duration-500 group-hover:grayscale-0 grayscale" 
                  />
                </div>
              )}
              <div className="inline-block bg-[#17ADA1]/20 text-[#17ADA1] px-3 py-1 rounded-full text-xs font-medium mb-4 uppercase tracking-wider">
                Medical Law
              </div>
              <h3 className="text-[#17ADA1] text-xl font-semibold mb-3 group-hover:text-[#11897F] transition-colors duration-300 line-clamp-2 leading-tight">{blog.title}</h3>
              <p className="text-[#11897F] text-sm font-light leading-relaxed mb-6 line-clamp-3">{blog.summary}</p>
              <div className="flex items-center justify-between text-xs text-[#11897F] mb-6 opacity-80">
                <span>{new Date(blog.date).toLocaleDateString('en-IN')}</span>
                <span>• {Math.floor(Math.random() * 8 + 3)} min read</span>
              </div>
              <div className="flex items-center text-[#17ADA1] group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-light tracking-wider text-sm">READ ARTICLE</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-4 text-[#17ADA1] text-sm">
            <button 
              disabled={page === 1} 
              onClick={() => setPage(p => p - 1)} 
              className="px-4 py-2 bg-white/50 border border-[#17ADA1]/30 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Previous
            </button>
            <span className="bg-white/20 px-4 py-2 rounded-lg">Page {page} of {totalPages}</span>
            <button 
              disabled={page === totalPages} 
              onClick={() => setPage(p => p + 1)} 
              className="px-4 py-2 bg-white/50 border border-[#17ADA1]/30 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Next
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogsPage;