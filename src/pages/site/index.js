import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './router';

export default function App() {
  return ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    document.getElementById('__docusaurus'),
  )
}



