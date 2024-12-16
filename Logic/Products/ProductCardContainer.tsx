import MyProductCard from '@/Components/UI/MyProductCard/MyProductCard';
import React from 'react';

interface ProductCardContainerProps {
    name: string;
    img: string;
    price: number;
    type: 'productCard' | 'cartCard';
    linkId: number; 
    idCategory: number;
    count?: number;
}

const ProductCardContainer: React.FC<ProductCardContainerProps> = ({ name, img, price, type, idCategory, linkId, count }) => {
    return type === 'productCard' ? (
        <MyProductCard 
            productCard 
            productPrice={price} 
            productName={name} 
            productImg={img}
            linkId={linkId}
            idCategory={idCategory}
            productCount={count ?? 1}
        />
    ) : (
        <MyProductCard 
            cartCard 
            productPrice={price} 
            productName={name} 
            productImg={img}
            productCount={count ?? 1} 
            linkId={linkId}
            idCategory={idCategory}
        />
    );
};

export default ProductCardContainer;