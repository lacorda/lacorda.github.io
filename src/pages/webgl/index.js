import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Routes from './_router';
import { createLocalScript } from '@site/src/pages/_utils/load';

export default function App() {
  useEffect(() => {
    createLocalScript({
      id: "vertex-shader-2d",
      type: "notjs"
    })
    createLocalScript({
      id: "fragment-shader-2d",
      type: "notjs"
    })
  }, [])

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
