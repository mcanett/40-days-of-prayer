import replaceLetters from '../utils/replaceLetters';
import hasNumbers from '../utils/hasNumbers';

export default (partakers, text, userType) => {
  const filter = partakers.filter((partaker) => {
    const fullName = `${partaker.name.firstName}${partaker.name.lastName}${partaker.name.mothersSurname}`;
    const textMatch = typeof text !== 'string' 
    || replaceLetters(fullName.replace(/ /g,'')).toLowerCase() === replaceLetters(text.replace(/ /g,'')).toLowerCase() 
    || partaker.folio.toLowerCase() === text.replace(/ /g,'').toLowerCase();
    return textMatch;
  });

  if (filter[0] !== undefined) {
    const partaker = filter[0]
    // Checking if user is from registry and checking if partaker has already info.
    if (userType === 'registry') {
      if (partaker.gender !== undefined) {
        return {
          state: 'cant',
          partaker
        };
      } else {
        return checkSearchState(text, partaker);
      }
    } else {
      return checkSearchState(text, partaker);
    }
  } else {
    return undefined;
  }
}

const checkSearchState = (text, partaker) => {
  if(hasNumbers(text)) {
    return {
      state: 'folio',
      partaker
    };
  } else {
    return {
      state: 'name',
      partaker
    };
  }
}

