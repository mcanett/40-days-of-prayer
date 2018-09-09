import React from 'react';

const UsersListItem = ({ count, email, uid, userName, userType }) => {
  const type = userType === 'finances' ? 'Finanzas' : userType === 'registry' ? 'Registro' :
    userType === 'supervisor' ? 'Supervisor' : 'Administrador';
  return (
    <div className="list-item">
      <div className="list-item__name">
        <h3>
          {count}. {userName}
        </h3>
      </div>
      <div className="list-item__type">
        <h3>
          {email}
        </h3>
      </div>
      <div className="list-item__creation-date">
        <h3>
          {type}
        </h3>
      </div>
    </div>
  );
};

export default UsersListItem;