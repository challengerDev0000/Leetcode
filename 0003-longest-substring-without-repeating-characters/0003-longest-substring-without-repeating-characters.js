/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
  let end = 0;
  let seen = new Set();
  let maxLen = 0;
  
  while (end < s.length) {
    if (!seen.has(s[end])) {
      seen.add(s[end]);
      end++;
      maxLen = Math.max(maxLen, end - start);
    } else {
      seen.delete(s[start]);
      start++;
    }
  }
  
  return maxLen;
};