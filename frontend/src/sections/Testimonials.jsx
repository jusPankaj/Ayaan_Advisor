import React from "react";
import TestimonialCards from "../components/TestimonialCards";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="relative">
      <div className=" mx-24 p-24 flex justify-between">
        <div className="w-[1029px] ">
          <p className="text-slate-400">Testimonials</p>
          <div>
            <h1 className="text-[#5981B2] font-semibold text-5xl">
              Success{" "}
              <span className="text-[#2C4058] font-semibold text-5xl">
                Stories
              </span>
            </h1>
          </div>
          <p className="text-[18px] my-4 text-[#2C4058CC] font-normal">
            Hear from our successful students who are now thriving in their
            medical careers.
          </p>
        </div>
        <div>
          <img src="./images/Quotes.png" alt="" />
        </div>
      </div>
      <div className="flex mx-24 mb-24 overflow-hidden">
        {/* <button className="m-2 absolute left-0 top-3/4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
          Prev
        </button> */}
        <div className="w-[47.67px] h-[47.67px] m-4 absolute left-4 top-3/4 rounded-full flex justify-center items-center shadow-heavy text-[#5981B2]">
          <FaCaretLeft className="" />
        </div>
        <TestimonialCards
          Content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, explicabo aliquam quisquam quae modi soluta accusantium placeat maiores beatae? Earum eum, sint recusandae impedit suscipit, dolores quasi accusamus ex aliquam illum enim doloribus soluta nobis."
          }
          imgSrc={"./images/bg_hero.png"}
          name={"John Doe"}
          designation={"Student"}
        />
        <TestimonialCards
          Content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, explicabo aliquam quisquam quae modi soluta accusantium placeat maiores beatae? Earum eum, sint recusandae impedit suscipit, dolores quasi accusamus ex aliquam illum enim doloribus soluta nobis."
          }
          imgSrc={"./images/bg_hero.png"}
          name={"John Doe"}
          designation={"Student"}
        />
        <TestimonialCards
          Content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, explicabo aliquam quisquam quae modi soluta accusantium placeat maiores beatae? Earum eum, sint recusandae impedit suscipit, dolores quasi accusamus ex aliquam illum enim doloribus soluta nobis."
          }
          imgSrc={"./images/bg_hero.png"}
          name={"John Doe"}
          designation={"Student"}
        />
        <TestimonialCards
          Content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, explicabo aliquam quisquam quae modi soluta accusantium placeat maiores beatae? Earum eum, sint recusandae impedit suscipit, dolores quasi accusamus ex aliquam illum enim doloribus soluta nobis."
          }
          imgSrc={"./images/bg_hero.png"}
          name={"John Doe"}
          designation={"Student"}
        />
        <TestimonialCards
          Content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, explicabo aliquam quisquam quae modi soluta accusantium placeat maiores beatae? Earum eum, sint recusandae impedit suscipit, dolores quasi accusamus ex aliquam illum enim doloribus soluta nobis. "
          }
          imgSrc={"./images/bg_hero.png"}
          name={"John Doe"}
          designation={"Student"}
        />
        <TestimonialCards
          Content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, explicabo aliquam quisquam quae modi soluta accusantium placeat maiores beatae? Earum eum, sint recusandae impedit suscipit, dolores quasi accusamus ex aliquam illum enim doloribus soluta nobis. "
          }
          imgSrc={"./images/bg_hero.png"}
          name={"John Doe"}
          designation={"Student"}
        />

        {/* <button className="m-4 absolute right-0 top-3/4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
          Next
        </button> */}
        <div className="w-[47.67px] h-[47.67px] m-4 absolute right-4 top-3/4 rounded-full flex justify-center items-center shadow-heavy text-[#5981B2]">
          <FaCaretRight className="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
