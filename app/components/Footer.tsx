"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-teal-800 to-teal-900 text-white py-20 px-6 md:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 place-items-center md:place-items-start">
          {/* Offices */}
          <div className="max-w-xs">
            <h3 className="text-xl font-semibold mb-6 text-[#17ada1] relative">
              Our Offices
              <span className="block h-[2px] w-12 bg-[#17ada1]/60 mt-2 mx-auto md:mx-0"></span>
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-white/80 text-center md:text-left">
              <li>
                <strong>Delhi Office:</strong><br />
                Plot No. 25, Fourth Floor, Thana Road, Near Chhawla Stand, Najafgarh, New Delhi - 110043
              </li>
              <li>
                <strong>Gurgaon Office:</strong><br />
                412, Emaar Colonnade, Golf Course Extension Road, Sector-66, Gurgaon
              </li>
              {/* <li>
                <strong>Noida Office:</strong><br />
                208-209, Tower-E, Alphathum, Noida-201305
              </li>
              <li>
                <strong>Indore Office:</strong><br />
                205, B-Block, The One, RNT Marg, Near High Court, Indore-452001
              </li> */}
            </ul>
          </div>

          {/* Solutions */}
          <div className="max-w-xs">
            <h3 className="text-xl font-semibold mb-6 text-[#17ada1] relative">
              Solutions
              <span className="block h-[2px] w-12 bg-[#17ada1]/60 mt-2 mx-auto md:mx-0"></span>
            </h3>
            <ul className="space-y-3 text-sm text-white/80 text-center md:text-left">
              <li><Link href="/services/defence-of-medical-negligence-claims" className="hover:text-[#17ada1]">Defence of Medical Negligence</Link></li>
              <li><Link href="/services/compliance-management" className="hover:text-[#17ada1]">Compliance Management</Link></li>
              <li><Link href="/services/labor-law-compliance" className="hover:text-[#17ada1]">Labor Law Compliance</Link></li>
              <li><Link href="/services/licenses-and-renewals" className="hover:text-[#17ada1]">Licenses & Renewals</Link></li>
              <li><Link href="/services/healthcare-startup-advisory" className="hover:text-[#17ada1]">Health Startup Advisory</Link></li>
              <li><Link href="/services/accounting-services#accounting-services" className="hover:text-[#17ada1]">Accounting services</Link></li>
              <li><Link href="/services/intellectual-property-protection" className="hover:text-[#17ada1]">Intellectual Property</Link></li>
              <li><Link href="/services/due-diligence-and-valuation" className="hover:text-[#17ada1]">Due Diligence and Valuation</Link></li>
              <li><Link href="/services/design-and-construction-of-healthcare-facilities" className="hover:text-[#17ada1]">Design and construction of health facilities</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="max-w-xs">
            <h3 className="text-xl font-semibold mb-6 text-[#17ada1] relative">
              Contact Us
              <span className="block h-[2px] w-12 bg-[#17ada1]/60 mt-2 mx-auto md:mx-0"></span>
            </h3>
            <ul className="space-y-3 text-sm text-white/80 text-center md:text-left">
              <li> 
                <a href="tel:8596505338" className="hover:text-[#17ada1]">+91-8596505338</a>
              </li>
              <li>
                <a href="mailto:info@mednlaw.com" className="hover:text-[#17ada1]">info@mednlaw.com</a>
              </li>
              <li className="flex justify-center md:justify-start gap-4 mt-4">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#17ada1]">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://www.instagram.com/official_MednLaw?igsh=MWlza3liMTBpYTNjZA==" target="_blank" rel="noopener noreferrer" className="hover:text-[#17ada1]">
                  <FaInstagram size={20} />
                </a>
                <a href="https://www.facebook.com/share/17Hhe77tao/" target="_blank" rel="noopener noreferrer" className="hover:text-[#17ada1]">
                  <FaFacebook size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/60 tracking-wider">
            © {new Date().getFullYear()} MedNLaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;