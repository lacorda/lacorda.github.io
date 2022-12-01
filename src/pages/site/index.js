import React from 'react';
// import Provider from '@theme/Layout/Provider';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

// import store from './_store';
import Routes from './_router';
import Sidebar from './_components/sidebar'

import './_styles/index.scss';

export default function App() {
  return (
    <Layout>
      <div className="site-pager-wrapper">
        <Sidebar />
        <div className="site-pager-container">
          <BrowserOnly>
            {
              () => (<Routes />)
            }
          </BrowserOnly>
        </div>

        {/* <Provider store={store}>
        <Routes />
      </Provider> */}
      </div>
    </Layout>
  )
}
