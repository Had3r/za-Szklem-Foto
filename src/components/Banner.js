import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image-es5';

export default ({ image }) => {
  return (
    <Container>
      <BackgroundImage fluid={image.fluid} />
    </Container>
  );
};

const Container = styled.div`
  & div:first-child {
    min-height: 40vh;
    @media screen and (min-width: 640px) {
      min-height: 50vh;
    }
  }
`;
