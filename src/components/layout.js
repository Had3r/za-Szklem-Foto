import React from 'react';

import Navbar from './navigation/Navbar';
import Footer from './Footer';

export default ({ children, pageType }) => {
  return (
    <>
      <Navbar pageType={pageType} />
      {children}
      <Footer />
    </>
  );
};
