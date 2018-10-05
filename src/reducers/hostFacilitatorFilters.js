import moment from 'moment';

const hostFacilitatorFiltersReducerDefaultState = {
  text: '',
  ascDesc: 'asc',
  hostFacilitatorType: ''
};
export default (state = hostFacilitatorFiltersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER_HOST_FACILITATOR':
    return {
      ...state,
      text: action.text
    };
    case 'SORT_ASC_DESC_HOST_FACILITATOR':
      return {
        ...state,
        ascDesc: action.ascDesc
      };
    case 'SET_TYPE_HOST_FACILITATOR':
      return {
        ...state,
        hostFacilitatorType: action.hostFacilitatorType
      };
    default:
      return state;
  }
};