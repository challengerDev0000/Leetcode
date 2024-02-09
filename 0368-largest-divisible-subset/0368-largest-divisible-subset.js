/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a,b)=>a-b)
    var dp = Array.from({length: nums.length}, (v,k) => [nums[k]]);
    for (let i=nums.length-1; i>=0; i--) {
        for (let j = i+1; j<nums.length; j++) {
            if (dp[i].length<=dp[j].length && dp[j][0]%nums[i]===0) {
                dp[i] = [nums[i], ...dp[j]];
            }
        }
    }
    return dp.reduce((a,x) => a.length > x.length ? a : x);
}