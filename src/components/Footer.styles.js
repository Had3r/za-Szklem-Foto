import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.footer`
  &.long-line::before {
    ${tw`block`}
    top: 1rem;
  }
`;

export const Wrapper = styled.div`
  ${tw`container py-16 px-4 sm:px-0 md:py-20 `};
`;

export const Paragraph = styled.p`
  ${tw`text-xs text-gray-700 font-light leading-loose`};
`;

export const Icons = styled.span`
  ${tw`mt-8 text-gray-800 hover:text-gray-700 text-xs`}

  svg {
    ${tw`inline-block`}
  }
`;
