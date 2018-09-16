import React from 'react';
import { connect } from 'react-redux';
import SearchPartakerForm from './SearchPartakerForm';
import SearchPartakerModal from './SearchPartakerModal';
import searchPartaker from '../selectors/search-partaker';
import { removeLastPartaker } from '../actions/partakers';

export class SearchPartakerPage extends React.Component {
  state = {
    openModal: false,
    partakerInfo: undefined,
    lastPartaker: this.props.lastPartaker
  };

  handleClearSavedSuccessfully = () => {
    this.props.removeLastPartaker();
    this.setState(() => ({
      lastPartaker: null,
      partakerInfo: undefined,
      openModal: false
    }));
  }
  
  onEdit = () => {
    this.props.history.push('/edit/' + this.state.partakerInfo.partaker.id);
  };

  onSearch = (partakerText) => {
    const partakerInfo = searchPartaker(this.props.partakers, partakerText, this.props.userType)
    if (partakerInfo !== undefined && partakerInfo.state === 'name') {
      this.props.history.push('/edit/' + partakerInfo.partaker.id);
    } 
    this.setState(() => ({
      partakerInfo,
      openModal: true
    }));
  }

  render() {
    return (
      <div className="component">
        <div className="component__container">
          <h1 className="component__header">Busqueda del participante</h1>
          <SearchPartakerForm onSearch={this.onSearch}/>
          <SearchPartakerModal
            openModal={!!this.state.partakerInfo || !!this.state.lastPartaker || this.state.openModal}
            partakerInfo={this.state.partakerInfo}
            lastPartaker={this.state.lastPartaker}
            handleClearSavedSuccessfully={this.handleClearSavedSuccessfully}
            onEdit={this.onEdit}
					/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  partakers: state.partakers,
  userType: state.auth ? state.auth.userType : null,
  lastPartaker: state.lastPartaker
});

const mapDispatchToProps = (dispatch) => ({
  removeLastPartaker: () => dispatch(removeLastPartaker())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPartakerPage);