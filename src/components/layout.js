import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from './navigation/Navbar';
import { Footer } from './Footer';

/**
 * Component that wraps the page content
 * @param {object} props
 * @param {array} props.children
 * @param {string} props.pageType
 * @returns {JSX.Element} - Returns the item wrapper
 */
export const Layout = ({ children, pageType }) => {
  return (
    <>
      <Navigation pageType={pageType} />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.array.isRequired,
  pageType: PropTypes.string.isRequired,
};
