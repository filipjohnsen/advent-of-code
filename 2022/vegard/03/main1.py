file = open("input.txt", "r")

alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

totalScore = 0
for line in file:
    totalScore += sum([alphabet.index(letter)+1 for letter in list(dict.fromkeys(line[:len(line.strip())//2].strip())) if list(dict.fromkeys(line[len(line.strip())//2:].strip())).count(letter) > 0])

print(totalScore)