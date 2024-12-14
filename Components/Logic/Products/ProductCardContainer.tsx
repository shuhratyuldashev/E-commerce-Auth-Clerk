import MyProductCard from '@/Components/UI/MyProductCard/MyProductCard';
import React from 'react';

interface ProductCardContainerProps {
    name: string;
    img: string;
    price: number;
    type: 'productCard' | 'cartCard';
    linkId: number; 
    count?: number;
}

const ProductCardContainer: React.FC<ProductCardContainerProps> = ({ name, img, price, type, linkId, count }) => {
    return type === 'productCard' ? (
        <MyProductCard 
            productCard 
            productPrice={price} 
            productName={name} 
            productImg={img}
            linkId={linkId} 
        />
    ) : (
        <MyProductCard 
            cartCard 
            productPrice={price} 
            productName={name} 
            productImg={img}
            productCount={count}
            linkId={linkId}
        />
    );
};

export default ProductCardContainer;