"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

  const handleWhatsAppClick = () => {
    const phoneNumber = "+919266877793";
    const message = "Hi, I'm interested in learning more about your legal services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="accounting-services"
        className="relative w-full min-h-[60vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/assets/services-banner.jpg')",
        }}
      >
        {/* Dark Overlay so navbar text remains visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-[#17ADA1]/30" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-bold max-w-3xl leading-tight"
          >
            Accounting Services for Healthcare Institutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-white/90 mt-4 max-w-2xl text-lg"
          >
            Maintain financial accuracy, ensure compliance, and make smarter business decisions with our specialized accounting solutions tailored for medical and healthcare institutions.
          </motion.p>

          {/* CTA Button */}
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

      {/* What is Accounting Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is Accounting Services?
              </h2>
              <div className="space-y-4 leading-relaxed text-sm">
                <p>
                  Accounting Services for healthcare providers encompass specialized financial management tailored to 
                  the complex regulatory and operational requirements of medical practices. This includes bookkeeping, 
                  financial reporting, tax compliance, payroll management, and strategic financial planning.
                </p>
                <p>
                  Healthcare accounting differs significantly from general business accounting due to unique revenue 
                  cycles, insurance reimbursement complexities, regulatory compliance requirements, and specific tax 
                  considerations. Proper financial management is critical for practice sustainability and growth.
                </p>
                <p>
                  Medical practices face challenges including revenue cycle management, insurance claim tracking, 
                  accounts receivable optimization, expense control, payroll for clinical and administrative staff, 
                  and compliance with healthcare-specific tax regulations and reporting requirements.
                </p>
                <p>
                  Many healthcare providers struggle with financial management due to limited accounting expertise, 
                  time constraints, and the complexity of healthcare-specific financial issues. Inadequate financial 
                  systems can lead to cash flow problems, compliance violations, and missed growth opportunities.
                </p>
                <p>
                  MednLaw provides comprehensive accounting services designed specifically for healthcare providers. 
                  We combine financial expertise with deep understanding of medical practice operations, ensuring 
                  accurate bookkeeping, timely reporting, tax optimization, and strategic financial guidance that 
                  supports your practice&apos;s success.
                </p>
              </div>
            </div>

            {/* Right Image */}
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why MednLaw?</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 text-base">
            MednLaw brings specialized expertise in healthcare accounting, combining financial acumen with deep 
            understanding of medical practice operations and regulatory requirements. We understand the unique 
            challenges healthcare providers face—from complex insurance reimbursements to healthcare-specific tax 
            considerations. Our team provides accurate, timely financial services while offering strategic guidance 
            that helps you optimize revenue, control costs, and make informed business decisions. We don&apos;t just 
            manage your books—we become a trusted financial partner invested in your practice&apos;s success and growth.
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
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tailored Accounting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Customized financial management services designed specifically for healthcare practice needs and 
                operational structures.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Comprehensive Healthcare Financial Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Full-spectrum accounting services from bookkeeping through strategic financial planning and analysis.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Expert Financial Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Specialized expertise in healthcare accounting, revenue cycle management, and medical practice 
                financial operations.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ensured Compliance and Consulting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Regulatory compliance assurance with strategic financial consulting to optimize practice performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The MednLaw Approach */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">The MednLaw Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive evaluation of your current financial systems, processes, and reporting to identify 
                improvement opportunities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Development of customized financial management strategies aligned with your practice goals and 
                operational needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ongoing monitoring of healthcare accounting regulations, tax law changes, and best practices for 
                medical practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Setup of accounting systems, processes, and controls to ensure accurate financial management and 
                reporting.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Execution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Day-to-day bookkeeping, transaction processing, reconciliation, and financial record maintenance 
                with accuracy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reporting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Regular financial reporting and analysis providing insights into practice performance, trends, and 
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Accounting Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Types of Accounting Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Practice Accounting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive financial management tailored to medical practices including bookkeeping, accounts 
                receivable, payroll, and revenue cycle optimization.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Financial</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategic financial planning, budgeting, cash flow management, and financial analysis specific to 
                healthcare operations and growth.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Management for Hospitals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Large-scale financial operations management including departmental accounting, cost allocation, 
                reimbursement optimization, and compliance reporting.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Business Accounting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Business accounting services for healthcare ventures including startups, specialty practices, and 
                healthcare technology companies.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Compliance and Consulting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Regulatory compliance support, audit preparation, tax planning, and strategic financial consulting 
                for healthcare organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Healthcare Meets Finance Section */}
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
                  Financial management in healthcare is uniquely complex, requiring expertise in both accounting 
                  principles and healthcare operations. From insurance reimbursement tracking to regulatory 
                  compliance, medical practices face financial challenges that demand specialized knowledge.
                </p>
                <p className="text-white/95">
                  MednLaw bridges this gap with comprehensive accounting services designed specifically for 
                  healthcare providers. We understand the financial intricacies of medical practices—from revenue 
                  cycle management to healthcare-specific tax considerations—and provide accurate, timely financial 
                  services that support your operational success.
                </p>
                <p className="text-white/95">
                  Our goal goes beyond basic bookkeeping. We provide strategic financial insights that help you 
                  optimize revenue, control costs, improve cash flow, and make informed business decisions. Your 
                  financial health is foundational to delivering excellent patient care, and we&apos;re committed to 
                  ensuring that foundation is solid.
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
            We are here for you: Every Step of Your Healthcare Compliance Journey
          </h2>
          <p className="text-white/95 leading-relaxed text-base mb-10 max-w-3xl mx-auto">
            Whether you need comprehensive accounting services or strategic financial guidance, MednLaw offers 
            exceptional financial support so you can focus on patient care. From bookkeeping to financial 
            planning, we&apos;re here to ensure your practice&apos;s financial health and success.
          </p>
          <Link href="/contact">
            <button className="bg-white hover:bg-gray-100 text-[#17ada1] px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-xl inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let&apos;s Connect
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AccountingServicesPage;