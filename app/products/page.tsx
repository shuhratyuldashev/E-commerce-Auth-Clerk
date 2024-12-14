"use client"
import Header from "@/Components/Logic/User/Header";
import ProductsCards from "@/Components/Logic/Products/ProductsCards";
import store from "@/store";
import React from "react";
import { Provider } from "react-redux";
import ProductFilter from "@/Components/Logic/Products/ProductFilter";

const page = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <ProductFilter />
        <ProductsCards />
      </div>
    </Provider>
  );
};

export default page;
