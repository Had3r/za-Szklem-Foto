import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import NavLinks from './Navlinks';

export default img => {
  return (
    <Navbar>
      <NavLinks />
    </Navbar>
  );
};

const Navbar = styled.nav`
  ${tw`container hidden md:block h-20 sticky top-0 z-10 mx-auto`}
`;
