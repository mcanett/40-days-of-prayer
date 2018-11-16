import React from 'react';
import { connect } from 'react-redux';
import HostFacilitatorListItem from './HostFacilitatorListItem';
import selectHosts from '../selectors/hosts';
import selectHostsFacilitators from '../selectors/hosts-facilitators';
import selectFilters from '../selectors/host-facilitators-filters';

export const HostFacilitatorList = (props) => (
  <div>
    <div className="list-header">
      <div className="show-for-mobile">Anfitriones</div>
      <div className="show-for-desktop list-item__l">Nombre</div>
      <div className="show-for-desktop list-item__xs">Folio</div>
      <div className="show-for-desktop list-item__s">Teléfono</div>
      <div className="show-for-desktop list-item__xxs">Casa</div>
      <div className="show-for-desktop list-item__xxs">#</div>
      <div className="show-for-desktop list-item__xxs">Fac.</div>
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
            hasFacilitator={!!props.housesFacilitators.find((houseFacilitator) => houseFacilitator.house === hostFacilitator.id)}
            houseNumberLabel={hostFacilitator.hostInfo ? hostFacilitator.hostInfo.numberLabel 
              : hostFacilitator.houseId ? props.hosts.find(host => host.id == hostFacilitator.houseId).hostInfo.numberLabel 
              : ' - '}
          />
        )
      )
    }
    {/*props.hosts.sort((a, b) => { return a.hostInfo.numberLabel - b.hostInfo.numberLabel }).forEach(h => {
      console.log(h.hostInfo.numberLabel, h.hostInfo.location.lat, h.hostInfo.location.lng)
    })*/}
  </div>
);

const mapStateToProps = (state) => {
  return {
    housesFacilitators: state.housesFacilitators,
    hosts: selectHosts(state.partakers),
    hostsFacilitators: selectFilters(selectHostsFacilitators(state.partakers), state.hostFacilitatorFilters)
  };
};

export default connect(mapStateToProps)(HostFacilitatorList);