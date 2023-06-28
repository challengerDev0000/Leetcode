/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const m = grid.length;
  const n = grid[0].length;
  
  // Count the number of ones and zeros in each row and each column
  const onesRow = new Array(m).fill(0);
  const zerosRow = new Array(m).fill(0);
  const onesCol = new Array(n).fill(0);
  const zerosCol = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        onesRow[i]++;
        onesCol[j]++;
      } else {
        zerosRow[i]++;
        zerosCol[j]++;
      }
    }
  }

  // Compute the difference matrix
  const diff = [];
  for (let i = 0; i < m; i++) {
    diff[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
    }
  }

  return diff;
};