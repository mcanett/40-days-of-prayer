import React from 'react';
import { connect } from 'react-redux';
import selectHostsFacilitators from '../selectors/hosts-facilitators';

export const HostFacilitatorSummary = ({ hostsCount, facilitatorsCount, hfsCount }) => {
  { /*const financesWord = financesCount === 1 ? 'participante' : 'participantes';*/ }
  return (
    <div>
      {
        <h2 className="component__header">
          Total de <span>{hostsCount}</span> anfitriones, <span>{facilitatorsCount}</span> facilitadores y <span>{hfsCount}</span> con ambos roles.
        </h2>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  const hostsFacilitators = selectHostsFacilitators(state.partakers);
  const hosts = hostsFacilitators.filter((hs) => !!hs.hostInfo && !hs.facilitatorInfo);
  const facilitators = hostsFacilitators.filter((hs) => !hs.hostInfo && !!hs.facilitatorInfo);
  const hfs = hostsFacilitators.filter((hs) => !!hs.hostInfo && !!hs.facilitatorInfo);
  
  return {
    hostsCount: hosts.length,
    facilitatorsCount: facilitators.length,
    hfsCount: hfs.length
  };
};

export default connect(mapStateToProps)(HostFacilitatorSummary);