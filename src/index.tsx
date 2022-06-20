import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import { Router } from './router';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastContainer />
      <GlobalStyle />
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
