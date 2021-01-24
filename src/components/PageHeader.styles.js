import styled from 'styled-components';
import tw from 'twin.macro';

export const Header = styled.header`
  background: ${props => props.bgColor || '#fff'};
`;

export const Wrapper = styled.div`
  ${tw`container py-12`};
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
