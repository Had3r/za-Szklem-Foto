import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { MdKeyboardArrowRight } from '../../assets/icons/icons';

export default ({ onClick }) => {
  return (
    <Arrow tabIndex="0" className="slick-arrow" onClick={onClick}>
      <MdKeyboardArrowRight className="arrow-icon" />
    </Arrow>
  );
};

const Arrow = styled.div`
  &.slick-arrow {
    ${tw`absolute cursor-pointer bg-primary-darker rounded-sm hover:bg-white hover:shadow-lg transition duration-500 outline-none`};
    right: -35px;
    top: 30%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 500px) {
      right: -65px;
      top: 50%;
    }
  }

  & .arrow-icon {
    ${tw`text-white text-5xl hover:text-primary-darker`};

    @media screen and (min-width: 500px) {
      ${tw`text-6xl`};
    }
  }
`;
