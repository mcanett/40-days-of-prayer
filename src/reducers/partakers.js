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
              ...partaker,
              ...action.updates
            };
        } else {
          return partaker;
        }
      });
    case 'SET_PARTAKERS':
      return action.partakers;
    default:
      return state;
  }
};