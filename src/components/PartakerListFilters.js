import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setStartDate, setEndDate, setPrefix } from '../actions/financesFilters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  
  onPrefixChange = (e) => {
    this.props.setPrefix(e.target.value);
  };
  
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  
  render() {
    return (
      <div>
        <select
          value={this.props.filters.prefix}
          onChange={this.onPrefixChange}
        >
          <option value="" >Todos</option>
          <option value="P">Pagado</option>
          <option value="D">Donado</option>
          <option value="A">Autorizado</option>
        </select>
        <input
          type="text"
          placeholder="Folio / Nombre"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
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
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.financesFilters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setPrefix: (prefix) => dispatch(setPrefix(prefix))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);