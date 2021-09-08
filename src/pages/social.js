import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/header';

const Social = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Social | Yhonatan</title>
        <link rel="canonical" ref="https://yhonatanjesus.com/social" />
      </Helmet>
      <Header />
    </main>
  );
};

export default Social;
