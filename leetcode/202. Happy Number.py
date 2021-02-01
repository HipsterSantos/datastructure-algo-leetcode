class Solution:
    def sum_happy(self,n):
        sum = 0
        while n is not 1:
            digit = n % 10;
            sum+= digit ** 2
            n //= 10
        return True

c = Solution()
print(c.sum_happy(2) )