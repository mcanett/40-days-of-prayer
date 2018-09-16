import React from 'react';
import moment from 'moment';

const FinancesListItem = ({ count, id, folio, name, createdAt}) => {
  const fullName = `${name.firstName} ${name.lastName} ${name.mothersSurname}`;
  /*const prefix = folio.substr(0,1);
  const typeTag = prefix === 'P' ? 'Pagado' : prefix === 'D' ? 'Donado' : 'Autorizado';*/
  const formattedDate = moment(createdAt).format('DD/MM/YY');
  return (
    <div className="list-item">
      <div className="list-item__name">
        <h3>
          {count}. {fullName}
        </h3>
      </div>
      <div className="list-item__type">
        <h3>
          {folio}
        </h3>
      </div>
      <div className="list-item__creation-date">
        <h3>
          {formattedDate}
        </h3>
      </div>
    </div>
  );
};

export default FinancesListItem;