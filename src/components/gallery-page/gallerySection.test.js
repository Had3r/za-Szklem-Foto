import React from 'react';
import { findByTestAttr, checkProps } from '../helpers/testUtils';
import { mount } from 'enzyme';
import { GallerySection } from './GallerySection';

const defaultProps = {
  location: {
    state: {
      category: 'weselna',
    },
  },
};

/**
 * Setup function for <GallerySection />
 * @returns {ReactWrapper}
 */
const setup = (props = {}) => {
  const setupProps = {
    ...defaultProps,
    ...props,
  };
  return mount(<GallerySection {...setupProps} />);
};

describe('<GallerySection />', () => {
  it('renders', () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });
  it('does not throw warning with expected props', () => {
    checkProps(GallerySection, defaultProps);
  });
});
