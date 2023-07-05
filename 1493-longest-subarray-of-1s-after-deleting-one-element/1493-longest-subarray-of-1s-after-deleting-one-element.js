/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let last = 0, curr = 0, ans = 0
    for (let i = 0; i <= nums.length; i++)
        if (nums[i]) curr++
        else {
            if (last + curr > ans) ans = last + curr
            last = curr, curr = 0
        }
    return ans === nums.length ? ans - 1 : ans
};