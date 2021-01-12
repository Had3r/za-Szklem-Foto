import React from 'react';

import { GridGallery } from './Gallery.styles';
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
