#python3 Python/script.py

print("I will spell your name")
first_name = input("Enter your first name: ")
last_name = input("Enter your last name: ")

print(f"Hello, {first_name} {last_name}!")

while True:
    try:
        age = int(input("Enter your age: "))
        break  # Exit the loop if input is valid
    except ValueError:
        print("Invalid input. Please enter a number.")
print(f"Your age is {age}.")

full_name = first_name + last_name 
for char in full_name:
    print(char)