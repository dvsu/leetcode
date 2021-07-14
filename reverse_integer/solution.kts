import kotlin.math.*

class Solution {
    fun reverse(x: Int): Int {
        var result = abs(x.toLong()).toString().reversed().toLong() * x.sign
        
        if ((result > 2.toDouble().pow(31) - 1) || (result < -(2.toDouble().pow(31))) || (result == 0.toLong())) {
            return 0
        } else {
            return result.toInt()
        }
    }
}

println(Solution().reverse(120))  // 21
println(Solution().reverse(123))  // 321
println(Solution().reverse(-123))  // -321
println(Solution().reverse(0))  // 0
println(Solution().reverse(1534236469))  // 0
println(Solution().reverse(-2147483648)) // 0