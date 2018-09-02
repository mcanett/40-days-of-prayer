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
        { error && <p style={{color: 'red'}}>{error.message}</p> }
        <form onSubmit={this.onSubmit}>
          <input
            id="passwordOne"
            value={passwordOne}
            onChange={this.handleChange}
            type="password"
            placeholder="Nueva Contraseña"
          />
          <input
            id="passwordTwo"
            value={passwordTwo}
            onChange={this.handleChange}
            type="password"
            placeholder="Confirma Nueva Contraseña"
          />
          <button disabled={isInvalid} type="submit">
            Cambiar contraseña
          </button>

        </form>
      </div>
    );
  };
}


export default ChangePasswordPage;