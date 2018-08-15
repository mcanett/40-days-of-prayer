import React from 'react';
import { connect } from 'react-redux';
import FinancesListItem from './FinancesListItem';
import selectPartakers from '../selectors/partakers';

export const FinancesList = (props) => (
  <div>
    {
      props.partakers.length === 0 ? (
        <p>Ningun participante</p>
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
    partakers: selectPartakers(state.partakers, state.filters)
  };
};

export default connect(mapStateToProps)(FinancesList);