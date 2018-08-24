import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import * as routes from '../constants/routes';

export const FinancesRoute = ({
  isAuthenticated,
  userType,
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated && (userType == 'admin' || userType == 'finances') ? (
      <div>
        <Header />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to={routes.PUBLIC_WELCOME} />
    )
  )}/>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
  userType: state.auth ? state.auth.userType : null
});

export default connect(mapStateToProps, undefined)(FinancesRoute);