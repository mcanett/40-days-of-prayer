import replaceLetters from '../utils/replaceLetters';


// Get visible hosts/facilitators
export default (partakers, { text, ascDesc, hostFacilitatorType }) => {
  return partakers.filter((partaker) => {

    const { lastName, mothersSurname, firstName } = partaker.name;
    const fullName = `${lastName} ${mothersSurname} ${firstName}`;
    const partakerType = partaker.hostInfo !== undefined && partaker.facilitatorInfo !== undefined ? 'both' :
      partaker.hostInfo !== undefined ? 'host' : 'facilitator';

    const textMatch = typeof text !== 'string' 
      || replaceLetters(fullName.replace(/ /g,'')).toLowerCase().includes(replaceLetters(text.replace(/ /g,'').toLowerCase()))
      || partaker.folio.toLowerCase().includes(text.replace(/ /g,'').toLowerCase());
    const typeMatch = hostFacilitatorType === '' ? true : partakerType === hostFacilitatorType;

    return textMatch && typeMatch;
  }).sort((a, b) => {
    if (ascDesc === 'asc'){
      return a.createdAt > b.createdAt ? 1 : -1;
    } else if (ascDesc === 'desc') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
  });
};