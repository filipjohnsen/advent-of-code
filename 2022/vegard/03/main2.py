file = open("input.txt", "r")

alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

totalScore = 0
lines = []
for line in file:
    lines.append(line)
    if len(lines)%3 == 0:
        totalScore += sum([alphabet.index(letter)+1 for letter in list(dict.fromkeys(lines[-1].strip())) if list(dict.fromkeys(lines[-2].strip())).count(letter) > 0 and list(dict.fromkeys(lines[-3].strip())).count(letter) > 0])

print(totalScore)