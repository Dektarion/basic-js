const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const oldMatrixRows = matrix.length;
  const oldMatrixColumns = matrix[0].length;
  const workArr = [];

  let i = 0;
  let n = 0;

  for (let m = 0; m < oldMatrixColumns; m += 1) {
    workArr.push([]);
  }

  const newMatrix = matrix.reduce((acc, elem) => {
    for (let s = 0; s < oldMatrixColumns; s += 1) {
      acc[i].push(elem[s]);
      i += 1;
    }
    i = 0;

    return acc;
  }, workArr);

    const res = newMatrix.reduce((acc, elem) => {
    for (let p = 0; p < oldMatrixRows; p += 1) {
      if (elem[p] !== 0) {
        acc += elem[p];
        i += 1;
      } else if (elem[p] === 0) {
        break;
      }
    }
    i = 0;

    return acc;
  }, 0);

  return res;
}

module.exports = {
  getMatrixElementsSum
};
