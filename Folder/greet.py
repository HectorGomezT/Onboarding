
name = input("Name:")

def greet (name):

    name = name.lower()
    name = name.capitalize()
    return greet

print(f"Hello,{greet(name)}", f"Wow!, your name has {len(name)} letters", sep=".")

