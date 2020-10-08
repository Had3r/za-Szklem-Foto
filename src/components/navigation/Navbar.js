import React from 'react';

import NavbarDesktop from './DesktopNavbar';
// import NavbarMobile from './MobileNavbar';

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

export default () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <>
      <NavbarDesktop img={fluid} />
      {/* <NavbarMobile /> */}
    </>
  );
};
