"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import WebsiteFAQ from "@/app/components/FaqSection";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { FAQSchema } from "@/app/components/SchemaGenerator";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  Shield, CheckCircle, Users, FileText, Briefcase, 
  Heart, Building, AlertCircle, BookOpen, MessageCircle, 
  TrendingUp, Award, Scale, DollarSign, Calculator,
  PieChart, BarChart3, Clock, Receipt, FileCheck
} from "lucide-react";

interface Partner {
  id: number;
  icon: string;
}

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

const AccountingServicesPage = () => {
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
          `${process.env.NEXT_PUBLIC_API_URL}/api/faq/page/services/accounting-services`
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

  // Card Data for Slide 1 - Key Benefits
  const benefitsCards = [
    { icon: Shield, title: "Legal Compliance", desc: "Our accounting services ensure adherence to Indian tax laws, GST regulations, and financial reporting standards." },
    { icon: CheckCircle, title: "Financial Accuracy", desc: "Accurate financial records are critical for audits and decision-making. Our healthcare accounting services minimize errors and discrepancies." },
    { icon: Clock, title: "Time Efficiency", desc: "Outsourcing to expert accountants for healthcare saves time, allowing you to focus on patient care." },
    { icon: DollarSign, title: "Cost Optimization", desc: "Proper tax filing for doctors and efficient GST filing for hospitals help reduce unnecessary tax burdens." },
    { icon: TrendingUp, title: "Revenue Optimization", desc: "Strategic financial insights help you optimize revenue, control costs, and improve cash flow." },
    { icon: BarChart3, title: "Better Decision Making", desc: "Regular financial reporting provides insights into practice performance, trends, and opportunities." },
  ];

  // Card Data for Slide 2 - Types of Accounting Services
  const serviceTypesCards = [
    { icon: Calculator, title: "Medical Practice Accounting", desc: "Comprehensive financial management tailored to medical practices including bookkeeping, accounts receivable, payroll, and revenue cycle optimization." },
    { icon: PieChart, title: "Healthcare Financial Planning", desc: "Strategic financial planning, budgeting, cash flow management, and financial analysis specific to healthcare operations and growth." },
    { icon: Building, title: "Financial Management for Hospitals", desc: "Large-scale financial operations management including departmental accounting, cost allocation, reimbursement optimization, and compliance reporting." },
    { icon: Briefcase, title: "Healthcare Business Accounting", desc: "Business accounting services for healthcare ventures including startups, specialty practices, and healthcare technology companies." },
    { icon: FileCheck, title: "Financial Compliance and Consulting", desc: "Regulatory compliance support, audit preparation, tax planning, and strategic financial consulting for healthcare organizations." },
    { icon: Receipt, title: "Accounting for Diagnostic Centers", desc: "Specialized financial management for diagnostic centers including revenue tracking, equipment cost management, and compliance with applicable regulations." },
  ];

  // Our Services Grid
  const ourServicesCards = [
    { icon: FileText, title: "Financial Accounting & Bookkeeping", desc: "Our healthcare accounting services include detailed bookkeeping, financial reporting, and expense tracking. Accurate records are essential for compliance and decision-making." },
    { icon: DollarSign, title: "Tax Filing for Doctors", desc: "We provide specialized tax filing for doctors, ensuring compliance with the Income Tax Act, 1961. Our experts handle income computation, deductions, and timely filing to minimize tax liabilities." },
    { icon: Building, title: "GST Filing for Hospitals", desc: "GST compliance is crucial for healthcare institutions. Our GST filing for hospitals services ensure proper classification of taxable and exempt services, accurate returns, and timely submissions as per Indian GST laws." },
    { icon: Calculator, title: "Accounting for Diagnostic Centers", desc: "Diagnostic centers have unique financial workflows. Our accounting for diagnostic centers includes revenue tracking, equipment cost management, and compliance with applicable regulations." },
    { icon: Shield, title: "Compliance & Regulatory Support", desc: "Our healthcare accounting services also cover financial compliance with Indian laws, ensuring that your practice meets all statutory requirements." },
    { icon: TrendingUp, title: "Financial Reporting & Analysis", desc: "Regular financial reporting and analysis providing insights into practice performance, trends, and opportunities for growth." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Healthcare Accounting Services in India | GST & Tax Experts</title>
        <meta name="description" content="Expert healthcare accounting services in India. Tax filing for doctors, GST filing for hospitals & accounting for diagnostic centers. Compliant financial solutions." />
      </Head>

      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      
      {/* Hero Section */}
      <section
        id="accounting-services"
        className="relative w-full min-h-[60vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/assets/services-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight"
          >
            Healthcare Accounting Services in India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-white/90 mt-4 max-w-2xl text-lg md:text-xl"
          >
            Expert tax filing for doctors, GST filing for hospitals & specialized accounting for diagnostic centers
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Link href="/contact">
              <button className="bg-[#17ada1] hover:bg-[#138f85] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                Get Started Today
              </button>
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Schedule a Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* What is Healthcare Accounting Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Healthcare Accounting Services?</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Accounting Services for healthcare providers encompass specialized financial management tailored to the complex regulatory and operational requirements of medical practices. This includes bookkeeping, financial reporting, tax compliance, payroll management, and strategic financial planning.
                </p>
                <p>
                  Healthcare accounting differs significantly from general business accounting due to unique revenue cycles, insurance reimbursement complexities, regulatory compliance requirements, and specific tax considerations. Proper financial management is critical for practice sustainability and growth.
                </p>
                <p>
                  MednLaw provides comprehensive accounting services designed specifically for healthcare providers. We combine financial expertise with deep understanding of medical practice operations, ensuring accurate bookkeeping, timely reporting, tax optimization, and strategic financial guidance.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/assets/accounting-1st.jpg" 
                  alt="Accounting services" 
                  width={600} 
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits - Cards Slider */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Professional Healthcare Accounting Matters</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Generic accounting services often fail to address the unique needs of the healthcare sector. Professional healthcare accounting services help maintain accurate financial records, ensure compliance with Indian tax laws, streamline billing and revenue cycles, and reduce financial risks and penalties.
            </p>
          </motion.div>

          <Slider {...sliderSettings} className="px-4">
            {benefitsCards.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-3"
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-auto">
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-5">
                    <item.icon size={32} className="text-[#17ada1]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Our Comprehensive Accounting Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Healthcare Accounting Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We offer a full range of accounting services designed specifically for healthcare providers across India.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourServicesCards.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-[#17ada1]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Accounting Services - Cards Slider */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Accounting Services We Offer</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our services cover all aspects of healthcare financial management, from basic bookkeeping to strategic planning.</p>
          </motion.div>

          <Slider {...sliderSettings} className="px-4">
            {serviceTypesCards.map((item, index) => (
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

      {/* Tax Filing for Doctors - Detailed Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Understanding Tax Filing for Doctors in India</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Doctors in India must comply with the Income Tax Act, including reporting income from consultations, surgeries, and other services. Our tax filing for doctors services ensure accurate income classification, claiming eligible deductions, timely filing of returns, and compliance with audit requirements.
                </p>
                <p>
                  Professional healthcare accounting services help doctors avoid penalties and optimize tax liabilities. We help you identify eligible deductions under Section 80C, 80D, and other provisions specific to medical professionals.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <h3 className="font-bold text-gray-800 mb-2">Key Tax Benefits for Doctors:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="text-[#17ada1] w-4 h-4 mt-1" /><span className="text-sm">Deduction for professional library expenses</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-[#17ada1] w-4 h-4 mt-1" /><span className="text-sm">Depreciation on medical equipment</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-[#17ada1] w-4 h-4 mt-1" /><span className="text-sm">Rent and staff salary deductions</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-[#17ada1] w-4 h-4 mt-1" /><span className="text-sm">Presumptive taxation scheme (Section 44ADA)</span></li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Building className="text-[#17ada1]" size={32} />
                <h3 className="text-xl font-bold text-gray-900">GST Filing for Hospitals – What You Need to Know</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600 text-sm">
                  While many healthcare services are GST-exempt, certain services and products are taxable. Our GST filing for hospitals includes:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="text-[#17ada1] w-4 h-4 mt-0.5" /><span className="text-sm">Identifying taxable vs exempt services</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-[#17ada1] w-4 h-4 mt-0.5" /><span className="text-sm">Filing monthly and annual GST returns</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-[#17ada1] w-4 h-4 mt-0.5" /><span className="text-sm">Maintaining proper documentation</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-[#17ada1] w-4 h-4 mt-0.5" /><span className="text-sm">Ensuring compliance with GST regulations</span></li>
                </ul>
                <p className="text-gray-600 text-sm mt-3">
                  Expert accountants for healthcare ensure that your hospital remains fully compliant with GST laws while optimizing tax liability.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Needs Healthcare Accounting Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Needs Healthcare Accounting Services?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our healthcare accounting services are ideal for healthcare providers of all sizes, from individual practitioners to large hospital systems.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Users className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Individual Doctors</h3>
              <p className="text-gray-500 text-sm">Private practitioners and consultants</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Building className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Multi-Specialty Hospitals</h3>
              <p className="text-gray-500 text-sm">Large healthcare institutions and hospital chains</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Heart className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Clinics & Nursing Homes</h3>
              <p className="text-gray-500 text-sm">Small and medium-sized healthcare facilities</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white border-2 border-gray-100 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 text-center">
              <Calculator className="text-[#17ada1] w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Diagnostic & Pathology Labs</h3>
              <p className="text-gray-500 text-sm">Diagnostic centers and imaging facilities</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Accounting Process – Structured & Transparent</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We follow a systematic approach to deliver reliable and accurate accounting services for healthcare providers.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "Assessment", desc: "Evaluate your current financial systems and compliance status" },
              { step: "Planning", desc: "Develop a customized financial management strategy" },
              { step: "Implementation", desc: "Manage bookkeeping, tax filing, and GST compliance" },
              { step: "Monitoring", desc: "Continuous monitoring ensures accuracy and compliance" },
              { step: "Reporting", desc: "Provide detailed financial reports for better decision-making" }
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

      {/* Where Healthcare Meets Finance */}
      <section className="py-20 px-4 bg-[#17ada1] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/assets/goals.jpg" 
                  alt="Healthcare meets finance" 
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Where Healthcare Meets Finance</h2>
              <div className="space-y-4 text-white/95">
                <p>
                  Financial management in healthcare is uniquely complex, requiring expertise in both accounting principles and healthcare operations. From insurance reimbursement tracking to regulatory compliance, medical practices face financial challenges that demand specialized knowledge.
                </p>
                <p>
                  MednLaw bridges this gap with comprehensive accounting services designed specifically for healthcare providers. We understand the financial intricacies of medical practices—from revenue cycle management to healthcare-specific tax considerations—and provide accurate, timely financial services that support your operational success.
                </p>
                <p>
                  Our goal goes beyond basic bookkeeping. We provide strategic financial insights that help you optimize revenue, control costs, improve cash flow, and make informed business decisions. Your financial health is foundational to delivering excellent patient care, and we're committed to ensuring that foundation is solid.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose MednLaw */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Why Choose MednLaw for Healthcare Accounting Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 text-base"
          >
            MednLaw brings specialized expertise in healthcare accounting, combining financial acumen with deep understanding of medical practice operations and regulatory requirements. We understand the unique challenges healthcare providers face—from complex insurance reimbursements to healthcare-specific tax considerations. Our team provides accurate, timely financial services while offering strategic guidance that helps you optimize revenue, control costs, and make informed business decisions. We don't just manage your books—we become a trusted financial partner invested in your practice's success and growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#17ada1] hover:bg-[#138f85] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
            >
              Get Expert Accounting Support
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <div className="relative overflow-hidden py-16 bg-gray-50">
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
            Get Expert Healthcare Accounting Services Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 leading-relaxed text-base mb-10 max-w-3xl mx-auto"
          >
            Whether you need tax filing for doctors, GST filing for hospitals, or specialized accounting for diagnostic centers, MednLaw provides reliable and professional support. Partner with expert accountants for healthcare and ensure that your financial systems are efficient, compliant, and future-ready.
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
                Let's Connect
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <WebsiteFAQ pageUrl="/services/accounting-services" />

    </div>
  );
};

export default AccountingServicesPage;