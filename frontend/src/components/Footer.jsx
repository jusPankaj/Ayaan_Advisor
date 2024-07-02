import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="flex justify-center gap-32 p-5">
        {/* <div>Quick Links</div> */}
        <div>
          <img
            src="https://lemontechnologies.net/images/logo.png"
            alt="logo"
            className="w-12 h-12 m-3"
          />
          <p className="font-bold">MBBS Study Abroad</p>
          <ul>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-blue-600 "
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <span>+91 999999999</span>
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-blue-600"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <span> xyz@consultancy.com</span>
            </li>
            <li className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-blue-600"
              >
                <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
              </svg>
              <span>https://www.consulatncyStuddy.com</span>
            </li>
          </ul>
        </div>

        <ul className="p-2">
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
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="flex flex-col justify-between mx-10 pt-10 m-3">
          <div className="flex text-2xl">
            <div className="px-3">
              <FaFacebook />
            </div>
            <div className="px-3">
              <FaInstagramSquare />
            </div>
            <div className="px-3">
              <FaSquareXTwitter />
            </div>
            <div className="px-3">
              <FaPinterestSquare />
            </div>
            <div className="px-3">
              <FaLinkedin />
            </div>
          </div>
          <div>
            <form className="flex flex-col m-3 justify-center items-center">
              <input
                placeholder="Enter your email"
                className="h-8 w-64 mx-2 p-3 border border-gray-400 rounded-md"
              />
              <button
                type="submit"
                className="h-8 w-48 mx-2 my-4 bg-red-900 rounded-md text-white font-bold outline-none border-red-900 "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-20 max-w-screen bg-red-100 text-xl">
        <div>
          Copyright ©2021-24 MBBS Study Abroad Consultancy. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
