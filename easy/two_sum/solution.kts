import java.util.*

class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {

        var numsSorted: IntArray = nums.copyOf()
        numsSorted.sort()
        var cursorL: Int = 0
        var cursorR: Int = numsSorted.size - 1

        while(true) {
            if (numsSorted[cursorL] + numsSorted[cursorR] > target) {
                cursorR -= 1
            } else if (numsSorted[cursorL] + numsSorted[cursorR] < target) {
                cursorL += 1
            } else {
                val firstIndex: Int = nums.indexOf(numsSorted[cursorL])
                // println(nums, numsSorted, cursorL, cursorR)

                if ((numsSorted[cursorL] != numsSorted[cursorR]) || (firstIndex == nums.size - 1)) {
                    return intArrayOf(firstIndex, nums.indexOf(numsSorted[cursorR]))
                } else {
                    return intArrayOf(firstIndex, nums.indexOfLast {it == numsSorted[cursorR]})
                }
            }
        }
    }
}

println(Arrays.toString(Solution().twoSum(intArrayOf(3, 3), 6)))
println(Arrays.toString(Solution().twoSum(intArrayOf(-1, -2, -3, -4, -5), -8)))
println(Arrays.toString(Solution().twoSum(intArrayOf(-10, -1, -18, -19), -19)))
