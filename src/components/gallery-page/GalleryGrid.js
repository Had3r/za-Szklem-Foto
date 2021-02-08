import React from 'react';
import PropTypes from 'prop-types';

import { GridGallery } from './GalleryGrid.styles';
import Img from 'gatsby-image';
import Zoom from 'react-medium-image-zoom';

const wrapperStyle = {
  width: '100%',
  height: '100%',
};

/**
 * Component that renders a grid of images
 * @param {object} props
 * @param {array} props.images - array with images
 */
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

GalleryGrid.propTypes = {
  images: PropTypes.array.isRequired,
};
