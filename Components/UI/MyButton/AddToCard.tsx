"use client";

import React from "react";
import { useDispatch } from "react-redux";
import MyButton from "@/Components/UI/MyButton/MyButton";
import { addToCart } from "@/store/productsSlice";

const AddToCard = ({ product }) => {
  const dispatch = useDispatch();

  const productToCart = {
    cartCard: true,
    name: product.name,
    price: product.price,
    count: product.count,
    img: product.img,
    linkId: product.linkId,
  };

  const handleAddToCard = () => {
    dispatch(addToCart(productToCart));
  };

  return (
    <MyButton func={handleAddToCard} width="inline" inline black>
      Добавить в корзину
    </MyButton>
  );
};

export default AddToCard;