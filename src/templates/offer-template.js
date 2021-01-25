import React from 'react';
import { graphql, Link } from 'gatsby';

import { Layout, PageHeader } from '../components/index';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Content } from './offer-template.styles';

const OfferTemplate = ({
  data: {
    offer: { typeOfService, detailsOfOffer },
  },
}) => {
  return (
    <Layout>
      <PageHeader
        additionalOptions={{
          mobileWrapper: false,
        }}
        title={typeOfService}
        subtitle="wazne - zapoznaj się ze szczegółami oferty"
      />
      <Content>
        {documentToReactComponents(detailsOfOffer.json)}
        <Link to="/kontakt" className="link link-primary">
          Dowiedz się więcej
        </Link>
      </Content>
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

export default OfferTemplate;
