import React from "react";

const TestimonialCards = ({ content, imgSrc, name, designation }) => {
  return (
    <div className="mx-1 shadow-xl p-5 relative border border- rounded-lg" >
      <div className="w-[310px] h-[301px]">
        <div className="text-[#2C4058CC]">
          <p>{content}</p>
        </div>
        <div className="flex items-center">
          <img src={imgSrc} alt="" className="rounded-full w-[62px] h-[62px]" />
          <div className="m-3 p-2">
            <h3 className="text-[#5981B2] font-bold">{name}</h3>
            <p className="text-[15px] font-normal text-[#2C4058CC]" m>{designation}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TestimonialCards;
