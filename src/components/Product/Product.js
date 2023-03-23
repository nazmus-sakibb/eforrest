import React from 'react';

const Product = ({product}) => {
    const {name, price, img, ratings, seller} = product; 
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;