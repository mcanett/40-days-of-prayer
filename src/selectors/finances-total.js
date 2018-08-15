export default (partakers) => {
  return partakers
    .map((partaker) => {
      const prefix = partaker.folio.substr(0,1);
      if (prefix === 'P') {
        return 15;
      }
      return 0;
    }).reduce((sum, value) => sum + value, 0);
};