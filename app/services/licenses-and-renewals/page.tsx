"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Partner {
  id: number;
  icon: string;
}

const LicensesRenewalsPage = () => {
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
      desc: "Comprehensive review of your current licensing status, requirements, and upcoming renewal deadlines across all jurisdictions.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: "Planning",
      desc: "Development of a customized licensing calendar and renewal timeline to ensure proactive management of all deadlines.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Documentation",
      desc: "Preparation and organization of all required documentation, applications, and supporting materials for submission.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Communication",
      desc: "Direct liaison with licensing boards, regulatory agencies, and certification bodies on your behalf.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: "Submission",
      desc: "Timely submission of all applications and renewals with verification of receipt and tracking of processing status.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Support",
      desc: "Ongoing monitoring, reminder notifications, and continuous support for all licensing and renewal needs.",
      icon: (
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  const licenseTypes = [
    {
      title: "Healthcare Facility Licensing",
      desc: "Obtaining and maintaining facility permits for hospitals, clinics, surgical centers, and other healthcare establishments across multiple jurisdictions.",
    },
    {
      title: "Hospital Licensing and Renewal",
      desc: "Comprehensive support for hospital licensure including initial certification, periodic surveys, and timely renewals to maintain accreditation.",
    },
    {
      title: "Professional License Renewal",
      desc: "Management of individual provider license renewals including physicians, nurses, and allied health professionals across all practice states.",
    },
    {
      title: "Specialty Healthcare Licensing",
      desc: "Specialized licensing for controlled substance registration, laboratory certification, imaging facilities, and specialty-specific authorizations.",
    },
    {
      title: "Licensing Compliance Audits",
      desc: "Regular review of all licenses and certifications to ensure continuing compliance with requirements and identification of renewal needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-[#17ADA1]/30"></div>

        {/* Content above overlay */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Licenses & Renewals
          </h1>
          <p className="text-lg text-white mb-10 leading-relaxed">
            We provide comprehensive support for obtaining and renewing healthcare licenses, ensuring your practice
            remains compliant with all regulatory requirements and operates without interruption.
          </p>
          <Link href="/contact">
            <button className="relative bg-transparent border-2 border-[#17ADA1] text-white px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg backdrop-blur-sm hover:bg-[#17ADA1]/20 transition-all duration-300 shadow-lg hover:scale-[1.02] whitespace-nowrap">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

      {/* What is Licenses & Renewals Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is Licenses & Renewals?
              </h2>
              <div className="space-y-4 leading-relaxed text-sm">
                <p>
                  Licenses & Renewals encompass the complex process of obtaining, maintaining, and renewing the 
                  various permits, certifications, and authorizations required to operate a healthcare practice 
                  legally. This includes professional licenses, facility permits, DEA registrations, and specialty 
                  certifications.
                </p>
                <p>
                  Healthcare providers must navigate a maze of federal, state, and local licensing requirements, 
                  each with specific documentation, fees, continuing education mandates, and renewal deadlines. 
                  Missing a deadline or filing incomplete paperwork can result in practice disruptions, fines, or 
                  loss of authorization to provide care.
                </p>
                <p>
                  The licensing landscape varies significantly by state, practice type, and specialization. 
                  Requirements frequently change, and staying current requires constant vigilance. From initial 
                  application through ongoing renewals, the process demands attention to detail and understanding 
                  of regulatory nuances.
                </p>
                <p>
                  Many practitioners struggle to keep track of multiple licenses across different jurisdictions, 
                  each with unique requirements and timelines. The administrative burden of maintaining compliance 
                  takes valuable time away from patient care and practice management.
                </p>
                <p>
                  MednLaw streamlines the entire licensing lifecycle, from initial applications through timely 
                  renewals. We track deadlines, manage documentation, ensure continuing education compliance, and 
                  handle all interactions with licensing boards, allowing you to focus on practicing medicine.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="overflow-hidden h-[450px] flex items-center justify-center">
                <Image 
                  src="/assets/liscence-1st.jpg" 
                  alt="Licenses and renewals" 
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
            MednLaw specializes in healthcare licensing and renewals, bringing deep expertise in navigating the complex 
            regulatory landscape across multiple jurisdictions. We understand the unique requirements for different 
            practice types, specialties, and facility licenses. Our systematic approach ensures no deadline is missed, 
            no requirement overlooked, and no practice disruption occurs. From initial licensure through ongoing 
            renewals and expansion into new states, we provide comprehensive support that gives you peace of mind and 
            allows you to focus entirely on patient care.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-fit mx-auto"
          >
            <div className="absolute -inset-2 bg-[#17ADA1] rounded-lg blur-xl opacity-40 animate-pulse" />

            <Link href="/contact">
              <button className="relative bg-transparent border-2 border-[#17ADA1] text-white px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg backdrop-blur-sm hover:bg-[#17ADA1]/20 transition-all duration-300 shadow-lg hover:scale-[1.02] whitespace-nowrap">
                Get Started Today
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Expertise in Healthcare Licensing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Specialized knowledge of healthcare licensing requirements across all practice types and jurisdictions.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Seamless License Renewal Process</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Streamlined renewal management ensuring timely completion and uninterrupted practice authorization.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tailored Compliance Solutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Customized licensing strategies addressing your specific practice structure and growth plans.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Trusted Support for Professionals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reliable guidance and advocacy throughout the entire licensing and renewal lifecycle.
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

      {/* Types of Licenses & Renewals */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Types of Licenses & Renewals
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {licenseTypes.map((license, i) => (
              <div
                key={i}
                className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{license.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{license.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Licensing Partner Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Your Licensing Partner, Every Step Of The Way
              </h2>

              <div className="space-y-5 text-sm leading-relaxed">
                <p className="text-white/95">
                  Healthcare licensing is complex, time-consuming, and critical to your ability to practice. Missing 
                  a renewal deadline or filing incomplete documentation can halt operations, jeopardize revenue, and 
                  damage your professional reputation.
                </p>
                <p className="text-white/95">
                  MednLaw takes the burden off your shoulders with comprehensive licensing management services. We 
                  track every license, monitor every deadline, and handle every submission—ensuring your practice 
                  maintains uninterrupted authorization to provide care.
                </p>
                <p className="text-white/95">
                  From initial licensure through multi-state expansion and ongoing renewals, we serve as your 
                  dedicated licensing partner. Our systematic approach, regulatory expertise, and proactive 
                  communication give you confidence that your credentials are always current and compliant.
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
            Whether you need initial licensing support or ongoing renewal management, MednLaw offers exceptional 
            legal support so you can focus on patient care. From tracking deadlines to handling submissions, 
            we&apos;re here to ensure your practice stays fully licensed and compliant.
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

export default LicensesRenewalsPage;