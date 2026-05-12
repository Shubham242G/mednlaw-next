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
  Shield, CheckCircle, Users, FileText, Building, 
  AlertCircle, Heart, Stethoscope, Clipboard, 
  MessageCircle, TrendingUp, Award, Scale, HardHat,
  PenTool, Ruler, Truck, Sun, Wind, Droplet,
  Trash
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

const HealthcareFacilitiesPage = () => {
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
          `${process.env.NEXT_PUBLIC_API_URL}/api/faq/page/services/design-and-construction-of-healthcare-facilities`
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

  // Card Data for Slide 1 - Key Services
  const servicesCards = [
    { icon: Clipboard, title: "Compliance Assessment & Audit", desc: "We conduct detailed audits of existing healthcare facilities to identify gaps in compliance, infrastructure, and operational standards." },
    { icon: Building, title: "Legal Advisory for Renovation", desc: "Renovation of healthcare facilities involves multiple approvals and regulatory clearances. Our legal team provides expert guidance to ensure that facilities follow all statutory norms during upgrades." },
    { icon: PenTool, title: "Infrastructure Planning & Optimization", desc: "We assist in designing efficient layouts for healthcare facilities, ensuring proper patient flow, infection control, and space utilization." },
    { icon: FileText, title: "Licensing & Regulatory Approvals", desc: "Obtaining licenses is a critical step in upgrading healthcare facilities. We handle documentation and approvals required for private healthcare facilities." },
    { icon: Shield, title: "Risk Management & Compliance Monitoring", desc: "Post-renovation, continuous monitoring is essential. Our services ensure that healthcare facilities remain compliant with evolving laws and standards." },
    { icon: Award, title: "NABH Accreditation Support", desc: "We assist healthcare facilities in achieving and maintaining NABH accreditation standards for quality and patient safety." },
  ];

  // Card Data for Slide 2 - Key Regulations
  const regulationsCards = [
    { icon: Building, title: "Clinical Establishments Act", desc: "Registration and standards for healthcare facilities under the Clinical Establishments (Registration and Regulation) Act." },
    { icon: Ruler, title: "National Building Code (NBC)", desc: "Adherence to structural, fire safety, and accessibility standards as per NBC requirements for healthcare spaces." },
    { icon: Trash, title: "Biomedical Waste Management Rules", desc: "Proper handling, treatment, and disposal of biomedical waste in compliance with regulatory standards." },
    { icon: AlertCircle, title: "Fire Safety Regulations", desc: "Implementation of fire safety systems, evacuation plans, and compliance with local fire authority requirements." },
    { icon: Building, title: "Local Municipal & Zoning Laws", desc: "Obtaining necessary permits and approvals from local municipal authorities for healthcare facility operations." },
    { icon: Shield, title: "ADA & Accessibility Standards", desc: "Ensuring healthcare facilities are accessible to all patients, including those with disabilities." },
  ];

  // Facility Types
  const facilityTypes = [
    { icon: Stethoscope, title: "General Hospitals", desc: "Comprehensive acute care facilities with multiple departments including emergency, surgery, imaging, and inpatient units." },
    { icon: Heart, title: "Specialty Hospitals", desc: "Focused care facilities for specific conditions such as cardiac centers, cancer treatment facilities, or pediatric hospitals." },
    { icon: Building, title: "Outpatient Clinics", desc: "Ambulatory care centers providing diagnostic, treatment, and minor surgical services without overnight stays." },
    { icon: Clipboard, title: "Diagnostic Centers", desc: "Specialized facilities for imaging and laboratory services requiring specific equipment rooms, shielding, and safety protocols." },
    { icon: Users, title: "Rehabilitation Centers", desc: "Facilities focused on physical therapy, occupational therapy, and recovery services with specialized treatment spaces." },
    { icon: Heart, title: "Long-Term Care Facilities", desc: "Nursing homes and assisted living facilities requiring residential features combined with medical care capabilities." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Healthcare Facilities Renovation Legal Support in India | Compliance Experts</title>
        <meta name="description" content="Expert legal support for healthcare facilities renovation in India. Ensure compliance with Clinical Establishments Act, fire safety & licensing approvals for hospitals and clinics." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {faqs.length > 0 && <FAQSchema faqs={faqs} />}  
      
      {/* Hero Section - Mobile Optimized */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4"
        style={{
          backgroundImage: "url('/assets/healthcare-back.jpg')",
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
            Design & Construction of Healthcare Facilities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/95 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Expert legal support for renovation, compliance & development of healthcare facilities in India
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#17ada1] hover:bg-[#138f85] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                Get Started Today
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

      {/* Why Upgrading Healthcare Facilities is Critical - Mobile Friendly */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-[#17ada1] text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Why Upgrading Healthcare Facilities is Critical in India</h2>
              <div className="space-y-3 sm:space-y-4 leading-relaxed text-sm sm:text-base">
                <p>
                  India's healthcare sector is undergoing a major transformation. Many existing healthcare facilities in India were established under older regulatory frameworks and may not meet current compliance standards.
                </p>
                <p>
                  Upgrading healthcare facilities helps ensure compliance with updated laws and regulations, improve patient safety and care standards, enhance operational efficiency, and strengthen institutional credibility.
                </p>
                <p>
                  For private healthcare facilities, renovation also plays a key role in maintaining competitiveness and delivering high-quality patient experiences. Modernizing healthcare facilities improves both functionality and patient satisfaction.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/assets/healthcare-1st.jpg" 
                  alt="Healthcare facility design" 
                  width={600} 
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Healthcare Facilities Renovation Services - Cards Slider */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Our Healthcare Facilities Renovation Services</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">
              At MedNLaw, we offer end-to-end solutions for upgrading and managing healthcare facilities, tailored for hospitals, clinics, and private healthcare facilities of all sizes.
            </p>
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

      {/* Legal Framework - Key Regulations Slider */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Legal Framework Governing Healthcare Facilities in India</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">Renovating or setting up healthcare facilities in India requires strict adherence to multiple laws and guidelines. Our expertise ensures full compliance.</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-2 sm:px-4">
            {regulationsCards.map((item, index) => (
              <div key={index} className="px-2 sm:px-3">
                <div className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-auto">
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

      {/* Types of Healthcare Facilities */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Types of Healthcare Facilities We Support</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">Our services cover all types of healthcare facilities, each with unique regulatory requirements and operational needs.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {facilityTypes.map((item, index) => (
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

      {/* Key Features of Modern Healthcare Facilities */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Key Features of Modern Healthcare Facilities</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">Upgraded healthcare facilities must align with global standards while complying with Indian regulations.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <motion.div whileHover={{ y: -5 }} className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <Shield className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Infection Control Systems</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Advanced HVAC and air filtration systems</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <Users className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Patient-Friendly Infrastructure</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Comfortable and accessible design for patients</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <FileText className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Digitized Record Systems</h3>
              <p className="text-gray-600 text-xs sm:text-sm">HIMS and electronic medical records</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <AlertCircle className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Emergency Response Readiness</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Fire safety and disaster management systems</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Our Approach to Healthcare Facility Compliance</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">We follow a systematic approach to ensure your healthcare facilities are compliant, efficient, and future-ready.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { step: "Assessment", desc: "We evaluate your current systems to determine gaps in regulatory compliance." },
              { step: "Strategy", desc: "Our experts design a customized compliance and renovation plan." },
              { step: "Implementation", desc: "We implement systems and processes for effective compliance management." },
              { step: "Monitoring", desc: "Continuous monitoring ensures sustained regulatory compliance." },
              { step: "Improvement", desc: "We refine systems based on regulatory updates and feedback." }
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

      {/* Designing The Future Section */}
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
              className="order-1 md:order-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Designing The Future of Healthcare Facilities</h2>
              <div className="space-y-3 sm:space-y-4 text-white/95 text-sm sm:text-base">
                <p>
                  Modern healthcare facilities must balance multiple priorities: patient safety, operational efficiency, regulatory compliance, and healing environments. The design and construction process requires meticulous attention to infection control, accessibility, technology integration, and future adaptability.
                </p>
                <p>
                  MedNLaw understands that every healthcare facility is unique, with specific patient populations, clinical workflows, and community needs. Our expertise spans from small private practices to large hospital systems, ensuring your facility meets current standards while remaining flexible for future growth.
                </p>
                <p>
                  We navigate the complex landscape of building codes, healthcare regulations, and accreditation requirements, allowing you to focus on your mission of providing excellent patient care in a safe, efficient, and welcoming environment.
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
            Why Choose MedNLaw for Healthcare Facilities Compliance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-10 text-sm sm:text-base px-4"
          >
            Healthcare facility design and construction requires specialized knowledge of medical regulations, building codes, and operational requirements. MedNLaw combines legal expertise with healthcare industry knowledge to guide you through every phase of your facility project. Our team ensures compliance with FGI Guidelines, fire safety standards, accessibility requirements, and state-specific regulations while helping you create efficient, patient-centered spaces that meet current needs and adapt to future healthcare delivery models.
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
              Schedule a Consultation
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
            Get Expert Healthcare Facilities Renovation Support Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 leading-relaxed text-sm sm:text-base mb-6 sm:mb-10 max-w-3xl mx-auto px-4"
          >
            Whether you need guidance on structuring healthcare facilities or navigating complex construction regulations, MedNLaw offers exceptional legal support so you can focus on patient care. From planning to completion, we're here to protect your investment and ensure regulatory compliance.
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

      <WebsiteFAQ pageUrl="/services/design-and-construction-of-healthcare-facilities" />
      
    </div>
  );
};

export default HealthcareFacilitiesPage;