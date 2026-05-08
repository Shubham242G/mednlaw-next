"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WebsiteFAQ from "@/app/components/FaqSection";
import Head from "next/head";
import { FAQSchema } from "@/app/components/SchemaGenerator";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  Shield, CheckCircle, Users, FileText, Building, 
  AlertCircle, Heart, Stethoscope, Clipboard, 
  MessageCircle, TrendingUp, Award, Scale, 
  Calendar, Clock, FileCheck, Phone, Mail, MapPin
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

  // Card Data for Slide 1 - Our Licensing Services
  const servicesCards = [
    { icon: Clipboard, title: "Clinical Establishment Registration", desc: "We handle both clinical establishment registration and clinical establishment online registration processes with precision." },
    { icon: Building, title: "Clinic Registration Services", desc: "Our team ensures seamless clinic registration for individual practitioners and healthcare setups." },
    { icon: Heart, title: "Hospital License Assistance", desc: "From documentation to approvals, we manage the complete hospital license process for healthcare facilities." },
    { icon: FileText, title: "Pharmacy License Renewal Support", desc: "We simplify pharmacy license renewal and guide you on how to renew pharmacy license efficiently." },
    { icon: Calendar, title: "Shop and Establishment License Renewal", desc: "Our experts ensure timely shop and establishment license renewal for healthcare entities." },
    { icon: Award, title: "NABH Accreditation Support", desc: "Assistance with NABH accreditation and renewal for quality and safety standards compliance." },
  ];

  // Card Data for Slide 2 - Types of Licenses
  const licenseTypesCards = [
    { icon: Building, title: "Healthcare Facility Licensing", desc: "Obtaining and maintaining facility permits for hospitals, clinics, surgical centers, and other healthcare establishments." },
    { icon: Heart, title: "Hospital Licensing and Renewal", desc: "Comprehensive support for hospital licensure including initial certification, periodic surveys, and timely renewals." },
    { icon: Users, title: "Professional License Renewal", desc: "Management of individual provider license renewals including physicians, nurses, and allied health professionals." },
    { icon: FileText, title: "Pharmacy License Management", desc: "Complete support for pharmacy license renewal and ongoing compliance with the Drugs and Cosmetics Act." },
    { icon: Shield, title: "Licensing Compliance Audits", desc: "Regular review of all licenses and certifications to ensure continuing compliance and identify renewal needs." },
    { icon: Award, title: "Specialty Healthcare Licensing", desc: "Specialized licensing for controlled substance registration, laboratory certification, and imaging facilities." },
  ];

  // Key Benefits Cards
  const benefitsCards = [
    { icon: Shield, title: "Avoid Legal Penalties", desc: "Proper licensing protects your healthcare facility from fines, shutdowns, and legal action." },
    { icon: CheckCircle, title: "Uninterrupted Operations", desc: "Timely renewals ensure your healthcare facility operates without legal interruptions." },
    { icon: Users, title: "Patient Trust & Credibility", desc: "Proper licensing builds confidence and trust among patients and stakeholders." },
    { icon: Award, title: "NABH & Quality Compliance", desc: "Valid licenses are essential for NABH accreditation and quality certifications." },
    { icon: Clock, title: "Time & Cost Efficiency", desc: "Professional management saves you time and prevents costly penalties for missed renewals." },
    { icon: TrendingUp, title: "Business Growth", desc: "Proper licensing enables expansion, empanelment, and partnership opportunities." },
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Healthcare Licenses & Registrations in India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Complete support for clinical establishment registration, clinic registration, hospital license & renewals
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <button className="bg-[#17ada1] hover:bg-[#138f85] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                Get Started Today
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

      {/* Why Healthcare Licensing is Important */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Healthcare Licensing is Important in India</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Healthcare is a highly regulated sector, and operating without proper licenses can lead to penalties, shutdowns, or legal action. Whether you are starting a clinic or managing a hospital, obtaining the correct hospital license and completing clinical establishment registration is mandatory.
                </p>
                <p>
                  Additionally, periodic renewals such as pharmacy license renewal and shop and establishment license renewal ensure that your business remains legally compliant. Failure to renew on time can result in penalties or suspension.
                </p>
                <p>
                  Our expert team simplifies complex processes such as clinical establishment online registration, clinic registration, and hospital license approvals. We ensure that your clinical establishment registration, hospital license, and renewals are handled professionally.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/assets/liscence-1st.jpg" 
                  alt="Licenses and renewals" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Proper Licensing is Essential for Healthcare Businesses</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Operating without proper licenses can lead to severe consequences. Professional licensing support ensures your healthcare facility remains compliant and protected.
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

      {/* Clinical Establishment Registration - Detailed Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Clinical Establishment Registration – Mandatory Compliance</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Under the Clinical Establishments (Registration and Regulation) Act, healthcare providers must complete clinical establishment registration before commencing operations. With digital systems in place, clinical establishment online registration has become more accessible.
                </p>
                <p>
                  However, the process still requires accurate documentation and adherence to state-specific rules. Our experts assist with document preparation, application filing, follow-ups with authorities, and compliance verification.
                </p>
                <p>
                  We ensure that your clinical establishment registration is completed efficiently and without delays. Whether you are starting a new clinic or renewing existing registrations, our team provides end-to-end support.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="text-[#17ada1]" size={32} />
                <h3 className="text-xl font-bold text-gray-900">Clinical Establishment Online Registration Process</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#17ada1] w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Document preparation and verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#17ada1] w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Online application filing through government portals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#17ada1] w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Follow-up with Appropriate Authorities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#17ada1] w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Compliance verification and certificate issuance</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Healthcare Licensing Services - Cards Slider */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Healthcare Licensing Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">At MednLaw, we offer comprehensive solutions for all healthcare licensing needs across India.</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-4">
            {servicesCards.map((item, index) => (
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

      {/* Types of Licenses & Renewals */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Licenses & Renewals We Handle</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our team handles all types of healthcare licenses and renewals across various regulatory authorities.</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-4">
            {licenseTypesCards.map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-auto">
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

      {/* Quick Registration / Renewal Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Licensing & Renewal Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We follow a systematic approach to ensure smooth and timely completion of all licensing requirements.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "Consultation", desc: "Understand your licensing requirements and facility type" },
              { step: "Documentation", desc: "Prepare and verify all required documents" },
              { step: "Application", desc: "File applications with appropriate authorities" },
              { step: "Follow-up", desc: "Track application status and handle queries" },
              { step: "Certificate", desc: "Obtain license and ensure compliance" }
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

      {/* Legal Framework Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Legal Framework Governing Healthcare Licenses in India</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Healthcare licensing in India is governed by multiple laws and regulations that our team ensures compliance with.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building, title: "Clinical Establishments Act", desc: "Registration and standards for healthcare facilities" },
              { icon: FileText, title: "Drugs and Cosmetics Act", desc: "Pharmacy license renewal and drug regulations" },
              { icon: Building, title: "Shop and Establishment Act", desc: "State-specific labor and business regulations" },
              { icon: AlertCircle, title: "Biomedical Waste Management Rules", desc: "Waste handling and disposal compliance" },
              { icon: Shield, title: "Fire Safety Regulations", desc: "Safety standards and NOC requirements" },
              { icon: Award, title: "NABH Guidelines", desc: "Quality and accreditation standards" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border border-gray-100 p-5 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 flex items-start gap-3"
              >
                <item.icon className="text-[#17ada1] w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Licensing Partner Section */}
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
                  alt="Healthcare Facility" 
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Licensing Partner, Every Step Of The Way</h2>
              <div className="space-y-4 text-white/95">
                <p>
                  Healthcare licensing is complex, time-consuming, and critical to your ability to practice. Missing a renewal deadline or filing incomplete documentation can halt operations, jeopardize revenue, and damage your professional reputation.
                </p>
                <p>
                  MednLaw takes the burden off your shoulders with comprehensive licensing management services. We track every license, monitor every deadline, and handle every submission—ensuring your practice maintains uninterrupted authorization to provide care.
                </p>
                <p>
                  From initial licensure through multi-state expansion and ongoing renewals, we serve as your dedicated licensing partner. Our systematic approach, regulatory expertise, and proactive communication give you confidence that your credentials are always current and compliant.
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
            Why Choose MednLaw for Healthcare Licensing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 text-base"
          >
            MednLaw stands out as a trusted legal partner for healthcare professionals due to expertise in Indian healthcare laws, end-to-end licensing support, timely processing and follow-ups, customized solutions for clinics, hospitals, and pharmacies, and a strong compliance-focused approach. We ensure that your clinical establishment registration, hospital license, and renewals such as pharmacy license renewal are handled professionally.
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
              Get Expert Assistance
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
            Get Expert Healthcare Licenses Assistance Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 leading-relaxed text-base mb-10 max-w-3xl mx-auto"
          >
            Whether you need help with clinical establishment registration, clinic registration, or how to renew a pharmacy license, MednLaw provides reliable and efficient legal support. From obtaining a hospital license to completing shop and establishment license renewal, we ensure that your healthcare business operates smoothly and remains fully compliant.
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

      <WebsiteFAQ pageUrl="/services/licenses-and-renewals" />
      
    </div>
  );
};

export default LicensesRenewalsPage;