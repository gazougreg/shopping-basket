import React from 'react';

const product = props => {
    //the product card and add to basket button
    return (
        <div className="Product">
            <img src={props.image}></img>
            <h3>{props.title}</h3> 
            <p>{props.desc}</p>
            <p>{props.price}€</p>
            <button className="btn-add" onClick={props.addToBasket}>Add to basket</button>
        </div>
    );
};

export default product;

