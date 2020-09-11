import React from 'react';
import IndexPage from '../components/index';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Main = styled.div`
  ${tw`p-8 bg-gray-100 rounded-lg shadow-2xl top-0`}
`;

export default () => (
  <>
    <Main>some other text</Main>
    <IndexPage />
  </>
);
