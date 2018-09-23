import React from 'react';
import { connect } from 'react-redux';
import HostFacilitatorListItem from './HostFacilitatorListItem';
import selectHostsFacilitators from '../selectors/hosts-facilitators';

export const HostFacilitatorList = (props) => (
  <div>
    <div className="list-header">
      <div className="show-for-mobile">Anfitriones</div>
      <div className="show-for-desktop list-item__l">Anfitrión</div>
      <div className="show-for-desktop list-item__s">Folio</div>
      <div className="show-for-desktop list-item__s">Rol</div>
      <div className="show-for-desktop list-item__xs">Fecha</div>
    </div>
    {
      props.hostsFacilitators.length === 0 ? (
        <div className="list-item__empty">
          Ningun participante
        </div>
      ) : (
        props.hostsFacilitators.map((hostFacilitator, index) => 
          <HostFacilitatorListItem 
            key={hostFacilitator.id}
            count={index + 1}
            {...hostFacilitator}
          />
        )
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    hostsFacilitators: selectHostsFacilitators(state.partakers)
  };
};

export default connect(mapStateToProps)(HostFacilitatorList);