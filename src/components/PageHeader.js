import React from 'react';

import { Header, Wrapper, Heading, Paragraph, SingleSubtitle } from './PageHeader.styles';

export const PageHeader = ({ title, subtitle, background, onlySubtitle }) => {
  console.log(onlySubtitle);
  return (
    <Header onlySubtitle={onlySubtitle} bgColor={background} className="long-line">
      <Wrapper onlySubtitle>
        {onlySubtitle ? (
          <SingleSubtitle>
            Wraz z Tobą doskonalę się i rozwijam, dlatego chętnie przyjmę wszelkie Twoje opinie,
            krytykę, sugestie i pytania.
          </SingleSubtitle>
        ) : (
          <>
            <Heading className="short-line">{title}</Heading>
            <Paragraph>{subtitle}</Paragraph>
          </>
        )}
      </Wrapper>
    </Header>
  );
};
