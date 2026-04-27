"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Service {
  name: string;
  path: string;
}

const services: Service[] = [
  { name: "Defence of Medical Negligence Claims", path: "/services/defence-of-medical-negligence-claims" },
  { name: "Labor Law Compliance", path: "/services/labor-law-compliance" },
  { name: "Due Diligence and Valuation", path: "/services/due-diligence-and-valuation" },
  { name: "Design and Construction of Healthcare Facilities", path: "/services/design-and-construction-of-healthcare-facilities" },
  { name: "Intellectual Property Protection", path: "/services/intellectual-property-protection" },
  { name: "Compliance Management", path: "/services/compliance-management" },
  { name: "Licenses & Renewals", path: "/services/licenses-and-renewals" },
  { name: "Accounting Services", path: "/services/accounting-services" },
  { name: "Healthcare Startup Advisory", path: "/services/healthcare-startup-advisory" },
];

// Fix: Properly type the variants with correct easing
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 0.6, 
      ease: "easeOut" as const  // Add 'as const' to fix the type
    },
  }),
};

const ServicesSection = () => {
  const router = useRouter();

  const handleCardClick = (path: string) => {
    router.push(path);
  };

  return (
    <section
      data-theme="teal"
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden text-[#17ADA1]"
      style={{
        backgroundImage: "url('/assets/services.jpg')",
      }}
    >
      {/* Top gradient for navbar visibility */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-20" />

      {/* Main gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-[#17ADA1]/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[#3FC6B9] text-sm md:text-base font-light tracking-[0.3em] uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-[#17ADA1] text-4xl md:text-6xl font-light mb-8">
            Expert legal support for every need
          </h2>

          {/* CTA BUTTON BELOW TITLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-fit mx-auto mb-10"
          >
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-[#17ADA1] rounded-lg blur-xl opacity-40 animate-pulse" />
            <Link href="/contact-us">
              <button className="relative bg-transparent border-2 border-[#17ADA1] text-white px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg backdrop-blur-sm hover:bg-[#17ADA1]/20 transition-all duration-300 shadow-lg hover:scale-[1.02] whitespace-nowrap">
                Get Started Today
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid of Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(23, 173, 161, 0.3)",
              }}
              viewport={{ once: true }}
              onClick={() => handleCardClick(service.path)}
              className="cursor-pointer bg-white/80 backdrop-blur-md border border-[#17ADA1]/20 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:border-[#17ADA1]/60 group"
            >
              <h3 className="text-[#17ADA1] text-xl font-semibold mb-3 group-hover:text-[#11897F] transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-[#11897F] text-sm font-light leading-relaxed mb-6">
                Professional legal representation and guidance in {service.name.toLowerCase()} cases.
              </p>
              <div className="flex items-center text-[#17ADA1] group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-light tracking-wider">READ MORE</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;