from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_sorted = sorted(nums)
        cursor_l = 0
        cursor_r = len(nums_sorted) - 1

        while True:
            if nums_sorted[cursor_l] + nums_sorted[cursor_r] > target:
                cursor_r -= 1
            elif nums_sorted[cursor_l] + nums_sorted[cursor_r] < target:
                cursor_l += 1
            else:
                first_index = nums.index(nums_sorted[cursor_l])
                # print(nums, nums_sorted, cursor_l, cursor_r)

                if nums_sorted[cursor_l] != nums_sorted[cursor_r]:
                    return [first_index, nums.index(nums_sorted[cursor_r])]
                elif (first_index == len(nums) - 1):
                    return [first_index, nums.index(nums_sorted[cursor_r], 0, first_index)]
                else:
                    return [first_index, nums.index(nums_sorted[cursor_r], first_index+1)]


# Test edge cases
print(Solution().twoSum([-1, -2, -3, -4, -5], -8))  # [2, 4]
print(Solution().twoSum([-10, -1, -18, -19], -19))  # [1, 2]
