
class Solution {
    fun romanToInt(s: String): Int {
        val symbolMap: Map<String, IntArray> = mapOf(
            "I" to intArrayOf(0, 1),
            "V" to intArrayOf(1, 5),
            "X" to intArrayOf(2, 10),
            "L" to intArrayOf(3, 50),
            "C" to intArrayOf(4, 100),
            "D" to intArrayOf(5, 500),
            "M" to intArrayOf(6, 1000))

        var position: Int = 0
	    var value: Int = 0
	    for (symbol in s.reversed()) {
             if (symbolMap.get(symbol.toString())!![0] < position) {
                 value -= symbolMap.get(symbol.toString())!![1]
             } else {
                 value += symbolMap.get(symbol.toString())!![1]
                 position = symbolMap.get(symbol.toString())!![0]
             }
	    }
	    return value
    }
}

println(Solution().romanToInt("III")) // 3
println(Solution().romanToInt("LVIII")) // 58
println(Solution().romanToInt("MCMXCIV")) // 1994
println(Solution().romanToInt("DCXXI")) // 621