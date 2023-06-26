/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;
  
  for (let i = 0; i < s.length; i++) {
    const currentNum = romanToNum[s[i]];
    const nextNum = romanToNum[s[i+1]];
    
    if (nextNum && currentNum < nextNum) {
      result -= currentNum;
    } else {
      result += currentNum;
    }
  }

  return result;
};