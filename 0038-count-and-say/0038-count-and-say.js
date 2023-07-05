/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let string = "1";
    
    for (let i = 1; i < n; i++) {
        
        let count = 0;
        let letter = '';
        let tempStr = '';
        
        for (let j = 0; j < string.length; j++) {
            
            count++;
            letter = string[j];
			
			// if current number is not the same as next number, store count and number into tempStr
			// do the same for the end of the string
            if (string[j] !== string[j + 1] || j === string.length-1) {
                tempStr = tempStr + count.toString() + letter.toString();    
                count = 0;
                letter = '';
            }
        }
        //console.log(tempStr)
        string = tempStr;

        
    }
    
    return string
};