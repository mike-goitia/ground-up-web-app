import React from 'react';
import withApollo from '../lib/apollo';

import '../styles/globals.css';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withApollo({ ssr: true })(MyApp);
