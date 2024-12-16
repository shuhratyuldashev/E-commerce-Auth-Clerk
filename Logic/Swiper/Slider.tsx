"use client";
import React from "react";
import "swiper/css";
import MyButton from "../../UI/MyButton/MyButton";
import Slide from "./Slide";
import Slider_btns from "./Slider_btns";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
        type: "bullets",
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      className="slider"
      spaceBetween={25}
      slidesPerView={1}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <Slider_btns />
      <SwiperSlide>
        <Slide background="slide_1" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide background="slide_2" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide background="slide_3" />
      </SwiperSlide>
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

const SlideContent = () => {
  const swiper = useSwiper();

  return (
    <div>
      <img src="/assets/imgs/Slider_slide-1.png" alt="Slide 1" />
      <MyButton func={() => swiper.slideNext()} white outline>
        Next
      </MyButton>
      <MyButton func={() => swiper.slidePrev()} white outline>
        Prev
      </MyButton>
    </div>
  );
};

export default Slider;
