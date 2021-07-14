class Solution:
    def reverse(self, x: int) -> int:
        sign = -1 if x < 0 else 1
        result = int(str(abs(x))[::-1]) * sign

        if (result > (2**31 - 1)) or (result < -(2**31)) or (result == 0):
            return 0
        else:
            return result


print(Solution().reverse(120))  # 21
print(Solution().reverse(123))  # 321
print(Solution().reverse(-123))  # -321
print(Solution().reverse(0))  # 0
print(Solution().reverse(1534236469))  # 0
