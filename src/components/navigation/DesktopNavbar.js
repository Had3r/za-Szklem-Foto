import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

import NavLinks from './Navlinks';

export default img => {
  return (
    <Navbar className="container">
      <NavLinks />
    </Navbar>
  );
};

const Navbar = styled.nav`
  ${tw`hidden md:block h-20 sticky top-0 z-10 mx-auto`}
`;
