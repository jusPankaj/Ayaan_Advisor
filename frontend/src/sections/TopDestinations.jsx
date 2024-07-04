import React from "react";
import WorldMaps from "../components/WorldMaps";

const TopDestinations = () => {
  return (
    <div className="bg-[#5981B2] w-full h-auto relative">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-end p-8 md:p-0 md:h-[1091px]">
        <div className="flex justify-center items-center rounded-3xl bg-[#2C4058] h-auto w-full md:w-[1172px] md:h-[198px] px-8 md:px-[39px] py-8 md:py-[79px] mb-8 md:mb-0">
          <div className="hidden md:block ">
            <WorldMaps />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-white font-extrabold text-[28px] md:text-[38px]">
              Other Destinations
            </h1>
            <p className="font-normal text-[16px] md:text-[18px] text-white">
              Explore more countries where you can pursue your mbbs
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h1 className="text-white font-bold text-[18px] mb-4 md:mb-0">
              Circles
            </h1>
            <button className="bg-[#FED55F] h-12 w-[200px] md:w-[287px] text-[#2C4058] rounded-md">
              Discover more Destinations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;














