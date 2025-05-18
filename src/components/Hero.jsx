import React from "react";
import chart from "../assets/images/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="relative  container flex flex-col-reverse md:flex-row justify-center items-center md:justify-between px-6 mt-10">
      <div className="flex flex-col text-center mb-32 space-y-8 md:w-1/2">
        <h1 className="text-4xl  max-w-md md:text-5xl md:text-left text-darkBlue font-bold">
          Bring everyone <br /> together to build <br /> better products.
        </h1>
        <p className="text-darkGrayishBlue max-w-sm text-sm md:text-lg md:text-left">
          Manage makes it simple for software teams
          <br /> to plan day-to-day tasks while keeping the <br /> larger team
          goals in view.
        </p>

        <button className=" text-md rounded-full p-3 self-baseline px-6 py-2 text-white bg-brightRed hover:bg-red-400 mx-auto md:mx-0">
          Get Started
        </button>
      </div>
      <div className="">
        <img src={chart} alt="image-illustrator" />
      </div>
    </div>
  );
};

export default Hero;
