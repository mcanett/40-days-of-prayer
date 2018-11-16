import React from 'react';
import { connect } from 'react-redux';
import PartakerListItem from './PartakerListItem';
import selectPartakers from '../selectors/partakers-filters';

export const PartakerList = (props) => {

  const setHasHandbook = (id, hasHandbook) => {
    props.setHasHandbook(id, hasHandbook);
  };

  return (
    <div>
      <div className="list-header">
        <div className="show-for-mobile">Anfitriones</div>
        <div className="show-for-desktop list-item__l">Nombre</div>
        <div className="show-for-desktop list-item__s">Folio</div>
        <div className="show-for-desktop list-item__s not-printable">Fecha</div>
        <div className="show-for-desktop list-item__xs not-printable">Manual</div>
        <div className="show-for-desktop list-item__s"><span className="visible-on-print">Firma</span></div>
      </div>
      {
        props.partakers.length === 0 ? (
          <div className="list-item__empty">
            Ningun participante
          </div>
        ) : (
          props.partakers.map((partaker, index) => 
            <PartakerListItem
              key={partaker.id}
              count={index + 1}
              {...partaker}
              setHasHandbook={setHasHandbook}
            />
          )
        )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    partakers: selectPartakers(state.partakers, state.partakersFilters)
  };
};

export default connect(mapStateToProps)(PartakerList);