import styled from 'styled-components';
import tw from 'twin.macro';

export const Section = styled.section`
  ${tw`container py-16 px-4 sm:px-0 md:py-20 flex flex-col md:flex-row`};
`;

export const TextPart = styled.div`
  ${tw`flex-1`};
`;

export const ImagePart = styled.div`
  ${tw`flex-1 relative mt-8 md:mt-0`};
`;

export const Frame = styled.div`
  ${tw`p-8 xl:p-12 shadow-xl relative mx-auto md:mr-0 max-w-xs lg:max-w-sm xl:max-w-md`};

  &::before {
    ${tw`absolute border-gray-900 w-12 h-1 lg:w-20 xl:w-32`};
    content: '';
    border-bottom: solid 1px;
    @media screen and (min-width: 768px) {
      left: -48px;
      top: 115px;
    }
    @media screen and (min-width: 1024px) {
      left: -80px;
    }
    @media screen and (min-width: 1280px) {
      left: -128px;
    }
  }
`;

export const Paragraph = styled.p`
  ${tw`mb-8`}
`;
