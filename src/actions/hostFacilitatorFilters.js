// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER_HOST_FACILITATOR',
  text
});
// SORT_BY_DATE
export const sortAscDesc = (ascDesc) => ({
  type: 'SORT_ASC_DESC_HOST_FACILITATOR',
  ascDesc
});

// SET_END_DATE
export const setType = (hostFacilitatorType) => ({
  type: 'SET_TYPE_HOST_FACILITATOR',
  hostFacilitatorType
});