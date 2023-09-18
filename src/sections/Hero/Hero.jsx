import React from "react";
import heroBg from "../../assets/images/hero-bg.png";

const Hero = () => {
  return (
    <section id="home" className="mx-auto">
      <div className="flex flex-col xl:flex-row items-center h-screen md:py-32 py-28 px-6 xl:px-32 xl:py-36 xl:gap-20">
        <div className="text-center xl:text-left mt-12 md:max-w-4xl">
          <h1
            className="xl:max-w-lg text-5xl md:text-6xl font-extrabold mb-2 md:mb-6 xl:mb-2 leading-tight"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Your <span className="text-second-color">one-stop</span> shop for
            all
          </h1>
          <p
            className="text-lg text-gray-500 font-meduim mb-3 md:max-w-4xl md:mb-6 xl:mb-2"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            Discover a world of convenience and quality at our store.
          </p>
          <button
            className="bg-second-color text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-500"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            Order Now
          </button>
        </div>

        <div className="xl:right-12 xl:bottom-16 xl:w-1/2 mt-12 w-[350px] md:w-4/6">
          <img src={heroBg} alt="" data-aos="fade-down" data-aos-delay="600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
