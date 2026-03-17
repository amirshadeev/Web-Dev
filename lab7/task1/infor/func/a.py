# Функция для нахождения минимума из четырёх чисел
def minimum(a, b, c, d):
    return min(a, b, c, d)

# Основная часть программы
a, b, c, d = map(int, input().split())
print(minimum(a, b, c, d))