class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def eat(self):
        print(f"{self.name} is eating")

    def sleep(self):
        print(f"{self.name} is sleeping")

    def speak(self):
        return "Some sound"

    def __str__(self):
        return f"{self.name} ({self.species}), {self.age} years old"


class Dog(Animal):
    def __init__(self, name, age, species, breed):
        super().__init__(name, age, species)
        self.breed = breed

    def speak(self):
        return "Woof!"

    def fetch(self):
        print(f"{self.name} is fetching the ball")


class Cat(Animal):
    def __init__(self, name, age, species, color):
        super().__init__(name, age, species)
        self.color = color

    def speak(self):
        return "Meow!"

    def scratch(self):
        print(f"{self.name} is scratching")