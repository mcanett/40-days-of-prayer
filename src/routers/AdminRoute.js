import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as routes from '../constants/routes';

export const AdminRoute = ({
  isAuthenticated,
  userType,
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated && userType == 'admin' ? (
      <div>
        <Header />
        <Component {...props} />
        <Footer />
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

export default connect(mapStateToProps, undefined)(AdminRoute);