import moment from 'moment';

const mapFiltersReducerDefaultState = {
  text: '',
  almostFullHouses: true,
  enoughRoomHouses: true,
  fullHouses: true,
  emptyHouses: true,
  withFacilitatorHouses: true,
  withoutFacilitatorHouses: true
};
export default (state = mapFiltersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SEARCH_HOUSE_BY_NUMBER':
    return {
      ...state,
      text: action.text
    };
    case 'SET_ALMOST_FULL_HOUSES':
      return {
        ...state,
        almostFullHouses: !state.almostFullHouses
      };
    case 'SET_ENOUGH_ROOM_HOUSES':
      return {
        ...state,
        enoughRoomHouses: !state.enoughRoomHouses
      };
    case 'SET_FULL_HOUSES':
      return {
        ...state,
        fullHouses: !state.fullHouses
      };
    case 'SET_EMPTY_HOUSES':
      return {
        ...state,
        emptyHouses: !state.emptyHouses
      };
    case 'SET_WITH_FACILITATOR_HOUSES':
      return {
        ...state,
        withFacilitatorHouses: !state.withFacilitatorHouses
      };
    case 'SET_WITHOUT_FACILITATOR_HOUSES':
      return {
        ...state,
        withoutFacilitatorHouses: !state.withoutFacilitatorHouses
      };
    default:
      return state;
  }
};