import React from 'react';
import { Link } from 'react-router-dom';
import { startLogIn } from '../actions/auth';
import * as routes from '../constants/routes';

const LoginPage = ({ history }) => (
  <div>
    <h2>Inicio de sesión</h2>
    <LoginForm history={history} />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class LoginForm extends React.Component {
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
      email,
      password
    } = this.state;

    startLogIn(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(() => ({ 'error': error }));
      });
  };

  render() {
    const {
      email,
      password,
      error
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div>
        { error && <p style={{color: 'red'}}>{ error.message }</p> }
        <form onSubmit={this.onSubmit}>
        <input
          id="email"
          value={email}
          onChange={this.handleChange}
          type="text"
          placeholder="Correo"
        />
        <input
          id="password"
          value={password}
          onChange={this.handleChange}
          type="password"
          placeholder="Contraseña"
        />
        <button disabled={isInvalid} type="submit">
          Iniciar sesión
        </button>
        </form>
        <Link to={routes.PUBLIC_WELCOME}>Regresar al inicio</Link>
      </div>
    );
  }
}

export default LoginPage;