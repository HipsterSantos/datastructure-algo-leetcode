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
