const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexArr = arr.reduce((acc, elem, index) => {
    if (elem === -1) {
      acc.push(index);
    }
    return acc;
  }, []);

  const newArr = arr.sort((a, b) => a-b);
  const filterArr = newArr.filter((elem) => elem !== -1);

  for (let i = 0; i <indexArr.length; i += 1) {
    filterArr.splice(indexArr[i], 0, -1);
  }

  return filterArr;
}

module.exports = {
  sortByHeight
};
