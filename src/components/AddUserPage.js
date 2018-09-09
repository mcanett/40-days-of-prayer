import React from 'react';
import { history } from '../routers/AppRouter';
import { startSignUp, saveUserInfo } from '../actions/auth';
import { addUser } from '../actions/users';
import * as routes from '../constants/routes';

const AddUserPage = () => (
  <div className="component">
    <div className="component__container">
      <h1 className="component__header">Creación un usuario</h1>
      <AddUserForm />
    </div>
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  userType: '',
  error: null,
};

class AddUserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
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
      username,
      email,
      passwordOne,
      passwordTwo,
      userType
    } = this.state;

    startSignUp(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        saveUserInfo(authUser.uid, username, email, userType).then(() => {
          addUser({ uid: authUser.uid, username, email, userType});
          history.push(routes.USERS);
        });
      })
      .catch(error => {
        this.setState(() => ({ 'error': error }));
      });

  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      userType,
      error,
    } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '' ||
    userType === '';
    
    return (
      <div>
        { error && <p style={{color: 'red'}}>{error.message}</p> }
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <div className="input-group__item">
              <input
                id="username"
                className="text-input"
                value={username}
                onChange={this.handleChange}
                type="text"
                placeholder="Nombre completo"
              />
            </div>
            <div className="input-group__item">
              <input
                id="email"
                className="text-input"
                value={email}
                onChange={this.handleChange}
                type="text"
                placeholder="Correo"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-group__item">
              <input
                id="passwordOne"
                className="text-input"
                value={passwordOne}
                onChange={this.handleChange}
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <div className="input-group__item">
              <input
                id="passwordTwo"
                className="text-input"
                value={passwordTwo}
                onChange={this.handleChange}
                type="password"
                placeholder="Confirma contraseña"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-group__item">
              <select
                id="userType"
                className="select"
                value={userType}
                onChange={this.handleChange}
              >
                <option value="">-- Tipo de usuario --</option>
                <option value="registry">Registro</option>
                <option value="finances">Finanzas</option>
                <option value="supervisor">Supervisor</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
          </div>
          <div className="input-group">
            <div className="input-group__item">
              <button className="button button__positive" disabled={isInvalid}>Guardar Usuario</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddUserPage;