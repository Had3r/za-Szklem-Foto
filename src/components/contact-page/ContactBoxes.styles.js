import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`container w-auto mx-4 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-10`};

  & div:first-child::after {
    ${tw`absolute text-base flex justify-center items-center bg-red-200 w-16 h-16 rounded-full z-30`}
    content: 'albo';
    bottom: -3.4rem;

    @media screen and (min-width: 768px) {
      right: -5.4rem;
      top: 50%;
      bottom: auto;
      transform: translate(-50%, -50%);
    }
  }
`;
