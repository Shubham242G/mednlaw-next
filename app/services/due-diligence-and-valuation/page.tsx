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
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
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

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Due Diligence Services for Healthcare Sector in India | Legal Experts</title>
        <meta name="description" content="Expert due diligence services for healthcare sector in India. Legal, financial & regulatory due diligence for M&A, investments & healthcare partnerships." />
      </Head>

      {faqs.length > 0 && <FAQSchema faqs={faqs} />}   
      
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Due Diligence & Valuation Services for Healthcare
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Comprehensive legal, financial & regulatory due diligence for informed business decisions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <button className="bg-[#17ada1] hover:bg-[#138f85] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                Let's Discuss
              </button>
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Schedule a Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* What is Due Diligence Under Indian Law */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Due Diligence Under Indian Law?</h2>
              <div className="space-y-4 leading-relaxed">
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
            <div className="relative">
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Due Diligence We Offer</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Understanding the types of due diligence is essential for selecting the right approach for your transaction. At MednLaw, we provide specialized services across multiple domains.
            </p>
          </motion.div>

          <Slider {...sliderSettings} className="px-4">
            {dueDiligenceTypes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-3"
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-auto">
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-5">
                    <item.icon size={32} className="text-[#17ada1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Key Benefits - Cards Slider */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Due Diligence is Essential for Business Transactions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Conducting due diligence is not just a best practice—it is a necessity in India's regulatory environment. Failure to perform proper due diligence can lead to significant risks, including legal disputes, regulatory penalties, and financial losses.
            </p>
          </motion.div>

          <Slider {...sliderSettings} className="px-4">
            {benefitsCards.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-3"
              >
                <div className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-auto">
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-5">
                    <item.icon size={32} className="text-[#17ada1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Our Due Diligence & Valuation Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Due Diligence & Valuation Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We offer specialized due diligence and valuation services tailored for the healthcare sector.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-[#17ada1]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Due Diligence Law in India - Key Regulations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Due Diligence Law in India – Key Regulations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Due diligence law in India is influenced by multiple legal frameworks that our experts meticulously review.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <Building className="text-[#17ada1] w-10 h-10 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Companies Act, 2013</h3>
              <p className="text-gray-500 text-sm">Corporate governance, compliance, and statutory requirements for businesses.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <Shield className="text-[#17ada1] w-10 h-10 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">SEBI Regulations</h3>
              <p className="text-gray-500 text-sm">Securities and Exchange Board of India rules for listed companies and investments.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <Scale className="text-[#17ada1] w-10 h-10 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">FEMA</h3>
              <p className="text-gray-500 text-sm">Foreign Exchange Management Act for cross-border transactions and investments.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <FileText className="text-[#17ada1] w-10 h-10 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Income Tax Act</h3>
              <p className="text-gray-500 text-sm">Tax compliance, liabilities, and historical tax assessment reviews.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <Heart className="text-[#17ada1] w-10 h-10 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Clinical Establishments Act</h3>
              <p className="text-gray-500 text-sm">Sector-specific regulations for healthcare facilities and medical practices.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Due Diligence Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Due Diligence Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">At MednLaw, our structured due diligence process ensures thorough evaluation and accurate reporting.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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
                className="text-center group"
              >
                <div className="w-20 h-20 bg-[#17ada1] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.step}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Due Diligence for High-Risk Transactions */}
      <section className="py-20 px-4 bg-[#17ada1] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Enhanced Due Diligence for High-Risk Transactions</h2>
              <div className="space-y-4 text-white/95">
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Why Choose MednLaw for Due Diligence Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 text-base"
          >
            Selecting the right partner for due diligence is critical to the success of your transaction. MednLaw stands out due to extensive experience in due diligence across industries, strong understanding of Indian due diligence law, customized solutions based on transaction requirements, expertise in healthcare and regulated sectors, and accurate, timely, and actionable reporting. Our team ensures that your due diligence process is thorough, efficient, and aligned with your business goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#17ada1] hover:bg-[#138f85] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
            >
              Talk to a Specialist
            </button>
          </motion.div>
        </div>
      </section>

      {/* When Do You Need Due Diligence Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">When Do You Need Due Diligence Services?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">You should consider professional due diligence services in the following scenarios:</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#17ada1]"
              >
                <CheckCircle className="text-[#17ada1]" size={20} />
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <div className="relative overflow-hidden py-16 bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-10">Trusted By Leading Healthcare Institutions</h2>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#17ada1] to-[#138f85] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Need Due Diligence Services for Your Healthcare Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 leading-relaxed text-base mb-10 max-w-3xl mx-auto"
          >
            Whether you're planning an acquisition, entering a partnership, or need regulatory compliance review, our due diligence experts are ready to support you throughout your healthcare journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact">
              <button className="bg-white hover:bg-gray-100 text-[#17ada1] px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-2">
                <MessageCircle size={20} />
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