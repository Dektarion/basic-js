const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let k = 1;
  const res = names.reduce((acc, elem) => {
    if (!acc.includes(elem)) {
      acc.push(elem);
    } else if (acc.includes(elem)) {
      let newElem = `${elem}(${k})`;

      if (acc.includes(newElem)) {
        k += 1;
      }
      newElem = `${elem}(${k})`;
      acc.push(newElem);
    }

    return acc;
  }, []);

  return res;
}

module.exports = {
  renameFiles
};
