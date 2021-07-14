package main

import (
	"fmt"
	"strconv"
)

func isPalindrome(x int) bool {
	strArr := strconv.Itoa(x)
	for s, e := 0, len(strArr)-1; s < e; s, e = s+1, e-1 {
		if strArr[s] != strArr[e] {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(isPalindrome(-121)) // false
	fmt.Println(isPalindrome(121))  // true
	fmt.Println(isPalindrome(123))  // false
}
