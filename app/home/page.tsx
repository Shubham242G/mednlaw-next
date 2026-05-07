"use client";

import React from "react";
import IntroSection from "../home/IntroSection";
import ExpertiseSection from "../home/ExpertiseSection";
import PeopleSection from "../home/PeopleSection";
import ThoughtLeadershipSection from "../home/ThoughtLeadershipSection";
import ContactForm from "../home/Contact";
import WebsiteFAQ from "../components/FaqSection";
import Head from "next/head";
import { LegalServiceSchema, OrganizationSchema } from "../components/SchemaGenerator";

export default function Home() {
  return (
    <div className="bg-[#f5f1ed]">
      <Head>
        <title>MednLaw - Healthcare Legal Experts in Delhi NCR</title>
        <meta name="description" content="Expert legal services for healthcare providers in Delhi NCR. Medical negligence defense, compliance, licensing & more." />
        <meta name="google-site-verification" content="UX8PHtSwh0ghmi3cwchZeRG7nZklamcOmyG7wIvR5dw" />
      </Head>
      
      {/* Add Schema Components */}
      <LegalServiceSchema />
      <OrganizationSchema />
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