file = open("input.txt", "r")

total = 0
for line in file:
    elf1, elf2 = line.strip().split(",")
    elf1 = elf1.split("-")
    elf2 = elf2.split("-")
    total += int((int(elf1[0]) >= int(elf2[0]) and int(elf1[1]) <= int(elf2[1]) or (int(elf2[0]) >= int(elf1[0]) and int(elf2[1]) <= int(elf1[1]))))

print(total)