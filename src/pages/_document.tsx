import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import { getRoutePrefix } from '@/utils/route';

const MyDocument = () => (
  <Html lang="en">
    <Head>
      <link rel="stylesheet" href={`${getRoutePrefix()}/styles/animate.css/@4.1.1/animate.css`} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
