"use client";

import React from "react";
import { CheckCircle, Shield, Users, Scale, Search, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Partner {
  id: number;
  icon: string;
}

const DefenceAgainstMedicalNegligence = () => {
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

  const whyMednLawFeatures = [
    { icon: Shield, title: "Expert Legal Defense", desc: "Specialized healthcare defense from experienced legal professionals." },
    { icon: Users, title: "Comprehensive Support", desc: "End-to-end assistance throughout the entire legal process." },
    { icon: CheckCircle, title: "Safeguarding Your Reputation", desc: "Protecting your professional standing and credibility." },
    { icon: Scale, title: "Proven Track Record", desc: "Successful defense of healthcare providers nationwide." },
  ];

  const approachSteps = [
    {
      title: "Prevention",
      desc: "Proactive strategies to minimize risk and prevent negligence claims before they arise.",
      icon: Shield
    },
    {
      title: "Strategy",
      desc: "Customized defense strategies tailored to the specific circumstances of your case.",
      icon: Scale
    },
    {
      title: "Research",
      desc: "Thorough investigation and medical expert consultation to build a strong defense.",
      icon: Search
    },
    {
      title: "Support",
      desc: "Continuous guidance and emotional support throughout the legal proceedings.",
      icon: Users
    },
    {
      title: "Communication",
      desc: "Clear, transparent communication keeping you informed at every stage.",
      icon: MessageCircle
    },
    {
      title: "Collaboration",
      desc: "Working closely with medical experts and your team to ensure comprehensive defense.",
      icon: CheckCircle
    },
  ];

  const claimTypes = [
    "Misdiagnosis or Delayed Diagnosis",
    "Surgical Errors",
    "Medication Mistakes",
    "Birth Injuries",
    "Failure to Treat",
    "Anesthesia Errors",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden pt-28 pb-20 px-4"
        style={{
          backgroundImage: "url('/assets/steptodown.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Defense Against Medical Negligence
          </h1>

          <p className="text-lg text-white mb-10 leading-relaxed">
            We offer personalized support and expert legal defense for medical professionals facing medical negligence claims.
          </p>
          <Link href="/contact">
            <button className="bg-[#0f766e] hover:bg-[#0d9488] text-white px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
              Let's Connect
            </button>
          </Link>
        </div>
      </section>

      {/* What are Medical Negligence Claims */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What are Medical Negligence Claims?
              </h2>
              <div className="space-y-4 leading-relaxed text-sm">
                <p>
                  A medical negligence claim arises when a patient believes a healthcare provider's treatment fell below acceptable standards, causing injury or harm.
                  These claims can be complex, involving medical, ethical, and legal aspects.
                </p>
                <p>
                  At MednLaw, we help doctors, hospitals, and healthcare providers
                  defend themselves against false or exaggerated allegations, ensuring their professional reputation remains protected.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="overflow-hidden h-[450px] flex items-center justify-center">
                <Image 
                  src="/assets/services-banner.jpg" 
                  alt="Medical negligence defense" 
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
            Facing medical negligence claims can drain time, money, and confidence. MednLaw provides expert defense, compassionate support, and a proven record
            in protecting healthcare professionals across India.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyMednLawFeatures.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-teal-600" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The MednLaw Approach */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            The MednLaw Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachSteps.map(({ title, desc, icon: Icon }, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="text-teal-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Claims */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Types of Medical Negligence Claims
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {claimTypes.map((claim, i) => (
              <div
                key={i}
                className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900">{claim}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Defending Every Claim Section */}
      <section className="py-20 px-4 bg-[#17ada1] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image 
              src="/assets/medical-malpractice.jpg" 
              alt="Medical malpractice defense" 
              width={500} 
              height={400}
              className="rounded-md w-full h-auto object-cover" 
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                MednLaw Defending Every Claim, Every Step
              </h2>
              <div className="space-y-5 text-sm leading-relaxed">
                <p className="text-white/95">
                  Medical negligence claims can be devastating to healthcare professionals, affecting not only their practice but their personal lives and professional reputation.
                </p>
                <p className="text-white/95">
                  Our expert legal team offers comprehensive defense against all types of medical negligence claims. We understand the medical, legal, and ethical complexities involved and provide strategic defense tailored to your specific situation.
                </p>
                <p className="text-white/95">
                  Protect your practice, preserve your reputation, and ensure peace of mind with MednLaw by your side through every stage of the legal process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#17ada1] to-[#138f85] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We are here for you: Every Step of Your Healthcare Defense Journey
          </h2>
          <p className="text-white/95 leading-relaxed text-base mb-10 max-w-3xl mx-auto">
            Whether you're facing a medical negligence claim or need proactive risk management guidance, MednLaw offers exceptional legal support so you can focus on patient care. From initial consultation to case resolution, we're here to protect your practice and ensure peace of mind.
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
              className="w-full md:w-auto group relative px-8 md:px-12 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 overflow-hidden"
            >
              <span className="bg-white hover:bg-gray-100 text-[#17ada1] px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-xl inline-flex items-center">
                Schedule a call
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DefenceAgainstMedicalNegligence;