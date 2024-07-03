import React from "react";

const Header1 = () => {
  return (
    <div>
      <div className="px-0 py-1.5 bg-[#2c4058]  flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] box-border">
        <div className="flex w-[1420px] items-center justify-around gap-[159px] relative flex-[0_0_auto]">
          <div className="flex w-[1412px] items-center gap-[60px] relative">
            <div className="flex w-[710px] items-center gap-6 relative">
              <div className="inline-flex items-center gap-2.5 p-1 relative flex-[0_0_auto]">
                {/* <Envelope className="!relative !w-4 !h-4" /> */}
                <div className="relative w-fit mt-[-1.00px]  font-medium text-[#ffffff] text-base tracking-[0] leading-7 whitespace-nowrap">
                  info@ayaanoverseas.com
                </div>
              </div>
              <div className="inline-flex items-center gap-2.5 p-1 relative flex-[0_0_auto]">
                {/* <TelephoneWrapper className="!bg-[unset] !relative !bg-[unset]" /> */}
                <div className="relative w-fit mt-[-1.00px]  font-medium text-[#ffffff] text-base tracking-[0] leading-7 whitespace-nowrap">
                  999 99 99999
                </div>
              </div>
            </div>
            <div className="w-[642px] items-center justify-end gap-3.5 flex relative">
              <div className="inline-flex items-center gap-2.5 p-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-primary font-medium text-[#ffffff] text-lg tracking-[0] leading-7 whitespace-nowrap">
                  Login
                </div>
              </div>
              <img
                className="relative w-px h-[13.37px] object-cover"
                alt="Line"
                src="line-1-4.svg"
              />
              <div className="inline-flex items-center gap-2.5 p-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-primary font-medium text-[#ffffff] text-lg tracking-[0] leading-7 whitespace-nowrap">
                  Register
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-0 py-6 flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex w-[1420px] items-center justify-between relative flex-[0_0_auto]">
          <img
            className="relative w-[218px] h-[45.29px]"
            alt="Group"
            src="./images/logo.png"
          />
          <div className="flex w-[1172px] items-center gap-[60px] relative">
            <div className="w-[973px] items-start justify-center gap-6 flex relative">
              <div className="inline-flex items-start gap-2.5 p-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-primary font-medium text-[#2c4058] text-lg tracking-[0] leading-7 whitespace-nowrap">
                  Home
                </div>
              </div>
              <div className="inline-flex items-start gap-2.5 p-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-primary font-medium text-[#2c4058] text-lg tracking-[0] leading-7 whitespace-nowrap">
                  About Us
                </div>
              </div>
              <div className="inline-flex items-start gap-2.5 p-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-primary font-medium text-[#2c4058] text-lg tracking-[0] leading-7 whitespace-nowrap">
                  Services
                </div>
              </div>
              <div className="inline-flex items-start gap-2.5 p-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-primary font-medium text-[#2c4058] text-lg tracking-[0] leading-7 whitespace-nowrap">
                  Countries
                </div>
              </div>
              <div className="inline-flex items-start gap-2.5 p-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-primary font-medium text-[#2c4058] text-lg tracking-[0] leading-7 whitespace-nowrap">
                  Testimonials
                </div>
              </div>
              <div className="inline-flex items-start gap-2.5 p-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-primary font-medium text-[#2c4058] text-lg tracking-[0] leading-7 whitespace-nowrap">
                  FAQs
                </div>
              </div>
            </div>
            <button className="all-[unset] box-border inline-flex h-12 justify-center flex-[0_0_auto] bg-[#5881b2] items-center gap-2.5 px-6 py-3 relative rounded-lg">
              <div className="relative w-fit mt-[-1.00px] font-primary font-medium text-white text-base tracking-[0] leading-[normal]">
                Contact Us
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
