"use client";
import React, { FC, useState } from "react";
import styles from "./MyInput.module.css";

interface MyInputProps {
  children: string;
  onChange: (value: number | string) => void; 
  type?: 'text' | 'number';
  inline?: boolean;
  value?: number | string;
}

const MyInput: FC<MyInputProps> = ({ children, onChange, type = 'text', inline = false, value: propValue }) => {
  const [text, setText] = useState<string | number>(propValue || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (type === 'number') {
      const numericValue = value === '' ? '' : Number(value);
      
      if (numericValue === '' || numericValue >= 1) {
        setText(numericValue);
        onChange(numericValue);
      } else {
        setText(1);
        onChange(1);
      }
    } else {
      setText(value);
      onChange(value);
    }
  };

  const className = inline ? `${styles.input} ${styles.input_inline}` : `${styles.input} ${styles.input_full}`;
  return (
    <input
      required
      className={className}
      value={propValue !== undefined ? propValue : text}
      onChange={handleChange}
      type={type}
      placeholder={children}
    />
  );
};

export default MyInput;