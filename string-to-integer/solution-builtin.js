/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  const result = parseInt(s);
  const lowerBound = Math.pow(-2, 31);
  const upperBound = Math.pow(2, 31) - 1;

  if (isNaN(result)) return 0;
  if (result < lowerBound) return lowerBound;
  if (result > upperBound) return upperBound;
  return result;
};

module.exports = { solutionBuiltin: myAtoi };
