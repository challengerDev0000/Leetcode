/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    stringAsObj = {};
    
    //Typical object key value pairs hashmap
    for(let item of s){
        if(!stringAsObj[item])
            stringAsObj[item] = 0;
        stringAsObj[item]++;
    }
    //Cool, we are able to sort values of an object in javascript with object keys getting the list of index/key and sort based on that b - a => descending order
    let sortedString = Object.keys(stringAsObj).sort(function(a,b){ return stringAsObj[b] -        stringAsObj[a]})
    
    let result = "";
    for(let item of sortedString){
        // repeat is a method where you input the number of occurrence. We just concatenate to result
        result = result + item.repeat(stringAsObj[item])
    }
   
    return result;
};