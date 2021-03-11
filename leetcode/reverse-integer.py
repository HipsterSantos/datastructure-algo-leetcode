class Solution:
    def reverse(self, x: int) -> int:
        ln="-"
        if str(x)[0] == '-':
            sr = (str(x)[::-1])
            sr =sr.replace('-','')
            ln= ln+sr
            print(ln)
            return ln
        else:
            return int(str(x)[::-1])


"""
Test cases
123
-123
120
0

"""

Python Solution:
    def rever(x):
    res = -int(f'{x}'[:0:-1]) if x < 0 else int(f'{x}'[::-1])
    return res if -2**31 <= res <= 2**31-1 else 0

Python Solution:
    class Solution:
    def reverse(self, x: int) -> int:
        if x >= 0 and x <= 9:
            return x
        if x < 0 :
            y = self.helper(x*-1)*-1
        else :
            y = self.helper(x)
        if y <= (-2**31) or y >= (2**31)-1 :
            return 0
        else :
            return y


    def helper(self,x) :
        y = ''
        while x//10 != 0 :
            y += str(x%10)
            x = x//10
            if x < 10 :
                y += str(x)
        return int(y)
