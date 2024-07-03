import AccordianFAQs from "../components/AccordianFAQs";

const FAQs = () => {
  return (
    <div className="bg-[#FBFAFF] px-[206px] max-w-full">
      <div>
        <div className="py-6">
          <p className="text-slate-400">FAQs</p>
          <div>
            <h1 className="text-[#5981B2] font-semibold text-5xl">
              Frequently
            </h1>
            <h1 className="text-[#2C4058] font-semibold text-5xl">
              Asked Questions
            </h1>
          </div>
          <p className="text-[18px] my-4 text-[#2C4058CC] font-normal">
            Please find your answers.
          </p>
        </div>
      </div>
      <div className="min-h-full bg-gray-50 flex items-center justify-center ">
        <AccordianFAQs faqsData={faqsData} />
      </div>
      <button className="bg-[#5981B2] text-white rounded-lg h-12 w-[155px] mb-16">
        View All FAQs
      </button>
    </div>
  );
};

const faqsData = [
  {
    id: 1,
    Question: "What are the eligibility criteria for studying MBBS abroad?",
    Answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
  },
  {
    id: 1,
    Question: "How do I choose the right university?",
    Answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
  },
  {
    id: 1,
    Question: "What is the cost of studying MBBS abroad?",
    Answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
  },
  {
    id: 1,
    Question: "What support do you provide after admission?",
    Answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
  },
  {
    id: 1,
    Question: "How do I apply for a student visa?",
    Answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",
  },
];

export default FAQs;
