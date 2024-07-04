import React from "react";
import WorldMaps from "../components/WorldMaps";
import CountryPicCircles from "../components/CountryPicCircles";

const TopDestinations = () => {
  return (
    // {bg-[#5981B2]}
    <div className=" w-full h-[1091px] relative bg-[#5981B2]">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-end p-8 md:p-0 md:h-[1091px]">
        <div>
          <h1 className="flex text-center absolute text-[48px] text-white font-bold top-4 font-sansation left-[34rem]">Top Destinations for MBBS</h1>
        </div>
        <div className="w-full mb-24 overflow-hidden">
            <WorldMaps />
        </div>
        <div className="absolute bottom-10 flex justify-between items-center rounded-3xl bg-[#2C4058] h-auto w-full sm:w-[900px] lg:h-[198px] px-8 md:px-[39px] py-8 md:py-[79px] mb-8 md:mb-0">
          
          <div className="flex-1 w-1/3 text-center md:text-left">
            <h1 className="text-white font-extrabold text-[24px] lg:text-[38px]">
              Other Destinations
            </h1>
            <p className="font-normal text-[16px] md:text-[18px] text-white">
              Explore more countries where you can pursue your mbbs
            </p>
          </div>
          <div className="flexw-2/3 flex-col items-center md:items-end">
            <h1 className="text-white font-bold text-[18px] mb-4 md:mb-0">
              <CountryPicCircles />
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
