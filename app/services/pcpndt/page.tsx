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
import { 
  Shield, CheckCircle, Users, FileText, Briefcase, 
  Heart, Building, AlertCircle, BookOpen, MessageCircle, 
  TrendingUp, Award, Scale, FileCheck, Clock,
  Stethoscope, Clipboard, Gavel, Lock,
  DollarSign
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

const PCPNDTPage = () => {
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
          `${process.env.NEXT_PUBLIC_API_URL}/api/faq/page/services/pcpndt-act-lawyers`
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

  // Card Data for Slide 1 - Our Services
  const servicesCards = [
    { icon: Clipboard, title: "PCPNDT Act Compliance Advisory", desc: "We offer structured PCPNDT Act compliance support including registration assistance for clinics, documentation and Form F audits, and SOP development for compliance." },
    { icon: Gavel, title: "Defense Against PCPNDT Act Cases", desc: "If you are facing legal action under the PCPNDT Act, our expert lawyers provide representation before authorities, defense in court proceedings, and strategic case preparation." },
    { icon: Shield, title: "Handling Inspections & Notices", desc: "Inspections under the PCPNDT Act can be sudden and strict. Our team assists in responding to show-cause notices, preparing documentation for inspections, and managing interactions with authorities." },
    { icon: FileCheck, title: "Record Maintenance & Audit Support", desc: "Maintaining accurate records is critical under the PCPNDT Act. Our lawyers help ensure proper Form F compliance, error-free documentation, and regular internal audits." },
    { icon: Building, title: "Clinic Registration Assistance", desc: "We assist diagnostic centers and clinics with proper registration under the PCPNDT Act, ensuring all legal requirements are met from the outset." },
    { icon: Scale, title: "Legal Representation", desc: "Our team provides complete legal representation before Appropriate Authorities, advisory boards, and courts for all PCPNDT Act matters." },
  ];

  // Card Data for Slide 2 - Common Issues
  const issuesCards = [
    { icon: AlertCircle, title: "Errors in Form F Documentation", desc: "Even minor documentation errors can attract penalties under the PCPNDT Act." },
    { icon: Clock, title: "Delays in Record Submission", desc: "Late submission of required records and reports to Appropriate Authorities." },
    { icon: Shield, title: "Non-compliance During Inspections", desc: "Failure to maintain required equipment, signage, or documentation during inspections." },
    { icon: AlertCircle, title: "Allegations of Illegal Practices", desc: "False or genuine allegations of sex determination or illegal prenatal testing." },
    { icon: FileText, title: "Improper Maintenance of Form F", desc: "Incomplete, incorrect, or missing Form F records for ultrasound procedures." },
    { icon: Building, title: "Registration Lapses", desc: "Failure to renew or maintain proper clinic registration under the Act." },
  ];

  // Legal Consequences Cards
  const consequencesCards = [
    { icon: AlertCircle, title: "Suspension of Clinic Registration", desc: "Clinic registration can be suspended or cancelled for violations." },
    { icon: Building, title: "Sealing of Premises", desc: "Ultrasound machines and clinic premises can be sealed by authorities." },
    { icon: Gavel, title: "Criminal Prosecution", desc: "Violations can lead to criminal charges and court proceedings." },
    { icon: DollarSign, title: "Heavy Penalties", desc: "Significant fines and monetary penalties for non-compliance." },
    { icon: Users, title: "Professional Reputation Damage", desc: "Legal action can severely impact professional standing and patient trust." },
    { icon: Shield, title: "License Cancellation", desc: "Medical license cancellation for serious or repeated violations." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>PCPNDT Act Lawyers in India | Expert Legal Defense for Clinics & Radiologists</title>
        <meta name="description" content="Expert PCPNDT Act lawyers in India. Legal defense for clinics facing notices, inspections & allegations. Compliance advisory and representation before authorities." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {faqs.length > 0 && <FAQSchema faqs={faqs} />}  
      
      {/* Hero Section - Mobile Optimized */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4"
        style={{
          backgroundImage: "url('/assets/liscense-banner.jpg')",
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
            PCPNDT Act Lawyers in India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/95 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Expert Legal Defense for Clinics, Radiologists & Healthcare Providers Facing PCPNDT Act Notices
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#17ada1] hover:bg-[#138f85] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                Get Legal Help Today
              </button>
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300"
            >
              WhatsApp Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* What is the PCPNDT Act - Mobile Friendly */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-[#17ada1] text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">What is the PCPNDT Act?</h2>
              <div className="space-y-3 sm:space-y-4 leading-relaxed text-sm sm:text-base">
                <p>
                  The PCPNDT Act (Pre-Conception and Pre-Natal Diagnostic Techniques Act) is one of the most strictly enforced healthcare laws in India. Designed to prevent sex-selective practices and regulate diagnostic techniques, the PCPNDT Act imposes stringent compliance requirements on clinics, radiologists, and healthcare providers.
                </p>
                <p>
                  Under the PCPNDT Act, healthcare providers must register diagnostic centers with appropriate authorities, maintain accurate records (Form F and related documentation), avoid any form of sex determination or disclosure, and comply with inspection and reporting requirements.
                </p>
                <p>
                  Non-compliance with the PCPNDT Act can result in severe penalties, including suspension of license, criminal prosecution, and sealing of premises. Even minor documentation errors can lead to serious consequences.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/assets/liscence-1st.jpg" 
                  alt="PCPNDT Act legal services" 
                  width={600} 
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need PCPNDT Act Lawyers */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Why You Need PCPNDT Act Lawyers in India</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">
              Legal proceedings under the PCPNDT Act are highly technical and procedural. Even minor documentation errors can lead to serious consequences. Experienced PCPNDT Act lawyers in India are essential to navigate these complexities effectively.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-5 sm:p-6 md:p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <Shield className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Response to Notices</h3>
              <p className="text-gray-700 text-sm sm:text-base">Expert assistance in responding to show-cause notices and handling inspections.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-5 sm:p-6 md:p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <Gavel className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Legal Defense</h3>
              <p className="text-gray-700 text-sm sm:text-base">Strong defense against allegations of non-compliance under the PCPNDT Act.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our PCPNDT Act Legal Services - Cards Slider */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Our PCPNDT Act Legal Services</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">At MedNLaw, we provide end-to-end legal and compliance solutions related to the PCPNDT Act, designed to support healthcare professionals at every stage.</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-2 sm:px-4">
            {servicesCards.map((item, index) => (
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

      {/* Common Issues Under the PCPNDT Act - Slider */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Common Issues Under the PCPNDT Act</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">Healthcare providers often face challenges that require expert legal intervention.</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-2 sm:px-4">
            {issuesCards.map((item, index) => (
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

      {/* Legal Consequences of PCPNDT Act Violations */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Legal Consequences of PCPNDT Act Violations</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">Violations of the PCPNDT Act can result in severe penalties that impact your practice and professional future.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {consequencesCards.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border-2 border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 flex items-start gap-3"
              >
                <item.icon size={20} className="text-[#17ada1] mt-0.5 flex-shrink-0 sm:w-6 sm:h-6" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Legal Process */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Our Legal Process for PCPNDT Act Cases</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">We follow a structured approach to handling PCPNDT Act matters, ensuring thorough preparation and effective representation.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { step: "Case Assessment", desc: "Review all documents and notices to identify key issues" },
              { step: "Compliance Review", desc: "Evaluate gaps in compliance under the PCPNDT Act" },
              { step: "Legal Strategy", desc: "Develop customized strategy based on facts and law" },
              { step: "Representation", desc: "Represent before Authorities and courts" },
              { step: "Resolution", desc: "Minimize penalties and protect your license" }
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

      {/* Key Compliance Requirements */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Key Compliance Requirements Under the PCPNDT Act</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">Healthcare providers must ensure strict adherence to these requirements to avoid legal action.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <FileText className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Form F Maintenance</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Accurate and timely Form F record keeping</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Building className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Clinic Registration</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Proper registration with Appropriate Authority</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Clipboard className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Signage Displays</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Mandatory notices prohibiting sex determination</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Clock className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Timely Reporting</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Regular submission of reports to authorities</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Protecting Your Practice Section */}
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
                  alt="PCPNDT Act compliance" 
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Protect Your Practice with Expert PCPNDT Act Lawyers</h2>
              <div className="space-y-3 sm:space-y-4 text-white/95 text-sm sm:text-base">
                <p>
                  The PCPNDT Act requires strict adherence to legal and ethical standards. Any lapse, even if unintentional, can lead to serious legal consequences. Even minor documentation errors can attract penalties under the PCPNDT Act.
                </p>
                <p>
                  With the support of experienced PCPNDT Act lawyers in India, you can ensure compliance, defend against allegations, and safeguard your medical practice. Our expert legal team offers comprehensive defense against all types of PCPNDT Act cases.
                </p>
                <p>
                  Given the seriousness of these consequences, working with qualified PCPNDT Act lawyers in India is essential for risk mitigation and legal protection. Our team focuses on protecting your license, reputation, and professional future.
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
            Why Choose MedNLaw for PCPNDT Act Legal Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-10 text-sm sm:text-base px-4"
          >
            MedNLaw is recognized among leading PCPNDT Act lawyers in India due to specialized expertise in healthcare laws, deep understanding of PCPNDT Act compliance, strong track record in handling medico-legal cases, strategic and evidence-based legal approach, and pan-India legal support. Our PCPNDT Act lawyers in India are committed to providing reliable, professional, and result-oriented legal services.
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
              Get Legal Assistance Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trusted By - Mobile Optimized */}
      <div className="relative overflow-hidden py-12 sm:py-16 bg-gray-50">
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
            Facing a PCPNDT Act Notice? Get Legal Help Now
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 leading-relaxed text-sm sm:text-base mb-6 sm:mb-10 max-w-3xl mx-auto px-4"
          >
            If you are facing issues under the PCPNDT Act or need compliance support, connect with our expert PCPNDT Act lawyers in India today. From handling inspections to defending against allegations, we provide complete legal support to protect your practice.
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
                Connect with a Lawyer
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <WebsiteFAQ pageUrl="/services/pcpndt" />
      
    </div>
  );
};

export default PCPNDTPage;