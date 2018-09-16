import React from 'react';
import { Link } from 'react-router-dom';

const UsersListItem = ({ count, id, email, uid, userName, userType }) => {
  const type = userType === 'finances' ? 'Finanzas' : userType === 'registry' ? 'Registro' :
    userType === 'supervisor' ? 'Supervisor' : 'Administrador';
  return (
    <Link to={`/user/${id}`} className="list-item">
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
    </Link>
  );
};

export default UsersListItem;