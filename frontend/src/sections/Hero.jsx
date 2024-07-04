const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-cover w-full md:w-[1920px] m-auto max-w-full min-h-screen h-auto pb-[10px] box-border">
      <div className="bg-hero_bg w-full m-auto xl:w-[98%] md:w-[98%] h-auto relative rounded-3xl">
        {/* leftSide Text heading and CTA */}
        <div className="md:container  ">
        <div className="flex flex-col justify-center w-full h-full xl:py-24 md:py-15 xl:px-10 pb-2 mb-20">
          <div className="relative z-20 flex flex-col  md:p-8 lg:p-24  gap-3 w-full md:w-[50%] xl:w-[60%]">
            <h1 className="text-2xl md:text-4xl lg:text-2xl xl:text-6xl font-bold font-sansation text-white">
              Your Gateway to a{" "}
              <span className="text-[#FED55F]">Successful Medical Career</span>{" "}
              Abroad
            </h1>
            <p className="font-normal text-white text-md  max-w-sm">
              Comprehensive Guidance and Support for Indian Students Pursuing
              MBBS Abroad
            </p>
            <button className="bg-[#FED55F] w-full md:w-1/2 px-3 py-3  text-md md:text-xl  text-[#2C4058] rounded-lg max-w-xs">
              Get Started Today
            </button>
          </div>
        </div>
        {/* Right side image */}
        <div className="absolute inset-0 overflow-hidden md:block mx-[-30px] hidden xl:px-24">
          <img
            src="./images/bg_hero.png"
            className="absolute z-10 top-[12px]  right-[200px]  md:right-0 "
          />
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Hero;
