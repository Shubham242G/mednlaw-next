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
  Shield, CheckCircle, Users, FileText, Briefcase, Clock, 
  DollarSign, Heart, Building, AlertCircle, BookOpen, 
  MessageCircle, TrendingUp, Award, Scale, Clipboard 
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

const LaborLawCompliance = () => {
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
          `${process.env.NEXT_PUBLIC_API_URL}/api/faq/page/services/labor-law-compliance`
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

  // Card Data for Slide 1 - Key Benefits of Labour Law Compliance
  const benefitsCards = [
    { icon: Shield, title: "Avoid Legal Penalties", desc: "Our compliance services help prevent costly penalties from regulatory authorities for non-compliance." },
    { icon: TrendingUp, title: "Ensure Smooth Operations", desc: "Proper compliance ensures uninterrupted business operations without legal disruptions or shutdowns." },
    { icon: Users, title: "Build Employee Trust", desc: "Transparent compliance practices foster trust and loyalty among your workforce." },
    { icon: Award, title: "Strengthen Governance", desc: "Robust compliance frameworks enhance corporate governance and business reputation." },
    { icon: Scale, title: "Reduce Disputes", desc: "Proper documentation and policies minimize the risk of employee disputes and litigation." },
    { icon: CheckCircle, title: "Stay Audit-Ready", desc: "Systematic compliance management keeps you prepared for regulatory inspections at all times." },
  ];

  // Card Data for Slide 2 - Key Legislations Covered
  const legislationsCards = [
    { icon: FileText, title: "The Code on Wages, 2019", desc: "Regulates wage payments, minimum wages, and bonus entitlements for all employees." },
    { icon: Building, title: "Industrial Relations Code, 2020", desc: "Governs industrial disputes, trade unions, and standing orders in establishments." },
    { icon: Shield, title: "OSH Code, 2020", desc: "Occupational Safety, Health and Working Conditions Code for workplace safety." },
    { icon: Heart, title: "Social Security Code, 2020", desc: "Covers employee benefits including PF, ESI, and other social security schemes." },
    { icon: Clock, title: "Shops & Establishments Act", desc: "State-specific laws governing working hours, leave, and employment conditions." },
    { icon: AlertCircle, title: "Equal Opportunity Laws", desc: "Prevention of discrimination and creation of inclusive workplace policies." },
  ];

  // Service Cards
  const serviceCards = [
    { icon: Clipboard, title: "Compliance Audit & Assessment", desc: "We conduct detailed audits to identify gaps in your current labour law compliance framework. Our team evaluates policies, documentation, and practices to ensure alignment with applicable laws." },
    { icon: FileText, title: "Statutory Registration & Licensing", desc: "Our labour law compliance services include assistance with registrations under various labour laws, ensuring that your business operates legally from the outset." },
    { icon: BookOpen, title: "Documentation & Policy Drafting", desc: "We develop compliant HR policies, employment contracts, and workplace guidelines as part of our labour law compliance India solutions." },
    { icon: DollarSign, title: "Payroll & Statutory Compliance", desc: "Managing payroll in line with statutory requirements is a key aspect of labour law compliance. Our services ensure accurate calculations of wages, PF, ESI, and other contributions." },
    { icon: TrendingUp, title: "Ongoing Compliance Management", desc: "Our labour law compliance services provide continuous monitoring, reporting, and updates to ensure that your organization remains compliant with evolving laws." },
    { icon: Briefcase, title: "Representation & Legal Support", desc: "In case of disputes or inspections, our team provides legal representation and advisory support as part of our labour law compliance India services." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Labour Law Compliance Services in India | Expert Legal Support</title>
        <meta name="description" content="Expert labour law compliance services in India. Stay compliant with Indian employment laws, avoid penalties, and protect your business with MedNLaw." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      
      {/* Hero Section - Mobile Optimized */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4"
        style={{
          backgroundImage: "url('/assets/labour-laws.png')",
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
            Labour Law Compliance Services in India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/95 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Expert guidance to navigate complex employment regulations and maintain a compliant workforce
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

      {/* What is Labour Law Compliance in India - Mobile Friendly */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-[#17ada1] text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">What is Labour Law Compliance in India?</h2>
              <div className="space-y-3 sm:space-y-4 leading-relaxed text-sm sm:text-base">
                <p>
                  Labour law compliance India refers to adherence to various employment-related laws governing wages, working conditions, employee benefits, and industrial relations. These laws are established to protect both employers and employees while ensuring fair workplace practices.
                </p>
                <p>
                  Key legislations under labour law compliance include The Code on Wages, 2019, The Industrial Relations Code, 2020, The Occupational Safety, Health and Working Conditions Code, 2020, The Code on Social Security, 2020, and state-specific Shops and Establishments Acts.
                </p>
                <p>
                  Effective labour law compliance services ensure that your organization remains aligned with these laws and avoids penalties or legal disputes.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/assets/labor-law-banner.jpg" 
                  alt="Labor law compliance" 
                  width={600} 
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Labour Law Compliance is Essential - Cards Slider */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Why Labour Law Compliance is Essential for Businesses</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">
              Maintaining proper labour law compliance is essential to protect your business from regulatory scrutiny and legal challenges. Non-compliance can result in penalties, operational disruptions, and reputational damage.
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

      {/* Our Labour Law Compliance Services */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Our Labour Law Compliance Services</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">At MedNLaw, we offer comprehensive labour law compliance services tailored to meet the needs of modern businesses across all industries.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {serviceCards.map((item, index) => (
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

      {/* Key Legislations Covered - Slider */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Key Labour Law Compliances in India</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">Our labour law compliance services cover all major central and state legislations governing employment in India.</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-2 sm:px-4">
            {legislationsCards.map((item, index) => (
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

      {/* Our Approach to Labour Law Compliance */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Our Approach to Labour Law Compliance</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base px-4">We follow a structured and proactive approach to delivering reliable labour law compliance services.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { step: "Initial Assessment", desc: "We evaluate your current compliance status under labour law compliance India regulations." },
              { step: "Gap Analysis", desc: "Our team identifies areas of non-compliance and potential risks in your organization." },
              { step: "Implementation", desc: "We implement necessary changes, including policy updates, registrations, and training." },
              { step: "Monitoring & Reporting", desc: "Continuous monitoring ensures that your labour law compliance remains up to date." },
              { step: "Ongoing Support", desc: "We provide regular updates and advisory to address evolving legal requirements." }
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

      {/* Safeguarding Those Who Care for Others */}
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Safeguarding Those Who Care for Others</h2>
              <div className="space-y-3 sm:space-y-4 text-white/95 text-sm sm:text-base">
                <p>
                  Healthcare providers dedicate their lives to caring for patients. They deserve workplaces that honor their commitment through fair treatment, safe conditions, and legal protection.
                </p>
                <p>
                  MedNLaw ensures that your practice complies with labor laws while fostering a positive work environment. We help you navigate complex regulations so you can focus on what matters most: delivering exceptional patient care.
                </p>
                <p>
                  From preventing workplace discrimination to ensuring proper wage practices, we safeguard both your practice and your employees. Our proactive approach to labour law compliance helps you build a workforce that is both protected and productive.
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
            Why Choose MedNLaw for Labour Law Compliance Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-10 text-sm sm:text-base px-4"
          >
            Choosing the right partner for labour law compliance services is essential for long-term success. MedNLaw offers in-depth expertise in labour law compliance India, customized compliance solutions for different industries, proactive risk management approach, end-to-end legal and advisory support, and strong understanding of central and state labour laws. Our commitment to excellence makes us a trusted partner for businesses seeking reliable labour law compliance solutions.
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
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-700 mb-6 sm:mb-10 px-4">Trusted By Leading Businesses Across India</h2>
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
            Ensure Compliance with Indian Labour Laws Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 leading-relaxed text-sm sm:text-base mb-6 sm:mb-10 max-w-3xl mx-auto px-4"
          >
            With increasing regulatory scrutiny, maintaining proper labour law compliance is critical for business continuity. Professional labour law compliance services not only ensure adherence to legal requirements but also create a structured and efficient workplace environment.
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

      <WebsiteFAQ pageUrl="/services/labor-law-compliance" />
      
    </div>
  );
};

export default LaborLawCompliance;