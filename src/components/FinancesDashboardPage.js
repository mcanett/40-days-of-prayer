import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import FolioModal from './FolioModal';
import FinancesList from './FinancesList';
import FinancesListFilters from './FinancesListFilters';
import FinancesSummary from './FinancesSummary';
import { removeLastPartaker } from '../actions/partakers'; 

export class FinancesDashboardPage extends React.Component {
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
      <div>
        <div>
          <NavLink to="/create/folio" activeClassName="is-active">Crear Folio</NavLink>
        </div>
        <div>
          <FinancesSummary />
          <FinancesListFilters />
          <FinancesList />
        </div>
        <FolioModal
            openModal={!!this.state.lastPartaker}
            lastPartaker={this.state.lastPartaker}
						handleClearCreatedFolio={this.handleClearCreatedFolio}
					/>
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

export default connect(mapStateToProps, mapDispatchToProps)(FinancesDashboardPage);