import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FolioModal from './FolioModal';
import FinancesList from './FinancesList';
import FinancesListFilters from './FinancesListFilters';
import FinancesSummary from './FinancesSummary';
import { removeLastPartaker } from '../actions/partakers';
import * as routes from '../constants/routes';

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
      <div className="component">
        <div className="component__container">
          <FinancesSummary />
          <Link className="button button__positive" to={routes.CREATE_FOLIO}>Crear Folio</Link>
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