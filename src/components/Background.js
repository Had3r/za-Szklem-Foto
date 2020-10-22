import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

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

const Wrapper = styled.section`
  ${tw`-mt-20`};
`;

const StyledBackground = styled(Background)`
  ${tw`h-screen animate-brightenBg`};
`;

export default StyledBackground;
