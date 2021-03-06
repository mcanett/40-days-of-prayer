import moment from 'moment';

const financesFiltersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('day'),
  endDate: moment().endOf('day'),
  prefix: ''
};
export default (state = financesFiltersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
    return {
      ...state,
      text: action.text
    };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    case 'SET_PREFIX':
      return {
        ...state,
        prefix: action.prefix
      };
    default:
      return state;
  }
};