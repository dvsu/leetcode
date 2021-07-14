var isPalindrome = function(x) {
    let arrStr = x.toString()
    for (i=0; i<Math.ceil(arrStr.length / 2); i++) {
        if (arrStr[i] !== arrStr[arrStr.length - 1 - i]) {
            return false
        }
    }
    return true
};


console.log(isPalindrome(-121))  // false
console.log(isPalindrome(121))  // true
console.log(isPalindrome(123))  // false
