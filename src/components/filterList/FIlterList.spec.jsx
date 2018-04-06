import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import FilterList from './FilterList';

describe(FilterList, () => {
    const component = shallow(
        <FilterList/>
    );

    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <FilterList/>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
