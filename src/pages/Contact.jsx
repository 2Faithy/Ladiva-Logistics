import React from "react";
import contactImg from "../images/contact_img.png";
import map from "../images/map.png";
import vector4 from "../images/vector4.png";
import phone from "../images/phone.png";

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


export default function ContactSection() {
  return (
    <>
      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="w-screen min-h-[1300px] sm:min-h-[1000px] md:min-h-[1200px] lg:min-h-[1100px] relative overflow-hidden rounded-t-[20px] sm:rounded-t-[24px] md:rounded-t-[28px] bg-cover bg-center"
        style={{ backgroundColor: "#02021C" }}
      >
        <div className="absolute inset-0 bg-[#02021C]/95 rounded-t-[20px] sm:rounded-t-[24px] md:rounded-t-[28px] z-0" />

        <div className="relative z-10 w-full px-[24px] sm:px-[32px] py-[40px] flex justify-center items-center">
          <div className="w-full max-w-[1448px] mx-auto flex flex-col lg:flex-row justify-center gap-[40px] items-center lg:items-start">
            {/* Form */}
            <div className="bg-[#FEFEFE] w-full max-w-[659px] rounded-[8px] p-[24px] sm:p-[32px] flex flex-col gap-[48px] sm:gap-[80px]">
              <div className="flex flex-col gap-[16px]">
                <h2 className="text-[#1A1A1A] text-[28px] sm:text-[40px] font-[500] leading-[36px] sm:leading-[52px] font-['Outfit']">
                  How Can We Help?
                </h2>
                <p className="text-[#333333] opacity-80 text-[14px] sm:text-[16px] font-[500] leading-[22px] sm:leading-[25.6px] font-['Inter']">
                  We’re here to assist with your logistics needs; whether it’s a
                  question, support request, or service inquiry. Reach out and our
                  team will get back to you promptly.
                </p>
              </div>

              <form className="flex flex-col gap-[40px] sm:gap-[52px]">
                <div className="flex flex-col gap-[20px] sm:gap-[24px]">
                  {/* Full Name */}
                  <div className="flex flex-col gap-[12px] sm:gap-[16px]">
                    <label className="text-[#0E0E0E] text-[16px] font-[600] font-['Inter']">
                      Full Name:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full h-[42px] px-[23px] py-[13px] text-[14px] font-[700] font-['Inter'] bg-white border border-[#3333338F] rounded-[4px] shadow-md placeholder-[#C8C8C8]"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-[12px] sm:gap-[16px]">
                    <label className="text-[#0E0E0E] text-[16px] font-[600] font-['Inter']">
                      Email Address:
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full h-[42px] px-[23px] py-[13px] text-[14px] font-[700] font-['Inter'] bg-white border border-[#3333338F] rounded-[4px] shadow-md placeholder-[#C8C8C8]"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-[12px] sm:gap-[16px]">
                    <label className="text-[#0E0E0E] text-[16px] font-[600] font-['Inter']">
                      Message:
                    </label>
                    <textarea
                      placeholder="Leave us a message.."
                      className="w-full h-[144px] px-[23px] py-[13px] text-[14px] font-[700] font-['Inter'] bg-white border border-[#3333338F] rounded-[4px] shadow-md placeholder-[#C8C8C8] resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center gap-[8px]">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-[16px] h-[16px] accent-[#031A09]"
                  />
                  <label
                    htmlFor="terms"
                    className="text-[#666666] text-[9.42px] font-[700] font-['Inter'] leading-[13.2px]"
                  >
                    I agree to the Terms and conditions
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full h-[48px] flex items-center justify-center gap-[8px] rounded-[4px] px-[10px] py-[12px] bg-gradient-to-r from-[#FF1A1A] to-[#0066FF] text-white font-['Manrope'] font-[600] text-[16px] leading-[24px] shadow-md"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Image */}
            <div className="w-full max-w-[661px] h-[400px] sm:h-[600px] lg:h-[882px] rounded-[8px] overflow-hidden flex items-center justify-center">
              <img
                src={contactImg}
                alt="Contact"
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 📍 LOCATION SECTION */}
<section className="w-full flex justify-center px-4 mt-[64px]">
  <div className="flex flex-col lg:flex-row w-full max-w-[1249px] gap-[40px] lg:gap-[103px]">
    {/* Text Section */}
    <div className="flex flex-col w-full lg:w-[508px] gap-[32px] mt-[10px]">
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

    {/* Map Section */}
    <div className="w-full lg:w-[638px] h-[280px] sm:h-[372px] rounded-[16px] overflow-hidden">
      <img src={map} alt="Map" className="w-full h-full object-cover" />
    </div>
  </div>
</section>
      <Get_In_Touch />
    </>
  );
}
