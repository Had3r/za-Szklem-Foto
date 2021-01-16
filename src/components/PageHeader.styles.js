import styled from 'styled-components';
import tw from 'twin.macro';

export const Header = styled.header`
  background: ${props => props.bgColor || '#fff'};
`;

export const Wrapper = styled.div`
  ${tw`container py-12`};
`;

export const Heading = styled.h2`
  ${tw`text-center`}
`;

export const Paragraph = styled.p`
  ${tw`text-center`}
`;
