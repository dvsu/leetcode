class Solution {
    fun longestCommonPrefix(strs: Array<String>): String {
        val checker: String = strs[0]
        var result: String = ""
        for ((index, char) in checker.withIndex()) {
            for(word in strs) {
                try {
                    if (word[index] != char) {
                        return result
                    }
                } catch(e: IndexOutOfBoundsException) {
                    return result
                }
            }
            result += char
        }
        return result
    }
}


println(Solution().longestCommonPrefix(arrayOf("flower", "flow", "flight"))) // "fl"
println(Solution().longestCommonPrefix(arrayOf("dog", "racecar", "car"))) // ""