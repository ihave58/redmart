import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import SearchBox from './SearchBox';

describe(SearchBox, () => {
    const component = shallow(
        <SearchBox/>
    );

    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <SearchBox/>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
