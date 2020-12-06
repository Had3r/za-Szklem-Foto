import React, { useState, useEffect } from 'react';
import Background from './Background';
import styled from 'styled-components';
import tw from 'twin.macro';
import useHeroImages from '../graphql/useHeroImages';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from '../../assets/icons/icons';

export default () => {
  const [index, setIndex] = useState(0);

  const images = useHeroImages().map(item => {
    return item.node.childImageSharp.fluid;
  });

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  return (
    <Section>
      <Background image={images[index]}>
        <Header>
          <Top />
          <Center className="">
            <h3>If you can cream it, we can create it</h3>
            <HeadingPrimary>Za Szkłem Fotografia</HeadingPrimary>
          </Center>
          <Bottom className="">
            <Dots>
              {images.map((_, btnIndex) => {
                return (
                  <SingleDot
                    onClick={() => setIndex(btnIndex)}
                    key={btnIndex}
                    className={index === btnIndex ? 'active' : undefined}
                  />
                );
              })}
            </Dots>
            <div className="">scoll down</div>
            <Buttons>
              <ScrollArr className="left" onClick={() => setIndex(index - 1)}>
                <FaLongArrowAltLeft />
              </ScrollArr>
              <ScrollArr className="right" onClick={() => setIndex(index + 1)}>
                <FaLongArrowAltRight />
              </ScrollArr>
            </Buttons>
          </Bottom>
        </Header>
      </Background>
    </Section>
  );
};

const Section = styled.section`
  ${tw`text-white`};
`;

const Header = styled.header`
  ${tw`flex flex-col justify-between h-full`};
`;

const Top = styled.div``;

const Center = styled.div`
  ${tw``};
`;

const HeadingPrimary = styled.h1`
  ${tw`my-5`};
`;

const Bottom = styled.div`
  ${tw`flex justify-between `}
`;

const Buttons = styled.div`
  ${tw`bg-white`};
`;

const ScrollArr = styled.button`
  ${tw`w-14 h-14 `};

  &:hover svg {
    ${tw`transition duration-500 text-primary-darker`};
  }

  svg {
    ${tw`text-base mx-auto `};
  }

  &.left {
    ${tw`text-gray-900`};
  }
  &.right {
    ${tw`text-gray-900`};
  }
`;

const Dots = styled.div`
  ${tw`cursor-pointer flex`};
`;

const SingleDot = styled.div`
  ${tw`cursor-pointer bg-white flex h-3`};
`;
