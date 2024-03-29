import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { NavList, NavItem } from './NavList.styles';

const links = [
  {
    id: 1,
    to: '/',
    name: 'Strona Główna',
  },
  {
    id: 2,
    to: '/oferta',
    name: 'Oferta',
  },
  {
    id: 3,
    to: '/galeria',
    name: 'Galeria',
  },
  {
    id: 4,
    to: '/kontakt',
    name: 'kontakt',
  },
];

/**
 *
 * @param {object} props
 * @param {string} props.pageType - the type of the current page
 * @param {boolean} props.scrolledPage - indicates whether the user has started a scroll
 */
export const NavigationList = ({ pageType, scrolledPage }) => {
  return (
    <NavList>
      {links.map((link, linkIdx) => {
        return (
          <NavItem scrolled={scrolledPage} pageType={pageType} key={link.id}>
            <Link activeClassName={'active'} to={link.to}>
              <span>0{linkIdx + 1}</span> {link.name}
            </Link>
          </NavItem>
        );
      })}
    </NavList>
  );
};

NavigationList.propTypes = {
  pageType: PropTypes.string.isRequired,
  scrolledPage: PropTypes.bool.isRequired,
};
