/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
      const str = x.toString();
      const reversed = str.split('').reverse().join('');
      return str === reversed;
};