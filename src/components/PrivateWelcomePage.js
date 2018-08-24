import React from 'react';
import { connect } from 'react-redux';

export const PrivateWelcomePage = (props) => {
  return (
    <div>
      <h1>Bienvenido(a) {props.user.userName} </h1>
      <h2>40 días de oración</h2>
      <h3>Cedes comunidad cristiana. Mexicali, B.C.</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth
});

export default connect(mapStateToProps, undefined)(PrivateWelcomePage);