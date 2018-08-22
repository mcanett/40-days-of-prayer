import React from 'react';

const FinancesListItem = ({ count, id, folio, name}) => {
  const fullName = `${name.firstName} ${name.lastName} ${name.mothersSurname}`;
  const prefix = folio.substr(0,1);
  const typeTag = prefix === 'P' ? 'PAGADO' : prefix === 'D' ? 'DONADO' : 'AUTORIZADO';

  return (
    <div>
        <h3>
          {count}. {fullName} - {typeTag}
        </h3>
    </div>
  );
};

export default FinancesListItem;