import React from 'react';

const CountryPicCircles = () => {
  return (
    <div className="flex flex-wrap w-80 justify-center ">
      <img src="./images/India.png" className="rounded-full absolute  object-cover w-[51.62px] h-[51.62px] mr-0 " />
      <img src="./images/Japan.png" className="rounded-full absolute object-cover w-[51.62px] h-[51.62px] right-24 " />
      <img src="./images/USA.png" className="rounded-full absolute object-cover w-[51.62px] h-[51.62px]  right-36" />
      <img src="./images/Canada.png" className="rounded-full absolute object-cover w-[51.62px] h-[51.62px]  right-28" />
      <img src="./images/SriLanka.png" className="rounded-full object-cover w-[51.62px] h-[51.62px]  left-2 bottom-0.5" />
    </div>
  );
};

export default CountryPicCircles;