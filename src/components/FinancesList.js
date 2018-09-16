import React from 'react';
import { connect } from 'react-redux';
import FinancesListItem from './FinancesListItem';
import selectPartakers from '../selectors/finances-partakers';

export const FinancesList = (props) => (
  <div>
    <div className="list-header">
      <div className="show-for-mobile">Participantes</div>
      <div className="show-for-desktop list-item__name">Participante</div>
      <div className="show-for-desktop list-item__type">Folio</div>
      <div className="show-for-desktop list-item__creation-date">Fecha</div>
    </div>
    {
      props.partakers.length === 0 ? (
        <div className="list-item__empty">
          Ningun participante
        </div>
      ) : (
        props.partakers.map((partaker, index) => 
          <FinancesListItem 
            key={partaker.id}
            count={index + 1}
            {...partaker}
          />
        )
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    partakers: selectPartakers(state.partakers, state.financesFilters)
  };
};

export default connect(mapStateToProps)(FinancesList);