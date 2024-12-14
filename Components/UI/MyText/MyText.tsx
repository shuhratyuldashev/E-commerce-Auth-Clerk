import React, { FC, ReactNode } from "react";
import styles from "./Mytext.module.css";

interface MyTextProps {
  children: ReactNode;
  bg?: "white" | "black";
  size?: "gigant" | "big" | "norm" | "min";
  color?: "dark" | "gray" | "light" | "green" | "red";
  weight?: "bold" | "medium" | "smoll";
  font: "Roboto" | "Lora";
  start?: boolean;
}

const MyText: FC<MyTextProps> = ({ children, size, color, weight, font, bg, start }) => {
  const sizeText = size ? styles[`text_${size}`] : "";
  const colorText = color ? styles[`text_${color}`] : "";
  const weightText = weight ? styles[`text_${weight}`] : "";
  const fontText = font ? styles[`text_${font}`] : "Roboto";
  const bgText = bg? styles[`text_${bg}`] : '';
  const startText = start? styles[`text_${start}`] : 'text_center'

  const textStyles = [sizeText, colorText, weightText, fontText, bgText, startText]
    .join(" ")
    .trim();

  return <p className={textStyles}>{children}</p>;
};

export default MyText;
