import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { UserIcon } from './Icons';
import { startLogOut } from '../actions/auth';
import * as routes from '../constants/routes';

export const Header = ({ userName, userType }) => (
  <header className="header">
    <div className="header__title-box">
      <img src="/images/logo-96-gold.png" className="header__title-box-logo"/>
      <div className="header__title-user-name">
        <div className="dropdown">
          <UserIcon />
          <span className="button--link--gold">{userName}</span>
          <div className="dropdown__content">
            <Link to={routes.CHANGE_PASSWORD}>Cambiar contraseña</Link>
            <button className="button--link" onClick={startLogOut}>Cerrar Sesión</button>
          </div>
        </div>
      </div>
    </div>
    <div className="header__navigation-box">
      <NavLink className="header__navigation-item" to={routes.PRIVATE_WELCOME} activeClassName="is-active" exact={true}>Bienvenida</NavLink>
      {(userType === 'admin' || userType === 'finances' ? 
        <NavLink className="header__navigation-item" to={routes.FINANCES} activeClassName="is-active" exact={true}>Finanzas</NavLink>
        : false
      )}
      {(userType === 'admin' || userType === 'registry' || userType === 'supervisor' ? 
        <NavLink className="header__navigation-item" to={routes.REGISTRY} activeClassName="is-active" exact={true}>Registro</NavLink>
        : false
      )}
      {(userType === 'admin' || userType === 'supervisor' ? 
        <NavLink className="header__navigation-item" to={routes.HOSTS_FACILITATORS} activeClassName="is-active" exact={true}>A&F</NavLink>
        : false
      )}
      {(userType === 'admin' ? 
        <NavLink className="header__navigation-item" to={routes.USERS} activeClassName="is-active" exact={true}>Usuarios</NavLink>
        : false
      )}
      <div className="header__navigation-box-extra-panel">
        &nbsp;
      </div>
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  userName: state.auth.userName,
  userType: state.auth.userType
});

export default connect(mapStateToProps, undefined)(Header);