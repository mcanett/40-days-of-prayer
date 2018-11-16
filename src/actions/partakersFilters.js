// SET_TEXT_FILTER
export const searchPartakerByName = (text = '') => ({
  type: 'SEARCH_PARTAKER_BY_NAME',
  text
});
// SORT_BY_DATE
export const sortPartakerByDate = () => ({
  type: 'SORT_PARTAKER_BY_DATE',
});
// SORT_BY_LASTNAME
export const sortPartakerByLastName = () => ({
  type: 'SORT_PARTAKER_BY_LASTNAME',
});
// SORT_BY_FIRSTNAME
export const sortPartakerByFirstName= () => ({
  type: 'SORT_PARTAKER_BY_FIRSTNAME',
});
// SET_START_DATE
export const setPartakerStartDate = (startDate) => ({
  type: 'SET_PARTAKER_START_DATE',
  startDate
});
// SET_END_DATE
export const setPartakerEndDate = (endDate) => ({
  type: 'SET_PARTAKER_END_DATE',
  endDate
});
// SET_PREFIX
export const setPartakerPrefix = (prefix) => ({
  type: 'SET_PARTAKER_PREFIX',
  prefix
});