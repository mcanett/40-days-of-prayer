import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetPartakers } from './actions/partakers';
import { SyncLoader } from 'react-spinners';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();
const loaderColor = '#ffd39b';

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(
  <SyncLoader className="loader" color={loaderColor}/>,
  document.getElementById('app')
);

store.dispatch(startSetPartakers()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
