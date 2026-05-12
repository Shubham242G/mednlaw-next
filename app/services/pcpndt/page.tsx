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
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            PCPNDT Act Lawyers in India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Expert Legal Defense for Clinics, Radiologists & Healthcare Providers Facing PCPNDT Act Notices
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <button className="bg-[#17ada1] hover:bg-[#138f85] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                Get Legal Help Today
              </button>
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              WhatsApp Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* What is the PCPNDT Act */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is the PCPNDT Act?</h2>
              <div className="space-y-4 leading-relaxed">
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
            <div className="relative">
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why You Need PCPNDT Act Lawyers in India</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Legal proceedings under the PCPNDT Act are highly technical and procedural. Even minor documentation errors can lead to serious consequences. Experienced PCPNDT Act lawyers in India are essential to navigate these complexities effectively.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <Shield className="text-[#17ada1] w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Response to Notices</h3>
              <p className="text-gray-600">Expert assistance in responding to show-cause notices and handling inspections.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <Gavel className="text-[#17ada1] w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Defense</h3>
              <p className="text-gray-600">Strong defense against allegations of non-compliance under the PCPNDT Act.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our PCPNDT Act Legal Services - Cards Slider */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our PCPNDT Act Legal Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">At MednLaw, we provide end-to-end legal and compliance solutions related to the PCPNDT Act, designed to support healthcare professionals at every stage.</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-4">
            {servicesCards.map((item, index) => (
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

      {/* Common Issues Under the PCPNDT Act - Slider */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Issues Under the PCPNDT Act</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Healthcare providers often face challenges that require expert legal intervention.</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-4">
            {issuesCards.map((item, index) => (
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

      {/* Legal Consequences of PCPNDT Act Violations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Legal Consequences of PCPNDT Act Violations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Violations of the PCPNDT Act can result in severe penalties that impact your practice and professional future.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consequencesCards.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 flex items-start gap-3"
              >
                <item.icon size={24} className="text-[#17ada1] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Legal Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Legal Process for PCPNDT Act Cases</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We follow a structured approach to handling PCPNDT Act matters, ensuring thorough preparation and effective representation.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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

      {/* Key Compliance Requirements */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Compliance Requirements Under the PCPNDT Act</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Healthcare providers must ensure strict adherence to these requirements to avoid legal action.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <FileText className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Form F Maintenance</h3>
              <p className="text-gray-500 text-sm">Accurate and timely Form F record keeping</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Building className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Clinic Registration</h3>
              <p className="text-gray-500 text-sm">Proper registration with Appropriate Authority</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Clipboard className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Signage Displays</h3>
              <p className="text-gray-500 text-sm">Mandatory notices prohibiting sex determination</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Clock className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Timely Reporting</h3>
              <p className="text-gray-500 text-sm">Regular submission of reports to authorities</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Protecting Your Practice Section */}
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
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Practice with Expert PCPNDT Act Lawyers</h2>
              <div className="space-y-4 text-white/95">
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Why Choose MednLaw for PCPNDT Act Legal Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 text-base"
          >
            MednLaw is recognized among leading PCPNDT Act lawyers in India due to specialized expertise in healthcare laws, deep understanding of PCPNDT Act compliance, strong track record in handling medico-legal cases, strategic and evidence-based legal approach, and pan-India legal support. Our PCPNDT Act lawyers in India are committed to providing reliable, professional, and result-oriented legal services.
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
              Get Legal Assistance Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <div className="relative overflow-hidden py-16 bg-gray-50">
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
            Facing a PCPNDT Act Notice? Get Legal Help Now
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 leading-relaxed text-base mb-10 max-w-3xl mx-auto"
          >
            If you are facing issues under the PCPNDT Act or need compliance support, connect with our expert PCPNDT Act lawyers in India today. From handling inspections to defending against allegations, we provide complete legal support to protect your practice.
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