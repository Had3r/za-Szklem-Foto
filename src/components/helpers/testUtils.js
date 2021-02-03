import { ShallowWrapper, shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

/**
 * Returns node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

/**
 * Returns error in case of incompatible proptypes
 * @param {ReactElement} component - React component
 * @param {object} conformingProps - component props
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
};

/**
 * Returns a ShallowWrapper for the Component
 * @param {ReactElement} Component - React component
 * @returns {ShallowWrapper} - Enzyme shallow wrapper
 */
export const makeShallowWrapper = Component => shallow(Component);
