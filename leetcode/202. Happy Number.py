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

class Solution:
    def solve(self,n):
        sum =0
        digit = 0
        while n != 1:
            digit = n//10
            digit = digit **2
            sum += digit
            n = sum
        print(digit)
        print(sum)
        return True
