"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle, Shield, Users, Scale, Search, MessageCircle, FileText, Gavel, Briefcase, Heart, Stethoscope, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WebsiteFAQ from "@/app/components/FaqSection";
import Head from "next/head";
import { FAQSchema } from "../../components/SchemaGenerator";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/faq/page/services/defence-of-medical-negligence-claims`
        );
        setFaqs(response.data.faqs || []);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };
    fetchFAQs();
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+919266877793";
    const message = "Hi, I'm interested in learning more about your legal services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Card Data for Slide 1 - Why Choose MednLaw
  const whyMednLawCards = [
    { icon: Shield, title: "Expert Legal Defense", desc: "Specialized healthcare defense from experienced legal professionals who understand medical complexities." },
    { icon: Users, title: "Comprehensive Support", desc: "End-to-end assistance throughout the entire legal process, from initial consultation to final resolution." },
    { icon: CheckCircle, title: "Safeguarding Reputation", desc: "Protecting your professional standing and credibility with strategic, evidence-based defense." },
    { icon: Scale, title: "Proven Track Record", desc: "Successful defense of healthcare providers nationwide with a history of favorable outcomes." },
    { icon: FileText, title: "Medical Evidence Experts", desc: "Expert analysis of medical records, treatment protocols, and clinical standards." },
    { icon: Gavel, title: "Courtroom Excellence", desc: "Strong representation before consumer courts, civil courts, and higher judiciary." },
  ];

  // Card Data for Slide 2 - Types of Cases
  const caseTypesCards = [
    { icon: AlertCircle, title: "Misdiagnosis or Delayed Diagnosis", desc: "When a condition is incorrectly diagnosed or identified too late, leading to patient harm." },
    { icon: Stethoscope, title: "Surgical Errors", desc: "Complications arising from surgical procedures including wrong-site surgery or retained instruments." },
    { icon: Heart, title: "Medication Mistakes", desc: "Incorrect prescription, dosage, or administration of drugs causing adverse effects." },
    { icon: Users, title: "Birth Injuries", desc: "Negligence during pregnancy, labor, or delivery resulting in harm to mother or child." },
    { icon: AlertCircle, title: "Failure to Treat", desc: "Inadequate or delayed medical intervention that worsens patient condition." },
    { icon: Shield, title: "Anesthesia Errors", desc: "Mistakes in administration or monitoring of anesthesia during procedures." },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const legalRemedies = [
    "Monetary compensation for damages",
    "Refund of medical expenses",
    "Compensation for mental agony",
    "Disciplinary action against the doctor",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Medical Negligence Lawyers in India | Expert Legal Defense for Doctors & Patients</title>
        <meta name="description" content="Expert medical negligence lawyers in India. Specialized legal defense for doctors, hospitals & patients. Strategic medico-legal representation in consumer courts." />
      </Head>
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}      
      
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Expert Medical Negligence Lawyers in India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Specialized Legal Defense for Doctors & Healthcare Professionals
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <button className="bg-[#17ada1] hover:bg-[#138f85] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                Get Legal Help Today
              </button>
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              WhatsApp Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* What is Medical Negligence Under Indian Law */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Medical Negligence Under Indian Law?</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Medical negligence refers to a situation where a healthcare professional fails to provide the standard level of care expected, resulting in harm to the patient. Under Indian law, medical negligence is governed by principles established through the Consumer Protection Act, tort law, and various judicial precedents.
                </p>
                <p>
                  To establish medical negligence, the following must be proven: <strong className="font-semibold">Duty of care</strong> owed by the doctor, <strong className="font-semibold">Breach</strong> of that duty, <strong className="font-semibold">Direct causation</strong> of harm, and <strong className="font-semibold">Resulting damages</strong>.
                </p>
                <p>
                  Our medical negligence lawyers analyze every element carefully to build a strong legal strategy, whether defending a doctor or representing an affected patient.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/assets/services-banner.jpg" 
                  alt="Medical negligence defense" 
                  width={600} 
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need a Medical Negligence Lawyer - Cards Slider */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why You Need a Medical Negligence Lawyer</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Handling a medical negligence case without expert legal support can be risky. These cases involve technical medical evidence, expert testimonies, and complex legal arguments.
            </p>
          </motion.div>

          <Slider {...sliderSettings} className="px-4">
            {whyMednLawCards.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-3"
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-80 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-5">
                      <item.icon size={32} className="text-[#17ada1]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-[#17ada1] text-sm flex items-center gap-1">
                      Learn more <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Our Services as Medical Negligence Lawyers */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services as Medical Negligence Lawyers</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">At MednLaw, we provide comprehensive legal solutions for all types of medical negligence matters. Our medical negligence attorneys offer end-to-end support tailored to each case.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="text-[#17ada1]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Defense for Doctors & Hospitals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We specialize in defending healthcare professionals against medical negligence allegations. Our medical negligence lawyers focus on protecting your license, reputation, and practice.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="text-[#17ada1]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Representation for Patients</h3>
              <p className="text-gray-600 text-sm leading-relaxed">If you have suffered due to medical negligence, our medical negligence attorneys help you pursue rightful compensation through legal channels.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="text-[#17ada1]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medico-Legal Advisory</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our medical negligence lawyers provide preventive legal advice to doctors and hospitals to minimize risks and ensure compliance with Indian laws.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Gavel className="text-[#17ada1]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consumer Court Representation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Most medical negligence cases in India are filed under consumer law. Our medical negligence attorney team has extensive experience handling such cases effectively.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types of Medical Negligence Cases - Slider */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Medical Negligence Cases We Handle</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our medical negligence lawyers have expertise across a wide range of cases, each requiring a tailored legal approach.</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-4">
            {caseTypesCards.map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-auto">
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                    <item.icon size={28} className="text-[#17ada1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Our Legal Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Legal Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We follow a structured and result-driven approach to every medical negligence case.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "Case Evaluation", desc: "Our medical negligence lawyers conduct a detailed analysis of medical records and legal aspects." },
              { step: "Evidence Collection", desc: "We collaborate with medical experts to assess whether medical negligence occurred." },
              { step: "Legal Strategy", desc: "Our medical negligence attorney team builds a strong case strategy based on facts and precedents." },
              { step: "Representation", desc: "We represent clients before consumer courts, civil courts, and higher judicial authorities." },
              { step: "Resolution", desc: "Our goal is to achieve the best possible outcome—whether dismissal of claims or fair compensation." }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-[#17ada1] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.step}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Remedies Section */}
      <section className="py-20 px-4 bg-[#17ada1] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/assets/medical-malpractice.jpg" 
                  alt="Medical malpractice defense" 
                  width={500} 
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover" 
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Legal Remedies in Medical Negligence Cases</h2>
              <p className="text-white/95 mb-4">Under Indian law, victims of medical negligence can seek:</p>
              <ul className="space-y-3 mb-6">
                {legalRemedies.map((remedy, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={20} className="text-white" />
                    <span>{remedy}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-white/95">
                Similarly, doctors accused of medical negligence can defend themselves by proving adherence to standard medical practices. Our medical negligence lawyers ensure that every legal remedy is explored and applied effectively. Protect your practice, preserve your reputation, and ensure peace of mind with MednLaw by your side through every stage of the legal process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose MednLaw */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Why Choose MednLaw – Best Lawyers for Medical Negligence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 text-base"
          >
            Choosing the right legal partner can make all the difference in a medical negligence case. MednLaw stands among the best lawyers for medical negligence in India due to specialized expertise in medico-legal cases, strong understanding of Indian healthcare laws, proven track record in handling complex cases, strategic and evidence-based legal approach, and dedicated support for both doctors and patients. Our medical negligence lawyers are committed to delivering professional, ethical, and result-oriented legal services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0 w-full md:w-auto"
          >
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#17ada1] hover:bg-[#138f85] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
            >
              Schedule a call
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <div className="relative overflow-hidden py-16 bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-10">Trusted By Leading Healthcare Institutions</h2>
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Consult the Best Medical Negligence Lawyers Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 leading-relaxed text-base mb-10 max-w-3xl mx-auto"
          >
            Whether you are a healthcare professional facing allegations or a patient seeking justice, timely legal intervention is crucial. Working with experienced medical negligence lawyers ensures that your case is handled with precision and care. MednLaw is trusted as one of the best medical negligence law firms in India, offering expert legal solutions tailored to your needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact">
              <button className="bg-white hover:bg-gray-100 text-[#17ada1] px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-2">
                <MessageCircle size={20} />
                Schedule a Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <WebsiteFAQ pageUrl="/services/defence-of-medical-negligence-claims" />
      
    </div>
  );
};

export default DefenceAgainstMedicalNegligence;