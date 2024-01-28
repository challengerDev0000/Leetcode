/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);

  let f = Array(n + 1).fill(1);
  for (let i = 1; i <= n; i++) f[i] = i * f[i - 1];

  let s = "";
  while (n) {
    let index = Math.ceil(k / f[n - 1]) - 1;
    s += arr.splice(index, 1);
    k = k % f[n - 1] || f[n - 1];
    n--;
  }
  return s;
};