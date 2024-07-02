import { useState } from "react";

const SliderServices = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-center transition-transform duration-1000 transform">
        {/* {style={{ transform: `translateX(-${currentIndex * 35}%)` }}} */}
        {console.log("outside map", slides)}
        {slides &&
          slides.map((slide, index) => (
            <div
              key={index}
              className={`opacity-100 mx-2 ${
                currentIndex + 1 === index || currentIndex === index
                  ? "opacity-100"
                  : "opacity-25"
              }`}
            >
              {console.log("inside map", slide)}
              <div className="w-[539px] h-[821px]  m-3 p-8 shadow-lg flex flex-col">
                <div className="flex justify-center h-[45%]">
                  <img src={slide.imgSrc} alt="image" />
                </div>
                <div className="h-[55%]">
                  <h1 className="py-4 text-[20px] font-medium gap-[34px] border-b-2 border-slate-200">
                    {slide.title}
                  </h1>
                  <div className="">
                    <h1 className="font-medium text-[16px] text-[#5981B2] py-4">
                      {slide.subtitle1}
                    </h1>
                    <p className="text-[#2C4058] font-normal">
                      {slide.content1}
                    </p>
                    <h1 className="font-medium text-[16px] text-[#5981B2] py-4">
                      {slide.subtitle2}
                    </h1>
                    <p className="text-[#2C4058] font-normal">
                      {slide.content2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default SliderServices;
