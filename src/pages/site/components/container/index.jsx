import React from 'react';
import Layout from '@theme/Layout';
import Sidebar from '../sidebar'

export default function Container(props) {
  const { children } = props;

  return (
    <Layout title="Hello" description="Hello React Page">
      <Sidebar />
      {children}
    </Layout>
  );
}