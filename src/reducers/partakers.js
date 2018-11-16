// Partakers Reducer
const partakersReducerDefaultState = [];
export default (state = partakersReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_FOLIO':
      return [...state, action.partaker];
    case 'ADD_PARTAKER':
      return [...state, action.partaker];
    case 'REMOVE_PARTAKER':
      return state.filter(({ id }) => action.id !== id)
    case 'EDIT_PARTAKER':
      return state.map((partaker) => {
        if (partaker.id === action.id){
            return {
              id: partaker.id,
              ...action.updates
            };
        } else {
          return partaker;
        }
      });
    case 'SET_PARTAKERS':
      return action.partakers;
    case 'SET_HAS_HANDBOOK':
      return state.map((partaker) => {
        if (partaker.id === action.id){
            return {
              id: partaker.id,
              hasHandbook: action.hasHandbook,
              ...partaker
            };
        } else {
          return partaker;
        }
      });
    default:
      return state;
  }
};