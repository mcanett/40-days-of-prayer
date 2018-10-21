import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { BlueHomeIcon, GreenHomeIcon, BlueManIcon, GreenManIcon } from './Icons';

const HostFacilitatorListItem = (hostFacilitator) => {
const fullName = `${hostFacilitator.name.firstName} ${hostFacilitator.name.lastName} ${hostFacilitator.name.mothersSurname}`;
const role = hostFacilitator.hostInfo !== undefined && hostFacilitator.facilitatorInfo !== undefined ? 'A & F' :
  hostFacilitator.hostInfo !== undefined ? 'Anfitrión' : 'Facilitador';
const formattedDate = moment(hostFacilitator.createdAt).format('DD/MM/YY');

return (
  <Link to={{
    pathname: `/edit/${hostFacilitator.id}`,
    search: '',
    state: { detail: 'hf' }
  }} className="list-item">
  {/*<Link to={`/edit/${hostFacilitator.id}`} className="list-item">*/}
  <div className="list-item__l">
      <h3>
        {hostFacilitator.count}. {fullName}
      </h3>
    </div>
    <div className="list-item__xs">
      <h3>
        {hostFacilitator.folio}
      </h3>
    </div>
    <div className="list-item__s">
      <h3>
        {hostFacilitator.phone}
      </h3>
    </div>
    <div className="list-item__xxs">
      <h3>
        { role !== 'Facilitador' ? <BlueHomeIcon /> : hostFacilitator.houseId !== undefined ? <GreenHomeIcon /> : ` - `}
      </h3>
    </div>
    <div className="list-item__xxs">
      <h3>
        { hostFacilitator.houseNumberLabel }
      </h3>
    </div>
    <div className="list-item__xxs">
      <h3>
      { role !== 'Anfitrión' ? <BlueManIcon /> : hostFacilitator.hasFacilitator ? <GreenManIcon /> : ` - `}
      </h3>
    </div>
    <div className="list-item__xs">
      <h3>
        {formattedDate}
      </h3>
    </div>
  </Link>
)};

export default HostFacilitatorListItem;