import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import useTestimonial from '../graphql/useTestimonial';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from '../../assets/icons/icons';

export default () => {
  const [index, setIndex] = useState(0);

  const customers = useTestimonial();

  useEffect(() => {
    const lastIndex = customers.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, customers]);

  return (
    <Article>
      <header>
        <h2>Co mówią klienci...</h2>
        <MainContent>
          {customers.map(({ node }) => {
            const {
              personsName,
              customerOpinion: { json },
              authorPhoto,
              customerId,
              id,
            } = node;

            let position = 'next-slide';
            if (customerId === index) {
              position = 'active-slide';
            }
            if (customerId === index - 1 || (index === 0 && customerId === node.length)) {
              position = 'last-slide';
            }
            return (
              <SingleSlide key={id} className={position}>
                <div className="">
                  <Img fixed={authorPhoto.fixed} />
                </div>
                <div className="">name: {personsName}</div>
                <div className="">description: {documentToReactComponents(json)} </div>
              </SingleSlide>
            );
          })}
        </MainContent>
        <PrevButton onClick={() => setIndex(index - 1)}>
          <AiOutlineArrowLeft />
        </PrevButton>
        <NextButton onClick={() => setIndex(index + 1)}>
          <AiOutlineArrowRight />
        </NextButton>
      </header>
    </Article>
  );
};

const Article = styled.article`
  ${tw`container mx-auto `}
`;

const MainContent = styled.div`
  ${tw`relative overflow-hidden h-96 max-w-md mx-auto`}
`;

const SingleSlide = styled.div`
  ${tw`absolute opacity-0 top-0 left-0 py-8`}

  &.active-slide {
    ${tw`opacity-100 translate-x-0`}
  }
  &.last-slide {
    ${tw`-translate-x-full`}
  }
  &.next-slide {
    ${tw`translate-x-full`}
  }
`;

const PrevButton = styled.button``;

const NextButton = styled.button``;
