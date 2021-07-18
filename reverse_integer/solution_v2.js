var reverse = function(x) {
    let sign = x < 0 ? -1 : 1
    let result = parseInt(Math.abs(x).toString().split("").reduce((reversed, char) => char + reversed, "")) * sign
    if ((result > (2**31 - 1)) || (result < -(2**31)) || (result == 0)) {
        return 0
    } else {
        return result
    }
};

console.log(reverse(120))  // 21
console.log(reverse(123))  // 321
console.log(reverse(-123))  // -321
console.log(reverse(0))  // 0
console.log(reverse(1534236469))  // 0
