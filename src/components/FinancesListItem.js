import React from 'react';

const FinancesListItem = ({ count, id, folio, name}) => {
  const prefix = folio.substr(0,1);
  return (
    <div>
        <h3>
          {count}. {name.lastName} {name.mothersSurname} {name.firstName} - {prefix === 'P' ? 'PAGADO' : prefix === 'D' ? 'DONADO' : 'AUTORIZADO'}
        </h3>
    </div>
  );
};

export default FinancesListItem;