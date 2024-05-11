import React from "react";
import banner from "../About-Us.png";
import foodBanner from "../foodBanner.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="text-center content-center items-center mx-[300px] pt-[150px] pb-20">
        <h1 className="font-bold text-2xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          ABOUT US
        </h1>
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
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          DISCLAIMER:No copyright infringement intended. All images used in this
          website belong to the rightful owners. This is for learning purposes
          only.
        </div>
      </div>
    </>
  );
};
export default AboutUs;
