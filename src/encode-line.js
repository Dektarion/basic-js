const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  let number = 1;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[i + 1]) {
      newStr = `${newStr}${number === 1 ? '' : number}${str[i]}`;
      number = 1;
    } else if (str[i] === str[i + 1]) {
      number += 1;
    }

    console.log(newStr);
  }

  return str;
}

module.exports = {
  encodeLine
};
