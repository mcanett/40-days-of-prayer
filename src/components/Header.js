import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>40 días de oración</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/finances" activeClassName="is-active">Finanzas</NavLink>
    <NavLink to="/create" activeClassName="is-active" exact={true}>Registro Participante</NavLink>
  </header>
);

export default Header;