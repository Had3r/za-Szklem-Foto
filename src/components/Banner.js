import React from 'react';
import styled from 'styled-components';
import OptimizedImage from './OptimizedImage';

export default ({ image }) => {
  return (
    <Container>
      <OptimizedImage background src={image} />
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
