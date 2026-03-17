N = int(input())

power = 1  # 2^0 = 1
k = 0

while power < N:
    power *= 2
    k += 1

print(k)