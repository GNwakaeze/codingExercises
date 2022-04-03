const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function([...array]) {
  let sumOfArray = 0;
	for (let item of array) {
    sumOfArray += Number(item);
  }
  return sumOfArray;
};

const multiply = function([...array]) {
  arrayMultiplied = array[0];
  for (let item of array) {
    if (item == array[0]) {continue} //I'm sure theres a better way to do this, but had to use a little cheat, to avoid aM == 0/null
    arrayMultiplied *= Number(item);
  }
  return arrayMultiplied;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	let sum = num;
  if (num == 0) {return 1;
  } else {
      for (i = 2; i < num; i++) { // im starting on 2 because 'sum' is already equal to 'num * 1'
        sum *= i;
      }
    }
  return sum;
};

/* ODIN SOLUTIONS
const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
    return array.length
      ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

 This is another implementation of Factorial that uses recursion
const recursiveFactorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial (n-1);
};
*/

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
