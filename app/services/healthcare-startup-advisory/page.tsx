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
  TrendingUp, Award, Scale, Lightbulb, Rocket,
  Target, Zap, Globe, Clock, DollarSign, 
  Lock, LucideProps
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type IconType = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

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

const HealthcareStartupAdvisoryPage = () => {
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
          `${process.env.NEXT_PUBLIC_API_URL}/api/faq/page/services/healthcare-startup-advisory`
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
    { icon: Building, title: "Business Structuring & Legal Setup", desc: "Choosing the right legal structure is crucial for healthcare startups. We assist in company incorporation, founder agreements and equity structuring, and drafting shareholder agreements." },
    { icon: Shield, title: "Regulatory Compliance for Health Tech", desc: "Health tech startups in India must comply with multiple regulatory frameworks including Clinical Establishments Act, Telemedicine Practice Guidelines, and data protection laws." },
    { icon: Lock, title: "Data Privacy & Digital Health Compliance", desc: "With the growth of digital platforms, health tech startups must handle sensitive patient data responsibly. We help draft privacy policies and ensure compliance with data protection laws." },
    { icon: AlertCircle, title: "Medico-Legal Risk Management", desc: "Every healthcare startup faces potential medico-legal risks. Our services include risk assessment and mitigation strategies, legal documentation, and advisory on reducing negligence exposure." },
    { icon: FileText, title: "Contracts & Documentation", desc: "Clear and legally sound contracts are essential for healthcare startups. We assist in drafting doctor and employee agreements, vendor partnerships, and service-level agreements." },
    { icon: DollarSign, title: "Investment & Funding Support", desc: "Raising capital is a key milestone. Our legal support includes due diligence preparation, investor agreements, term sheets, and compliance with funding regulations." },
  ];

  // Card Data for Slide 2 - Types of Advisory
  const advisoryTypesCards = [
    { icon: Target, title: "Business Structuring and Strategy", desc: "Entity formation, governance structures, founder agreements, equity allocation, and strategic business planning tailored to healthcare ventures." },
    { icon: TrendingUp, title: "Healthcare Business Consulting", desc: "Strategic guidance on market entry, business model validation, operational structure, and growth strategies specific to healthcare markets." },
    { icon: Shield, title: "Legal Compliance and Support", desc: "Comprehensive regulatory compliance, licensing, data protection implementation, fraud and abuse prevention, and ongoing legal support." },
    { icon: FileText, title: "Licensing and Regulatory Approvals", desc: "Navigation of licensing requirements, facility certifications, and regulatory submissions for healthcare products and services." },
    { icon: Scale, title: "Risk Management and Compliance", desc: "Implementation of risk management frameworks, compliance programs, quality assurance systems, and liability protection strategies." },
    { icon: Rocket, title: "Growth & Scale-up Advisory", desc: "Strategic advisory for scaling operations, entering new markets, forming partnerships, and executing strategic transactions." },
  ];

  // Key Challenges Cards
  const challengesCards = [
    { icon: AlertCircle, title: "Complex Regulatory Environment", desc: "Navigating multiple laws including Clinical Establishments Act, Telemedicine Guidelines, and data protection regulations." },
    { icon: Lock, title: "Data Privacy Concerns", desc: "Ensuring compliant data handling and patient information protection." },
    { icon: FileText, title: "Licensing Requirements", desc: "Obtaining necessary licenses and registrations for healthcare operations." },
    { icon: Scale, title: "Medical Negligence Risks", desc: "Managing potential liability and medico-legal exposure." },
    { icon: Globe, title: "Cross-Border Compliance", desc: "Navigating international regulations for global health tech operations." },
    { icon: Clock, title: "Time-to-Market Pressures", desc: "Balancing regulatory compliance with rapid product development cycles." },
  ];

  // Icon wrapper to avoid TypeScript issues
  const IconWrapper = ({ icon: Icon, className }: { icon: IconType; className?: string }) => {
    if (!Icon) return null;
    return <Icon className={className} />;
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Healthcare Startups in India | Legal & Compliance Support for Health Tech</title>
        <meta name="description" content="Expert legal support for healthcare startups in India. Business structuring, regulatory compliance & investment advisory for health tech companies." />
      </Head>

      {faqs.length > 0 && <FAQSchema faqs={faqs} />}  
      
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden pt-28 pb-20 px-4"
        style={{
          backgroundImage: "url('/assets/DandC-banner.jpg')",
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
            Healthcare Startups in India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Legal & Compliance Support for Health Tech Startups - From Ideation to Scale-up
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
              Schedule a Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Legal Support is Critical for Healthcare Startups */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Legal Support is Critical for Healthcare Startups</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Unlike traditional businesses, healthcare startups operate in a highly regulated environment. From patient data protection to licensing requirements, health tech startups must comply with multiple laws and guidelines.
                </p>
                <p>
                  A professional medical startup consultant helps ensure regulatory compliance from day one, risk mitigation in operations, proper documentation and legal structuring, and investor readiness and due diligence.
                </p>
                <p>
                  Without proper guidance, even promising health tech startups in India may face legal hurdles that hinder growth. India has witnessed a rapid rise in healthcare startups, driven by innovation, digital transformation, and increasing demand for accessible healthcare solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/assets/DandC1st.jpg" 
                  alt="Healthcare startup advisory" 
                  width={600} 
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services - Cards Slider */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services for Healthcare Startups in India</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              At MednLaw, we offer end-to-end legal solutions designed specifically for healthcare startups and health tech startups in India, supporting startups at every stage from ideation to scaling.
            </p>
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

      {/* Legal Framework & Key Regulations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Legal Framework Governing Healthcare Startups in India</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Understanding Indian laws is essential for healthcare startups. Our expertise ensures that healthcare startups remain compliant with evolving legal requirements.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building, title: "Clinical Establishments Act", desc: "Registration and standards for healthcare facilities and clinics" },
              { icon: Shield, title: "Consumer Protection Act", desc: "Liability for medical services and patient rights" },
              { icon: Globe, title: "Telemedicine Guidelines", desc: "Regulations for digital healthcare platforms and remote consultations" },
              { icon: Lock, title: "IT Laws & Data Protection", desc: "Safeguarding patient information and digital health data" },
              { icon: FileText, title: "Pharmacy & Drug Regulations", desc: "Compliance with drugs and cosmetics laws for pharma startups" },
              { icon: Award, title: "Medical Device Regulations", desc: "CDSCO approval and compliance for medical device startups" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border border-gray-100 p-5 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 flex items-start gap-3"
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

      {/* Types of Healthcare Startup Advisory - Cards Slider */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Healthcare Startup Advisory Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our medical startup consultant services are structured to support startups at every stage of their journey.</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-4">
            {advisoryTypesCards.map((item, index) => (
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

      {/* Common Challenges & Solutions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Challenges Faced by Health Tech Startups</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Despite rapid growth, health tech startups in India face several challenges that require expert guidance to overcome.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challengesCards.map((item, index) => (
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

      {/* Our Startup Advisory Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Healthcare Startup Advisory Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We follow a structured approach to help healthcare startups build strong legal foundations and scale with confidence.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { step: "Evaluation", desc: "Assess business concept & regulatory needs" },
              { step: "Strategy", desc: "Develop legal & compliance roadmap" },
              { step: "Structure", desc: "Entity formation & founder agreements" },
              { step: "Compliance", desc: "Implement regulatory frameworks" },
              { step: "Funding", desc: "Investor readiness & due diligence" },
              { step: "Growth", desc: "Scale-up & expansion advisory" }
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

      {/* Empowering Your Healthcare Startup Section */}
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
                  src="/assets/healthcare-startup-2nd.png" 
                  alt="Healthcare startup growth" 
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering Your Healthcare Startup at Every Stage</h2>
              <div className="space-y-4 text-white/95">
                <p>
                  Launching a healthcare startup requires more than a great idea—it demands navigating complex regulations, securing proper licenses, structuring compliant operations, and managing investor relationships. The healthcare regulatory landscape is unforgiving, and mistakes can be costly or fatal to your venture.
                </p>
                <p>
                  MednLaw provides comprehensive startup advisory services that combine legal expertise with business strategy and healthcare industry knowledge. We guide you through entity formation, regulatory compliance, fundraising, product development, and market launch—ensuring your foundation is solid and your growth is sustainable.
                </p>
                <p>
                  From initial concept to successful scale-up, we serve as your strategic partner and trusted advisor. Our goal isn't just legal compliance—it's helping you build a thriving healthcare business that delivers value to patients while achieving your entrepreneurial vision.
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
            Why Choose MednLaw for Healthcare Startups
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 text-base"
          >
            MednLaw is trusted by emerging healthcare startups and recognized among the advisors for best health tech startups in India. Our expertise lies in combining legal knowledge with healthcare industry insights. What sets us apart includes specialized experience with health tech startups in India, deep understanding of healthcare laws and regulations, end-to-end legal and compliance solutions, and proactive risk management approach. We help healthcare startups build strong legal foundations and scale with confidence.
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
              Launch Your HealthTech Startup
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
            Get Expert Legal Support for Your Healthcare Startup
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 leading-relaxed text-base mb-10 max-w-3xl mx-auto"
          >
            If you are building or scaling a healthcare startup, professional legal guidance is essential. Our expert team supports health tech startups in India with tailored solutions designed for long-term success. From entity formation to market expansion, we're here to ensure your success.
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

      <WebsiteFAQ pageUrl="/services/healthcare-startup-advisory" />
      
    </div>
  );
};

export default HealthcareStartupAdvisoryPage;