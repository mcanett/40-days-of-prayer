import React from 'react';
import { Link } from 'react-router-dom';
//import { IconContext } from 'react-icons';
import { IoIosKey } from 'react-icons/io'
import * as routes from '../constants/routes';

const PublicWelcomePage = () => {
  return (
    <div className="box-layout__background">
      <div className="box-layout__right-items">
        <Link to={routes.LOGIN}>
          {/*<IconContext.Provider value={{ color: "#EABF60", className: "box-layout__icon"}}>
            <IoIosKey />
          </IconContext.Provider>*/}
          Inicio de Sesión
        </Link>
      </div>
      <div className="box-layout">
        <div className="box-layout__box-transparent">
          <h1>Bienvenidos a la campaña</h1>
          <img src="/images/logo-512-white.png" />
          <h1>Cedes Comunidad Cristiana - Mexicali, B.C.</h1>
          {/*<Link to="/searchPartker">Registrate</Link>*/}
          <h3>Registro general empieza 07 de Octubre del 2018.</h3>
        </div>
      </div>
    </div>
  );
};

export default PublicWelcomePage;