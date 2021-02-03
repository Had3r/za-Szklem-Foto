import React from 'react';
import { Hero } from './Hero';
import { makeShallowWrapper, findByTestAttr } from '../helpers/testUtils';

/**
 * Factory function to create a ShallowWrapper for the Hero component.
 * @function setup
 * @returns {ShallowWrapper}
 */

describe('Hero component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = makeShallowWrapper(<Hero />);
  });
  it('renders', () => {
    const heroComponent = findByTestAttr(wrapper, 'component-hero');
    expect(heroComponent.length).toBe(1);
  });

  it('renders carousel', () => {
    const carousel = findByTestAttr(wrapper, 'carousel-display');
    expect(carousel.length).toBe(1);
  });
});
