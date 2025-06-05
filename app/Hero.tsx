import React from "react";

const Hero = () => {
  return (
    <main className="w-full flex items-center justify-center ">
    <div className="mx-8 py-9 md:py-20 w-full md:w-[60%] flex flex-col gap-4">
      <h1 className="text-center text-3xl md:text-5xl lg:text-6xl font-normal">
        Celebrating African design excellence
      </h1>
      <p className="text-center text-sm md:text-base font-normal text-gray-5">
        A curated collection of beautifully designed websites and apps by
        Africa’s top designers. Submit yours to be featured. New content added
        weekly.{" "}
      </p>
    </div>
    </main>
  );
};

export default Hero;
