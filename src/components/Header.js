import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>40 días de oración</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Bienvenida</NavLink>
    <NavLink to="/finances" activeClassName="is-active">Finanzas</NavLink>
    <NavLink to="/registry" activeClassName="is-active" exact={true}>Registro</NavLink>
  </header>
);

export default Header;