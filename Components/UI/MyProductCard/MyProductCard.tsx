import React, { FC, useState } from "react";
import MyButton from "../MyButton/MyButton";
import MyText from "../MyText/MyText";
import Link from "next/link";
import { useDispatch } from "react-redux";
import styless from './MyProductCard.module.css'
import { addToCart, removeFromCart } from "@/store/productsSlice";
import MyInput from "../MyInput/MyInput";
import { addCount, reduceCount } from "@/store/cartSlice";
import { MdOutlineClose } from "react-icons/md";

interface MyProductCardTypes {
  productName: string;
  productPrice: number;
  productImg: string;
  productCount: number;
  linkId: number;
  idCategory: number;
  productCard?: boolean;
  cartCard?: boolean;
}

const MyProductCard: FC<MyProductCardTypes> = ({
  productCard,
  cartCard,
  productName,
  productPrice,
  productImg,
  productCount,
  linkId,
  idCategory
}) => {
  const [count, setCount] = useState(productCount || 1);

  const backgroundStyle = {
    backgroundImage: `url(${productImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  };

  const dispatch = useDispatch();

  const productToCart = {
    cartCard: true,
    name: productName,
    price: productPrice,
    count: count,
    img: productImg,
    linkId: linkId,
  };

  const handleAddToCard = () => {
    dispatch(addToCart(productToCart));
  }

  const addCounter = () => {
    setCount(prev => prev + 1);
    dispatch(addCount({ count: count + 1 }));
  }

  const reduceCounter = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
      dispatch(reduceCount({ count: count - 1 }));
    }
  }

  const deleteCart = () => {
    console.log('Attempting to remove product with linkId:', linkId);
    dispatch(removeFromCart(linkId));
  }

  return (
    <>
      {productCard && (
        <div className={styless.product_card_container}>
          <div className={styless.product_card}>
            <Link href={`/product/${idCategory}/${linkId}`} className={styless.main_product_card} style={backgroundStyle}>
              <MyText
                weight="medium"
                bg="white"
                size="min"
                color="dark"
                font="Roboto"
              >
                {productName}
              </MyText>
              <MyText
                weight="medium"
                bg="white"
                color="green"
                size="min"
                font="Roboto"
              >
                {productPrice} uzs
              </MyText>
            </Link>
            <MyButton 
              full 
              black 
              func={handleAddToCard}>
              Добавить в корзину
            </MyButton>
          </div>
        </div>
      )}

      {cartCard && (
        <div className={styless.cart_card}>
          <div className={styless.img_cart_card}>
            <img src={productImg} alt="" />
          </div>
          <div className={styless.main_cart_card}>
            <div className={styless.item_main_cart_card}>
              <MyText weight="medium" start font="Roboto" size="norm" color="dark">{productName}</MyText>
              <MyButton func={deleteCart} black inline width="inline"><MdOutlineClose size={20}/></MyButton>            </div>
            <div className={styless.item_main_cart_card}>
              <MyText font="Roboto" weight="smoll" color="gray" size="min" start>Цена:</MyText>
              <MyText font="Roboto" weight="medium" color="green" size="norm" start>{productPrice} uzs</MyText>
            </div>
            <div className={styless.item_main_cart_card}>
              <MyText font="Roboto" weight="smoll" color="gray" size="min" start>Количество: </MyText>
              <div className={styless.count_cart_card}>
                <MyButton func={reduceCounter} inline black width="inline">-</MyButton>
                <MyInput inline value={count} onChange={() => setCount} type="number">1</MyInput>
                <MyButton func={addCounter} inline black width="inline">+</MyButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyProductCard;