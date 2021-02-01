class Solution:
    binaryString = ""
    def base10ToString(self,n):
       self.base10ToString(n)
       return self.binaryString

    def base10T0StringHelper(self,n):
            if n < 2 :
                self.binaryString += n
            else:
                self.base10ToStringHelper(round(n/2))
                self.base10T0StringHelper(n%2)

c = Solution()
print(c.base10ToString(10))