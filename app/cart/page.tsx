"use client";
import ProductCardContainer from "@/Components/Logic/Products/ProductCardContainer";
import Header from "@/Components/Logic/User/Header";
import MyText from "@/Components/UI/MyText/MyText";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

interface iProduct {
    id: number;
    name: string;
    price: number;
    img: string;
    count: number;
    linkId: number;
    cartCard?: boolean;
}

const Page = () => {
    const cart = useSelector((state: RootState) => state.product.cart);

    console.log('Cart contents:', cart);

    return (
        <div>
            <Header />
            {cart.length === 0 ? (
                  <div className="product_cards_empty">
                      <MyText weight='bold' font='Roboto' size='big' color='gray'>
                          Упс... Тут пока что пусто!
                      </MyText>
                      <MyText weight='medium' font='Roboto' size='norm' color='gray'>
                          Не переживайте, на нашем сайте есть множество отличных товаров. <br />
                          Переходите на <Link className='Link' href='/products'>страницу товаров</Link>, чтобы выбрать что-то для себя.
                        </MyText>
                  </div>
            ) : (
              <div className="products_carts_container">
                  <div className="products_cart_card">
                  {cart.map((product: iProduct) => (
                    <ProductCardContainer 
                          key={product.linkId} 
                          name={product.name} 
                          img={product.img} 
                          price={product.price} 
                          type={product.cartCard ? 'cartCard' : 'productCard'} 
                          count={product.count}
                          linkId={product.linkId}/>
                          ))}
                        </div>
                    </div>
            )}
        </div>
    );
};

export default Page;