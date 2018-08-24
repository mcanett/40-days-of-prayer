import React from 'react';
import { history } from '../routers/AppRouter';
import { startSignUp, saveUserInfo } from '../actions/auth';
import * as routes from '../constants/routes';

const AddUserPage = () => (
  <div>
    <h1>Registra un usuario</h1>
    <AddUserForm />
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
          <input
            id={"username"}
            value={username}
            onChange={this.handleChange}
            type="text"
            placeholder="Nombre completo"
          />
          <input
            id={"email"}
            value={email}
            onChange={this.handleChange}
            type="text"
            placeholder="Correo"
          />
          <input
            id={"passwordOne"}
            value={passwordOne}
            onChange={this.handleChange}
            type="password"
            placeholder="Contraseña"
          />
          <input
            id={"passwordTwo"}
            value={passwordTwo}
            onChange={this.handleChange}
            type="password"
            placeholder="Confirma contraseña"
          />
          <select
            id="userType"
            value={userType}
            onChange={this.handleChange}
          >
            <option value="">-- Tipo de usuario --</option>
            <option value="registry">Registro</option>
            <option value="finances">Finanzas</option>
            <option value="supervisor">Supervisor</option>
            <option value="admin">Administrador</option>
          </select>
          <button disabled={isInvalid}>Registrar</button>
        </form>
      </div>
    );
  }
}

export default AddUserPage;