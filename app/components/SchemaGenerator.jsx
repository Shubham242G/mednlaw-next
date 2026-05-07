"use client";

import Script from "next/script";

// FAQ Schema Component
export const FAQSchema = ({ faqs }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
};

// Blog Schema Component
export const BlogSchema = ({ blog }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.summary || blog.seoMetaDescription,
    "image": blog.images?.[0] || "https://www.mednlaw.in/default-blog-image.jpg",
    "author": {
      "@type": "Organization",
      "name": "MednLaw"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MednLaw",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mednlaw.in/logo.png"
      }
    },
    "datePublished": blog.date || blog.createdAt,
    "dateModified": blog.updatedAt || blog.date || blog.createdAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.mednlaw.in/blog/${blog.slug}`
    }
  };

  return (
    <Script
      id="blog-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
};

// LegalService Schema (for Homepage)
export const LegalServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "MednLaw",
    "image": "https://www.mednlaw.in/_next/image?url=%2Fassets%2Fwhite.png&w=640&q=75",
    "@id": "https://www.mednlaw.in",
    "url": "https://www.mednlaw.in",
    "telephone": "+91-8595650338",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 25, Fourth Floor, Thana Road, Near Chhawla Stand, Najafgarh",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110043",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "19:00"
    },
    "areaServed": [
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Noida" },
      { "@type": "City", "name": "Gurgaon" }
    ],
    "sameAs": [
      "https://www.facebook.com/mednlaw.official",
      "https://www.instagram.com/official_MednLaw"
    ]
  };

  return (
    <Script
      id="legal-service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
};

// Organization Schema (for Homepage - can be combined with LegalService)
export const OrganizationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MednLaw",
    "url": "https://www.mednlaw.in",
    "logo": "https://www.mednlaw.in/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8595650338",
      "contactType": "customer support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/mednlaw.official",
      "https://www.instagram.com/official_MednLaw"
    ]
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
};