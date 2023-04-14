const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStringArr = n.toString().split('');
  let maxNum;
  let arrWithNumbers = [];

  for (let i = 0; i < nStringArr.length; i++) {
    let cloneArr = [...nStringArr];
    cloneArr.splice(i, 1);
    arrWithNumbers.push(+cloneArr.join(''));
  }
  return Math.max.apply(null, arrWithNumbers);
}

module.exports = {
  deleteDigit
};
