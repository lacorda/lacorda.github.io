import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Editor from './_editor';

export default function App() {
  return (
    <Layout>
      <BrowserOnly>
        {
          () => (<Editor />)
        }
      </BrowserOnly>
    </Layout>
  )
}
