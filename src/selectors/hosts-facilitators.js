// Get partakers which are host and facilitator
export default (partakers) => {
  return partakers.filter((partaker) => {     
    return partaker.hostInfo !== undefined || partaker.facilitatorInfo !== undefined ? true : false;
  });
}

// export default (partakers) => {
//   return partakers.filter((partaker) => {     
//     if (partaker.hostInfo !== undefined || partaker.facilitatorInfo !== undefined) {
//       if (partaker.facilitatorInfo !== undefined) {
//         const hasFacilitator = partakers.filter((auxPartaker) => {
//           if (auxPartaker.houseId === partaker.id) {
//             return true;
//           }
//           return false
//         });
//         partaker.hasFacilitator = !!hasFacilitator;
//       }
//       return true;
//     }
//     return false;
//   });
// }