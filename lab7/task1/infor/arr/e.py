# Считываем количество элементов
n = int(input())

# Считываем массив
arr = list(map(int, input().split()))

# Флаг для проверки
found = False

# Проходим по парам соседних элементов
for i in range(1, n):
    if arr[i] * arr[i-1] > 0:  # произведение > 0 → одинаковые знаки
        found = True
        break

# Выводим результат
print("YES" if found else "NO")