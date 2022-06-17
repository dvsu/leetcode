# https://leetcode.com/problems/string-to-integer-atoi/

class Solution:
    def myAtoi(self, s: str) -> int:
        st = s.strip()
        if not st:
            return 0

        if not (st[0].isnumeric() or st[0] == "-" or st[0] == "+"):
            return 0

        sign = -1 if st[0] == "-" else 1
        start = 0 if st[0].isnumeric() else 1
        end = len(st)

        for i, char in enumerate(st[start:], start):
            if char.isnumeric():
                continue
            end = i
            break

        if not st[start:end].isnumeric():
            return 0

        val = int(st[start:end]) * sign

        if val < -2**31:
            return -2**31

        if val > 2**31 - 1:
            return 2**31 - 1

        return val
