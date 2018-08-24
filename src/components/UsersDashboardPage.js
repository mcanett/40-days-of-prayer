import React from 'react';
import { Link } from 'react-router-dom';

const UsersDashboardPage = () => (
  <div>
  <Link to="/users/create">Crear usuario</Link>
  <p>This is my user dashboard page</p>
  </div>
);

export default UsersDashboardPage;