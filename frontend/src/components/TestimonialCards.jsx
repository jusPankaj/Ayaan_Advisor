import React from "react";

const TestimonialCards = ({ Content, imgSrc, name, designation }) => {
  return (
    <div className="mx-3 shadow-xl p-5 relative border border- rounded-lg">
        {/* {style={"border: 0.8px solid; linear-gradient(180deg, rgba(0, 0, 0, 0.034) 0%, rgba(0, 0, 0, 0) 50.31%, rgba(0, 0, 0, 0.108) 100%)"}>} */}
      <div className="w-[310px] h-[301px]">
        <div className="text-[#2C4058CC]">
          <p>{Content}</p>
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
