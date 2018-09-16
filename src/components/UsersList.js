import React from 'react';
import { connect } from 'react-redux';
import UsersListItem from './UsersListItem';
import selectUsers from '../selectors/users';

export const UsersList = (props) => (
  <div>
    <div className="list-header">
      <div className="show-for-mobile">Usuarios</div>
      <div className="show-for-desktop list-item__name">Usuario</div>
      <div className="show-for-desktop list-item__type">Correo</div>
      <div className="show-for-desktop list-item__creation-date">Tipo</div>
    </div>
    {
      props.users.length === 0 ? (
        <div className="list-item__empty">
          Ningun usuario
        </div>
      ) : (
        props.users.map((user, index) => 
          <UsersListItem 
            key={user.id}
            count={index + 1}
            {...user}
          />
        )
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    users: selectUsers(state.users, state.userFilters)
  };
};

export default connect(mapStateToProps)(UsersList);