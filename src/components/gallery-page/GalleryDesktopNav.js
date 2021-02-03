import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { NavList, NavItem, NavButton, Container } from './GalleryDesktopNav.styles';

/**
 * Functional react component for desktop navigation buttons
 * @param {array} param
 * @param {function} param
 * @param {string} param
 * @returns {JSX.Element} - Rendered list of buttons
 */

export const GalleryDesktopNav = ({ categories, imagesChange, selected }) => {
  return (
    <Container data-test="gallery-desktop-nav">
      <NavList>
        {categories.map((category, idx) => {
          const btnClasses = classNames('btn btn-primary', {
            active: category === selected,
          });
          return (
            <NavItem key={category + idx}>
              <NavButton className={btnClasses} onClick={() => imagesChange(category)}>
                {category}
              </NavButton>
            </NavItem>
          );
        })}
      </NavList>
    </Container>
  );
};

GalleryDesktopNav.propTypes = {
  categories: PropTypes.array.isRequired,
  imagesChange: PropTypes.func,
  selected: PropTypes.string,
};
