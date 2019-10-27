import React from 'react';
import ReactDOM from 'react-dom';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Products from '../components/Products/Products';
import Basket from '../components/Basket/Basket';



configure({adapter: new Adapter()});

describe('<App/>', ()=>{
  let wrapper;

  beforeEach(() =>{
    wrapper = shallow(<App />);
  });

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('renders the available products', () => {
    expect(wrapper.find(Products)).toHaveLength(1);
  });

  it('renders the Basket', () => {
    expect(wrapper.find(Basket)).toHaveLength(1);
  });  
  
});

