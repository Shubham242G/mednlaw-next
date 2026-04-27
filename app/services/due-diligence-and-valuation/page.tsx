"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Partner {
  id: number;
  icon: string;
}

const DueDiligenceAndValuation = () => {
  const partners: Partner[] = [
    { id: 1, icon: "/assets/brand1.png" },
    { id: 2, icon: "/assets/brand3.png" },
    { id: 3, icon: "/assets/brand4.png" },
    { id: 4, icon: "/assets/brand5.png" },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "+919266877793";
    const message = "Hi, I'm interested in learning more about your legal services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const approachSteps = [
    {
      title: "Valuation",
      desc: "Comprehensive evaluation of healthcare facilities and assets based on financial, legal, and operational metrics.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Strategy",
      desc: "Develop a well-structured plan for acquisitions, partnerships, or restructuring based on due diligence outcomes.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Research",
      desc: "In-depth market, legal, and operational research ensures informed business decision-making.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      desc: "We collaborate with clients and medical professionals for transparent and accurate evaluations.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Communication",
      desc: "Every step is documented and communicated clearly to maintain full client visibility.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: "Support",
      desc: "Continuous post-analysis guidance to ensure smooth execution of strategic plans.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  const serviceTypes = [
    "Healthcare Facility Due Diligence",
    "Medical Practice Valuation Services",
    "Due Diligence for Healthcare Startups",
    "Valuation Services for Medical Facilities",
    "Valuation of Healthcare Companies",
    "Merger & Acquisition Due Diligence",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden pt-28 pb-20 px-4"
        style={{
          backgroundImage: "url('/assets/dueDilligencePhoto.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Due Diligence &amp; Valuation
          </h1>
          <p className="text-lg text-white mb-10 leading-relaxed">
            Ensure compliance, accuracy, and value in your healthcare business
            decisions with our specialized due diligence and valuation services.
            MednLaw delivers legal and financial precision tailored for the
            healthcare sector.
          </p>
          <Link href="/contact">
            <button className="bg-[#0f766e] hover:bg-[#0d9488] text-white px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
              Let's Discuss
            </button>
          </Link>
        </div>
      </section>

      {/* What is Due Diligence & Valuation */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is Due Diligence &amp; Valuation
              </h2>
              <div className="space-y-4 leading-relaxed text-sm">
                <p>
                  Healthcare valuation and due diligence ensure your organization's
                  assets, operations, and risks are fully understood before any
                  strategic move. Our experts help you assess compliance, identify
                  red flags, and validate the financial worth of medical facilities,
                  clinics, or startups.
                </p>
                <p>
                  We provide comprehensive analysis covering regulatory compliance,
                  financial performance, operational efficiency, and market positioning
                  to give you complete confidence in your healthcare business decisions.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="overflow-hidden h-[450px] flex items-center justify-center">
                <Image 
                  src="/assets/due.jpg" 
                  alt="Due diligence and valuation" 
                  width={600} 
                  height={400}
                  className="rounded-md w-full h-auto mb-10 object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MednLaw Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why MednLaw?</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 text-base">
            At MednLaw, we combine healthcare domain expertise with legal and
            financial accuracy. Our team ensures every valuation, risk
            assessment, or compliance review stands up to regulatory scrutiny and
            industry benchmarks.
          </p>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            className="flex-shrink-0 w-full md:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleWhatsAppClick}
              className="w-full md:w-auto group relative bg-gradient-to-r from-[#17ADA1] to-[#14968C] text-white px-8 md:px-12 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#14968C] to-[#0d7c72] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative">Schedule a call</span>
            </motion.button>
          </motion.div>

          {/* Expertise Boxes */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Expertise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our deep knowledge of healthcare operations allows us to assess
                risk and valuation factors precisely.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Identify potential regulatory, financial, and legal risks before
                making major business decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The MednLaw Approach */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            The MednLaw Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachSteps.map(({ title, desc, icon }, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Types of Due Diligence &amp; Valuation Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTypes.map((service) => (
              <div
                key={service}
                className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive analysis and verification tailored to your
                  specific healthcare business needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <div className="relative overflow-hidden mt-10">
        <motion.div
          className="flex gap-12 md:gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex-shrink-0 w-60 h-40 flex items-center justify-center group"
            >
              <div className="relative w-full h-full flex items-center justify-center bg-white rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#17ADA1]/30">
                <Image
                  src={partner.icon}
                  alt={`Partner ${partner.id}`}
                  width={200}
                  height={96}
                  className="max-h-24 max-w-48 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#17ada1] to-[#138f85] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We are here for you: Every Step of Your Healthcare Compliance Journey
          </h2>
          <p className="text-white/95 leading-relaxed text-base mb-10 max-w-3xl mx-auto">
            Need precise guidance for your healthcare compliance and valuation
            needs? Our legal and financial experts are ready to support you
            throughout your healthcare journey.
          </p>
          <Link href="/contact">
            <button className="bg-white hover:bg-gray-100 text-[#17ada1] px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-xl inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let's Connect
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DueDiligenceAndValuation;