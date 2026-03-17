from models import Dog, Cat

dog = Dog("Buddy", 3, "Dog", "Labrador")
cat = Cat("Whiskers", 2, "Cat", "White")

animals = [dog, cat]

for animal in animals:
    print(animal)
    print(animal.speak())
    animal.eat()
    animal.sleep()