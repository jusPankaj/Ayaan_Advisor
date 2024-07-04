import ChooseBox from "../components/ChooseBox";

const WhyChoose = () => {
  return (
    <div className="max-w-full ">
      <div className="px-8 md:px-[150px] xl:px-[206px] flex flex-col mb-20">
        <div className="flex flex-col md:flex-wrap">
          <div>
            <p className="text-slate-400">The reason</p>
          </div>
          <div>
            <h1 className="text-[#5981B2] font-semibold text-5xl font-sansation">
              Why Choose
            </h1>
          </div>
          <div>
            <h1 className="text-[#2C4058] font-semibold text-5xl font-sansation">
              Ayaan Overseas Advisor
            </h1>
          </div>

          <p className="text-[18px] my-4 text-[#2C4058CC]  max-w-[1029px] font-normal">
            At Ayaan Overseas Advisors, we understand that embarking on an
            international education journey is a significant decision, and we're
            here to make that process as smooth and rewarding as possible.
          </p>
        </div>
        <div>
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 w-full mt-5 mb-4">
            <ChooseBox
              icon="/images/PersonalizeGuidance.png"
              text={"Personalize "}
              boldText={"Guidance"}
            />
            <ChooseBox
              icon="/images/ExpertKnowledge.png"
              text={"Expert "}
              boldText={"Knowledge"}
            />
            <ChooseBox
              icon="/images/TopUniveristyConnections.png"
              text={"Top "}
              boldText={"Univeristy Connections"}
            />
            <ChooseBox
              icon="/images/HassleFree.png"
              text={"Hassle "}
              boldText={"-Free Process"}
            />
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 w-full">
            <ChooseBox
              icon="/images/AffordableTransparent.png"
              text={"Affordable & "}
              boldText={"Transparent"}
            />
            <ChooseBox
              icon="/images/ComprehensiveSupport.png"
              text={"Comprehensive "}
              boldText={"Support"}
            />
            <ChooseBox
              icon="/images/SuccessStories.png"
              text={"Success "}
              boldText={"Stories"}
            />
            <ChooseBox
              icon="/images/FamilyLikeCare.png"
              text={"Family-"}
              boldText={"Like Care"}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#5981B2] xl:px-[206px] sm:h-auto md:h-[390px] max-w-full flex sm:items-center sm:justify-center px-8 md:px-[150px]">
        <div className="flex flex-col justify-center items-start">
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

export default WhyChoose;
