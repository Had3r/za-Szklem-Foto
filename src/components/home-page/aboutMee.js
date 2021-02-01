import React from 'react';
import { AboutMe } from './AboutMe';

import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  // const wrapper = shallow(<AboutMe />);
  // expect(wrapper).toBeTruthy()
});
