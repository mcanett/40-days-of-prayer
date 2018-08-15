import React from 'react';
import { connect } from 'react-redux';
import PartakerListItem from './PartakerListItem';
import selectPartakers from '../selectors/partakers';

export const PartakerList = (props) => (
  <div>
    {
      props.partakers.length === 0 ? (
        <p>Ningun participante</p>
      ) : (
        props.partakers.map((partaker, index) => 
          <PartakerListItem 
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

export default connect(mapStateToProps)(PartakerList);