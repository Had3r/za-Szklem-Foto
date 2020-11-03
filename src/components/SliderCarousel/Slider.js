import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import SlideLeft from './SlideLeft';
import SlideRight from './SlideRight';
import TextPart from './TextPart';

/**
 * @function Slider
 */
const Slider = ({ slides, autoPlay }) => {
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
  const autoPlayRef = useRef();

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

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    if (autoPlay !== null) {
      const interval = setInterval(play, autoPlay * 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [autoPlay]);

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

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
        translateSmall: (slides.length - 1) * sideElementWidth,
        translateLarge: (slides.length - 1) * centerElementWidth,
        activeIndex: slides.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translateSmall: (activeIndex - 1) * sideElementWidth,
      translateLarge: (activeIndex - 1) * centerElementWidth,
    });
  };

  // images order:
  // left:  [element1, element2,  element3, element4]

  // center: [element2, element3, element4, element5]

  // right: [element3, element4, element5, element6]

  const changeOrder = (slides, version) => {
    const newArr = [...slides];
    if (version === 'left') {
      const firstImage = newArr.shift();
      newArr.push(firstImage);
      return newArr;
    } else {
      const firstImages = newArr.splice(0, 2);
      newArr.push(firstImages);
      return newArr.flat();
    }
  };
  return (
    <SliderCSS>
      <Wrapper>
        <LeftCard ref={sideElementMarker}>
          <SliderContent
            translate={translateSmall}
            transition={transition}
            width={sideElementWidth * slides.length}>
            {slides.map(slide => {
              return <SlideLeft content={slide} />;
            })}
          </SliderContent>
        </LeftCard>
        <CenterCard>
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
          <TextPart
            longText={`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia`}
            shortText={'John Doe'}
          />
        </CenterCard>
        <RightCard ref={sideElementMarker}>
          <SliderContent
            translate={translateSmall}
            transition={transition}
            width={sideElementWidth * slides.length}>
            {changeOrder(slides).map(slide => {
              return <SlideRight content={slide} />;
            })}
          </SliderContent>
        </RightCard>
      </Wrapper>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </SliderCSS>
  );
};

Slider.defaultProps = {
  slides: [],
  autoPlay: null,
};

const SliderCSS = styled.div`
  ${tw`relative h-120 w-full max-w-full overflow-hidden`}
`;

const Wrapper = styled.div`
  ${tw`flex`}
`;

// TODO: unificate left and right card to single one
const LeftCard = styled.div`
  ${tw`h-80 w-1/7 overflow-hidden`}
`;

const RightCard = styled.div`
  ${tw`h-80 mt-40 w-1/7 overflow-hidden`}
`;

const CenterCard = styled.div`
  ${tw`w-5/7 flex overflow-hidden`}
`;

const ImagePart = styled.div`
  ${tw`w-6/12 overflow-hidden`}
`;

export default Slider;
