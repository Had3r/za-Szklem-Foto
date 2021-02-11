import React from 'react';

import { Section } from './PrivacyPolicyContent.styles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import usePrivacyPolicy from '../../graphql/usePrivacyPolicy';

export const PrivacyPolicyContent = () => {
  const data = usePrivacyPolicy();

  return <Section>{documentToReactComponents(data.json)}</Section>;
};
