import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
const Swipers = () => {
  return (
    <Swiper
      // spaceBetween={40}
      // slidesPerView={2}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      // loop={true}
      slidesPerView={2}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      slidesPerGroup={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper contain"
      // className="box"
    >
      <SwiperSlide>
        <img src="./images/sri.jpg" alt="sri-lanka" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/Delta.png" alt="delta" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/emirate.png" alt="emirate" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/ethopia.png" alt="ethopia" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/demograph.jpg" alt="demograph" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./images/Qatar.png" alt="Qater" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipers;
