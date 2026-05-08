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
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
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

  // Helper for DollarSign icon
  const DollarSignIcon = DollarSign;

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Intellectual Property Protection in Healthcare | IP Services India</title>
        <meta name="description" content="Expert intellectual property protection in healthcare. Patents, trademarks & copyrights for medical innovations, devices & healthcare brands in India." />
      </Head>

      {faqs.length > 0 && <FAQSchema faqs={faqs} />}  
      
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden pt-28 pb-20 px-4"
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Intellectual Property Protection in Healthcare
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Safeguard your medical innovations, research, and proprietary methods with comprehensive IP protection
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

      {/* What is Intellectual Property Rights in Healthcare */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Intellectual Property Rights in Healthcare?</h2>
              <div className="space-y-4 leading-relaxed">
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
            <div className="relative">
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Importance of Intellectual Property Rights in Healthcare</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The importance of intellectual property rights in healthcare cannot be overstated. Strong intellectual property protection drives innovation, ensures fair competition, and enables businesses to recover investments in research and development.
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

      {/* Types of Intellectual Property Protection - Cards Slider */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Intellectual Property Protection for Healthcare</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Understanding the types of intellectual property protection is crucial for safeguarding healthcare innovations. Our legal experts help identify and secure the appropriate rights.</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-4">
            {ipTypesCards.map((item, index) => (
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

      {/* Our Intellectual Property Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Intellectual Property Services for Healthcare</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">At MednLaw, we offer end-to-end intellectual property protection services tailored to the healthcare sector.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ipServicesCards.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-[#17ada1]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intellectual Property Law in India */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Intellectual Property Law in India – Key Considerations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Navigating intellectual property law in India requires specialized legal expertise. Healthcare businesses must comply with multiple regulations while securing their innovations.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <FileText className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Patent Eligibility</h3>
              <p className="text-gray-500 text-sm">Criteria for pharmaceutical and medical device patents</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Award className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Trademark Registration</h3>
              <p className="text-gray-500 text-sm">Procedure for healthcare brand name protection</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Lock className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Data Exclusivity</h3>
              <p className="text-gray-500 text-sm">Confidentiality and regulatory data protection</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Building className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Regulatory Approvals</h3>
              <p className="text-gray-500 text-sm">IP impact on FDA/CDSCO approvals</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges in Protection of IP Rights */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Challenges in Protection of Intellectual Property Rights</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Healthcare organizations often face unique challenges that require specialized legal expertise to overcome.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 flex items-start gap-3"
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

      {/* Our Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Intellectual Property Protection Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We follow a structured approach to ensure comprehensive protection of your intellectual assets.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
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
                <div className="w-16 h-16 bg-[#17ada1] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{item.step}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protecting Your Vision Section */}
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
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Protecting Your Vision, Safeguarding Your Success</h2>
              <div className="space-y-4 text-white/95">
                <p>
                  Innovation drives healthcare forward. Whether you've developed a groundbreaking medical device, created a unique treatment protocol, or built a recognizable brand, your intellectual property represents years of investment, research, and dedication.
                </p>
                <p>
                  Without proper protection, competitors can replicate your innovations, dilute your brand, or misappropriate your research. MednLaw provides comprehensive IP protection that secures your competitive advantages while ensuring compliance with healthcare regulations.
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Why Choose MednLaw for Intellectual Property Protection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 text-base"
          >
            MednLaw stands out in providing intellectual property protection for healthcare due to specialized expertise in intellectual property law, deep understanding of healthcare regulations in India, end-to-end IP lifecycle management, and strategic, legally sound approaches. We ensure that your intellectual property rights are secure, enforceable, and aligned with your business goals.
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
              Secure Your IP Today
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
            Secure Your Intellectual Property in India Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 leading-relaxed text-base mb-10 max-w-3xl mx-auto"
          >
            In a competitive healthcare environment, protecting your innovations is essential. Whether you are a startup, hospital, or pharmaceutical company, our intellectual property protection services help you safeguard your assets and maintain a competitive edge.
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

      <WebsiteFAQ pageUrl="/services/intellectual-property-protection" />
      
    </div>
  );
};

export default IntellectualPropertyPage;