"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WebsiteFAQ from "@/app/components/FaqSection";
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import { FAQSchema } from "@/app/components/SchemaGenerator";

interface Partner {
  id: number;
  icon: string;
}

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

  const approachSteps = [
    {
      title: "IP Strategy & Advisory",
      desc: "We provide expert guidance on types of intellectual property applicable to your business and help develop a robust protection strategy.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: "Registration & Filing",
      desc: "Our team assists with filing patents, trademarks, and copyrights under intellectual property India laws, ensuring compliance and accuracy.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "IP Enforcement",
      desc: "We take legal action against infringement and ensure effective protection of intellectual property rights through litigation and dispute resolution.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Licensing & Agreements",
      desc: "We draft and review licensing agreements to maximize the commercial value of your intellectual property rights.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Compliance & Risk Management",
      desc: "Our services include ongoing monitoring to ensure adherence to intellectual property law and minimize legal risks.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Trade Secret Protection",
      desc: "Implementation of trade secret protocols, confidentiality agreements, and ongoing IP monitoring.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  const ipTypes = [
    {
      title: "Patents for Healthcare Innovations",
      desc: "Protection for medical devices, treatment methods, pharmaceutical formulations, diagnostic tools, and innovative healthcare technologies.",
    },
    {
      title: "Trademarks for Healthcare Brands",
      desc: "Registration and protection of practice names, logos, slogans, service marks, and brand identities unique to your healthcare business.",
    },
    {
      title: "Copyrights for Medical Research and Content",
      desc: "Protection for original research papers, educational materials, software code, patient education content, and proprietary documentation.",
    },
    {
      title: "Design Rights for Medical Devices",
      desc: "Protection for the aesthetic and functional design of medical equipment, devices, and healthcare products.",
    },
    {
      title: "Trade Secrets for Healthcare Practices",
      desc: "Confidentiality protection for proprietary processes, patient databases, business strategies, and competitive advantages.",
    },
  ];

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-[#17ADA1]/30" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Intellectual Property Protection in Healthcare – Safeguard Your Medical Innovations
          </h1>
          <p className="text-lg text-white mb-10 leading-relaxed">
            In today's rapidly evolving healthcare ecosystem, innovation is at the core of growth. From pharmaceuticals and medical devices to digital health platforms, protecting these innovations is critical. Intellectual property protection ensures that healthcare professionals, companies, and researchers retain ownership of their work and benefit from their innovations.
          </p>
          <Link href="/contact">
            <button className="relative bg-transparent border-2 border-[#17ADA1] text-white px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg backdrop-blur-sm hover:bg-[#17ADA1]/20 transition-all duration-300 shadow-lg hover:scale-[1.02] whitespace-nowrap">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

      {/* What is Intellectual Property Rights in Healthcare */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is Intellectual Property Rights in Healthcare?
              </h2>
              <div className="space-y-4 leading-relaxed text-sm">
                <p>
                  Understanding what intellectual property rights are essential for any healthcare organization. Intellectual property rights refer to legal protections granted to creators and innovators for their inventions, designs, brands, and artistic works.
                </p>
                <p>
                  In the healthcare sector, intellectual property rights cover pharmaceutical formulations, medical devices and equipment, healthcare software and digital platforms, branding, logos, and proprietary processes.
                </p>
                <p>
                  Under intellectual property India laws, these rights are governed by statutes such as the Patents Act, Trademarks Act, Copyright Act, and Designs Act.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden h-[450px] flex items-center justify-center">
                <Image 
                  src="/assets/ip-1st.jpg" 
                  alt="Intellectual property protection" 
                  width={600} 
                  height={400}
                  className="rounded-md w-full h-auto mb-10 object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MednLaw Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose MednLaw for Intellectual Property Protection</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 text-base">
            MednLaw stands out in providing intellectual property protection for healthcare due to specialized expertise in intellectual property law, deep understanding of healthcare regulations in India, end-to-end IP lifecycle management, and strategic, legally sound approaches. We ensure that your intellectual property rights are secure, enforceable, and aligned with your business goals.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare-Centric Expertise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Deep understanding of medical innovations, clinical practices, and healthcare-specific IP challenges.</p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tailored Legal Strategies</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Customized IP protection approaches designed for your specific practice, innovations, and business goals.</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            className="flex-shrink-0 w-full md:w-auto mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleWhatsAppClick}
              className="w-full md:w-auto group relative bg-gradient-to-r from-[#17ADA1] to-[#14968C] text-white px-8 md:px-12 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#14968C] to-[#0d7c72] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative">Schedule a call</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Our Intellectual Property Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Our Intellectual Property Services for Healthcare</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachSteps.map(({ title, desc, icon }, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of IP Protection */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Types of Intellectual Property Protection for Healthcare
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ipTypes.map((ip, i) => (
              <div
                key={i}
                className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{ip.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{ip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protecting Your Vision Section */}
      <section className="py-20 px-4 bg-[#17ada1] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="/assets/ip-2nd.jpg"
              alt="IP protection"
              width={500}
              height={400}
              className="rounded-md w-full h-auto object-cover"
            />

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Protecting Your Vision, Safeguarding Your Success
              </h2>

              <div className="space-y-5 text-sm leading-relaxed">
                <p className="text-white/95">
                  Innovation drives healthcare forward. Whether you've developed a groundbreaking medical device, created a unique treatment protocol, or built a recognizable brand, your intellectual property represents years of investment, research, and dedication.
                </p>

                <p className="text-white/95">
                  Without proper protection, competitors can replicate your innovations, dilute your brand, or misappropriate your research. MednLaw provides comprehensive IP protection that secures your competitive advantages while ensuring compliance with healthcare regulations.
                </p>

                <p className="text-white/95">
                  From initial concept through commercialization, we safeguard your intellectual assets with strategic patent filings, trademark registrations, licensing agreements, and enforcement actions. Your innovations deserve protection — we make sure they get it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 px-4 bg-white">
        <div className="relative overflow-hidden mt-10">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#17ada1] to-[#138f85] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure Your Intellectual Property in India Today
          </h2>
          <p className="text-white/95 leading-relaxed text-base mb-10 max-w-3xl mx-auto">
            In a competitive healthcare environment, protecting your innovations is essential. Whether you are a startup, hospital, or pharmaceutical company, our intellectual property protection services help you safeguard your assets and maintain a competitive edge.
          </p>
          <Link href="/contact">
            <button className="bg-white hover:bg-gray-100 text-[#17ada1] px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-xl inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let's Connect
            </button>
          </Link>
        </div>
      </section>

      <WebsiteFAQ pageUrl="/services/intellectual-property-protection" />
      
    </div>
  );
};

export default IntellectualPropertyPage;