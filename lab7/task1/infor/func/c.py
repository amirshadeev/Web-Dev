# Функция XOR
def Xor(x, y):
    return (x and not y) or (not x and y)

# Основная часть программы
x, y = map(int, input().split())

# Преобразуем 0/1 в bool
x = bool(x)
y = bool(y)

# Вывод результата как 0 или 1
print(int(Xor(x, y)))