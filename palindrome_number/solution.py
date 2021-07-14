import math

class Solution:
    def isPalindrome(self, x: int) -> bool:
        arr_str = str(x)
        for i in range(math.ceil(len(arr_str)/2)):
            if arr_str[i] != arr_str[-(i+1)]:
                return False
        return True


print(Solution().isPalindrome(-121))  # False
print(Solution().isPalindrome(121))  # True
print(Solution().isPalindrome(123))  # False
