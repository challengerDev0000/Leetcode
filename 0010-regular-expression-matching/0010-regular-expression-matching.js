/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const regex = new RegExp(`^${p}$`);
    return regex.test(s);
};