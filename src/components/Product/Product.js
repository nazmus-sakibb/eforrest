import React from 'react';
import './Product.css';

const Product = ({product}) => {
    const {name, price, img, ratings, seller} = product; 
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
        </div>
    );
};

export default Product;