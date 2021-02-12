import React from 'react';

import { Layout, PageHeader, PrivacyPolicyContent } from '../components/index';

export default () => {
  return (
    <Layout pageType="privacy-policy">
      <PageHeader
        additionalOptions={{
          mobileWrapper: false,
        }}
        title="Polityka prywatności"
        subtitle="Przeczytaj uważnie niniejsze informacje."
      />
      <PrivacyPolicyContent />
    </Layout>
  );
};
