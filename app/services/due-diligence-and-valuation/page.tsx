"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import WebsiteFAQ from "@/app/components/FaqSection";
import Head from "next/head";
import axios from "axios";
import { FAQSchema } from "@/app/components/SchemaGenerator";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  Shield, CheckCircle, Search, TrendingUp, FileText, 
  Building, Users, Briefcase, AlertCircle, BarChart3, 
  Scale, BookOpen, MessageCircle, Eye, DollarSign, 
  Heart
} from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Partner {
  id: number;
  icon: string;
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px",
      }
    },
  ],
};

const DueDiligenceAndValuation = () => {
  const partners: Partner[] = [
    { id: 1, icon: "/assets/brand1.png" },
    { id: 2, icon: "/assets/brand3.png" },
    { id: 3, icon: "/assets/brand4.png" },
    { id: 4, icon: "/assets/brand5.png" },
  ];

  const [faqs, setFaqs] = useState([]);
    
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/faq/page/services/due-diligence-and-valuation`
        );
        setFaqs(response.data.faqs || []);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };
    fetchFAQs();
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+919266877793";
    const message = "Hi, I'm interested in learning more about your legal services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Card Data for Slide 1 - Types of Due Diligence
  const dueDiligenceTypes = [
    { icon: FileText, title: "Legal Due Diligence", desc: "Review of contracts, licenses, litigation history, and regulatory compliance to identify risks and liabilities." },
    { icon: DollarSign, title: "Financial Due Diligence", desc: "Analysis of financial statements, tax records, and liabilities to assess the financial health of the entity." },
    { icon: Building, title: "Regulatory Due Diligence", desc: "Ensures compliance with Indian laws, including sector-specific healthcare regulations and corporate governance norms." },
    { icon: Users, title: "Operational Due Diligence", desc: "Evaluates internal processes, management efficiency, and business operations for potential improvements." },
    { icon: AlertCircle, title: "Enhanced Due Diligence", desc: "Conducted for high-risk transactions including background checks, forensic analysis, and detailed risk assessment." },
    { icon: TrendingUp, title: "Valuation Services", desc: "Comprehensive evaluation of healthcare facilities and assets based on financial, legal, and operational metrics." },
  ];

  // Card Data for Slide 2 - Key Benefits
  const benefitsCards = [
    { icon: CheckCircle, title: "Informed Decision-Making", desc: "Our due diligence law experts ensure every aspect of the transaction is carefully reviewed and validated." },
    { icon: Shield, title: "Risk Mitigation", desc: "Identify potential regulatory, financial, and legal risks before making major business decisions." },
    { icon: Scale, title: "Improved Negotiation Power", desc: "Comprehensive due diligence gives you leverage in negotiations and transaction terms." },
    { icon: BarChart3, title: "Regulatory Compliance Assurance", desc: "Ensures your transaction complies with all applicable Indian laws and regulations." },
    { icon: Eye, title: "Hidden Liability Detection", desc: "Uncover undisclosed liabilities, pending litigations, and potential legal exposure." },
    { icon: TrendingUp, title: "Valuation Accuracy", desc: "Get true market value assessment for healthcare facilities, practices, and assets." },
  ];

  // Service Cards
  const serviceCards = [
    { icon: Search, title: "Healthcare Facility Due Diligence", desc: "Specialized due diligence for hospitals, clinics, and diagnostic centers including regulatory compliance verification." },
    { icon: BarChart3, title: "Medical Practice Valuation Services", desc: "Comprehensive valuation of medical practices based on financial performance, patient base, and market position." },
    { icon: Briefcase, title: "Due Diligence for Healthcare Startups", desc: "End-to-end due diligence for healthcare startups preparing for funding rounds or acquisitions." },
    { icon: Building, title: "Valuation of Healthcare Companies", desc: "Expert valuation services for healthcare businesses including goodwill, assets, and revenue streams." },
    { icon: Users, title: "Merger & Acquisition Due Diligence", desc: "Complete legal and financial due diligence for healthcare M&A transactions and partnerships." },
    { icon: Shield, title: "Enhanced Due Diligence for High-Risk Transactions", desc: "In-depth background verification, forensic financial analysis, and cross-border compliance checks." },
  ];

  // Swiper breakpoints for the regulations section
  const swiperBreakpoints = {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Due Diligence Services for Healthcare Sector in India | Legal Experts</title>
        <meta name="description" content="Expert due diligence services for healthcare sector in India. Legal, financial & regulatory due diligence for M&A, investments & healthcare partnerships." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {faqs.length > 0 && <FAQSchema faqs={faqs} />}   
      
      {/* Hero Section - Mobile Optimized */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4"
        style={{
          backgroundImage: "url('/assets/dueDilligencePhoto.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4"
          >
            Due Diligence & Valuation Services for Healthcare
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/95 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Comprehensive legal, financial & regulatory due diligence for informed business decisions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#17ada1] hover:bg-[#138f85] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                Let's Discuss
              </button>
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300"
            >
              Schedule a Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* What is Due Diligence Under Indian Law - Mobile Friendly */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-[#17ada1] text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">What is Due Diligence Under Indian Law?</h2>
              <div className="space-y-3 sm:space-y-4 leading-relaxed text-sm sm:text-base">
                <p>
                  Due diligence refers to the systematic investigation and evaluation of a business, individual, or transaction before finalizing a deal. Under Indian law, due diligence plays a crucial role in mergers and acquisitions, private equity investments, healthcare partnerships, and regulatory compliance.
                </p>
                <p>
                  The objective of due diligence is to identify legal, financial, and operational risks, verify compliance with applicable laws, assess liabilities and contractual obligations, and ensure transparency in transactions.
                </p>
                <p>
                  A well-executed due diligence process protects stakeholders from unforeseen legal and financial consequences. Our due diligence law experts ensure that every aspect of the transaction is carefully reviewed and validated.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/assets/due.jpg" 
                  alt="Due diligence and valuation" 
                  width={600} 
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Due Diligence - Cards Slider */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Types of Due Diligence We Offer</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">
              Understanding the types of due diligence is essential for selecting the right approach for your transaction. At MedNLaw, we provide specialized services across multiple domains.
            </p>
          </motion.div>

          <Slider {...sliderSettings} className="px-2 sm:px-4">
            {dueDiligenceTypes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-2 sm:px-3"
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-auto">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-3 sm:mb-5">
                    <item.icon size={24} className="text-[#17ada1] sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Key Benefits - Cards Slider */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Why Due Diligence is Essential for Business Transactions</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">
              Conducting due diligence is not just a best practice—it is a necessity in India's regulatory environment. Failure to perform proper due diligence can lead to significant risks, including legal disputes, regulatory penalties, and financial losses.
            </p>
          </motion.div>

          <Slider {...sliderSettings} className="px-2 sm:px-4">
            {benefitsCards.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-2 sm:px-3"
              >
                <div className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-auto">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-3 sm:mb-5">
                    <item.icon size={24} className="text-[#17ada1] sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Our Due Diligence & Valuation Services */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Our Due Diligence & Valuation Services</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">We offer specialized due diligence and valuation services tailored for the healthcare sector.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {serviceCards.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white border-2 border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <item.icon className="text-[#17ada1]" size={20} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Due Diligence Law in India - Key Regulations */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Due Diligence Law in India – Key Regulations
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">
              Due diligence law in India is influenced by multiple legal frameworks that our experts meticulously review.
            </p>
          </motion.div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={swiperBreakpoints}
            className="due-diligence-slider px-2"
          >
            {/* Slide 1 - Companies Act */}
            <SwiperSlide>
              <motion.div 
                whileHover={{ y: -5 }} 
                className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 h-full"
              >
                <Building className="text-[#17ada1] w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Companies Act, 2013</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Corporate governance, compliance, and statutory requirements for businesses.</p>
              </motion.div>
            </SwiperSlide>

            {/* Slide 2 - SEBI Regulations */}
            <SwiperSlide>
              <motion.div 
                whileHover={{ y: -5 }} 
                className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 h-full"
              >
                <Shield className="text-[#17ada1] w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">SEBI Regulations</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Securities and Exchange Board of India rules for listed companies and investments.</p>
              </motion.div>
            </SwiperSlide>

            {/* Slide 3 - FEMA */}
            <SwiperSlide>
              <motion.div 
                whileHover={{ y: -5 }} 
                className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 h-full"
              >
                <Scale className="text-[#17ada1] w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">FEMA</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Foreign Exchange Management Act for cross-border transactions and investments.</p>
              </motion.div>
            </SwiperSlide>

            {/* Slide 4 - Income Tax Act */}
            <SwiperSlide>
              <motion.div 
                whileHover={{ y: -5 }} 
                className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 h-full"
              >
                <FileText className="text-[#17ada1] w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Income Tax Act</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Tax compliance, liabilities, and historical tax assessment reviews.</p>
              </motion.div>
            </SwiperSlide>

            {/* Slide 5 - Clinical Establishments Act */}
            <SwiperSlide>
              <motion.div 
                whileHover={{ y: -5 }} 
                className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 h-full"
              >
                <Heart className="text-[#17ada1] w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Clinical Establishments Act</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Sector-specific regulations for healthcare facilities and medical practices.</p>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Our Due Diligence Process */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Our Due Diligence Process</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">At MedNLaw, our structured due diligence process ensures thorough evaluation and accurate reporting.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { step: "Scope Definition", desc: "We define the scope of due diligence based on the nature of the transaction and client requirements." },
              { step: "Data Collection", desc: "Our team gathers all relevant documents, including contracts, financial records, and compliance filings." },
              { step: "Analysis & Review", desc: "We conduct detailed due diligence analysis, identifying risks, inconsistencies, and compliance gaps." },
              { step: "Risk Assessment", desc: "Our due diligence law experts evaluate potential legal and financial risks associated with the transaction." },
              { step: "Reporting", desc: "We provide a comprehensive due diligence report with actionable insights and recommendations." }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center group px-2"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#17ada1] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white text-xl sm:text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{item.step}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Due Diligence for High-Risk Transactions */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#17ada1] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/assets/healthcare-2nd.jpg" 
                  alt="Enhanced due diligence" 
                  width={500} 
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover" 
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Enhanced Due Diligence for High-Risk Transactions</h2>
              <div className="space-y-3 sm:space-y-4 text-white/95 text-sm sm:text-base">
                <p>
                  In certain situations, standard due diligence may not be sufficient. Enhanced due diligence is required when dealing with high-value transactions, cross-border investments, or entities with complex structures.
                </p>
                <p>
                  Our enhanced due diligence services include in-depth background verification, forensic financial analysis, compliance checks across multiple jurisdictions, and identification of hidden liabilities.
                </p>
                <p>
                  By conducting enhanced due diligence, we provide a deeper level of assurance and risk mitigation. This is particularly critical for healthcare M&A deals, where regulatory compliance and patient data protection are paramount.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose MednLaw */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4"
          >
            Why Choose MedNLaw for Due Diligence Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-10 text-sm sm:text-base px-4"
          >
            Selecting the right partner for due diligence is critical to the success of your transaction. MedNLaw stands out due to extensive experience in due diligence across industries, strong understanding of Indian due diligence law, customized solutions based on transaction requirements, expertise in healthcare and regulated sectors, and accurate, timely, and actionable reporting. Our team ensures that your due diligence process is thorough, efficient, and aligned with your business goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#17ada1] hover:bg-[#138f85] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer w-full sm:w-auto"
            >
              Talk to a Specialist
            </button>
          </motion.div>
        </div>
      </section>

      {/* When Do You Need Due Diligence Services */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">When Do You Need Due Diligence Services in Healthcare?</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">You should consider professional due diligence services in the following scenarios:</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {[
              "Mergers and Acquisitions",
              "Investment or Funding Rounds",
              "Joint Ventures and Partnerships",
              "Business Expansion",
              "Regulatory Compliance Reviews",
              "Healthcare Practice Purchase/Sale"
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#17ada1]"
              >
                <CheckCircle className="text-[#17ada1] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-xs sm:text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By - Mobile Optimized */}
      <div className="relative overflow-hidden py-12 sm:py-16 bg-white">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-700 mb-6 sm:mb-10 px-4">Trusted By Leading Healthcare Institutions</h2>
        <motion.div
          className="flex gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center"
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
              className="flex-shrink-0 w-40 sm:w-48 md:w-60 h-24 sm:h-32 md:h-40 flex items-center justify-center group"
            >
              <div className="relative w-full h-full flex items-center justify-center bg-white rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#17ADA1]/30 p-4">
                <Image
                  src={partner.icon}
                  alt={`Partner ${partner.id}`}
                  width={160}
                  height={80}
                  className="max-h-16 sm:max-h-20 md:max-h-24 max-w-32 sm:max-w-40 md:max-w-48 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#17ada1] to-[#138f85] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4"
          >
            Need Due Diligence Services for Your Healthcare Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 leading-relaxed text-sm sm:text-base mb-6 sm:mb-10 max-w-3xl mx-auto px-4"
          >
            Whether you're planning an acquisition, entering a partnership, or need regulatory compliance review, our due diligence experts are ready to support you throughout your healthcare journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact" className="block sm:inline-block">
              <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#17ada1] px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                Let's Connect
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <WebsiteFAQ pageUrl="/services/due-diligence-and-valuation" />
      
    </div>
  );
};

export default DueDiligenceAndValuation;