/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let i = 0;
    let total = 0;
    
    if (n === 0) {
        return false; 
    }
    while (total < n){
        total = Math.pow(2, i);
        i++;
    }
    
    return n === total;
};