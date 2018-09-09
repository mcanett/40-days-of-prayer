import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { history } from '../routers/AppRouter';
import { setTextFilter, setStartDate, setEndDate, setPrefix } from '../actions/financesFilters';
import * as routes from '../constants/routes';

export class FinancesListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  
  onDatesChange = ({ startDate, endDate }) => {
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

  onCreateFolio = () => {
    history.push(routes.CREATE_FOLIO);
  };

  render() {
    return (
      <div className="input-group">
        <div className="input-group__item">
          <select
            className="select"
            value={this.props.financesFilters.prefix}
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
            type="text"
            placeholder="Nombre"
            className="text-input"
            value={this.props.financesFilters.text}
            onChange={this.onTextChange}
          />
        </div>
        <div className="input-group__item">
          <DateRangePicker
            startDate={this.props.financesFilters.startDate}
            endDate={this.props.financesFilters.endDate}
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
          <button type="button" className="button button__positive" onClick={this.onCreateFolio}>Crear Folio</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  financesFilters: state.financesFilters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setPrefix: (prefix) => dispatch(setPrefix(prefix))
});

export default connect(mapStateToProps, mapDispatchToProps)(FinancesListFilters);