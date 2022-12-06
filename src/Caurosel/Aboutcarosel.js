import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Aboutcarosel = () => {
  return (
    // <Swiper
    //   // install Swiper modules
    //   slidesPerView={1}
    //   slidesPerGroup={1}
    //   spaceBetween={30}
    //   centeredSlides={true}
    //   autoplay={{
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   }}
    //   pagination={{
    //     clickable: true,
    //   }}
    //   modules={[Autoplay, Pagination]}
    //   className="mySwiper about-swipper"
    // >
    //   <SwiperSlide className="tours">
    //     <img src="./images/aboutus1.jpg" alt="" />
    //   </SwiperSlide>
    //   <SwiperSlide className="tours">
    //     <img src="./images/israel.jpg" alt="" />
    //   </SwiperSlide>
    //   <SwiperSlide className="tours">
    //     <img src="./images/motorcycle.jpg" alt="" />
    //   </SwiperSlide>
    //   <SwiperSlide className="tours">
    //     <img src="./images/waterfall.jpg" alt="" />
    //   </SwiperSlide>
    // </Swiper>

    // Import Swiper React components

    // Import Swiper styles

    // import required modules

    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper about-slider"
    >
      <SwiperSlide className="slider">
        {" "}
        <img src="./images/aboutus1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide className="slider">
        {" "}
        <img src="./images/israel.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide className="slider">
        <img src="./images/israel.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide className="slider">
        {" "}
        <img src="./images/motorcycle.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Aboutcarosel;
