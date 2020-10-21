import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image-es5';
import useOptimizedImage from '../graphql/useOptimizedImage';

const OptimizedImage = ({ src, alt, title, className, background, style, children, imgStyle }) => {
  const imageFluid = useOptimizedImage(src).fluid;
  if (!background) {
    return (
      <Img
        fluid={imageFluid}
        alt={alt}
        title={title}
        className={className}
        placeholderClassName="optimized-image-placeholder"
        style={style}
        imgStyle={imgStyle}
      />
    );
  }
  return (
    <BackgroundImage
      preserveStackingContext
      Tag="div"
      fluid={imageFluid}
      className={className}
      style={style}>
      {children}
    </BackgroundImage>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  background: PropTypes.bool,
  style: PropTypes.object,
};

OptimizedImage.defaultProps = {
  alt: 'Za Szkłem Fotografia',
  title: '',
  className: '',
  background: false,
  style: {},
};

export default OptimizedImage;
