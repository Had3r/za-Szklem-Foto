import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import OptimizedImage from '../OptimizedImage';
import classNames from 'classnames';

import NavList from './NavList';

import {
  ContainerFluid,
  Wrapper,
  ListPart,
  NavInput,
  Label,
  Background,
  Nav,
  NavIcon,
} from './Navbar.styles';

export const Navigationn = ({ pageType }) => {
  const [scrolledPage, setScrolledPage] = useState(false);

  const changeNavbar = () => {
    const scrolled = window.pageYOffset > 0;
    setScrolledPage(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar, { passive: true });
    window.addEventListener('orientationchange', changeNavbar, { passive: true });
    window.addEventListener('resize', changeNavbar, { passive: true });
    return () => {
      window.removeEventListener('scroll', changeNavbar);
      window.removeEventListener('orientationchange', changeNavbar);
      window.removeEventListener('resize', changeNavbar);
    };
  }, []);
  return (
    <ContainerFluid className={classNames({ scrolled: scrolledPage })}>
      <Wrapper>
        <Link to="/">
          <OptimizedImage src="logo.png" />
        </Link>
        <ListPart>
          <NavInput type="checkbox" id="navi-toggle" />
          <Label htmlFor="navi-toggle">
            <NavIcon>&nbsp;</NavIcon>
          </Label>
          <Background className="bg">&nbsp;</Background>
          <Nav className="nav">
            <NavList pageType={pageType} scrolledPage={scrolledPage} />
          </Nav>
        </ListPart>
      </Wrapper>
    </ContainerFluid>
  );
};
