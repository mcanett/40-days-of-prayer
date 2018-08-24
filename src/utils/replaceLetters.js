
const replaceLetters = (word) => {
  word = word.replace(/á/gi,"a");
  word = word.replace(/é/gi,"e");
  word = word.replace(/í/gi,"i");
  word = word.replace(/ó/gi,"o");
  word = word.replace(/ú/gi,"u");
  word = word.replace(/ñ/gi,"n");
  return word;
};

export default replaceLetters;