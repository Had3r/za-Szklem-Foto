import React from 'react';
import { shallow } from 'enzyme';
import { GalleryDesktopNav } from './GalleryDesktopNav';
import { findByTestAttr, checkProps } from '../helpers/testUtils';

const defaultProps = {
  categories: ['weselna'],
  selected: 'weselna',
};

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (categories, selected) => {
  const setupProps = {
    ...defaultProps,
    categories,
    selected,
  };
  return shallow(<GalleryDesktopNav {...setupProps} />);
};

describe('GalleryDesktopNav component', () => {
  it('renders', () => {
    const wrapper = setup(['Wszystko', 'weselna']);
    const component = findByTestAttr(wrapper, 'gallery-desktop-nav');
    expect(component.length).toBe(1);
  });

  it('does not throw warning with expected props', () => {
    const expectedProps = {
      categories: ['weselna'],
      selected: 'weselna',
    };

    checkProps(GalleryDesktopNav, expectedProps);
  });
});
