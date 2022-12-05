file = open("./01/input.txt", "r")

maxCalories = 0
tempTotalCalories = 0
for line in file:
    if line.strip() == "":
        maxCalories = max(tempTotalCalories, maxCalories)
        tempTotalCalories = 0
        continue
    tempTotalCalories += int(line.strip())

print(maxCalories)
file.close()
