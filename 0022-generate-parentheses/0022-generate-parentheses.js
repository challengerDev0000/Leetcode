/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
  backtrack('', 0, 0);
  return result;

  function backtrack(current, openCount, closeCount) {
    // Base case: If both opening and closing counts reach n, we have a valid combination
    if (openCount === n && closeCount === n) {
      result.push(current);
      return;
    }

    // Recursively explore two choices:
    // 1. Add an opening parenthesis if the count is less than n
    // 2. Add a closing parenthesis if the count of closing parentheses is less than the count of opening parentheses
    if (openCount < n) {
      backtrack(current + '(', openCount + 1, closeCount);
    }
    if (closeCount < openCount) {
      backtrack(current + ')', openCount, closeCount + 1);
    }
  }
};