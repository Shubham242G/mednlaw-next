"use client";

import React from "react";
import IntroSection from "../home/IntroSection";
import ExpertiseSection from "../home/ExpertiseSection";
import PeopleSection from "../home/PeopleSection";
import ThoughtLeadershipSection from "../home/ThoughtLeadershipSection";
import ContactForm from "../home/Contact";
import WebsiteFAQ from "../components/FaqSection";

export default function Home() {
  return (
    <div className="bg-[#f5f1ed]">
      {/* Intro Section */}
      <section className="bg-[#17ada1]">
        <IntroSection />
      </section>

      {/* Expertise Section */}
      <section className="bg-teal-200">
        <ExpertiseSection />
      </section>

      {/* People Section */}
      <section className="bg-teal-200">
        <PeopleSection />
      </section>

      {/* Thought Leadership Section */}
      <section className="bg-teal-200">
        <ThoughtLeadershipSection />
      </section>

      {/* Contact Section */}
      <section className="bg-teal-200">
        <ContactForm />
      </section>

       {/* FAQ Section - ADD THIS AT THE END */}
      <WebsiteFAQ pageUrl="/" />
    
    </div>
  );
}