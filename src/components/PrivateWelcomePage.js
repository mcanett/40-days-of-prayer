import React from 'react';
import { connect } from 'react-redux';

export const PrivateWelcomePage = (props) => {
  return (
    <div className="component component__center">
      <div className="big-message">
        <h1>Bienvenido a la campaña</h1>
        <h2 className="component__header">Le atiende {props.user.userName}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth
});

export default connect(mapStateToProps, undefined)(PrivateWelcomePage);