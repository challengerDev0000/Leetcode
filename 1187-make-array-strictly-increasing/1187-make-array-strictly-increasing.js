/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
    arr2.sort((a, b) => a - b);
    const binarySearch = (arr, target) => {
        let l = 0, r = arr.length, mid;
        while (l < r) {
            mid = (l + r) >> 1;
            arr[mid] > target ? r = mid : l = ++mid;
        }
        return l;
    }
    const dfs = (i, prev) => {
        if (i >= arr1.length) return 0;
        let key = `${i},${prev}`;
        if (key in memo) return memo[key];
        let j = binarySearch(arr2, prev);
        let swap = j < arr2.length ? 1 + dfs(i+1, arr2[j]) : Infinity;
        let noSwap = arr1[i] > prev ? dfs(i+1, arr1[i]) : Infinity;
        return memo[key] = Math.min(swap, noSwap);
    }
    const memo = {};
    const changes = dfs(0, -Infinity);
    return changes === Infinity ? -1 : changes;
};