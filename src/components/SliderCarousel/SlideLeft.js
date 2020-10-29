import React from 'react';
import styled from 'styled-components';

export default ({ content }) => {
  return (
    <SlideLeft content={content}>
      <BgLayer />
    </SlideLeft>
  );
};

const SlideLeft = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('${props => props.content}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const BgLayer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.8);
`;
