import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Routes from './_router';

export default function App() {
  return (
    <Layout>
      <BrowserOnly>
        {
          () => (<Routes />)
        }
      </BrowserOnly>
    </Layout>
  )
}
