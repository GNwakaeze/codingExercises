const fibonacci = function(sequenceNumber) {
    if (sequenceNumber < 0) {
        return 'OOPS'
    }

    let array = [];
    if (array.length < 2) {
        array[0] = 1;
        array[1] = 1;
    }

    let i = 0;
    while (array.length < sequenceNumber) {
        let nextValue = array[array.length-1] + array[array.length-2];
        array.push(nextValue);
        i++;
    } 
    return array[array.length-1];
};
 /*
 const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
}; */

// Do not edit below this line
module.exports = fibonacci;
