import { getHouseCapacity } from '../utils/hostHelper';
import * as facilitator from '../constants/facilitators';
import * as house from '../constants/houses';

// Get houses by filter
export default (hosts, { text, withFacilitatorHouses, withoutFacilitatorHouses, fullHouses, almostFullHouses, enoughRoomHouses, emptyHouses}, hostDetails) => {
  return hosts.filter((host) => {
    const { houseRemainingCapacity, hasFacilitator } = hostDetails[host.id];

    const textMatch = host.hostInfo.numberLabel.toString().includes(text);

    const withFacilitatorMatch = (
      (hasFacilitator == facilitator.HAS_FACILITATOR || hasFacilitator == facilitator.SELF_FACILITATOR) 
      && withFacilitatorHouses
    );
    const withoutFacilitatorMatch = (
      hasFacilitator == facilitator.HASNT_FACILITATOR && withoutFacilitatorHouses
    );

    const fullMatch = getHouseCapacity(host, houseRemainingCapacity, hasFacilitator) === house.FULL && fullHouses;
    const almostFullMatch = getHouseCapacity(host, houseRemainingCapacity, hasFacilitator) === house.ALMOST_FULL && almostFullHouses;
    const enoughRoomMatch = getHouseCapacity(host, houseRemainingCapacity, hasFacilitator) === house.ENOUGH_ROOM && enoughRoomHouses;
    const emptyMatch = getHouseCapacity(host, houseRemainingCapacity, hasFacilitator) === house.EMPTY && emptyHouses;

    return textMatch && (withFacilitatorMatch || withoutFacilitatorMatch)
      && (fullMatch || almostFullMatch
      || enoughRoomMatch || emptyMatch);
  });
}