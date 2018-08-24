import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const PublicWelcomePage = () => {
  return (
    <div>
      <Link to={routes.LOGIN}>Inicio de sesión</Link>
      <h1>Bienvenidos a la campaña</h1>
      <h2>40 días de oración</h2>
      <h3>Cedes comunidad cristiana. Mexicali, B.C.</h3>
      {/*<Link to="/searchPartker">Registrate</Link>*/}
      <h4>Registro general empieza 07 de Octubre del 2018.</h4>
    </div>
  );
};

export default PublicWelcomePage;