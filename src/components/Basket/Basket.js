import React from 'react';
import BasketProd from './BasketProd/BasketProd';

const basket = props => {
    //the basket 
    return props.basket.map((product) =>{
        return (
            <div>
                <BasketProd 
                    title={product.title}
                    quantity={product.quantity}
                    totalPrice={product.totalPrice}
                    increase={ () => props.increase(product.id)}
                    decrease ={ () => props.decrease(product.id)}
                    quantityChanger={ (event) => props.quantityChanger(event,product.id)}
                />
            </div>
        );
    });
}
export default basket;