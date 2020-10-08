import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const NavigationLinks = ({ className, image }) => {
  return (
    <List>
      <ListItem>
        <Link to="/">
          <Img fluid={image.img} className={className} />
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
  ${tw`w-32`}
`;

const List = styled.ul`
  ${tw``}
`;

const ListItem = styled.li``;

export default NavLinks;
