"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const PeopleSection = () => {
  return (
    <section className="w-full bg-teal-50 flex justify-center items-center m-0 p-0 overflow-hidden">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center py-20 px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="relative w-full h-auto aspect-[4/3]">
            <Image
              src="/assets/the_team.jpg"
              alt="MednLaw Healthcare Law Specialists Team"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-900"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Healthcare Law Specialists
          </h2>

          <p className="text-gray-700 mb-6 text-lg font-medium">
            We are here for you
          </p>

          <p className="text-gray-800 leading-relaxed text-base md:text-[17px] border-t border-gray-300 pt-4">
            Whether you need guidance in navigating healthcare compliance, defending against medical negligence claims, or steering clear of legal complexities, our experienced medico-legal experts will provide end-to-end support, offering you the peace of mind you deserve.
          </p>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0 w-full md:w-auto"
          >
            <Link href="/about-us#founder">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="w-full mt-8 md:w-auto bg-[#17ADA1] text-white px-8 md:px-12 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#14968C]"
              >
                <span className="relative">Meet Our Legal Experts</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PeopleSection;