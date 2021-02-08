import React from 'react';
import { OfferSingleCard } from './OfferSingleCard';
import { shallow } from 'enzyme';

const defaultProps = {
  heading: 'pozostałe',
  description: 'długa sesja',
  image: {
    fluid: {
      aspectRatio: 0.6665956086122362,
      base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gxYSUNDX1BSTYeO0EU0sfIXZP//Z',
      sizes: '(max-width: 800px) 100vw, 800px',
      src:
        '//images.ctfassets.net/ybzns6g422ym/3TNzjsWfGes8BZino3YWqb/77e/hgusstavo.jpg?w=800&q=50',
      srcSet:
        '//images.ctfassets.net/ybzns6g422ym/470e20cbe42/hgusstavo.jpg?w=1200&h=1800&q=50 1200w,↵//images.ctfassets.net/ybzns6g422ym/3TNzjsWfq=50 2400w',
      srcSetWebp: '//images.ctfassets.net/ybzns6g422ym/3TNzjbp 2400w',
    },
  },
  slug: 'pozostałe',
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
  return shallow(<OfferSingleCard {...setupProps} />);
};

describe('<OfferSingleCard', () => {
  it('renders', () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });
});
