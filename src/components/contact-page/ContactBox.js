import React from 'react';

import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Wrapper, Title, Description, Number, CTA } from './ContactBox.styles';

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
        <AnchorLink to="/kontakt#formularz">
          <CTA className="btn btn-secondary">{data.btnText}</CTA>
        </AnchorLink>
      )}
    </Wrapper>
  );
};
