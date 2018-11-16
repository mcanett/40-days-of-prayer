import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { 
  searchPartakerByName,
  sortPartakerByDate,
  sortPartakerByLastName,
  sortPartakerByFirstName,
  setPartakerStartDate,
  setPartakerEndDate,
  setPartakerPrefix
} from '../actions/partakersFilters';

export class PartakerListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setPartakerStartDate(startDate);
    this.props.setPartakerEndDate(endDate);
  };
  
  onTextChange = (e) => {
    this.props.searchPartakerByName(e.target.value);
  };
  
  onPrefixChange = (e) => {
    this.props.setPartakerPrefix(e.target.value);
  };

  onSortByChange = (e) => {
    const res = e.target.value;
    if (res === 'lastname') {
      this.props.sortPartakerByLastName();
    } else if (res === 'firstname') {
      this.props.sortPartakerByFirstName();
    } else {
      this.props.sortPartakerByDate();
    }
  };
  
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  
  render() {
    return (
      <div className="input-group not-printable">
        <div className="input-group__item">
          <select
            className="select"
            value={this.props.filters.prefix}
            onChange={this.onPrefixChange}
          >
            <option value="" >Todos</option>
            <option value="P">Pagado</option>
            <option value="D">Donado</option>
            <option value="A">Autorizado</option>
          </select>
        </div>
        <div className="input-group__item">
          <input
            className="text-input"
            type="text"
            placeholder="Folio / Nombre"
            value={this.props.filters.text}
            onChange={this.onTextChange}
          />
        </div>
        <div className="input-group__item">
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
            startDatePlaceholderText={'Fecha Inicio'}
            endDatePlaceholderText={'Fecha Fin'}
            displayFormat={'DD/MM/YYYY'}
          />
        </div>
        <div className="input-group__item">
          <select
            className="select"
            value={this.props.filters.sortBy}
            onChange={this.onSortByChange}
          >
            <option value="date" >Fecha</option>
            <option value="lastname">Apellidos</option>
            <option value="firstname">Nombre</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.partakersFilters
});

const mapDispatchToProps = (dispatch) => ({
  searchPartakerByName: (text) => dispatch(searchPartakerByName(text)),
  sortPartakerByDate: () => dispatch(sortPartakerByDate()),
  sortPartakerByLastName: () => dispatch(sortPartakerByLastName()),
  sortPartakerByFirstName: () => dispatch(sortPartakerByFirstName()),
  setPartakerStartDate: (startDate) => dispatch(setPartakerStartDate(startDate)),
  setPartakerEndDate: (endDate) => dispatch(setPartakerEndDate(endDate)),
  setPartakerPrefix: (prefix) => dispatch(setPartakerPrefix(prefix))
});

export default connect(mapStateToProps, mapDispatchToProps)(PartakerListFilters);