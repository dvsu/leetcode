from typing import List


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        result = ""
        for order, char in enumerate(strs[0]):
            for word in strs:
                try:
                    if char != word[order]:
                        return result
                except IndexError:
                    return result
            result += char

        return result


print(Solution().longestCommonPrefix(["flower", "flow", "flight"]))  # "fl"
print(Solution().longestCommonPrefix(["dog", "racecar", "car"]))  # ""
