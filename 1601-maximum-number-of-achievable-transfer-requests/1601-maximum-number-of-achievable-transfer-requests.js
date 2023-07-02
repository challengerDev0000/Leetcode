/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
     let max_ = 0   
    const k = Array(n).fill(0)

    const findMax = (i, cnt) => {
        if (max_ >= cnt + requests.length - i) {
            return
        }
        if (i === requests.length) {
            if (max_ < cnt && !k.some(x => x))
                max_ = cnt
            return
        }
        
        --k[requests[i][0]]
        ++k[requests[i][1]]
        findMax(i + 1, cnt + 1)
        
        ++k[requests[i][0]]
        --k[requests[i][1]]
        findMax(i + 1, cnt)
    }

    findMax(0, 0)
    return max_
};