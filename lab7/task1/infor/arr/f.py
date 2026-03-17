# Считываем количество элементов
n = int(input())

# Считываем массив
arr = list(map(int, input().split()))

# Счётчик
count = 0

# Проходим по элементам, у которых есть два соседа
for i in range(1, n-1):
    if arr[i] > arr[i-1] and arr[i] > arr[i+1]:
        count += 1

# Выводим результат
print(count)