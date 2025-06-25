import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import emailIcon from "../images/email_icon.png";
import phoneIcon from "../images/phone_icon.png";
import instaIcon from "../images/insta.png";
import whatsappIcon from "../images/whatsapp.png";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-[40px] px-[24px] sm:px-[64px]">
      <div className="w-full flex flex-col gap-[16px]">
        {/* Top section */}
        <div className="flex flex-col gap-[24px]">
          <div className="grid sm:flex sm:flex-row sm:gap-[394px] gap-[40px]">
            {/* Left section */}
            <div className="flex flex-col gap-[18px] w-full sm:w-[432px]">
              <div className="flex flex-col gap-[16px] w-full h-auto">
                <div className="flex items-center gap-2 w-full max-w-[272px] h-[42px]">
                  <div className="w-[42px] h-[42px] p-[1px] bg-gradient-to-b from-[#B21F24] to-[#025E9B] clip-octagon">
                    <div className="bg-white w-full h-full flex items-center justify-center clip-octagon">
                      <img src={logo} alt="Ladiva Logo" className="w-4/5 h-4/5 object-contain" />
                    </div>
                  </div>
                  <h1
                    className="text-[24px] font-bold leading-[30px] uppercase tracking-[0.014em] text-transparent bg-clip-text"
                    style={{
                      backgroundImage: "linear-gradient(93.57deg, #B21F24 -6.17%, #025E9B 85.15%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      width: "222px",
                      height: "30px",
                    }}
                  >
                    ladiva logistics
                  </h1>
                </div>
                <p className="text-[#333333] opacity-92 text-[16px] font-normal leading-[24px]">
                  Committed to Excellence in Every Delivery, We Ensure Your Goods
                  Arrive Safely, On Time, and With Care; Every Time, Backed by
                  Trusted Expertise and Unmatched Customer Service.
                </p>
              </div>

{/* Contact Info — Inline Style Like Screenshot */}
<div className="flex flex-wrap gap-x-6 gap-y-4 items-center text-[#333333] text-[12px] font-['Inter']">
  {/* Email */}
  <a href="mailto:help@ladivalogistics.com" className="flex items-center gap-2">
    <img src={emailIcon} alt="Email" className="w-4 h-4 object-contain" />
    help@ladivalogistics.com
  </a>

  {/* Phone */}
  <a href="tel:+2347033517113" className="flex items-center gap-2">
    <img src={phoneIcon} alt="Phone" className="w-4 h-4 object-contain" />
    +2347033517113
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/ladiva_logistics"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    <img src={instaIcon} alt="Instagram" className="w-4 h-4 object-contain" />
    ladiva_logistics
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/2349119318878"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
    +2349119318878
  </a>
</div>
</div>

            {/* Sitemap and Newsletter */}
            <div className="grid sm:flex sm:flex-row gap-[40px] sm:gap-[90px] w-full sm:w-[518px]">
              {/* Sitemap */}
              <div className="flex flex-col gap-[16px] pt-[6px] w-full sm:w-[111px]">
                <h3 className="text-[18px] font-semibold font-['Inter'] text-[#1A1A1A] leading-[24px]">Sitemap</h3>
                <div className="flex flex-col gap-[12px] text-[16px] font-['Roboto'] text-[#2E2E2E] opacity-90">
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <a href="/#services">Services</a>
                  <a href="/#testimonials">Testimonials</a>
                  <Link to="/contact" className="font-['Lato']">Get in Touch</Link>
                </div>
              </div>

              {/* Newsletter */}
              <div className="flex flex-col gap-[28px] w-full sm:w-[312px]">
                <div className="flex flex-col gap-[16px] pt-[6px] w-full max-w-[230px]">
                  <h3 className="text-[18px] font-semibold font-['Inter'] text-[#1A1A1A]">Our Newsletter</h3>
                  <p className="text-[16px] font-normal font-['Roboto'] text-[#2E2E2E]/90">
                    Enter your email address, we will send you more information.
                  </p>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:newsletter@dummyemail.com";
                  }}
                  className="border border-[#3333338F] rounded-[4px] px-[11px] py-[6px] w-full sm:w-[312px]"
                >
                  <div className="flex flex-row justify-between items-center w-full gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="bg-transparent text-[14px] font-['Roboto'] placeholder-[#2E2E2E] focus:outline-none w-full sm:w-auto"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#FF1A1A] to-[#0066FF] text-white font-['Roboto'] font-medium text-[14px] px-[28px] py-[4px] rounded-[2px] w-full sm:w-auto"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Divider line */}
          <hr className="w-full h-[0.24px] border-t border-[#333333]" />
        </div>

        {/* Rights reserved */}
        <p className="text-center text-[12px] text-[#333] opacity-80">© 2025 Ladiva Logistics. All rights reserved.</p>
      </div>
    </footer>
  );
}