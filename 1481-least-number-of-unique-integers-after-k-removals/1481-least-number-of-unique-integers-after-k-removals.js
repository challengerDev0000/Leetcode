/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let dup = {},u=0
    for(let i=0;i<arr.length;i++){
        if(!dup[arr[i]]){
            dup[arr[i]] = 0
            u++
        }
        dup[arr[i]]++
    }
    let countes = Object.entries(dup).sort((a,b)=>{return a[1]-b[1]})
    for(let i=0;i<countes.length;i++){
        if(k >= countes[i][1]){
            k=k-countes[i][1]
            u--
        }else{
            break;
        }
    }
    return u
};