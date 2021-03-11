import styled from 'styled-components';
import tw from 'twin.macro';

export const NavList = styled.ul`
  ${tw`absolute text-center w-full sm:relative sm:flex sm:h-16 sm:inset-auto`};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 640px) {
    transform: none;
  }
`;

export const NavItem = styled.li`
  ${tw`text-lg font-light text-white uppercase sm:mx-4 sm:my-2 sm:text-base sm:font-normal sm:tracking-wider sm:flex items-center`};
  ${props => (props.pageType === 'home' ? tw`text-white` : tw`sm:text-gray-800`)};

  &:last-child {
    ${tw`sm:mr-0`}
  }

  a:link,
  a:visited {
    ${tw`py-2 px-4 sm:p-0 inline-block`};
    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
    background-size: 230%;
    transition: all 0.4s;
  }
  a:hover,
  a:active {
    ${tw`text-gray-800 sm:p-0 sm:hover:bg-left-top sm:text-primary-medium`};
    background-position: 100%;
    transform: translateX(1rem);
  }

  a.active {
    ${tw`text-gray-800`}
  }

  a {
    transform: translateX(-800px);
    @media screen and (min-width: 640px) {
      transform: translateX(0);
    }
  }
  span {
    ${tw`mr-2 inline-block sm:hidden`}
  }

  @media screen and (min-width: 640px) {
    a::after {
      display: block;
      content: '';
      border-bottom: solid 2px #4995e1;
      transition: transform 450ms ease-in-out;
      transform: scaleX(0);
    }
    a:active,
    a:hover {
      transform: none;
    }
    a.active::after {
      ${tw`text-primary-medium`};
      display: block;
      content: '';
      border-bottom: solid 2px #4995e1;
      transform: scaleX(1);
    }

    a:hover::after {
      transform: scaleX(1);
    }
    a.active {
      ${tw`text-primary-medium`}
    }
  }
`;
