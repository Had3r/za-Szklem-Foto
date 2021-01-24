import React from 'react';

import {
  Header,
  Wrapper,
  Heading,
  Paragraph,
  SingleSubtitle,
  ScrollDown,
} from './PageHeader.styles';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export const PageHeader = ({ title, subtitle, background, singleSubtitle }) => {
  return (
    <Header id="naglowek-formularza" bgColor={background} className="long-line">
      <Wrapper singleSubtitle>
        {singleSubtitle ? (
          <SingleSubtitle>{singleSubtitle}</SingleSubtitle>
        ) : (
          <>
            <Heading className="short-line">{title}</Heading>
            <Paragraph>{subtitle}</Paragraph>
          </>
        )}
        <AnchorLink to="/oferta/#szczegoly">
          <ScrollDown>&darr;</ScrollDown>
        </AnchorLink>
      </Wrapper>
    </Header>
  );
};
