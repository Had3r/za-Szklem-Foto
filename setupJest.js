import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// Mocking methods which are not implemented in JSDOM for react-slick,
// according to: https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
    };
  };
