"""Single bit """
bits = [0,1]
def solution(bits):
   if len(bits) == 1 :
       if bits[0] == 0:
           return True
       else: return False
   elif len(bits)>1 or len(bits)%2 == 0:
       if bits[len(bits)-1] == 0 and bits[len(bits)-2] ==0 :
           return True
       else: return False

print(solution(bits))
# print(f"{len(bits)} and {len(bits)-1}")
