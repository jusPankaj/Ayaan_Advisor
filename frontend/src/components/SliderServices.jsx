import React from "react";

const SliderServices = ({ slides, currentIndex }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 transform"
        style={{
          transform: `translateX(-${(currentIndex * 100) / slides.length}%)`,
          width: `${slides.length * 50}%`, // Adjust the width to accommodate slides
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-1/3 h-[821px] m-3 p-8 shadow-lg flex flex-col shrink-0 ${
              index >= currentIndex && index <= currentIndex + 1
                ? "opacity-100"
                : "opacity-25"
            }`}
          >
            <div className="flex justify-center h-[45%]">
              <img
                src={slide.imgSrc}
                alt="image"
                className="max-w-full h-auto"
              />
            </div>
            <div className="h-[55%]">
              <h1 className="py-4 text-[20px] font-medium gap-[34px] border-b-2 border-slate-200">
                {slide.title}
              </h1>
              <div className="">
                <h1 className="font-medium text-[16px] text-[#5981B2] py-4">
                  {slide.subtitle1}
                </h1>
                <p className="text-[#2C4058] font-normal">{slide.content1}</p>
                <h1 className="font-medium text-[16px] text-[#5981B2] py-4">
                  {slide.subtitle2}
                </h1>
                <p className="text-[#2C4058] font-normal">{slide.content2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderServices;
