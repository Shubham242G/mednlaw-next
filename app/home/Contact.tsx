"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface EmailJSResponse {
  status: number;
  text: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_wfincci";
    const templateID = "contact_form";
    const publicKey = "am1VZPuktoi7yeO5J";

    // Convert FormData to Record<string, unknown> for EmailJS
    const templateParams: Record<string, unknown> = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response: EmailJSResponse) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        
        // Hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((err: Error) => {
        console.log("FAILED...", err);
        alert("Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center px-5 py-20 relative overflow-hidden">
      <div className="absolute inset-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 sm:p-12 md:p-16 relative z-10 border border-white/30"
      >
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-[#17ada1] text-xs font-bold tracking-[0.3em] uppercase mb-4"
          >
            Contact mednlaw
          </motion.span>
          <h2 
            className="text-[#17ada1] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's discuss your healthcare legal needs
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        {/* Success message */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg"
          >
            <p className="text-green-700 text-center font-medium">
              ✅ Your message has been sent successfully! We'll get back to you soon.
            </p>
          </motion.div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input 
              type="text"
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              placeholder="Full Name *"
              className="px-5 py-3.5 border-2 border-gray-300 rounded-lg text-base focus:border-[#17ada1] focus:outline-none transition-colors"
              disabled={loading}
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="Email *"
              className="px-5 py-3.5 border-2 border-gray-300 rounded-lg text-base focus:border-[#17ada1] focus:outline-none transition-colors"
              disabled={loading}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input 
              type="tel"
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="Phone"
              className="px-5 py-3.5 border-2 border-gray-300 rounded-lg text-base focus:border-[#17ada1] focus:outline-none transition-colors"
              disabled={loading}
            />
            <input 
              type="text"
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              placeholder="Subject *" 
              required
              className="px-5 py-3.5 border-2 border-gray-300 rounded-lg text-base focus:border-[#17ada1] focus:outline-none transition-colors"
              disabled={loading}
            />
          </div>

          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            rows={6}
            placeholder="Tell us more about your inquiry..."
            className="w-full px-5 py-3.5 border-2 border-gray-300 rounded-lg mb-6 focus:border-[#17ada1] focus:outline-none transition-colors resize-none"
            disabled={loading}
          />

          <motion.button 
            type="submit" 
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.05 }} 
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className={`w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#17ADA1] to-[#14968C] text-white font-bold rounded-lg shadow-lg transition-all duration-300 ${
              loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "SEND MESSAGE →"
            )}
          </motion.button>

          <p className="text-gray-500 text-xs mt-6 text-center">
            We respond within 24 hours. For urgent issues, call +91 98765 43210
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;