import React from 'react';
import { graphql } from 'gatsby';

import { Layout, PageHeader } from '../components/index';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Content } from './offer-template.styles';

const ComponentName = ({
  data: {
    offer: { typeOfService, detailsOfOffer, detailsImages },
  },
}) => {
  return (
    <Layout>
      <PageHeader title={typeOfService} subtitle="wazne - zapoznaj się ze szczegółami oferty" />
      <Content>{documentToReactComponents(detailsOfOffer.json)}</Content>
    </Layout>
  );
};

export const query = graphql`
  query getSingleOffer($slug: String) {
    offer: contentfulOffer(slug: { eq: $slug }) {
      typeOfService
      detailsOfOffer {
        json
      }
      detailsImages {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

export default ComponentName;
