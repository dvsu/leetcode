# https://leetcode.com/problems/longest-substring-without-repeating-characters/

class Solution:

    max_len = 0

    def update_max_len(self, cur_len: int) -> None:
        if cur_len > self.max_len:
            self.max_len = cur_len

    def lengthOfLongestSubstring(self, s: str) -> int:
        self.max_len = 0
        length = len(s)

        if length == 1:
            return 1

        for i in range(length):
            for j in range(i+1, length):
                if s[j] in s[i:j]:
                    self.update_max_len(j-i)
                    break
                if j == length - 1:
                    self.update_max_len(length-i)
                    continue

        return self.max_len


solution = Solution()

print(solution.lengthOfLongestSubstring("amazing"))  # 6 mazing
print(solution.lengthOfLongestSubstring("atlantis"))  # 6 lantis
print(solution.lengthOfLongestSubstring("cambridge"))  # 9 cambridge
print(solution.lengthOfLongestSubstring("bbbbb"))  # 1 b
print(solution.lengthOfLongestSubstring("abcabcbb"))  # 3 abc
print(solution.lengthOfLongestSubstring("pwwkew"))  # 3 wke
print(solution.lengthOfLongestSubstring("dvdf"))  # 3 vdf
print(solution.lengthOfLongestSubstring(" "))  # 1 " "
