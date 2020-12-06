import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import BackgroundImage from 'gatsby-background-image-es5';

const Background = ({ children, className, image }) => {
  return (
    <Wrapper>
      <BackgroundImage className={className} fluid={image}>
        {children}
      </BackgroundImage>
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
