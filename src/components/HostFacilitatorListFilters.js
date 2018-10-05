import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setType, sortAscDesc } from '../actions/hostFacilitatorFilters';

export class HostFacilitatorListFilters extends React.Component {
  
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onTypeChange = (e) => {
    this.props.setType(e.target.value);
  };

  onSortByChange = (e) => {
    this.props.sortAscDesc(e.target.value);
  };
  
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div className="input-group">
        <div className="input-group__item">
          <select
            className="select"
            value={this.props.hostFacilitatorFilters.type}
            onChange={this.onTypeChange}
          >
            <option value="" >Todos</option>
            <option value="host">Anfitrión</option>
            <option value="facilitator">Facilitador</option>
            <option value="both">Ambos</option>
          </select>
        </div>
        <div className="input-group__item">
          <input
            type="text"
            placeholder="Folio / Nombre"
            className="text-input"
            value={this.props.hostFacilitatorFilters.text}
            onChange={this.onTextChange}
          />
        </div>
        <div className="input-group__item">
          <select
            className="select"
            value={this.props.hostFacilitatorFilters.ascDesc}
            onChange={this.onSortByChange}
          >
            <option value="asc" >Fecha ASC</option>
            <option value="desc">Fecha DESC</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hostFacilitatorFilters: state.hostFacilitatorFilters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setType: (type) => dispatch(setType(type)),
  sortAscDesc: (ascDesc) => dispatch(sortAscDesc(ascDesc))
});

export default connect(mapStateToProps, mapDispatchToProps)(HostFacilitatorListFilters);