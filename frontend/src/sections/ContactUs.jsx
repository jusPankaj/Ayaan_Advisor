import React from "react";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <div className="max-w-full px-8 md:px-[150px] xl:px-[206px] mb-16 py-[70px] flex items-end">
      <div className="w-[50%]">
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
        <ContactForm />
      </div>
      <div className="w-[50%]">
        <div className="flex-grow">
          <img
            src="./images/map_in_form.png"
            alt=""
            className="max-w-full md:h-[685px] pt-6 md:ml-8 m-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
