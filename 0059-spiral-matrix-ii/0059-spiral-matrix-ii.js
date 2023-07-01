/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
     const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  let counter = 1;

  while (left <= right && top <= bottom) {
    // Fill the top row
    for (let i = left; i <= right; i++) {
      matrix[top][i] = counter++;
    }
    top++;

    // Fill the right column
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = counter++;
    }
    right--;

    // Fill the bottom row
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = counter++;
    }
    bottom--;

    // Fill the left column
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = counter++;
    }
    left++;
  }

  return matrix;
};