import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export default ({ longText, shortText }) => {
  return (
    <TextPart>
      <Blockquote>
        <ParagraphText>{longText}</ParagraphText>
      </Blockquote>
    </TextPart>
  );
};

// TODO: styling to finish
const TextPart = styled.div`
  ${tw`w-6/12 bg-color-dark-gray relative`}
`;

const Blockquote = styled.div`
  ${tw`text-white border h-full border-solid border-white p-12 absolute`}
`;

const ParagraphText = styled.p`
  ${tw``}
`;
