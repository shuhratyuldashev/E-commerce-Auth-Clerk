import MyButton from '@/Components/UI/MyButton/MyButton';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store'; 
import { selectCategory } from '@/store/productsSlice';

interface iProduct {
  id: number;
  name: string;
  img: string;
  price: number;
  linkId: number;
  type: 'productCard' | 'cartCard';
  count: number;
}

interface iProducts {
  category: string;
  products: iProduct[];
}

const ProductFilter = () => {
  const categories = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state: RootState) => state.product.selectedCategory);

  const getButtonStyle = (index: number | null) => {
    return {
      outline: selectedCategory === index,
      black: true, 
      inline: true,
      width: 'inline',
    };
  };

  return (
    <div className='products_categorys'>
      <MyButton 
        {...getButtonStyle(null)} 
        func={() => dispatch(selectCategory(null))}
      >
        Все
      </MyButton>
      {categories.map((category: iProducts, index) => (
        <MyButton 
          key={category.category} 
          {...getButtonStyle(index)} 
          func={() => dispatch(selectCategory(index))}
        >
          {category.category}
        </MyButton>
      ))}
    </div>
  )
}

export default ProductFilter;