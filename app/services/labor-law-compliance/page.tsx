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
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
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
        <meta name="description" content="Expert labour law compliance services in India. Stay compliant with Indian employment laws, avoid penalties, and protect your business with MednLaw." />
      </Head>
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden pt-28 pb-20 px-4"
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Labour Law Compliance Services in India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Expert guidance to navigate complex employment regulations and maintain a compliant workforce
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

      {/* What is Labour Law Compliance in India */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Labour Law Compliance in India?</h2>
              <div className="space-y-4 leading-relaxed">
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
            <div className="relative">
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Labour Law Compliance is Essential for Businesses</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Maintaining proper labour law compliance is essential to protect your business from regulatory scrutiny and legal challenges. Non-compliance can result in penalties, operational disruptions, and reputational damage.
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

      {/* Our Labour Law Compliance Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Labour Law Compliance Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">At MednLaw, we offer comprehensive labour law compliance services tailored to meet the needs of modern businesses across all industries.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((item, index) => (
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

      {/* Key Legislations Covered - Slider */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Labour Law Compliances in India</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our labour law compliance services cover all major central and state legislations governing employment in India.</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-4">
            {legislationsCards.map((item, index) => (
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

      {/* Industries We Serve */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our labour law compliance services cater to a wide range of industries, each with unique compliance requirements.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Heart className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Healthcare</h3>
              <p className="text-gray-500 text-sm">Hospitals, clinics, and diagnostic centers</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Building className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Manufacturing</h3>
              <p className="text-gray-500 text-sm">Industrial units and production facilities</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Briefcase className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">IT & Technology</h3>
              <p className="text-gray-500 text-sm">Software companies and tech startups</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <TrendingUp className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Startups & SMEs</h3>
              <p className="text-gray-500 text-sm">Small and medium enterprises across sectors</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach to Labour Law Compliance */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach to Labour Law Compliance</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We follow a structured and proactive approach to delivering reliable labour law compliance services.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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

      {/* Safeguarding Those Who Care for Others */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Safeguarding Those Who Care for Others</h2>
              <div className="space-y-4 text-white/95">
                <p>
                  Healthcare providers dedicate their lives to caring for patients. They deserve workplaces that honor their commitment through fair treatment, safe conditions, and legal protection.
                </p>
                <p>
                  MednLaw ensures that your practice complies with labor laws while fostering a positive work environment. We help you navigate complex regulations so you can focus on what matters most: delivering exceptional patient care.
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Why Choose MednLaw for Labour Law Compliance Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 text-base"
          >
            Choosing the right partner for labour law compliance services is essential for long-term success. MednLaw offers in-depth expertise in labour law compliance India, customized compliance solutions for different industries, proactive risk management approach, end-to-end legal and advisory support, and strong understanding of central and state labour laws. Our commitment to excellence makes us a trusted partner for businesses seeking reliable labour law compliance solutions.
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
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <div className="relative overflow-hidden py-16 bg-gray-50">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-10">Trusted By Leading Businesses Across India</h2>
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
            Ensure Compliance with Indian Labour Laws Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 leading-relaxed text-base mb-10 max-w-3xl mx-auto"
          >
            With increasing regulatory scrutiny, maintaining proper labour law compliance is critical for business continuity. Professional labour law compliance services not only ensure adherence to legal requirements but also create a structured and efficient workplace environment.
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

      <WebsiteFAQ pageUrl="/services/labor-law-compliance" />
      
    </div>
  );
};

export default LaborLawCompliance;