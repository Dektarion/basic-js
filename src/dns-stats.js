const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const reversArr = domains.map((elem) => elem.split(".").reverse());

  const resObj = reversArr.reduce(((acc, elem) => {
    let domain = '';

    for (let i = 0; i < elem.length; i++) {
      domain = `${domain}.${elem[i]}`;

      if (domain in acc) {
        acc[domain] = acc[domain] + 1;
      } else {
        acc[domain] = 1;
      }
    }

    return acc
  }), {});

  return resObj;
}

module.exports = {
  getDNSStats
};
