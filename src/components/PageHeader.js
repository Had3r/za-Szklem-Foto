import React from 'react';

import { Header, Wrapper, Heading, Paragraph } from './PageHeader.styles';

export const PageHeader = ({ title, subtitle, background }) => {
  return (
    <Header bgColor={background} className="long-line">
      <Wrapper>
        <Heading className="short-line">{title}</Heading>
        <Paragraph>{subtitle}</Paragraph>
      </Wrapper>
    </Header>
  );
};
