
// Get only hosts partakers
export default (partakers) => {
  return partakers.filter((partaker) => {     
    return partaker.hostInfo !== undefined ? true : false;
  });
}