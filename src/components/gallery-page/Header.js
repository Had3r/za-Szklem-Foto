import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export default () => {
  return (
    <Section className="long-line">
      <Wrapper>
        <Heading className="short-line">Galeria.</Heading>
        <Paragraph>Spójrz na rezultat mojej pracy. Jest świetny!</Paragraph>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  ${tw`bg-secondary-gray`};
`;

const Wrapper = styled.div`
  ${tw`container py-12`};
`;

const Heading = styled.h2`
  ${tw`text-center`}
`;

const Paragraph = styled.p`
  ${tw`text-center`}
`;
