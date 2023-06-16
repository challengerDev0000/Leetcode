/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
  let sign = 1;
  let num = 0;

  // Ignore leading whitespace
  while (s[i] === ' ') {
    i++;
  }

  // Check for sign
  if (s[i] === '-' || s[i] === '+') {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }

  // Read in digits
  while (s[i] >= '0' && s[i] <= '9') {
    num = num * 10 + (s[i] - '0');
    i++;
  }

  // Clamp to range
  if (num > Math.pow(2, 31) - 1) {
    num = sign === -1 ? -Math.pow(2, 31) : Math.pow(2, 31) - 1;
  } else {
    num *= sign;
  }

  return num;
};