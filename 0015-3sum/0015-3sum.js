/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates
        const hash = {};
        for (let j = i + 1; j < nums.length; j++) {
            const complement = -nums[i] - nums[j];
            if (hash[complement] !== undefined) {
                result.push([nums[i], nums[j], complement]);
                while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++; // Skip duplicates
            } else {
                hash[nums[j]] = j;
            }
        }
    }
    return result;
};