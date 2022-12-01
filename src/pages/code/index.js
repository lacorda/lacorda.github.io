import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Code from './_code';

// import 'antd/lib/style/themes/default.less';

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
