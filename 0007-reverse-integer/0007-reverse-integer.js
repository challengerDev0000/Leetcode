/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const limit = 2 ** 31; // The absolute value limit for a 32-bit integer
  const sign = x < 0 ? -1 : 1; // Store the sign of the input
  
  // Convert the number to a string, reverse it, and convert it back to a number
  const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
  
  // Check if the reversed number is within the 32-bit integer range
  if (reversed < -limit || reversed >= limit) {
    return 0;
  }
  
  return reversed;
};