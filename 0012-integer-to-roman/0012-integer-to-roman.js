/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanNums = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = "";

  for (let i = 0; i < romanNums.length; i++) {
    while (num >= values[i]) {
      result += romanNums[i];
      num -= values[i];
    }
  }

  return result;
};