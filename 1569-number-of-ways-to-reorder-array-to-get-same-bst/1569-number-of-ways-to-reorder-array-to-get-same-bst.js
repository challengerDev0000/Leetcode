var numOfWays = function(nums) {
    const x = numOfWaysHelper(nums) - 1n;
    return x % 1_000_000_007n;
}
var numOfWaysHelper = function(nums) {
    if(nums.length < 3)
        return 1n;
    
    const root  = nums[0];
    const left  = nums.filter(p => p < root);
    const right = nums.filter(p => p > root);
    return BigInt(comb(left.length + right.length, left.length) * numOfWaysHelper(left) * numOfWaysHelper(right));
};

function comb(n, k){
    n = BigInt(n);
    k = BigInt(k);
    if(n < 2)
        return 1n;
    return fact(n)/fact(n-k)/fact(k);
}

const factCache = new Map();

function fact(n){
    if(n<2)
        return 1n;
    if(factCache.has(n))
        return factCache.get(n);
    
    var result = BigInt(n) * fact(n - 1n);
    factCache.set(n, result);
    return result;
}