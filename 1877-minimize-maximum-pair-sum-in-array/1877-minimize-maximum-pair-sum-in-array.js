/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let left = 0, right = nums.length - 1;
    let maxPairSum = 0;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum > maxPairSum) {
            maxPairSum = sum;
        }
        left++;
        right--;
    }
    return maxPairSum;
};