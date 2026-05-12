"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WebsiteFAQ from "@/app/components/FaqSection";
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import { FAQSchema } from "@/app/components/SchemaGenerator";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  Shield, CheckCircle, Users, FileText, Briefcase, 
  Heart, Building, AlertCircle, BookOpen, MessageCircle, 
  TrendingUp, Award, Scale, Lock, Lightbulb, PenTool,
  Globe, Database, Zap,
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

const IntellectualPropertyPage = () => {
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
          `${process.env.NEXT_PUBLIC_API_URL}/api/faq/page/services/intellectual-property-protection`
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

  // Card Data for Slide 1 - Types of IP Protection
  const ipTypesCards = [
    { icon: Lightbulb, title: "Patents for Healthcare Innovations", desc: "Protection for medical devices, treatment methods, pharmaceutical formulations, diagnostic tools, and innovative healthcare technologies." },
    { icon: Award, title: "Trademarks for Healthcare Brands", desc: "Registration and protection of practice names, logos, slogans, service marks, and brand identities unique to your healthcare business." },
    { icon: FileText, title: "Copyrights for Medical Research", desc: "Protection for original research papers, educational materials, software code, patient education content, and proprietary documentation." },
    { icon: PenTool, title: "Design Rights for Medical Devices", desc: "Protection for the aesthetic and functional design of medical equipment, devices, and healthcare products." },
    { icon: Lock, title: "Trade Secrets for Healthcare Practices", desc: "Confidentiality protection for proprietary processes, patient databases, business strategies, and competitive advantages." },
    { icon: Database, title: "Data Protection & Digital Health IP", desc: "Protection for health tech platforms, telemedicine solutions, and digital health innovations." },
  ];

  // Card Data for Slide 2 - Our IP Services
  const ipServicesCards = [
    { icon: Shield, title: "IP Strategy & Advisory", desc: "We provide expert guidance on types of intellectual property applicable to your business and help develop a robust protection strategy." },
    { icon: FileText, title: "Registration & Filing", desc: "Our team assists with filing patents, trademarks, and copyrights under intellectual property India laws, ensuring compliance and accuracy." },
    { icon: Scale, title: "IP Enforcement", desc: "We take legal action against infringement and ensure effective protection of intellectual property rights through litigation and dispute resolution." },
    { icon: Briefcase, title: "Licensing & Agreements", desc: "We draft and review licensing agreements to maximize the commercial value of your intellectual property rights." },
    { icon: TrendingUp, title: "Compliance & Risk Management", desc: "Our services include ongoing monitoring to ensure adherence to intellectual property law and minimize legal risks." },
    { icon: Globe, title: "International IP Protection", desc: "Assistance with patent and trademark filings across multiple jurisdictions for global healthcare businesses." },
  ];

  // Benefits Cards
  const benefitsCards = [
    { icon: Shield, title: "Exclusive Rights", desc: "Secure exclusive rights over your healthcare innovations and prevent unauthorized use by competitors." },
    { icon: TrendingUp, title: "Competitive Advantage", desc: "Establish a strong market position by protecting your unique products, services, and brand identity." },
    { icon: DollarSign, title: "Revenue Generation", desc: "Monetize your intellectual property through licensing agreements, royalties, and strategic partnerships." },
    { icon: Award, title: "Increased Valuation", desc: "A strong IP portfolio significantly enhances your company's valuation for investments and acquisitions." },
    { icon: Globe, title: "Global Protection", desc: "Extend your IP protection across international borders to safeguard your innovations worldwide." },
    { icon: CheckCircle, title: "Legal Protection", desc: "Establish legal remedies against infringement and unauthorized use of your intellectual property." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Intellectual Property Protection in Healthcare | IP Services India</title>
        <meta name="description" content="Expert intellectual property protection in healthcare. Patents, trademarks & copyrights for medical innovations, devices & healthcare brands in India." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {faqs.length > 0 && <FAQSchema faqs={faqs} />}  
      
      {/* Hero Section - Mobile Optimized */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4"
        style={{
          backgroundImage: "url('/assets/intellectual-property-banner.jpg')",
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
            Intellectual Property Protection in Healthcare
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/95 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Safeguard your medical innovations, research, and proprietary methods with comprehensive IP protection
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
              WhatsApp Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* What is Intellectual Property Rights in Healthcare - Mobile Friendly */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-[#17ada1] text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">What is Intellectual Property Rights in Healthcare?</h2>
              <div className="space-y-3 sm:space-y-4 leading-relaxed text-sm sm:text-base">
                <p>
                  Understanding what intellectual property rights are essential for any healthcare organization. Intellectual property rights refer to legal protections granted to creators and innovators for their inventions, designs, brands, and artistic works.
                </p>
                <p>
                  In the healthcare sector, intellectual property rights cover pharmaceutical formulations, medical devices and equipment, healthcare software and digital platforms, branding, logos, and proprietary processes.
                </p>
                <p>
                  Under intellectual property India laws, these rights are governed by statutes such as the Patents Act, Trademarks Act, Copyright Act, and Designs Act. Our experts ensure that your intellectual property protection aligns with Indian legal requirements and industry standards.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/assets/ip-1st.jpg" 
                  alt="Intellectual property protection" 
                  width={600} 
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of IP Rights in Healthcare - Benefits Slider */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Importance of Intellectual Property Rights in Healthcare</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">
              The importance of intellectual property rights in healthcare cannot be overstated. Strong intellectual property protection drives innovation, ensures fair competition, and enables businesses to recover investments in research and development.
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

      {/* Types of Intellectual Property Protection - Cards Slider */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Types of Intellectual Property Protection for Healthcare</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">Understanding the types of intellectual property protection is crucial for safeguarding healthcare innovations. Our legal experts help identify and secure the appropriate rights.</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-2 sm:px-4">
            {ipTypesCards.map((item, index) => (
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

      {/* Our Intellectual Property Services */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Our Intellectual Property Services for Healthcare</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">At MedNLaw, we offer end-to-end intellectual property protection services tailored to the healthcare sector.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {ipServicesCards.map((item, index) => (
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

      {/* Intellectual Property Law in India */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Intellectual Property Law in India – Key Considerations</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">Navigating intellectual property law in India requires specialized legal expertise. Healthcare businesses must comply with multiple regulations while securing their innovations.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <FileText className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Patent Eligibility</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Criteria for pharmaceutical and medical device patents</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Award className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Trademark Registration</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Procedure for healthcare brand name protection</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Lock className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Data Exclusivity</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Confidentiality and regulatory data protection</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Building className="text-[#17ada1] w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Regulatory Approvals</h3>
              <p className="text-gray-600 text-xs sm:text-sm">IP impact on FDA/CDSCO approvals</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges in Protection of IP Rights */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Challenges in Protection of Intellectual Property Rights</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">Healthcare organizations often face unique challenges that require specialized legal expertise to overcome.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: AlertCircle, title: "Complex Regulatory Approvals", desc: "Navigating FDA, CDSCO, and other regulatory bodies while securing IP protection." },
              { icon: Scale, title: "Risk of Patent Infringement", desc: "Avoiding infringement of existing patents while protecting your own innovations." },
              { icon: Zap, title: "Rapid Technological Advancements", desc: "Keeping pace with fast-moving technologies in digital health and AI diagnostics." },
              { icon: Globe, title: "Cross-Border IP Issues", desc: "Managing intellectual property across multiple jurisdictions and international laws." },
              { icon: Shield, title: "Trade Secret Protection", desc: "Safeguarding proprietary processes and confidential business information." },
              { icon: BookOpen, title: "Documentation & Compliance", desc: "Maintaining proper records and adhering to filing deadlines and procedures." },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white border-2 border-gray-100 p-4 sm:p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 flex items-start gap-3"
              >
                <item.icon className="text-[#17ada1] w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Our Intellectual Property Protection Process</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">We follow a structured approach to ensure comprehensive protection of your intellectual assets.</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { step: "Evaluation", desc: "Assess IP assets and protection needs" },
              { step: "Strategy", desc: "Develop tailored IP protection plan" },
              { step: "Research", desc: "Conduct prior art and availability searches" },
              { step: "Filing", desc: "Prepare and submit applications" },
              { step: "Enforcement", desc: "Monitor and enforce IP rights" },
              { step: "Renewal", desc: "Manage ongoing maintenance and renewals" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#17ada1] rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white text-base sm:text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">{item.step}</h3>
                <p className="text-gray-500 text-xs hidden sm:block">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protecting Your Vision Section */}
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
                  src="/assets/ip-2nd.jpg"
                  alt="IP protection"
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Protecting Your Vision, Safeguarding Your Success</h2>
              <div className="space-y-3 sm:space-y-4 text-white/95 text-sm sm:text-base">
                <p>
                  Innovation drives healthcare forward. Whether you've developed a groundbreaking medical device, created a unique treatment protocol, or built a recognizable brand, your intellectual property represents years of investment, research, and dedication.
                </p>
                <p>
                  Without proper protection, competitors can replicate your innovations, dilute your brand, or misappropriate your research. MedNLaw provides comprehensive IP protection that secures your competitive advantages while ensuring compliance with healthcare regulations.
                </p>
                <p>
                  From initial concept through commercialization, we safeguard your intellectual assets with strategic patent filings, trademark registrations, licensing agreements, and enforcement actions. Your innovations deserve protection — we make sure they get it.
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
            Why Choose MedNLaw for Intellectual Property Protection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-10 text-sm sm:text-base px-4"
          >
            MedNLaw stands out in providing intellectual property protection for healthcare due to specialized expertise in intellectual property law, deep understanding of healthcare regulations in India, end-to-end IP lifecycle management, and strategic, legally sound approaches. We ensure that your intellectual property rights are secure, enforceable, and aligned with your business goals.
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
              Secure Your IP Today
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
            Secure Your Intellectual Property in India Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 leading-relaxed text-sm sm:text-base mb-6 sm:mb-10 max-w-3xl mx-auto px-4"
          >
            In a competitive healthcare environment, protecting your innovations is essential. Whether you are a startup, hospital, or pharmaceutical company, our intellectual property protection services help you safeguard your assets and maintain a competitive edge.
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

      <WebsiteFAQ pageUrl="/services/intellectual-property-protection" />
      
    </div>
  );
};

export default IntellectualPropertyPage;