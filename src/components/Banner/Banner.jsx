import React from 'react';
import BannerImg from '../../../src/assets/coffee_banner.png'

const Banner = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[480px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="order-2 sm:order-1 ml-5 mt-10">
            <h1 data-aos="fade-down" data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Where <span data-aos="zoom-out" data-aos-delay="300" className="text-primary font-cursive">Coffee</span>{" "}
              Dreams Come True
            </h1>
            <div data-aos="fade-up" data-aos-delay="400" className="mt-4">
              <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200">
                Menu
              </button>
            </div>
          </div>
          <div data-aos="zoom-in" className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
            <img
              src={BannerImg}
              alt=""
              className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin"
            />
            <div data-aos="fade-right" className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-20 p-3 rounded-xl">
              <h1 className="text-white">Biji Kopi Alami</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner