/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    let result = 0;

  const mincomp = (a, b) => (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
  const left = new MinPriorityQueue({ compare: mincomp });
  const right = new MinPriorityQueue({ compare: mincomp });

  let l = 0;
  while (l < candidates && l < costs.length) {
    left.enqueue([costs[l], l]);
    ++l;
  }

  let r = costs.length - 1;
  while (l <= r && costs.length - candidates <= r) {
    right.enqueue([costs[r], r]);
    --r;
  }

  while (0 < k) {
    const lf = left.front();
    const rf = right.front();
    if (rf == null || (lf != null && lf[0] <= rf[0])) {
      // take left
      result += lf[0];
      left.dequeue();
      if (l <= r) {
        left.enqueue([costs[l], l]);
        ++l;
      }
    } else {
      // take right
      result += rf[0];
      right.dequeue();
      if (l <= r) {
        right.enqueue([costs[r], r]);
        --r;
      }
    }

    --k;
  }

  return result;
    
};