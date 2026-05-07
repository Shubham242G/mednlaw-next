import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface FAQ {
  _id: string;
  question: string;
  answer: string;
  order: number;
}

interface WebsiteFAQProps {
  pageUrl: string; // Pass the current page URL
}

export default function WebsiteFAQ({ pageUrl }: WebsiteFAQProps) {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFAQs();
  }, [pageUrl]);

  const fetchFAQs = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/faq/page/${encodeURIComponent(pageUrl)}`);
      setFaqs(response.data.faqs || []);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return null;
  if (faqs.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className="text-2xl text-[#c48e53]">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="p-6 pt-0 border-t">
                  <div 
                    className="text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}