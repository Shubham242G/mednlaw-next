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
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
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
      </Head>

      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden pt-28 pb-20 px-4"
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Healthcare Compliance Management Services in India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Expert guidance to navigate complex healthcare regulations and achieve full compliance
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <button className="bg-[#17ada1] hover:bg-[#138f85] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                Get Started
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

      {/* What is Healthcare Compliance Management */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Healthcare Compliance Management?</h2>
              <div className="space-y-4 leading-relaxed">
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

            <div className="relative">
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Management System Compliance is Critical</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Achieving management system compliance is essential for healthcare providers to operate efficiently and legally. Without structured compliance management services, institutions face increased risks of penalties, litigation, and reputational damage.
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

      {/* Our Compliance Management Solutions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Compliance Management Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">At MednLaw, we offer end-to-end compliance management solutions tailored for the healthcare sector.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <ClipboardList className="text-[#17ada1]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Audits and Risk Assessment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We conduct detailed audits to evaluate your current level of management system compliance. Our compliance management solutions identify gaps and provide actionable recommendations.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <FileText className="text-[#17ada1]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Policy Development and Documentation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Proper documentation is a cornerstone of healthcare compliance management. Our services include drafting policies, SOPs, and compliance manuals aligned with Indian regulations.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Building className="text-[#17ada1]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance Implementation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We help healthcare institutions implement systems that ensure continuous management system compliance. Our compliance management solutions are designed for long-term sustainability.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="text-[#17ada1]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Staff Training and Awareness</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Training is a key component of effective healthcare compliance management. Our services educate staff on legal requirements, ethical practices, and compliance protocols.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="text-[#17ada1]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Monitoring and Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Compliance is not a one-time process. Our compliance management solutions include continuous monitoring to ensure ongoing management system compliance.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="text-[#17ada1]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">NABH Accreditation Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We assist healthcare facilities in achieving and maintaining NABH accreditation standards for quality and patient safety.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Regulations Covered - Slider */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Laws Governing Healthcare Compliance in India</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Effective healthcare compliance management requires a thorough understanding of Indian laws. Our compliance management services ensure adherence to:</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-4">
            {regulationsCards.map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-auto">
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                    <item.icon size={28} className="text-[#17ada1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Who Needs Compliance Management Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Needs Compliance Management Services?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our compliance management services are ideal for:</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Building className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Hospitals</h3>
              <p className="text-gray-500 text-sm">Multi-specialty hospitals and healthcare centers</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Stethoscope className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Clinics</h3>
              <p className="text-gray-500 text-sm">Individual practitioners and specialty clinics</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Database className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Diagnostic Labs</h3>
              <p className="text-gray-500 text-sm">Imaging centers and pathology laboratories</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Heart className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Healthcare Startups</h3>
              <p className="text-gray-500 text-sm">Telemedicine and digital health platforms</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach to Compliance Management */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach to Compliance Management</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We follow a systematic and proactive approach to delivering effective compliance management solutions.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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

      {/* Your Compliance, Our Commitment */}
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
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Compliance, Our Commitment</h2>
              <div className="space-y-4 text-white/95">
                <p>
                  Healthcare compliance isn't just about avoiding penalties—it's about building a foundation of trust, quality, and operational excellence. Every regulation exists to protect patients, ensure quality care, and maintain the integrity of healthcare delivery.
                </p>
                <p>
                  MednLaw understands that compliance can feel overwhelming, especially for small and mid-sized practices without dedicated compliance staff. That's why we've developed comprehensive, practical solutions that make compliance manageable and sustainable.
                </p>
                <p>
                  We don't just hand you a binder of policies—we become your compliance partner, working alongside you to implement systems that work for your practice, train your staff, and maintain ongoing compliance. Your success in compliance is our commitment, and we're with you every step of the way.
                </p>
              </div>
            </motion.div>
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
            Get Started with Healthcare Compliance Management Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 leading-relaxed text-base mb-10 max-w-3xl mx-auto"
          >
            Ensuring compliance is essential for sustainable healthcare operations. With expert-led compliance management solutions, you can safeguard your practice, reduce risks, and enhance operational efficiency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact">
              <button className="bg-white hover:bg-gray-100 text-[#17ada1] px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-2">
                <BookOpen size={20} />
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