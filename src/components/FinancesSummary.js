import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectPartakers from '../selectors/partakers';
import selectFinancesTotal from '../selectors/finances-total';

export const FinancesSummary = ({ financesCount, financesTotal }) => {
  const financesWord = financesCount === 1 ? 'participante' : 'participantes';
  const formattedTotal = numeral(financesTotal).format('$0,0.00');
  return (
    <div>
      {
        <h2 className="component__header">
          Viendo <span>{financesCount}</span> {financesWord} con un total de <span>{formattedTotal}</span> dólares.
        </h2>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  const visiblePartakers = selectPartakers(state.partakers, state.filters);
  return {
    financesCount: visiblePartakers.length,
    financesTotal: selectFinancesTotal(visiblePartakers)
  };
};

export default connect(mapStateToProps)(FinancesSummary);