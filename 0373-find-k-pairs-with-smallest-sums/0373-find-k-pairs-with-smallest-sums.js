/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let temp = Array(nums1.length).fill(0);
	  let re = [];
	  let getRe = function () {
		let t = Infinity;
		for (let i = 0; i < nums1.length; i++) {
		  if (temp[i] < nums2.length && t > (nums1[i] + nums2[temp[i]])) {
			t = nums1[i] + nums2[temp[i]];
		  }
		}
		if (t == Infinity || re.length >= k) {
		  return;
		} else {
		  for (let i = 0; i < nums1.length; i++) {
			if (temp[i] < nums2.length && t == (nums1[i] + nums2[temp[i]])) {
			  re.push(Array.of(nums1[i], nums2[temp[i]]));
			  temp[i]++;
			}
		  }
		  getRe();
		}
	  }
	  getRe();
	  return re.slice(0, k);
};