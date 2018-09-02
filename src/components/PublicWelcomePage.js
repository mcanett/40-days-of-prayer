import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const PublicWelcomePage = () => {
  return (
    <div className="box-layout">
      <div className="box-layout__box-transparent">
        <div className="box-layout__right-items">
          <Link to={routes.LOGIN}>
            Inicio de Sesión
          </Link>
        </div>
        <div>
          <h1>Bienvenidos a la campaña</h1>
          <img className="image__resize" src="/images/logo-512-white-modified.png" />
          <h1>Cedes Comunidad Cristiana - Mexicali, B.C.</h1>
          {/*<Link to="/searchPartker">Registrate</Link>*/}
          <h3>Registro general empieza 07 de Octubre del 2018.</h3>
        </div>
      </div>
    </div>
  );
};

export default PublicWelcomePage;