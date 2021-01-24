import styled from 'styled-components';
import tw from 'twin.macro';

export const Header = styled.header`
  background: ${props => props.bgColor || '#fff'};
  &.long-line::before {
    /* top: ${props => (props.onlySubtitle ? '140px' : '150px')}; */
  }
`;

export const Wrapper = styled.div`
  ${tw`container py-12`};
  /* ${props => props.onlySubtitle && tw`pb-0 -mb-12`} */
`;

export const Heading = styled.h2`
  ${tw`text-center`};
`;

export const Paragraph = styled.p`
  ${tw`text-center`}
`;

export const SingleSubtitle = styled.p`
  ${tw`text-center text-2xl max-w-2xl mx-auto md:mt-10 leading-normal md:leading-loose`};
`;
