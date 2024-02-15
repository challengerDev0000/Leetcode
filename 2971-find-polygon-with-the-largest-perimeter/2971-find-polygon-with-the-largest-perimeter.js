/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    const numsLength = nums.length
    let numsSum = nums.reduce((a, b) => a + b, 0)
    nums.sort((a, b) => a - b)
    for (let i = numsLength - 1; i > 1; i--){
        if (numsSum > 2 * nums[i]) return numsSum
        numsSum -= nums[i]
    }
    return -1
};