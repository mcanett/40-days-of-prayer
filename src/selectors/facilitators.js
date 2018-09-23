
// Get only facilitators partakers
export default (partakers) => {
  return partakers.filter((partaker) => {     
    return partaker.facilitatorInfo !== undefined ? true : false;
  });
}