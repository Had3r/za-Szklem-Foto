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
  });
});
