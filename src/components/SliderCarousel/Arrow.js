import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from '../../../assets/icons/icons';

export default ({ handleClick, direction }) => {
  return (
    <Arrow onClick={handleClick} dir={direction}>
      {direction === 'right' ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
    </Arrow>
  );
};

const Arrow = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${props => (props.dir === 'right' ? `right: 25px` : `left: 25px`)};
  /* ${props => (props.direction === 'right' ? `right: 25px` : `left: 25px`)}; */
  height: 50px;
  width: 50px;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(${props => (props.direction === 'left' ? '-2' : '2')}px);
    &:focus {
      outline: 0;
    }
  }
`;
