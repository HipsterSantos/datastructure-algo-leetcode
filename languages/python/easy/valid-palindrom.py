# This question is asked by Facebook. Given a string,
# return whether or not it forms a palindrome ignoring case and non-alphabetical characters.

"level", return true
"algorithm", return false
"A man, a plan, a canal: Panama.", return true

class Solution:
    def __init__(self):
        pass
    def isPalindrome(self,s:str):
        word = ""
        for a in s:
            word = s[::-1]
        if s == word:
            return  True
        return False
