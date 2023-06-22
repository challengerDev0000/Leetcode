/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let profit = 0;
  let buy = prices[0] + fee;
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] + fee < buy) {
      buy = prices[i] + fee;
    } else if (prices[i] > buy) {
      profit += prices[i] - buy;
      buy = prices[i];
    }
  }
  
  return profit;
};