import kotlin.math.ceil

class Solution {
    fun isPalindrome(x: Int): Boolean {
        val strArr = x.toString()
        for (n in 0 until ceil(strArr.length.toDouble() / 2).toInt()) {
            if (strArr[n] != strArr[strArr.length - n - 1]) {
                return false
            }
        }
        return true
    }
}

println(Solution().isPalindrome(-121)) // false
println(Solution().isPalindrome(121)) // true
println(Solution().isPalindrome(123)) // false