const housesFacilitatorsReducerDefaultState = [];

export default (state = housesFacilitatorsReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_HOUSES_FACILITATORS':
      return  action.housesFacilitators;
    default:
      return state;
  }
};