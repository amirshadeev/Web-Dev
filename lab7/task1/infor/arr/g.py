# Считываем количество элементов
n = int(input())

# Считываем массив
arr = list(map(int, input().split()))

# Меняем элементы местами без дополнительного массива
for i in range(n // 2):
    arr[i], arr[n - i - 1] = arr[n - i - 1], arr[i]

# Выводим результат
print(*arr)