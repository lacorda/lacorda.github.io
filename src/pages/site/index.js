import React from 'react';
import Provider from '@theme/Layout/Provider';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';

import store from './_store';
import Routes from './_router';

export default function App() {
  return (
    <Layout>
      <Provider store={store}>
        <BrowserOnly>
          {() => <Routes />}
        </BrowserOnly>
      </Provider>
    </Layout>
  )
}
