import React from 'react';
import Provider from '@theme/Layout/Provider';
import BrowserOnly from '@docusaurus/BrowserOnly';

import store from './_store';
import Routes from './_router';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserOnly>
        {() => <Routes />}
      </BrowserOnly>
    </Provider>
  )
}



