import React from 'react';
import { Link } from 'gatsby';

import { NavList, NavItem } from './Navbar.styles';

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

export default ({ pageType, scrolledPage }) => {
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
