"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const IntroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Changed to 0-based index

  const slides = [
    {
      id: 1,
      image: "/assets/banner1.png",
      title: "Life is waiting. Let's start your next chapter",
      subtitle: "Comprehensive Care and Support for Mental Health and Substance Abuse",
    },
    {
      id: 2,
      image: "/assets/banner2.png",
      title: "Protecting Doctors, and Hospitals.",
      subtitle: "Total Compliance for Indian Healthcare.",
    },
    {
      id: 3,
      image: "/assets/PCPNDT.jpg",
      title: "From PCPNDT compliance to Clinical Trials.",
      subtitle: "We Decipher India's Healthcare Regulations for You",
    },
    {
      id: 4,
      image: "/assets/Stethescope.png",
      title: "Renew. Comply. Operate.",
      subtitle: "Your Trusted License Renewal Partner.",
    },
    {
      id: 5,
      image: "/assets/banner3.jpg",
      title: "Medical Negligence Defense.",
      subtitle: "Specialized in Indian Healthcare Law.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const textVariants = {
    enter: {
      y: 50,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -50,
      opacity: 0,
    },
  };

  return (
    <section className="relative w-full h-screen text-white overflow-hidden">
      {/* Background Image */}
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${slides[currentSlide].image}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </AnimatePresence>

      {/* Gradient Overlay - Enhanced for mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent md:via-black/50" />

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#17ADA1] transition-colors" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#17ADA1] transition-colors" />
      </button>

      {/* Content Container */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center md:justify-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 w-full pb-6 sm:pb-10 md:pb-16 lg:pb-20">
          {/* Bottom Content */}
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 sm:gap-8 md:gap-8">
            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${currentSlide}`}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="w-full md:w-3/5"
              >
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight tracking-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    lineHeight: '1.2',
                  }}
                >
                  {slides[currentSlide].title}
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* Divider Line */}
            <div className="hidden md:block w-1 h-24 lg:h-32 bg-white flex-shrink-0" />

            {/* Subtitle + CTA */}
            <div className="w-full md:w-2/5 flex flex-col justify-end space-y-4 sm:space-y-5 md:space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`subtitle-${currentSlide}`}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white/95">
                    {slides[currentSlide].subtitle}
                  </h2>
                </motion.div>
              </AnimatePresence>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative w-full sm:w-auto"
              >
                <div className="absolute -inset-1 sm:-inset-1.5 md:-inset-2 bg-[#17ADA1] rounded-lg blur-lg md:blur-xl opacity-40 animate-pulse" />
                <Link href="/contact">
                  <button className="relative w-full sm:w-auto bg-transparent border-2 border-[#17ADA1] text-white px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-3.5 lg:px-10 lg:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg backdrop-blur-sm hover:bg-[#17ADA1]/20 transition-all duration-300 shadow-lg hover:scale-[1.02]">
                    Get Started Today
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
};

export default IntroSection;