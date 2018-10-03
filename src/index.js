import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/app';
import configureStore from 'src/store/configureStore';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// import registerServiceWorker from './registerServiceWorker';
//registerServiceWorker();
