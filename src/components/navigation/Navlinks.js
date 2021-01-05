import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

import OptimizedImage from '../OptimizedImage';

const NavigationLinks = ({ className }) => {
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
        <Link to="/galeria">galeria</Link>
      </ListItem>
      <ListItem>
        <Link to="/">kontakt</Link>
      </ListItem>
    </List>
  );
};

const NavLinks = styled(NavigationLinks)`
  ${tw`w-32`}
`;

const List = styled.ul`
  ${tw`flex text-white text-base items-center capitalize`}
`;

const ListItem = styled.li`
  ${tw`mx-5`}

  a {
    ${tw`text-white`}
  }
`;

export default NavLinks;
