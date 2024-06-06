// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a 
// different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. Cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104


/**
 * @param {number[]} prices
 * @return {number}
 */
// const bestTimeStocks = (prices) => {
//     if(prices.length === 0) return 0;

//     let bestPrice = 0;

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             const profit = prices[j] - prices[i];
//             if (profit > bestPrice) {
//                 bestPrice = profit;
//             }
//         }
//     }

//     return bestPrice;
// }

console.log("Brute -")
console.log(bestTimeStocks([7,1,5,3,6,4])); // 5
console.log(bestTimeStocks([7,6,4,3,1])); // 0


const bestTimeStocks = (prices) => {
    if (prices.length === 0) return 0;

    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
};

console.log("Optimized -")
console.log(bestTimeStocks([7,1,5,3,6,4])); // 5
console.log(bestTimeStocks([7,6,4,3,1])); // 0