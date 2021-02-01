import React from 'react';
import { Hero } from './Hero';
import { shallow } from 'enzyme';

describe('test', () => {
  it('renders without error', () => {
    const tree = shallow(<Hero />);
    const sectionComponent = tree.find("[data-test='hero-section']");
    expect(sectionComponent.length).toBe(1);
    expect(tree).toBeTruthy();
  });
});
