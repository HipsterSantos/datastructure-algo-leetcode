 # Given a string, reverse all of its characters and return the resulting string.

“Cat”, return “taC”
“The Daily Byte”, return "etyB yliaD ehT”
“civic”, return “civic”

class Solution:
    def __init__(self):
        pass
    def reverseS(self,s:str)-> str:
        strr = ""
        for l in s:
            print(s[::-1])
c = Solution()
c.reverseS("civic")
