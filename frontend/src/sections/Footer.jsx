import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaPinterestSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";



const Footer = () => {
  return (
    <div className="max-w-full bg-[#2C4058] pt-24">
      <div className="grid grid-cols-1 md:grid-cols-7 px-8 md:px-[206px]">
        <div className="col-span-2 px-4 md:px-16">
          <div className="flex flex-col items-center md:items-start">
            <img src="./images/LogoBottom.png" alt="logo" className="w-[218px] md:h-auto mb-3 text-white" />
            <p className="font-primary text-white text-center md:text-left">
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
            </p>
          </div>
          <div className="flex p-2">
            <FaFacebookSquare className="text-white mx-3" />
            <FaXTwitter className="text-white mx-3"/>
            <FaInstagram className="text-white mx-3"/>
            <CiLinkedin className="text-white mx-3"/>
          </div>
        </div>

        <div className="col-span-1 px-4 md:px-0 order-3 md:order-2">
          <ul className="p-2 text-white">
            <h1 className="text-xl">Useful Links</h1>
            <li className="p-2">
              <a href="#">Home</a>
            </li>
            <li className="p-2">
              <a href="#">About Us</a>
            </li>
            <li className="p-2">
              <a href="#">Services</a>
            </li>
            <li className="p-2">
              <a href="#">Countries</a>
            </li>
            <li className="p-2">
              <a href="#">Testimonials</a>
            </li>
            <li className="p-2">
              <a href="#">FAQs</a>
            </li>
            <li className="p-2">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="col-span-1 px-4 md:px-0 order-4 md:order-3">
          <h3 className="text-white">Legal</h3>
          <ul className="text-[#CCCCCC]">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="col-span-3 px-4 md:px-10 pt-10 md:pt-0 order-2 md:order-4">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col items-center md:items-start">
                <h2 className="text-white font-semibold text-[18px]">Subscribe to Newsletter</h2>
                <p className="text-[#CCCCCC]">
                  Subscribe for Updates: Stay informed about the latest investor updates, financial results, and announcements by subscribing to our newsletter.
                </p>
            </div>
            <form className="flex flex-col mb-6 md:mb-0 md:flex-row justify-center items-center mt-4 ">
              <input
                placeholder="Enter your email"
                className="h-[58px] w-full md:w-[317px] p-3 border border-gray-400 rounded-md bg-[#FFFFFF1A] mb-4 md:mb-0 md:mr-4"
              />
              <button
                type="submit"
                className="h-[58px] w-full md:w-[144px] bg-[#FED55F] rounded-md text-[#2C4058] text-[16px] font-bold outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-20 max-w-full px-8 md:px-[206px] text-center bg-[#26384D] text-xl">
        <div className="text-white">
          © Copyright Ayaan Overseas Advisors.
          <span className="sm:block md:inline"> All Rights Reserved </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;