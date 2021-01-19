import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`hover:opacity-100  flex flex-col relative cursor-pointer`};
  transition: all 0.3s;

  &::before {
    ${tw`absolute rounded-lg block opacity-0 invisible`}
    content: '';
    transition: all 0.5s;
    width: calc(100% + 3.1rem);
    height: calc(100% + 3.1rem);
    left: -1.55rem;
    top: -1.55rem;
    z-index: -1;
  }

  &:hover&::before {
    ${tw`bg-white opacity-100 visible`}
    box-shadow: 0 9px 60px 0 rgba(73, 149, 225, 0.15);
  }

  &:hover {
    transform: translateY(-0.5rem);
  }
`;

export const ImagePart = styled.div`
  ${tw`w-full`};

  .gatsby-image-wrapper {
    ${tw`rounded-tl-lg rounded-tr-lg h-48 `}
  }
`;
export const TextPart = styled.div`
  svg {
    ${tw`inline-block ml-2`}
  }

  a {
    ${tw`text-base text-red-700`}
  }
`;

export const Heading = styled.h3`
  ${tw`text-xl font-bold text-tertiary-gray mt-4`}
`;

export const Paragraph = styled.p`
  ${tw`text-lg my-4 text-gray-600 font-light`}
`;

export const CTA = styled.div`
  ${tw`text-base text-red-700`}
`;
