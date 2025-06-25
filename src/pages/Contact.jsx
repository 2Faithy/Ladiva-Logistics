import React from "react";
import contactImg from "../images/contact_img.png"; 

export default function ContactSection() {
  return (
    <section
      className="w-screen min-h-[1300px] sm:min-h-[1000px] md:min-h-[1200px] lg:min-h-[1100px] relative overflow-hidden rounded-t-[20px] sm:rounded-t-[24px] md:rounded-t-[28px] bg-cover bg-center"
      style={{ backgroundColor: "#02021C", backgroundImage: "none" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#02021C]/95 rounded-t-[20px] sm:rounded-t-[24px] md:rounded-t-[28px] z-0" />

      <div className="relative z-10 w-full px-[24px] sm:px-[32px] py-[40px] flex justify-center items-center">
        <div className="w-full max-w-[1448px] mx-auto flex flex-col lg:flex-row justify-center gap-[40px] items-center lg:items-start">
          {/* Form Container */}
          <div className="bg-[#FEFEFE] w-full max-w-[659px] h-auto rounded-[8px] p-[24px] sm:p-[32px] flex flex-col gap-[48px] sm:gap-[80px]">
            {/* Heading + Subheading */}
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-[#1A1A1A] text-[28px] sm:text-[40px] font-[500] leading-[36px] sm:leading-[52px] font-['Outfit']">How Can We Help?</h2>
              <p className="text-[#333333] opacity-80 text-[14px] sm:text-[16px] font-[500] leading-[22px] sm:leading-[25.6px] font-['Inter']">
                We’re here to assist with your logistics needs; whether it’s a question,
                support request, or service inquiry. Reach out and our team will get
                back to you promptly.
              </p>
            </div>

            {/* Form Fields */}
            <form className="flex flex-col gap-[40px] sm:gap-[52px]">
              <div className="flex flex-col gap-[20px] sm:gap-[24px]">
                {/* Full Name */}
                <div className="flex flex-col gap-[12px] sm:gap-[16px]">
                  <label className="text-[#0E0E0E] text-[16px] font-[600] font-['Inter']">Full Name:</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-[42px] px-[23px] py-[13px] text-[14px] font-[700] font-['Inter'] bg-white border border-[#3333338F] rounded-[4px] shadow-md placeholder-[#C8C8C8]"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-[12px] sm:gap-[16px]">
                  <label className="text-[#0E0E0E] text-[16px] font-[600] font-['Inter']">Email Address:</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-[42px] px-[23px] py-[13px] text-[14px] font-[700] font-['Inter'] bg-white border border-[#3333338F] rounded-[4px] shadow-md placeholder-[#C8C8C8]"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-[12px] sm:gap-[16px]">
                  <label className="text-[#0E0E0E] text-[16px] font-[600] font-['Inter']">Message:</label>
                  <textarea
                    placeholder="Leave us a message.."
                    className="w-full h-[144px] px-[23px] py-[13px] text-[14px] font-[700] font-['Inter'] bg-white border border-[#3333338F] rounded-[4px] shadow-md placeholder-[#C8C8C8] resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Checkbox */}
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

              {/* Submit Button */}
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
              className="w-full h-full object-cover rounded-[8px] sm:rotate-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
