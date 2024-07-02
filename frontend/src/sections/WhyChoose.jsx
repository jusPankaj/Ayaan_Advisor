import ChooseBox from "../components/ChooseBox"

const WhyChoose = () => {
  return (
    <div>
        <div className="flex flex-col justify-center w-[1418px] px-32 mb-24 gap-[50px]">
            <div className="w-[1029px] ">
                <p className="text-slate-400">The reason</p>
                <div>
                    <h1 className="text-[#5981B2] font-semibold text-5xl">Why Choose</h1>
                    <h1 className="text-[#2C4058] font-semibold text-5xl">Ayaan Overseas Advisor</h1>
                </div>
                <p className="text-[18px] my-4 text-[#2C4058CC] font-normal">At Ayaan Overseas Advisors, we understand that embarking on an international education journey is a significant decision, and we're here to make that process as smooth and rewarding as possible.</p>
            </div>
            <div>
                <div className="flex flex-wrap  w-[1412px] h-[394px]">
                
                <ChooseBox icon="/images/PersonalizeGuidance.png" text={"Personalize "} boldText={"Guidance"} />
                <ChooseBox icon="/images/ExpertKnowledge.png" text={"Expert "} boldText={"Knowledge"} />
                <ChooseBox icon="/images/TopUniveristyConnections.png" text={"Top "} boldText={"Univeristy Connections"} />
                <ChooseBox icon="/images/HassleFree.png" text={"Hassle "} boldText={"-Free Process"} />
                <ChooseBox icon="/images/AffordableTransparent.png" text={"Affordable & "} boldText={"Transparent"} />
                <ChooseBox icon="/images/ComprehensiveSupport.png" text={"Comprehensive "} boldText={"Support"} />
                <ChooseBox icon="/images/SuccessStories.png" text={"Success "} boldText={"Stories"} />
                <ChooseBox icon="/images/FamilyLikeCare.png" text={"Family-"} boldText={"Like Care"} />
            </div>
            </div>
        </div>

        <div className="bg-[#5981B2] h-[390px]  flex flex-col justify-center items-start px-[370px]">
            <div className="text-4xl w-[1180px] text-white font-extrabold  ">
            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.
            </div>
            <p className="text-[#D4CDEF] font-normal my-2 text-[18px]">
            We'll get back to you within 24 hours
            </p>
            <button type="submit" className="bg-[#FED55F] text-[#2C4058] text-[16px] py-3 px-8 rounded-md font-semibold my-2">Learn more about our services</button>

        </div>
    </div>
  )
}

export default WhyChoose