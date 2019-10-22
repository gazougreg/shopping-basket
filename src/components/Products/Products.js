import React, { Component } from 'react';
import Product from './Product/Product';

const products = props => {
    console.log('Persons.js rendering');
    return props.products.map((product,index) => {
        console.log(product,index);
        return (
            <Product
                title={product.title}
                desc={product.desc}
                price={product.price}
                image={product.img}
                key={product.id}
            />
        );
    });
};

export default products;