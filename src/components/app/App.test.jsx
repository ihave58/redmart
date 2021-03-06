import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

describe(App, () => {
    const component = shallow(
        <App/>
    );

    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <App/>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
