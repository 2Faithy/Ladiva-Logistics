// Same imports
import React from "react";
import background_hero from "../images/background_hero.jpg";
import hero_img from "../images/hero_img.png";
import founder_img from "../images/founder_img.png";
import map from "../images/map.png";
import vector4 from "../images/vector4.png";
import phone from "../images/phone.png";

// ✔️ Get_In_Touch
export function Get_In_Touch() {
  return (
    <section className="w-screen bg-white pt-[80px] pb-8 flex justify-start items-center">
      <div className="w-full px-[24px] sm:px-[64px] flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-[84px]">
        {/* Heading & Subheading */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[36px] w-full sm:w-[908px] h-auto sm:h-[84px] items-start sm:items-center">
          <h2 className="text-[#1A1A1A] font-['Outfit'] font-medium text-[24px] sm:text-[32px] leading-[32px] sm:leading-[41.6px] w-full sm:w-[399px]">
            Let’s Move Your Business Forward
          </h2>
          <p className="text-[#333333] opacity-94 font-['Inter'] font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] w-full sm:w-[473px]">
            Take the next step with trusted logistics that drive growth and deliver results; partner with us today.
          </p>
        </div>

        {/* Vector + Button */}
        <div className="flex flex-row items-center justify-between w-full sm:w-[351.68px]">
          <img
            src={vector4}
            alt="Vector"
            className="w-[96.68px] h-[15.77px] opacity-60"
          />
          <button
            className="flex flex-row items-center gap-[6px] px-[18px] py-[8px] h-[40px] rounded-full ml-auto shadow-md"
            style={{
              background: "linear-gradient(106.69deg, #B21F24 -15.52%, #025E9B 130.42%)",
              boxShadow: "0px 6px 14px 0px #8888881F",
            }}
            onClick={() => {
              window.location.href = "#contact";
            }}
          >
            <span className="text-white font-['Manrope'] font-semibold text-[14px] leading-[20px] tracking-[0.5px] capitalize">
              get in touch
            </span>
            <div className="w-[20px] h-[20px] flex justify-center items-center rounded-full p-[4px]">
              <div className="w-[12px] h-[12px] flex justify-center items-center">
                <img
                  src={phone}
                  alt="Phone Icon"
                  className="w-[9px] h-[8.5px]"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}


// ✔️ InfoItem
const InfoItem = ({ text }) => (
  <div className="flex items-center gap-[4px] min-w-[162px]">
    <div className="flex items-center justify-center w-[24px] h-[24px]">
      <div className="relative w-[18px] h-[18px] bg-[#007500] rounded-full">
        <svg
          viewBox="0 0 10 7"
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "9px",
            height: "6.34px",
          }}
        >
          <path
            d="M1 3.5L4 6L9 1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
    <span className="text-[#333] text-[14px] font-inter whitespace-nowrap">{text}</span>
  </div>
);

// ✔️ Main About Component
export default function About() {
  return (
    <div className="overflow-x-hidden w-screen bg-[#f5f5f5]">
      {/* HERO SECTION */}
      <div
        className="relative w-full bg-cover bg-center pt-[80px] pb-[140px]"
        style={{ backgroundImage: `url(${background_hero})` }}
      >
        <div className="absolute inset-0 bg-[#02021CF0] opacity-95 z-0" />
        <div className="relative z-10 w-full max-w-[1448px] mx-auto px-4">
          <div className="flex flex-col gap-[12px] max-w-[1174px] ml-2">
            <div className="inline-flex items-center gap-[4px]">
              <span className="w-[4px] h-[4px] bg-[#CC0000] rounded-full inline-block" />
              <span className="uppercase tracking-[0.014em] text-[12px] font-medium font-inter text-white">
                LOGISTICS EXPERT
              </span>
            </div>
            <h1 className="text-white font-semibold font-gabarito text-[36px] sm:text-[56px] leading-[46px] sm:leading-[67.2px]">
              Behind Every Delivery Is a Team That Cares
            </h1>
            <p className="text-[#A6ADB5] font-inter text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] opacity-95">
              We’re more than a logistics company; we’re a dedicated team focused on delivering excellence,
              building trust, and supporting your business every step of the way.
            </p>
          </div>

          <div className="w-full max-w-[1237px] h-[250px] sm:h-[365px] mt-[40px] mx-auto rounded-[16px] overflow-hidden shadow relative">
            <div className="absolute inset-0 bg-black opacity-40 z-10 rounded-[16px]" />
            <img src={hero_img} alt="Team" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="relative z-20 -mt-[60px] w-full flex justify-center px-4">
        <div className="w-full max-w-[1237px] bg-white rounded-[16px] shadow border-b border-gray-200 px-4 md:px-6 py-10">
          <div className="flex flex-col gap-[32px]">
            <p className="font-inter text-[#333333] text-[18px] leading-[27px] capitalize opacity-95">
              Ladiva Logistics is a forward-thinking logistics company dedicated to delivering reliable,
              efficient, and customer-centered services. With a focus on innovation, timeliness, and safety,
              we help businesses thrive by ensuring seamless supply chain and delivery processes.
            </p>

            <div className="w-full flex flex-wrap justify-start gap-x-[0px] gap-y-[16px] opacity-90 mb-[0px] mt-[19px]">
              {[
                { label: "Experience", value: "4 Years" },
                { label: "Clients", value: "200+" },
                { label: "Support", value: "24/7" },
                { label: "On-Time Delivery", value: "100%" },
                { label: "International Shipping", value: "5 Countries" },
                { label: "Warehousing Facilities", value: "100% Safe & Monitored" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center pl-[8px] border-r border-[#e6e6e6] pr-[16px]"
                  style={{ minWidth: "150px", height: "50px" }}
                >
                  <span className="font-inter font-medium text-[#333] text-[24px] leading-[100%]">{item.value}</span>
                  <span className="font-inter text-[#333] text-[14px] leading-[100%] whitespace-nowrap">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center flex-wrap gap-4 mt-[-20px]">
              <div className="flex flex-wrap gap-[16px]">
                {[
                  "Always‑On Support",
                  "Real‑Time Tracking",
                  "Seamless Coordination",
                  "On‑Time Delivery",
                  "Transparent Pricing",
                  "Efficient Logistics",
                ].map((text, i) => (
                  <InfoItem key={i} text={text} />
                ))}
              </div>

              <div className="ml-auto">
                <button
                  onClick={() => window.location.href = "/contact"}
                  className="flex items-center gap-[10px] rounded-full px-[8px] py-[10px] text-white font-medium text-[14px] font-inter mt-4 sm:mt-[-75px]"
                  style={{
                    background: "linear-gradient(106.69deg, #B21F24 -15.52%, #025E9B 130.42%)",
                    boxShadow: "0px 8px 18px 0px #8888881F",
                  }}
                >
                  <span>Get in Touch</span>
                  <div className="flex items-center justify-center rounded-full" style={{ width: "24px", height: "12px", padding: "5px", backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <svg width="10.5" height="9.92" viewBox="0 0 10.5 9.92" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.805 1.58C1.058 0.958 1.84 0.838 2.25 1.33L3.345 2.625C3.678 3.033 3.58 3.63 3.135 3.89C2.718 4.132 2.503 4.535 2.56 4.965C2.7 6.02 3.48 6.78 4.537 6.923C4.965 6.98 5.37 6.767 5.612 6.348C5.87 5.905 6.468 5.805 6.877 6.137L8.172 7.232C8.665 7.642 8.545 8.424 7.922 8.678C6.79 9.141 4.26 9.407 2.265 7.37C0.208 5.273 0.461 2.773 0.805 1.58Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🧑‍💼 FOUNDER SECTION */}
      <div className="w-full flex flex-col lg:flex-row justify-center px-4 mt-[80px] gap-[32px]">
        <img src={founder_img} alt="Founder" className="w-full max-w-[547px] h-auto lg:h-[476px] rounded-[16px] object-cover" />
        <div className="flex flex-col w-full lg:w-[648px] h-auto gap-[24px] mt-[20px]">
          <div className="flex flex-col gap-[16px] mt-[40px]">
            <div className="inline-flex items-center gap-[4px]">
              <span className="w-[4px] h-[4px] bg-[#FF1A1A] rounded-full inline-block" />
              <span className="text-[#0066FF] font-inter font-medium text-[12px] uppercase tracking-[0.014em]">
                OUR FOUNDER
              </span>
            </div>
            <h2 className="font-outfit font-medium text-[28px] sm:text-[40px] leading-[36px] sm:leading-[52px] text-[#1A1A1A]">
              Meet the Vision Behind Ladiva
            </h2>
            <p className="font-inter text-[16px] font-normal text-[#333333] leading-[24px] opacity-94">
              "At Ladiva Logistics, our journey began with a simple vision — to redefine reliability in logistics. As the founder, I believed businesses deserved more than just delivery; they deserved a trusted partner. With dedication, innovation, and an unshakable focus on customer satisfaction, we’ve grown into a company that businesses rely on locally and internationally. Every milestone we reach is powered by a passionate team and a clear mission: to move our clients forward with excellence, every step of the way."
            </p>
          </div>
          <div className="flex flex-col gap-[8px] w-[145px] h-[48px]">
            <span className="text-[#000] font-outfit text-[20px] font-medium leading-[100%]">Oni Ladi Victoria</span>
            <span className="text-[#000] font-inter text-[12px] font-normal leading-[100%]">C.E.O Ladiva Logistics</span>
          </div>
        </div>
      </div>

      {/* 📍 LOCATION SECTION */}
      <div className="w-full flex flex-col lg:flex-row justify-center px-4 mt-[64px] gap-[32px]">
        <div className="flex flex-col w-full lg:w-[508px] h-auto gap-[24px] mt-[20px]">
          <div className="inline-flex items-center gap-[4px]">
            <span className="w-[4px] h-[4px] bg-[#FF1A1A] rounded-full inline-block" />
            <span className="text-[#0066FF] font-inter font-medium text-[12px] tracking-[0.014em] uppercase">
              OUR LOCATION
            </span>
          </div>
          <h2 className="text-[#1A1A1A] font-outfit font-medium text-[28px] sm:text-[40px] leading-[36px] sm:leading-[52px]">
            We’re Closer Than You Think
          </h2>
          <p className="text-[#333333] font-inter text-[16px] leading-[24px] opacity-90">
            7a, Ekhi Close, Valley Estate by MRS Filling Station, Cement Bus Stop, Idi Mangoro, Ikeja, Lagos.
          </p>
        </div>
        <div className="w-full lg:w-[638px] h-[280px] sm:h-[372px] rounded-[16px] overflow-hidden">
          <img src={map} alt="Map" className="w-full h-full object-cover" />
        </div>
      </div>
      <Get_In_Touch />
    </div>
  );
}
