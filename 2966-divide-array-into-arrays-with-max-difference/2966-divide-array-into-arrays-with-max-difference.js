/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  const ans = []
  for (let i = 0; i < n; i += 3) {
    const subarr = nums.slice(i, i + 3)
    const [a, b, c] = subarr
    let diff = 0
    if (c !== undefined) {
      diff = c - a
    } else if (b !== undefined) {
      diff = b - a
    }
    if (diff > k) return []
    ans.push(subarr)
  }
  return ans
}