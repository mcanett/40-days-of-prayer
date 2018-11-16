import moment from 'moment';

const partakersFiltersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment("2018-09-01"),
  endDate: moment().endOf('day'),
  prefix: ''
};
export default (state = partakersFiltersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SEARCH_PARTAKER_BY_NAME':
    return {
      ...state,
      text: action.text
    };
    case 'SORT_PARTAKER_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_PARTAKER_BY_LASTNAME':
      return {
        ...state,
        sortBy: 'lastname'
      };
    case 'SORT_PARTAKER_BY_FIRSTNAME':
      return {
        ...state,
        sortBy: 'firstname'
      };
    case 'SET_PARTAKER_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_PARTAKER_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    case 'SET_PARTAKER_PREFIX':
      return {
        ...state,
        prefix: action.prefix
      };
    default:
      return state;
  }
};