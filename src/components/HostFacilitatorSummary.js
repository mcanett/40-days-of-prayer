import React from 'react';
import { connect } from 'react-redux';
import selectHostsFacilitators from '../selectors/hosts-facilitators';

export const HostFacilitatorSummary = ({ hostsCount, facilitatorsCount, hfsCount, housesWithoutFacilitator, facilitatorsWithoutHouse, generalHouseCapacity }) => {
  { /*const financesWord = financesCount === 1 ? 'participante' : 'participantes';*/ }
  return (
    <div>
        <h2 className="component__header">
          Total de <span>{hostsCount}</span> anfitriones, <span>{facilitatorsCount}</span> facilitadores y <span>{hfsCount}</span> con ambos roles.
        </h2>
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
          <h2 className="component__header">
            Casas sin facilitador: <span>{housesWithoutFacilitator}</span>
          </h2>
          <h2 className="component__header">
            Facilitadores sin casa: <span>{facilitatorsWithoutHouse}</span>
          </h2>
        </div>
        <h2 className="component__header">
          Capacidad de <span>{generalHouseCapacity}</span> personas en toda la campaña.
        </h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  const hostsFacilitators = selectHostsFacilitators(state.partakers);
  const hosts = hostsFacilitators.filter((hs) => !!hs.hostInfo && !hs.facilitatorInfo);
  const facilitators = hostsFacilitators.filter((hs) => !hs.hostInfo && !!hs.facilitatorInfo);
  const hfs = hostsFacilitators.filter((hs) => !!hs.hostInfo && !!hs.facilitatorInfo);

  const housesWithFacilitator = hosts.filter((host) => !!state.housesFacilitators.find((hf) => hf.house === host.id));
  const facilitatorsWithoutHouse = facilitators.filter((facilitator) => facilitator.houseId === undefined);

  const hostHouseCapacity = hosts.map((host) => host.hostInfo.houseCapacity)
    .reduce((sum, value) => sum + value, 0);

  const hfsHouseCapacity = hfs.map((hf) => hf.hostInfo.houseCapacity)
    .reduce((sum, value) => sum + value, 0);

  const generalHouseCapacity = hostHouseCapacity + hfsHouseCapacity;
  
  return {
    hostsCount: hosts.length,
    facilitatorsCount: facilitators.length,
    hfsCount: hfs.length,
    housesWithoutFacilitator: hosts.length - housesWithFacilitator.length,
    facilitatorsWithoutHouse: facilitatorsWithoutHouse.length,
    generalHouseCapacity
  };
};

export default connect(mapStateToProps)(HostFacilitatorSummary);