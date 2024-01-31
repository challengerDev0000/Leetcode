/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function(temperatures) {
    const len = temperatures.length;
    const ret = new Array(len).fill(0);
    const stack = [];
    
    for (let i = 0; i < len; i += 1) {
        while (stack.length && temperatures.at(stack.at(-1)) < temperatures.at(i)) {
            const current = stack.pop();
            ret[current] = i - current;
        }
            
        
        stack.push(i);
    }
    
    return ret;
};