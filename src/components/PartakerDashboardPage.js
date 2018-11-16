import React from 'react';
import { connect } from 'react-redux';
import PartakersSummary from './PartakersSummary';
import PartakerListFilters from './PartakerListFilters';
import PartakerList from './PartakerList';
import HandbookModal from './HandbookModal';
import { startSetHasHandbook } from '../actions/partakers';

export class PartakerDashboardPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      partakerId: undefined,
      openModal: false
    }
  }

  setHasHandbook = (id, hasHandbook) => {
    if(!hasHandbook) {
      this.setState(() => ({ partakerId: id, openModal: true }));
    } else {
      this.props.startSetHasHandbook(id, hasHandbook).then(() => {
        console.log('Everything went fine');
      });
    }
  }

  handleSetOffHasHandbook = () => {
    this.props.startSetHasHandbook(this.state.partakerId, false);
    this.setState(() => ({ partakerId: undefined, openModal: false }));
  }

  onModalRequestClose = () => {
    this.setState(() => ({ partakerId: undefined, openModal: false }));
  }

  render() {
    return (
      <div className="component" id="section-to-print">
        <div className="component__container">
          <h1 className="component__header not-printable">Participantes en general</h1>
          <PartakersSummary />
          <PartakerListFilters />
          <PartakerList setHasHandbook={this.setHasHandbook}/>
          <HandbookModal
            openModal={this.state.openModal}
            handleSetOffHasHandbook={this.handleSetOffHasHandbook}
            onModalRequestClose={this.onModalRequestClose}
					/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startSetHasHandbook: (id, hasHandbook) => dispatch(startSetHasHandbook(id, hasHandbook))
});

export default connect(undefined, mapDispatchToProps)(PartakerDashboardPage);