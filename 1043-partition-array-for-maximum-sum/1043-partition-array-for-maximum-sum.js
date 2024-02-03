/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(A, K) {   
    let maxValues = Array(A.length).fill(0);
    findPartitions(A, K, 0, maxValues);
    return maxValues[0];
};

function findPartitions(A, K, index, maxValues) {
    if (index >= A.length) {
        return 0;
    }
    
    if (maxValues[index] != 0) {
        return maxValues[index];
    }
    
    let max = -Infinity;
    let sum = 0;
    for(let i = 1; i <= K; i++) {
        if (index + i <= A.length) {
            const subArray = A.slice(index, index + i);
            let subMax = -Infinity;
            for(let j = 0; j < subArray.length; j++) {
                subMax = Math.max(subMax, subArray[j]);
            }
            sum = (subMax * i) + findPartitions(A, K, index + i, maxValues);
            max = Math.max(max, sum);    
        }        
    }
    maxValues[index] = max;
    return maxValues[index];
}