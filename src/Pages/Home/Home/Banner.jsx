import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import img1 from "../../../assets/ww.jpeg";
import img2 from "../../../assets/banner/2.jpg";
import img3 from "../../../assets/banner/5.jpg";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        navigation={true}
        autoplay={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img className="w-full" src={img1} alt="" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-2 lg:space-y-7 lg:pl-12 lg:w-1/2">
              <h2 className="lg:text-8xl  text-[25px]  pl-10 font-bold">
                We Repair All Brandes of{" "}
                <span className="text-red-600"> Car.</span>
              </h2>
              <p className="pl-10 text-[10px] lg:text-3xl font-bold">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="pl-20">
                <button
                  className="flex items-center gap-2 lg:gap-5 text-[10px] lg:text-2xl bg-orange-500 p-1 lg:p-4 rounded-2xl
                           bg-gradient-to-r from-[#b71c1c] to-[rgba(21, 21, 21, 0)]
                           "
                >
                  Discover More <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img2} alt="" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-2 lg:space-y-7 lg:pl-12 lg:w-1/2">
              <h2 className="lg:text-8xl  text-[25px]  pl-10 font-bold">
                We Repair All Brandes of{" "}
                <span className="text-red-600"> Car.</span>
              </h2>
              <p className="pl-10 text-[10px] lg:text-3xl font-bold">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="pl-20">
                <button
                  className="flex items-center gap-2 lg:gap-5 text-[10px] lg:text-2xl bg-orange-500 p-1 lg:p-4 rounded-2xl
                           bg-gradient-to-r from-[#b71c1c] to-[rgba(21, 21, 21, 0)]
                           "
                >
                  Discover More <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img3} alt="" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-2 lg:space-y-7 lg:pl-12 lg:w-1/2">
              <h2 className="lg:text-8xl  text-[25px]  pl-10 font-bold">
                We Repair All Brandes of{" "}
                <span className="text-red-600"> Car.</span>
              </h2>
              <p className="pl-10 text-[10px] lg:text-3xl font-bold">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="pl-20">
                <button
                  className="flex items-center gap-2 lg:gap-5 text-[10px] lg:text-2xl bg-orange-500 p-1 lg:p-4 rounded-2xl
                           bg-gradient-to-r from-[#b71c1c] to-[rgba(21, 21, 21, 0)]
                           "
                >
                  Discover More <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
