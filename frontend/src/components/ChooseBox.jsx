import React from "react";

const ChooseBox = ({ icon, text, boldText }) => {
  return (
    <div className="shadow-lg w-full md:w-[344px] h-[191px] flex justify-center -m-0.5 border-none rounded-lg box-content">
      {/* <div className=" flex flex-col justify-center items-center"> */}
        <div className="flex flex-col items-center justify-center p-12"> 
        {/* {h-[143px] w-[296px]} */}
          <img src={icon} className="h-[53px] w-[53px]"/>
          <div className="font-normal text-md">
            {text}
            <strong className="font-semibold  items-center text-md">{boldText}</strong>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};


export default ChooseBox;
