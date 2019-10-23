import React from 'react';

const basket = props => {
    console.log('Basket.js render');
    console.log(props);
    return props.basket.map((product,index) =>{
        return (
        <div className="Basket">
        <p>{product.title}</p>
        
    </div>
        );
    });
}
export default basket;