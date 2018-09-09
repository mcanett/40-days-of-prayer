
const usersFiltersReducerDefaultState = {
  username: '',
  userType: ''
};
export default (state = usersFiltersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_USERNAME':
    return {
      ...state,
      username: action.username
    };
    case 'SET_USER_TYPE':
      return {
        ...state,
        userType: action.userType
      };
    default:
      return state;
  }
};