import React from 'react';

const CountryPicCircles = () => {
  return (
    <div className="flex flex-wrap w-80 justify-center ">
      <img src="./images/India.png" className="rounded-full aspect-square object-cover w-[51.62px] h-[51.62px] mr-10 " />
      <img src="./images/Japan.png" className="rounded-full aspect-square object-cover w-[51.62px] h-[51.62px] mr-10 " />
      <img src="./images/USA.png" className="rounded-full aspect-square object-cover w-[51.62px] h-[51.62px]  left-3 bottom-1" />
      <img src="./images/Canada.png" className="rounded-full aspect-square object-cover w-[51.62px] h-[51.62px]  right-2 bottom-1" />
      <img src="./images/SriLanka.png" className="rounded-full aspect-square object-cover w-[51.62px] h-[51.62px]  left-2 bottom-1" />
    </div>
  );
};

export default CountryPicCircles;