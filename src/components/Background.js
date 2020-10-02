import React from 'react';
import BackgroundImage from 'gatsby-background-image-es5';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import tw from 'tailwind.macro';

const query = graphql`
  {
    file(relativePath: { eq: "mainBcg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Background = ({ children, className }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <Wrapper>
      <BackgroundImage preserveStackingContext Tag="div" fluid={fluid} className={className}>
        {children}
      </BackgroundImage>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from {
    background-color: rgb(255,255,255,0.2)
  }
  to {
    background-color: rgba(0, 0, 0, .4);
  }
`;

const Wrapper = styled.section`
  ${tw`-mt-20`};
`;

const StyledBackground = styled(Background)`
  ${tw`h-screen`};
  animation: ${fadeIn} 2s ease-in-out 1 forwards;
`;

export default StyledBackground;
