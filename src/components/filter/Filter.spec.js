import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Filter from './Filter';

describe(Filter, () => {
    const component = shallow(
        <Filter/>
    );

    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <Filter/>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
