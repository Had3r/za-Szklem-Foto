import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`p-10 bg-white border flex flex-col items-center rounded-sm relative`};
  &:first-child {
    ${tw`-mt-8`}
  }

  &:nth-child(2) {
    ${tw`md:-mt-8`}
  }

  svg {
    ${tw`text-4xl lg:text-5xl mb-6`}
  }
`;

export const Title = styled.div`
  ${tw`text-lg`}
`;

export const Description = styled.div`
  ${tw`text-base text-center my-6 leading-loose`}
`;

export const Number = styled.a`
  ${tw`text-2xl text-blue-400 `}
`;

export const CTA = styled.button`
  ${tw`px-6 py-4 text-base`}
`;
