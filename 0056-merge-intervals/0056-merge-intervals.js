/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
  
      // Initialize the result array with the first interval
      const result = [intervals[0]];

      // Loop through the remaining intervals
      for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastResultInterval = result[result.length - 1];

        // Check if the current interval overlaps with the last interval in the result array
        if (currentInterval[0] <= lastResultInterval[1]) {
          // Merge the intervals by updating the end time of the last interval in the result array
          lastResultInterval[1] = Math.max(lastResultInterval[1], currentInterval[1]);
        } else {
          // Add the current interval to the result array
          result.push(currentInterval);
        }
      }

      return result;
};