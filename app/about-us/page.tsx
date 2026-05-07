"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import WebsiteFAQ from "../components/FaqSection";

// Add type for the count up hook parameters
const useCountUp = (end: number, duration: number = 1500) => {
  const [count, setCount] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }, [pathname]);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

// Add interface for StatItem props
interface StatItemProps {
  number: number;
  symbol: string;
  label: string;
}

const StatItem = ({ number, symbol, label }: StatItemProps) => {
  const count = useCountUp(number);

  return (
    <div className="transform hover:scale-105 transition">
      <div className="text-5xl md:text-6xl font-bold text-[#17ADA1] mb-3">
        {count}{symbol}
      </div>
      <div className="text-gray-600 text-lg font-medium">
        {label}
      </div>
    </div>
  );
};

// Add interface for team member
interface TeamMember {
  name: string;
  role: string;
  image: string;
  intro: string;
}

const AboutUs = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Anusha Girish",
      role: "Legal associate",
      image: "/assets/anusha.jpg",
      intro:
        "Distinguished advocate with a sharp legal mind and strong commitment to justice. Graduated from Delhi University with an LLB, he fiercely advocates for clients' rights, earning a reputation as a formidable legal expert",
    },
    {
      name: "Laxman Kumar",
      role: "Legal associate",
      image: "/assets/laxman.jpg",
      intro:
        "Commercial Litigation Specialist - With a sharp legal mind and a strong commitment to justice. He graduated from Delhi University with an LLB and is a dedicated advocate for his clients' rights in the courtroom. His relentless pursuit of favorable outcomes for his clients has earned him a reputation as a formidable legal advocate.",
    },
  ];

  // Add interface for value items
  interface ValueItem {
    title: string;
    desc: string;
    icon: React.ReactNode;
  }

  const values: ValueItem[] = [
    {
      title: "Integrity",
      desc: "We uphold the highest ethical standards — ensuring transparency, honesty, and accountability in all we do.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
    {
      title: "Innovation",
      desc: "We embrace modern strategies and medical insights to deliver forward-thinking and effective solutions.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      ),
    },
    {
      title: "Compassion",
      desc: "We approach every case with empathy, respect, and genuine care — understanding the human side of every story.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* HERO SECTION */}
      <section
        className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 md:px-12 overflow-hidden bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/assets/aboutUs.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.2),_transparent_70%)]" />

        <div className="relative z-10 max-w-5xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight drop-shadow-md">
            About <span className="text-white/90">MedNLaw</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Bridging the gap between medical expertise and legal excellence
            building a transparent, ethical, and safer healthcare ecosystem.
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-24 px-6 md:px-16 bg-[#f9fbfa]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-playfair">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
            At MedNLaw, we empower clients through knowledge, compassion, and professionalism.
            We bring clarity to cases where medicine meets law — ensuring every right is protected
            and every voice is heard.
          </p>
        </div>
      </section>

      {/* VISION & VALUES */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 font-playfair">
            Our Vision & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#f9fbfa] p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#17ADA1]/20 to-[#17ADA1]/40 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg
                    className="w-8 h-8 text-[#17ADA1]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {value.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGACY SECTION */}
      <section className="py-24 px-6 md:px-16 bg-[#f9fbfa]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-playfair">
              Our Legacy
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Founded with a vision to unite medicine and law, MedNLaw has
                represented hundreds of clients across complex medico-legal
                issues.
              </p>
              <p>
                We've built lasting trust with healthcare professionals,
                institutions, and patients navigating the intricate intersection
                of medicine and legal regulation.
              </p>
              <p>
                Our legacy stands on unwavering integrity, innovation, and a
                measurable impact in healthcare law.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/the_team.jpg"
              alt="MednLaw Team"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            <p className="text-[#17ADA1] font-semibold text-lg mt-5 text-center">
              Building Healthcare Excellence
            </p>
          </div>
        </div>

        {/* Founder */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center lg:gap-16 gap-10 mb-20 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[45%]"
          >
            <Image
              src="/assets/founder.webp"
              alt="Founder"
              width={500}
              height={420}
              className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[55%]"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Meet Our Founder
            </h2>
            <h4 className="text-xl font-semibold text-[#0d7c72] mb-3">
              Gaurav Sharma
            </h4>
            <p className="text-gray-600 leading-relaxed text-lg">
              Gaurav Sharma, Mednlaw's founder, blends Law (Delhi University) and Healthcare Management (IIM Calcutta). Driven by purpose, he offers compassionate legal support in Healthcare Law, prioritizing the emotional well-being and professional protection of medical providers. His expertise ensures transparency and ethical navigation of complex regulatory challenges in the healthcare ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Team title */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Meet Our Team
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Our experts bring together years of legal & medical experience to
            support healthcare professionals with excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="max-w-6xl mx-auto px-2 md:px-6 flex justify-start md:justify-center gap-2 md:gap-4">
          {teamMembers.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            >
              <Image
                src={m.image}
                alt={m.name}
                width={400}
                height={360}
                className="w-full h-[360px] object-cover transform group-hover:scale-105 transition-all duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-1">{m.name}</h3>
                <p className="text-sm text-teal-300 font-medium mb-3">{m.role}</p>
                <p className="text-sm leading-relaxed">{m.intro}</p>
              </div>

              {/* Name below image */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 group-hover:opacity-0 transition duration-300">
                <h3 className="text-lg font-bold">{m.name}</h3>
                <span className="text-sm text-teal-300">{m.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 md:px-16 bg-white border-t border-gray-100 bg-gradient-to-b from-white via-white/80 to-[#17ADA1]/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          <StatItem number={500} symbol="+" label="Clients Served" />
          <StatItem number={17} symbol="+" label="Years Experience" />
          <StatItem number={98} symbol="%" label="Success Rate" />
          <StatItem number={50} symbol="+" label="Healthcare Partners" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#17ADA1] to-[#138f85] text-white text-center">
        <Link href="/contact-us">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Ready to Work With Us?
            </h2>
            <p className="text-lg md:text-xl mb-10 leading-relaxed text-white/90">
              Whether you seek expert medico-legal guidance or collaboration,
              we're here to help you navigate every challenge with clarity and
              care.
            </p>
            <button className="bg-white text-[#17ADA1] font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center text-base">
              Contact Us Today
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </Link>
      </section>

            <WebsiteFAQ pageUrl="/about-us" />
      
    </div>
  );
};

export default AboutUs;