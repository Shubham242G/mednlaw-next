"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WebsiteFAQ from "@/app/components/FaqSection";

interface Partner {
  id: number;
  icon: string;
}

const HealthcareStartupAdvisoryPage = () => {
  const partners: Partner[] = [
    { id: 1, icon: "/assets/brand1.png" },
    { id: 2, icon: "/assets/brand3.png" },
    { id: 3, icon: "/assets/brand4.png" },
    { id: 4, icon: "/assets/brand5.png" },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "+919266877793";
    const message = "Hi, I'm interested in learning more about your legal services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const approachSteps = [
    {
      title: "Evaluation",
      desc: "Comprehensive assessment of your business concept, market opportunity, regulatory requirements, and legal structure needs.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: "Strategy",
      desc: "Development of a strategic roadmap addressing legal structure, regulatory compliance, funding, and growth milestones.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Research",
      desc: "Thorough analysis of applicable regulations, market conditions, competitive landscape, and best practices for your sector.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: "Infrastructure",
      desc: "Establishment of proper legal entity, governance structure, contracts, policies, and compliance frameworks.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Capitalization",
      desc: "Support with fundraising strategy, investor agreements, term sheet negotiation, and equity structuring.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Growth",
      desc: "Ongoing advisory support for scaling operations, entering new markets, partnerships, and strategic transactions.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const advisoryTypes = [
    {
      title: "Business Structuring and Strategy",
      desc: "Entity formation, governance structures, founder agreements, equity allocation, and strategic business planning tailored to healthcare ventures.",
    },
    {
      title: "Healthcare Business Consulting",
      desc: "Strategic guidance on market entry, business model validation, operational structure, and growth strategies specific to healthcare markets.",
    },
    {
      title: "Legal Compliance and Support",
      desc: "Comprehensive regulatory compliance, licensing, HIPAA implementation, fraud and abuse prevention, and ongoing legal support.",
    },
    {
      title: "Licensing and Regulatory Approvals",
      desc: "Navigation of FDA approvals, state licensing requirements, facility certifications, and regulatory submissions for healthcare products and services.",
    },
    {
      title: "Risk Management and Compliance",
      desc: "Implementation of risk management frameworks, compliance programs, quality assurance systems, and liability protection strategies.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
        {/* Gradient overlay for text clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-[#17ADA1]/30" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Healthcare Startup Advisory
          </h1>
          <p className="text-lg text-white mb-10 leading-relaxed">
            Navigate the complexities of launching and scaling your healthcare venture with comprehensive legal 
            and strategic guidance tailored to the unique challenges of the healthcare industry.
          </p>
          <Link href="/contact">
            <button className="relative bg-transparent border-2 border-[#17ADA1] text-white px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg backdrop-blur-sm hover:bg-[#17ADA1]/20 transition-all duration-300 shadow-lg hover:scale-[1.02] whitespace-nowrap">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

      {/* What is Healthcare Startup Advisory Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is Healthcare Startup Advisory?
              </h2>
              <div className="space-y-4 leading-relaxed text-sm">
                <p>
                  Healthcare Startup Advisory provides comprehensive legal, regulatory, and strategic guidance for 
                  entrepreneurs launching healthcare ventures. This specialized service addresses the unique 
                  challenges of building healthcare businesses, from initial concept through growth and scaling.
                </p>
                <p>
                  Starting a healthcare business requires navigating complex regulations, securing proper licenses, 
                  structuring compliant operations, protecting intellectual property, and managing relationships with 
                  investors, partners, and providers. The healthcare industry presents unique legal challenges that 
                  differ significantly from other sectors.
                </p>
                <p>
                  Healthcare startups face regulatory requirements from multiple agencies, including FDA approvals for 
                  medical devices, HIPAA compliance for health data, state licensing boards, CMS regulations, and 
                  anti-kickback statutes. Each aspect requires specialized expertise to avoid costly mistakes.
                </p>
                <p>
                  Many healthcare entrepreneurs underestimate the complexity of regulatory compliance, leading to 
                  delays, increased costs, or complete business failure. Proper legal foundation from the start 
                  prevents these pitfalls and positions your venture for sustainable growth.
                </p>
                <p>
                  MednLaw specializes in healthcare startup advisory, providing end-to-end support from entity 
                  formation through funding rounds, product launches, and market expansion. We combine legal expertise 
                  with deep healthcare industry knowledge to guide your venture through every stage of development.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="overflow-hidden h-[450px] flex items-center justify-center">
                <Image 
                  src="/assets/DandC1st.jpg" 
                  alt="Healthcare startup advisory" 
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why MednLaw?</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 text-base">
            MednLaw brings unique expertise at the intersection of healthcare law, business strategy, and startup 
            development. We understand both the legal complexities of healthcare regulation and the practical realities 
            of building a startup. Our team has guided numerous healthcare ventures from concept to successful market 
            entry, helping founders avoid common pitfalls while accelerating growth. We don&apos;t just provide legal 
            advice—we become strategic partners in your success, offering practical guidance that balances compliance 
            requirements with business objectives and growth strategies.
          </p>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            className="flex-shrink-0 w-full md:w-auto"
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

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Personalized Startup Guidance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Customized advisory services tailored to your specific healthcare venture, market, and growth stage.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Comprehensive Legal Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Full-spectrum legal services covering all aspects of healthcare startup formation and operation.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Expert Healthcare Business Consulting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategic business guidance informed by deep healthcare industry knowledge and startup experience.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Trusted Medical Legal Advisory</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reliable counsel on medical-legal issues unique to healthcare startups and emerging companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The MednLaw Approach */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">The MednLaw Approach</h2>
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

      {/* Types of Healthcare Startup Advisory */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Types of Healthcare Startup Advisory
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advisoryTypes.map((advisory, i) => (
              <div
                key={i}
                className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advisory.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{advisory.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empowering Your Healthcare Startup Section */}
      <section className="py-20 px-4 bg-[#17ada1] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image 
              src="/assets/healthcare-startup-2nd.png" 
              alt="Healthcare startup growth" 
              width={500} 
              height={400}
              className="rounded-md w-full h-auto object-cover" 
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Empowering Your Healthcare Startup at Every Stage</h2>
              <div className="space-y-5 text-sm leading-relaxed">
                <p className="text-white/95">
                  Launching a healthcare startup requires more than a great idea—it demands navigating complex 
                  regulations, securing proper licenses, structuring compliant operations, and managing investor 
                  relationships. The healthcare regulatory landscape is unforgiving, and mistakes can be costly or 
                  fatal to your venture.
                </p>
                <p className="text-white/95">
                  MednLaw provides comprehensive startup advisory services that combine legal expertise with business 
                  strategy and healthcare industry knowledge. We guide you through entity formation, regulatory 
                  compliance, fundraising, product development, and market launch—ensuring your foundation is solid 
                  and your growth is sustainable.
                </p>
                <p className="text-white/95">
                  From initial concept to successful scale-up, we serve as your strategic partner and trusted advisor. 
                  Our goal isn&apos;t just legal compliance—it&apos;s helping you build a thriving healthcare business that 
                  delivers value to patients while achieving your entrepreneurial vision.
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
            We are here for you: Every Step of Your Healthcare Journey
          </h2>
          <p className="text-white/95 leading-relaxed text-base mb-10 max-w-3xl mx-auto">
            Whether you need guidance on launching your healthcare startup or scaling your existing venture, 
            MednLaw offers exceptional legal and strategic support so you can focus on innovation and growth. 
            From entity formation to market expansion, we&apos;re here to ensure your success.
          </p>
          <Link href="/contact">
            <button className="bg-white hover:bg-gray-100 text-[#17ada1] px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-xl inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let&apos;s Connect
            </button>
          </Link>
        </div>
      </section>
      <WebsiteFAQ pageUrl="/services/healthcare-startup-advisory" />
      
    </div>
  );
};

export default HealthcareStartupAdvisoryPage;