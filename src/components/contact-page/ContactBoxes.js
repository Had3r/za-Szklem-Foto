import React from 'react';

import { Wrapper } from './ContactBoxes.styles';
import { ContactBox } from './ContactBox';

export const ContactBoxes = () => {
  return (
    <Wrapper>
      <ContactBox />
      <ContactBox />
    </Wrapper>
  );
};
