import React from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'tailwind.macro';

import OptimizedImage from './OptimizedImage';

const Background = ({ children, className }) => {
  return (
    <Wrapper>
      <OptimizedImage className={className} background src="mainBcg.jpg">
        {children}
      </OptimizedImage>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from {
      background-color: rgb(0,0,0,0.8);
    }
    to {
      background-color: rgb(0,0,0,0.3);
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
