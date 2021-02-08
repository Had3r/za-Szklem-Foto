import React from 'react';
import PropTypes from 'prop-types';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Wrapper, Title, Description, Number, CTA } from './ContactBox.styles';

/**
 * Renders a single container with contact information
 * @param {object} props
 * @param {object} props.data - the text content of the container
 */
export const ContactBox = ({ data }) => {
  const Icon = data.icon;
  return (
    <Wrapper>
      <Icon />
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
      {data.number ? (
        <Number href="tel:601 995 363">{data.number}</Number>
      ) : (
        <AnchorLink to="/kontakt#naglowek-formularza">
          <CTA className="btn btn-secondary">{data.btnText}</CTA>
        </AnchorLink>
      )}
    </Wrapper>
  );
};

ContactBox.propTypes = {
  data: PropTypes.object.isRequired,
};
