import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image-es5';
import useOptimizedImage from '../graphql/useOptimizedImage';

/**
 * Component for creating images or backgrounds optimized by gatsby-image plugin
 * @param {object} props
 * @param {string} props.src
 * @param {string} props.alt
 * @param {string} props.className
 * @param {boolean} props.background
 * @param {Object} props.style
 * @param {array} props.children
 * @param {Object} props.imgStyle
 * @returns {JSX.Element} - Renders an image or a background
 */
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
  children: PropTypes.array,
  imgStyle: PropTypes.object,
};

OptimizedImage.defaultProps = {
  alt: 'Za Szkłem Fotografia',
  title: '',
  className: '',
  background: false,
  style: {},
  children: [],
  imgStyle: {},
};

export default OptimizedImage;
