N = int(input())

x = N
while x % 2 == 0:
    x //= 2

if x == 1:
    print("YES")
else:
    print("NO")