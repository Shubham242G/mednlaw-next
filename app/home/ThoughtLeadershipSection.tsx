"use client";

import React from "react";
import { motion } from "framer-motion";

const ThoughtLeadershipSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Chief Medical Officer",
      hospital: "Apollo Hospitals",
      text: "MedNLaw's expertise in healthcare compliance and medical negligence defense has been invaluable. Their proactive approach has saved us from numerous legal complications and protected our reputation.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Hospital Administrator",
      hospital: "Fortis Healthcare",
      text: "The strategic guidance we received from MedNLaw transformed how we approach legal matters in healthcare. From licensing renewals to compliance audits, their team is highly professional and responsive.",
      rating: 5,
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      role: "Medical Director",
      hospital: "Max Healthcare",
      text: "Outstanding service. They understand the healthcare sector deeply and provide tailored solutions for complex medico-legal issues. Their defense in our medical negligence case was exceptional.",
      rating: 5,
    },
    {
      id: 4,
      name: "Neha Verma",
      role: "Legal Counsel",
      hospital: "Manipal Hospitals",
      text: "Their understanding of PCPNDT Act compliance, clinical establishment registration, and healthcare regulations is unparalleled. Truly industry leaders in healthcare law.",
      rating: 5,
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      role: "Practice Manager",
      hospital: "Lilavati Hospital",
      text: "Exceptional team that combines legal expertise with deep understanding of healthcare operations. Their support with hospital licensing and renewals has been seamless.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full bg-teal-50 flex justify-center items-center m-0 p-0 overflow-hidden">
      <div className="max-w-7xl w-full px-6 md:px-12 lg:px-16 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Hear what industry leaders have to say about our expertise, commitment, and results-driven approach
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                whileHover={{ y: -6 }}
                className="flex-shrink-0 w-full md:w-96 group"
              >
                <div className="h-full bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-800 text-base leading-relaxed mb-8 flex-grow">
                    “{testimonial.text}”
                  </p>

                  <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-6"></div>

                  <div>
                    <p className="text-gray-900 font-semibold text-base mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-700 text-sm mb-1">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-600 text-sm italic">
                      {testimonial.hospital}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadershipSection;