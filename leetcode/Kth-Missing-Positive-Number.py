
def indKthPositive(arr:list ,k:int) -> int:
    for i in range(0,len(arr)):
        print(i)
        for j in range(i-1,i+1):
            print(f"this j {j}")


indKthPositive([2,3,4,7,11],5)