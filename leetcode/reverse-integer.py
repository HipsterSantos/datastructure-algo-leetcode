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
