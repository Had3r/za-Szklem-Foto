import React from 'react';
import { ContactBox } from './ContactBox';
import { shallow } from 'enzyme';
import { checkProps } from '../helpers/testUtils';

const defaultProps = {
  data: {
    title: 'Kontakt mailowy',
    description: `Potrzebujesz pomocy ale wolisz wysłać wiadomość? 
    Nie martw się… jestem tu dla Ciebie`,
    icon: '',
    btnText: 'napisz do mnie',
  },
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
  return shallow(<ContactBox {...setupProps} />);
};

describe('<ContactBox />', () => {
  it('renders', () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });
  it('does not throw warning with expected props', () => {
    checkProps(ContactBox, defaultProps);
  });
});
