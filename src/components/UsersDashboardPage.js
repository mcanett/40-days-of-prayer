import React from 'react';
import { Link } from 'react-router-dom';

const UsersDashboardPage = () => (
  <div className="component">
    <div className="component__container">
      <Link className="button button__positive" to="/users/create">Crear usuario</Link>
      <p>This is my user dashboard page</p>
    </div>
  </div>
);

export default UsersDashboardPage;