import React from "react";

const Hero1 = () => {
  return (
    <div>
      <div className="flex flex-col items-center pt-0 pb-[100px] px-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[1808px] h-[788px] items-start justify-around gap-2.5 px-[185px] py-[98px] relative bg-[#2c405805] bg-hero_bg rounded-[30px] overflow-hidden">
          {/* <img
            className="absolute w-[1808px] h-[788px] top-0 left-0"
            alt="Bg"
            src="bg.svg"
          /> */}
          <div className="inline-flex flex-col items-start justify-center gap-2.5 p-2.5 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-10 relative flex-[0_0_auto]">
              <div className="flex-col items-start justify-center gap-7 inline-flex relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040]  font-sansation font-bold text-transparent text-[84px] tracking-[0] leading-[85px]">
                  <span className="text-[#ffffff]">
                    Your Gateway to a <br />
                  </span>
                  <span className="text-[#fed55f]">
                    Successful Medical <br />
                    Career
                  </span>
                  <span className="text-[#ffffff]"> Abroad</span>
                </p>
                <p className="relative w-[621.09px] font-sansation font-normal text-[#ffffff] text-[34px] tracking-[0] leading-[43px]">
                  Your Gateway to a Successful Medical Career Abroad
                </p>
              </div>
              <div className="items-center gap-3 inline-flex relative flex-[0_0_auto]">
                {/* <button
                  className="!flex !bg-[#fed55f] !w-[232px]"
                  divClassName="!text-[#2c4058] !tracking-[0] !text-lg ![font-style:unset] !font-medium ![font-family:'Poppins-Medium',Helvetica] !leading-7"
                  size="m"
                  state="default"
                  text="Get Started Today"
                ></button> */}

                <button className="all-[unset] box-border inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="flex h-12 items-center justify-center gap-2.5 px-[34px] py-3 relative self-stretch w-full bg-[#fed55f] rounded-lg">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#2c4058] text-base tracking-[0] leading-[normal]">
                      Explore Our Services
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute w-[768px] h-[773px] top-[84px] left-[982px] mix-blend-lighten object-cover"
          alt="Health professional"
          src="./images/bg_hero.png"
        />
      </div>
    </div>
  );
};

export default Hero1;
