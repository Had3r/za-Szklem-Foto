import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import OptimizedImage from '../OptimizedImage';
import { Link } from 'gatsby';

import Hamburger from './Hamburger';

const NavigationLinks = ({ className }) => {
  return (
    <Navbar className="container">
      <Link to="/">
        <OptimizedImage className={className} src="logo.png" />
      </Link>
      <HamburgerWrapper>
        menu <Hamburger />
      </HamburgerWrapper>
    </Navbar>
  );
};

const NavLinks = styled(NavigationLinks)`
  ${tw`w-32 z-10`}
`;

const Navbar = styled.nav`
  ${tw`mx-auto md:hidden h-20 text-white flex justify-between`}
`;

const HamburgerWrapper = styled.div`
  ${tw`z-10 uppercase text-base flex`}
`;

export default NavLinks;
