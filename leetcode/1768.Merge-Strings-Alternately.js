You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the me
var mergeAlternately = function(word1, word2) {
     var odl="";
    var arr1 = word1.split(''),arr2= word2.split('');
    if(word1>word2){
       for(let el = 0,len = word1.length-1;el< len;el++){
        old += arr1.shift()

        for(let i =0;i<=el;i++){
            old+= arr2.shift()
        }
    }
        }
    else{
        for(let el = 0,len = word2.length-1;el< len;el++){
             old+= arr1.shift();

        for(let i =0;i<=el;i++){
            old+=arr2.shift()
        }
    }
    }
    return old;

};

class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        arr1 = list(word1)
        arr2 = list(word2)
        newer = ""
        for a in range(0,len(arr1)): 
            newer+=arr1[a]
            for l in range(0,a):
                newer+=arr2[l]
        return newer
