import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import SlideLeft from './SlideLeft';
import SlideRight from './SlideRight';

/**
 * @function Slider
 */
const Slider = ({ slides }) => {
  const [state, setState] = useState({
    activeIndex: 0,
    translateSmall: 0,
    translateLarge: 0,
    transition: 2,
  });

  const [sideElementWidth, setSideElementWidth] = useState(0);
  const [centerElementWidth, setCenterElementWidth] = useState(0);

  const { translateSmall, translateLarge, transition, activeIndex } = state;
  const sideElementMarker = useRef();
  const centralElementMarker = useRef();

  useEffect(() => {
    const reportWindowSize = () => {
      setSideElementWidth(sideElementMarker.current.getBoundingClientRect().width);
      setCenterElementWidth(centralElementMarker.current.getBoundingClientRect().width);
    };

    window.addEventListener('resize', reportWindowSize);

    reportWindowSize();

    return () => {
      window.removeEventListener('resize', reportWindowSize);
    };
  }, []);

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translateSmall: 0,
        translateLarge: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translateSmall: (activeIndex + 1) * sideElementWidth,
      translateLarge: (activeIndex + 1) * centerElementWidth,
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translateSmall: (slides.length - 3) * sideElementWidth,
        translateLarge: (slides.length - 3) * centerElementWidth,
        activeIndex: slides.length - 3,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translateSmall: -sideElementWidth,
      translateLarge: -centerElementWidth,
    });
  };

  const changeOrder = (slides, version) => {
    const newArr = [...slides];
    console.log('oryginally', slides);
    if (version === 'left') {
      const firstImage = newArr[0];
      newArr.shift();
      newArr.push(firstImage);
      return newArr;
    }
  };
  console.log(changeOrder(slides, 'left'));
  return (
    <SliderCSS>
      <Wrapper>
        <Left ref={sideElementMarker}>
          <SliderContent
            translate={translateSmall}
            transition={transition}
            width={sideElementWidth * slides.length}>
            {slides.map(slide => {
              return <SlideLeft content={slide} />;
            })}
          </SliderContent>
        </Left>
        <Center>
          <ImagePart ref={centralElementMarker}>
            <SliderContent
              translate={translateLarge}
              transition={transition}
              width={centerElementWidth * slides.length}>
              {changeOrder(slides, 'left').map(slide => {
                return <Slide content={slide} />;
              })}
            </SliderContent>
          </ImagePart>
          <TextPart>area with text</TextPart>
        </Center>
        <Right ref={sideElementMarker}>
          <SliderContent
            translate={translateSmall}
            transition={transition}
            width={sideElementWidth * slides.length}>
            {slides.map(slide => {
              return <SlideRight content={slide} />;
            })}
          </SliderContent>
        </Right>
      </Wrapper>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </SliderCSS>
  );
};

const SliderCSS = styled.div`
  position: relative;
  height: 30rem;
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  height: 20rem;
  width: 15%;
  overflow: hidden;
`;
const Right = styled.div`
  background: #eee;
  height: 20rem;
  margin-top: 10rem;
  width: 15%;
  overflow: hidden;
`;
const Center = styled.div`
  width: 70%;
  display: flex;
  overflow: hidden;
`;
const ImagePart = styled.div`
  /* width: 350px; */
  width: 50%;
  overflow: hidden;
`;
const TextPart = styled.div`
  width: 50%;
  background: #eed;
`;

export default Slider;
