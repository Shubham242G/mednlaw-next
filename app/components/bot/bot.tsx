"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './bot.css';

interface Answers {
  name?: string;
  email?: string;
  service?: string;
}

interface Question {
  id: number;
  text: string;
  type: "text" | "email" | "select";
  key: keyof Answers;
  options?: string[];
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const questions: Question[] = [
    { id: 1, text: "Hi! What's your name?", type: "text", key: "name" },
    { id: 2, text: "What's your email address?", type: "email", key: "email" },
    {
      id: 3,
      text: "How can we help you?",
      type: "select",
      key: "service",
      options: [
        "Defence of Medical Negligence claims",
        "Labor Law Compliance",
        "Due Diligence and valuation",
        "Design and construction of healthcare facilities",
        "Intellectual property protection",
        "Compliance Management",
        "Licenses & Renewals",
        "Accounting Services",
        "Healthcare startup advisory"
      ],
    },
  ];

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("am1VZPuktoi7yeO5J");
  }, []);

  const sendEmail = useCallback(() => {
    if (answers.name && answers.email && answers.service) {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_kranxad';
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_2gdcgwl';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'am1VZPuktoi7yeO5J';

      emailjs.send(
        serviceID,
        templateID,
        {
          name: answers.name,
          email: answers.email,
          service: answers.service
        },
        publicKey
      ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
    }
  }, [answers]);

  useEffect(() => {
    if (Object.keys(answers).length === questions.length) {
      sendEmail();
    }
  }, [answers, questions.length, sendEmail]);

  const handleAnswer = (answer: string) => {
    const q = questions[currentQuestion];
    if (!q) return;
    
    setAnswers(prevAnswers => ({ ...prevAnswers, [q.key]: answer }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowWhatsApp(true);
    }
  };

  const goBack = () => {
    if (showWhatsApp) {
      setShowWhatsApp(false);
      return;
    }
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleWhatsAppRedirect = () => {
    const msg = `Hi, here are my details:\nName: ${answers.name || 'N/A'}\nEmail: ${answers.email || 'N/A'}\nService: ${answers.service || 'N/A'}`;
    window.open(`https://wa.me/+919266877793?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const resetChat = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowWhatsApp(false);
  };

  const renderQuestion = () => {
    if (showWhatsApp) {
      return (
        <div className="bot-whatsapp-screen">
          <h3 className="bot-title">✅ Thank you!</h3>
          <p className="bot-sub">Let's continue this conversation on WhatsApp for a quicker response.</p>
          <button className="bot-btn-primary" onClick={handleWhatsAppRedirect}>💬 Open WhatsApp</button>
          <button className="bot-btn-secondary" onClick={goBack}>← Back</button>
          <button className="bot-btn-outline" onClick={resetChat}>🔄 Restart</button>
        </div>
      );
    }
      
    const q = questions[currentQuestion];
    if (!q) return null;

    return (
      <div className="bot-question-block">
        <div className="bot-question">{q.text}</div>
        <div className="bot-step">Question {currentQuestion + 1} of {questions.length}</div>

        {q.type !== "select" ? (
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const inputValue = formData.get('answer') as string;
            if (inputValue?.trim()) {
              handleAnswer(inputValue.trim());
            }
          }}>
            <input
              name="answer"
              type={q.type}
              className="bot-input"
              placeholder={`Enter your ${q.key}`}
              defaultValue={answers[q.key] || ""}
              autoFocus
              required
            />
          </form>
        ) : (
          <div className="bot-options">
            {q.options?.map((o, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(o)}
                className={`bot-option-btn ${answers[q.key] === o ? "active" : ""}`}
              >
                {o}
              </button>
            ))}
          </div>
        )}

        {currentQuestion > 0 && <button className="bot-back" onClick={goBack}>← Back</button>}
      </div>
    );
  };

  return (
    <div className="chatbot-fixed">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="bot-window"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bot-header">
              <span>🩺 MediLaw Assistant</span>
              <button className="bot-close" onClick={() => setIsOpen(false)}>✕</button>
            </div>
            <div className="bot-body">{renderQuestion()}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        className="bot-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        💬
      </motion.button>
    </div>
  );
};

export default ChatBot;