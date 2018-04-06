import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import List from './List';

describe(List, () => {
    const component = shallow(
        <List/>
    );

    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <List/>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
