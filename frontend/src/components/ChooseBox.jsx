import React from "react";

const ChooseBox = ({ icon, text, boldText }) => {
  // console.log("icon Path", icon);
  return (
    <div className="shadow-xl w-[344px] flex justify-center m-1 border-none rounded-lg">
      {/* <div className=" flex flex-col justify-center items-center"> */}
        <div className="flex flex-col items-center justify-center w-[143px] p-[10px]"> 
        {/* {h-[143px] w-[296px]} */}
          <img src={icon} className=""/>
          <div className="font-normal text-md">
            {text}
            <strong className="font-semibold text-md">{boldText}</strong>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default ChooseBox;
