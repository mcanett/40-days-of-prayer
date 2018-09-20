// User Reducer
const usersReducerDefaultState = [];
export default (state = usersReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return [...state, action.user];
    case 'EDIT_USER':
      return state.map((user) => {
        if (user.id === action.id){
            return {
              id: user.id,
              ...user,
              ...action.updates
            };
        } else {
          return user;
        }
      });
    case 'SET_USERS':
      return action.users;
    default:
      return state;
  }
};