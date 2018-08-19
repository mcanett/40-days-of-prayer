import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <h1>Bienvenidos a la campaña</h1>
      <h2>40 días de oración</h2>
      <h3>Cedes comunidad cristiana. Mexicali, B.C.</h3>
      <Link to="/searchPartker">Registrate</Link>
    </div>
  );
};

export default WelcomePage;