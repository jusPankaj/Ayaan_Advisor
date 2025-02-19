import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Navbar */}
      <div className="flex items-center p-2 h-12 bg-[#2C4058] text-white    font-primary max-w-full">
        <div className="flex items-center justify-between md:px-[150px]">
          <div className="flex">
            <div className="flex items-center mr-3">
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-2"
              >
                <path
                  d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.89543 16 2V10C16 11.1046 15.1046 12 14 12H2C0.895431 12 0 11.1046 0 10V2ZM2 1C1.44772 1 1 1.44772 1 2V2.2169L8 6.4169L15 2.2169V2C15 1.44772 14.5523 1 14 1H2ZM15 3.3831L10.2919 6.20794L15 9.10522V3.3831ZM14.9662 10.2586L9.32583 6.7876L8 7.5831L6.67417 6.7876L1.03376 10.2586C1.14774 10.6855 1.53715 11 2 11H14C14.4628 11 14.8523 10.6855 14.9662 10.2586ZM1 9.10522L5.70808 6.20794L1 3.3831V9.10522Z"
                  fill="#FED55F"
                />
              </svg>
              <p>info@ayaanoverseas.com</p>
            </div>
            <div className="flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.65387 1.32849C3.40343 1.00649 2.92745 0.976861 2.639 1.26531L1.60508 2.29923C1.1216 2.78271 0.94387 3.46766 1.1551 4.06847C2.00338 6.48124 3.39215 8.74671 5.32272 10.6773C7.25329 12.6078 9.51876 13.9966 11.9315 14.8449C12.5323 15.0561 13.2173 14.8784 13.7008 14.3949L14.7347 13.361C15.0231 13.0726 14.9935 12.5966 14.6715 12.3461L12.3653 10.5524C12.2008 10.4245 11.9866 10.3793 11.7845 10.4298L9.59541 10.9771C9.00082 11.1257 8.37183 10.9515 7.93845 10.5181L5.48187 8.06155C5.04849 7.62817 4.87427 6.99919 5.02292 6.40459L5.57019 4.21553C5.62073 4.01336 5.57552 3.79918 5.44758 3.63468L3.65387 1.32849ZM1.88477 0.511076C2.62689 -0.231039 3.8515 -0.154797 4.49583 0.673634L6.28954 2.97983C6.6187 3.40304 6.73502 3.95409 6.60498 4.47423L6.05772 6.66329C5.99994 6.8944 6.06766 7.13888 6.2361 7.30732L8.69268 9.7639C8.86113 9.93235 9.1056 10.0001 9.33671 9.94229L11.5258 9.39502C12.0459 9.26499 12.597 9.3813 13.0202 9.71047L15.3264 11.5042C16.1548 12.1485 16.231 13.3731 15.4889 14.1152L14.455 15.1492C13.7153 15.8889 12.6089 16.2137 11.5778 15.8512C9.01754 14.9511 6.61438 13.4774 4.56849 11.4315C2.5226 9.38562 1.04895 6.98246 0.148838 4.42225C-0.213682 3.39112 0.11113 2.28472 0.85085 1.545L1.88477 0.511076Z"
                  fill="#FED55F"
                />
              </svg>
              <div className="mx-1">999 99 99999</div>
            </div>
          </div>
          <div className="flex items-center justify-between font-medium">
            <p className="px-2"><a href="#">Login</a></p>
            <p className="text-yellow-500">|</p>
            <p className="px-2"><a href="#">Register</a></p>
          </div>
        </div>
       
      </div>

      {/* Main Navbar */}
      <div className=" md:px-[150px]  xl:mx-auto mx-auto ">
        <div className="flex justify-between items-center h-[97.2px] py-6">
          <div>
            <img src="/images/logo.png" alt="ayaan_overseas_logo" />
          </div>
          <div className="hidden md:flex text-[#2C4058] text-lg font-medium">
            <ul className="flex">
              <li className="p-4">
                <a>Home</a>
              </li>
              <li className="p-4">
                <a>About Us</a>
              </li>
              <li className="p-4">
                <a>Services</a>
              </li>
              <li className="p-4">
                <a>Countries</a>
              </li>
              <li className="p-4">
                <a>Testimonials</a>
              </li>
              <li className="p-4">
                <a>FAQs</a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <button className="bg-[#5981B2] border-none rounded-md text-white font-medium px-6 py-3">Contact Us</button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg width="24" height="24" fill="currentColor">
                {menuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />                  
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col text-[#2C4058] text-lg font-medium">
            <ul className="flex flex-col">
              <li className="p-4 border-b">
                <a>Home</a>
              </li>
              <li className="p-4 border-b">
                <a>About Us</a>
              </li>
              <li className="p-4 border-b">
                <a>Services</a>
              </li>
              <li className="p-4 border-b">
                <a>Countries</a>
              </li>
              <li className="p-4 border-b">
                <a>Testimonials</a>
              </li>
              <li className="p-4 border-b">
                <a>FAQs</a>
              </li>
              <li className="p-4">
                <button className="bg-[#5981B2] border-none rounded-md text-white font-medium px-6 py-3 w-full">Contact Us</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
