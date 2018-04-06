import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import ProductCard from './ProductCard';

describe(ProductCard, () => {
    const component = shallow(
        <ProductCard/>
    );

    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <ProductCard/>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
