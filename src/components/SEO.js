import React from 'react';
import PropTypes from 'prop-types';
import { Title, Link, Meta } from 'react-head';
import useSiteMetadata from '../graphql/useSiteMetadata';

/**
 * Returns component with metadata to the static HTML pages Gatsby builds
 * @param {object} props
 * @param {object} props.SEOdata
 * @returns {ReactComponentElement}
 */
export const SEO = ({ SEOdata }) => {
  const defaults = useSiteMetadata();
  const { title, description, canonical } = SEOdata;

  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    canonical: canonical || defaults.canonical,
  };
  return (
    <>
      <Title>{seo.title}</Title>
      <Meta name="description" content={description} />
      <Link rel="canonical" content={canonical} />
    </>
  );
};

SEO.defaultProps = {
  SEOdata: {
    title: null,
    description: null,
    canonical: null,
  },
};

SEO.propTypes = {
  SEOdata: PropTypes.object,
};
