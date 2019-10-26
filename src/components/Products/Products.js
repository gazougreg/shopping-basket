import React from 'react';
import Product from './Product/Product';

const products = props => {

    return props.products.map((product,index) => {
        return (
            <div className="Poducts">
                
                <Product
                    title={product.title}
                    desc={product.desc}
                    price={product.price}
                    image={product.img}
                    key={product.id}
                    addToBasket={ () => props.addToBasket(index)}
                />
            </div>
        );
    });
};

export default products;