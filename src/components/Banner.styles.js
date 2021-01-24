import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`relative`};
  ${props => (props.additionalOptions.questionBanner ? tw`sm:mx-0 my-16 md:my-20` : '')}
  & div:first-child {
    min-height: ${props => (props.additionalOptions ? '50vh' : '40vh')};
    @media screen and (min-width: 640px) {
      min-height: 50vh;
    }
  }
`;

export const TextSection = styled.section`
  ${tw`absolute text-white text-center w-11/12`};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  a {
    ${tw`text-sm md:text-base md:mt-6`}
  }
`;

export const Heading = styled.h2`
  ${tw`text-white text-xl sm:text-2xl md:text-3xl text-center my-0`}
`;

export const Paragraph = styled.div`
  ${tw`text-white text-base text-center my-4`}
`;

export const BgLayer = styled.div`
  background: ${props => (props.layer ? 'rgba(73, 149, 225, 0.5)' : 'none')};
`;
