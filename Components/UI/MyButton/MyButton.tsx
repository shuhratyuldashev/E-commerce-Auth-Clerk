import React, { FC, ReactNode } from "react";
import styles from "./MyButton.module.css";

interface ButtonProps {
  func?: () => void;
  children: ReactNode;
  width?: "full" | "half" | "inline";
  inline?: boolean;
  outline?: boolean;
  full?: boolean;
  black?: boolean;
  white?: boolean;
}
const MyButton: FC<ButtonProps> = ({
  children,
  inline,
  outline,
  full,
  black,
  white,
  func,
  width,
}) => {
  const buttonStyle = `${styles.button} 
  ${inline ? styles.button_inline : ""}
  ${outline ? styles.button_outline : ""}
  ${full ? styles.button_full : ""}
  ${black ? styles.button_black : ""}
  ${white ? styles.button_white : ""}
  ${width === "full" ? styles.button_width_full : ""}
  ${width === "half" ? styles.button_width_half : ""}
  ${width === "inline" ? styles.button_width_inline : ""}

  `;
  return (
    <button onClick={func} className={buttonStyle}>
      {children}
    </button>
  );
};

export default MyButton;
