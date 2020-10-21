import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

import OptimizedImage from '../OptimizedImage';

const NavigationLinks = ({ className, image }) => {
  return (
    <List>
      <ListItem>
        <Link to="/">
          <OptimizedImage className={className} src="logo.png" />
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/">strona główana</Link>
      </ListItem>
      <ListItem>
        <Link to="/">oferta</Link>
      </ListItem>
      <ListItem>
        <Link to="/">galeria</Link>
      </ListItem>
      <ListItem>
        <Link to="/">kontakt</Link>
      </ListItem>
    </List>
  );
};

const NavLinks = styled(NavigationLinks)`
  ${tw`w-32 `}
`;

const List = styled.ul`
  ${tw`flex text-white text-base items-center capitalize`}
`;

const ListItem = styled.li`
  ${tw`mx-5`}
`;

export default NavLinks;