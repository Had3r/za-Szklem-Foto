import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

import OptimizedImage from '../OptimizedImage';

export default () => {
  const styles = {
    activeClassName: `active`,
  };

  const links = [
    {
      id: 1,
      activeClassName: styles.activeClassName,
      to: '/',
      name: 'Strona Główna',
    },
    {
      id: 2,
      activeClassName: styles.activeClassName,
      to: '/oferta',
      name: 'Oferta',
    },
    {
      id: 3,
      activeClassName: styles.activeClassName,
      to: '/galeria',
      name: 'Galeria',
    },
    {
      id: 4,
      activeClassName: styles.activeClassName,
      to: '/kontakt',
      name: 'kontakt',
    },
  ];

  return (
    <Wrapper>
      <Link to="/">
        <OptimizedImage src="logo.png" />
      </Link>
      <Navigation>
        <NavInput type="checkbox" id="navi-toggle" />
        <NavButton htmlFor="navi-toggle">
          <NavIcon>&nbsp;</NavIcon>
        </NavButton>
        <Background className="bg">&nbsp;</Background>
        <Nav className="nav">
          <NavList>
            {links.map((link, linkIdx) => {
              return (
                <NavItem key={link.id}>
                  <Link activeClassName={link.activeClassName} to={link.to}>
                    <span>0{linkIdx + 1}</span> {link.name}
                  </Link>
                </NavItem>
              );
            })}
          </NavList>
        </Nav>
      </Navigation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`container relative h-20 py-2 px-4 sm:px-0 sticky top-0 z-50 flex items-center justify-between`};

  .gatsby-image-wrapper {
    ${tw`sm:w-16`}
    width: 3.2rem;
  }
`;

const Navigation = styled.ol`
  ${tw`relative`};
`;

const NavInput = styled.input`
  ${tw`hidden`};

  &:checked ~ .bg {
    transform: scale(50);
  }
  &:checked ~ .nav {
    ${tw`opacity-100 w-full`};
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

const NavButton = styled.label`
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

const Background = styled.div`
  ${tw`fixed rounded-full right-0 sm:hidden`};
  width: 3.2rem;
  height: 3.2rem;
  z-index: 1000;
  top: 1rem;
  right: 1rem;
  background-image: radial-gradient(#dbeaf9, #4995e1);
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
`;

const Nav = styled.nav`
  ${tw`h-screen fixed top-0 left-0 opacity-0 w-0 sm:relative sm:w-auto sm:opacity-100 sm:h-auto`};
  z-index: 1500;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

const NavList = styled.ul`
  ${tw`absolute text-center w-full sm:relative sm:flex sm:h-16 sm:inset-auto`};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 640px) {
    transform: none;
  }
`;

const NavItem = styled.li`
  ${tw`text-lg font-light text-white uppercase sm:mx-4 sm:my-2 sm:text-base sm:font-normal sm:tracking-wider sm:flex items-center`};
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
    ${tw`text-gray-800 sm:p-0 sm:hover:bg-left-top sm:text-primary-darker`};
    background-position: 100%;
    transform: translateX(1rem);
  }

  a.active {
    ${tw`text-gray-800`}
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
      ${tw`text-primary-darker`};
      display: block;
      content: '';
      border-bottom: solid 2px #4995e1;
      transform: scaleX(1);
    }

    a:hover::after {
      transform: scaleX(1);
    }
    a.active {
      ${tw`text-primary-darker`}
    }
  }
`;

const NavIcon = styled.span`
  ${tw`relative `};
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
