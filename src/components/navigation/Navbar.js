import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

import OptimizedImage from '../OptimizedImage';

export default () => {
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
            <NavItem>
              <Link to="/">
                <span>01</span> Strona główna
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/">
                <span>02</span> Oferta
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/">
                <span>03</span> Galeria
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/">
                <span>04</span> Kontakt
              </Link>
            </NavItem>
          </NavList>
        </Nav>
      </Navigation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`container relative h-20 py-2 px-4 sm:px-0 sticky top-0 z-50 flex items-center justify-between`};

  .gatsby-image-wrapper {
    width: 3.2rem;
  }
`;

const Navigation = styled.ol`
  ${tw`relative`};
`;

const NavInput = styled.input`
  ${tw`hidden`};

  /* functionality */
  &:checked ~ .bg {
    transform: scale(50);
  }
  &:checked ~ .nav {
    opacity: 1;
    width: 100%;
  }

  &:checked + label span {
    background-color: transparent;
  }
  &:checked + label span::before {
    top: 0;
    transform: rotate(135deg);
  }
  &:checked + label span::after {
    top: 0;

    transform: rotate(-135deg);
  }
`;

const NavButton = styled.label`
  ${tw`fixed text-base block rounded-full text-center shadow-xl cursor-pointer `};
  width: 3.2rem;
  height: 3.2rem;
  background-color: #fff;
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
  ${tw` rounded-full right-0`};
  width: 3.2rem;
  height: 3.2rem;
  z-index: 1000;
  top: 1rem;
  right: 1rem;
  background-image: radial-gradient(#dbeaf9, #4995e1);
  position: fixed;
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
`;

const Nav = styled.nav`
  ${tw`h-screen fixed top-0 left-0`};
  z-index: 1500;

  opacity: 0;
  width: 0;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

const NavList = styled.ul`
  ${tw`absolute text-center`};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const NavItem = styled.li`
  ${tw`my-4 text-lg font-light text-white uppercase `};

  a:link,
  a:visited {
    ${tw`py-2 px-4 inline-block`};
    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
    background-size: 220%;
    transition: all 0.4s;
  }
  a:hover,
  a:active {
    ${tw`text-gray-800`};
    background-position: 100%;
    transform: translateX(1rem);
  }

  span {
    ${tw`mr-2 inline-block`}
  }
`;

const NavIcon = styled.span`
  ${tw`relative`};
  margin-top: 1.5rem;
  &,
  &::before,
  &::after {
    width: 1.5rem;
    height: 2px;
    background-color: gray;
    display: inline-block;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.4rem;
  }
  &::after {
    top: 0.4rem;
  }
`;
