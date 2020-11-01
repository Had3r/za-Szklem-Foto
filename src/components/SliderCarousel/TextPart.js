import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { FaQuoteRight, BsDash } from '../../../assets/icons/icons';

const styledTextPart = ({ longText, shortText, className }) => {
  return (
    <TextPart className={className}>
      <Blockquote>
        <FaQuoteRight className="quoteSVG" />
        <ParagraphText>{longText}</ParagraphText>
        <Cite>
          <BsDash className="dashSVG" /> John Doe
        </Cite>
      </Blockquote>
    </TextPart>
  );
};

const TextPart = styled.div`
  ${tw`w-6/12 bg-color-dark-gray relative`};

  .quoteSVG {
    font-size: 3.5rem;
    position: absolute;
    left: -106px;
    top: 90px;
    z-index: 100;
  }

  &::after {
    content: '';
    z-index: 10;

    position: absolute;
    top: 25px;
    left: -80px;
    width: 110%;
    height: 90%;
    border-top: 3px solid white;
    border-right: 3px solid white;
    border-bottom: 3px solid white;
  }
`;

const Blockquote = styled.blockquote`
  ${tw`text-white h-full p-12 flex flex-col`};

  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 8%;
    background: white;
    top: 25px;
    left: -80px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 60.5%;
    background: white;
    top: 165px;
    left: -80px;
  }
`;

const Cite = styled.cite`
  ${tw`flex self-end items-center text-sm`};
`;

const ParagraphText = styled.p`
  ${tw`text-xl`}
  height: 80%;

  margin-top: 10%;
`;

const styledText = styled(styledTextPart)`
  ${tw``}
`;

export default styledText;
