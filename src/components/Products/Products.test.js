import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Products from './Products';
import Product from './Product/Product';

configure ({adapter: new Adapter()});

describe('<Products />', () => {
    it('should render all five available <Product /> items', () => {
        const wrapper = shallow(<Products products ={[{},{},{},{},{}]}/>);
        expect(wrapper.find(Product)).toHaveLength(5);
    });
});