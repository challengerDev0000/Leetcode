class Solution(object):
    def maximumWealth(self, accounts):
        max_wealth = 0
        for customer in accounts:
            wealth = sum(customer)
            max_wealth = max(max_wealth, wealth)
        return max_wealth
        