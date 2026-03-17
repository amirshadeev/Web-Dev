# Считываем количество элементов
n = int(input())

# Считываем сам массив
arr = list(map(int, input().split()))
count = 0
for num in arr:
    if num > 0:
        count += 1

# Выводим результат
print(count)