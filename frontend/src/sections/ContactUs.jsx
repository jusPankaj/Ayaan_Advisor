import React from "react";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <div className="max-w-full mx-[206px]">
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
      <div className="w-[1417px] flex ">
        <ContactForm />
        <div className="m-0">
          <img
            src="./images/map_in_form.png"
            alt=""
            className="w-[655px] h-[685px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
