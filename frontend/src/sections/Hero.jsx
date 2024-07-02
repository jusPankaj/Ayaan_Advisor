const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-hero_bg bg-cover h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="./images/bg_hero.png"
          className="absolute z-10 top-32 md:top-40 lg:top-64 object-cover h-auto w-full md:h-[772.72px] md:w-[767.93px] right-0 md:right-[60px]"
        />
      </div>
      <div className="flex flex-col justify-center h-full mx-4 md:mx-12 lg:mx-24 pb-2 mb-24">
        <div className="relative z-20 flex flex-col p-4 md:p-8 lg:p-24 leading-7 gap-4 w-full md:w-[50%]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-sansation text-white">
            Your Gateway to a <span className="text-[#FED55F]">Successful Medical Career</span> Abroad
          </h1>
          <p className="font-medium text-white text-lg md:text-xl lg:text-2xl max-w-sm">
            Comprehensive Guidance and Support for Indian Students Pursuing MBBS
            Abroad
          </p>
          <button className="bg-[#FED55F] w-full md:w-1/2 px-3 py-4 md:py-6 text-lg md:text-xl lg:text-2xl text-[#2C4058] rounded-lg max-w-xs">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
