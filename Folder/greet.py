
name = input("Whats your name: ")

def greet(name):
    name = name.lower()
    name = name.capitalize()
    return name 

print(f"Hello,{greet(name)}", f"Wow!, your name has {len(name)} letters", sep=".")

def shout (n):
    def echo (name):
        
        name = name.upper() * n

        return name
    return echo

print(name)
print (shout,2)

<<<<<<< HEAD:greet.py
#Prueba para crear una segunda rama 
=======
#Cambio en el main para probar la estatica en el codigo de 1branch y probar el comando -am
#segundo push 
#tercer push a main con el objetivo de regresar al segundo push mediante reset 
>>>>>>> eaa95ca62adef74eba7737a1573f4ef9d7d370e6:Folder/greet.py

