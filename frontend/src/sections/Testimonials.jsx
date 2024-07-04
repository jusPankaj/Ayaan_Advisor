import React, { useState, useEffect, useRef } from "react";
import TestimonialCards from "../components/TestimonialCards";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleItems = 4;
  const testimonialContainerRef = useRef(null);

  useEffect(() => {
    if (testimonialContainerRef.current) {
      const containerWidth = testimonialContainerRef.current.offsetWidth;
      const cardWidth = containerWidth / visibleItems;
      const cardStyle = testimonialContainerRef.current.firstChild.firstChild.style;
      cardStyle.width = `${cardWidth}px`;
    }
  }, [visibleItems]);

  const handlePrevButton = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const handleNextButton = () => {
    if (currentSlide < testimonials.length - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  return (
    <div className="relative ">
      <div className="my-2 flex justify-between max-w-full px-16 md:px-[150px] xl:px-[206px]" >
        <div className=" ">
          <p className="text-slate-400">Testimonials</p>
          <div className="font-sansation">
            <h1 className="text-[#5981B2] font-bold text-5xl">
              Success{" "}
              <span className="text-[#2C4058] font-bold text-5xl">
                Stories
              </span>
            </h1>
          </div>
          <p className="text-[18px] my-4 text-[#2C4058CC]">
          Hear from our successful students who are now thriving in their medical careers.
          </p>
        </div>
      </div>
      <div className="flex mb-24 overflow-hidden ">
        {currentSlide > 0 && (
          <div
            className="w-[47.67px] h-[47.67px] m-4 absolute left-4 top-3/4 rounded-full flex justify-center items-center shadow-heavy text-[#5981B2] cursor-pointer"
            onClick={handlePrevButton}
          >
            <FaCaretLeft className="" />
          </div>
        )}

        <div
          className="flex transition-transform duration-300 ease-in-out overflow-hidden"
          style={{ transform: `translateX(-${currentSlide * 100 / (testimonials.length - visibleItems + 1)}%)` }}
          ref={testimonialContainerRef}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-none">
              <TestimonialCards
                content={testimonial.content}
                imgSrc={testimonial.imgSrc}
                name={testimonial.name}
                designation={testimonial.designation}
              />
            </div>
          ))}
        </div>

        {currentSlide < testimonials.length - 1 && (
          <div
            className="w-[47.67px] h-[47.67px] m-4 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full flex justify-center items-center shadow-heavy text-[#5981B2] cursor-pointer"
            onClick={handleNextButton}
          >
            <FaCaretRight />
          </div>
        )}
      </div>
    </div>
  );
};


const testimonials = [
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, explicabo aliquam quisquam quae modi soluta accusantium placeat maiores beatae? Earum eum, sint recusandae impedit suscipit, dolores quasi accusamus ex aliquam illum enim doloribus soluta nobis.",
    imgSrc: "./images/bg_hero.png",
    name: "John Doe",
    designation: "Student",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, explicabo aliquam quisquam quae modi soluta accusantium placeat maiores beatae? Earum eum, sint recusandae impedit suscipit, dolores quasi accusamus ex aliquam illum enim doloribus soluta nobis.",
    imgSrc: "./images/bg_hero.png",
    name: "John Doe",
    designation: "Student",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, explicabo aliquam quisquam quae modi soluta accusantium placeat maiores beatae? Earum eum, sint recusandae impedit suscipit, dolores quasi accusamus ex aliquam illum enim doloribus soluta nobis.",
    imgSrc: "./images/bg_hero.png",
    name: "John Doe",
    designation: "Student",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, explicabo aliquam quisquam quae modi soluta accusantium placeat maiores beatae? Earum eum, sint recusandae impedit suscipit, dolores quasi accusamus ex aliquam illum enim doloribus soluta nobis.",
    imgSrc: "./images/bg_hero.png",
    name: "John Doe",
    designation: "Student",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, explicabo aliquam quisquam quae modi soluta accusantium placeat maiores beatae? Earum eum, sint recusandae impedit suscipit, dolores quasi accusamus ex aliquam illum enim doloribus soluta nobis.",
    imgSrc: "./images/bg_hero.png",
    name: "John Doe",
    designation: "Student",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, explicabo aliquam quisquam quae modi soluta accusantium placeat maiores beatae? Earum eum, sint recusandae impedit suscipit, dolores quasi accusamus ex aliquam illum enim doloribus soluta nobis.",
    imgSrc: "./images/bg_hero.png",
    name: "John Doe",
    designation: "Student",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, explicabo aliquam quisquam quae modi soluta accusantium placeat maiores beatae? Earum eum, sint recusandae impedit suscipit, dolores quasi accusamus ex aliquam illum enim doloribus soluta nobis.",
    imgSrc: "./images/bg_hero.png",
    name: "John Doe",
    designation: "Student",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, explicabo aliquam quisquam quae modi soluta accusantium placeat maiores beatae? Earum eum, sint recusandae impedit suscipit, dolores quasi accusamus ex aliquam illum enim doloribus soluta nobis.",
    imgSrc: "./images/bg_hero.png",
    name: "John Doe",
    designation: "Student",
  },
];

export default Testimonials;
