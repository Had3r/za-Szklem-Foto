import React from 'react';
import styled from 'styled-components';

export default ({ content }) => {
  return <SlideLeft content={content} />;
};

const SlideLeft = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('${props => props.content}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
