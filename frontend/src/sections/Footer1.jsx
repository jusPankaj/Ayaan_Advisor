
import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare, FaPinterestSquare, FaLinkedin } from "react-icons/fa";

const Footer1 = () => {
  return (
    <div>
      <div className="items-start [background:linear-gradient(180deg,rgb(251,250,255)_0%,rgb(255,255,255)_100%)] flex flex-col relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <footer className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto] bg-[#2c4058]">
            <div className="flex w-[1920px] items-start gap-[114px] pt-[60px] pb-10 px-[250px] relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
                <div className="relative w-[252px] h-[52.35px]">
                  <div className="h-[52px]">
                    <div className="relative w-[252px] h-[52px]">
                      <div className="absolute w-[252px] h-[52px] top-0 left-0">
                        <div className="relative h-[52px]">
                          <img
                            className="absolute w-[159px] h-[51px] top-px left-[93px]"
                            alt="Logo"
                            src="./images/logo.png"
                          />
                          {/* <div className="absolute w-[94px] h-[51px] top-0 left-0">
                            <div className="relative h-[51px]">
                              <img className="absolute w-[77px] h-[51px] top-0 left-0" alt="Group" src="group-12.png" />
                              {/* <img
                                className="absolute w-[19px] h-[22px] top-[7px] left-[75px]"
                                alt="Vector"
                                src="vector-8.svg"
                              />
                              <img
                                className="absolute w-[3px] h-[5px] top-[31px] left-[76px]"
                                alt="Vector"
                                src="vector-9.svg"
                              />
                              <img
                                className="absolute w-[3px] h-[5px] top-[29px] left-[78px]"
                                alt="Vector"
                                src="vector-10.svg"
                              />
                              <img
                                className="absolute w-[3px] h-[5px] top-[33px] left-[78px]"
                                alt="Vector"
                                src="vector-11.svg"
                              /> *
                              
                            </div>
                          </div> */}
                        </div>
                      </div>
                      <img
                        className="absolute w-2 h-[23px] top-[3px] left-[58px]"
                        alt="Vector"
                        src="vector-16.svg"
                      />
                    </div>
                  </div>
                </div>
                <input
                  className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto] border-[none] [background:none] w-[310px] mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffffb2] text-lg tracking-[0] leading-6 p-0"
                  placeholder="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
                  type="number"
                />
                {/* <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
                  <div className="relative w-6 h-6 bg-[url(/image-36.png)] bg-cover bg-[50%_50%]" />
                  <div className="relative w-6 h-[23.75px] bg-[url(/social-media-1-1.png)] bg-cover bg-[50%_50%]" />
                  <div className="relative w-6 h-6 bg-[url(/instagram-1.png)] bg-cover bg-[50%_50%]" />
                  <div className="relative w-6 h-6 bg-[url(/business-1.png)] bg-cover bg-[50%_50%]" />
                </div> */}

                <div className="flex text-2xl mb-4">
                  <div className="px-3">
                    <FaFacebook />
                  </div>
                  <div className="prx-3">
                    <FaInstagramSquare />
                  </div>
                  <div className="px-3">
                    <FaTwitterSquare />
                  </div>
                  <div className="px-3">
                    <FaPinterestSquare />
                  </div>
                  <div className="px-3">
                    <FaLinkedin />
                  </div>
                </div>
              </div>
              <div className="inline-flex items-start gap-[121px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-lg tracking-[0] leading-6 whitespace-nowrap">
                    Quick Link
                  </div>
                  <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#cccccc] text-lg tracking-[0] leading-[45px]">
                    Home
                    <br />
                    About Us
                    <br />
                    Services
                    <br />
                    Countries
                    <br />
                    Testimonials
                    <br />
                    FAQs
                    <br />
                    Contact Us
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-lg tracking-[0] leading-6 whitespace-nowrap">
                    Legal
                  </div>
                  <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#cccccc] text-lg tracking-[0] leading-[45px]">
                    Privacy Policy
                    <br />
                    Terms &amp; Conditions
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-lg tracking-[0] leading-6 whitespace-nowrap">
                    Subscribe to Newsletter
                  </div>
                  <p className="relative w-[461px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#cccccc] text-xl tracking-[0] leading-[30px]">
                    Subscribe for Updates: Stay informed about the latest
                    investor updates, financial results, and announcements by
                    subscribing to our newsletter.
                  </p>
                  <div className="flex w-[461px] h-[58px] items-start relative rounded-[8px_0px_0px_8px] overflow-hidden">
                    <div className="flex w-[317px] items-center gap-2.5 px-8 py-3.5 relative bg-[#ffffff1a] rounded-[8px_0px_0px_8px] overflow-hidden">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffff] text-lg tracking-[0] leading-[30px] whitespace-nowrap">
                        Enter your email
                      </div>
                    </div>
                    <button className="all-[unset] box-border inline-flex items-center justify-center gap-2.5 px-8 py-[11px] relative self-stretch flex-[0_0_auto] bg-[#fed55f] rounded-[0px_8px_8px_0px] shadow-button-shadow">
                      <div className="relative w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-[#2c4058] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                        Subscribe
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[1920px] items-center justify-center gap-2.5 px-[824px] py-[38px] relative flex-[0_0_auto] bg-[#26374d]">
              <p className="relative w-fit mt-[-1.00px] ml-[-65.50px] mr-[-65.50px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffff] text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
                © Copyright Ayaan Overseas Advisors. All Rights Reserved
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
