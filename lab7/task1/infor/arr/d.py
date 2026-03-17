# Считываем количество элементов
n = int(input())

# Считываем массив
arr = list(map(int, input().split()))

# Счётчик элементов, больших предыдущего
count = 0

# Проходим с 1 до n-1 (второй элемент и далее)
for i in range(1, n):
    if arr[i] > arr[i-1]:
        count += 1

# Выводим результат
print(count)