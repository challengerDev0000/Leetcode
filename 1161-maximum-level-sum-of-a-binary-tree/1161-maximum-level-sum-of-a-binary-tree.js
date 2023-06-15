/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    let queue = [root];
      let level = 1;
      let levelSumMap = new Map();

      while (queue.length > 0) {
        let size = queue.length;
        let levelSum = 0;

        for (let i = 0; i < size; i++) {
          let node = queue.shift();
          levelSum += node.val;

          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
        }

        levelSumMap.set(level, levelSum);
        level++;
      }

      let maxSum = -Infinity;
      let maxLevel = 1;

      for (let [level, sum] of levelSumMap) {
        if (sum > maxSum) {
          maxSum = sum;
          maxLevel = level;
        }
      }

      return maxLevel;
};