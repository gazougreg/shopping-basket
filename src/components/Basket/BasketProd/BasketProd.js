import React from 'react';

const basketProd = props => {
    //for each entry in the basket info & quantity management buttons and input
    return (
        <div className="BasketProd">
            <p>Product: {props.title}</p>
            <p>Qty:
                <button className="btn-dec"onClick={props.decrease}> - </button>
                <input type="text"  onChange={props.quantityChanger} value={props.quantity}>
                </input>
                <button className="btn-inc"onClick={props.increase}> + </button>
            </p>
            <p>Price: {props.totalPrice}  €</p> 
        </div>

    );
}

export default basketProd;