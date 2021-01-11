import React from 'react';

import { Navigationn } from './navigation/Navbar';
import Footer from './Footer';

export default ({ children, pageType }) => {
  return (
    <>
      <Navigationn pageType={pageType} />
      {children}
      <Footer />
    </>
  );
};
