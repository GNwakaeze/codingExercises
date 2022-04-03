const ftoc = function(tempF) {
  let tf = tempF;
  let resultTF1 = (tf - 32) * 5/9;
  let resultTF = resultTF1.toFixed(1);
  return Number(resultTF);

};

const ctof = function(tempC) {
  let cf = tempC
  let resultCF1 = (cf * 9/5) + 32;
  let resultCF = resultCF1.toFixed(1);
  return Number(resultCF);

};
/* ODIN solution
const ftoc = function(f) {
 return Math.round((f - 32) * (5/9) * 10) / 10;
};

const ctof = function(c) {
  return Math.round(((c * 9/5) + 32) * 10) / 10;
}; */

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
