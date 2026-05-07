"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WebsiteFAQ from "@/app/components/FaqSection";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { FAQSchema } from "@/app/components/SchemaGenerator";

interface Partner {
  id: number;
  icon: string;
}

const AccountingServicesPage = () => {
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
          `${process.env.NEXT_PUBLIC_API_URL}/api/faq/page/services/accounting-services`
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

  const approachSteps = [
    {
      title: "Financial Accounting & Bookkeeping",
      desc: "Our healthcare accounting services include detailed bookkeeping, financial reporting, and expense tracking. Accurate records are essential for compliance and decision-making.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: "Tax Filing for Doctors",
      desc: "We provide specialized tax filing for doctors, ensuring compliance with the Income Tax Act, 1961. Our experts handle income computation, deductions, and timely filing to minimize tax liabilities.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "GST Filing for Hospitals",
      desc: "GST compliance is crucial for healthcare institutions. Our GST filing for hospitals services ensure proper classification of taxable and exempt services, accurate returns, and timely submissions as per Indian GST laws.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Accounting for Diagnostic Centers",
      desc: "Diagnostic centers have unique financial workflows. Our accounting for diagnostic centers includes revenue tracking, equipment cost management, and compliance with applicable regulations.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Compliance & Regulatory Support",
      desc: "Our healthcare accounting services also cover financial compliance with Indian laws, ensuring that your practice meets all statutory requirements.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Financial Reporting & Analysis",
      desc: "Regular financial reporting and analysis providing insights into practice performance, trends, and opportunities.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
    },
  ];

  const serviceTypes = [
    {
      title: "Medical Practice Accounting",
      desc: "Comprehensive financial management tailored to medical practices including bookkeeping, accounts receivable, payroll, and revenue cycle optimization.",
    },
    {
      title: "Healthcare Financial Planning",
      desc: "Strategic financial planning, budgeting, cash flow management, and financial analysis specific to healthcare operations and growth.",
    },
    {
      title: "Financial Management for Hospitals",
      desc: "Large-scale financial operations management including departmental accounting, cost allocation, reimbursement optimization, and compliance reporting.",
    },
    {
      title: "Healthcare Business Accounting",
      desc: "Business accounting services for healthcare ventures including startups, specialty practices, and healthcare technology companies.",
    },
    {
      title: "Financial Compliance and Consulting",
      desc: "Regulatory compliance support, audit preparation, tax planning, and strategic financial consulting for healthcare organizations.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Healthcare Accounting Services in India | GST & Tax Experts</title>
        <meta name="description" content="Expert healthcare accounting services in India. Tax filing for doctors, GST filing for hospitals & accounting for diagnostic centers. Compliant solutions." />
      </Head>

      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      
      {/* Hero Section */}
      <section
        id="accounting-services"
        className="relative w-full min-h-[60vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/assets/services-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-[#17ADA1]/30" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-bold max-w-3xl leading-tight"
          >
            Healthcare Accounting Services in India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-white/90 mt-4 max-w-2xl text-lg"
          >
            Managing finances in the healthcare sector requires more than basic bookkeeping. With evolving regulations, taxation complexities, and compliance requirements, healthcare professionals need specialized healthcare accounting services that align with Indian laws and industry standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-fit mt-8"
          >
            <div className="absolute -inset-2 bg-[#17ADA1] rounded-lg blur-xl opacity-40 animate-pulse" />

            <Link href="/contact">
              <button className="relative bg-transparent border-2 border-[#17ADA1] text-white px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg backdrop-blur-sm hover:bg-[#17ADA1]/30 transition-all duration-300 shadow-lg hover:scale-[1.02] whitespace-nowrap">
                Get Started Today
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What is Accounting Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is Healthcare Accounting Services?
              </h2>
              <div className="space-y-4 leading-relaxed text-sm">
                <p>
                  Accounting Services for healthcare providers encompass specialized financial management tailored to the complex regulatory and operational requirements of medical practices. This includes bookkeeping, financial reporting, tax compliance, payroll management, and strategic financial planning.
                </p>
                <p>
                  Healthcare accounting differs significantly from general business accounting due to unique revenue cycles, insurance reimbursement complexities, regulatory compliance requirements, and specific tax considerations.
                </p>
                <p>
                  MednLaw provides comprehensive accounting services designed specifically for healthcare providers. We combine financial expertise with deep understanding of medical practice operations, ensuring accurate bookkeeping, timely reporting, tax optimization, and strategic financial guidance.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden h-[450px] flex items-center justify-center">
                <Image 
                  src="/assets/accounting-1st.jpg" 
                  alt="Accounting services" 
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose MednLaw for Healthcare Accounting Services</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 text-base">
            MednLaw brings specialized expertise in healthcare accounting, combining financial acumen with deep understanding of medical practice operations and regulatory requirements. We understand the unique challenges healthcare providers face—from complex insurance reimbursements to healthcare-specific tax considerations. Our team provides accurate, timely financial services while offering strategic guidance that helps you optimize revenue, control costs, and make informed business decisions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tailored Accounting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Customized financial management services designed specifically for healthcare practice needs.</p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ensured Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Regulatory compliance assurance with strategic financial consulting to optimize practice performance.</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            className="flex-shrink-0 w-full md:w-auto mt-8"
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
        </div>
      </section>

      {/* Our Accounting Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Our Comprehensive Healthcare Accounting Services</h2>
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

      {/* Types of Accounting Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Types of Accounting Services We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceTypes.map((service, i) => (
              <div
                key={i}
                className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Healthcare Meets Finance */}
      <section className="py-20 px-4 bg-[#17ada1] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image 
              src="/assets/goals.jpg" 
              alt="Healthcare meets finance" 
              width={500} 
              height={400}
              className="rounded-md w-full h-auto object-cover" 
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Where Healthcare Meets Finance</h2>
              <div className="space-y-5 text-sm leading-relaxed">
                <p className="text-white/95">
                  Financial management in healthcare is uniquely complex, requiring expertise in both accounting principles and healthcare operations. From insurance reimbursement tracking to regulatory compliance, medical practices face financial challenges that demand specialized knowledge.
                </p>
                <p className="text-white/95">
                  MednLaw bridges this gap with comprehensive accounting services designed specifically for healthcare providers. We understand the financial intricacies of medical practices—from revenue cycle management to healthcare-specific tax considerations—and provide accurate, timely financial services that support your operational success.
                </p>
                <p className="text-white/95">
                  Our goal goes beyond basic bookkeeping. We provide strategic financial insights that help you optimize revenue, control costs, improve cash flow, and make informed business decisions.
                </p>
              </div>
            </div>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#17ada1] to-[#138f85] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Expert Healthcare Accounting Services Today
          </h2>
          <p className="text-white/95 leading-relaxed text-base mb-10 max-w-3xl mx-auto">
            Whether you need tax filing for doctors, GST filing for hospitals, or specialized accounting for diagnostic centers, MednLaw provides reliable and professional support. Partner with expert accountants for healthcare and ensure that your financial systems are efficient, compliant, and future-ready.
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

      <WebsiteFAQ pageUrl="/services/accounting-services" />

    </div>
  );
};

export default AccountingServicesPage;