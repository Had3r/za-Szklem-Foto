import React, { useState, useEffect } from 'react';
import Background from './Background';
import styled, { keyframes } from 'styled-components';
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
          <Center>
            <HeadingPrimary>Za Szkłem Fotografia</HeadingPrimary>
            <h3>
              Forzo is an excellent solution for those who value their reputation and value style.
              Elegant and modern showcase will emphasize the attractiveness of your work.
            </h3>
          </Center>
          <Bottom>
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
            <ScrollDown onClick={() => console.log('clicked!')}>
              <span />
            </ScrollDown>
            <Buttons>
              <Button className="left" onClick={() => setIndex(index - 1)}>
                <FaLongArrowAltLeft />
              </Button>
              <Button className="right" onClick={() => setIndex(index + 1)}>
                <FaLongArrowAltRight />
              </Button>
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
  ${tw`p-4 md:p-8 sm:w-7/12`};
`;

const HeadingPrimary = styled.h1`
  ${tw`my-5`};
`;

const Bottom = styled.div`
  ${tw`flex justify-between`}
`;

const Buttons = styled.div`
  ${tw`bg-white`};
`;

const Button = styled.button`
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
  ${tw`flex items-baseline ml-4 md:ml-8 mb-4`};
`;

const SingleDot = styled.div`
  ${tw`cursor-pointer bg-white flex mr-4 w-0.5`};
  height: 35%;

  &.active {
    ${tw`bg-primary-darker`}
    height: 90%;
  }
`;

const moveDots = y => keyframes`
   0% {
    opacity: 0;
    }
    100% {
      opacity: 1;
      top: ${y}px;
    }
`;

// TODO: convert to Tailwind util classes
const ScrollDown = styled.button`
  ${tw`w-8`};
  span {
    position: relative;
  }
  span::before,
  span::after {
    opacity: 1;
    position: absolute;
    content: '';
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 100%;
  }

  span::before {
    top: -35px;
    animation: ${() => moveDots(-15)} 2s ease-in-out infinite;
  }
  span::after {
    top: -15px;
    animation: ${() => moveDots(5)} 2s ease-in-out infinite;
  }
`;
