import React, { Component } from 'react';
import './App.css';
import Item1 from '../assets/images/avocado_soap.jpg';
import Item2 from '../assets/images/lemonBalm_soap.jpg';
import Item3 from '../assets/images/melon_mint_soap.jpg';
import Item4 from '../assets/images/natural_soap.jpg';
import Item5 from '../assets/images/olive_oil_soap.jpg';
import Products from '../components/Products/Products';
import Basket from '../components/Basket/Basket';

class App extends Component {
  constructor(props) {
    super(props);
  
    // if state exists in localstorage, load it
    if (localStorage.getItem('projectStorage')) {
      this.state = JSON.parse(localStorage.getItem('projectStorage'));
    } else{ //else initialize state
      this.state = {
        //staticly defined products that the user can add to the basket
        products: [
          {id:0,title:'Avocado soap', desc: "Mild soap for face and body", price:8, img:Item1},
          {id:1,title:'Lemon balm soap', desc: "Soothing soap for sensitive skins", price:9, img: Item2},
          {id:2,title:'Melon and Mint', desc: "Refreshing soap",price:10, img: Item3},
          {id:3,title:'100% Natural soap', desc: "With no essential oils, a soap for every type of skin", price:7, img:Item4},
          {id:4,title:'Olive oil soap', desc: "Rich soap for dry skin", price:9, img:Item5}
        ],
        // initially empty basket
        basket: [],
        finalCost:0
      };
    }
    
  }

  // is called by the "Add to basket" and "+" buttons
  addToBasketHandler = productId => {
    let basketNew = [...this.state.basket];
    let cost = this.state.finalCost;
    //quantity of previously added product increased
    if ( this.state.basket.some(item => item.id === productId)) {
      const index = this.state.basket.findIndex(item => item.id === productId);
      basketNew[index].quantity++;
      basketNew[index].totalPrice = basketNew[index].quantity * basketNew[index].price;
      cost += basketNew[index].price;
    }else { //a new product is added in the basket
      let productAdded = {...this.state.products[productId]};
      productAdded.quantity= 1;
      productAdded.totalPrice = productAdded.quantity * productAdded.price; 
      basketNew = basketNew.concat(productAdded);
      cost += productAdded.price;
      
    }
    //finally the state is upadated with the new products and/or new quantities
    this.setState({basket: basketNew, finalCost: cost});
    
  }

  //is called by the "-" button
  removeFromBasket = productId => {
    let basketNew = [...this.state.basket];
    let cost = this.state.finalCost;
    const index = this.state.basket.findIndex(item => item.id === productId);
    //the product in the basket is decreased by 1
    if (basketNew[index].quantity > 1) {
      basketNew[index].quantity--;
      basketNew[index].totalPrice = basketNew[index].quantity * basketNew[index].price;
      cost -= basketNew[index].price;
    } else { // if only 1 in basket, the product is then removed from this.state.basket
      cost -= basketNew[index].price;
      basketNew.splice(index,1);
    }
    //finally the states is updated with the new quantities
    this.setState({basket: basketNew, finalCost: cost});
  }

  //the quantity of a product in the basket can be altered via user input
  quantityChangeHandler = (event,productId) =>{
    let basketNew = [...this.state.basket];
    let cost = this.state.finalCost;
    const index = this.state.basket.findIndex(item => item.id === productId);
    let initialQuant = basketNew[index].quantity;
    if(event.target.value != 0) { //if given value != 0 proceed with value changes
      basketNew[index].quantity = event.target.value;
    } else { //total delete of quantity is not acceptable
      alert('The quantity cannot be empty');
    }
    basketNew[index].totalPrice = basketNew[index].quantity * basketNew[index].price;
    if( initialQuant >= basketNew[index].quantity ){
      cost -= basketNew[index].price * (initialQuant - basketNew[index].quantity );
    } else {
      cost += basketNew[index].price * (basketNew[index].quantity - initialQuant);
    }
    
    this.setState({basket: basketNew, finalCost: cost});
  }

 //returns the correct message regarding the users cost of order
  pricePrint = (sum) => {
    if (sum<= 100){
      return(
        <p>Total price: {sum}</p>
      )
    } else if ( sum > 100) { // when cost >100, a 10% discount is applied
      return(
      <div>
      <p>Total price: {Number((sum*0.9)).toFixed(2)}</p>
      <h2>Since your order exceeds the 100€ total, you deserve a nice 10% discount! </h2>
      </div>  
      );
    }else {
      return <p> Please, give a correct amount of products.</p>
    }
  }

  // logs in console an XML with info about the state of basket
  buyHandler = () => {
    var o2x = require('object-to-xml');
    let objBackEnd = {
      products:{
        product: []
      }, totalPrice: 0
    }
    this.state.basket.forEach((el)=> {
      objBackEnd.products.product.push({id: el.id , quantity: el.quantity});
    });
    this.state.finalCost<=100?objBackEnd.totalPrice=this.state.finalCost:objBackEnd.totalPrice=Number((this.state.finalCost*0.9)).toFixed(2); 

    console.log(o2x(objBackEnd));
  }

  render(){
    
    //store the new state in localstorage to survive browser refresh
    localStorage.setItem('projectStorage', JSON.stringify(this.state));

    return (
      <div className="App">
        <div className="products">
          <h1>OUR PRODUCTS</h1>
          <Products
            products = {this.state.products}
            index = {this.state.products.id}
            addToBasket = {this.addToBasketHandler}
          />
        </div>
        <div className="basket">
          <h1>SHOPPING BASKET</h1>
          <Basket
            basket = {this.state.basket}
            increase = {this.addToBasketHandler}
            decrease = { this.removeFromBasket}
            quantityChanger = {this.quantityChangeHandler}
            
          />
          <h4>{this.pricePrint(this.state.finalCost)}</h4>

          <button className="btn-buy" onClick={this.buyHandler}>Buy now</button>
        </div>
      </div>
    
    );
  }
}

export default App;