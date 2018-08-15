// Last Partaker Reducer
const lastPartakerReducerDefaultState = null;
export default (state = lastPartakerReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_LAST_PARTAKER':
      return action.partaker;
    case 'REMOVE_LAST_PARTAKER':
      return null;
    default:
      return state;
  }
};