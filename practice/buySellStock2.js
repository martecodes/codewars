// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

const maxProfit = (prices) => {
    let profit = 0 //holds profit
    
    // [7,1,5,3,6,4]
    for(let i = 0;i < prices.length - 1;i++){
        let tempProfit = prices[i + 1] - prices[i] // 5 - 1 = 4
        
        if(tempProfit > 0){
            profit += tempProfit
        }
    }
    
    return profit
};