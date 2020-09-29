import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export default () => {
  return <Navbar>navbar</Navbar>;
};

const Navbar = styled.nav`
  ${tw`h-20 sticky top-0`}
`;
