import React from "react";
import banner from "../About-Us.png";
import foodBanner from "../foodBanner.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="text-center content-center items-center mx-[300px] pt-[150px] pb-20">
        <h1 className="font-bold text-gray-700 text-2xl mb-5">ABOUT US</h1>
        <img
          className="h-[500px] w-[920px] rounded-2xl my-5"
          alt="Banner-Image"
          src={banner}
        />
        <img
          className="h-[500px] w-[920px] rounded-2xl"
          alt="Food-Banner-Image"
          src={foodBanner}
        />
      </div>
    </>
  );
};
export default AboutUs;
