import React from 'react';
import { connect } from 'react-redux';
import HostFacilitatorList from './HostFacilitatorList';
import HostFacilitatorListFilters from './HostFacilitatorListFilters';
import HostFacilitatorSummary from './HostFacilitatorSummary';
import { removeLastPartaker } from '../actions/partakers';

export class HostsDashboardPage extends React.Component {
  state = {
    lastPartaker: this.props.lastPartaker
  };

  handleClearCreatedFolio = () => {
    this.props.removeLastPartaker();
    this.setState(() => ({
      lastPartaker: null
    }));
	}

  render() {
    return (
      <div className="component">
        <div className="component__container">
          <HostFacilitatorSummary />
          <HostFacilitatorListFilters />
          <HostFacilitatorList />
        </div>
      </div>
    );;
  }
}

const mapStateToProps = (state) => ({
  lastPartaker: state.lastPartaker
});

const mapDispatchToProps = (dispatch) => ({
  removeLastPartaker: () => dispatch(removeLastPartaker())
});

export default connect(mapStateToProps, mapDispatchToProps)(HostsDashboardPage);