import React from 'react';
import { connect } from 'react-redux';
import { history } from '../routers/AppRouter';
import { setUsername, setUserType } from '../actions/userFilters';
import * as routes from '../constants/routes';

export class UsersListFilters extends React.Component {  
  onUsernameChange = (e) => {
    this.props.setUsername(e.target.value);
  };

  onTypeChange = (e) => {
    this.props.setUserType(e.target.value);
  };

  onCreateUser = () => {
    history.push(routes.CREATE_USER);
  };

  render() {
    return (
      <div className="input-group">
        <div className="input-group__item">
          <select
            className="select"
            value={this.props.userFilters.type}
            onChange={this.onTypeChange}
          >
            <option value="">Todos</option>
            <option value="finances">Finanzas</option>
            <option value="registry">Registro</option>
            <option value="supervisor">Supervisor</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <div className="input-group__item">
          <input
            type="text"
            placeholder="Nombre"
            className="text-input"
            value={this.props.userFilters.username}
            onChange={this.onUsernameChange}
          />
        </div>
        <div className="input-group__item">
          <button type="button" className="button button__positive" onClick={this.onCreateUser}>Crear Usuario</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userFilters: state.userFilters
});

const mapDispatchToProps = (dispatch) => ({
  setUsername: (username) => dispatch(setUsername(username)),
  setUserType: (userType) => dispatch(setUserType(userType))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersListFilters);