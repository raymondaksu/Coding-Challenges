def fibo (x):
    sum = 0
    for i in range(x+1):
        if i == 0:
            sum = 0
        elif i == 1 or i == 2:
            sum = 1
        else:
            sum = fibo(x-1) + fibo(x-2)
    return sum

print(fibo(7))
