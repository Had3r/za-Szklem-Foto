import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

import NavLinks from './Navlinks';

export default img => {
  return (
    <Navbar>
      <NavLinks image={img} />
    </Navbar>
  );
};

const Navbar = styled.nav`
  ${tw`h-20 sticky top-0`}
`;
