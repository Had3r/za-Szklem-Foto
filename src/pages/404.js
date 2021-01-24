import React from 'react';

import { Layout, PageHeader, ErrorPageContent } from '../components/index';

export default () => (
  <Layout>
    <PageHeader singleSubtitle="Strona, której szukasz nie istnieje lub została przeniesiona." />
    <ErrorPageContent />
  </Layout>
);
