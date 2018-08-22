import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PartakerListItem = ({ count, id, folio, name, createdAt}) => {
const fullName = `${name.firstName} ${name.lastName} ${name.mothersSurname}`;
const formattedDate = moment(createdAt).format('DD/MM/YY');

return (
  <div>
    <h3>
    {count}. {folio} - {fullName} - {formattedDate} - <Link to={`edit/${id}`}>Edit</Link>
    </h3>
  </div>
)};

export default PartakerListItem;