var romanToInt = function(s) {
    const symbolMap = {
        "I": [0, 1],
        "V": [1, 5],
        "X": [2, 10],
        "L": [3, 50],
        "C": [4, 100],
        "D": [5, 500],
        "M": [6, 1000]
    }
    let position = 0
    let value = 0
    for (let symbol of s.split("").reverse()) {
        if (symbolMap[symbol][0] < position) {
            
            value -= symbolMap[symbol][1]
        } else {
            value += symbolMap[symbol][1]
            position = symbolMap[symbol][0]
        }
    }
    return value
};



console.log(romanToInt("III")) // 3
console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("MCMXCIV")) // 1994