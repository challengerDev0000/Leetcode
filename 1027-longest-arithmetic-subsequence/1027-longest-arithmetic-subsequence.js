/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(A) {
     const n = A.length;
    const dp = [];
    dp[0] = new Map();
    
    let max = 0;
    
    for (let i = 1; i < n; i++) {
        const newMap = new Map();
        
        for (let j = 0; j < i; j++) {
            const diff = A[i] - A[j];
            const prevMap = dp[j];
            
            const len = (prevMap.get(diff) || 1) + 1;
      
            newMap.set(diff, len);
      
            max = Math.max(max, newMap.get(diff));
        }
        
        dp[i] = newMap;
    }
    
    return max;
};