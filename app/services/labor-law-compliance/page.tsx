"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Partner {
  id: number;
  icon: string;
}

const LaborLawCompliance = () => {
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
      desc: "Comprehensive assessment of your current labor law compliance status and gap identification.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: "Strategy",
      desc: "Development of customized compliance strategies tailored to your practice's unique needs.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Research",
      desc: "In-depth analysis of applicable federal, state, and local labor regulations.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: "Documentation",
      desc: "Creation and maintenance of required policies, procedures, and employment records.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Implementation",
      desc: "Seamless integration of compliance measures into your daily operations.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Support",
      desc: "Ongoing assistance and updates to ensure continued compliance with evolving regulations.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  const laborLawTypes = [
    {
      title: "Employment Contracts",
      desc: "Properly drafted employment agreements that protect both employer and employee rights while ensuring legal compliance.",
    },
    {
      title: "Wage Regulations",
      desc: "Adherence to minimum wage laws, overtime requirements, and proper classification of employees.",
    },
    {
      title: "Workplace Safety",
      desc: "Implementation of OSHA standards and healthcare-specific safety protocols to protect your staff.",
    },
    {
      title: "Employee Benefits",
      desc: "Compliance with benefits regulations including health insurance, retirement plans, and leave policies.",
    },
    {
      title: "Leave Policies",
      desc: "Management of FMLA, sick leave, vacation time, and other time-off requirements under law.",
    },
    {
      title: "Equal Opportunity",
      desc: "Prevention of discrimination and creation of inclusive workplace policies that comply with civil rights laws.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-[#17ADA1]/30" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Labor Law Compliance
          </h1>
          <p className="text-lg text-white mb-10 leading-relaxed">
            Stay compliant and focus on patient care while we handle complex labor regulations.
            From employment contracts to workplace safety, we ensure your practice meets all
            legal requirements and maintains a fair work environment for your team.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-fit mx-auto"
          >
            {/* Glow */}
            <div className="absolute -inset-2 bg-[#17ADA1] rounded-lg blur-xl opacity-40 animate-pulse" />

            <Link href="/contact">
              <button className="relative bg-transparent border-2 border-[#17ADA1] text-white px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg backdrop-blur-sm hover:bg-[#17ADA1]/20 transition-all duration-300 shadow-lg hover:scale-[1.02] whitespace-nowrap">
                Get Started Today
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why MednLaw Content Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Understanding Labor Law Compliance
              </h2>
              <div className="space-y-4 leading-relaxed text-sm">
                <p>
                  Labor laws are designed to protect both hiring entities and employees while ensuring fair treatment.
                  These laws cover everything from minimum wage and overtime pay to workplace safety standards. All
                  states have laws on the books that impose workplace safety requirements and prohibit employment
                  discrimination.
                </p>
                <p>
                  However, navigating labor laws can be complicated, especially when federal and state laws differ.
                  Healthcare practices face unique challenges including compliance with clinical staff regulations,
                  credentialing requirements, and healthcare-specific employment laws.
                </p>
                <p>
                  Many small businesses and medical practices don't have internal HR departments or dedicated compliance
                  teams. MednLaw simplifies labor law compliance so they can focus on providing excellent care and
                  building their business.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="overflow-hidden h-[450px] flex items-center justify-center">
                <Image 
                  src="/assets/labor-law-banner.jpg" 
                  alt="Labor law compliance" 
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
            Labor laws protect your practice and employees. We navigate federal and state requirements, from wage
            regulations to anti-discrimination policies. Trusted labor specialists provide expert guidance so you
            can focus on patient care while staying compliant with evolving laws.
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
              <h3 className="text-lg font-bold text-gray-900 mb-3">Trusted Advisory</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert guidance on labor law compliance and best practices tailored to healthcare organizations.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Healthcare Labor Expertise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Specialized knowledge in healthcare-specific labor regulations and requirements.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Proactive Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Stay ahead of regulatory changes with proactive monitoring and timely updates.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Respectful Labor Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ensure dignified treatment of all employees while maintaining legal compliance.
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

      {/* Types of Labor Law Compliances */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Types of Labor Law Compliances
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laborLawTypes.map((law, i) => (
              <div
                key={i}
                className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{law.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{law.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguarding Section */}
      <section className="py-20 px-4 bg-[#17ada1] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="h-96 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-8">
                <Image
                  src="/assets/healthcare-2nd.jpg"
                  alt="Healthcare Facility"
                  width={500}
                  height={400}
                  className="rounded-md w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Safeguarding Those Who Care for Others</h2>
              <div className="space-y-5 text-sm leading-relaxed">
                <p className="text-white/95">
                  Healthcare providers dedicate their lives to caring for patients. They deserve workplaces that honor
                  their commitment through fair treatment, safe conditions, and legal protection.
                </p>
                <p className="text-white/95">
                  MednLaw ensures that your practice complies with labor laws while fostering a positive work environment.
                  We help you navigate complex regulations so you can focus on what matters most: delivering exceptional
                  patient care.
                </p>
                <p className="text-white/95">
                  From preventing workplace discrimination to ensuring proper wage practices, we safeguard both your
                  practice and your employees.
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
            We are here for you: Every Step of Your Healthcare Compliance Journey
          </h2>
          <p className="text-white/95 leading-relaxed text-base mb-10 max-w-3xl mx-auto">
            Whether you need guidance on structuring healthcare compliance or updating your forms, MednLaw offers
            exceptional legal support so you can focus on patient care. From HIPAA requirements to labor law compliance,
            we're here to protect you.
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
    </div>
  );
};

export default LaborLawCompliance;