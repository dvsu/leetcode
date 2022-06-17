const isNumeric = (input) => {
  return !isNaN(input) && input.length > 0 && input.indexOf(" ") < 0;
};

/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  const st = s.trim();

  if (st.length === 0) return 0;
  if (isNaN(st[0]) && !"+-".includes(st[0])) {
    return 0;
  }

  const sign = st[0] == "-" ? -1 : 1;
  const start = isNaN(st[0]) ? 1 : 0;
  let end = st.length;

  for (const [idx, char] of st.slice(start).split("").entries()) {
    if (isNumeric(char)) {
      continue;
    }
    end = idx + start;
    break;
  }

  if (!isNumeric(st.slice(start, end))) {
    return 0;
  }

  const val = parseInt(st.slice(start, end)) * sign;
  const lowerBound = Math.pow(-2, 31);
  const upperBound = Math.pow(2, 31) - 1;

  if (val < lowerBound) return lowerBound;
  if (val > upperBound) return upperBound;
  return val;
};

module.exports = { solution: myAtoi };
