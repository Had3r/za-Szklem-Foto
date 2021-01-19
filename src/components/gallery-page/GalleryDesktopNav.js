import React from 'react';

import classNames from 'classnames';
import { NavList, NavItem, NavButton, Container } from './GalleryDesktopNav.styles';

export const GalleryDesktopNav = ({ categories, imagesChange, selected }) => {
  return (
    <Container>
      <NavList>
        {categories.map((category, idx) => {
          const btnClasses = classNames('btn-primary', {
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
