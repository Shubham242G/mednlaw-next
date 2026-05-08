"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ExpertiseSection = () => {
  const services = [
    {
      id: 1,
      title: "Medical Negligence Legal Services",
      icon: "/assets/1st-layout.png",
      gradient: "from-[#17ADA1] to-[#14968C]",
      accentColor: "from-gray-500/20 to-transparent",
      description:
        "Expert legal defense for doctors, hospitals, and healthcare institutions facing medical negligence claims. Our experienced medical negligence attorneys provide strategic representation before consumer courts, civil courts, and higher judiciary.",
    },
    {
      id: 2,
      title: "Healthcare Compliance Management",
      icon: "/assets/2nd-layout.png",
      gradient: "from-[#17ADA1] to-[#14968C]",
      accentColor: "from-gray-500/20 to-transparent",
      description:
        "Comprehensive compliance management solutions for hospitals, clinics, and healthcare providers. We ensure adherence to Clinical Establishments Act, Biomedical Waste Management Rules, and all regulatory requirements.",
    },
    {
      id: 3,
      title: "Strategic Legal Advisory",
      icon: "/assets/3rd-layout.png",
      gradient: "from-[#17ADA1] to-[#14968C]",
      accentColor: "from-gray-500/20 to-transparent",
      description:
        "Our healthcare startup advisory and strategic consulting ensure your business navigates legal complexities with ease. We provide actionable insights, plans, and strategies to help you navigate India's complex healthcare regulatory framework.",
    },
  ];

  const partners = [
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

  return (
    <div className="w-full bg-teal-50">
      {/* Section 1: CTA Section */}
      <section className="w-full min-h-[30vh] flex items-center justify-center px-6 md:px-12 lg:px-16 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 1200 400">
            <defs>
              <pattern id="grid1" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#17ADA1" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="1200" height="400" fill="url(#grid1)" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-block text-[#17ADA1] font-semibold text-sm tracking-widest uppercase mb-2"
              >
                Protect Your Practice
              </motion.span>

              <h2
                className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mt-3 mb-6 overflow-hidden"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: '1.2',
                  maxHeight: '3.6em',
                }}
              >
                Medical negligence cases in India are rising rapidly. With over 5.2 million medical malpractice cases filed annually, proactive legal compliance is your only defense.
              </h2>
            </motion.div>

            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block w-1 h-48 origin-top bg-gradient-to-b from-[#17ADA1] via-[#4ECDC4] to-transparent flex-shrink-0"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex-shrink-0 w-full md:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleWhatsAppClick}
                className="w-full md:w-auto group relative bg-gradient-to-r from-[#17ADA1] to-[#14968C] text-white px-8 md:px-12 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#14968C] to-[#0d7c72] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative">Get Started Today</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-10 left-1/4 w-96 h-96 bg-[#17ADA1]/10 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#4ECDC4]/10 rounded-full blur-3xl"
          ></motion.div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block px-5 py-2.5 bg-[#17ADA1]/10 backdrop-blur-md rounded-full text-[#17ADA1] text-xs font-semibold tracking-widest uppercase mb-6 border border-[#17ADA1]/20 hover:bg-[#17ADA1]/15 transition-colors"
            >
              Our Core Competencies
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Expert Solutions for Healthcare Excellence
            </h2>
            <p className="text-gray-700 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
              Comprehensive legal and strategic expertise tailored for modern healthcare providers across India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -12 }}
                className="group relative h-full flex"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div
                  className={`relative bg-gradient-to-br ${service.gradient} rounded-2xl p-8 md:p-10 lg:p-12 min-h-[580px] h-full flex flex-col border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-300 backdrop-blur-sm`}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accentColor} opacity-40`}
                  ></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="mb-8 flex justify-center"
                    >
                      <div className="relative w-32 h-32 md:w-36 md:h-36">
                        <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative w-full h-full">
                          <Image
                            src={service.icon}
                            alt={service.title}
                            fill
                            className="object-contain drop-shadow-lg"
                            sizes="(max-width: 768px) 128px, 144px"
                          />
                        </div>
                      </div>
                    </motion.div>

                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                        {service.title}
                      </h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                        className="h-1.5 bg-gradient-to-r from-white/60 to-white/20 rounded-full"
                      ></motion.div>
                    </div>

                    <p className="text-white/95 leading-relaxed text-base flex-grow mb-6">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-14 md:mt-20">
            <Link href="/contact">
              <button className="
                relative
                bg-[#17ADA1]
                border-2 border-[#17ADA1] 
                text-white
                px-10 sm:px-14 md:px-16 
                py-4 sm:py-4.5
                rounded-xl
                font-semibold
                text-base sm:text-lg md:text-xl
                backdrop-blur-md
                transition-all duration-300
                hover:bg-[#17ADA1]/15
                hover:border-[#17ADA1]/80
                hover:shadow-[0_0_18px_rgba(23,173,161,0.5)]
                hover:scale-[1.03]
                tracking-wide
              ">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Trusted by Leading Healthcare Providers
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Partnering with industry leaders to deliver excellence in healthcare legal services
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
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
                    <div className="relative w-48 h-24">
                      <Image
                        src={partner.icon}
                        alt={`Partner ${partner.id}`}
                        fill
                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        sizes="192px"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertiseSection;