
// Get only hosts partakers
export default (partakers) => {
  return partakers.filter((partaker) => {
    const isHost = partaker.hostInfo !== undefined ? true : false;
    return isHost;
  });
}