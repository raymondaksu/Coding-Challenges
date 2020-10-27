number = int(input('Please insert a number which lower than 3999: '))


def convert_to_roman(num):
    val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
    ]
    codes = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ]
    roman_num = ''
    i = 0
    while num > 0:
        for a in range(num // val[i]):
            roman_num += codes[i]
            num -= val[i]
        i += 1
    return print(roman_num)

convert_to_roman(number)
