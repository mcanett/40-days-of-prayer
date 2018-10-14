const housesEntriesReducerDefaultState = [];

export default (state = housesEntriesReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_HOUSES_ENTRIES':
      return action.housesEntries;
    default:
      return state;
  }
};