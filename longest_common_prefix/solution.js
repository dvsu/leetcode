var longestCommonPrefix = function(strs) {
    let result = ""
    for (let [order, char] of strs[0].split("").entries()) {
        for (let word of strs) {
            try {
                if (char !== word[order]) {
                    return result
                }
            } catch {
                return result
            }
        }
        result += char
    }
    return result
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])) // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])) // ""