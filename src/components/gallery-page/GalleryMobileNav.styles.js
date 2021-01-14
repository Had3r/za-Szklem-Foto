import styled from 'styled-components';
import tw from 'twin.macro';

export const SelectWrapper = styled.div`
  ${tw`block md:hidden relative select-none w-64 mx-auto`};
`;

export const Selection = styled.div`
  ${tw`relative bg-white flex flex-col border-primary-darker border-r-2 border-l-2 text-base`};

  &.open .custom-options {
    ${tw`opacity-100 visible uppercase`};
    pointer-events: all;
  }
`;

export const SelectTrigger = styled.div`
  ${tw`relative flex justify-between items-center text-base px-4 text-black h-10 leading-tight cursor-pointer border-primary-darker border-t-2 border-b-2`};
`;

export const SelectedText = styled.span`
  ${tw`uppercase text-sm tracking-wide`};
`;

export const Options = styled.div`
  ${tw`absolute block bg-white tracking-wide text-sm left-0 right-0 border-primary-darker border-2 opacity-0 invisible pointer-events-none z-10 transition-all duration-500`};
  border-top: 0;
  top: 100%;
`;

export const Option = styled.span`
  ${tw`relative flex items-center px-4 text-gray-600 leading-relaxed h-10 cursor-pointer hover:bg-gray-300 transition-all duration-500`};

  &.selected {
    ${tw`text-white bg-blue-800`};
  }
`;

export const Arrow = styled.div`
  ${tw`relative h-4 w-4`};

  &::before,
  &::after {
    ${tw`transition-all duration-500 absolute bottom-0 h-full`};
    content: '';
    width: 0.15rem;
  }

  &::before {
    ${tw`bg-blue-800 transform rotate-45`};
    left: -5px;
  }
  &::after {
    ${tw`bg-blue-800 transform -rotate-45`};
    left: 5px;
  }
  .open &::before {
    ${tw`transform -rotate-45`};
    left: -5px;
  }
  .open &::after {
    ${tw`transform rotate-45`};
    left: 5px;
  }
`;
