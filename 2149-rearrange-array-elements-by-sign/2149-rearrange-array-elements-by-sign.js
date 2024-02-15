/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pos = [];
    let neg = [];
    let result = []
    
    
    for(let num of nums) {
        if(num >= 0) {
            pos.push(num)
        } else neg.push(num);
    }

    let i = 0, j = 0;
    
    while(i < pos.length && j < neg.length) {
        result.push(pos[i++], neg[j++]);
    }
    return result;
};