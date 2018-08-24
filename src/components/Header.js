import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogOut } from '../actions/auth';
import * as routes from '../constants/routes';

export const Header = ({ userType }) => (
  <header>
    <h1>40 días de oración</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Bienvenida</NavLink>
    {(userType === 'admin' || userType === 'finances' ? 
      <NavLink to={routes.FINANCES} activeClassName="is-active">Finanzas</NavLink>
      : false
    )}
    {(userType === 'admin' || userType === 'registry' ? 
      <NavLink to={routes.REGISTRY} activeClassName="is-active" exact={true}>Registro</NavLink>
      : false
    )}
    {(userType === 'admin' ? 
      <NavLink to={routes.USERS} activeClassName="is-active" exact={true}>Usuarios</NavLink>
      : false
    )}
    <button onClick={startLogOut}>Cerrar Sesión</button>
  </header>
);

const mapStateToProps = (state) => ({
  userType: state.auth.userType
});

export default connect(mapStateToProps, undefined)(Header);