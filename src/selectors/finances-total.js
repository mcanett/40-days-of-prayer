export default (partakers) => {
  return partakers
    .map((partaker) => {
      const prefix = partaker.folio.substr(0,1);
      if (prefix === 'A') {
        return 0;
      }
      return 15;
    }).reduce((sum, value) => sum + value, 0);
};