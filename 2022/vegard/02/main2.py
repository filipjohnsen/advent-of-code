file = open("input.txt", "r")

rank = ["A", "B", "C"]
translate = {"X": "A", "Y": "B", "Z": "C"}

totalPoints = 0
for line in file:
    antI = rank.index(line[0])
    proI = rank.index(translate[line[2]])

    if proI == 0:
        proI = (antI - 1) % 3
    elif proI == 1:
        proI = antI
    elif proI == 2:
        proI = (antI + 1) % 3

    totalPoints += proI+1
    if (antI + 1) % 3 == proI:
        totalPoints += 6
    if (antI == proI):
        totalPoints += 3

print(totalPoints)
