/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
    const getCost = x => {
        return nums.reduce((tot, num, i) => (
            tot + Math.abs(num - x) * cost[i]
        ), 0);
    }

    let l = Math.min(...nums), r = Math.max(...nums);
    let ans = getCost(l);

    while (l < r) {
        let mid = (l + r) >> 1;
        let y1 = getCost(mid), y2 = getCost(mid+1);
        ans = Math.min(y1, y2);
        y1 < y2 ? r = mid : l = mid+1;
    }

    return ans;
};