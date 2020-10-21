import React from 'react';

import Navbar from './navigation/Navbar';
import Footer from './Footer';

export default ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
