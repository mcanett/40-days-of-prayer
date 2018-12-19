import React from 'react';
import HousePartakerListItem from './HousePartakerListItem';


export const HousePartakerList = (props) => {

  return (
    <div>
      <div className="list-header">
        <div className="show-for-mobile">Participantes</div>
        <div className="show-for-desktop list-item__l">Nombre</div>
        <div className="show-for-desktop list-item__m">Folio</div>
        <div className="show-for-desktop list-item__m">Teléfono</div>
        <div className="show-for-desktop list-item__xs not-printable"></div>
      </div>
      {
        props.partakers.length === 0 ? (
          <div className="list-item__empty">
            Ningun participante
          </div>
        ) : (
          props.partakers.map((partaker, index) => 
            <HousePartakerListItem
              key={partaker.id}
              count={index + 1}
              {...partaker}
            />
          )
        )
      }
    </div>
  );
}

export default HousePartakerList;