const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      return oldestAge < currentAge ? currentPerson : oldest;
    })
  };
  
  const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

/*
const findTheOldest = function(people) {
   return people.reduce((personA, personB) => {
    let firstGuy = getAge(personA.yearOfDeath, personA.yearOfBirth)
    let lastGuy = getAge(personB.yearOfDeath, personB.yearOfBirth)

   return firstGuy < lastGuy ? lastGuy: firstGuy
   })

const getAge = function(birth, death) {
  return death - birth;
};


*/


// Do not edit below this line
module.exports = findTheOldest;
