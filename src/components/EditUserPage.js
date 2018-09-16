import React from 'react';
import { connect } from 'react-redux';
import { startEditUser } from '../actions/users';
import * as routes from '../constants/routes';

export class EditUserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: props.user.userName,
      userType: props.user.userType,
      error: null,
    }
  }

  handleChange = (e) => {
    const control = e.target.id;
    const value = e.target.value;
    this.setState(() => ({ [control]: value }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {
      userName,
      userType
    } = this.state;

    this.props.startEditUser(this.props.user.id, {userName, userType}).then(() => {
      this.props.history.push(routes.USERS);
    }).catch((e) => {
      this.setState(() => ({
        error: e
      }))
    });
  };

  render() {
    return (
      <div className="component">
        <div className="component__container">
          <h1 className="component__title">Editando usuario</h1>
          { this.state.error && <p style={{color: 'red'}}>{this.state.error.message}</p> }
          <form onSubmit={this.onSubmit}>
            <div className="input-group">
              <input 
                id="userName"
                className="text-input"
                value={this.state.userName}
                placeholder="Nombre usuario"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group">
              <select
                id="userType"
                className="select"
                value={this.state.userType}
                onChange={this.handleChange}
              >
                <option value="">-- Tipo de usuario --</option>
                <option value="registry">Registro</option>
                <option value="finances">Finanzas</option>
                <option value="supervisor">Supervisor</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
            <div className="input-group">
              <button className="button button__positive">Guardar usuario</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: state.users.find((user) => user.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  startEditUser: (id, user) => dispatch(startEditUser(id, user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPage);

