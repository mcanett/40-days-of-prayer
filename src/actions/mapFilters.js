// SEARCH_HOUSE_BY_NUMBER
export const searchHouseByNumber = (text = '') => ({
  type: 'SEARCH_HOUSE_BY_NUMBER',
  text
});
// SET_ALMOST_FULL_HOUSES
export const setAlmostFullHouses = () => ({
  type: 'SET_ALMOST_FULL_HOUSES',
});
// SET_ENOUGH_ROOM_HOUSES
export const setEnoughRoomHouses = () => ({
  type: 'SET_ENOUGH_ROOM_HOUSES',
});
// SET_FULL_HOUSES
export const setFullHouses = () => ({
  type: 'SET_FULL_HOUSES'
});
// SET_EMPTY_HOUSES
export const setEmptyHouses = () => ({
  type: 'SET_EMPTY_HOUSES'
});
// SET_WITH_FACILITATOR_HOUSES
export const setWithFacilitatorHouses = () => ({
  type: 'SET_WITH_FACILITATOR_HOUSES'
});
// SET_WITHOUT_FACILITATOR_HOUSES
export const setWithoutFacilitatorHouses = () => ({
  type: 'SET_WITHOUT_FACILITATOR_HOUSES'
});