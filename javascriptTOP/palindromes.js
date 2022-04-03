const palindromes = function (pal) {
    let palOneWord = pal.toLowerCase().replaceAll(' ', '').replaceAll( /[.,/#!$%^&*;:{}=-_`~()]/g, ''); // turns it into one word with no punctuation
    let palReverse = palOneWord.split('').reverse().join('');
    if (palOneWord == palReverse) {
        return true;
    } else {
        return false;
    }
};
/* ODIN SOLUTION  - but I dotn thnk we were taught about Regular Expressions and how to maniplulate them
processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return (processedString.split("").reverse().join("") == processedString);
*/
// Do not edit below this line
module.exports = palindromes;
