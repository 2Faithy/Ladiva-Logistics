import React, { useState } from "react";
import logo from "../images/logo.png";
import { Phone, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md font-['Noto_Sans']">
      <div className="flex items-center justify-between">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-4">
          <div className="w-[42px] h-[42px] p-[1px] bg-gradient-to-b from-[#B21F24] to-[#025E9B] clip-octagon">
            <div className="bg-white w-full h-full flex items-center justify-center clip-octagon">
              <img src={logo} alt="Ladiva Logo" className="w-4/5 h-4/5 object-contain" />
            </div>
          </div>

          <h1
            className="text-[24px] font-semibold leading-[30px] uppercase tracking-[0.014em] text-transparent bg-clip-text"
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

        {/* Hamburger Toggle (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Center + Right: Desktop Nav */}
        <div className="hidden md:flex items-center gap-[140px]">
          {/* Nav Links */}
          <div className="flex items-center gap-[24px] font-['Roboto'] text-[18px] leading-[27px] tracking-[0.0024em]">
            {["/", "/about", "/contact"].map((path, i) => {
              const labels = ["Home", "About Us", "Contact"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `${isActive ? "text-[#1A1A1A] font-semibold" : "text-[#C8C8C8] font-medium"} hover:text-[#1A1A1A] transition duration-200`
                  }
                >
                  {labels[i]}
                </NavLink>
              );
            })}
          </div>

          {/* Get in Touch Button */}
<NavLink
  to="/contact"
  className="p-[1px] rounded-[9999px] bg-gradient-to-r from-[#B21F24] to-[#025E9B] hover:scale-[1.02] transition-transform duration-300"
>
  <div className="group flex items-center gap-2 bg-white text-[#1A1A1A] text-[16px] font-semibold leading-[24px] capitalize tracking-[0.5px] px-[24px] py-[9px] rounded-[9999px] transition duration-300 hover:bg-gradient-to-r hover:from-[#B21F24] hover:to-[#025E9B] hover:text-white">
    <span>get in touch</span>

    <div className="p-[1px] rounded-full bg-gradient-to-b from-[#B21F24] to-[#025E9B]">
      <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full bg-white group-hover:bg-[#1D1D1D] transition duration-300">
        <Phone
          size={14}
          strokeWidth={1.5}
          className="text-[#1D1D1D] group-hover:text-white transition-colors duration-300"
        />
      </div>
    </div>
  </div>
</NavLink>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden font-['Roboto'] text-[18px] tracking-[0.0024em]">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${isActive ? "text-[#1A1A1A] font-semibold" : "text-[#C8C8C8] font-medium"} text-left hover:text-[#1A1A1A] transition duration-200`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Mobile Get in Touch */}
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="p-[1px] rounded-[9999px] bg-gradient-to-r from-[#B21F24] to-[#025E9B] w-fit hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex items-center gap-2 bg-white text-[#1A1A1A] text-[16px] font-semibold leading-[24px] capitalize tracking-[0.5px] px-[24px] py-[9px] rounded-[9999px] hover:shadow-lg transition duration-300">
              <span>get in touch</span>
              <div className="p-[1px] rounded-full bg-gradient-to-b from-[#B21F24] to-[#025E9B]">
                <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full bg-white">
                  <Phone size={14} strokeWidth={1.5} color="#1D1D1D" />
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      )}
    </nav>
  );
}
