"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import WebsiteFAQ from "../components/FaqSection";

const ContactUs = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      data-theme="teal"
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden text-[#17ADA1]"
      style={{
        backgroundImage: "url('/assets/contact-bg.jpg')",
      }}
    >
      {/* Top gradient for navbar visibility */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-20" />

      {/* Main gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-[#17ADA1]/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[#3FC6B9] text-sm md:text-base font-light tracking-[0.3em] uppercase mb-4">
            Contact Us
          </p>

          <h2 className="text-[#17ADA1] text-4xl md:text-6xl font-light mb-6">
            Get in Touch
          </h2>

          <p className="text-[#11897F] text-sm md:text-lg font-light max-w-3xl mx-auto leading-relaxed">
            Have questions or need expert assistance? We're here to guide you every step of the way.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-fit mx-auto mt-10 mb-10"
          >
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-[#17ADA1] rounded-lg blur-xl opacity-40 animate-pulse" />
            <button 
              onClick={scrollToForm}
              className="relative bg-transparent border-2 border-[#17ADA1] text-white px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg backdrop-blur-sm hover:bg-[#17ADA1]/20 transition-all duration-300 shadow-lg hover:scale-[1.02] whitespace-nowrap"
            >
              Send a Message
            </button>
          </motion.div>
        </motion.div>

        {/* Contact Form styled as card like service cards */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 max-w-3xl mx-auto"
        >
          <ContactForm />
        </motion.div>
      </div>

            <WebsiteFAQ pageUrl="/contact-us" />
      
    </section>
  );
};

export default ContactUs;