import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Code from './_code';

export default function App() {
  return (
    <Layout>
      <BrowserOnly>
        {
          () => (<Code />)
        }
      </BrowserOnly>
    </Layout>
  )
}
