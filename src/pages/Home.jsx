import React from "react";
import heroBg from "../images/hero-bg.jpg";
import clothes2order from "../images/clothes2order_icon.png";
import businessOfFashion from "../images/the_business_of_fashion_icon.jpeg";
import underlineWavy from "../images/underline-wavy.png";
import truckIcon from "../images/truck.png";
import sendIcon from "../images/send.png";
import location from "../images/location_icon.png";
import ellipse from "../images/ellipse.png";
import image1 from "../images/image 1.jpg";
import image2 from "../images/image 2.png";
import image3 from "../images/image 3.jpg";
import vector1 from "../images/vector 1.png";
import vector2 from "../images/vector 2.png";
import vector4 from "../images/vector4.png"
import deliveryBus from "../images/delivery-bus.png";
import warehouse from "../images/warehouse.png"
import ship from "../images/ship.png"
import starcheckmark from "../images/star-checkmark.png"
import send2 from "../images/send2.png"
import checkmark from "../images/checkmark.png"
import bikes from "../images/bikes.png"
import employee from "../images/employee.png"
import Testimonials_vector1 from "../images/vector1.png"
import Testimonials_vector2 from "../images/vector2.png"
import Testimonials_vector3 from "../images/vector3.png"
import profilePic from "../images/profile1.png";
import profilePic2 from "../images/profile2.png";
import profilePic3 from "../images/profile3.png";
import rating_icon from "../images/rating_icon.png"
import phone from "../images/phone.png"

export function Hero() {
  return (
    <section className="w-screen min-h-[1300px] sm:min-h-[1000px] md:min-h-[1200px] lg:min-h-[1100px] relative overflow-hidden rounded-t-[20px] sm:rounded-t-[24px] md:rounded-t-[28px] bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#02021C]/95 rounded-t-[20px] sm:rounded-t-[24px] md:rounded-t-[28px] z-0" />

      {/* Headline and Trusted by */}
<div className="relative z-10 pt-16 px-4 max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
  {/* Trusted By */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center 
                  gap-1 sm:gap-4 border border-white rounded-full 
                  px-2 py-1 sm:px-4 sm:py-2 
                  bg-[#02021C]/80 shadow scale-[0.85] sm:scale-100 transition-transform">
    <div className="flex flex-row items-center justify-center gap-1 sm:gap-4">
      <div className="flex items-center -space-x-1 sm:-space-x-2">
        {[clothes2order, businessOfFashion, clothes2order].map((img, i) => (
          <div
            key={i}
            className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full overflow-hidden flex items-center justify-center"
          >
            <img
              src={img}
              alt={`Brand ${i}`}
              className="object-contain w-3 h-3 sm:w-5 sm:h-5"
            />
          </div>
        ))}
      </div>
      <p className="text-white text-[9px] sm:text-xs font-inter leading-tight whitespace-nowrap">
        Trusted by 1,000+ Businesses for Fast, Secure, and Efficient Logistics
      </p>
  </div>
</div>

        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-semibold font-['Gabarito'] text-white leading-snug sm:leading-[60px] lg:leading-[76.8px] relative">
          <span className="text-[#B21F24]">Powering</span> Your Business Through Efficient{" "}
          <span className="text-[#0066FF] relative inline-block">
            Logistics
            <img
              src={underlineWavy}
              alt="Underline"
              className="absolute left-1/2 -translate-x-1/2 -bottom-1 sm:-bottom-2 w-20 sm:w-32 lg:w-[248px] h-2 sm:h-[13px]"
            />
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-white text-sm sm:text-base md:text-lg opacity-95 font-inter max-w-3xl leading-relaxed">
          Experience seamless pick-up within Lagos, reliable warehousing, & fast international shipping — all designed to streamline your operations & drive
          <br />
          <span className="inline-flex items-center gap-1">
            growth
            <img src={location} alt="location icon" className="w-[13px] h-[18px] ml-4" />
          </span>
        </p>
      </div>

      {/* Desktop Layout: Buttons + Images */}
      <div className="hidden sm:block absolute w-[1344px] h-[596px] left-1/2 -translate-x-1/2 top-[420px] z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[332px] flex flex-col gap-6">
          <button
            onClick={() => (window.location.href = "/contact")}
            className="flex items-center justify-between px-6 py-3 rounded-full text-white font-semibold font-manrope text-lg tracking-wide bg-gradient-to-r from-[#FF1A1A] to-[#0066FF] shadow-[0px_6px_12px_#8882,0px_12px_24px_#8882]"
          >
            Let’s Move Your Goods
            <div className="w-6 h-6 bg-[#0066FF] rounded-full flex items-center justify-center">
              <img src={truckIcon} alt="Truck icon" className="w-[22px] h-[16px] object-contain" />
            </div>
          </button>

          <button
            onClick={() => (window.location.href = "/about")}
            className="flex items-center justify-between px-6 py-3 rounded-full border border-white text-white font-manrope text-lg tracking-wide shadow-[0px_12px_24px_#8882]"
          >
            Learn More About Us
            <div className="w-6 h-6 flex items-center justify-center">
              <img src={sendIcon} alt="Send icon" className="w-4 h-4 object-contain opacity-85" />
            </div>
          </button>
        </div>

        {/* Desktop Images */}
        <div className="absolute left-0 top-0 w-[412px] h-[298px] rounded-[24px] bg-gradient-to-br from-blue-700/70 to-yellow-400/70 shadow-md">
          <img src={image1} alt="Left" className="absolute top-[10px] left-[10px] w-[392px] h-[278px] rounded-[16px] object-cover opacity-[0.94]" />
        </div>
        <div className="absolute left-[466px] top-[298px] w-[412px] h-[298px] rounded-[24px] bg-gradient-to-br from-purple-600/70 to-red-400/70">
          <img src={image2} alt="Center" className="absolute top-[10px] left-[10px] w-[392px] h-[278px] rounded-[16px] object-cover opacity-[0.94]" />
        </div>
        <div className="absolute left-[932px] top-0 w-[412px] h-[298px] rounded-[24px] bg-gradient-to-br from-indigo-800/70 to-emerald-400/70">
          <img src={image3} alt="Right" className="absolute top-[10px] left-[10px] w-[392px] h-[278px] rounded-[16px] object-cover opacity-[0.94]" />
        </div>

        <img src={vector1} alt="Vector 1" className="absolute top-[310px] left-[321px] w-[60px] h-[128px]" />
        <img src={vector2} alt="Vector 2" className="absolute top-[363px] left-[932px] w-[60px] h-[128px]" />
      </div>

      {/* Mobile Layout: Buttons + Images */}
<div className="block sm:hidden px-4 pt-10 z-10 relative">
  <div className="flex flex-col gap-3 items-center mb-6">
    <button
      onClick={() => (window.location.href = "/contact")}
      className="flex items-center justify-between gap-2 px-4 py-2 rounded-full text-white font-semibold font-manrope text-sm bg-gradient-to-r from-[#FF1A1A] to-[#0066FF] w-full max-w-[260px] shadow-md"
    >
      Let’s Move Your Goods
      <div className="w-5 h-5 bg-[#0066FF] rounded-full flex items-center justify-center">
        <img src={truckIcon} alt="Truck icon" className="w-[16px] h-[13px] object-contain" />
      </div>
    </button>

    <button
      onClick={() => (window.location.href = "/about")}
      className="flex items-center justify-between gap-2 px-4 py-2 rounded-full border border-white text-white font-manrope text-sm w-full max-w-[260px] shadow"
    >
      Learn More About Us
      <div className="w-5 h-5 flex items-center justify-center">
        <img src={sendIcon} alt="Send icon" className="w-3.5 h-3.5 object-contain opacity-85" />
      </div>
    </button>
</div>

        <div className="flex flex-col gap-6 items-center">
          {[image1, image2, image3].map((img, i) => (
            <div
              key={i}
              className="relative w-full max-w-[360px] h-[220px] rounded-[24px] shadow-md overflow-hidden"
              style={{
                background: i === 0
                  ? "linear-gradient(174.02deg, rgba(0, 21, 255, 0.72), rgba(253, 203, 2, 0.72))"
                  : i === 1
                  ? "linear-gradient(151.44deg, rgba(142, 79, 230, 0.72), rgba(230, 92, 79, 0.72))"
                  : "linear-gradient(212.62deg, rgba(42, 42, 114, 0.72), rgba(96, 200, 151, 0.72))",
              }}
            >
              <img src={img} alt={`Mobile image ${i}`} className="absolute top-[10px] left-[10px] w-[calc(100%-20px)] h-[calc(100%-20px)] rounded-[16px] object-cover opacity-[0.94]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-12 sm:py-20 bg-white">
      <div className="flex flex-col gap-4 max-w-[1344px] w-full">
        {/* === TITLE (OUR SERVICES with dot) === */}
        <div className="flex items-center gap-2">
          <img src={ellipse} alt="dot" className="w-1.5 h-1.5" />
          <p className="text-[#0066FF] text-xs sm:text-sm font-medium uppercase tracking-wide font-inter">
            Our Services
          </p>
        </div>

        {/* === HEADLINE AND SUBTEXT === */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-[257px]">
          <h2 className="text-[#1A1A1A] font-['Outfit'] text-2xl sm:text-[40px] leading-tight sm:leading-[52px] font-medium max-w-[504px]">
            Logistics That Move Your Business Forward
          </h2>
          <p className="text-[#333333] font-inter text-sm sm:text-[18px] leading-[24px] sm:leading-[27px] font-normal max-w-[583px] text-left sm:text-right opacity-95">
            From swift local deliveries to secure warehousing and global shipping, our tailored logistics solutions are built to support your growth and keep your operations moving seamlessly.
          </p>
        </div>

        {/* === SERVICES BOXES === */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* === Box 1 === */}
          <div className="bg-[#FEFEFE] rounded-[16px] p-6 sm:p-8 shadow-[0px_6px_24px_0px_rgba(0,0,0,0.12)] border border-gray-200 hover:border-[#0066FF] transition-colors duration-300 flex flex-col gap-8 w-full max-w-[430px] mx-auto">
            <div className="w-[60px] h-[60px]">
              <img
                src={deliveryBus}
                alt="Delivery bus"
                className="w-[55px] h-[50px] mx-auto"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] font-semibold font-inter text-[#0066FF] leading-none">
                Pick up and Delivery
              </h3>
              <p className="text-[16px] leading-[24px] font-inter text-[#333333] opacity-95">
                We offer fast and reliable pick-up and delivery services across all areas of Lagos. Whether you're sending parcels or receiving goods, our team ensures safe and timely deliveries right to your doorstep.
              </p>
            </div>
          </div>

          {/* === Box 2 === */}
          <div className="bg-[#FEFEFE] rounded-[16px] p-6 sm:p-8 shadow-[0px_6px_24px_0px_rgba(0,0,0,0.12)] border border-gray-200 hover:border-[#0066FF] transition-colors duration-300 flex flex-col gap-8 w-full max-w-[430px] mx-auto">
            <div className="w-[60px] h-[60px]">
              <img
                src={warehouse}
                alt="Warehouse icon"
                className="w-[55px] h-[50px] mx-auto"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] font-semibold font-inter text-[#0066FF] leading-none">
                Warehouse Services
              </h3>
              <p className="text-[16px] leading-[24px] font-inter text-[#333333] opacity-95">
                Keep your goods safe and organized with our secure and efficient warehousing solutions. We offer flexible storage options, real-time inventory tracking, and smooth handling for all your logistics needs.
              </p>
            </div>
          </div>

          {/* === Box 3 === */}
          <div className="bg-[#FEFEFE] rounded-[16px] p-6 sm:p-8 shadow-[0px_6px_24px_0px_rgba(0,0,0,0.12)] border border-gray-200 hover:border-[#0066FF] transition-colors duration-300 flex flex-col gap-8 w-full max-w-[430px] mx-auto">
            <div className="w-[60px] h-[60px]">
              <img
                src={ship}
                alt="Shipping icon"
                className="w-[55px] h-[50px] mx-auto"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] font-semibold font-inter text-[#0066FF] leading-none">
                International Shipping
              </h3>
              <p className="text-[16px] leading-[24px] font-inter text-[#333333] opacity-95">
                Expand beyond borders with our trusted international shipping services. We handle customs, documentation, and global delivery — ensuring your packages arrive safely and on time, worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function Why_Choose_Us() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      {/* === Section Header: Why Choose Us === */}
      <div className="w-full -mt-4 mb-6 flex justify-center items-center gap-[4px]">
        <img src={ellipse} alt="Red dot" className="w-[4px] h-[4px]" />
        <p className="text-[12px] font-inter font-medium tracking-[0.014em] uppercase text-[#0066FF]">
          why choose us
        </p>
      </div>

      <div className="max-w-[1344px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 relative">

        {/* === IMAGE SECTION FOR DESKTOP === */}
        <div className="hidden lg:block relative w-full max-w-[511px]">
          {/* Employee Image */}
          <img
            src={employee}
            alt="Employee"
            className="w-[511px] h-[548px] object-cover rounded-[16px]"
          />

          {/* Bikes Image */}
          <img
            src={bikes}
            alt="Bikes"
            className="absolute object-cover shadow-md"
            style={{
              top: "130px",
              left: "360px",
              width: "253px",
              height: "315px",
              borderRadius: "8px",
              border: "8px solid white",
            }}
          />

          {/* Experience Card */}
          <div
            className="absolute flex flex-col items-center justify-center text-white font-['Outfit'] shadow-xl"
            style={{
              top: "445px",
              left: "450px",
              width: "128px",
              height: "128px",
              backgroundColor: "#B21F24",
              borderRadius: "13px",
              border: "6px",
            }}
          >
            <span className="text-[40px] font-medium leading-none">20</span>
            <p className="text-[14px] text-center leading-[18px] mt-2">
              Years of <br /> Experience
            </p>
          </div>
        </div>

        {/* === IMAGE SECTION FOR MOBILE === */}
        <div className="lg:hidden w-full flex flex-col gap-6 items-center relative">
          <div className="relative w-full max-w-sm mx-auto">
            <img
              src={employee}
              alt="Employee"
              className="w-full h-auto rounded-[16px] object-cover"
            />
            <img
              src={bikes}
              alt="Bikes"
              className="absolute right-[-10px] bottom-[-40px] w-[150px] h-[180px] object-cover rounded-[8px] border-[6px] border-white shadow-md"
            />
          </div>
          <div className="w-[100px] h-[100px] bg-[#B21F24] text-white rounded-[13px] flex flex-col items-center justify-center shadow-xl">
            <span className="text-[32px] font-['Outfit'] font-medium leading-none">20</span>
            <p className="text-[12px] text-center leading-[16px] mt-1">
              Years of <br /> Experience
            </p>
          </div>
        </div>

        {/* === Text Content Section (Right) === */}
        <div className="flex flex-col gap-9 w-full max-w-[560px] ml-auto">
          {/* Title Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src={starcheckmark} alt="Star Checkmark" className="w-5 h-5" />
              <p className="text-[#2E2E2E] text-sm font-inter opacity-90">
                More than 5 years of Logistics service delivery
              </p>
            </div>

            <h2 className="text-[#1A1A1A] font-['Outfit'] text-[32px] sm:text-[40px] font-medium leading-[42px] sm:leading-[52px]">
              The Smarter Choice for Logistics
            </h2>

            <p className="text-[#333333] text-sm sm:text-base font-inter opacity-95 leading-[24px]">
              At the heart of everything we do is a commitment to innovation, reliability, and customer-focused solutions.
              We deliver smart, end-to-end logistics services, from timely local deliveries to efficient warehousing and fast
              international shipping; all designed to simplify your operations, eliminate delays, and empower your business
              to grow and thrive on both local and global scales.
            </p>
          </div>

          {/* Highlighted List */}
          <div
            className="pl-2 rounded-sm flex flex-col gap-3"
            style={{
              borderLeft: "4px solid",
              borderImage: "linear-gradient(96.56deg, #B21F24 -0.11%, #025E9B 21.39%) 1",
              borderRadius: "13px"
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3">
              {["Always-On Support", "Secure Handling", "Flexible Solutions"].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center">
                    <img src={checkmark} alt="check" className="w-[18px] h-[18px]" />
                  </div>
                  <p className="text-[#2E2E2E] text-sm font-medium font-inter">{text}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3">
              {["Experienced Team", "Timely Deliveries", "Real-Time Tracking"].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center">
                    <img src={checkmark} alt="check" className="w-[18px] h-[18px]" />
                  </div>
                  <p className="text-[#2E2E2E] text-sm font-medium font-inter">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Read More Button */}
          <button
            onClick={() => (window.location.href = "/about")}
            className="w-fit p-[1px] rounded-[9999px] bg-gradient-to-r from-[#B21F24] to-[#025E9B] hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex items-center gap-2 px-6 py-2 rounded-[9999px] bg-white text-[#1D1D1D] text-[16px] font-semibold leading-[24px] capitalize tracking-[0.5px] font-manrope">
              <span>Read more</span>
              <div className="p-[1px] rounded-full bg-gradient-to-b from-[#B21F24] to-[#025E9B]">
                <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full bg-white">
                  <img src={send2} alt="Send icon" className="w-[10.4px] h-[10.8px] object-contain opacity-[0.84]" />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="w-screen bg-[#02021CF0] py-[20px] px-4 sm:px-[52px] flex justify-center overflow-hidden">
      {/* Wrapper */}
      <div className="w-full max-w-[1448px] flex flex-col gap-[10px]">
        {/* Title */}
        <div className="flex items-center gap-[4px] w-fit h-[15px] mx-auto">
          <img src={ellipse} alt="dot" className="w-[4px] h-[4px]" />
          <span className="text-[12px] font-medium font-['Inter'] uppercase tracking-[1.4%] text-white">
            Testimonials
          </span>
        </div>

        {/* Heading and Cards */}
        <div className="flex flex-col gap-[16px] w-full sm:w-[1344px] sm:h-auto mx-auto">
          <h2 className="w-full text-center text-[28px] sm:text-[40px] leading-[36px] sm:leading-[52px] font-['Outfit'] font-medium text-white">
            Trusted by Businesses Like Yours
          </h2>

          {/* Vectors */}
          <div className="relative w-full h-[80px] sm:h-[124.58px] flex justify-center items-center pointer-events-none z-0">
            <div className="relative w-full sm:w-[1048.63px] h-full opacity-25">
              <img
                src={Testimonials_vector1}
                alt="vector1"
                className="absolute w-[30px] sm:w-[43px] h-[50px] sm:h-[70.68px] top-[15px] left-1/2 -translate-x-[50%]"
              />
              <img
                src={Testimonials_vector2}
                alt="vector2"
                className="absolute w-[50px] sm:w-[75.3px] h-[65px] sm:h-[99.27px] top-0 left-[10%] sm:left-[5%]"
              />
              <img
                src={Testimonials_vector3}
                alt="vector3"
                className="absolute w-[50px] sm:w-[75.3px] h-[65px] sm:h-[99.27px] top-0 right-[10%] sm:left-[95%] rotate-[36.2deg]"
              />
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="flex flex-col sm:flex-row gap-[24px] w-full sm:w-[1344px] mx-auto items-stretch">
            {/* === Card 1 === */}
            <TestimonialCard
              profile={profilePic}
              name="Adeola Odeku"
              role="Investor"
              testimony="Ladiva Logistics has been a game-changer for our business. Their prompt pick-up services and smooth delivery process across Lagos have helped us meet tight deadlines. The team is friendly, professional, and always willing to assist. It's rare to find a logistics partner this reliable. We’re proud to trust Ladiva with our daily operations."
              remarkColor="#FFD600"
              borderColor="#FFD600"
            />

            {/* === Card 2 === */}
            <TestimonialCard
              profile={profilePic2}
              name="Moses Simon"
              role="Investor"
              testimony="Working with Ladiva Logistics has given us peace of mind. Their warehousing service is well-structured, secure, and efficient. Inventory handling is smooth, and their updates keep us in the loop. From small packages to bulk storage, their attention to detail is top-tier. We’ve seen noticeable improvements in our supply chain since switching to them."
              remarkColor="#00FFB2"
              borderColor="#00FFB2B8"
            />

            {/* === Card 3 === */}
            <TestimonialCard
              profile={profilePic3}
              name="Alexie Adenuga"
              role="Investor"
              testimony="We’ve used Ladiva Logistics for both local and international shipping, and they’ve consistently delivered. Their team is proactive, responsive, and always professional. They make complex deliveries feel simple and stress-free. We’ve cut delivery delays significantly. If you want a logistics company that truly understands time and trust."
              remarkColor="#FF6A00"
              borderColor="#FF6A00B8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// === Testimonial Card ===
function TestimonialCard({ profile, name, role, testimony, remarkColor, borderColor }) {
  return (
    <div
      className="w-full sm:w-[432px] h-auto sm:h-full rounded-[16px] px-[20px] py-[16px] flex flex-col gap-[16px] bg-white/5"
      style={{ border: `0.32px solid ${borderColor}` }}
    >
      {/* Name + Role */}
      <div className="flex items-center gap-[12px] w-full">
        <img
          src={profile}
          alt={name}
          className="w-[52px] h-[52px] rounded-full object-cover"
        />
        <div className="flex flex-col gap-[4px]">
          <span className="text-[18px] font-medium font-['Inter'] text-white">
            {name}
          </span>
          <span className="text-[12px] font-normal opacity-90 font-['Inter'] text-white tracking-[1%]">
            {role}
          </span>
        </div>
      </div>

      {/* Testimony */}
      <div className="pt-[10px] pb-[10px] flex items-start">
        <p className="text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px] opacity-88 font-['Inter'] text-white">
          {testimony}
        </p>
      </div>

      {/* Remark and Rating */}
      <div className="flex justify-between items-center w-full h-[15px] mt-auto">
        <span
          className="font-bold text-[12px] font-['Outfit']"
          style={{ color: remarkColor }}
        >
          HIGHLY RELIABLE
        </span>
        <div className="flex items-center gap-[2.94px]">
          <img
            src={rating_icon}
            alt="rating icon"
            className="w-[14.68px] h-[14.68px]"
          />
          <span className="text-[10.28px] font-semibold font-['Lato'] text-[#FAFAFA] leading-[14.39px]">
            4.8
          </span>
        </div>
      </div>
    </div>
  );
}

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


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Why_Choose_Us/>
      <Testimonials />
      <Get_In_Touch/>
    </>
  );
}
