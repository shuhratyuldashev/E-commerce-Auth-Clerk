import React, { FC } from "react";
import styles from "./Slider.module.css";
import MyText from "../../UI/MyText/MyText";
import MyButton from "../../UI/MyButton/MyButton";
import Link from "next/link";

interface SlideProps {
  background: "slide_1" | "slide_2" | "slide_3";
}

const Slide: FC<SlideProps> = ({ background }) => {
  const SlideStyle = background
    ? `${styles.slider_slide} ${styles[background]}`
    : "";

  return (
    <div className={SlideStyle}>
      <MyText font="Lora" color="light" size="gigant" weight="bold">
        Лучшие <br />
        мебели года
      </MyText>

      <MyText font="Roboto" size="norm" color="light" weight="smoll">
        для лучших из лучших
      </MyText>

      <div className="slide_btns">
        <Link href="/cart">
          <MyButton width="full" white inline>
            В коризну
          </MyButton>
        </Link>
        <Link href="/products">
          <MyButton width="full" white outline>
            За покупками
          </MyButton>
        </Link>
      </div>
    </div>
  );
};

export default Slide;
