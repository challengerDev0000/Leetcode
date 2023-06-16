/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
     var sumMatrix = [],sum,hash={},counterPart,ans=0,prefixSum=0;
    //Do rowwise sum
    for(let i=0;i<matrix.length;i++){
        sum=0;
        for(let j=0;j<matrix[i].length;j++){
            sum+=matrix[i][j];
            if(sumMatrix[i]===undefined){
                sumMatrix[i]=[];
            }
            sumMatrix[i][j]=sum;
        }
    }
    
    //Do columnwise sum
    for(let j=0;j<matrix[0].length;j++){
        sum=0;
        for(let i=0;i<matrix.length;i++){
            sum+=sumMatrix[i][j];
            if(sumMatrix[i]===undefined){
                sumMatrix[i]=[];
            }
            sumMatrix[i][j]=sum;
        }
    }
    //Check all submatrices one by one 
    for(let i1=0;i1<sumMatrix.length;i1++){
        for(let i2=i1;i2<sumMatrix.length;i2++){
            hash={};
            hash[0]=1;
            for(let j=0;j<sumMatrix[i1].length;j++){
                if(i1>0){
                    prefixSum = sumMatrix[i2][j]-sumMatrix[i1-1][j];
                }else{
                    prefixSum = sumMatrix[i2][j];
                }
                counterPart = prefixSum-target;
                if(hash[counterPart]!==undefined){
                    ans+=hash[counterPart];
                }
                if(hash[prefixSum]===undefined){
                    hash[prefixSum]=1
                }else{
                    hash[prefixSum]++;
                }
            }
        }
    }
    return ans;
};