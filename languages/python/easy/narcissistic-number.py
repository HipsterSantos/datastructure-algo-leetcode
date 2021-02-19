# Given an integer n, return whether it is equal to the sum of its own digits raised
# to the power of the number of digits.

class Solution:
    def solve(self,x):
        arr = list(x)
        sum =0
        for a in arr:
            sum  += a ** len(arr)
        return sum

class Solution2:
    def solve(self, x):
        arr = list(str(x))
        sum =len(arr)-len(arr)
        for a in arr:
            sum  += int(a)**len(arr)
        return int(sum) is x
