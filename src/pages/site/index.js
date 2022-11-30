import React from 'react';
// import Provider from '@theme/Layout/Provider';
import Layout from '@theme/Layout';

// import store from './_store';
import Routes from './_router';
import Sidebar from './_components/sidebar'

export default function App() {
  return (
    <Layout>
      <Sidebar />
      <Routes />
      {/* <Provider store={store}>
        <Routes />
      </Provider> */}
    </Layout>
  )
}
