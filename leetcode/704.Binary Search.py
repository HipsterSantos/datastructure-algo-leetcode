def search( nums, target):
        for i in range(0,len(nums)):
            if nums[i] == target:
                return i
        return -1

print(search([-1,0,3,5,9,12],9))

"""Done"""