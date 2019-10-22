import React, { Component } from 'react';
import './App.css';
import Item1 from '../assets/images/avocado_soap.jpg';
import Item2 from '../assets/images/lemonBalm_soap.jpg';
import Item3 from '../assets/images/melon_mint_soap.jpg';
import Item4 from '../assets/images/natural_soap.jpg';
import Item5 from '../assets/images/olive_oil_soap.jpg';
import Products from '../components/Products/Products';
import Product from '../components/Products/Product/Product';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js costructor');
  

    this.state = {
      products :[
        {id:0,title:'Avocado soap', desc: "Mild soap for face and body", price:8,img:Item1},
        {id:1,title:'Lemon balm soap', desc: "Soothing soap for sensitive skins", price:9,img: Item2},
        {id:2,title:'Melon and Mint', desc: "Refreshing soap",price:10,img: Item3},
        {id:3,title:'100% Natural soap', desc: "With no essential oils, a soap for every type of skin", price:7,img:Item4},
        {id:4,title:'Olive oil soap', desc: "Rich soap for dry skin", price: 9,img:Item5}
      ]
    };
}
  // const product = {
  //   ...this.state.poducts[productIndex]
  // };

  // const products = [...this.state.products];
  // products[productIndex] = product;

  render(){
    console.log('App.js render');
    let products;

    return (
      <div className="App">
        <h3>OUR PRODUCTS</h3>
        <Products
          products = {this.state.products}
          index = {this.state.products.id}
        />
      </div>
    );
  }
}

export default App;