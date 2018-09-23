import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const HostFacilitatorListItem = (hostFacilitator) => {
const fullName = `${hostFacilitator.name.firstName} ${hostFacilitator.name.lastName} ${hostFacilitator.name.mothersSurname}`;
const role = hostFacilitator.hostInfo !== undefined && hostFacilitator.facilitatorInfo !== undefined ? 'A & F' :
  hostFacilitator.hostInfo !== undefined ? 'Anfitrión' : 'Facilitador';
const formattedDate = moment(hostFacilitator.createdAt).format('DD/MM/YY');

return (
  <Link to={`/edit/${hostFacilitator.id}`} className="list-item">
    <div className="list-item__l">
      <h3>
        {hostFacilitator.count}. {fullName}
      </h3>
    </div>
    <div className="list-item__s">
      <h3>
        {hostFacilitator.folio}
      </h3>
    </div>
    <div className="list-item__s">
      <h3>
        {role}
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