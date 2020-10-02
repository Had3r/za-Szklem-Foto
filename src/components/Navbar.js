import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export const Navigation = ({ className }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <Navbar>
      <NavbarList>
        <li>
          <Img className={className} fluid={fluid} objectFit="cover" />
        </li>
        <li>strona główana</li>
        <li>oferta</li>
        <li>galeria</li>
        <li>kontakt</li>
      </NavbarList>
    </Navbar>
  );
};

const StyledNavigation = styled(Navigation)`
  ${tw`w-32`}
`;

const Navbar = styled.nav`
  ${tw`h-20 sticky top-0`}
`;

const NavbarList = styled.ul`
  ${tw``}
`;

const NavbarItem = styled.li``;

export default StyledNavigation;
