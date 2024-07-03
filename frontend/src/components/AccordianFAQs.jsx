import React, { useState } from "react";

const AccordianFAQs = ({ faqsData }) => {
  const [isActive, setIsActive] = useState(null);

  const handleClick = (index) => {
    setIsActive(isActive === index ? null : index);
  }

  return (
    <div className="flex flex-col items-center bg-white min-w-screen">
      <div className="">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b py-4 cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <div className="flex items-center">
              <div className="px-3">
                <h1 className="text-[#3C3C4380] mr-4 text-xl font-medium">{index > 9 ? {index} + 1: `0${index+1}`}</h1>
              </div>
              <div>
                <h1 className="text-[#5981B2] font-medium text-[32px]">{faq.Question}</h1>
                {isActive === index && (
                  <p className="text-[#2C4058CC] mt-2">{faq.Answer}</p>
                )}
              </div>
            </div>
            <div>
              {isActive !== index ? (
                <div className="bg-[#F3F5F6] text-black rounded-full h-12 w-12 px-4 flex justify-center items-center text-[14px]">
                  +
                </div>
              ) : (
                <div className="bg-[#2C4058] text-white rounded-full h-12 w-12 px-4 flex justify-center items-center text-[14px]">
                  x
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordianFAQs;
