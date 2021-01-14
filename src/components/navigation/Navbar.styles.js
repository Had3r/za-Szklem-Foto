import styled from 'styled-components';
import tw from 'twin.macro';

export const ContainerFluid = styled.nav`
  ${tw`sticky top-0 z-50`};
  ${props => (props.scrolled ? tw`bg-white` : tw`bg-transparent`)};

  &.scrolled {
    ${tw`bg-white`};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
    transition: all 0.4s;

    li {
      ${tw`sm:text-gray-800`};
    }
  }
`;

export const Wrapper = styled.div`
  ${tw`container relative h-20 py-2 px-4 sm:px-0  z-50 flex items-center justify-between`};

  .gatsby-image-wrapper {
    ${tw`sm:w-16`}
    width: 3.2rem;
  }
`;

export const ListPart = styled.div`
  ${tw`relative`};
`;

export const NavInput = styled.input`
  ${tw`hidden`};

  &:checked ~ .bg {
    transform: scale(50);
  }
  &:checked ~ .nav {
    ${tw`opacity-100 w-full`};

    a {
      transform: translateX(0);
    }
  }

  &:checked + label span {
    ${tw`bg-transparent`};
  }
  &:checked + label span::before {
    ${tw`top-0`};
    transform: rotate(135deg);
  }
  &:checked + label span::after {
    ${tw`top-0`};
    transform: rotate(-135deg);
  }
`;

export const Label = styled.label`
  ${tw`fixed text-base block rounded-full text-center shadow-xl cursor-pointer bg-white sm:hidden`};
  width: 3.2rem;
  height: 3.2rem;
  top: 1rem;
  right: 1rem;
  z-index: 2000;

  &:hover span::before {
    top: -0.5rem;
  }
  &:hover span::after {
    top: 0.5rem;
  }
`;

export const Background = styled.div`
  ${tw`fixed rounded-full right-0 sm:hidden`};
  width: 3.2rem;
  height: 3.2rem;
  z-index: 1000;
  top: 1rem;
  right: 1rem;
  background-image: radial-gradient(#dbeaf9, #4995e1);
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
`;

export const Nav = styled.div`
  ${tw`h-screen fixed top-0 left-0 opacity-0 w-0 sm:relative sm:w-auto sm:opacity-100 sm:h-auto`};
  z-index: 1500;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

export const NavIcon = styled.span`
  ${tw`relative`};
  margin-top: 1.5rem;
  &,
  &::before,
  &::after {
    ${tw`inline-block bg-gray-600 `}
    width: 1.5rem;
    height: 2px;
  }
  &::before,
  &::after {
    ${tw`absolute left-0`};
    content: '';
    transition: all 0.2s;
  }

  &::before {
    top: -0.4rem;
  }
  &::after {
    top: 0.4rem;
  }
`;
