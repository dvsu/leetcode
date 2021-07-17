class Solution:
    def romanToInt(self, s: str) -> int:
        symbol_map = {
            "I": (0, 1),
            "V": (1, 5),
            "X": (2, 10),
            "L": (3, 50),
            "C": (4, 100),
            "D": (5, 500),
            "M": (6, 1000)
        }

        position = 0
        value = 0
        for symbol in reversed(s):
            if symbol_map[symbol][0] < position:
                value -= symbol_map[symbol][1]
            else:
                value += symbol_map[symbol][1]
                position = symbol_map[symbol][0]

        return value


print(Solution().romanToInt("III"))  # 3
print(Solution().romanToInt("LVIII"))  # 58
print(Solution().romanToInt("MCMXCIV"))  # 1994
