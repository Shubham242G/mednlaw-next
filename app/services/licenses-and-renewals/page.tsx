"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WebsiteFAQ from "@/app/components/FaqSection";
import Head from "next/head";
import { FAQSchema } from "@/app/components/SchemaGenerator";
import axios from "axios";
import { useEffect, useState } from "react";

interface Partner {
  id: number;
  icon: string;
}

const LicensesRenewalsPage = () => {
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
          `${process.env.NEXT_PUBLIC_API_URL}/api/faq/page/services/licenses-and-renewals`
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
      title: "Clinical Establishment Registration",
      desc: "We handle both clinical establishment registration and clinical establishment online registration processes with precision.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: "Clinic Registration Services",
      desc: "Our team ensures seamless clinic registration for individual practitioners and healthcare setups.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Hospital License Assistance",
      desc: "From documentation to approvals, we manage the complete hospital license process.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Pharmacy License Renewal Support",
      desc: "We simplify pharmacy license renewal and guide you on how to renew pharmacy license efficiently.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Shop and Establishment License Renewal",
      desc: "Our experts ensure timely shop and establishment license renewal for healthcare entities.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "End-to-End Licensing Support",
      desc: "Our team ensures that your clinical establishment registration, hospital license, and renewals are handled professionally.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  const licenseTypes = [
    {
      title: "Healthcare Facility Licensing",
      desc: "Obtaining and maintaining facility permits for hospitals, clinics, surgical centers, and other healthcare establishments across multiple jurisdictions.",
    },
    {
      title: "Hospital Licensing and Renewal",
      desc: "Comprehensive support for hospital licensure including initial certification, periodic surveys, and timely renewals to maintain accreditation.",
    },
    {
      title: "Professional License Renewal",
      desc: "Management of individual provider license renewals including physicians, nurses, and allied health professionals across all practice states.",
    },
    {
      title: "Pharmacy License Management",
      desc: "Complete support for pharmacy license renewal and ongoing compliance with the Drugs and Cosmetics Act.",
    },
    {
      title: "Licensing Compliance Audits",
      desc: "Regular review of all licenses and certifications to ensure continuing compliance with requirements and identification of renewal needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Healthcare Licenses & Registrations in India | Legal Experts</title>
        <meta name="description" content="Expert healthcare licenses & registrations in India. Clinical establishment registration, clinic registration, hospital license & pharmacy license renewal support." />
      </Head>
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden pt-28 pb-20 px-4"
        style={{
          backgroundImage: "url('/assets/liscense-banner.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-[#17ADA1]/30"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Healthcare Licenses & Registrations in India
          </h1>
          <p className="text-lg text-white mb-10 leading-relaxed">
            Setting up and running a healthcare facility in India requires strict compliance with licensing and regulatory frameworks. From clinical establishment registration to pharmacy license renewal and shop and establishment license renewal, every healthcare provider must meet legal requirements to operate smoothly.
          </p>
          <Link href="/contact">
            <button className="relative bg-transparent border-2 border-[#17ADA1] text-white px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg backdrop-blur-sm hover:bg-[#17ADA1]/20 transition-all duration-300 shadow-lg hover:scale-[1.02] whitespace-nowrap">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

      {/* Why Healthcare Licensing is Important */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Healthcare Licensing is Important in India
              </h2>
              <div className="space-y-4 leading-relaxed text-sm">
                <p>
                  Healthcare is a highly regulated sector, and operating without proper licenses can lead to penalties, shutdowns, or legal action. Whether you are starting a clinic or managing a hospital, obtaining the correct hospital license and completing clinical establishment registration is mandatory.
                </p>
                <p>
                  Additionally, periodic renewals such as pharmacy license renewal and shop and establishment license renewal ensure that your business remains legally compliant.
                </p>
                <p>
                  Our expert team simplifies complex processes such as clinical establishment online registration, clinic registration, and hospital license approvals.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden h-[450px] flex items-center justify-center">
                <Image 
                  src="/assets/liscence-1st.jpg" 
                  alt="Licenses and renewals" 
                  width={600} 
                  height={400}
                  className="rounded-md w-full h-auto mb-10 object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Establishment Registration */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Clinical Establishment Registration – Mandatory Compliance</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 text-base">
            Under the Clinical Establishments (Registration and Regulation) Act, healthcare providers must complete clinical establishment registration before commencing operations. With digital systems in place, clinical establishment online registration has become more accessible. However, the process still requires accurate documentation and adherence to state-specific rules.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Document Preparation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We prepare all required documentation for clinical establishment registration.</p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Application Filing & Follow-ups</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our experts handle application filing and follow-ups with authorities.</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-fit mx-auto mt-8"
          >
            <div className="absolute -inset-2 bg-[#17ADA1] rounded-lg blur-xl opacity-40 animate-pulse" />
            <Link href="/contact">
              <button className="relative bg-transparent border-2 border-[#17ADA1] text-white px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg backdrop-blur-sm hover:bg-[#17ADA1]/20 transition-all duration-300 shadow-lg hover:scale-[1.02] whitespace-nowrap">
                Get Expert Assistance
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Healthcare Licensing Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Our Healthcare Licensing Services</h2>
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

      {/* Types of Licenses */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Types of Licenses & Renewals We Handle
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {licenseTypes.map((license, i) => (
              <div
                key={i}
                className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{license.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{license.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Licensing Partner Section */}
      <section className="py-20 px-4 bg-[#17ada1] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-8">
                <Image 
                  src="/assets/healthcare-2nd.jpg" 
                  alt="Healthcare Facility" 
                  width={500} 
                  height={400}
                  className="rounded-md w-full h-auto object-cover" 
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Your Licensing Partner, Every Step Of The Way
              </h2>

              <div className="space-y-5 text-sm leading-relaxed">
                <p className="text-white/95">
                  Healthcare licensing is complex, time-consuming, and critical to your ability to practice. Missing a renewal deadline or filing incomplete documentation can halt operations, jeopardize revenue, and damage your professional reputation.
                </p>
                <p className="text-white/95">
                  MednLaw takes the burden off your shoulders with comprehensive licensing management services. We track every license, monitor every deadline, and handle every submission—ensuring your practice maintains uninterrupted authorization to provide care.
                </p>
                <p className="text-white/95">
                  From initial licensure through multi-state expansion and ongoing renewals, we serve as your dedicated licensing partner. Our systematic approach, regulatory expertise, and proactive communication give you confidence that your credentials are always current and compliant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 px-4 bg-white">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#17ada1] to-[#138f85] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Expert Assistance for Healthcare Licenses Today
          </h2>
          <p className="text-white/95 leading-relaxed text-base mb-10 max-w-3xl mx-auto">
            Whether you need help with clinical establishment registration, clinic registration, or how to renew a pharmacy license, MednLaw provides reliable and efficient legal support.
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
      <WebsiteFAQ pageUrl="/services/licenses-and-renewals" />
      
    </div>
  );
};

export default LicensesRenewalsPage;