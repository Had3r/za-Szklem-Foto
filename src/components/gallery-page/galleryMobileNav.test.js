import React from 'react';
import { GalleryMobileNav } from './GalleryMobileNav';
import { shallow } from 'enzyme';

const defaultProps = {
  dropdownOpen: false,
  selected: 'Weselna',
  categories: ['Weselna', 'rodzinna'],
  imagesChange: () => 'weselna',
  changeDropdown: () => false,
};

/**
 * Factory function to create a ShallowWrapper for the Hero component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = {
    ...defaultProps,
    ...props,
  };
  return shallow(<GalleryMobileNav {...setupProps} />);
};

describe('<GalleryMobileNav />', () => {
  it('renders', () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });
});
