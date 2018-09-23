// Get partakers which are host and facilitator
export default (partakers) => {
  return partakers.filter((partaker) => {     
    return partaker.hostInfo !== undefined || partaker.facilitatorInfo !== undefined ? true : false;
  });
}