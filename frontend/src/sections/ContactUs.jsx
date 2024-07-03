import React from "react";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <div className="max-w-full mx-[206px] mb-16">
      <div className="">
          <p className="text-slate-400">Contact Us</p>
          <div>
            <h1 className="text-[#5981B2] font-semibold text-5xl">
              Get in{" "}
              <span className="text-[#2C4058] font-semibold text-5xl">Touch</span>
            </h1>
          </div>
          <p className="text-[18px] my-4 text-[#2C4058CC] font-normal">
            This is dummy text. Lorem ipsum dolor sit amet.
          </p>
      </div>
      <div className="flex">
        <ContactForm />
        <div className="flex-grow">
          <img
            src="./images/map_in_form.png"
            alt=""
            className="w-full h-[685px] mt-6 ml-8"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
