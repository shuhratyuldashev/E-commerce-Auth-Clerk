"use client";
import React, { useEffect, useState } from 'react';
import ProductCardContainer from './ProductCardContainer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store'; 
import MyText from '@/Components/UI/MyText/MyText';
import { fetchProducts } from '@/store/productsSlice';

const ProductsCards = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const allProducts = useSelector((state: RootState) => state.product.products);
    const selectedCategory = useSelector((state: RootState) => state.product.selectedCategory);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await dispatch(fetchProducts());
            setLoading(false);
        };
        fetchData();
    }, [dispatch]);

    const filteredProducts = selectedCategory === null 
        ? allProducts 
        : [allProducts[selectedCategory]];
        
    return (
        <div>
            {!loading && filteredProducts.map((products: iProducts, index) => (
                <div key={index} className='products_cards_container'>
                    <MyText start font='Lora' size='big' color='dark' weight='bold'>{products.category}</MyText>
                    <div className="products_cards">
                        {products.products.map((product: iProduct) => (
                            <ProductCardContainer 
                                idCategory={index}
                                linkId={product.linkId}
                                key={product.id}  
                                name={product.name}
                                img={product.img}
                                price={product.price}
                                type='productCard' 
                            />
                        ))}
                    </div>
                </div>
            ))}
            {loading && (
                <div className='products_cards_container'>
                    <div className="product_cards_empty">
                        <div className="loader">
                            <div className="loader_dot"></div>
                            <div className="loader_dot"></div>
                            <div className="loader_dot"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductsCards;