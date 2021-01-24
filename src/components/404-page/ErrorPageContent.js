import React from 'react';
import { Link } from 'gatsby';

import { Wrapper, ErrorCode } from './ErrorPageContent.styles';

export const ErrorPageContent = () => {
  return (
    <Wrapper>
      <ErrorCode>404</ErrorCode>
      <Link to="/" className="link link-primary">
        Wróć do strony główenj
      </Link>
    </Wrapper>
  );
};
