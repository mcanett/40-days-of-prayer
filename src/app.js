import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { BarLoader } from 'react-spinners';
import { firebase } from './firebase/firebase';

import * as routes from './constants/routes';
import { startSetPartakers } from './actions/partakers';
import { startSetUsers } from './actions/users';
import { logout, getUserInfo } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();
const loaderColor = '#f1c40f';

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(
  <div className="parent-loader">
    <div className="loader">
      <BarLoader color={loaderColor} width={500} height={10} />
    </div>
  </div>,
  document.getElementById('app')
);

firebase.auth().onAuthStateChanged((user) => {
  const pathName = history.location.pathname;
  if (user) {
    store.dispatch(getUserInfo(user.uid));
    store.dispatch(startSetUsers());
    store.dispatch(startSetPartakers()).then(() => {
      renderApp();
      if (pathName === routes.LOGIN || pathName === routes.PUBLIC_WELCOME) {
        history.push(routes.PRIVATE_WELCOME);
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push(routes.PUBLIC_WELCOME);
  }
});
