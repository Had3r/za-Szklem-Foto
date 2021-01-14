import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Img from 'gatsby-image';
import Zoom from 'react-medium-image-zoom';

const wrapperStyle = {
  width: '100%',
  height: '100%',
};

export const GalleryGrid = ({ images }) => {
  return (
    <GridGallery>
      {images.map((image, idx) => {
        return (
          <Zoom key={idx}>
            <Img style={wrapperStyle} fluid={image.fluid} />
          </Zoom>
        );
      })}
    </GridGallery>
  );
};

const GridGallery = styled.div`
  ${tw`grid mt-16 md:pt-20 pt-16 md:pt-20`};
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(auto, 100px);
  gap: 1px;
  margin: 0 1px;

  @media screen and (min-width: 530px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 768px) {
    ${tw`container`}
    grid-auto-rows: minmax(auto, 200px);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(auto, 200px);
    gap: 2px;
  }
  .gatsby-image-wrapper {
    ${tw`rounded-sm h-full`};
  }
`;
