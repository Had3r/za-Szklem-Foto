import React from 'react';
import { Hero } from './Hero';
import { shallow } from 'enzyme';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<Hero />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

describe('Hero component', () => {
  it('renders', () => {
    const wrapper = setup();
    const heroComponent = findByTestAttr(wrapper, 'component-hero');
    expect(heroComponent.length).toBe(1);
  });

  it('renders carousel', () => {
    const wrapper = setup();
    const carousel = findByTestAttr(wrapper, 'carousel-display');
    expect(carousel.length).toBe(1);
  });
});
