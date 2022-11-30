import React from 'react';
// import Provider from '@theme/Layout/Provider';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

// import store from './_store';
import Routes from './_router';
import Sidebar from './_components/sidebar'

export default function App() {
  return (
    <Layout>
      <Sidebar />
      <BrowserOnly>
        {
          () => (<Routes />)
        }
      </BrowserOnly>

      {/* <Provider store={store}>
        <Routes />
      </Provider> */}
    </Layout>
  )
}
