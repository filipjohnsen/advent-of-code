file = open("input.txt", "r")

maxCalories = [0, 0, 0]
tempTotalCalories = 0
for line in file:
    if line.strip() == "":
        minMaxCalories = min(maxCalories)
        maxCalories[maxCalories.index(minMaxCalories)] = max(tempTotalCalories, minMaxCalories)
        tempTotalCalories = 0
        continue
    tempTotalCalories += int(line.strip())

print(sum(maxCalories))
file.close()
