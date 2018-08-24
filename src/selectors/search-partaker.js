import replaceLetters from '../utils/replaceLetters';

export default (partakers, text) => {
  const filter = partakers.filter((partaker) => {
    const fullName = `${partaker.name.firstName} ${partaker.name.lastName} ${partaker.name.mothersSurname}`;
    const textMatch = typeof text !== 'string' 
    || replaceLetters(fullName).toLowerCase() === replaceLetters(text).toLowerCase() 
    || partaker.folio.toLowerCase() === text.toLowerCase();
    return textMatch;
  });
  if (filter !== []){
    return filter[0];
  } else {
    return undefined;
  }
}

