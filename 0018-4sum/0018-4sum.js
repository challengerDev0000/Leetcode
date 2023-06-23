/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b);

    let n = nums.length;

    let ans = [];

    let set = new Set();

    for(let i=0;i+3<n;i++){

        for(let j=i+1;j<n;j++){

          let start = j+1;

          let sum = nums[i]+nums[j];

          let end = n-1;

          while(start<end){

              if(nums[start]+nums[end]===target-sum){

                  let key = `${nums[i]} , ${nums[j]} , ${nums[start]} , ${nums[end]}`;

                  if(!set.has(key)){
                      ans.push([nums[i] , nums[j] , nums[start] , nums[end]]);
                      set.add(key);
                  }
                  
                  start++;
                  end--;
              }

              else if(nums[start]+nums[end]<=target-sum){
                  start++;
              }

              else end--;
          }

        }

    }

    return ans;
};