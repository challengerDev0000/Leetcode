/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function(row, col, cells) {
    let start = 0
    let end = cells.length-1
    
    let ans = 0
    
    while(start <= end) {
        let mid = Math.floor((start+end)/2)
        
        let mat = []
        for(let i = 0; i < row; i++) {
            mat.push(new Array(col).fill(0))
        }
        
        for(let i = 0; i < mid; i++) {
            let [a, b] = cells[i]
            mat[a-1][b-1] = 1              // since array is 1-indexed so its -1 correction
        }
        let pathFound = searchPath(mat)
        if(pathFound) {                       // if path is found we will go even further
            ans = Math.max(ans, mid-1)
            start = mid+1
        } else {
            end = mid - 1
        }
    }
    
    return ans+1      // since required answer needs to be 1 indexed so add 1
};



let searchPath = (mat) => {
    let seen = new Set([])
    for(let i = 0; i < mat[0].length; i++) {
        if(!seen.has(`0 ${i}`) && mat[0][i] === 0) {
            let res = bfs(mat, i, seen)
            if(res) return true
        }
    }
    
    return false
}

let bfs = (mat, index, seen) => {
    let node = {i: 0, j: index}
    
    seen.add(`${node.i} ${node.j}`)
    
    let nodes = [node]
    
    while(nodes.length) {
        let childs = []
        for(let {i, j} of nodes) {
            if(i > 0 && mat[i-1][j] === 0 && !seen.has(`${i-1} ${j}`)) {
                childs.push({i: i-1, j: j})
                seen.add(`${i-1} ${j}`)
            }
            
            if(i < mat.length-1 && mat[i+1][j] === 0 && !seen.has(`${i+1} ${j}`)) {
                childs.push({i: i+1, j: j})
                seen.add(`${i+1} ${j}`)
                if(i+1 === mat.length-1) return true       // it means we reached the last row so return true
            }
            
            if(j > 0 && mat[i][j-1] === 0 && !seen.has(`${i} ${j-1}`)) {
                childs.push({i: i, j: j-1})
                seen.add(`${i} ${j-1}`)
            }
            
            if(j < mat[0].length-1 && mat[i][j+1] === 0 && !seen.has(`${i} ${j+1}`)) {
                childs.push({i: i, j: j+1})
                seen.add(`${i} ${j+1}`)
            }
        }
        
        nodes = [...childs]
    }
    
    return false          // since we have failed to get to last row so far
}