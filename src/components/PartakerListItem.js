import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const PartakerListItem = ({ count, id, folio, name}) => (
  <div>
    <Link to={`edit/${id}`}>
      <h3>{count}. {folio} - {name.lastName}</h3>
    </Link>
  </div>
);

export default PartakerListItem;