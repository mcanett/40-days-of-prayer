import * as facilitator from '../constants/facilitators';
import * as house from '../constants/houses';

export const getHasFacilitator = (host, partakers) => {
  let hasFacilitator = undefined;
  if (host.facilitatorInfo !== undefined) {
    hasFacilitator = facilitator.SELF_FACILITATOR; 
  } else {
    const houseFacilitator = partakers.filter(partaker => partaker.houseId === host.id && partaker.facilitatorInfo !== undefined)
    if (houseFacilitator.length > 1) {
      hasFacilitator = facilitator.ERROR;
    } else if (houseFacilitator.length === 1) {
      hasFacilitator = facilitator.HAS_FACILITATOR;
    } else {
      hasFacilitator = facilitator.HASNT_FACILITATOR; 
    }
  }
  return hasFacilitator;
};

export const getHouseRemainingCapacity = (host, partakers) => {
  return (
    host.hostInfo.houseCapacity - partakers.filter(partaker => partaker.houseId === host.id).length
    ) - 1;
};


export const getHouseCapacity = (host, houseRemainingCapacity, hasFacilitator) => {
  if(houseRemainingCapacity <= 0) {
    return house.FULL;
  } else if (houseRemainingCapacity <= (host.hostInfo.houseCapacity / 2)) {
    return house.ALMOST_FULL;
  } else if (
    ((hasFacilitator === facilitator.SELF_FACILITATOR || hasFacilitator === facilitator.HASNT_FACILITATOR) && houseRemainingCapacity === host.hostInfo.houseCapacity - 1) || // Self facilitator or Hasn't facilitator
    (hasFacilitator === facilitator.HAS_FACILITATOR && houseRemainingCapacity === host.hostInfo.houseCapacity - 2) // Has facilitator
  ) {
    return house.EMPTY;
  } else if (hasFacilitator === facilitator.ERROR) {
    return house.ERROR;
  }else {
    return house.ENOUGH_ROOM;
  }
};

