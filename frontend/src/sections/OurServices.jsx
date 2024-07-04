import React, { useState } from "react";
import SliderServices from "../components/SliderServices";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";

export const OurServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 2 ? prevIndex : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#FBFAFF]">
      <div className="flex">
        <div className="flex flex-col justify-center py-[100px] max-w-full w-[1420px] px-8 md:px-[206px]">
          <div className="max-w-full flex justify-between items-center">
            <div>
              <p className="text-slate-400">What we offer</p>
              <div className="">
                <h1 className="text-[#5981B2] font-bold text-5xl">
                  Our{" "}
                  <span className="text-[#2C4058] font-bold text-5xl">
                    Services
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <p className="text-[18px] my-4 text-[#2C4058CC]">
            We offer a comprehensive range of services designed to support Indian
            students throughout their journey of pursuing an MBBS degree abroad.
            Our goal is to make the entire process seamless, from the initial
            counseling session to your successful integration into your chosen
            university.
          </p>
        </div>
        <div className="flex items-center">
          {currentIndex > 0 && (
            <div
              className="w-[47.67px] h-[47.67px] relative right-48 top-16 rounded-full flex justify-center items-center shadow-heavy text-[#5981B2] cursor-pointer"
              onClick={prevSlide}
            >
              <FaCaretLeft />
            </div>
          )}
          {currentIndex < slidesData.length - 2 && (
            <div
              className="w-[47.67px] h-[47.67px] relative m-4 right-44 top-[88px] transform -translate-y-1/2 rounded-full flex justify-center items-center shadow-heavy text-[#5981B2] cursor-pointer"
              onClick={nextSlide}
            >
              <FaCaretRight />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center m-0 p-0 relative">
        <SliderServices slides={slidesData} currentIndex={currentIndex} />
      </div>

      <div className="bg-[#2C4058] sm:h-auto md:h-[390px] max-w-full flex sm:items-center sm:justify-center px-8 md:px-[206px]">
        <div className="flex flex-col justify-center items-start ">
          <div className="text-4xl text-white font-extrabold font-sansation ">
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures.
          </div>
          <p className="text-[#D4CDEF] font-normal my-3 text-[18px]">
            We'll get back to you within 24 hours
          </p>
          <button
            type="submit"
            className="bg-[#FED55F] text-[#2C4058] text-[16px] py-3 px-8 rounded-md font-semibold my-2"
          >
            Learn more about our services
          </button>
        </div>
      </div>
    </div>
  );
};

export const slidesData = [
  {
    imgSrc: "./images/illustration1.png",
    title: "Personalized Counseling and Guidance",
    subtitle1: "Understanding Your Aspirations",
    content1:
      "We take the time to understand your academic background, career goals, and personal preferences to provide customized advice tailored to your needs.",
    subtitle2: "Career Pathways",
    content2:
      "Our expert counselors help you explore various career pathways and choose the best-fit medical program that aligns with your goals.",
  },
  {
    imgSrc: "./images/illustration2.png",
    title: "Personalized Counseling and Guidance",
    subtitle1: "Understanding Your Aspirations",
    content1:
      "We take the time to understand your academic background, career goals, and personal preferences to provide customized advice tailored to your needs.",
    subtitle2: "Career Pathways",
    content2:
      "Our expert counselors help you explore various career pathways and choose the best-fit medical program that aligns with your goals.",
  },
  {
    imgSrc: "./images/illustration1.png",
    title: "Personalized Counseling and Guidance",
    subtitle1: "Understanding Your Aspirations",
    content1:
      "We take the time to understand your academic background, career goals, and personal preferences to provide customized advice tailored to your needs.",
    subtitle2: "Career Pathways",
    content2:
      "Our expert counselors help you explore various career pathways and choose the best-fit medical program that aligns with your goals.",
  },
  {
    imgSrc: "./images/illustration2.png",
    title: "Personalized Counseling and Guidance",
    subtitle1: "Understanding Your Aspirations",
    content1:
      "We take the time to understand your academic background, career goals, and personal preferences to provide customized advice tailored to your needs.",
    subtitle2: "Career Pathways",
    content2:
      "Our expert counselors help you explore various career pathways and choose the best-fit medical program that aligns with your goals.",
  },
  {
    imgSrc: "./images/illustration1.png",
    title: "Personalized Counseling and Guidance",
    subtitle1: "Understanding Your Aspirations",
    content1:
      "We take the time to understand your academic background, career goals, and personal preferences to provide customized advice tailored to your needs.",
    subtitle2: "Career Pathways",
    content2:
      "Our expert counselors help you explore various career pathways and choose the best-fit medical program that aligns with your goals.",
  },
  {
    imgSrc: "./images/illustration2.png",
    title: "Personalized Counseling and Guidance",
    subtitle1: "Understanding Your Aspirations",
    content1:
      "We take the time to understand your academic background, career goals, and personal preferences to provide customized advice tailored to your needs.",
    subtitle2: "Career Pathways",
    content2:
      "Our expert counselors help you explore various career pathways and choose the best-fit medical program that aligns with your goals.",
  },
  {
    imgSrc: "./images/illustration1.png",
    title: "Personalized Counseling and Guidance",
    subtitle1: "Understanding Your Aspirations",
    content1:
      "We take the time to understand your academic background, career goals, and personal preferences to provide customized advice tailored to your needs.",
    subtitle2: "Career Pathways",
    content2:
      "Our expert counselors help you explore various career pathways and choose the best-fit medical program that aligns with your goals.",
  },

  {
    imgSrc: "./images/illustration2.png",
    title: "Personalized Counseling and Guidance",
    subtitle1: "Understanding Your Aspirations",
    content1:
      "We take the time to understand your academic background, career goals, and personal preferences to provide customized advice tailored to your needs.",
    subtitle2: "Career Pathways",
    content2:
      "Our expert counselors help you explore various career pathways and choose the best-fit medical program that aligns with your goals.",
  },
];
