/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    const a = s.split(' ');
    return a[a.length - 1].length;
};