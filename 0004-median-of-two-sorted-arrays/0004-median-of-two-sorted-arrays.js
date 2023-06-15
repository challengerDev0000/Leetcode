/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [...nums1, ...nums2];
    merged.sort((a, b) => a - b);
    const len = merged.length;
      const mid = Math.floor(len / 2);

      if (len % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
      } else {
        return merged[mid];
      }
};