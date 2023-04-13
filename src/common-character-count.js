const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let bigLength = s1.length >= s2.length ? s1.length : s2.length;
  let longString = s1.length >= s2.length ? s1 : s2;
  let shortString = longString === s1 ? s2 : s1;
  let repeatArr = [];
  for (let i = 0; i < bigLength; i++) {
    if (longString.indexOf(shortString[i]) !== -1) {
      repeatArr.push(shortString[i]);
      longString = longString.replace(longString.at(longString.indexOf(shortString[i])), '');
    }
  }
  return repeatArr.length;
}

module.exports = {
  getCommonCharacterCount
};
