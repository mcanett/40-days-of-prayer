import moment from 'moment';
import replaceLetters from '../utils/replaceLetters';


// Get visible finances partakers
export default (partakers, { text, sortBy, startDate, endDate, prefix }) => {
  return partakers.filter((partaker) => {

    const { lastName, mothersSurname, firstName } = partaker.name;
    const fullName = `${lastName} ${mothersSurname} ${firstName}`;

    const createdAtMoment = moment(partaker.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = typeof text !== 'string' 
      || replaceLetters(fullName.replace(/ /g,'')).toLowerCase().includes(replaceLetters(text.replace(/ /g,'').toLowerCase()));
    const prefixMatch = partaker.folio.includes(prefix);

    return startDateMatch && endDateMatch && textMatch && prefixMatch;
  }).sort((a, b) => {
    if (sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};