/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (s.length === 0)
        return -1;
    const uniqueValues = new Map();
    const notUnique = new Map();
    let index = 0;
    for (let letter of s) {
        if (uniqueValues.has(letter)) {
            uniqueValues.delete(letter);
            notUnique.set(letter, true);
        } else if (!notUnique.has(letter)) {
            uniqueValues.set(letter, index);
        }
        index++;
    }
    if (uniqueValues.size === 0)
        return -1;
    return uniqueValues.values().next().value;
};