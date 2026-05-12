"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WebsiteFAQ from "@/app/components/FaqSection";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { FAQSchema } from "@/app/components/SchemaGenerator";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Shield, CheckCircle, Users, FileText, TrendingUp, Award, AlertCircle, Building, Database, ClipboardList, Heart, Stethoscope, BookOpen } from "lucide-react";

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

const ComplianceManagementPage = () => {
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
          `${process.env.NEXT_PUBLIC_API_URL}/api/faq/page/services/compliance-management`
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

  // Card Data for Slide 1 - Key Benefits of Compliance Management
  const benefitsCards = [
    { icon: Shield, title: "Reduced Legal & Regulatory Risks", desc: "Our compliance management solutions help identify and mitigate potential legal issues before they arise." },
    { icon: CheckCircle, title: "Improved Patient Safety", desc: "Effective healthcare compliance management ensures adherence to clinical protocols and safety standards." },
    { icon: TrendingUp, title: "Enhanced Operational Efficiency", desc: "Structured compliance systems streamline operations and reduce administrative burden." },
    { icon: Award, title: "Increased Trust & Credibility", desc: "Proper compliance builds confidence among patients, partners, and regulatory bodies." },
    { icon: Users, title: "Better Staff Management", desc: "Clear compliance protocols lead to improved workforce coordination and accountability." },
    { icon: FileText, title: "Comprehensive Documentation", desc: "Systematic record-keeping ensures audit readiness and legal protection." },
  ];

  // Card Data for Slide 2 - Key Regulations Covered
  const regulationsCards = [
    { icon: Building, title: "Clinical Establishments Act", desc: "Registration and operational standards for hospitals, clinics, and diagnostic centers." },
    { icon: AlertCircle, title: "Consumer Protection Act", desc: "Liability standards and patient rights protection in healthcare delivery." },
    { icon: Database, title: "Patient Data Protection", desc: "Confidentiality and secure handling of medical records and patient information." },
    { icon: ClipboardList, title: "Biomedical Waste Management", desc: "Proper treatment, handling, and disposal of biomedical waste." },
    { icon: Shield, title: "Medical Council Guidelines", desc: "Professional conduct standards issued by NMC and state medical councils." },
    { icon: Heart, title: "NABH Accreditation", desc: "Quality and safety standards for healthcare facilities and services." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Healthcare Compliance Management Services in India | Legal Experts</title>
        <meta name="description" content="Expert healthcare compliance management services in India. Achieve full regulatory compliance for hospitals, clinics, and healthcare providers. Reduce legal risks today." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      
      {/* Hero Section - Mobile Optimized */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4"
        style={{
          backgroundImage: "url('/assets/compliance-banner.jpg')",
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
            Healthcare Compliance Management Services in India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/95 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Expert guidance to navigate complex healthcare regulations and achieve full compliance
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#17ada1] hover:bg-[#138f85] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                Get Started
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

      {/* What is Healthcare Compliance Management - Mobile Friendly */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-[#17ada1] text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">What is Healthcare Compliance Management?</h2>
              <div className="space-y-3 sm:space-y-4 leading-relaxed text-sm sm:text-base">
                <p>
                  Healthcare compliance management refers to the structured approach of ensuring that healthcare providers follow all applicable legal, regulatory, and ethical standards. This includes maintaining proper documentation, adhering to medical protocols, and implementing systems that support management system compliance.
                </p>
                <p>
                  In India, healthcare compliance management is governed by multiple regulations, including the Clinical Establishments Act, Consumer Protection Act, Biomedical Waste Management Rules, and guidelines issued by medical councils.
                </p>
                <p>
                  Our compliance management solutions ensure that your organization remains aligned with these evolving legal requirements.
                </p>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/assets/compliance-1st.jpg" 
                  alt="Compliance management" 
                  width={600} 
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits - Cards Slider */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Why Management System Compliance is Critical</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">
              Achieving management system compliance is essential for healthcare providers to operate efficiently and legally. Without structured compliance management services, institutions face increased risks of penalties, litigation, and reputational damage.
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

      {/* Our Compliance Management Solutions */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Our Compliance Management Solutions</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">At MedNLaw, we offer end-to-end compliance management solutions tailored for the healthcare sector.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <ClipboardList className="text-[#17ada1]" size={20} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Compliance Audits and Risk Assessment</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">We conduct detailed audits to evaluate your current level of management system compliance. Our compliance management solutions identify gaps and provide actionable recommendations.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <FileText className="text-[#17ada1]" size={20} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Policy Development and Documentation</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">Proper documentation is a cornerstone of healthcare compliance management. Our services include drafting policies, SOPs, and compliance manuals aligned with Indian regulations.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Building className="text-[#17ada1]" size={20} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Regulatory Compliance Implementation</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">We help healthcare institutions implement systems that ensure continuous management system compliance. Our compliance management solutions are designed for long-term sustainability.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Users className="text-[#17ada1]" size={20} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Staff Training and Awareness</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">Training is a key component of effective healthcare compliance management. Our services educate staff on legal requirements, ethical practices, and compliance protocols.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <TrendingUp className="text-[#17ada1]" size={20} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Ongoing Monitoring and Support</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">Compliance is not a one-time process. Our compliance management solutions include continuous monitoring to ensure ongoing management system compliance.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Award className="text-[#17ada1]" size={20} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">NABH Accreditation Support</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">We assist healthcare facilities in achieving and maintaining NABH accreditation standards for quality and patient safety.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Regulations Covered - Slider */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Laws Governing Healthcare Compliance in India</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">Effective healthcare compliance management requires a thorough understanding of Indian laws. Our compliance management services ensure adherence to:</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-2 sm:px-4">
            {regulationsCards.map((item, index) => (
              <div key={index} className="px-2 sm:px-3">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-auto">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-3 sm:mb-5">
                    <item.icon size={20} className="text-[#17ada1] sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Who Needs Compliance Management Services */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Who Needs Compliance Management Services?</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">Our compliance management services are ideal for:</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Building className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">Hospitals</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Multi-specialty hospitals and healthcare centers</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Stethoscope className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">Clinics</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Individual practitioners and specialty clinics</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Database className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">Diagnostic Labs</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Imaging centers and pathology laboratories</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Heart className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">Healthcare Startups</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Telemedicine and digital health platforms</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach to Compliance Management */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Our Approach to Compliance Management</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">We follow a systematic and proactive approach to delivering effective compliance management solutions.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { step: "Assessment", desc: "We evaluate your current systems to determine gaps in management system compliance." },
              { step: "Strategy", desc: "Our experts design tailored compliance management services aligned with your operational needs." },
              { step: "Implementation", desc: "We implement systems and processes to ensure effective healthcare compliance management." },
              { step: "Monitoring", desc: "Continuous monitoring ensures sustained management system compliance." },
              { step: "Improvement", desc: "We refine systems based on regulatory updates and operational feedback." }
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

      {/* Your Compliance, Our Commitment */}
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
                  src="/assets/goals.jpg" 
                  alt="Compliance commitment" 
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Your Compliance, Our Commitment</h2>
              <div className="space-y-3 sm:space-y-4 text-white/95 text-sm sm:text-base">
                <p>
                  Healthcare compliance isn't just about avoiding penalties—it's about building a foundation of trust, quality, and operational excellence. Every regulation exists to protect patients, ensure quality care, and maintain the integrity of healthcare delivery.
                </p>
                <p>
                  MedNLaw understands that compliance can feel overwhelming, especially for small and mid-sized practices without dedicated compliance staff. That's why we've developed comprehensive, practical solutions that make compliance manageable and sustainable.
                </p>
                <p>
                  We don't just hand you a binder of policies—we become your compliance partner, working alongside you to implement systems that work for your practice, train your staff, and maintain ongoing compliance. Your success in compliance is our commitment, and we're with you every step of the way.
                </p>
              </div>
            </motion.div>
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
            Get Started with Healthcare Compliance Management Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 leading-relaxed text-sm sm:text-base mb-6 sm:mb-10 max-w-3xl mx-auto px-4"
          >
            Ensuring compliance is essential for sustainable healthcare operations. With expert-led compliance management solutions, you can safeguard your practice, reduce risks, and enhance operational efficiency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact" className="block sm:inline-block">
              <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#17ada1] px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2">
                <BookOpen size={18} />
                Book a Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <WebsiteFAQ pageUrl="/services/compliance-management" />
      
    </div>
  );
};

export default ComplianceManagementPage;