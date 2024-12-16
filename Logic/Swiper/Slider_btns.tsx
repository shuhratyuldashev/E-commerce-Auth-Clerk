import React from "react";
import MyButton from "../../UI/MyButton/MyButton";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { useSwiper } from "swiper/react";

const Slider_btns = () => {
  const swiper = useSwiper();

  const nextSlide = () => {
    swiper.slideNext();
  };

  const prevSlide = () => {
    swiper.slidePrev();
  };

  return (
    <div className="slider_btns">
      <MyButton width="inline" func={prevSlide} white outline>
        <IoMdArrowBack size={20} />
      </MyButton>
      <MyButton width="inline" func={nextSlide} white outline>
        <IoMdArrowForward size={20} />
      </MyButton>
    </div>
  );
};

export default Slider_btns;
