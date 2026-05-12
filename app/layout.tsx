import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBot from "./components/bot/bot";
import Script from "next/script";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MedNLaw - Healthcare Legal Experts in Delhi NCR",
  description: "Expert legal services for healthcare providers in Delhi NCR. Medical negligence defense, compliance, licensing & more.",
};

export default function RootLayout({
  children,
}:Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
       <head>
        {/* Google Site Verification - Add directly to head */}
        <meta 
          name="google-site-verification" 
          content="UX8PHtSwh0ghmi3cwchZeRG7nZklamcOmyG7wIvR5dw" 
        />
      </head>

      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GM2JMHWYB5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GM2JMHWYB5');
          `}
        </Script>
      <body className="min-h-full">
        <div className="flex flex-col">
          <Navbar />
            {children}
            <ChatBot/>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
