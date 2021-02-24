def sockMerchant(n, ar):
    ac = 0
    co = 0
    for i in range(0,n):
        for c in range(i,n):
            if ar[i] == ar[c]:
                co = co+1
                print(ar[i])
            else:
                ac = co//2

                break
    # return ac
    print(ac)
print(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]))
