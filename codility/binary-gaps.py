def toBin(n):
    div = n
    binary = ""
    while div >=1 :
        if div %2 ==0 :
            div = round(n /2);
            binary+="1"
        elif div % 2 != 0:
            div = round(n/2)
            binary +="0"
        if div == 1:
            binary += '0'

            break
    return binary

print(toBin(3))