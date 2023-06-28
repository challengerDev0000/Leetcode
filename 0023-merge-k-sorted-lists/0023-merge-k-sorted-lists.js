/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let arr = [];    
    function addNode(node){
        if(node != null){
            arr.push(node);
            addNode(node.next);
            node.next = null;//prevent leetcode Javascript heap out of memory
        }
    }
    lists.forEach(addNode);
    if(arr.length > 1){
        arr.sort((a,b) => a.val - b.val);        
        arr.reduce((a, b) => a.next = b);
    }   
    return arr.length != 0 ? arr[0] : null;
};