import Header from "@/Components/Logic/User/Header";
import AddToCard from "@/Components/UI/MyButton/AddToCard";
import MyText from "@/Components/UI/MyText/MyText";
import React from "react";
import styless from './product.module.css'

export default async function Page({
  params,
}: {
  params: { category: string; id: string };
}) {
  const fetcher = (args: string) => fetch(args).then((res) => res.json());
  const data = await fetcher("http://localhost:3000/api/products");

  let product = null;
  for (const category of data) {
    const foundProduct = category.products.find((p: any) => p.linkId === parseInt(params.id));
    if (foundProduct) {
      product = { ...foundProduct, category: category.category };
      break;
    }
  }
  if (!product) {
    return <MyText weight="bold" size="gigant" font="Roboto" color="dark">Продукт не найден</MyText>;
  }

  return (
    <>
      <Header />
      <div className={styless.product_contain}>
        <div className="product_img">
          <img src={product.img} alt="" />
        </div>
        <div className={styless.product_main}>
          <div className={styless.product_name}>
            <MyText weight="bold" size="big" color="dark" font="Roboto">{product.name}</MyText>
          </div>
          <div className={styless.product_description}>
            <MyText color="gray" size="norm" font="Roboto" weight="smoll">Описание:</MyText>
            <MyText start color="dark" size="norm" font="Roboto" weight="smoll">{product.description}</MyText>
          </div>
          <div className={styless.product_category}>
            <MyText color="gray" size="norm" font="Roboto" weight="smoll">Категория:</MyText>
            <MyText bg="black" color="light" size="min" font="Roboto" weight="smoll">{product.category}</MyText>
          </div>
          <div className={styless.product_price}>
            <MyText color="gray" size="norm" font="Roboto" weight="smoll">Цена:</MyText>
            <MyText color="green" size="norm" font="Roboto" weight="medium">{product.price} uzs</MyText>
          </div>
          <div className={styless.product_btn}>
            <AddToCard product={product}/>
          </div>
        </div>
      </div>
    </>
  );
}