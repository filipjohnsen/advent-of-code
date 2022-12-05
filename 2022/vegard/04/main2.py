file = open("input.txt", "r")

total = 0
for line in file:
    elf1, elf2 = line.strip().split(",")
    elf1 = [int(n) for n in elf1.split("-")]
    elf2 = [int(n) for n in elf2.split("-")]
    numbers1 = list(range(elf1[0], elf1[1]+1))
    numbers2 = list(range(elf2[0], elf2[1]+1))
    total += int(any([number//number for number in numbers1 if numbers2.count(number) > 0]))

print(total)