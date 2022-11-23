import React from 'react';
import Provider from '@theme/Layout/Provider';

import store from './store';
import Routes from './router';

export default function App() {
  return (
    <div>container
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  )
}



