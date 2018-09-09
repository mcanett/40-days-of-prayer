import React from 'react';
import UsersListFilters from './UsersListFilters';
import UsersList from './UsersList';

const UsersDashboardPage = () => (
  <div className="component">
    <div className="component__container">
      <UsersListFilters />
      <UsersList />
    </div>
  </div>
);

export default UsersDashboardPage;