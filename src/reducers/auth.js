
export default (state = {}, action) => {
  switch(action.type){
    case 'LOGIN':
    return {
      uid: action.uid,
      userName: action.userName,
      email: action.email,
      userType: action.userType
    };
    case 'LOGOUT':
    return {};
    default: 
      return state;
  }
};