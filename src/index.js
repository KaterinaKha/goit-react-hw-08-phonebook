import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'react-bootstrap';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider breakpoints={['xl', 'xs', 'sm']} minBreakpoint="xxs">
    <Provider store={store}>
      <PersistGate loading={<p>loading...</p>} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
