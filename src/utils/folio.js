import database from '../firebase/firebase';

const folio = {
  generate: (prefix) => {
    const min = 10000;
    const max = 99999;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const generated = `${prefix}-${randomNum}`;

    return generated;
  }
}


export default folio;

