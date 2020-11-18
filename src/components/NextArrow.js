import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { MdKeyboardArrowRight } from '../../assets/icons/icons';

export default ({ onClick }) => {
  return (
    <Arrow className="slick-arrow" onClick={onClick}>
      <MdKeyboardArrowRight className="arrow-icon" style={{ fontSize: '5rem' }} />
    </Arrow>
  );
};

const Arrow = styled.div`
  &.slick-arrow {
    ${tw`absolute cursor-pointer bg-primary-darker rounded-sm`};
    right: -80px;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  & .arrow-icon {
    ${tw`text-white`};
  }
`;
