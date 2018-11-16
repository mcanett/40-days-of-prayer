import React from 'react';
import { connect } from 'react-redux';

export const PartakersSummary = ({ hasHandbookCount, remainingHandbooks}) => {
  return (
    <div className="not-printable">
      {
        <h2 className="component__header">
          Se han entregado <span>{hasHandbookCount}</span> manuales, restan <span>{remainingHandbooks}</span>.
        </h2>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  const partakerNotAuth = state.partakers.filter((partaker) => 
    !partaker.folio.includes('A') ? true : false
  ).length;
  const hasHandbookCount = state.partakers.filter((partaker) => 
    !partaker.folio.includes('A') ? partaker.hasHandbook ? true : false : false
  ).length;
  return {
    hasHandbookCount,
    remainingHandbooks: partakerNotAuth - hasHandbookCount
  };
};

export default connect(mapStateToProps)(PartakersSummary);