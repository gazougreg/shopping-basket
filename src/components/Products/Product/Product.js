import React from 'react';

const product = props => {
    console.log('Product.js renedering');
    console.log(props);
    return (
        <div className="Product">
            <img src={props.image}></img>
            <p>{props.title}</p> 
            <p>{props.desc}</p>
            <p>{props.price}€</p>
        </div>
    );
};

export default product;

//  