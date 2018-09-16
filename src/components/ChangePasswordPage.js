import React from 'react';
import { history } from '../routers/AppRouter';
import { startPasswordUpdate } from '../actions/auth';
import * as routes from '../constants/routes';

const ChangePasswordPage = () => (
  <PasswordChangeForm />
);


const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  };

  handleChange = (e) => {
    const control = e.target.id;
    const value = e.target.value;
    this.setState(byPropKey(control, value));
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { passwordOne } = this.state;

    startPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.PRIVATE_WELCOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
  };

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <div className="component">
        <div className="component__container">
          <h1 className="component__title">Cambio de contraseña</h1>
          { error && <p style={{color: 'red'}}>{error.message}</p> }
          <form onSubmit={this.onSubmit}>
            <div className="input-group">
              <input
                id="passwordOne"
                className="text-input"
                value={passwordOne}
                onChange={this.handleChange}
                type="password"
                placeholder="Nueva Contraseña"
              />
            </div>
            <div className="input-group">
              <input
                id="passwordTwo"
                className="text-input"
                value={passwordTwo}
                onChange={this.handleChange}
                type="password"
                placeholder="Confirma Nueva Contraseña"
              />
            </div>
            <div className="input-group">
              <button className="button button__positive" disabled={isInvalid} type="submit">
                Cambiar contraseña
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
}


export default ChangePasswordPage;