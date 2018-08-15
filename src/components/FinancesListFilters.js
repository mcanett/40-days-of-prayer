import React from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import { setTextFilter, setStartDate, setEndDate, setPrefix } from '../actions/filters';

export class FinancesListFilters extends React.Component {
  state = {
    calendarFocused: false
  };

  
  onDateChange = (startDate) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(startDate);
  };
  
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onPrefixChange = (e) => {
    this.props.setPrefix(e.target.value);
  };
  
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  render() {
    return (
      <div>
        <select
          value={this.state.prefix}
          onChange={this.onPrefixChange}
        >
          <option value="" >Todos</option>
          <option value="P">Pagado</option>
          <option value="D">Donado</option>
          <option value="A">Autorizado</option>
        </select>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <SingleDatePicker
          date={this.props.filters.startDate}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setPrefix: (prefix) => dispatch(setPrefix(prefix))
});

export default connect(mapStateToProps, mapDispatchToProps)(FinancesListFilters);