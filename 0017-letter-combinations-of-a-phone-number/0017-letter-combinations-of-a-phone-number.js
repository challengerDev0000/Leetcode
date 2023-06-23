/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const mappings = {
        1: [],
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }, results = []

    const walk = (index, prefix) => {
        if (index > digits.length - 1) return results.push(prefix)
        const digit = digits[index]
        for (const char of mappings[digit]) walk(index + 1, prefix + char)
    }
    
    if (digits.length > 0) walk(0, '')
    
    return results
};