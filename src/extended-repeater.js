const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let add = '';
  const separator = options.hasOwnProperty('separator') ? options.separator : '+';
  const addSeparator = options.hasOwnProperty('additionSeparator')
    ? options.additionSeparator
    : '|';

  if (options.hasOwnProperty('addition')) {
    add =
      `${options.addition}${addSeparator}`.repeat(options.additionRepeatTimes - 1) +
      `${options.addition}`;
  } else {
    add = '';
  }

  const newStr = `${str}${add}${separator}`.repeat(options.repeatTimes - 1) + `${str}${add}`;

  return newStr;
}

module.exports = {
  repeater
};
